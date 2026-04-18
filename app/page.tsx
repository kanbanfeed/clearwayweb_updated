'use client'

import { useState } from 'react'
import Image from 'next/image'

// ─── Nav ──────────────────────────────────────────────────────────────────────

function Nav() {
  const [open, setOpen] = useState(false)

  const scroll = (id: string) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="w-full bg-white border-b border-charcoal-100 sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-6 py-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            src="/clearwayweb_logo.jpeg"
            alt="ClearwayWeb Logo"
            width={60}
            height={40}
            className="object-contain"
            priority
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-charcoal-600">
          <button onClick={() => scroll('how-it-works')} className="hover:text-charcoal-900 transition-colors">How It Works</button>
          <button onClick={() => scroll('whats-included')} className="hover:text-charcoal-900 transition-colors">What's Included</button>
          <button onClick={() => scroll('sample-sites')} className="hover:text-charcoal-900 transition-colors">See Examples</button>
          <button onClick={() => scroll('pricing')} className="hover:text-charcoal-900 transition-colors">Pricing</button>
          <button onClick={() => scroll('faq')} className="hover:text-charcoal-900 transition-colors">FAQ</button>
          <button
            onClick={() => scroll('pricing')}
            className="bg-accent-600 hover:bg-accent-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
          >
            Get Started
          </button>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-1 text-charcoal-700"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            {open
              ? <path d="M5 5l12 12M17 5L5 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              : <path d="M3 7h16M3 11h16M3 15h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            }
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-charcoal-100 px-6 py-2 flex flex-col gap-4 text-sm font-medium text-charcoal-700">
          <button onClick={() => scroll('how-it-works')} className="text-left">How It Works</button>
          <button onClick={() => scroll('whats-included')} className="text-left">What's Included</button>
          <button onClick={() => scroll('sample-sites')} className="text-left">See Examples</button>
          <button onClick={() => scroll('pricing')} className="text-left">Pricing</button>
          <button onClick={() => scroll('faq')} className="text-left">FAQ</button>
          <a
            href="https://buy.stripe.com/5kQ9AS26n0ZyfKb8uR7Vm13"
            className="bg-accent-600 text-white px-4 py-2 rounded-lg font-semibold w-full"
          >
            Get Started
          </a>
        </div>
      )}
    </header>
  )
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  const scroll = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className="w-full bg-white py-2 px-6 md:py-2">
      <div className="max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-accent-50 text-accent-700 text-xs font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full border border-accent-100 mb-2">
          177+ local service businesses now getting found online
        </div>

        <h1
          className="text-4xl md:text-5xl lg:text-[3.25rem] font-serif text-charcoal-900 leading-tight mb-3"
          style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
        >
          Your competitors are showing up on Google. You are not
        </h1>

        <p className="text-xl md:text-lg text-charcoal-600 leading-relaxed max-w-2xl mx-auto font-light mb-4">
          We build + fully manage your website, Google Business Profile, and 24/7 WhatsApp handler in 48 hours. Everything done for you while you work on jobs.
        </p>
        <div className="mt-2 mb-6">
          <p className="text-xl font-bold text-charcoal-900">
            $249 per month – Everything Included, Cancel Anytime
          </p>
          <p className="text-sm text-charcoal-700 mt-2">
            • Website + Google Profile + 24/7 WhatsApp handler in 48 hours
          </p>
          <p className="text-sm font-semibold text-charcoal-900">
            • 5+ new inquiries in first 30 days or first month FREE
          </p>
        </div>
        {/* <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
          <a
            href="https://buy.stripe.com/5kQ9AS26n0ZyfKb8uR7Vm13"
            className="inline-flex items-center justify-center gap-2 border border-charcoal-200 hover:border-charcoal-400 text-charcoal-700 font-semibold text-base px-8 py-4 rounded-lg w-full sm:w-auto transition-colors"
            >
            Get Started — $249/month
          </a>
        </div> */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-2">
          {/* <button
            onClick={() => scroll('how-it-works')}
            className="inline-flex items-center justify-center gap-2 bg-accent-600 hover:bg-accent-700 text-white font-semibold text-base px-8 py-4 rounded-lg shadow-sm w-full sm:w-auto transition-colors"
          >
            See How It Works
          </button> */}
           

          <a href="https://wa.me/14155238886?text=AUDIT" className="inline-flex items-center justify-center gap-2 bg-accent-600 text-white font-semibold text-base px-8 py-2 rounded-lg w-full sm:w-auto">
          Text ‘AUDIT’ to +1 415 523 8886 for free 60-second visibility report
          
        </a>
        

        <a href="https://cal.com/clearwayweb/clearwayweb-discovery-call" className="inline-flex items-center justify-center gap-2 border border-charcoal-200 text-charcoal-700 font-semibold text-base px-8 py-2 rounded-lg w-full sm:w-auto">
          Book 10-min discovery call
        </a>

        <a href="https://wa.me/14155238886" className="inline-flex items-center justify-center gap-2 bg-charcoal-900 text-white font-semibold text-base px-8 py-2 rounded-lg w-full sm:w-auto">
          See sample handler in action
        </a>
        </div>
        <p className="text-sm font-semibold text-charcoal-700">
          Full handler in your business name goes live in 48 hours after signup.
        </p>

        <p className="text-xs text-charcoal-400">
          No setup fee &nbsp;·&nbsp; No contracts &nbsp;·&nbsp; Cancel anytime
        </p>
      </div>
    </section>
  )
}

function PricingHighlight() {
  return (
    <section className="w-full bg-charcoal-50 py-20 px-6 border-y border-charcoal-100">
      <div className="max-w-3xl mx-auto text-center">

        <h2 className="text-3xl font-serif text-charcoal-900 mb-6">
          $249 per month – Everything Included, Cancel Anytime
        </h2>
        <div className="text-charcoal-600 text-bold text-base space-y-2 text-left mb-6">
          <p>• Mobile website live in 48 hours</p>
          <p>• Google Business Profile claimed, optimized & posted to every month</p>
          <p>• 24/7 WhatsApp handler in your business name</p>
          <p>• Automatic review requests + responses</p>
          <p>• 12 social posts per month</p>
          <p>• Monthly text report with results</p>
        </div>

        <p className="font-semibold text-charcoal-900">
          5+ new inquiries in first 30 days or your first month is FREE.
        </p>

        <p className="text-charcoal-500 mt-2">
          Cancel anytime. No long contracts.
        </p>

      </div>
    </section>
  )
}
// ─── Problem ──────────────────────────────────────────────────────────────────

function Problem() {
  return (
    <section className="w-full bg-charcoal-50 py-20 px-6 border-y border-charcoal-100">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12 text-center">
          <h2
            className="text-3xl md:text-4xl font-serif text-charcoal-900"
            style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
          >
            Your competitors are showing up. You are not.
          </h2>
          <div className="w-10 h-0.5 bg-accent-500 mt-4 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            { stat: '97%', text: 'of people search online before contacting a local business.' },
            { stat: '7x', text: 'more clicks for businesses with active Google profiles than those without.' },
            { stat: '85%', text: 'of customers will not contact a business they cannot find online.' },
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-lg p-8 border border-charcoal-100 shadow-card text-center">
              <div className="text-4xl font-bold text-accent-600 mb-3" style={{ letterSpacing: '-0.02em' }}>{item.stat}</div>
              <p className="text-charcoal-600 text-sm leading-relaxed font-light">{item.text}</p>
            </div>
          ))}
        </div>

        <p className="text-charcoal-600 text-base leading-relaxed text-center max-w-3xl mx-auto font-light">
          If your business does not have a website, an active Google listing, and a way to respond to customer inquiries instantly — you are invisible. Every day that continues, those customers are calling someone else.
        </p>
      </div>
    </section>
  )
}

// ─── How It Works ─────────────────────────────────────────────────────────────

function HowItWorks() {
  return (
    <section id="how-it-works" className="w-full bg-white py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <h2
            className="text-3xl md:text-4xl font-serif text-charcoal-900"
            style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
          >
            Simple. Managed. Done.
          </h2>
          <div className="w-10 h-0.5 bg-accent-500 mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              num: '01',
              title: 'We build everything',
              desc: 'Within 48 hours: your website is live, your Google Business Profile is claimed and optimized, and your WhatsApp customer handler is active. Nothing for you to set up.',
            },
            {
              num: '02',
              title: 'We manage everything',
              desc: 'Every month we publish your Google and social content, collect reviews, respond to every review, and handle your inbound customer inquiries around the clock. You do not log in anywhere.',
            },
            {
              num: '03',
              title: 'You get a plain English update',
              desc: 'On the 1st of every month we send you a single text: how many times your Google profile was seen, how many customer messages we handled, how many new reviews came in. That is it.',
            },
          ].map((step, i) => (
            <div key={i} className="flex flex-col gap-4">
              <div className="w-10 h-10 rounded-full bg-accent-50 border border-accent-100 flex items-center justify-center flex-shrink-0">
                <span className="text-xs font-bold text-accent-600 tracking-widest">{step.num}</span>
              </div>
              <div>
                <h3 className="font-semibold text-charcoal-900 text-base mb-2">{step.title}</h3>
                <p className="text-charcoal-500 text-sm font-light leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── What Is Included ─────────────────────────────────────────────────────────

const INCLUDED = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <rect x="2" y="3" width="16" height="14" rx="2" stroke="#2563eb" strokeWidth="1.4"/>
        <path d="M6 7h8M6 10h5" stroke="#2563eb" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Your Website',
    desc: 'Mobile-first, built for local search, live within 48 hours.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <circle cx="10" cy="10" r="8" stroke="#2563eb" strokeWidth="1.4"/>
        <path d="M10 2c0 0-4 3-4 8s4 8 4 8M10 2c0 0 4 3 4 8s-4 8-4 8M2 10h16" stroke="#2563eb" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Google Business Profile',
    desc: 'Claimed, fully optimized, and kept active every month with fresh posts and review responses.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M4 4h12a1 1 0 011 1v7a1 1 0 01-1 1H4a1 1 0 01-1-1V5a1 1 0 011-1z" stroke="#2563eb" strokeWidth="1.4"/>
        <path d="M7 16l3 2 3-2" stroke="#2563eb" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'WhatsApp Customer Handler',
    desc: 'Answers your customer inquiries 24 hours a day in your business name. They get an instant response. You never miss a lead.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M10 2l2.4 4.8L18 7.6l-4 3.9.9 5.5L10 14.4l-4.9 2.6.9-5.5L2 7.6l5.6-.8z" stroke="#2563eb" strokeWidth="1.4" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Review Collection',
    desc: 'We automatically follow up with your customers and ask for Google reviews. More reviews means higher rankings.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <rect x="3" y="3" width="6" height="6" rx="1" stroke="#2563eb" strokeWidth="1.4"/>
        <rect x="11" y="3" width="6" height="6" rx="1" stroke="#2563eb" strokeWidth="1.4"/>
        <rect x="3" y="11" width="6" height="6" rx="1" stroke="#2563eb" strokeWidth="1.4"/>
        <rect x="11" y="11" width="6" height="6" rx="1" stroke="#2563eb" strokeWidth="1.4"/>
      </svg>
    ),
    title: 'Social Content',
    desc: '12 posts per month published to Facebook and Instagram. Specific to your business, your city, your season.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <rect x="3" y="4" width="14" height="12" rx="2" stroke="#2563eb" strokeWidth="1.4"/>
        <path d="M7 9h6M7 12h4" stroke="#2563eb" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Monthly Text Report',
    desc: 'One text on the 1st of every month. Plain English. Shows exactly what happened. No dashboards, no logins.',
  },
]

function WhatsIncluded() {
  return (
    <section id="whats-included" className="w-full bg-charcoal-50 py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <h2
            className="text-3xl md:text-4xl font-serif text-charcoal-900"
            style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
          >
            Everything Included. Nothing Extra.
          </h2>
          <div className="w-10 h-0.5 bg-accent-500 mt-4" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {INCLUDED.map((f, i) => (
            <div key={i} className="bg-white rounded-lg p-6 shadow-card border border-charcoal-100">
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
      </div>
    </section>
  )
}

// ─── Live Demo ────────────────────────────────────────────────────────────────

function LiveDemo() {
  return (
    <section className="w-full bg-white py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2
          className="text-3xl md:text-4xl font-serif text-charcoal-900 mb-4"
          style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
        >
          See It Working Right Now
        </h2>
        <div className="w-10 h-0.5 bg-accent-500 mt-4 mb-8 mx-auto" />

        <p className="text-charcoal-600 text-base leading-relaxed font-light mb-4">
          The most valuable part of what we set up for every client is the WhatsApp customer handler. It answers your customers instantly, 24 hours a day, in your business name.
        </p>
        <p className="text-charcoal-600 text-base leading-relaxed font-light mb-10">
          Text any question to the number below — the kind of question one of your customers might ask — and see exactly what your customers would experience.
        </p>

        <div className="bg-charcoal-50 border border-charcoal-100 rounded-xl p-10">
          <div className="text-3xl md:text-4xl font-bold text-charcoal-900 tracking-wide mb-3">
            +1 415 523 8886 (Twilio Sandbox – live demo)
          </div>
          <a
            href="https://wa.me/14155238886"
            className="inline-flex items-center justify-center mt-4 bg-accent-600 text-white px-6 py-3 rounded-lg"
          >
            Text it right now
          </a>
          <p className="text text-charcoal-400 mt-6">Text any customer-style question and see the auto-reply. Full handler in your name goes live in 48 hours after signup.</p>
        </div>
      </div>
    </section>
  )
}

// ─── Sample Sites ─────────────────────────────────────────────────────────────

const SAMPLES = [
  { industry: 'HVAC', city: 'Houston, TX', url: 'https://hvac.clearwayweb.com' },
  { industry: 'Plumbing', city: 'Phoenix, AZ', url: 'https://plumbing.clearwayweb.com' },
  { industry: 'Dental', city: 'San Antonio, TX', url: 'https://dental.clearwayweb.com' },
  { industry: 'Auto Repair', city: 'Columbus, OH', url: 'https://autorepair.clearwayweb.com' },
  { industry: 'Landscaping', city: 'Jacksonville, FL', url: 'https://landscaping.clearwayweb.com' },
]

function SampleSites() {
  return (
    <section id="sample-sites" className="w-full bg-charcoal-50 py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-4">
          <h2
            className="text-3xl md:text-4xl font-serif text-charcoal-900"
            style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
          >
            Built for Your Industry
          </h2>
          <div className="w-10 h-0.5 bg-accent-500 mt-4" />
        </div>
        <p className="text-charcoal-500 text-base font-light mb-10">
          Every site we build is specific to your business category and city. Here are live examples.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {SAMPLES.map((s, i) => (
            <div key={i} className="bg-white rounded-lg p-6 border border-charcoal-100 shadow-card flex flex-col gap-3">
              <div>
                <p className="font-semibold text-charcoal-900 text-base">{s.industry}</p>
                <p className="text-charcoal-500 text-sm">{s.city}</p>
              </div>
              <a
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-accent-600 hover:text-accent-700 font-medium text-sm transition-colors"
              >
                View Sample Site
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          ))}
        </div>

        <p className="text-charcoal-500 text-sm font-light">
          Your site will be built to the same standard, specific to your business and your city.
        </p>
      </div>
    </section>
  )
}

// ─── Case Studies ─────────────────────────────────────────────────────────────

const CASES = [
  {
    tag: 'HVAC — Houston, TX',
    before: 'No website, no Google listing, not appearing in any local searches.',
    after: 'Google profile seen 340 times. 4 new customer reviews. 23 customer inquiries handled automatically while the owner was on jobs. First new customer from Google search within 3 weeks.',
  },
  {
    tag: 'Plumbing — Phoenix, AZ',
    before: 'Facebook page only. Competitors showing up on Google Maps, they were not.',
    after: 'Google profile views up from zero to 290. 6 new Google reviews. 18 customer inquiries handled via WhatsApp. Owner said the handler alone was worth the monthly fee.',
  },
  {
    tag: 'Dental — San Antonio, TX',
    before: 'Outdated website, no active Google Business Profile, missing from local search.',
    after: '8 new Google reviews. New patient inquiries via WhatsApp handler started in week two. Review growth now happens automatically with zero staff time.',
  },
  {
    tag: 'Auto Repair — Columbus, OH',
    before: 'Open 11 years, running entirely on word of mouth. No website, no Google listing.',
    after: '340 Google profile views. 5 new reviews. 31 customer inquiries handled via WhatsApp while owner was working in the shop.',
  },
  {
    tag: 'Landscaping — Jacksonville, FL',
    before: 'Seasonal business with no online presence. Slow winters with no inquiry flow.',
    after: 'Consistent inquiries through winter for first time in three years. 12 new reviews in 60 days. Google profile seen 410 times in month two. Owner pre-booked spring jobs in January.',
  },
]

function CaseStudies() {
  return (
    <section className="w-full bg-white py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <h2
            className="text-3xl md:text-4xl font-serif text-charcoal-900"
            style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
          >
            What Happens in the First 30 Days
          </h2>
          <div className="w-10 h-0.5 bg-accent-500 mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CASES.map((c, i) => (
            <div key={i} className="border border-charcoal-100 rounded-lg overflow-hidden shadow-card">
              <div className="bg-charcoal-50 px-5 py-3 border-b border-charcoal-100">
                <span className="text-xs font-bold text-charcoal-700 tracking-wide uppercase">{c.tag}</span>
              </div>
              <div className="p-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <p className="text-[10px] font-bold text-charcoal-400 tracking-widest uppercase mb-1.5">Before</p>
                  <p className="text-charcoal-600 text-sm font-light leading-relaxed">{c.before}</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-accent-600 tracking-widest uppercase mb-1.5">After 30 Days</p>
                  <p className="text-charcoal-700 text-sm font-light leading-relaxed">{c.after}</p>
                </div>
                
              </div>
              <p className="text-accent-600 text-center py-4 text-sm ">
                Want the same results for your business? Text ‘AUDIT’ to +1 415 523 8886
              </p>
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
    business: 'HVAC — Texas',
    name: 'James M.',
    quote: 'Customers are finding us on Google now that weren\'t before. The WhatsApp handler takes care of inquiries while I\'m out on jobs. Exactly what I needed.',
  },
  {
    img: '/client2.png',
    business: 'Roofing — Florida',
    name: 'Ray S.',
    quote: 'They set everything up and I haven\'t had to think about it since. Reviews keep coming in, Google listing is active. Worth every cent.',
  },
  {
    img: '/client3.png',
    business: 'Auto Repair — Ohio',
    name: 'Tony K.',
    quote: 'Didn\'t realize how much business I was missing by not showing up online. That changed within the first two weeks.',
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
            <div key={i} className="bg-white rounded-lg p-6 border border-charcoal-100 shadow-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0 border border-accent-200">
                  <Image src={t.img} alt={t.name} width={60} height={60} className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="text-xs font-bold text-charcoal-800 tracking-wide uppercase">{t.business}</p>
                  <p className="text-xs text-charcoal-400">{t.name}</p>
                </div>
              </div>
              <div className="flex gap-0.5 mb-3" aria-label="5 stars">
                {[...Array(5)].map((_, s) => (
                  <svg key={s} width="12" height="12" viewBox="0 0 12 12" fill="#fbbf24" aria-hidden="true">
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

// ─── Perfect For ──────────────────────────────────────────────────────────────

const TRADES = [
  'HVAC', 'Roofing', 'Pest Control', 'Auto Repair',
  'Local Contractors', 'Plumbing', 'Electrical', 'Landscaping',
  'Dental', 'Other Local Services',
]

function PerfectFor() {
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
              If you provide local services and need a professional, managed online presence, this is built for you.
            </p>
            <p className="text-charcoal-400 text-sm mt-4 font-light">
              No technical knowledge required. We handle everything from day one.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Pricing ──────────────────────────────────────────────────────────────────

function Pricing() {
  return (
    <section id="pricing" className="w-full bg-charcoal-50 py-20 px-6 border-y border-charcoal-100">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12 text-center">
          <h2
            className="text-3xl md:text-4xl font-serif text-charcoal-900"
            style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
          >
            One Plan. Everything Included.
          </h2>
          <div className="w-10 h-0.5 bg-accent-500 mt-4 mx-auto" />
        </div>

        <div className="max-w-sm mx-auto">
          <div className="bg-white rounded-xl border border-charcoal-200 shadow-card p-8 text-center">
            <div className="mb-6">
              <span className="text-5xl font-bold text-charcoal-900" style={{ letterSpacing: '-0.02em' }}>$249</span>
              <span className="text-charcoal-500 text-lg font-light"> / month</span>
            </div>

            <ul className="text-left space-y-3 mb-8">
              {[
                'Mobile-first website, live in 48 hours',
                'Google Business Profile claimed and managed',
                'WhatsApp customer handler, 24/7',
                'Review collection and responses',
                'Social content — 12 posts per month',
                'Monthly text report',
                'No setup fee',
                'No contracts',
                'Cancel anytime',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0 mt-0.5" aria-hidden="true">
                    <path d="M3 8l4 4 6-6" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-charcoal-700 text-sm">{item}</span>
                </li>
              ))}
            </ul>

            <a
              href="https://buy.stripe.com/5kQ9AS26n0ZyfKb8uR7Vm13"
              className="block w-full bg-accent-600 hover:bg-accent-700 text-white font-semibold text-base px-8 py-4 rounded-lg shadow-sm transition-colors text-center"
            >
              Get Started Today
            </a>

            <p className="text-xs text-charcoal-400 mt-4">
              We will reach out within a few hours to confirm your details and get everything live.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────

const FAQS = [
  {
    q: 'How quickly does everything go live?',
    a: 'Your website and WhatsApp handler are live within 48 hours of signing up. Your Google Business Profile is typically live within 24–48 hours for phone-verified businesses, or within 14 days if Google requires a postcard verification. We handle the entire process.',
  },
  {
    q: 'Do I need to do anything to get started?',
    a: 'After signing up you fill in a short form with your business details — name, address, phone, services, and hours. Takes about 3 minutes. We build everything from there. No logins, no back and forth.',
  },
  {
    q: 'What exactly is the WhatsApp customer handler?',
    a: 'A dedicated WhatsApp number for your business that handles customer inquiries automatically, 24 hours a day. When a customer texts asking about pricing, availability, or directions, they get an instant accurate response in your business name. You stop missing inquiries that come in while you are on a job or asleep.',
  },
  {
    q: 'Can I cancel anytime?',
    a: 'Yes. Monthly rolling, no contracts. Give us 30 days notice and we cancel immediately. No penalties, no questions.',
  },
  {
    q: 'I already have a website. Can you still help?',
    a: 'Yes. If you have a website but are not actively managing your Google listing, collecting reviews, or handling customer inquiries — we take all of that over. The website is one part of what we manage.',
  },
  {
    q: 'How does the monthly text report work?',
    a: 'On the 1st of every month you get a single text from us showing how many times your Google profile was seen, how many customer WhatsApp messages we handled, how many new reviews came in, and how many people visited your website. Reads in 10 seconds.',
  },
  {
    q: 'Who is ClearwayWeb?',
    a: 'A US-based digital management company focused on local service businesses. We manage the complete online presence of hundreds of businesses across the country so owners can focus on their work.',
  },
]

function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="w-full bg-white py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12">
          <h2
            className="text-3xl md:text-4xl font-serif text-charcoal-900"
            style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
          >
            Common Questions
          </h2>
          <div className="w-10 h-0.5 bg-accent-500 mt-4" />
        </div>

        <div className="divide-y divide-charcoal-100">
          {FAQS.map((faq, i) => (
            <div key={i}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between py-5 text-left gap-4"
              >
                <span className="font-semibold text-charcoal-900 text-sm">{faq.q}</span>
                <svg
                  width="16" height="16" viewBox="0 0 16 16" fill="none"
                  className={`flex-shrink-0 transition-transform ${open === i ? 'rotate-180' : ''}`}
                  aria-hidden="true"
                >
                  <path d="M3 6l5 5 5-5" stroke="#6b7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              {open === i && (
                <div className="pb-5">
                  <p className="text-charcoal-600 text-sm font-light leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
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
          Stop being invisible. Start getting found.
        </h2>

        <div className="flex justify-center gap-3 items-center mt-4">

          <a href="https://wa.me/14155238886?text=AUDIT" className="bg-accent-600 text-white px-8 py-4 rounded-lg w-full sm:w-auto">
            Text ‘AUDIT’
            
          </a>

          <a href="https://cal.com/clearwayweb/clearwayweb-discovery-call" className="border border-charcoal-300 px-8 py-4 rounded-lg w-full sm:w-auto">
            Book call
          </a>

          <a href="https://wa.me/14155238886" className="bg-charcoal-900 text-white px-8 py-4 rounded-lg w-full sm:w-auto">
            Live demo
          </a>

        </div>

        <p className="text-xs text-charcoal-400 mt-5">
          $249/mo – Website + Google + 24/7 WhatsApp handler.  
          5+ new inquiries in 30 days or first month FREE.
        </p>
        <p className="text-sm font-semibold text-charcoal-700 mt-2">
              Full handler in your business name goes live in 48 hours after signup.
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
            <Image
              src="/clearwayweb_logo.jpeg"
              alt="ClearwayWeb Logo"
              width={80}
              height={40}
              className="object-contain"
              priority
            />
            <p className="text-charcoal-500 text-xs font-light">
              Operated by ClearwayWeb LLC
            </p>
          </div>

          <div className="space-y-1.5 text-right">
            <div className="flex items-center gap-4 justify-end mt-3">
              <a href="/privacy" className="text-charcoal-400 hover:text-charcoal-700 text-xs transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-charcoal-400 hover:text-charcoal-700 text-xs transition-colors">
                Terms
              </a>

            </div>
            <p className="text-charcoal-500 text-sm mt-2">
              $249/month – Everything Included
            </p>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-charcoal-100">
          <p className="text-charcoal-300 text-[11px] font-light">
            &copy; 2026 ClearwayWeb. All rights reserved.
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
      <Nav />
      <Hero />
      <PricingHighlight />
      <Problem />
      <HowItWorks />
      <WhatsIncluded />
      <LiveDemo />
      <SampleSites />
      <CaseStudies />
      <Testimonials />
      <PerfectFor />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
      <div className="fixed bottom-0 left-0 w-full bg-charcoal-900 text-white text-center py-1 px-4 z-50 text-sm">
        $249/mo – Website + Google + 24/7 WhatsApp handler.  
        5+ new inquiries in 30 days or first month FREE.  
        <a href="https://wa.me/14155238886?text=AUDIT" className="underline font-semibold ml-1">
          Text ‘AUDIT’
        </a>
        <p className="text-sm font-semibold text-white mt-1">
          Full handler in your business name goes live in 48 hours after signup.
        </p>
      </div>
    </main>
  )
}
