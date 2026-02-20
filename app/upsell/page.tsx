'use client'

import { useState } from 'react'

const ADDONS = [
  {
    id: 'logo',
    name: 'Logo Pack',
    price: 50,
    stripeLink: 'https://buy.stripe.com/28E8wOdP58s0cxZbH37Vm0W'
  },
  {
    id: 'priority',
    name: 'Priority 24-hour build',
    price: 75,
    stripeLink: 'https://buy.stripe.com/00w00i26nfUs9lNcL77Vm0X'
  },
  {
    id: 'service',
    name: 'Additional service page',
    price: 100,
    stripeLink: 'https://buy.stripe.com/9B64gy5iz5fO41tdPb7Vm0Y'
  },
  {
    id: 'seo',
    name: 'Basic SEO setup',
    price: 150,
    stripeLink: 'https://buy.stripe.com/3cIfZg26nfUs55xfXj7Vm0Z'
  }
]

export default function Upsell() {
  const [selected, setSelected] = useState<string | null>(null)

  const handleCheckout = () => {
    if (!selected) return

    const selectedAddon = ADDONS.find(a => a.id === selected)
    if (selectedAddon) {
      window.location.href = selectedAddon.stripeLink
    }
  }

  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-4 text-center">
        Enhance Your Order
      </h1>

      <p className="text-center text-gray-500 mb-10">
        Optional upgrades. One-time add-ons.
      </p>

      <div className="space-y-4">
        {ADDONS.map((addon) => {
          const isSelected = selected === addon.id

          return (
            <div
              key={addon.id}
              onClick={() => setSelected(addon.id)}
              className={`border p-6 rounded-md cursor-pointer transition
                ${isSelected ? 'border-accent-600 bg-accent-50' : 'border-gray-200'}
              `}
            >
              <div className="flex justify-between items-center">
                <p className="font-medium">{addon.name}</p>
                <p className="font-semibold">${addon.price}</p>
              </div>
            </div>
          )
        })}
      </div>

      <div className="mt-10 text-center space-y-4">
        <button
          onClick={handleCheckout}
          disabled={!selected}
          className="bg-accent-600 hover:bg-accent-700 disabled:opacity-40 text-white px-8 py-3 rounded-md font-semibold"
        >
          Add to My Order
        </button>

        <div>
          <a href="/" className="underline text-sm text-gray-500">
            No Thanks – Continue
          </a>
        </div>
      </div>
    </main>
  )
}
