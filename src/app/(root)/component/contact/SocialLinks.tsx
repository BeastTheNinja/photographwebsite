import type { ReactNode } from 'react';

interface SocialLink {
    label: string;
    href: string;
    icon: ReactNode;
}

interface SocialLinksProps {
    links: SocialLink[];
}

export default function SocialLinks({ links }: SocialLinksProps) {
    return (
        <div className="mt-12">
            <h3 className="text-xl mb-6 text-gray-900 dark:text-white">Følg mig</h3>
            <div className="flex gap-4">
                {links.map((link) => (
                    <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-14 h-14 bg-linear-to-r from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center hover:shadow-xl hover:scale-105 transition-all"
                        aria-label={link.label}
                    >
                        {link.icon}
                    </a>
                ))}
            </div>
        </div>
    );
}
