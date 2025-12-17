'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, TrendingUp, Shield, Zap, Users, DollarSign, Trophy } from 'lucide-react';

export default function HomePage() {
  const stats = [
    { label: 'Total Value Locked', value: '$0', subtext: 'Coming Soon' },
    { label: 'Community Members', value: '0', subtext: 'Join Airdrop' },
    { label: 'Days to Launch', value: '30', subtext: 'Q1 2025' },
    { label: 'Token Supply', value: '1B', subtext: 'OPTIK Tokens' },
  ];

  const features = [
    {
      icon: TrendingUp,
      title: 'OPTIK DEX',
      description: 'Trade any Solana token with ultra-low 0.25% fees. Fast, secure, and decentralized.',
    },
    {
      icon: Shield,
      title: 'Staking Vaults',
      description: 'Earn up to 36% APY staking OPTIK tokens with flexible lock periods.',
    },
    {
      icon: Zap,
      title: 'Memecoin Launchpad',
      description: 'Launch your own token in minutes with AI-powered branding and auto-liquidity.',
    },
    {
      icon: Trophy,
      title: 'Play-to-Earn Games',
      description: 'Play daily crypto puzzles and games to earn OPTIK token rewards.',
    },
    {
      icon: DollarSign,
      title: 'Revenue Sharing',
      description: '50% of platform fees distributed to OPTIK stakers and holders.',
    },
    {
      icon: Users,
      title: 'Community Governed',
      description: 'Vote on proposals and help shape the future of the ecosystem.',
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-optik-blue rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-optik-cyan rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          {/* Logo */}
          <div className="flex justify-center mb-8 animate-float">
            <Image 
              src="/android-chrome-192x192.png" 
              alt="OPTIK" 
              width={120} 
              height={120}
              className="rounded-full"
            />
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6">
            <span className="optik-gradient-text">The Future of</span>
            <br />
            <span className="optik-glow-text">Solana DeFi Gaming</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Trade, stake, launch tokens, and play games - all in one powerful ecosystem powered by $OPTIK
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/airdrop">
              <button className="optik-btn text-lg px-8 py-4 flex items-center gap-2">
                Join Airdrop <ArrowRight size={20} />
              </button>
            </Link>
            <Link href="/whitepaper">
              <button className="bg-transparent border-2 border-optik-blue text-optik-blue hover:bg-optik-blue hover:text-optik-dark transition-all px-8 py-4 rounded-xl font-semibold">
                Read Whitepaper
              </button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20">
            {stats.map((stat, index) => (
              <div key={index} className="optik-card">
                <div className="text-3xl font-bold optik-gradient-text mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
                <div className="text-xs text-optik-blue mt-1">{stat.subtext}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="optik-gradient-text">Complete DeFi Ecosystem</span>
            </h2>
            <p className="text-xl text-gray-400">
              Everything you need to trade, earn, and grow on Solana
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="optik-card group cursor-pointer">
                <feature.icon className="w-12 h-12 text-optik-blue mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tokenomics Preview */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent to-optik-darker/50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            <span className="optik-gradient-text">Fair Launch Tokenomics</span>
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            1 Billion OPTIK tokens with transparent distribution
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
            <div className="optik-card">
              <div className="text-3xl font-bold text-optik-blue mb-2">40%</div>
              <div className="text-sm text-gray-400">Liquidity Pool</div>
            </div>
            <div className="optik-card">
              <div className="text-3xl font-bold text-optik-blue mb-2">20%</div>
              <div className="text-sm text-gray-400">Airdrop</div>
            </div>
            <div className="optik-card">
              <div className="text-3xl font-bold text-optik-blue mb-2">15%</div>
              <div className="text-sm text-gray-400">Team (Vested)</div>
            </div>
            <div className="optik-card">
              <div className="text-3xl font-bold text-optik-blue mb-2">10%</div>
              <div className="text-sm text-gray-400">Marketing</div>
            </div>
            <div className="optik-card">
              <div className="text-3xl font-bold text-optik-blue mb-2">10%</div>
              <div className="text-sm text-gray-400">Development</div>
            </div>
            <div className="optik-card">
              <div className="text-3xl font-bold text-optik-blue mb-2">5%</div>
              <div className="text-sm text-gray-400">Private Sale</div>
            </div>
          </div>

          <Link href="/tokenomics">
            <button className="optik-btn">View Full Tokenomics</button>
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center optik-card">
          <h2 className="text-4xl font-bold mb-6">
            <span className="optik-glow-text">Don't Miss the Airdrop</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join 200M OPTIK token airdrop - early supporters get 2x rewards
          </p>
          <Link href="/airdrop">
            <button className="optik-btn text-xl px-12 py-4">
              Claim Your Spot Now
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
