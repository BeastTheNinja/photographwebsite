import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';
import type { BookingFormData } from '@/app/(root)/component/booking/types';

const photographerEmail = 'dinfotografannika@gmail.com';
const rateLimitStore = new Map<string, { count: number; resetAt: number }>();

function getClientIp(request: Request) {
    const forwardedFor = request.headers.get('x-forwarded-for');
    const realIp = request.headers.get('x-real-ip');
    const ip = forwardedFor?.split(',')[0]?.trim() || realIp?.trim() || 'unknown';
    return ip;
}

function isRateLimited(ip: string) {
    const limit = Number(process.env.BOOKING_RATE_LIMIT_MAX ?? 5);
    const windowMs = Number(process.env.BOOKING_RATE_LIMIT_WINDOW_MS ?? 10 * 60 * 1000);

    if (!Number.isFinite(limit) || !Number.isFinite(windowMs) || limit <= 0 || windowMs <= 0) {
        return false;
    }

    const now = Date.now();
    const existing = rateLimitStore.get(ip);

    if (!existing || existing.resetAt <= now) {
        rateLimitStore.set(ip, { count: 1, resetAt: now + windowMs });
        return false;
    }

    if (existing.count >= limit) {
        return true;
    }

    existing.count += 1;
    rateLimitStore.set(ip, existing);
    return false;
}

function normalizeText(value: string, maxLength: number) {
    return value
        .replace(/[\u0000-\u001F\u007F]/g, ' ')
        .replace(/\s+/g, ' ')
        .trim()
        .slice(0, maxLength);
}

function normalizeMessage(value: string, maxLength: number) {
    return value
        .replace(/[\u0000\u0008\u000B\u000C\u000E-\u001F\u007F]/g, '')
        .trim()
        .slice(0, maxLength);
}

function sanitizeBookingData(formData: BookingFormData): BookingFormData {
    return {
        name: normalizeText(formData.name ?? '', 120),
        email: normalizeText(formData.email ?? '', 254).toLowerCase(),
        phone: normalizeText(formData.phone ?? '', 40),
        date: normalizeText(formData.date ?? '', 20),
        time: normalizeText(formData.time ?? '', 20),
        sessionType: normalizeText(formData.sessionType ?? '', 80),
        location: normalizeText(formData.location ?? '', 160),
        message: normalizeMessage(formData.message ?? '', 3000),
        website: normalizeText(formData.website ?? '', 200),
    };
}

function validateBookingData(formData: BookingFormData) {
    if (formData.website) {
        return 'Spam mistænkt.';
    }

    if (!formData.name || !formData.email || !formData.phone || !formData.date || !formData.time || !formData.sessionType) {
        return 'Manglende påkrævede felter.';
    }

    const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) && !/[\r\n]/.test(formData.email);
    if (!emailIsValid) {
        return 'Email er ugyldig.';
    }

    const phoneIsValid = /^[\d+()\-\s]{6,40}$/.test(formData.phone);
    if (!phoneIsValid) {
        return 'Telefonnummer er ugyldigt.';
    }

    return null;
}

function shouldPruneRateLimitStore(now: number) {
    return rateLimitStore.size > 500;
}

function pruneRateLimitStore(now: number) {
    for (const [key, value] of rateLimitStore.entries()) {
        if (value.resetAt <= now) {
            rateLimitStore.delete(key);
        }
    }
}

function getAllowedOrigins() {
    const configured = (process.env.ALLOWED_ORIGINS ?? '')
        .split(',')
        .map((origin) => origin.trim())
        .filter(Boolean);

    const primarySiteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? '').trim().replace(/\/$/, '');
    const vercelUrl = (process.env.VERCEL_URL ?? '').trim();
    const previewUrl = vercelUrl ? `https://${vercelUrl}` : '';

    return Array.from(new Set([...configured, primarySiteUrl, previewUrl, 'http://localhost:3000'].filter(Boolean)));
}

function isAllowedOrigin(origin: string | null) {
    if (!origin) {
        return true;
    }

    return getAllowedOrigins().includes(origin);
}

function getCorsHeaders(origin: string | null) {
    const headers = new Headers();

    if (origin && isAllowedOrigin(origin)) {
        headers.set('Access-Control-Allow-Origin', origin);
        headers.set('Vary', 'Origin');
    }

    headers.set('Access-Control-Allow-Methods', 'POST, OPTIONS');
    headers.set('Access-Control-Allow-Headers', 'Content-Type');

    return headers;
}

function jsonWithCors(body: unknown, init: ResponseInit, origin: string | null) {
    const response = NextResponse.json(body, init);
    const headers = getCorsHeaders(origin);

    headers.forEach((value, key) => {
        response.headers.set(key, value);
    });

    return response;
}

function createTransporter() {
    const host = (process.env.SMTP_HOST ?? '').trim();
    const port = Number(process.env.SMTP_PORT ?? 587);
    const user = (process.env.SMTP_USER ?? '').trim();
    // Google app passwords are shown grouped with spaces; strip all whitespace to avoid auth failures.
    const pass = (process.env.SMTP_PASS ?? '').replace(/\s+/g, '');

    if (!host || !user || !pass) {
        throw new Error('SMTP is not configured. Set SMTP_HOST, SMTP_PORT, SMTP_USER and SMTP_PASS.');
    }

    return nodemailer.createTransport({
        host,
        port,
        secure: process.env.SMTP_SECURE === 'true' || port === 465,
        auth: {
            user,
            pass,
        },
    });
}

function buildPhotographerMessage(formData: BookingFormData) {
    return [
        `Ny bookingforespørgsel fra ${formData.name}`,
        '',
        `Navn: ${formData.name}`,
        `Email: ${formData.email}`,
        `Telefon: ${formData.phone}`,
        `Sessionstype: ${formData.sessionType}`,
        `Dato: ${formData.date}`,
        `Tid: ${formData.time}`,
        `Lokation: ${formData.location || 'Ikke angivet'}`,
        '',
        'Besked:',
        formData.message || 'Ingen besked',
    ].join('\n');
}

function buildCustomerMessage(formData: BookingFormData) {
    return [
        `Hej ${formData.name},`,
        '',
        'Tak for din bookingforespørgsel. Jeg har modtaget dine oplysninger og vender tilbage hurtigst muligt.',
        '',
        `Sessionstype: ${formData.sessionType}`,
        `Dato: ${formData.date}`,
        `Tid: ${formData.time}`,
        `Lokation: ${formData.location || 'Ikke angivet'}`,
        '',
        'Venlig hilsen',
        'Din Fotograf Annika',
    ].join('\n');
}

export async function OPTIONS(request: Request) {
    const origin = request.headers.get('origin');

    if (origin && !isAllowedOrigin(origin)) {
        return new NextResponse(null, { status: 403 });
    }

    return new NextResponse(null, {
        status: 204,
        headers: getCorsHeaders(origin),
    });
}

export async function POST(request: Request) {
    const origin = request.headers.get('origin');
    const clientIp = getClientIp(request);

    if (origin && !isAllowedOrigin(origin)) {
        return jsonWithCors({ error: 'CORS policy blocked this origin.' }, { status: 403 }, origin);
    }

    const now = Date.now();
    if (shouldPruneRateLimitStore(now)) {
        pruneRateLimitStore(now);
    }

    if (isRateLimited(clientIp)) {
        return jsonWithCors(
            { error: 'For mange forsøg. Vent lidt og prøv igen.' },
            { status: 429, headers: { 'Retry-After': '600' } },
            origin,
        );
    }

    try {
        const incomingData = (await request.json()) as BookingFormData;
        const formData = sanitizeBookingData(incomingData);
        const validationError = validateBookingData(formData);

        if (validationError) {
            return jsonWithCors({ error: validationError }, { status: 400 }, origin);
        }

        const transporter = createTransporter();
        const fromAddress = (process.env.SMTP_FROM ?? `Din Fotograf Annika <${photographerEmail}>`).trim();

        await transporter.sendMail({
            from: fromAddress,
            to: photographerEmail,
            replyTo: formData.email,
            subject: `Ny bookingforespørgsel: ${formData.sessionType}`,
            text: buildPhotographerMessage(formData),
        });

        await transporter.sendMail({
            from: fromAddress,
            to: formData.email,
            subject: 'Din bookingforespørgsel er modtaget',
            text: buildCustomerMessage(formData),
        });

        return jsonWithCors({ ok: true }, { status: 200 }, origin);
    } catch (error) {
        const rawMessage = error instanceof Error ? error.message : String(error);
        console.error('[booking] email send failed:', rawMessage);
        return jsonWithCors(
            { error: 'Der opstod en fejl ved afsendelse af mail. Prøv venligst igen senere.' },
            { status: 500 },
            origin,
        );
    }
}
