import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ClearwayWeb – Professional Websites for Service Businesses',
  description: 'Get a professional 5-page website delivered in 72 hours for $250. Built for HVAC, contractors, and local service businesses.',
  keywords: 'website for service businesses, HVAC website, contractor website, small business website, affordable website',
  robots: 'index, follow',
  openGraph: {
    title: 'ClearwayWeb – Professional Websites for Service Businesses',
    description: 'Get a professional 5-page website delivered in 72 hours for $250.',
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
