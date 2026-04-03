import type { ReactNode } from 'react';

interface ContactInfoItemProps {
    icon: ReactNode;
    title: string;
    content: ReactNode;
}

export default function ContactInfoItem({ icon, title, content }: ContactInfoItemProps) {
    return (
        <div className="flex items-start gap-5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-linear-to-r from-indigo-600 to-purple-600 shadow-lg sm:h-14 sm:w-14">
                {icon}
            </div>
            <div>
                <h3 className="mb-2 text-lg text-gray-900 dark:text-white">{title}</h3>
                <div className="text-base text-gray-600 dark:text-gray-300 sm:text-lg">{content}</div>
            </div>
        </div>
    );
}
