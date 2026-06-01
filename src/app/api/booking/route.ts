import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';
import type { BookingFormData } from '@/features/booking/types';
import { defaultAllowedOrigins, defaultBookingRateLimit, photographerEmail } from '@/lib/config';
import { createRateLimitOptions, isRateLimited } from '@/lib/rateLimit';

function getRateLimitOptions() {
    const limit = Number(process.env.BOOKING_RATE_LIMIT_MAX ?? defaultBookingRateLimit.limit);
    const windowMs = Number(process.env.BOOKING_RATE_LIMIT_WINDOW_MS ?? defaultBookingRateLimit.windowMs);
    const maxEntries = Number(process.env.BOOKING_RATE_LIMIT_MAX_ENTRIES ?? defaultBookingRateLimit.maxEntries);

    return createRateLimitOptions({ limit, windowMs, maxEntries });
}

function getClientIp(request: Request) {
    const forwardedFor = request.headers.get('x-forwarded-for');
    const realIp = request.headers.get('x-real-ip');
    const ip = forwardedFor?.split(',')[0]?.trim() || realIp?.trim() || 'unknown';
    return ip;
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

function getConfiguredAllowedOrigins() {
    const configured = (process.env.ALLOWED_ORIGINS ?? '')
        .split(',')
        .map((origin) => origin.trim())
        .filter(Boolean);

    const primarySiteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? '').trim().replace(/\/$/, '');

    return Array.from(new Set([...configured, primarySiteUrl, ...defaultAllowedOrigins].filter(Boolean)));
}

function getRequestOrigin(request: Request) {
    const forwardedHost = request.headers.get('x-forwarded-host')?.split(',')[0]?.trim();
    const host = request.headers.get('host')?.trim();
    const proto = request.headers.get('x-forwarded-proto')?.split(',')[0]?.trim() ?? new URL(request.url).protocol.replace(':', '');
    const requestHost = forwardedHost || host;

    if (!requestHost) {
        return null;
    }

    return `${proto}://${requestHost}`;
}

function isAllowedOrigin(request: Request, origin: string | null) {
    if (!origin) {
        return true;
    }

    if (getConfiguredAllowedOrigins().includes(origin)) {
        return true;
    }

    const requestOrigin = getRequestOrigin(request);
    return requestOrigin === origin;
}

function getCorsHeaders(request: Request, origin: string | null) {
    const headers = new Headers();

    if (origin && isAllowedOrigin(request, origin)) {
        headers.set('Access-Control-Allow-Origin', origin);
        headers.set('Vary', 'Origin');
    }

    headers.set('Access-Control-Allow-Methods', 'POST, OPTIONS');
    headers.set('Access-Control-Allow-Headers', 'Content-Type');

    return headers;
}

function jsonWithCors(request: Request, body: unknown, init: ResponseInit, origin: string | null) {
    const response = NextResponse.json(body, init);
    const headers = getCorsHeaders(request, origin);

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

    if (origin && !isAllowedOrigin(request, origin)) {
        return new NextResponse(null, { status: 403 });
    }

    return new NextResponse(null, {
        status: 204,
        headers: getCorsHeaders(request, origin),
    });
}

export async function POST(request: Request) {
    const origin = request.headers.get('origin');
    const clientIp = getClientIp(request);

    if (origin && !isAllowedOrigin(request, origin)) {
        return jsonWithCors(request, { error: 'CORS policy blocked this origin.' }, { status: 403 }, origin);
    }

    const rateLimitOptions = getRateLimitOptions();

    if (isRateLimited(clientIp, rateLimitOptions)) {
        return jsonWithCors(
            request,
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
            return jsonWithCors(request, { error: validationError }, { status: 400 }, origin);
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

        return jsonWithCors(request, { ok: true }, { status: 200 }, origin);
    } catch (error) {
        const rawMessage = error instanceof Error ? error.message : String(error);
        console.error('[booking] email send failed:', rawMessage);
        return jsonWithCors(
            request,
            { error: 'Der opstod en fejl ved afsendelse af mail. Prøv venligst igen senere.' },
            { status: 500 },
            origin,
        );
    }
}
