import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';
import type { BookingFormData } from '@/app/(root)/component/booking/types';

const photographerEmail = 'dinfotografannika@gmail.com';

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

export async function POST(request: Request) {
    try {
        const formData = (await request.json()) as BookingFormData;

        if (!formData.name || !formData.email || !formData.phone || !formData.date || !formData.time || !formData.sessionType) {
            return NextResponse.json({ error: 'Manglende påkrævede felter.' }, { status: 400 });
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

        return NextResponse.json({ ok: true });
    } catch (error) {
        const rawMessage = error instanceof Error ? error.message : 'Der opstod en fejl ved afsendelse af mail.';
        const message = /535[-\s]5\.7\.8|BadCredentials/i.test(rawMessage)
            ? 'SMTP login fejlede (Gmail afviser login). Tjek at SMTP_USER matcher kontoen, og at SMTP_PASS er et nyt App Password uden mellemrum.'
            : rawMessage;
        return NextResponse.json({ error: message }, { status: 500 });
    }
}
