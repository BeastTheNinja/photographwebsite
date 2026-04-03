import type { ReactNode } from 'react';

interface ContactInfoItemProps {
    icon: ReactNode;
    title: string;
    content: ReactNode;
}

export default function ContactInfoItem({ icon, title, content }: ContactInfoItemProps) {
    return (
        <div className="flex items-start gap-5">
            <div className="w-14 h-14 bg-linear-to-r from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center shrink-0 shadow-lg">
                {icon}
            </div>
            <div>
                <h3 className="mb-2 text-lg text-gray-900 dark:text-white">{title}</h3>
                <div className="text-gray-600 dark:text-gray-300 text-lg">{content}</div>
            </div>
        </div>
    );
}
