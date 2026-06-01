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
            <h3 className="mb-6 text-xl text-gray-900 dark:text-white">
                Følg mig
            </h3>

            <div className="flex gap-4">
                {links.map((link) => (
                    <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={link.label}
                        className="
              flex h-14 w-14 items-center justify-center
              rounded-2xl bg-linear-to-r from-indigo-600 to-purple-600
              transition-all hover:scale-105 hover:shadow-xl
            "
                    >
                        {link.icon}
                    </a>
                ))}
            </div>
        </div>
    );
}