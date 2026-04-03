interface TextFieldProps {
    id: string;
    name: string;
    label: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    type?: string;
    placeholder?: string;
    required?: boolean;
    errorMessage?: string;
}

export default function TextField({
    id,
    name,
    label,
    value,
    onChange,
    type = 'text',
    placeholder,
    required = false,
    errorMessage,
}: TextFieldProps) {
    const errorId = `${id}-error`;

    return (
        <div>
            <label htmlFor={id} className="block mb-2 text-sm text-gray-700 dark:text-gray-300">
                {label}
            </label>
            <input
                type={type}
                id={id}
                name={name}
                value={value}
                onChange={onChange}
                required={required}
                placeholder={placeholder}
                aria-invalid={errorMessage ? 'true' : 'false'}
                aria-describedby={errorMessage ? errorId : undefined}
                className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all ${errorMessage ? 'border-red-400 dark:border-red-700' : 'border-gray-200 dark:border-zinc-700'}`}
            />

            {errorMessage ? (
                <p id={errorId} className="mt-2 text-sm text-red-600 dark:text-red-400" role="alert">
                    {errorMessage}
                </p>
            ) : null}
        </div>
    );
}
