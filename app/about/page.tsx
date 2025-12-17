'use client';

import { Target, Eye, Heart, Shield, Users, Zap } from 'lucide-react';

export default function AboutPage() {
  const values = [
    {
      icon: Shield,
      title: 'Security First',
      description: 'Audited smart contracts and multi-sig treasury protection',
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'Governance by token holders, for token holders',
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Pushing boundaries with cutting-edge DeFi technology',
    },
    {
      icon: Heart,
      title: 'Transparency',
      description: 'Open-source code and regular community updates',
    },
  ];

  return (
    <div className="pt-24 pb-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">
            <span className="optik-gradient-text">About OPTIK</span>
          </h1>
          <p className="text-xl text-gray-400">
            Building the future of Solana DeFi gaming
          </p>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="optik-card">
            <Eye className="w-12 h-12 text-optik-blue mb-4" />
            <h2 className="text-2xl font-bold mb-4 optik-gradient-text">Our Vision</h2>
            <p className="text-gray-300 leading-relaxed">
              To create the most comprehensive and user-friendly DeFi ecosystem on Solana, where trading, staking, gaming, and token creation converge seamlessly.
            </p>
          </div>
          <div className="optik-card">
            <Target className="w-12 h-12 text-optik-cyan mb-4" />
            <h2 className="text-2xl font-bold mb-4 optik-gradient-text">Our Mission</h2>
            <p className="text-gray-300 leading-relaxed">
              Empower users with powerful DeFi tools while maintaining simplicity, security, and fairness. Make crypto accessible to everyone, from beginners to experts.
            </p>
          </div>
        </div>

        {/* Why Solana */}
        <div className="optik-card mb-16">
          <h2 className="text-3xl font-bold mb-6 optik-gradient-text">Why Solana?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-optik-blue mb-2">&lt;1s</div>
              <div className="text-sm text-gray-400">Block Time</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-optik-cyan mb-2">&lt;$0.01</div>
              <div className="text-sm text-gray-400">Transaction Fees</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-optik-teal mb-2">65k</div>
              <div className="text-sm text-gray-400">TPS</div>
            </div>
          </div>
          <p className="text-gray-300 mt-6 leading-relaxed">
            Solana's lightning-fast performance and minimal fees make it the perfect foundation for OPTIK. Users can trade, stake, and play without worrying about expensive gas fees or slow confirmations.
          </p>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center optik-gradient-text">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div key={index} className="optik-card">
                <value.icon className="w-10 h-10 text-optik-blue mb-3" />
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="optik-card text-center">
          <h2 className="text-3xl font-bold mb-4 optik-glow-text">Join the Revolution</h2>
          <p className="text-gray-400 mb-6">
            Be part of the ecosystem from day one
          </p>
          <a href="/airdrop">
            <button className="optik-btn text-lg px-8 py-3">
              Join Airdrop
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
