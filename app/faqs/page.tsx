'use client';

/**
 * FAQs Page
 */

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      category: 'General',
      questions: [
        {
          q: 'What is OPTIK?',
          a: 'OPTIK is a comprehensive DeFi ecosystem on Solana, featuring a DEX, NFT marketplace, launchpad, and merchant onboarding platform. It combines trading, staking, and NFT utility in one unified platform.',
        },
        {
          q: 'How do I get started?',
          a: 'Connect your Solana wallet (Phantom, Solflare, etc.), acquire some SOL for transaction fees, and start trading on our DEX or participating in launchpad projects.',
        },
        {
          q: 'Is OPTIK audited?',
          a: 'Yes, all OPTIK smart contracts have been audited by CertiK and Halborn Security. Audit reports are available on our documentation.',
        },
      ],
    },
    {
      category: 'Merchant Platform',
      questions: [
        {
          q: 'What are the monthly fees?',
          a: 'Zero monthly fees! OPTIK charges only a small transaction fee (0.75%-2.5%) based on your OPTIK staking tier. No subscription costs, ever.',
        },
        {
          q: 'How long does onboarding take?',
          a: 'Most merchants complete onboarding in under 10 minutes. Your NFT collection can be minted immediately after approval.',
        },
        {
          q: 'Can I customize my NFT benefits?',
          a: 'Absolutely! You control the discounts, tier requirements, and benefits for each NFT tier (Bronze, Silver, Gold, Platinum).',
        },
      ],
    },
    {
      category: 'Token & Staking',
      questions: [
        {
          q: 'What is the OPTIK token utility?',
          a: 'OPTIK tokens provide: (1) Platform fee reduction (up to 70%), (2) Staking rewards (12-20% APY), (3) Governance voting rights, and (4) NFT minting discounts.',
        },
        {
          q: 'How does staking work?',
          a: 'Stake OPTIK tokens to earn rewards from platform transaction fees. The more you stake, the higher your APY (up to 20%) and the lower your platform fees.',
        },
        {
          q: 'Is there a lock-up period?',
          a: 'No mandatory lock-up for basic staking (12% APY). Optional lock-ups (3, 6, or 12 months) provide higher APY up to 20%.',
        },
      ],
    },
    {
      category: 'NFTs',
      questions: [
        {
          q: 'What are NFT tiers?',
          a: 'Bronze (1 NFT, 5% discount), Silver (3+ NFTs, 10% discount), Gold (5+ NFTs, 15% discount), Platinum (10+ NFTs, 25% discount). Each tier unlocks additional benefits.',
        },
        {
          q: 'Can I trade my NFTs?',
          a: 'Yes! All OPTIK NFTs can be traded on secondary markets. Creators earn royalties (0-20%) on every resale.',
        },
        {
          q: 'Do NFTs work across merchants?',
          a: 'Currently, each merchant has their own NFT collection. Cross-merchant benefits are planned for Phase 2 (Year 2).',
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold optik-gradient-text mb-4">Frequently Asked Questions</h1>
        <p className="text-gray-300 mb-12">Find answers to common questions about OPTIK</p>

        <div className="space-y-8">
          {faqs.map((category, catIndex) => (
            <div key={catIndex}>
              <h2 className="text-2xl font-bold text-white mb-4">{category.category}</h2>
              <div className="space-y-4">
                {category.questions.map((faq, qIndex) => {
                  const globalIndex = catIndex * 100 + qIndex;
                  const isOpen = openIndex === globalIndex;

                  return (
                    <div
                      key={qIndex}
                      className="optik-glass border border-optik-blue/20 rounded-xl overflow-hidden"
                    >
                      <button
                        onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
                        className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-white/5 transition"
                      >
                        <span className="text-white font-semibold pr-4">{faq.q}</span>
                        <ChevronDown
                          className={`w-5 h-5 text-optik-blue flex-shrink-0 transition-transform ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      {isOpen && (
                        <div className="px-6 pb-4 text-gray-300">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-16 optik-glass p-8 rounded-2xl border border-optik-blue/20 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Still have questions?</h3>
          <p className="text-gray-300 mb-6">
            Our support team is here to help 24/7
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:support@optik.io" className="optik-btn px-6 py-3">
              Email Support
            </a>
            <a href="https://discord.gg/optik" className="bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg px-6 py-3 text-white font-semibold transition">
              Join Discord
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
