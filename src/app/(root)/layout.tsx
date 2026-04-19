import type { ReactNode } from 'react';
import { Header } from "./component/header";
import LogoImage from "../../../public/icons/MorsLogo.png";
import { Footer } from "./component/footer";
import PerformanceInsights from './component/PerformanceInsights';

export const dynamic = 'force-static';

const navItems = [
    { href: "/", label: "Hjem" },
    { href: "/galleri", label: "Galleri" },
    { href: "/priser", label: "Priser" },
    { href: "/om", label: "Om" },
    { href: "/book", label: "Booking" },
    { href: "/kontakt", label: "Kontakt" },
];

const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="flex min-h-screen flex-col">
            <Header
                logoUrl={LogoImage.src}
                title="DinFotografAnninka"
                navItems={navItems}
            />
            <main id="main-content" className="flex-1">{children}</main>
            <Footer />
            <PerformanceInsights />
        </div>
    );
};

export default Layout;