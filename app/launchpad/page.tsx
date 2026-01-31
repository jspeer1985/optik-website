'use client';

/**
 * Launchpad Page
 * Token Launch Platform for New Solana Projects
 */

import { useState } from 'react';
import { Rocket, TrendingUp, Shield, Users, Clock, Target } from 'lucide-react';

export default function LaunchpadPage() {
  const [activeTab, setActiveTab] = useState<'live' | 'upcoming' | 'completed'>('live');

  const liveLaunches = [
    {
      name: 'SolDoge',
      symbol: 'SDOGE',
      description: 'The most memeable coin on Solana',
      raised: 850000,
      goal: 1000000,
      participants: 1247,
      timeLeft: '2d 14h',
      minContribution: 0.1,
      maxContribution: 10,
      status: 'live',
    },
    {
      name: 'ApeVault',
      symbol: 'APEV',
      description: 'NFT staking and yield optimization',
      raised: 420000,
      goal: 500000,
      participants: 832,
      timeLeft: '5d 8h',
      minContribution: 0.5,
      maxContribution: 25,
      status: 'live',
    },
  ];

  const upcomingLaunches = [
    {
      name: 'MoonShot',
      symbol: 'MOON',
      description: 'Community-driven launchpad DAO',
      goal: 2000000,
      startsIn: '3 days',
      minContribution: 1,
      maxContribution: 50,
    },
  ];

  const features = [
    {
      icon: Shield,
      title: 'Fully Audited',
      description: 'All projects undergo rigorous security audits before launch',
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'OPTIK holders vote on which projects get listed',
    },
    {
      icon: Rocket,
      title: 'Fair Launch',
      description: 'Equal opportunity for all participants, no pre-sales',
    },
    {
      icon: TrendingUp,
      title: 'Instant Liquidity',
      description: 'Automatic liquidity provision on launch completion',
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-optik-blue/20 px-4 py-2 rounded-full mb-6">
            <Rocket className="w-4 h-4 text-optik-blue" />
            <span className="text-optik-blue font-semibold">Fair Launch Platform</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold optik-gradient-text mb-4">
            OPTIK Launchpad
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover and invest in the next generation of Solana projects
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="optik-glass p-6 rounded-xl text-center border border-optik-blue/20">
            <p className="text-3xl font-bold text-white mb-2">$12.5M</p>
            <p className="text-gray-400 text-sm">Total Raised</p>
          </div>
          <div className="optik-glass p-6 rounded-xl text-center border border-optik-blue/20">
            <p className="text-3xl font-bold text-white mb-2">24</p>
            <p className="text-gray-400 text-sm">Projects Launched</p>
          </div>
          <div className="optik-glass p-6 rounded-xl text-center border border-optik-blue/20">
            <p className="text-3xl font-bold text-white mb-2">18,432</p>
            <p className="text-gray-400 text-sm">Participants</p>
          </div>
          <div className="optik-glass p-6 rounded-xl text-center border border-optik-blue/20">
            <p className="text-3xl font-bold text-white mb-2">487%</p>
            <p className="text-gray-400 text-sm">Avg ROI</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-8 border-b border-white/10">
          {(['live', 'upcoming', 'completed'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 font-semibold capitalize transition-colors relative ${
                activeTab === tab
                  ? 'text-optik-blue'
                  : 'text-gray-400 hover:text-gray-300'
              }`}
            >
              {tab}
              {activeTab === tab && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-optik-blue to-optik-purple" />
              )}
            </button>
          ))}
        </div>

        {/* Live Launches */}
        {activeTab === 'live' && (
          <div className="space-y-6 mb-12">
            {liveLaunches.map((launch, i) => (
              <div
                key={i}
                className="optik-glass p-8 rounded-2xl border border-optik-blue/20 hover:border-optik-blue/40 transition-all"
              >
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Project Info */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-12 h-12 bg-gradient-to-br from-optik-blue to-optik-purple rounded-full flex items-center justify-center text-2xl font-bold">
                            {launch.symbol[0]}
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-white">{launch.name}</h3>
                            <p className="text-gray-400">${launch.symbol}</p>
                          </div>
                        </div>
                        <p className="text-gray-300 mb-4">{launch.description}</p>
                      </div>
                      <div className="flex items-center gap-2 bg-green-500/20 px-3 py-1 rounded-full">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                        <span className="text-green-400 text-sm font-semibold">LIVE</span>
                      </div>
                    </div>

                    {/* Progress */}
                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-400">Progress</span>
                        <span className="text-white font-semibold">
                          {((launch.raised / launch.goal) * 100).toFixed(1)}%
                        </span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-optik-blue to-optik-purple transition-all"
                          style={{ width: `${(launch.raised / launch.goal) * 100}%` }}
                        />
                      </div>
                      <div className="flex justify-between text-sm mt-2">
                        <span className="text-gray-400">
                          ${(launch.raised / 1000).toFixed(0)}K raised
                        </span>
                        <span className="text-gray-400">
                          ${(launch.goal / 1000).toFixed(0)}K goal
                        </span>
                      </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-3 gap-4">
                      <div className="bg-white/5 rounded-lg p-3">
                        <p className="text-gray-400 text-xs mb-1">Participants</p>
                        <p className="text-white font-bold">{launch.participants.toLocaleString()}</p>
                      </div>
                      <div className="bg-white/5 rounded-lg p-3">
                        <p className="text-gray-400 text-xs mb-1">Time Left</p>
                        <p className="text-white font-bold">{launch.timeLeft}</p>
                      </div>
                      <div className="bg-white/5 rounded-lg p-3">
                        <p className="text-gray-400 text-xs mb-1">Min / Max</p>
                        <p className="text-white font-bold text-sm">
                          {launch.minContribution} - {launch.maxContribution} SOL
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Participate Card */}
                  <div className="lg:w-80">
                    <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                      <h4 className="text-white font-bold mb-4">Participate Now</h4>
                      <div className="mb-4">
                        <label className="text-gray-400 text-sm block mb-2">
                          Amount (SOL)
                        </label>
                        <input
                          type="number"
                          placeholder={`Min: ${launch.minContribution} SOL`}
                          className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white outline-none focus:border-optik-blue"
                        />
                      </div>
                      <button className="w-full optik-btn py-3 font-bold mb-4">
                        Connect Wallet
                      </button>
                      <div className="space-y-2 text-xs text-gray-400">
                        <div className="flex justify-between">
                          <span>Your allocation:</span>
                          <span className="text-white">0 {launch.symbol}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Listing price:</span>
                          <span className="text-white">TBA</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Upcoming Launches */}
        {activeTab === 'upcoming' && (
          <div className="space-y-6 mb-12">
            {upcomingLaunches.map((launch, i) => (
              <div
                key={i}
                className="optik-glass p-8 rounded-2xl border border-optik-purple/20"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-optik-purple to-optik-blue rounded-full flex items-center justify-center text-2xl font-bold">
                      {launch.symbol[0]}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{launch.name}</h3>
                      <p className="text-gray-400">${launch.symbol}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 bg-yellow-500/20 px-3 py-1 rounded-full">
                    <Clock className="w-4 h-4 text-yellow-400" />
                    <span className="text-yellow-400 text-sm font-semibold">
                      Starts in {launch.startsIn}
                    </span>
                  </div>
                </div>
                <p className="text-gray-300 mb-6">{launch.description}</p>
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-white/5 rounded-lg p-3">
                    <p className="text-gray-400 text-xs mb-1">Goal</p>
                    <p className="text-white font-bold">${(launch.goal / 1000).toFixed(0)}K</p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3">
                    <p className="text-gray-400 text-xs mb-1">Min Contribution</p>
                    <p className="text-white font-bold">{launch.minContribution} SOL</p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3">
                    <p className="text-gray-400 text-xs mb-1">Max Contribution</p>
                    <p className="text-white font-bold">{launch.maxContribution} SOL</p>
                  </div>
                </div>
                <button className="w-full mt-6 bg-white/5 hover:bg-white/10 border border-white/20 rounded-lg py-3 text-white font-semibold transition">
                  Set Reminder
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Completed Tab */}
        {activeTab === 'completed' && (
          <div className="text-center py-12">
            <Target className="w-16 h-16 text-gray-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-400 mb-2">Coming Soon</h3>
            <p className="text-gray-500">View completed launches and their performance</p>
          </div>
        )}

        {/* Features */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Why Launch on OPTIK?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-optik-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-optik-blue" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 optik-glass p-8 rounded-2xl border border-optik-blue/20 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Want to Launch Your Project?
          </h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Apply to launch your token on the OPTIK Launchpad. Our team reviews all applications
            and community votes on the best projects.
          </p>
          <button className="optik-btn px-8 py-3 text-lg font-bold">
            Apply for Launch
          </button>
        </div>
      </div>
    </div>
  );
}
