import type { Metadata } from 'next';
import ContactInfoItem from '../component/contact/ContactInfoItem';
import ContactCTA from '../component/contact/ContactCTA';
import SocialLinks from '../component/contact/SocialLinks';
import FinalCTA from '../component/contact/FinalCTA';
import {
  EmailIcon,
  PhoneIcon,
  MapPinIcon,
  ClockIcon,
  TikTokIcon,
  FacebookIcon,
} from '../component/contact/icons';

export const metadata: Metadata = {
  title: 'Kontakt',
  description:
    'Kontakt DinFotografAnninka for portrætter, familiefotografering, bryllupsfotografering og andre sessioner i Brønderslev og Nordjylland.',
  alternates: {
    canonical: '/kontakt',
  },
};

export default function Contact() {
  const email = 'dinfotografannika@gmail.com';
  const phone = 'kommer snart'; // Placeholder, da telefonnummer ikke er tilgængeligt endnu
  const phoneHref = ''; // Update to normalized E.164 format, e.g. '+4540404040' when number is ready
  const iconClass = 'w-7 h-7 text-white';

  const socialLinks = [
    { label: 'TikTok', href: 'https://www.tiktok.com/@annikalarsen81', icon: <TikTokIcon className={iconClass} /> },
    { label: 'Facebook', href: 'https://www.facebook.com/Annika81larsen', icon: <FacebookIcon className={iconClass} /> },
  ];

  return (
    <div className="py-12 sm:py-14 md:py-16">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="mb-6 bg-linear-to-r from-zinc-900 to-zinc-600 bg-clip-text text-4xl text-transparent sm:text-5xl md:text-6xl dark:from-zinc-100 dark:to-zinc-300">
            Kontakt
          </h1>
          <p className="text-base text-gray-600 sm:text-lg md:text-xl dark:text-gray-400">
            Jeg ville elske at høre fra dig! Uanset om du har et spørgsmål eller gerne vil booke en
            session, er du velkommen til at kontakte mig.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="mb-10 bg-linear-to-r from-zinc-900 to-zinc-600 bg-clip-text text-2xl text-transparent sm:text-3xl md:text-4xl dark:from-zinc-100 dark:to-zinc-300">
                Kontaktoplysninger
              </h2>

              <div className="space-y-8">
                <ContactInfoItem
                  icon={<EmailIcon className={iconClass} />}
                  title="Email"
                  content={
                    <a
                      href={`mailto:${email}`}
                      className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    >
                      {email}
                    </a>
                  }
                />

                <ContactInfoItem
                  icon={<PhoneIcon className={iconClass} />}
                  title="Telefon"
                  content={
                    phoneHref ? (
                      <a
                        href={`tel:${phoneHref}`}
                        className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                      >
                        {phone}
                      </a>
                    ) : (
                      <span>{phone}</span>
                    )
                  }
                />

                <ContactInfoItem
                  icon={<MapPinIcon className={iconClass} />}
                  title="Beliggenhed"
                  content={
                    <>
                      Brønderslev, Danmark
                      <br />
                      Tilgængelig for rejser i hele Jylland
                    </>
                  }
                />

                <ContactInfoItem
                  icon={<ClockIcon className={iconClass} />}
                  title="Åbningstider"
                  content={
                    <>
                      Mandag - Fredag: 9:00 - 18:00
                      <br />
                      Lørdag: 10:00 - 16:00
                      <br />
                      Søndag: Efter aftale
                    </>
                  }
                />
              </div>

              <SocialLinks links={socialLinks} />
            </div>

            {/* Quick Contact CTA */}
            <ContactCTA email={email} />
          </div>
        </div>

        {/* Final CTA Section */}
        <FinalCTA
          email={email}
          phone={phone}
          phoneHref={phoneHref}
          emailIcon={<EmailIcon className="w-7 h-7" />}
          phoneIcon={<PhoneIcon className={iconClass} />}
        />
      </div>
    </div>
  );
}