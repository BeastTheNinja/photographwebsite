import type { ChangeEvent, FormEvent } from 'react';
import SelectField from '../form/SelectField';
import TextField from '../form/TextField';
import TextareaField from '../form/TextareaField';
import { bookingOptions, type BookingFormData } from './types';

type FieldErrors = Partial<Record<keyof BookingFormData, string>>;

interface BookingFormProps {
    formData: BookingFormData;
    fieldErrors: FieldErrors;
    onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
    onSubmit: (event: FormEvent<HTMLFormElement>) => void;
    isSubmitting: boolean;
    errorMessage?: string | null;
}

export default function BookingForm({ formData, fieldErrors, onChange, onSubmit, isSubmitting, errorMessage }: BookingFormProps) {
    const sessionTypeOptions = [{ label: 'Vælg en sessionstype', value: '' }, ...bookingOptions.map((option) => ({ label: option, value: option }))];

    return (
        <form onSubmit={onSubmit} className="bg-white dark:bg-zinc-900 rounded-2xl shadow-xl p-8 md:p-10 border border-gray-100 dark:border-zinc-800">
            <div className="hidden" aria-hidden="true">
                <label htmlFor="website">Website</label>
                <input
                    id="website"
                    name="website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={formData.website}
                    onChange={onChange}
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <TextField
                    id="name"
                    name="name"
                    label="Fuldt navn *"
                    value={formData.name}
                    onChange={onChange}
                    placeholder="Dit navn"
                    errorMessage={fieldErrors.name}
                    required
                />

                <TextField
                    id="email"
                    name="email"
                    label="E-mail *"
                    type="email"
                    value={formData.email}
                    onChange={onChange}
                    placeholder="dig@email.dk"
                    errorMessage={fieldErrors.email}
                    required
                />

                <TextField
                    id="phone"
                    name="phone"
                    label="Telefon *"
                    type="tel"
                    value={formData.phone}
                    onChange={onChange}
                    placeholder="+45 12 34 56 78"
                    errorMessage={fieldErrors.phone}
                    required
                />

                <SelectField
                    id="sessionType"
                    name="sessionType"
                    label="Sessionstype *"
                    value={formData.sessionType}
                    onChange={onChange}
                    options={sessionTypeOptions}
                    errorMessage={fieldErrors.sessionType}
                    required
                />

                <TextField
                    id="date"
                    name="date"
                    label="Foretrukken dato *"
                    type="date"
                    value={formData.date}
                    onChange={onChange}
                    errorMessage={fieldErrors.date}
                    required
                />

                <TextField
                    id="time"
                    name="time"
                    label="Foretrukken tid *"
                    type="time"
                    value={formData.time}
                    onChange={onChange}
                    errorMessage={fieldErrors.time}
                    required
                />
            </div>

            <div className="mb-6">
                <TextField
                    id="location"
                    name="location"
                    label="Foretrukken lokation"
                    value={formData.location}
                    onChange={onChange}
                    placeholder="Fx København, park eller studio"
                    errorMessage={fieldErrors.location}
                />
            </div>

            <div className="mb-8">
                <TextareaField
                    id="message"
                    name="message"
                    label="Fortæl om dine ønsker"
                    value={formData.message}
                    onChange={onChange}
                    placeholder="Skriv eventuelle ønsker, ideer eller spørgsmål"
                    errorMessage={fieldErrors.message}
                />
            </div>

            {errorMessage ? (
                <div className="mb-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-900 dark:bg-red-950 dark:text-red-200" role="alert" aria-live="polite">
                    {errorMessage}
                </div>
            ) : null}

            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-linear-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-full transition-all hover:shadow-2xl hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed"
            >
                {isSubmitting ? 'Sender...' : 'Send bookingforespørgsel'}
            </button>

            <p className="text-sm text-gray-500 text-center mt-6">
                * Obligatoriske felter. Jeg kontakter dig inden for 24 timer.
            </p>
        </form>
    );
}
