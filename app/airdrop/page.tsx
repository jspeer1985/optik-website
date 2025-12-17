'use client';

import { useState } from 'react';
import { Twitter, MessageCircle, Send, Copy, Check } from 'lucide-react';

export default function AirdropPage() {
  const [walletAddress, setWalletAddress] = useState('');
  const [email, setEmail] = useState('');
  const [referralCode] = useState('OPTIK-' + Math.random().toString(36).substring(7).toUpperCase());
  const [copied, setCopied] = useState(false);
  const [points, setPoints] = useState(0);

  const tasks = [
    { icon: Twitter, text: 'Follow @OptikEcosystem', points: 10, link: 'https://twitter.com/OptikEcosystem' },
    { icon: Twitter, text: 'Retweet launch announcement', points: 20, link: 'https://twitter.com/OptikEcosystem' },
    { icon: MessageCircle, text: 'Join Discord server', points: 50, link: 'https://discord.gg/optik' },
    { icon: Send, text: 'Join Telegram group', points: 30, link: 'https://t.me/optikofficial' },
  ];

  const leaderboard = [
    { rank: 1, address: '0x7f2a...', points: 12450 },
    { rank: 2, address: '0x4b8c...', points: 11280 },
    { rank: 3, address: '0x9a1d...', points: 10950 },
    { rank: 4, address: '0x3c7e...', points: 9850 },
    { rank: 5, address: '0x6d4f...', points: 9420 },
  ];

  const tiers = [
    { tier: 'Diamond', minPoints: 1000, reward: '100,000 OPTIK', color: 'text-optik-blue' },
    { tier: 'Platinum', minPoints: 500, reward: '50,000 OPTIK', color: 'text-optik-cyan' },
    { tier: 'Gold', minPoints: 250, reward: '25,000 OPTIK', color: 'text-optik-gold' },
    { tier: 'Silver', minPoints: 100, reward: '10,000 OPTIK', color: 'text-gray-400' },
    { tier: 'Bronze', minPoints: 50, reward: '5,000 OPTIK', color: 'text-orange-400' },
  ];

  const copyReferralCode = () => {
    navigator.clipboard.writeText(`https://optik.gg/airdrop?ref=${referralCode}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="pt-24 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">
            <span className="optik-gradient-text">OPTIK Airdrop</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-4">
            200M OPTIK tokens (20% of supply) distributed to early supporters
          </p>
          <div className="text-3xl font-bold optik-glow-text mb-2">
            {Math.floor(Math.random() * 30) + 1} Days Left
          </div>
          <p className="text-sm text-gray-500">Until snapshot</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2 space-y-8">
            {/* Registration */}
            <div className="optik-card">
              <h2 className="text-2xl font-bold mb-6 optik-gradient-text">Join the Airdrop</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Solana Wallet Address *</label>
                  <input
                    type="text"
                    placeholder="Enter your Solana wallet address..."
                    value={walletAddress}
                    onChange={(e) => setWalletAddress(e.target.value)}
                    className="w-full bg-optik-darker border border-optik-blue/30 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:border-optik-blue focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Email (optional)</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-optik-darker border border-optik-blue/30 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:border-optik-blue focus:outline-none"
                  />
                </div>
                <button className="w-full optik-btn text-lg py-3">
                  Register Now
                </button>
              </div>
            </div>

            {/* Social Tasks */}
            <div className="optik-card">
              <h2 className="text-2xl font-bold mb-6 optik-gradient-text">Complete Tasks</h2>
              <div className="space-y-4">
                {tasks.map((task, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-optik-darker rounded-lg hover:border hover:border-optik-blue/30 transition-all">
                    <div className="flex items-center gap-3">
                      <task.icon className="w-6 h-6 text-optik-blue" />
                      <span className="text-gray-300">{task.text}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="font-bold text-optik-blue">+{task.points}</span>
                      <a href={task.link} target="_blank" rel="noopener noreferrer">
                        <button className="px-4 py-2 bg-optik-blue/20 hover:bg-optik-blue/30 text-optik-blue rounded-lg text-sm font-medium transition-all">
                          Complete
                        </button>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Referral System */}
            <div className="optik-card">
              <h2 className="text-2xl font-bold mb-6 optik-gradient-text">Refer Friends</h2>
              <p className="text-gray-400 mb-4">
                Earn <span className="text-optik-blue font-bold">50 points</span> for each friend who joins!
              </p>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={`https://optik.gg/airdrop?ref=${referralCode}`}
                  readOnly
                  className="flex-1 bg-optik-darker border border-optik-blue/30 rounded-lg px-4 py-3 text-gray-400 text-sm"
                />
                <button
                  onClick={copyReferralCode}
                  className="px-6 py-3 bg-optik-blue hover:bg-optik-cyan text-optik-dark rounded-lg font-medium transition-all flex items-center gap-2"
                >
                  {copied ? <Check size={20} /> : <Copy size={20} />}
                  {copied ? 'Copied!' : 'Copy'}
                </button>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-optik-darker rounded-lg">
                  <div className="text-2xl font-bold text-optik-blue">0</div>
                  <div className="text-sm text-gray-400">Referrals</div>
                </div>
                <div className="text-center p-3 bg-optik-darker rounded-lg">
                  <div className="text-2xl font-bold text-optik-blue">0</div>
                  <div className="text-sm text-gray-400">Bonus Points</div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Your Stats */}
            <div className="optik-card">
              <h3 className="text-xl font-bold mb-4 optik-gradient-text">Your Stats</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-400">Points</span>
                    <span className="font-bold text-optik-blue">{points}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-400">Rank</span>
                    <span className="font-bold text-gray-300">#--</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Est. Airdrop</span>
                    <span className="font-bold text-optik-gold">-- OPTIK</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Leaderboard */}
            <div className="optik-card">
              <h3 className="text-xl font-bold mb-4 optik-gradient-text">Leaderboard</h3>
              <div className="space-y-2">
                {leaderboard.map((entry) => (
                  <div key={entry.rank} className="flex items-center justify-between p-3 bg-optik-darker rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                        entry.rank === 1 ? 'bg-yellow-500/20 text-yellow-500' :
                        entry.rank === 2 ? 'bg-gray-400/20 text-gray-400' :
                        entry.rank === 3 ? 'bg-orange-500/20 text-orange-500' :
                        'bg-optik-blue/20 text-optik-blue'
                      }`}>
                        {entry.rank}
                      </div>
                      <span className="text-sm text-gray-300">{entry.address}</span>
                    </div>
                    <span className="text-sm font-bold text-optik-blue">{entry.points.toLocaleString()}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Reward Tiers */}
            <div className="optik-card">
              <h3 className="text-xl font-bold mb-4 optik-gradient-text">Reward Tiers</h3>
              <div className="space-y-3">
                {tiers.map((tier, index) => (
                  <div key={index} className="p-3 bg-optik-darker rounded-lg">
                    <div className="flex justify-between items-center mb-1">
                      <span className={`font-bold ${tier.color}`}>{tier.tier}</span>
                      <span className="text-xs text-gray-500">{tier.minPoints}+ pts</span>
                    </div>
                    <div className="text-sm text-gray-400">{tier.reward}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
