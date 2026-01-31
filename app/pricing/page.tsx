/**
 * Pricing Page
 */

import { Check } from 'lucide-react';

export default function PricingPage() {
  const plans = [
    {
      name: 'Starter',
      price: 'Free',
      description: 'Perfect for new merchants',
      features: [
        'Zero monthly fees',
        '2.5% platform fee',
        'Up to 1,000 NFT supply',
        'Basic analytics',
        'Email support',
        '5% royalty max',
      ],
      cta: 'Get Started',
      highlighted: false,
    },
    {
      name: 'Growth',
      price: '10K OPTIK',
      description: 'For growing businesses',
      features: [
        'Zero monthly fees',
        '2.0% platform fee',
        'Up to 5,000 NFT supply',
        'Advanced analytics',
        'Priority support',
        '10% royalty max',
        'Custom branding',
      ],
      cta: 'Start Growing',
      highlighted: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large-scale operations',
      features: [
        'Zero monthly fees',
        '0.75% platform fee',
        'Unlimited NFT supply',
        'Real-time analytics',
        'Dedicated support',
        '20% royalty max',
        'White-label solution',
        'API access',
      ],
      cta: 'Contact Sales',
      highlighted: false,
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold optik-gradient-text mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            No monthly fees. No hidden costs. Pay only when you earn.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`optik-glass p-8 rounded-2xl border transition-all ${
                plan.highlighted
                  ? 'border-optik-blue/60 scale-105'
                  : 'border-optik-blue/20'
              }`}
            >
              {plan.highlighted && (
                <div className="bg-gradient-to-r from-optik-blue to-optik-purple text-white text-sm font-bold px-3 py-1 rounded-full inline-block mb-4">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold optik-gradient-text">{plan.price}</span>
                {plan.price !== 'Free' && plan.price !== 'Custom' && (
                  <span className="text-gray-400"> staked</span>
                )}
              </div>
              <p className="text-gray-400 mb-6">{plan.description}</p>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-2 text-gray-300">
                    <Check className="w-5 h-5 text-optik-blue flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="/onboard"
                className={`block text-center py-3 rounded-lg font-semibold transition ${
                  plan.highlighted
                    ? 'optik-btn'
                    : 'bg-white/10 hover:bg-white/20 border border-white/20 text-white'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="optik-glass p-8 rounded-2xl border border-optik-blue/20">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Compare with Traditional Platforms
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left text-gray-400 py-4">Feature</th>
                  <th className="text-center text-optik-blue py-4">OPTIK</th>
                  <th className="text-center text-gray-400 py-4">Shopify</th>
                  <th className="text-center text-gray-400 py-4">WooCommerce</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="border-b border-white/10">
                  <td className="py-4">Monthly Fee</td>
                  <td className="text-center text-green-400">$0</td>
                  <td className="text-center">$29-$299</td>
                  <td className="text-center">$35+</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-4">Transaction Fee</td>
                  <td className="text-center text-green-400">0.75%-2.5%</td>
                  <td className="text-center">2.9% + 30¢</td>
                  <td className="text-center">2.9% + 30¢</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-4">NFT Integration</td>
                  <td className="text-center text-green-400">✓ Native</td>
                  <td className="text-center text-red-400">✗</td>
                  <td className="text-center text-yellow-400">Plugins</td>
                </tr>
                <tr>
                  <td className="py-4">Annual Cost (at $100K revenue)</td>
                  <td className="text-center text-green-400 font-bold">$750-$2,500</td>
                  <td className="text-center">$6,480</td>
                  <td className="text-center">$3,320</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
