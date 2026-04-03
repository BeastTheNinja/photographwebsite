import type { ReactNode } from 'react';
import { Header } from "./component/header";
import LogoImage from "../../../public/MorsLogo.png";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Footer } from "./component/footer";
import { ThemeProvider } from "./component/context/ThemeContext";

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
        <ThemeProvider>
            <div className="flex min-h-screen flex-col">
                <Header
                    logoUrl={LogoImage.src}
                    title="DinFotografAnninka"
                    navItems={navItems}
                />
                <main id="main-content" className="flex-1">{children}</main>
                <Footer />
                <Analytics />
                <SpeedInsights />
            </div>
        </ThemeProvider>
    );
};

export default Layout;