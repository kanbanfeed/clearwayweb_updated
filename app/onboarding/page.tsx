'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'

const CATEGORIES = ['HVAC', 'Plumbing', 'Dental', 'Auto Repair', 'Landscaping', 'Other']

export default function Onboarding() {
  const [hasDomain, setHasDomain] = useState<'yes' | 'no' | ''>('')
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')
  const fileRef = useRef<HTMLInputElement>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitting(true)
    setError('')

    const form = e.currentTarget
    const data = new FormData(form)

    const payload = {
      businessName: data.get('businessName'),
      yourName: data.get('yourName'),
      phone: data.get('phone'),
      address: data.get('address'),
      city: data.get('city'),
      state: data.get('state'),
      zip: data.get('zip'),
      category: data.get('category'),
      services: data.get('services'),
      hours: data.get('hours'),
      hasDomain: data.get('hasDomain'),
      domain: data.get('domain') || '',
      notes: data.get('notes') || '',
    }

    try {
      // POST to Airtable webhook (URL to be added once Airtable is set up)
      const AIRTABLE_WEBHOOK = process.env.NEXT_PUBLIC_AIRTABLE_WEBHOOK || ''
      if (AIRTABLE_WEBHOOK) {
        await fetch(AIRTABLE_WEBHOOK, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        })
      }

      // Redirect to welcome page
      window.location.href = '/welcome'
    } catch {
      setError('Something went wrong. Please try again or email us directly.')
      setSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-charcoal-50">
      {/* Header */}
      <header className="w-full bg-white border-b border-charcoal-100 py-3 px-6">
        <div className="max-w-3xl mx-auto">
          <Image src="/clearwayweb_logo.jpeg" alt="ClearwayWeb" width={80} height={40} className="object-contain" />
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-16">
        <div className="mb-10">
          <h1
            className="text-3xl md:text-4xl font-serif text-charcoal-900 mb-3"
            style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
          >
            Welcome to ClearwayWeb — Let&apos;s Get You Set Up
          </h1>
          <p className="text-charcoal-500 text-base font-light">
            Takes about 3 minutes. This is everything we need to build your website, Google listing, and WhatsApp handler.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-charcoal-100 shadow-card p-8 space-y-6">

          {/* Business Name */}
          <div>
            <label className="block text-sm font-semibold text-charcoal-800 mb-1.5">
              Business name <span className="text-accent-600">*</span>
            </label>
            <input
              name="businessName"
              required
              type="text"
              placeholder="e.g. Johnson HVAC Services"
              className="w-full border border-charcoal-200 rounded-lg px-4 py-3 text-sm text-charcoal-900 placeholder-charcoal-400 focus:outline-none focus:ring-2 focus:ring-accent-300 focus:border-accent-400 transition"
            />
          </div>

          {/* Your Name */}
          <div>
            <label className="block text-sm font-semibold text-charcoal-800 mb-1.5">
              Your name <span className="text-accent-600">*</span>
            </label>
            <input
              name="yourName"
              required
              type="text"
              placeholder="e.g. Mike Johnson"
              className="w-full border border-charcoal-200 rounded-lg px-4 py-3 text-sm text-charcoal-900 placeholder-charcoal-400 focus:outline-none focus:ring-2 focus:ring-accent-300 focus:border-accent-400 transition"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-semibold text-charcoal-800 mb-1.5">
              Business phone number <span className="text-accent-600">*</span>
            </label>
            <input
              name="phone"
              required
              type="tel"
              placeholder="e.g. (713) 555-0100"
              className="w-full border border-charcoal-200 rounded-lg px-4 py-3 text-sm text-charcoal-900 placeholder-charcoal-400 focus:outline-none focus:ring-2 focus:ring-accent-300 focus:border-accent-400 transition"
            />
          </div>

          {/* Address */}
          <div>
            <label className="block text-sm font-semibold text-charcoal-800 mb-1.5">
              Business address <span className="text-accent-600">*</span>
            </label>
            <input
              name="address"
              required
              type="text"
              placeholder="Street address"
              className="w-full border border-charcoal-200 rounded-lg px-4 py-3 text-sm text-charcoal-900 placeholder-charcoal-400 focus:outline-none focus:ring-2 focus:ring-accent-300 focus:border-accent-400 transition mb-2"
            />
            <div className="grid grid-cols-3 gap-2">
              <input
                name="city"
                required
                type="text"
                placeholder="City"
                className="border border-charcoal-200 rounded-lg px-4 py-3 text-sm text-charcoal-900 placeholder-charcoal-400 focus:outline-none focus:ring-2 focus:ring-accent-300 focus:border-accent-400 transition"
              />
              <input
                name="state"
                required
                type="text"
                placeholder="State"
                className="border border-charcoal-200 rounded-lg px-4 py-3 text-sm text-charcoal-900 placeholder-charcoal-400 focus:outline-none focus:ring-2 focus:ring-accent-300 focus:border-accent-400 transition"
              />
              <input
                name="zip"
                required
                type="text"
                placeholder="ZIP"
                className="border border-charcoal-200 rounded-lg px-4 py-3 text-sm text-charcoal-900 placeholder-charcoal-400 focus:outline-none focus:ring-2 focus:ring-accent-300 focus:border-accent-400 transition"
              />
            </div>
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-semibold text-charcoal-800 mb-1.5">
              Business category <span className="text-accent-600">*</span>
            </label>
            <select
              name="category"
              required
              defaultValue=""
              className="w-full border border-charcoal-200 rounded-lg px-4 py-3 text-sm text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-accent-300 focus:border-accent-400 transition bg-white"
            >
              <option value="" disabled>Select your category</option>
              {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>

          {/* Services */}
          <div>
            <label className="block text-sm font-semibold text-charcoal-800 mb-1.5">
              Main services offered <span className="text-accent-600">*</span>
            </label>
            <textarea
              name="services"
              required
              rows={3}
              placeholder="e.g. AC installation, furnace repair, duct cleaning, emergency service"
              className="w-full border border-charcoal-200 rounded-lg px-4 py-3 text-sm text-charcoal-900 placeholder-charcoal-400 focus:outline-none focus:ring-2 focus:ring-accent-300 focus:border-accent-400 transition resize-none"
            />
          </div>

          {/* Hours */}
          <div>
            <label className="block text-sm font-semibold text-charcoal-800 mb-1.5">
              Business hours <span className="text-accent-600">*</span>
            </label>
            <input
              name="hours"
              required
              type="text"
              placeholder="e.g. Mon–Fri 7am–6pm, Sat 8am–2pm, emergency calls 24/7"
              className="w-full border border-charcoal-200 rounded-lg px-4 py-3 text-sm text-charcoal-900 placeholder-charcoal-400 focus:outline-none focus:ring-2 focus:ring-accent-300 focus:border-accent-400 transition"
            />
          </div>

          {/* Domain */}
          <div>
            <label className="block text-sm font-semibold text-charcoal-800 mb-2">
              Do you already have a domain? <span className="text-accent-600">*</span>
            </label>
            <div className="flex gap-4 mb-3">
              {(['yes', 'no'] as const).map(val => (
                <label key={val} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="hasDomain"
                    value={val}
                    required
                    onChange={() => setHasDomain(val)}
                    className="accent-accent-600"
                  />
                  <span className="text-sm text-charcoal-700 capitalize">{val}</span>
                </label>
              ))}
            </div>
            {hasDomain === 'yes' && (
              <input
                name="domain"
                type="text"
                placeholder="e.g. johnsonhvac.com"
                className="w-full border border-charcoal-200 rounded-lg px-4 py-3 text-sm text-charcoal-900 placeholder-charcoal-400 focus:outline-none focus:ring-2 focus:ring-accent-300 focus:border-accent-400 transition"
              />
            )}
          </div>

          {/* Notes */}
          <div>
            <label className="block text-sm font-semibold text-charcoal-800 mb-1.5">
              Anything specific you want customers to know? <span className="text-charcoal-400 font-normal">(optional)</span>
            </label>
            <textarea
              name="notes"
              rows={3}
              placeholder="e.g. Family-owned since 1998. Free estimates. Licensed and insured."
              className="w-full border border-charcoal-200 rounded-lg px-4 py-3 text-sm text-charcoal-900 placeholder-charcoal-400 focus:outline-none focus:ring-2 focus:ring-accent-300 focus:border-accent-400 transition resize-none"
            />
          </div>

          {/* Logo Upload */}
          <div>
            <label className="block text-sm font-semibold text-charcoal-800 mb-1.5">
              Upload your logo <span className="text-charcoal-400 font-normal">(optional — jpg, png, svg only)</span>
            </label>
            <input
              ref={fileRef}
              name="logo"
              type="file"
              accept=".jpg,.jpeg,.png,.svg"
              className="w-full text-sm text-charcoal-600 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-accent-50 file:text-accent-700 hover:file:bg-accent-100 transition"
            />
          </div>

          {error && (
            <p className="text-red-600 text-sm">{error}</p>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-accent-600 hover:bg-accent-700 disabled:opacity-60 text-white font-semibold text-base px-8 py-4 rounded-lg shadow-sm transition-colors"
          >
            {submitting ? 'Submitting...' : 'Submit My Details'}
          </button>

          <p className="text-xs text-charcoal-400 text-center">
            We will reach out within a few hours. Your website and WhatsApp handler will be live within 48 hours.
          </p>
        </form>
      </main>
    </div>
  )
}
