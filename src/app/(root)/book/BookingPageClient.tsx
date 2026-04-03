'use client';

import type { ChangeEvent, FormEvent } from 'react';
import { useState } from 'react';
import BookingForm from '../component/booking/BookingForm';
import BookingHero from '../component/booking/BookingHero';
import BookingServiceCards from '../component/booking/BookingServiceCards';
import BookingSuccess from '../component/booking/BookingSuccess';
import {
    initialBookingFormData,
    sessionTypes,
    type BookingFormData,
} from '../component/booking/types';

type FieldErrors = Partial<Record<keyof BookingFormData, string>>;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[+]?[-()\d\s]{6,40}$/;

function validateBookingForm(data: BookingFormData): FieldErrors {
    const errors: FieldErrors = {};

    if (!data.name.trim()) {
        errors.name = 'Indtast dit fulde navn.';
    }

    if (!data.email.trim()) {
        errors.email = 'Indtast din email-adresse.';
    } else if (!EMAIL_REGEX.test(data.email.trim())) {
        errors.email = 'Indtast en gyldig email-adresse.';
    }

    if (!data.phone.trim()) {
        errors.phone = 'Indtast dit telefonnummer.';
    } else if (!PHONE_REGEX.test(data.phone.trim())) {
        errors.phone = 'Indtast et gyldigt telefonnummer.';
    }

    if (!data.sessionType.trim()) {
        errors.sessionType = 'Vælg en sessionstype.';
    }

    if (!data.date.trim()) {
        errors.date = 'Vælg en dato.';
    }

    if (!data.time.trim()) {
        errors.time = 'Vælg et tidspunkt.';
    }

    if (data.location.length > 160) {
        errors.location = 'Lokation må højst være 160 tegn.';
    }

    if (data.message.length > 3000) {
        errors.message = 'Beskeden må højst være 3000 tegn.';
    }

    return errors;
}

export default function BookingPageClient() {
    const [formData, setFormData] = useState<BookingFormData>(initialBookingFormData);
    const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);

    const handleChange = (
        event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = event.target;

        setFormData((current) => ({
            ...current,
            [name]: value,
        }));

        setFieldErrors((current) => {
            if (!current[name as keyof BookingFormData]) {
                return current;
            }

            const next = { ...current };
            delete next[name as keyof BookingFormData];
            return next;
        });
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const validationErrors = validateBookingForm(formData);

        if (Object.keys(validationErrors).length > 0) {
            setFieldErrors(validationErrors);
            setSubmitError('Ret venligst de markerede felter og prøv igen.');
            return;
        }

        setIsSubmitting(true);
        setSubmitError(null);
        setFieldErrors({});

        try {
            const response = await fetch('/api/booking', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = (await response.json()) as { error?: string };

            if (!response.ok) {
                throw new Error(result.error ?? 'Der opstod en fejl ved afsendelse af bookingforespørgslen.');
            }

            setIsSubmitted(true);
        } catch (error) {
            setSubmitError(error instanceof Error ? error.message : 'Der opstod en ukendt fejl.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleNewBooking = () => {
        setIsSubmitted(false);
        setFormData(initialBookingFormData);
        setFieldErrors({});
        setSubmitError(null);
    };

    if (isSubmitted) {
        return <BookingSuccess formData={formData} onBookAnother={handleNewBooking} />;
    }

    return (
        <div className="py-12 sm:py-14 md:py-16">
            <div className="container mx-auto px-4">
                <BookingHero />

                <div className="max-w-4xl mx-auto">
                    <BookingServiceCards items={sessionTypes} />
                    <BookingForm
                        formData={formData}
                        fieldErrors={fieldErrors}
                        onChange={handleChange}
                        onSubmit={handleSubmit}
                        isSubmitting={isSubmitting}
                        errorMessage={submitError}
                    />
                </div>
            </div>
        </div>
    );
}
