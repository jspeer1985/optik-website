'use client';

import { Check, Clock, Lock } from 'lucide-react';

export default function RoadmapPage() {
  const phases = [
    {
      phase: 'Phase 1: Foundation',
      quarter: 'Q1 2025',
      status: 'in-progress',
      items: [
        { text: 'Website launch', done: true },
        { text: 'Community building', done: true },
        { text: 'Whitepaper release', done: true },
        { text: 'Smart contract development', done: false },
        { text: 'Security audit', done: false },
        { text: 'Airdrop campaign', done: false },
      ],
    },
    {
      phase: 'Phase 2: Token Launch',
      quarter: 'Q2 2025',
      status: 'upcoming',
      items: [
        { text: 'Token Generation Event (TGE)', done: false },
        { text: 'Raydium DEX listing', done: false },
        { text: 'Airdrop distribution', done: false },
        { text: 'Staking pools activation', done: false },
        { text: 'First CEX listing', done: false },
        { text: 'Marketing campaign blitz', done: false },
      ],
    },
    {
      phase: 'Phase 3: Ecosystem Expansion',
      quarter: 'Q3 2025',
      status: 'locked',
      items: [
        { text: 'OPTIK DEX platform launch', done: false },
        { text: 'Vault system deployment', done: false },
        { text: 'Daily Crypto Puzzle game', done: false },
        { text: 'Mining game release', done: false },
        { text: 'NFT marketplace beta', done: false },
        { text: '3 additional CEX listings', done: false },
      ],
    },
    {
      phase: 'Phase 4: Gaming Platform',
      quarter: 'Q4 2025',
      status: 'locked',
      items: [
        { text: 'Full gaming platform launch', done: false },
        { text: 'Crash game, card battler, arcade', done: false },
        { text: 'Tournament system', done: false },
        { text: '3D casino metaverse beta', done: false },
        { text: 'Cross-chain bridge (Ethereum)', done: false },
        { text: 'Mobile app release', done: false },
      ],
    },
    {
      phase: 'Phase 5: Metaverse',
      quarter: '2026',
      status: 'locked',
      items: [
        { text: 'Full 3D casino metaverse launch', done: false },
        { text: 'Virtual land sales', done: false },
        { text: 'Avatar NFT collection', done: false },
        { text: 'Major exchange listings (Binance, Coinbase)', done: false },
        { text: 'Strategic partnerships', done: false },
        { text: 'DAO governance launch', done: false },
      ],
    },
  ];

  const getStatusIcon = (status: string) => {
    if (status === 'in-progress') return <Clock className="w-6 h-6 text-optik-blue" />;
    if (status === 'upcoming') return <Clock className="w-6 h-6 text-optik-cyan" />;
    return <Lock className="w-6 h-6 text-gray-500" />;
  };

  const getStatusColor = (status: string) => {
    if (status === 'in-progress') return 'border-optik-blue bg-optik-blue/5';
    if (status === 'upcoming') return 'border-optik-cyan bg-optik-cyan/5';
    return 'border-gray-700 bg-gray-900/50';
  };

  return (
    <div className="pt-24 pb-20 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">
            <span className="optik-gradient-text">Roadmap</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Our journey to becoming the leading Solana DeFi gaming ecosystem
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-8">
          {phases.map((phase, index) => (
            <div 
              key={index} 
              className={`optik-card border-2 ${getStatusColor(phase.status)} relative`}
            >
              {/* Phase Badge */}
              <div className="absolute -top-4 left-6 flex items-center gap-2 bg-optik-darker px-4 py-2 rounded-full border border-optik-blue/30">
                {getStatusIcon(phase.status)}
                <span className="text-sm font-bold text-optik-blue">{phase.quarter}</span>
              </div>

              {/* Content */}
              <div className="mt-6">
                <h2 className="text-2xl font-bold mb-6 optik-gradient-text">
                  {phase.phase}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {phase.items.map((item, itemIndex) => (
                    <div 
                      key={itemIndex} 
                      className="flex items-start gap-3 p-3 rounded-lg bg-optik-darker/50"
                    >
                      <div className="mt-1">
                        {item.done ? (
                          <Check className="w-5 h-5 text-green-500" />
                        ) : phase.status === 'locked' ? (
                          <Lock className="w-5 h-5 text-gray-600" />
                        ) : (
                          <Clock className="w-5 h-5 text-optik-blue" />
                        )}
                      </div>
                      <span className={`text-sm ${
                        item.done 
                          ? 'text-green-400' 
                          : phase.status === 'locked' 
                            ? 'text-gray-500' 
                            : 'text-gray-300'
                      }`}>
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Progress Bar */}
              {phase.status !== 'locked' && (
                <div className="mt-6">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-400">Progress</span>
                    <span className="text-optik-blue font-bold">
                      {Math.round((phase.items.filter(i => i.done).length / phase.items.length) * 100)}%
                    </span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-optik-blue to-optik-cyan transition-all duration-500"
                      style={{ 
                        width: `${(phase.items.filter(i => i.done).length / phase.items.length) * 100}%` 
                      }}
                    ></div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center optik-card">
          <h2 className="text-3xl font-bold mb-4">
            <span className="optik-glow-text">Join Us on This Journey</span>
          </h2>
          <p className="text-gray-400 mb-6">
            Be part of the ecosystem from day one and shape our future
          </p>
          <a href="/airdrop">
            <button className="optik-btn text-lg px-8 py-3">
              Join Airdrop Now
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
