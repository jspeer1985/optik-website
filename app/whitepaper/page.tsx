'use client';

import { Download, FileText } from 'lucide-react';

export default function WhitepaperPage() {
  const sections = [
    { id: 'executive', title: 'Executive Summary' },
    { id: 'problem', title: 'Problem Statement' },
    { id: 'solution', title: 'OPTIK Solution' },
    { id: 'technology', title: 'Technology Architecture' },
    { id: 'tokenomics', title: 'Tokenomics' },
    { id: 'ecosystem', title: 'Ecosystem Components' },
    { id: 'roadmap', title: 'Roadmap' },
    { id: 'team', title: 'Team & Governance' },
  ];

  return (
    <div className="pt-24 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">
            <span className="optik-gradient-text">Whitepaper</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Technical documentation for the OPTIK Ecosystem
          </p>
          <button className="optik-btn flex items-center gap-2 mx-auto">
            <Download size={20} />
            Download PDF
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar TOC */}
          <div className="lg:col-span-1">
            <div className="optik-card sticky top-24">
              <h3 className="font-bold mb-4 optik-gradient-text">Table of Contents</h3>
              <nav className="space-y-2">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="block text-sm text-gray-400 hover:text-optik-blue transition-colors py-1"
                  >
                    {section.title}
                  </a>
                ))}
              </nav>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-3 space-y-12">
            {/* Executive Summary */}
            <section id="executive" className="optik-card">
              <h2 className="text-3xl font-bold mb-6 optik-gradient-text flex items-center gap-3">
                <FileText className="text-optik-blue" />
                Executive Summary
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  OPTIK Ecosystem is a comprehensive Solana-based DeFi platform that combines decentralized exchange (DEX) trading, staking vaults, play-to-earn gaming, and a memecoin launchpad into a single, unified ecosystem.
                </p>
                <p>
                  Built on Solana's high-performance blockchain, OPTIK leverages sub-second transaction speeds and minimal fees to provide users with an unparalleled DeFi experience. The native $OPTIK token powers the entire ecosystem, providing utility across all platform features.
                </p>
                <p className="font-semibold text-optik-blue">
                  Key Features:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Ultra-low 0.25% trading fees on OPTIK DEX</li>
                  <li>Up to 36% APY staking rewards</li>
                  <li>AI-powered memecoin launchpad</li>
                  <li>Play-to-earn gaming platform</li>
                  <li>Revenue sharing with token holders</li>
                </ul>
              </div>
            </section>

            {/* Problem Statement */}
            <section id="problem" className="optik-card">
              <h2 className="text-3xl font-bold mb-6 optik-gradient-text">Problem Statement</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  The current DeFi landscape suffers from several critical issues:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                  <div className="bg-optik-darker p-4 rounded-lg">
                    <h3 className="font-bold text-optik-blue mb-2">Fragmentation</h3>
                    <p className="text-sm text-gray-400">Users must navigate multiple platforms for different DeFi activities</p>
                  </div>
                  <div className="bg-optik-darker p-4 rounded-lg">
                    <h3 className="font-bold text-optik-blue mb-2">High Fees</h3>
                    <p className="text-sm text-gray-400">Ethereum gas fees make small transactions uneconomical</p>
                  </div>
                  <div className="bg-optik-darker p-4 rounded-lg">
                    <h3 className="font-bold text-optik-blue mb-2">Poor UX</h3>
                    <p className="text-sm text-gray-400">Complex interfaces discourage mainstream adoption</p>
                  </div>
                  <div className="bg-optik-darker p-4 rounded-lg">
                    <h3 className="font-bold text-optik-blue mb-2">Limited Utility</h3>
                    <p className="text-sm text-gray-400">Most tokens lack real use cases beyond speculation</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Solution */}
            <section id="solution" className="optik-card">
              <h2 className="text-3xl font-bold mb-6 optik-gradient-text">OPTIK Solution</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  OPTIK addresses these challenges by creating an all-in-one DeFi ecosystem on Solana:
                </p>
                <div className="space-y-4 my-6">
                  <div className="border-l-4 border-optik-blue pl-4">
                    <h3 className="font-bold text-white mb-2">Unified Platform</h3>
                    <p className="text-sm text-gray-400">All DeFi activities in one place - trade, stake, launch, and play</p>
                  </div>
                  <div className="border-l-4 border-optik-cyan pl-4">
                    <h3 className="font-bold text-white mb-2">Solana Speed</h3>
                    <p className="text-sm text-gray-400">Sub-second transactions with fees under $0.01</p>
                  </div>
                  <div className="border-l-4 border-optik-teal pl-4">
                    <h3 className="font-bold text-white mb-2">Intuitive Design</h3>
                    <p className="text-sm text-gray-400">Beautiful, easy-to-use interface for both beginners and experts</p>
                  </div>
                  <div className="border-l-4 border-optik-gold pl-4">
                    <h3 className="font-bold text-white mb-2">Real Utility</h3>
                    <p className="text-sm text-gray-400">$OPTIK token powers trading, staking, governance, and gaming</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Technology */}
            <section id="technology" className="optik-card">
              <h2 className="text-3xl font-bold mb-6 optik-gradient-text">Technology Architecture</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <h3 className="text-xl font-bold text-optik-blue">Smart Contracts</h3>
                <p>
                  All OPTIK smart contracts are written in Rust using the Anchor framework for maximum security and efficiency. Key contracts include:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 text-sm">
                  <li>OPTIK Token (SPL Token Standard)</li>
                  <li>DEX Trading (AMM with constant product formula)</li>
                  <li>Staking Vaults (Time-locked with APY tiers)</li>
                  <li>Memecoin Factory (Automated token deployment)</li>
                  <li>Revenue Distribution (Proportional to stake)</li>
                </ul>

                <h3 className="text-xl font-bold text-optik-blue mt-6">Security</h3>
                <p className="text-sm">
                  • Comprehensive audit by leading security firm<br />
                  • Multi-signature wallet for treasury management<br />
                  • Time-locks on critical functions<br />
                  • Bug bounty program post-launch
                </p>
              </div>
            </section>

            {/* Tokenomics Reference */}
            <section id="tokenomics" className="optik-card">
              <h2 className="text-3xl font-bold mb-6 optik-gradient-text">Tokenomics</h2>
              <p className="text-gray-300 mb-4">
                For detailed token distribution, utility, and vesting schedules, please visit our dedicated tokenomics page.
              </p>
              <a href="/tokenomics">
                <button className="optik-btn">View Full Tokenomics</button>
              </a>
            </section>

            {/* CTA */}
            <div className="optik-card text-center bg-gradient-to-br from-optik-blue/5 to-optik-cyan/5">
              <h2 className="text-3xl font-bold mb-4 optik-glow-text">Read the Full Whitepaper</h2>
              <p className="text-gray-400 mb-6">
                Download the complete 25-page technical document
              </p>
              <button className="optik-btn flex items-center gap-2 mx-auto">
                <Download size={20} />
                Download PDF (2.4 MB)
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
