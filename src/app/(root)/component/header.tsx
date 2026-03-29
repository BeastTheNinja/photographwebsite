import Image from "next/image";
import { NavBar, type NavItem } from "./navbar";

interface HeaderProps {
    title?: string;
    logoUrl?: string;
    description?: string;
    navItems: NavItem[];
}

export const Header = ({ title, logoUrl, description, navItems }: HeaderProps) => {
    return (
        <header>
            <div>
                <div className="flex items-center gap-3">
                    {logoUrl && (
                        <Image src={logoUrl} alt="Logo" width={150} height={100} loading="eager" />
                    )}
                    <div className="leading-tight">
                        {title && <p className="text-xl font-semibold">{title}</p>}
                        {description && <p className="text-sm text-neutral-600">{description}</p>}
                    </div>
                </div>
            </div>
            <NavBar items={navItems} />
        </header>
    );
};