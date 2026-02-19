# ClearwayWeb

Product landing page for ClearwayWeb, operated by Crowbar Ventures Limited.

## Tech Stack

- **Next.js 14** (App Router)
- **Tailwind CSS 3**
- **TypeScript**
- Ready for **Vercel** deployment

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
app/
├── layout.tsx          # Root layout + SEO metadata
├── page.tsx            # Main landing page (all sections)
├── globals.css         # Tailwind + custom animations
├── checkout/
│   └── page.tsx        # Checkout placeholder — connect Stripe/Gumroad here
├── privacy/
│   └── page.tsx        # Privacy policy placeholder
└── terms/
    └── page.tsx        # Terms of service placeholder
```

## Before Launch Checklist

- [ ] Add your real `Privacy Policy` content to `app/privacy/page.tsx`
- [ ] Add your real `Terms of Service` content to `app/terms/page.tsx`
- [ ] Connect a payment processor (Stripe, Gumroad, or Lemon Squeezy) in `app/checkout/page.tsx`
- [ ] Add placeholder images to `/public/`:
  - `client1.jpg`
  - `client2.jpg`
  - `client3.jpg`
  - `placeholder-site-preview.jpg`
- [ ] Add your `favicon.ico` to `/public/`
- [ ] Set up your custom domain in Vercel

## Deploy to Vercel

```bash
npm i -g vercel
vercel
```

Or connect your GitHub repo at [vercel.com](https://vercel.com).

## Customization

- **Brand colors** — edit `tailwind.config.js` → `colors.accent`
- **Trades list** — edit `TRADES` array in `app/page.tsx`
- **Testimonials** — edit `TESTIMONIALS` array in `app/page.tsx`
- **Pricing** — search for `$250` across page components
- **CTA link** — update `/checkout` href to your actual payment page

## Legal

Operated by Crowbar Ventures Limited  
71–75 Shelton Street, Covent Garden, London WC2H 9JQ, United Kingdom
