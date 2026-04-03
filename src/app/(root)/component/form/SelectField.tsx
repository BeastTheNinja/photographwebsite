interface SelectFieldProps {
    id: string;
    name: string;
    label: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    options: Array<{ label: string; value: string }>;
    required?: boolean;
}

export default function SelectField({
    id,
    name,
    label,
    value,
    onChange,
    options,
    required = false,
}: SelectFieldProps) {
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
                className="w-full px-4 py-3 border border-gray-200 dark:border-zinc-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
            >
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
}
