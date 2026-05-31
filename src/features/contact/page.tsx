import type { Metadata } from 'next';
import ContactInfoItem from './ContactInfoItem';
import ContactCTA from './ContactCTA';
import SocialLinks from './SocialLinks';
import FinalCTA from './FinalCTA';
import { EmailIcon, PhoneIcon, MapPinIcon, ClockIcon, TikTokIcon, FacebookIcon } from '../../components/contact/icons';

export const metadata: Metadata = {
    title: 'Kontakt',
    description: 'Kontakt DinFotografAnninka for portrætter, familiefotografering, bryllupsfotografering og andre sessioner i Brønderslev og Nordjylland.',
    alternates: { canonical: '/kontakt' },
};

export default function Contact() {
    const email = 'dinfotografannika@gmail.com';
    const phone = 'kommer snart';
    const phoneHref = '';
    const iconClass = 'w-7 h-7 text-white';
    const socialLinks = [
        { label: 'TikTok', href: 'https://www.tiktok.com/@annikalarsen81', icon: <TikTokIcon className={iconClass} /> },
        { label: 'Facebook', href: 'https://www.facebook.com/Annika81larsen', icon: <FacebookIcon className={iconClass} /> },
    ];

    return (
        <div className="py-12 sm:py-14 md:py-16">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="mx-auto mb-16 max-w-3xl text-center"><h1 className="mb-6 bg-linear-to-r from-zinc-900 to-zinc-600 bg-clip-text text-4xl text-transparent sm:text-5xl md:text-6xl dark:from-zinc-100 dark:to-zinc-300">Kontakt</h1><p className="text-base text-gray-600 sm:text-lg md:text-xl dark:text-gray-400">Jeg ville elske at høre fra dig! Uanset om du har et spørgsmål eller gerne vil booke en session, er du velkommen til at kontakte mig.</p></div>
                <div className="mx-auto max-w-5xl"><div className="grid grid-cols-1 gap-12 md:grid-cols-2"><div><h2 className="mb-10 bg-linear-to-r from-zinc-900 to-zinc-600 bg-clip-text text-2xl text-transparent sm:text-3xl md:text-4xl dark:from-zinc-100 dark:to-zinc-300">Kontaktoplysninger</h2><div className="space-y-8"><ContactInfoItem icon={<EmailIcon className={iconClass} />} title="Email" content={<a href={`mailto:${email}`} className="transition-colors hover:text-indigo-600 dark:hover:text-indigo-400">{email}</a>} /><ContactInfoItem icon={<PhoneIcon className={iconClass} />} title="Telefon" content={phoneHref ? <a href={`tel:${phoneHref}`} className="transition-colors hover:text-indigo-600 dark:hover:text-indigo-400">{phone}</a> : <span>{phone}</span>} /><ContactInfoItem icon={<MapPinIcon className={iconClass} />} title="Beliggenhed" content={<><span>Brønderslev, Danmark</span><br /><span>Tilgængelig for rejser i hele Jylland</span></>} /><ContactInfoItem icon={<ClockIcon className={iconClass} />} title="Åbningstider" content={<><span>Mandag - Fredag: 9:00 - 18:00</span><br /><span>Lørdag: 10:00 - 16:00</span><br /><span>Søndag: Efter aftale</span></>} /></div><SocialLinks links={socialLinks} /></div><ContactCTA email={email} /></div></div><FinalCTA email={email} phone={phone} phoneHref={phoneHref} emailIcon={<EmailIcon className="w-7 h-7" />} phoneIcon={<PhoneIcon className={iconClass} />} /></div></div>
    );
}