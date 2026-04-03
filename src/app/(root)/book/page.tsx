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

export default function BookingPage() {
    const [formData, setFormData] = useState<BookingFormData>(initialBookingFormData);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);

    const handleChange = (
        event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setFormData((current) => ({
            ...current,
            [event.target.name]: event.target.value,
        }));
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsSubmitting(true);
        setSubmitError(null);

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
    };

    if (isSubmitted) {
        return <BookingSuccess formData={formData} onBookAnother={handleNewBooking} />;
    }

    return (
        <div className="py-16">
            <div className="container mx-auto px-4">
                <BookingHero />

                <div className="max-w-4xl mx-auto">
                    <BookingServiceCards items={sessionTypes} />
                    <BookingForm
                        formData={formData}
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