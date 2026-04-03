# Fotograf Hjemmeside

Dette repository indeholder en professionel hjemmeside til en freelance fotograf.

Projektet bruges som leverance i en freelance-aftale, hvor udviklerens ansvar er:

- at bygge nye funktioner
- at vedligeholde den tekniske platform
- at sikre stabil drift af bookingflow og kontaktflader

## Teknisk stack

- Next.js 16 (App Router)
- React 19 + TypeScript
- Tailwind CSS 4
- Nodemailer til bookingmails
- Vercel Analytics + Speed Insights

## Krav

- Node.js 20 eller nyere
- pnpm (anbefalet)

## Lokal udvikling

1. Installer afhængigheder:

 pnpm install

2. Opret en fil med miljøvariabler i projektroden:

 .env.local

3. Start udviklingsserver:

 pnpm dev

4. Åbn siden i browseren:

 <http://localhost:3000>

## Miljøvariabler

Tilføj følgende i .env.local:

 NEXT_PUBLIC_SITE_URL=http://localhost:3000

 SMTP_HOST=smtp.gmail.com
 SMTP_PORT=587
 SMTP_USER=din-mail@eksempel.dk
 SMTP_PASS=din-app-adgangskode
 SMTP_SECURE=false
 SMTP_FROM="dit navn <your-name@example.com>"

 ALLOWED_ORIGINS=http://localhost:3000

 BOOKING_RATE_LIMIT_MAX=5
 BOOKING_RATE_LIMIT_WINDOW_MS=600000

Noter:

- SMTP_PASS bliver renset for mellemrum på serversiden.
- VERCEL_URL bruges som fallback i produktion, hvis NEXT_PUBLIC_SITE_URL ikke er sat.

## Scripts

- pnpm dev: starter lokal udviklingsserver
- pnpm build: bygger produktionsversion
- pnpm start: kører produktionsbuild lokalt
- pnpm lint: kører ESLint

## Centrale sider

- / (forside)
- /om
- /galleri
- /priser
- /book
- /kontakt
- /privatlivspolitik

## Booking API

Endpoint: POST /api/booking

Flowet håndterer:

- validering og sanitizing af formularinput
- honeypot-felt mod spam
- simpel rate limiting pr. IP
- mail til fotograf
- bekræftelsesmail til kunden

## Drift og vedligehold

Som ansvarlig freelancer bør du vedligeholde følgende fast:

1. Opdater dependencies og test build.
2. Verificer bookingflow efter ændringer.
3. Tjek at SMTP-opsætning virker i produktionsmiljø.
4. Gennemgå lint og fejlrapporter før release.

## Deployment

Projektet er egnet til deployment på Vercel.

Før release:

1. Sæt alle nødvendige miljøvariabler.
2. Bekræft korrekt NEXT_PUBLIC_SITE_URL for domænet.
3. Kør pnpm build uden fejl.
