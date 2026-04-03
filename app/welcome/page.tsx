import Image from 'next/image'

export default function Welcome() {
  return (
    <div className="min-h-screen bg-charcoal-50 flex flex-col">
      <header className="w-full bg-white border-b border-charcoal-100 py-3 px-6">
        <div className="max-w-3xl mx-auto">
          <Image src="/clearwayweb_logo.jpeg" alt="ClearwayWeb" width={80} height={40} className="object-contain" />
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center px-6 py-20">
        <div className="max-w-lg text-center">
          <div className="w-16 h-16 rounded-full bg-accent-50 border border-accent-100 flex items-center justify-center mx-auto mb-8">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
              <path d="M5 14l7 7 11-11" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          <h1
            className="text-3xl md:text-4xl font-serif text-charcoal-900 mb-4"
            style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
          >
            You are all set.
          </h1>

          <p className="text-charcoal-600 text-lg font-light leading-relaxed">
            We are building everything now. Expect a text from us within 48 hours confirming everything is live.
          </p>

          <p className="text-charcoal-400 text-sm mt-6">
            Questions? Reply to the text we send you.
          </p>
        </div>
      </main>
    </div>
  )
}
