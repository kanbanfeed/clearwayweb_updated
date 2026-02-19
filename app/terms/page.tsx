import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms – ClearwayWeb',
}

export default function Terms() {
  return (
    <main className="min-h-screen bg-white px-6 py-16">
      <div className="max-w-2xl mx-auto">
        <Link href="/" className="text-charcoal-900 font-semibold text-base tracking-tight block mb-10">
          Clearway<span className="text-accent-600">Web</span>
        </Link>
        <h1 className="text-3xl font-serif text-charcoal-900 mb-6">Terms of Service</h1>
        <p className="text-charcoal-500 text-sm font-light mb-4">
          This is a placeholder page. Replace with your actual terms of service before launching.
        </p>
        <p className="text-charcoal-400 text-sm font-light">
          ClearwayWeb is operated by Crowbar Ventures Limited, 71–75 Shelton Street, Covent Garden, London WC2H 9JQ, United Kingdom.
        </p>
        <div className="mt-10">
          <Link href="/" className="text-accent-600 text-sm hover:underline">← Back to home</Link>
        </div>
      </div>
    </main>
  )
}
