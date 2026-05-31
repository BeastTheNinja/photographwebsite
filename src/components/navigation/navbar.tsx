import { NavLink } from "./navlink";

export type NavItem = {
    href: string;
    label: string;
};

type NavBarProps = {
    items: NavItem[];
};

export const NavBar = ({ items }: NavBarProps) => {
    return (
        <nav aria-label="Hovednavigation">
            <ul className="flex items-center gap-2">
                {items.map((item) => (
                    <li key={item.href} className="shrink-0">
                        <NavLink href={item.href} label={item.label} />
                    </li>
                ))}
            </ul>
        </nav>
    );
};