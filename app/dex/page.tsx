'use client';

/**
 * DEX (Decentralized Exchange) Page
 * OPTIK Trading Platform on Solana
 */

import { useState } from 'react';
import { ArrowDownUp, TrendingUp, DollarSign, BarChart3, Zap } from 'lucide-react';

export default function DEXPage() {
  const [fromToken, setFromToken] = useState('SOL');
  const [toToken, setToToken] = useState('OPTIK');
  const [fromAmount, setFromAmount] = useState('');
  const [slippage, setSlippage] = useState(0.5);

  const stats = [
    { label: 'Total Volume', value: '$12.5M', icon: DollarSign, change: '+24%' },
    { label: 'Total Liquidity', value: '$45M', icon: BarChart3, change: '+12%' },
    { label: 'Active Pairs', value: '156', icon: Zap, change: '+8' },
    { label: '24h Trades', value: '8,432', icon: TrendingUp, change: '+15%' },
  ];

  const popularPairs = [
    { pair: 'OPTIK/SOL', volume: '$2.5M', change: '+18.5%', positive: true },
    { pair: 'OPTIK/USDC', volume: '$1.8M', change: '+12.3%', positive: true },
    { pair: 'SOL/USDC', volume: '$3.2M', change: '-2.1%', positive: false },
    { pair: 'BONK/SOL', volume: '$950K', change: '+45.2%', positive: true },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold optik-gradient-text mb-4">
            OPTIK DEX
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Trade instantly on Solana with lightning-fast transactions and minimal fees
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, i) => (
            <div key={i} className="optik-glass p-6 rounded-xl border border-optik-blue/20">
              <div className="flex items-center justify-between mb-2">
                <stat.icon className="w-8 h-8 text-optik-blue" />
                <span className="text-green-400 text-sm font-semibold">{stat.change}</span>
              </div>
              <p className="text-gray-400 text-sm mb-1">{stat.label}</p>
              <p className="text-2xl font-bold text-white">{stat.value}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Swap Interface */}
          <div className="lg:col-span-2">
            <div className="optik-glass p-8 rounded-2xl border border-optik-blue/20">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">Swap</h2>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <span>Slippage:</span>
                  <select
                    value={slippage}
                    onChange={(e) => setSlippage(parseFloat(e.target.value))}
                    className="bg-white/5 border border-white/10 rounded px-2 py-1 text-white"
                  >
                    <option value="0.1">0.1%</option>
                    <option value="0.5">0.5%</option>
                    <option value="1.0">1.0%</option>
                    <option value="3.0">3.0%</option>
                  </select>
                </div>
              </div>

              {/* From Token */}
              <div className="bg-white/5 rounded-xl p-4 mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400 text-sm">From</span>
                  <span className="text-gray-400 text-sm">Balance: 0.00</span>
                </div>
                <div className="flex items-center gap-4">
                  <input
                    type="number"
                    value={fromAmount}
                    onChange={(e) => setFromAmount(e.target.value)}
                    placeholder="0.0"
                    className="flex-1 bg-transparent text-2xl text-white outline-none"
                  />
                  <select
                    value={fromToken}
                    onChange={(e) => setFromToken(e.target.value)}
                    className="optik-btn px-4 py-2 text-sm cursor-pointer"
                  >
                    <option value="SOL">SOL</option>
                    <option value="USDC">USDC</option>
                    <option value="OPTIK">OPTIK</option>
                  </select>
                </div>
              </div>

              {/* Swap Button */}
              <div className="flex justify-center -my-2 relative z-10">
                <button className="bg-optik-dark p-2 rounded-full border-2 border-optik-blue hover:rotate-180 transition-transform">
                  <ArrowDownUp className="w-6 h-6 text-optik-blue" />
                </button>
              </div>

              {/* To Token */}
              <div className="bg-white/5 rounded-xl p-4 mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400 text-sm">To</span>
                  <span className="text-gray-400 text-sm">Balance: 0.00</span>
                </div>
                <div className="flex items-center gap-4">
                  <input
                    type="number"
                    placeholder="0.0"
                    className="flex-1 bg-transparent text-2xl text-white outline-none"
                    readOnly
                  />
                  <select
                    value={toToken}
                    onChange={(e) => setToToken(e.target.value)}
                    className="optik-btn px-4 py-2 text-sm cursor-pointer"
                  >
                    <option value="OPTIK">OPTIK</option>
                    <option value="SOL">SOL</option>
                    <option value="USDC">USDC</option>
                  </select>
                </div>
              </div>

              {/* Swap Stats */}
              <div className="bg-white/5 rounded-xl p-4 mb-6 space-y-2 text-sm">
                <div className="flex justify-between text-gray-400">
                  <span>Rate</span>
                  <span className="text-white">1 SOL = 1,250 OPTIK</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Price Impact</span>
                  <span className="text-green-400">&lt; 0.01%</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Network Fee</span>
                  <span className="text-white">~0.00001 SOL</span>
                </div>
              </div>

              {/* Connect Wallet / Swap Button */}
              <button className="w-full optik-btn py-4 text-lg font-bold">
                Connect Wallet to Swap
              </button>

              <p className="text-gray-500 text-xs text-center mt-4">
                Powered by Raydium Protocol • Audited by Certik
              </p>
            </div>
          </div>

          {/* Popular Pairs */}
          <div className="lg:col-span-1">
            <div className="optik-glass p-6 rounded-2xl border border-optik-blue/20">
              <h3 className="text-xl font-bold text-white mb-6">Popular Pairs</h3>
              <div className="space-y-4">
                {popularPairs.map((pair, i) => (
                  <button
                    key={i}
                    className="w-full bg-white/5 hover:bg-white/10 rounded-xl p-4 transition-all text-left"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-white">{pair.pair}</span>
                      <span className={`text-sm font-bold ${pair.positive ? 'text-green-400' : 'text-red-400'}`}>
                        {pair.change}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm">Vol: {pair.volume}</p>
                  </button>
                ))}
              </div>

              {/* Quick Links */}
              <div className="mt-8 pt-8 border-t border-white/10">
                <h4 className="text-sm font-semibold text-gray-400 mb-4">Quick Actions</h4>
                <div className="space-y-2">
                  <button className="w-full bg-white/5 hover:bg-white/10 rounded-lg p-3 text-left text-sm text-white transition">
                    Add Liquidity →
                  </button>
                  <button className="w-full bg-white/5 hover:bg-white/10 rounded-lg p-3 text-left text-sm text-white transition">
                    View Charts →
                  </button>
                  <button className="w-full bg-white/5 hover:bg-white/10 rounded-lg p-3 text-left text-sm text-white transition">
                    Trade History →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-optik-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-optik-blue" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Lightning Fast</h3>
            <p className="text-gray-400">
              Trades execute in ~400ms on Solana. No waiting, instant swaps.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-optik-purple/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <DollarSign className="w-8 h-8 text-optik-purple" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Minimal Fees</h3>
            <p className="text-gray-400">
              ~$0.00001 per transaction. 100x cheaper than Ethereum.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-optik-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <BarChart3 className="w-8 h-8 text-optik-blue" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Deep Liquidity</h3>
            <p className="text-gray-400">
              $45M+ in liquidity pools. Minimal slippage on all major pairs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
