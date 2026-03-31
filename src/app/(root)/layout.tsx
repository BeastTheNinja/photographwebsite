import { Header } from "./component/header";
import LogoImage from "../../../public/MorsLogo.png";
import { Analytics } from "@vercel/analytics/next";

const navItems = [
    { href: "/", label: "Hjem" },
    { href: "/galleri", label: "Galleri" },
    { href: "/om", label: "Om" },
    { href: "/book", label: "Booking" },
    { href: "/kontakt", label: "Kontakt" },
];

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <Header
                logoUrl={LogoImage.src}
                title="DinFotografAnninka"
                description=""
                navItems={navItems}
            />
            <main id="main-content">{children}</main>
            <Analytics />
        </div>
    );
};

export default Layout;