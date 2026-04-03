import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ClearwayWeb — Online Presence Management for Local Service Businesses',
  description: 'Website, Google Business Profile, and 24/7 customer inquiry handling. Fully managed for $249/month. No setup fee. Cancel anytime. Serving HVAC, plumbing, dental, auto repair, and landscaping businesses across the US.',
  keywords: 'online presence management, local business website, Google Business Profile, HVAC website, plumbing website, dental website, auto repair website, landscaping website',
  robots: 'index, follow',
  openGraph: {
    title: 'ClearwayWeb — Online Presence Management for Local Service Businesses',
    description: 'Website, Google Business Profile, and 24/7 customer inquiry handling. Fully managed for $249/month. No setup fee. Cancel anytime.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased bg-white text-charcoal-900">
        {children}
      </body>
    </html>
  )
}
