interface SelectFieldProps {
    id: string;
    name: string;
    label: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    options: Array<{ label: string; value: string }>;
    required?: boolean;
    errorMessage?: string;
}

export default function SelectField({
    id,
    name,
    label,
    value,
    onChange,
    options,
    required = false,
    errorMessage,
}: SelectFieldProps) {
    const errorId = `${id}-error`;

    return (
        <div>
            <label htmlFor={id} className="block mb-2 text-sm text-gray-700 dark:text-gray-300">
                {label}
            </label>
            <select
                id={id}
                name={name}
                value={value}
                onChange={onChange}
                required={required}
                aria-invalid={errorMessage ? 'true' : 'false'}
                aria-describedby={errorMessage ? errorId : undefined}
                className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all ${errorMessage ? 'border-red-400 dark:border-red-700' : 'border-gray-200 dark:border-zinc-700'}`}
            >
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>

            {errorMessage ? (
                <p id={errorId} className="mt-2 text-sm text-red-600 dark:text-red-400" role="alert">
                    {errorMessage}
                </p>
            ) : null}
        </div>
    );
}
