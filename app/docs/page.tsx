/**
 * Documentation Page
 */

import { Book, Code, FileText, Rocket } from 'lucide-react';

export default function DocsPage() {
  const sections = [
    {
      icon: Rocket,
      title: 'Getting Started',
      description: 'Quick start guide for merchants and traders',
      links: [
        'Connect Your Wallet',
        'First Trade on DEX',
        'Merchant Onboarding Guide',
        'NFT Minting Tutorial',
      ],
    },
    {
      icon: Code,
      title: 'API Reference',
      description: 'Complete API documentation for developers',
      links: [
        'Authentication',
        'Merchant API',
        'NFT API',
        'Trading API',
      ],
    },
    {
      icon: FileText,
      title: 'Smart Contracts',
      description: 'Contract addresses and technical specs',
      links: [
        'Token Contract',
        'NFT Contract',
        'Staking Contract',
        'Audit Reports',
      ],
    },
    {
      icon: Book,
      title: 'Guides & Tutorials',
      description: 'Step-by-step guides for common tasks',
      links: [
        'Setting Up NFT Tiers',
        'Staking OPTIK Tokens',
        'Creating a Launchpad Project',
        'Advanced Trading Strategies',
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold optik-gradient-text mb-4">Documentation</h1>
          <p className="text-xl text-gray-300">
            Everything you need to know about building on OPTIK
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {sections.map((section, i) => (
            <div key={i} className="optik-glass p-8 rounded-2xl border border-optik-blue/20">
              <section.icon className="w-12 h-12 text-optik-blue mb-4" />
              <h2 className="text-2xl font-bold text-white mb-3">{section.title}</h2>
              <p className="text-gray-400 mb-6">{section.description}</p>
              <ul className="space-y-2">
                {section.links.map((link, j) => (
                  <li key={j}>
                    <a href="#" className="text-optik-blue hover:underline">
                      → {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="optik-glass p-8 rounded-2xl border border-optik-blue/20 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Need Help?</h3>
          <p className="text-gray-300 mb-6">
            Our team is here to support you 24/7
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="optik-btn px-6 py-3">
              Contact Support
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
