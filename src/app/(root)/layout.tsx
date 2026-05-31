import type { ReactNode } from 'react';
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import PerformanceInsights from "@/components/layout/performance-insights";

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
                logoUrl="/icons/MorsLogo.png"
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