import ContactInfoItem from '../component/contact/ContactInfoItem';
import ContactCTA from '../component/contact/ContactCTA';
import SocialLinks from '../component/contact/SocialLinks';
import FinalCTA from '../component/contact/FinalCTA';
import {
  EmailIcon,
  PhoneIcon,
  MapPinIcon,
  ClockIcon,
  InstagramIcon,
  FacebookIcon,
} from '../component/contact/icons';

export default function Contact() {
  const email = 'dinfotografannika@gmail.com';
  const phone = 'kommer snart'; // Placeholder, da telefonnummer ikke er tilgængeligt endnu

  const socialLinks = [
    { label: 'TikTok', href: 'https://tiktok.com', icon: InstagramIcon },
    { label: 'Facebook', href: 'https://www.facebook.com/Annika81larsen', icon: FacebookIcon },
  ];

  return (
    <div className="py-16">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl mb-6 bg-linear-to-r from-zinc-900 to-zinc-600 dark:from-zinc-100 dark:to-zinc-300 bg-clip-text text-transparent">
            Kontakt
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Jeg ville elske at høre fra dig! Uanset om du har et spørgsmål eller gerne vil booke en
            session, er du velkommen til at kontakte mig.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl md:text-4xl mb-10 bg-linear-to-r from-zinc-900 to-zinc-600 dark:from-zinc-100 dark:to-zinc-300 bg-clip-text text-transparent">
                Kontaktoplysninger
              </h2>

              <div className="space-y-8">
                <ContactInfoItem
                  icon={EmailIcon}
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
                  icon={PhoneIcon}
                  title="Telefon"
                  content={
                    <a
                      href={`tel:${phone}`}
                      className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    >
                      {phone}
                    </a>
                  }
                />

                <ContactInfoItem
                  icon={MapPinIcon}
                  title="Beliggenhed"
                  content={
                    <>
                      København, Danmark
                      <br />
                      Tilgængelig for rejser i hele landet
                    </>
                  }
                />

                <ContactInfoItem
                  icon={ClockIcon}
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
            <ContactCTA />
          </div>
        </div>

        {/* Final CTA Section */}
        <FinalCTA
          email={email}
          phone={phone}
          emailIcon={EmailIcon}
          phoneIcon={PhoneIcon}
        />
      </div>
    </div>
  );
}