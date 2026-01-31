'use client';

import { Wallet, ShoppingCart, CreditCard, Package, Shield, Zap } from 'lucide-react';
import Link from 'next/link';

export default function HowItWorksPage() {
  const steps = [
    {
      number: '01',
      icon: Wallet,
      title: 'Connect Your Wallet',
      description: 'Connect your Solana wallet (Phantom, Solflare, or any SPL-compatible wallet) to get started.',
      details: [
        'No account creation required',
        'Secure blockchain authentication',
        'Your keys, your crypto',
      ],
    },
    {
      number: '02',
      icon: ShoppingCart,
      title: 'Browse & Add to Cart',
      description: 'Explore our curated collection of digital products, NFTs, and exclusive merchandise.',
      details: [
        'Filter by category',
        'Real-time SOL pricing',
        'Detailed product information',
      ],
    },
    {
      number: '03',
      icon: CreditCard,
      title: 'Pay with Crypto',
      description: 'Complete your purchase using SOL or other supported SPL tokens directly from your wallet.',
      details: [
        'Lightning-fast transactions',
        'Low network fees (~$0.001)',
        'Instant confirmation',
      ],
    },
    {
      number: '04',
      icon: Package,
      title: 'Instant Delivery',
      description: 'Digital products are delivered immediately to your wallet. Physical items ship within 24 hours.',
      details: [
        'NFTs sent to your wallet',
        'Email confirmation',
        'Track your order anytime',
      ],
    },
  ];

  const benefits = [
    {
      icon: Shield,
      title: 'Secure & Trustless',
      description: 'All transactions are verified on the Solana blockchain, ensuring transparency and security.',
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Solana processes transactions in under 1 second with minimal fees.',
    },
    {
      icon: Wallet,
      title: 'True Ownership',
      description: 'Your purchases are yours forever, stored securely in your wallet.',
    },
  ];

  return (
    <div className="pt-24 px-4 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">
            <span className="gold-gradient-text">How It Works</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Shopping with cryptocurrency is simple, secure, and fast. Follow these easy steps to get started.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-12 mb-20">
          {steps.map((step, index) => (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
            >
              {/* Number & Icon */}
              <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <div className="gold-card">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-6xl font-bold gold-glow-text">{step.number}</span>
                    <step.icon className="w-16 h-16 text-optik-gold" />
                  </div>
                  <h2 className="text-3xl font-bold mb-3">{step.title}</h2>
                  <p className="text-gray-400 mb-6">{step.description}</p>
                  <ul className="space-y-2">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-optik-gold"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Visual */}
              <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
                <div className="bg-gradient-to-br from-optik-gold/10 to-optik-blue/10 rounded-2xl p-12 h-64 flex items-center justify-center">
                  <step.icon className="w-32 h-32 text-optik-gold opacity-50" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              <span className="gold-gradient-text">Why Shop Web3?</span>
            </h2>
            <p className="text-xl text-gray-400">
              Experience the future of online shopping
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="gold-card text-center group cursor-pointer">
                <benefit.icon className="w-16 h-16 text-optik-gold mb-4 mx-auto group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              <span className="gold-gradient-text">Frequently Asked Questions</span>
            </h2>
          </div>

          <div className="space-y-4">
            <div className="gold-card">
              <h3 className="text-xl font-bold mb-2 gold-gradient-text">What wallets are supported?</h3>
              <p className="text-gray-400">
                We support all major Solana wallets including Phantom, Solflare, Backpack, and any wallet compatible with the Solana blockchain.
              </p>
            </div>

            <div className="gold-card">
              <h3 className="text-xl font-bold mb-2 gold-gradient-text">What cryptocurrencies can I use?</h3>
              <p className="text-gray-400">
                We primarily accept SOL (Solana) and popular SPL tokens. The accepted tokens are displayed at checkout.
              </p>
            </div>

            <div className="gold-card">
              <h3 className="text-xl font-bold mb-2 gold-gradient-text">Are there any transaction fees?</h3>
              <p className="text-gray-400">
                You only pay the standard Solana network fee (typically $0.001 or less per transaction). There are no additional platform fees.
              </p>
            </div>

            <div className="gold-card">
              <h3 className="text-xl font-bold mb-2 gold-gradient-text">How do I get my purchased items?</h3>
              <p className="text-gray-400">
                Digital products and NFTs are automatically sent to your connected wallet address. Physical items are shipped to the address you provide at checkout.
              </p>
            </div>

            <div className="gold-card">
              <h3 className="text-xl font-bold mb-2 gold-gradient-text">What if I need help?</h3>
              <p className="text-gray-400">
                Our support team is available 24/7 to assist you. Contact us through our support page or join our Discord community.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center gold-card mb-12">
          <h2 className="text-4xl font-bold mb-6">
            <span className="gold-glow-text">Ready to Get Started?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of satisfied customers shopping with crypto
          </p>
          <Link href="/shop">
            <button className="gold-btn text-xl px-12 py-4">
              Start Shopping Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
