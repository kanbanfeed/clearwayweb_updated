'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

// ─── Trust Bar ───────────────────────────────────────────────────────────────

const TRUST_LINES = [
  "We've launched 177+ small business websites.",
  "Businesses with functioning websites convert more local traffic.",
  "Most customers search online before calling.",
]

function TrustBar() {
  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setIndex((i) => (i + 1) % TRUST_LINES.length)
        setVisible(true)
      }, 400)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-full bg-charcoal-50 border-b border-charcoal-100 py-2.5 px-4">
      <div className="max-w-5xl mx-auto flex items-center justify-center">
        <span
          className="text-xs text-charcoal-500 font-medium tracking-wide text-center transition-opacity duration-400"
          style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.35s ease' }}
        >
          {TRUST_LINES[index]}
        </span>
      </div>
    </div>
  )
}

// ─── Wordmark ─────────────────────────────────────────────────────────────────

function Wordmark() {
  return (
    <div className="w-full bg-white border-b border-charcoal-100 py-4 px-6">
      <div className="max-w-5xl mx-auto">
        <span className="text-charcoal-900 font-semibold text-base tracking-tight">
          Clearway<span className="text-accent-600">Web</span>
        </span>
      </div>
    </div>
  )
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function MockupSVG() {
  return (
    <div className="mockup-chrome rounded-xl overflow-hidden bg-white border border-charcoal-100 w-full max-w-sm mx-auto">
      {/* Browser chrome */}
      <div className="bg-charcoal-50 border-b border-charcoal-100 px-3 py-2.5 flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-charcoal-200" />
          <div className="w-2.5 h-2.5 rounded-full bg-charcoal-200" />
          <div className="w-2.5 h-2.5 rounded-full bg-charcoal-200" />
        </div>
        <div className="flex-1 bg-white rounded border border-charcoal-200 px-2.5 py-1 ml-1">
          <span className="text-[10px] text-charcoal-400">yourcompany.com</span>
        </div>
      </div>
      {/* Mock page content */}
      <div className="bg-white p-4 space-y-3">
        {/* Nav */}
        <div className="flex items-center justify-between pb-2 border-b border-charcoal-100">
          <div className="w-20 h-3 bg-accent-100 rounded" />
          <div className="flex gap-2">
            <div className="w-8 h-2 bg-charcoal-100 rounded" />
            <div className="w-10 h-2 bg-charcoal-100 rounded" />
            <div className="w-9 h-2 bg-charcoal-100 rounded" />
          </div>
        </div>
        {/* Hero block */}
        <div className="bg-charcoal-50 rounded-lg p-4 space-y-2">
          <div className="w-3/4 h-4 bg-charcoal-200 rounded" />
          <div className="w-2/4 h-3 bg-charcoal-100 rounded" />
          <div className="w-24 h-6 bg-accent-500 rounded mt-2" />
        </div>
        {/* Cards */}
        <div className="grid grid-cols-3 gap-2">
          {[1,2,3].map((i) => (
            <div key={i} className="bg-charcoal-50 rounded p-2 space-y-1.5">
              <div className="w-6 h-6 bg-accent-100 rounded" />
              <div className="w-full h-2 bg-charcoal-100 rounded" />
              <div className="w-3/4 h-2 bg-charcoal-100 rounded" />
            </div>
          ))}
        </div>
        {/* Text lines */}
        <div className="space-y-1.5">
          <div className="w-full h-2 bg-charcoal-100 rounded" />
          <div className="w-5/6 h-2 bg-charcoal-100 rounded" />
          <div className="w-4/6 h-2 bg-charcoal-100 rounded" />
        </div>
        {/* Footer */}
        <div className="pt-2 border-t border-charcoal-100 flex justify-between">
          <div className="w-16 h-2 bg-charcoal-100 rounded" />
          <div className="w-12 h-2 bg-charcoal-100 rounded" />
        </div>
      </div>
    </div>
  )
}

function Hero() {
  return (
    <section className="w-full bg-white py-20 px-6 md:py-28">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center gap-12 md:gap-16">
          {/* Left: Copy */}
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center gap-2 bg-accent-50 text-accent-700 text-xs font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full border border-accent-100">
              Fixed Price · Fast Delivery
            </div>

            <h1
              className="text-4xl md:text-5xl lg:text-[3.25rem] font-serif text-charcoal-900 leading-tight text-balance"
              style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
            >
              Your Business Website.<br />
              <span className="text-accent-600">Live in 48 Hours.</span>
            </h1>

            <p className="text-lg text-charcoal-600 leading-relaxed max-w-md font-light">
              No contracts. No complexity. $250 one-time.
            </p>

            <div className="flex items-baseline gap-3 pt-1">
              <span
                className="text-4xl font-semibold text-charcoal-900"
                style={{ letterSpacing: '-0.02em' }}
              >
                $250
              </span>
              <span className="text-charcoal-400 text-sm font-medium">Flat. No surprises.</span>
            </div>

            <a
              href="/checkout"
              className="btn-primary inline-flex items-center justify-center gap-2 bg-accent-600 hover:bg-accent-700 text-white font-semibold text-base px-8 py-4 rounded-lg shadow-sm w-full md:w-auto"
            >
              Get My Website – $250
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>

            <p className="text-xs text-charcoal-400">
              No ongoing fees. No hidden costs. One-time payment.
            </p>
          </div>

          {/* Right: Mockup */}
          <div className="flex-1 md:max-w-sm w-full">
            <MockupSVG />
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── What's Included ──────────────────────────────────────────────────────────

const FEATURES = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="2" y="3" width="16" height="14" rx="2" stroke="#2563eb" strokeWidth="1.4"/>
        <path d="M6 7h8M6 10h5" stroke="#2563eb" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
    title: '5-Page Website',
    desc: 'Home, Services, About, Contact, Reviews',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="6" y="2" width="8" height="13" rx="1.5" stroke="#2563eb" strokeWidth="1.4"/>
        <path d="M9.5 17.5h1" stroke="#2563eb" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Mobile Optimized',
    desc: 'Looks perfect on all screen sizes',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="10" cy="10" r="8" stroke="#2563eb" strokeWidth="1.4"/>
        <path d="M10 2c0 0-4 3-4 8s4 8 4 8M10 2c0 0 4 3 4 8s-4 8-4 8M2 10h16" stroke="#2563eb" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Domain Connected',
    desc: 'Your domain configured and live',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M3 4h14a1 1 0 011 1v8a1 1 0 01-1 1H3a1 1 0 01-1-1V5a1 1 0 011-1z" stroke="#2563eb" strokeWidth="1.4"/>
        <path d="M7 14l3 3 3-3" stroke="#2563eb" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Contact Form + Google Maps',
    desc: 'Ready to capture customer enquiries',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M4 10l4 4 8-8" stroke="#2563eb" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: '1 Round of Edits',
    desc: 'Revise anything before we publish',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="10" cy="10" r="8" stroke="#2563eb" strokeWidth="1.4"/>
        <path d="M10 6v4l2.5 2.5" stroke="#2563eb" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Delivered in 72 Hours',
    desc: 'Preview sent within 3 business days',
  },
]

function WhatYouGet() {
  return (
    <section className="w-full bg-charcoal-50 py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <h2
            className="text-3xl md:text-4xl font-serif text-charcoal-900"
            style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
          >
            What's Included
          </h2>
          <div className="w-10 h-0.5 bg-accent-500 mt-4" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {FEATURES.map((f, i) => (
            <div
              key={i}
              className="feature-card bg-white rounded-lg p-6 shadow-card border border-charcoal-100"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-9 h-9 rounded-md bg-accent-50 flex items-center justify-center border border-accent-100">
                  {f.icon}
                </div>
                <div>
                  <p className="font-semibold text-charcoal-900 text-sm mb-0.5">{f.title}</p>
                  <p className="text-charcoal-500 text-sm font-light">{f.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-sm text-charcoal-400 mt-8 font-light">
          Optional upgrades available after checkout.
        </p>
      </div>
    </section>
  )
}

// ─── How It Works ─────────────────────────────────────────────────────────────

const STEPS = [
  {
    num: '01',
    title: 'Complete Checkout',
    desc: 'Secure $250 payment online.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M3 6h16l-1.5 9H4.5L3 6z" stroke="#2563eb" strokeWidth="1.4" strokeLinejoin="round"/>
        <circle cx="8" cy="18" r="1" stroke="#2563eb" strokeWidth="1.4"/>
        <circle cx="15" cy="18" r="1" stroke="#2563eb" strokeWidth="1.4"/>
        <path d="M3 6l-1-3H1" stroke="#2563eb" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Submit Business Details',
    desc: 'Fill a simple form with your info.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="3" y="3" width="16" height="16" rx="2" stroke="#2563eb" strokeWidth="1.4"/>
        <path d="M7 8h8M7 11h5M7 14h3" stroke="#2563eb" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    num: '03',
    title: 'We Build & Send Preview',
    desc: 'Your site ready within 72 hours.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="2" y="4" width="18" height="12" rx="2" stroke="#2563eb" strokeWidth="1.4"/>
        <path d="M7 18h8M11 16v2" stroke="#2563eb" strokeWidth="1.4" strokeLinecap="round"/>
        <path d="M8 9l2.5 2L14 8" stroke="#2563eb" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Approve & We Launch',
    desc: 'Request edits or go live.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="11" cy="11" r="8" stroke="#2563eb" strokeWidth="1.4"/>
        <path d="M7 11l3 3 5-5" stroke="#2563eb" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
]

function HowItWorks() {
  return (
    <section className="w-full bg-white py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <h2
            className="text-3xl md:text-4xl font-serif text-charcoal-900"
            style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
          >
            Simple Process
          </h2>
          <div className="w-10 h-0.5 bg-accent-500 mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4">
          {STEPS.map((step, i) => (
            <div key={i} className="relative step-item">
              {/* Connector line on desktop */}
              {i < STEPS.length - 1 && (
                <div className="hidden md:block absolute top-5 left-[calc(50%+20px)] right-[-50%] h-px bg-charcoal-100 z-0" />
              )}
              <div className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left">
                <div className="w-10 h-10 rounded-full bg-accent-50 border border-accent-100 flex items-center justify-center mb-4">
                  {step.icon}
                </div>
                <span className="text-[10px] font-bold text-accent-500 tracking-widest mb-1">{step.num}</span>
                <p className="font-semibold text-charcoal-900 text-sm mb-1">{step.title}</p>
                <p className="text-sm text-charcoal-500 font-light">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Testimonials ─────────────────────────────────────────────────────────────

const TESTIMONIALS = [
  {
    img: '/client1.png',
    business: 'HVAC – Texas',
    initials: 'JM',
    quote: 'Needed something simple. Got it live fast. Customers can now find us online.',
    name: 'James M.',
  },
  {
    img: '/client2.png',
    business: 'Roofing – Florida',
    initials: 'RS',
    quote: "No fuss, no back-and-forth. Just a clean site that does what it needs to do.",
    name: 'Ray S.',
  },
  {
    img: '/client3.png',
    business: 'Auto Repair – Ohio',
    initials: 'TK',
    quote: "Finally have a professional web presence. Worth every cent of the $250.",
    name: 'Tony K.',
  },
]

function Testimonials() {
  return (
    <section className="w-full bg-charcoal-50 py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <h2
            className="text-3xl md:text-4xl font-serif text-charcoal-900"
            style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
          >
            Built for Local Service Businesses
          </h2>
          <div className="w-10 h-0.5 bg-accent-500 mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="testimonial-card bg-white rounded-lg p-6 border border-charcoal-100 shadow-card"
            >
              <div className="flex items-center gap-3 mb-4">
                {/* Avatar fallback with initials */}
                {/* Client Image */}
                <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0 border border-accent-200">
                  <Image
                    src={t.img}
                    alt={t.name}
                    width={60}
                    height={60}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-xs font-bold text-charcoal-800 tracking-wide uppercase">{t.business}</p>
                  <p className="text-xs text-charcoal-400">{t.name}</p>
                </div>
              </div>
              {/* Stars */}
              <div className="flex gap-0.5 mb-3" aria-label="5 stars">
                {[...Array(5)].map((_, s) => (
                  <svg key={s} width="12" height="12" viewBox="0 0 12 12" fill="#fbbf24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M6 1l1.2 3.6H11L8.4 7l1.2 3.6L6 8.6l-3.6 2L3.6 7 1 4.6h3.8z"/>
                  </svg>
                ))}
              </div>
              <blockquote className="text-charcoal-700 text-sm font-light leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Who This Is For ──────────────────────────────────────────────────────────

const TRADES = [
  'HVAC', 'Roofing', 'Pest Control', 'Auto Repair',
  'Local Contractors', 'Plumbing', 'Electrical', 'Landscaping',
]

function WhoItsFor() {
  return (
    <section className="w-full bg-white py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <h2
            className="text-3xl md:text-4xl font-serif text-charcoal-900"
            style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
          >
            Perfect For
          </h2>
          <div className="w-10 h-0.5 bg-accent-500 mt-4" />
        </div>

        <div className="flex flex-col md:flex-row gap-10 md:gap-20">
          <div className="grid grid-cols-2 gap-x-10 gap-y-3">
            {TRADES.map((trade, i) => (
              <div key={i} className="flex items-center gap-2.5">
                <div className="w-1.5 h-1.5 rounded-full bg-accent-500 flex-shrink-0" />
                <span className="text-charcoal-800 text-sm font-medium">{trade}</span>
              </div>
            ))}
          </div>

          <div className="md:max-w-xs">
            <p className="text-charcoal-600 text-base font-light leading-relaxed">
              If you provide local services and need a simple professional website, this is for you.
            </p>
            <p className="text-charcoal-400 text-sm mt-4 font-light">
              No technical knowledge required. We handle everything — you just approve and launch.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Final CTA ────────────────────────────────────────────────────────────────

function FinalCTA() {
  return (
    <section className="w-full bg-charcoal-50 border-y border-charcoal-100 py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2
          className="text-3xl md:text-4xl font-serif text-charcoal-900 mb-3"
          style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
        >
          Launch Your Website This Week.
        </h2>
        <p className="text-charcoal-500 text-base font-light mb-10">
          Professional. Clean. Fixed Price.
        </p>

        <a
          href="/checkout"
          className="btn-primary inline-flex items-center justify-center gap-2.5 bg-accent-600 hover:bg-accent-700 text-white font-semibold text-base px-10 py-4 rounded-lg shadow-sm"
        >
          Complete My Website – $250
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>

        <p className="text-xs text-charcoal-400 mt-5">
          Delivered within 72 hours of submitting your details. One-time flat fee.
        </p>
      </div>
    </section>
  )
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="w-full bg-white py-10 px-6 border-t border-charcoal-100">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          <div className="space-y-1.5">
            <p className="font-semibold text-charcoal-900 text-sm">
              Clearway<span className="text-accent-600">Web</span>
            </p>
            <p className="text-charcoal-500 text-xs font-light">
              Operated by Crowbar Ventures Limited
            </p>
            <address className="not-italic text-charcoal-400 text-xs font-light leading-relaxed">
              71–75 Shelton Street<br />
              Covent Garden<br />
              London WC2H 9JQ<br />
              United Kingdom
            </address>
          </div>

          <div className="space-y-1.5 text-right">
            <p className="text-charcoal-400 text-xs font-light">
              Serving clients in the United States and internationally.
            </p>
            <p className="text-charcoal-400 text-xs font-light">
              All pricing in USD.
            </p>
            <div className="flex items-center gap-4 justify-end mt-3">
              <a href="/privacy" className="text-charcoal-400 hover:text-charcoal-700 text-xs transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-charcoal-400 hover:text-charcoal-700 text-xs transition-colors">
                Terms
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-charcoal-100">
          <p className="text-charcoal-300 text-[11px] font-light">
            &copy; {new Date().getFullYear()} Crowbar Ventures Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <main>
      <TrustBar />
      <Wordmark />
      <Hero />
      <WhatYouGet />
      <HowItWorks />
      <Testimonials />
      <WhoItsFor />
      <FinalCTA />
      <Footer />
    </main>
  )
}
