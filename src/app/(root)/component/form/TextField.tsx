interface TextFieldProps {
    id: string;
    name: string;
    label: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    type?: string;
    placeholder?: string;
    required?: boolean;
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
}: TextFieldProps) {
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
                className="w-full px-4 py-3 border border-gray-200 dark:border-zinc-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
            />
        </div>
    );
}
