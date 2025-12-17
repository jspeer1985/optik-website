'use client';

import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { DollarSign, Lock, TrendingUp, Zap } from 'lucide-react';

export default function TokenomicsPage() {
  const distributionData = [
    { name: 'Liquidity Pool', value: 40, color: '#00d4ff' },
    { name: 'Community Airdrop', value: 20, color: '#06b6d4' },
    { name: 'Team (Vested)', value: 15, color: '#14b8a6' },
    { name: 'Marketing', value: 10, color: '#0891b2' },
    { name: 'Development', value: 10, color: '#0e7490' },
    { name: 'Private Sale', value: 5, color: '#155e75' },
  ];

  const vestingSchedule = [
    { category: 'Liquidity Pool', tge: '100%', vesting: 'None - Locked in DEX' },
    { category: 'Airdrop', tge: '50%', vesting: '50% over 3 months' },
    { category: 'Team', tge: '0%', vesting: '24 months linear' },
    { category: 'Marketing', tge: '20%', vesting: '12 months linear' },
    { category: 'Development', tge: '25%', vesting: '18 months linear' },
    { category: 'Private Sale', tge: '0%', vesting: '6 month cliff, 12 month linear' },
  ];

  const utilities = [
    {
      icon: DollarSign,
      title: 'Trading Fees',
      description: 'Pay 0.25% trading fees on OPTIK DEX with OPTIK tokens',
    },
    {
      icon: Lock,
      title: 'Staking Rewards',
      description: 'Stake OPTIK to earn up to 36% APY from platform revenue',
    },
    {
      icon: TrendingUp,
      title: 'Governance',
      description: 'Vote on proposals and shape the future of the ecosystem',
    },
    {
      icon: Zap,
      title: 'Launchpad Access',
      description: 'Create memecoins with discounted fees using OPTIK',
    },
  ];

  return (
    <div className="pt-24 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">
            <span className="optik-gradient-text">Tokenomics</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Fair launch with transparent distribution and real utility across the entire ecosystem
          </p>
        </div>

        {/* Token Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="optik-card text-center">
            <div className="text-3xl font-bold optik-gradient-text mb-2">1B</div>
            <div className="text-sm text-gray-400">Total Supply</div>
          </div>
          <div className="optik-card text-center">
            <div className="text-3xl font-bold optik-gradient-text mb-2">$0.001</div>
            <div className="text-sm text-gray-400">Launch Price</div>
          </div>
          <div className="optik-card text-center">
            <div className="text-3xl font-bold optik-gradient-text mb-2">$500K</div>
            <div className="text-sm text-gray-400">Initial Market Cap</div>
          </div>
          <div className="optik-card text-center">
            <div className="text-3xl font-bold optik-gradient-text mb-2">Solana</div>
            <div className="text-sm text-gray-400">Network</div>
          </div>
        </div>

        {/* Distribution Chart */}
        <div className="optik-card mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span className="optik-gradient-text">Token Distribution</span>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="flex items-center justify-center">
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={distributionData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, value }) => `${name}: ${value}%`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {distributionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-4">
              {distributionData.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-4 h-4 rounded-full" 
                      style={{ backgroundColor: item.color }}
                    ></div>
                    <span className="text-gray-300">{item.name}</span>
                  </div>
                  <span className="font-bold text-optik-blue">{item.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Vesting Schedule */}
        <div className="optik-card mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span className="optik-gradient-text">Vesting Schedule</span>
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-optik-blue/20">
                  <th className="text-left py-4 text-optik-blue">Category</th>
                  <th className="text-center py-4 text-optik-blue">TGE Release</th>
                  <th className="text-left py-4 text-optik-blue">Vesting Period</th>
                </tr>
              </thead>
              <tbody>
                {vestingSchedule.map((item, index) => (
                  <tr key={index} className="border-b border-optik-blue/10">
                    <td className="py-4 font-semibold">{item.category}</td>
                    <td className="py-4 text-center text-gray-400">{item.tge}</td>
                    <td className="py-4 text-gray-400">{item.vesting}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Utility */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span className="optik-gradient-text">Token Utility</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {utilities.map((utility, index) => (
              <div key={index} className="optik-card">
                <utility.icon className="w-12 h-12 text-optik-blue mb-4" />
                <h3 className="text-xl font-bold mb-2">{utility.title}</h3>
                <p className="text-gray-400">{utility.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Burn Mechanism */}
        <div className="optik-card text-center">
          <h2 className="text-3xl font-bold mb-4">
            <span className="optik-glow-text">Deflationary Model</span>
          </h2>
          <p className="text-xl text-gray-400 mb-6">
            10% of all trading fees automatically burned forever
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="text-2xl font-bold text-optik-blue mb-2">10%</div>
              <div className="text-sm text-gray-400">DEX Fees Burned</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-optik-blue mb-2">5%</div>
              <div className="text-sm text-gray-400">Game Fees Burned</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-optik-blue mb-2">500M</div>
              <div className="text-sm text-gray-400">Target Supply (Year 2)</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
