/**
 * Features Page
 */

import { Zap, Shield, DollarSign, Users, BarChart3, Rocket, Globe, Lock } from 'lucide-react';

export default function FeaturesPage() {
  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Built on Solana for sub-second transaction finality. Trade, stake, and mint NFTs instantly.',
      benefits: ['<400ms transactions', 'Zero lag trading', 'Instant confirmations'],
    },
    {
      icon: DollarSign,
      title: 'Ultra-Low Fees',
      description: 'Enjoy the lowest fees in DeFi. Platform fees as low as 0.75% with OPTIK staking.',
      benefits: ['~$0.00001 per tx', '0.75%-2.5% platform fee', '70% savings vs competitors'],
    },
    {
      icon: Shield,
      title: 'Bank-Grade Security',
      description: 'Audited by CertiK and Halborn. Multi-sig treasury. Your funds are safe.',
      benefits: ['Smart contract audits', 'Multi-sig protection', 'Insurance fund'],
    },
    {
      icon: Users,
      title: 'NFT Gating',
      description: 'Reward customers with tier-based benefits. 4 tiers from Bronze to Platinum.',
      benefits: ['5%-25% discounts', 'Exclusive access', 'Loyalty rewards'],
    },
    {
      icon: BarChart3,
      title: 'Real-Time Analytics',
      description: 'Comprehensive dashboard with sales tracking, customer insights, and revenue metrics.',
      benefits: ['Live sales data', 'Customer analytics', 'Growth tracking'],
    },
    {
      icon: Rocket,
      title: 'Token Launchpad',
      description: 'Launch new tokens with fair distribution. Community-voted projects only.',
      benefits: ['Fair launch model', 'Instant liquidity', 'Community governance'],
    },
    {
      icon: Globe,
      title: 'Global Access',
      description: 'Available worldwide 24/7. No geographic restrictions, no banking required.',
      benefits: ['24/7 availability', 'Borderless payments', 'No KYC for users'],
    },
    {
      icon: Lock,
      title: 'Self-Custody',
      description: 'Your keys, your crypto. We never hold your funds. Full control always.',
      benefits: ['Non-custodial', 'Wallet integration', 'Complete ownership'],
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold optik-gradient-text mb-4">
            Powerful Features
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Everything you need to build, launch, and scale your NFT-powered business
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, i) => (
            <div key={i} className="optik-glass p-8 rounded-2xl border border-optik-blue/20 hover:border-optik-blue/40 transition-all">
              <feature.icon className="w-12 h-12 text-optik-blue mb-4" />
              <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-300 mb-4">{feature.description}</p>
              <ul className="space-y-2">
                {feature.benefits.map((benefit, j) => (
                  <li key={j} className="text-gray-400 flex items-center gap-2">
                    <span className="text-optik-blue">✓</span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="optik-glass p-12 rounded-2xl border border-optik-blue/20 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of merchants and traders building the future of commerce on Solana
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/onboard" className="optik-btn px-8 py-3 text-lg">
              Become a Merchant
            </a>
            <a href="/dex" className="bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg px-8 py-3 text-white font-semibold transition">
              Start Trading
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
