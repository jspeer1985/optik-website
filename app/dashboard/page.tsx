'use client';

/**
 * Merchant Dashboard Page
 * (Placeholder - requires authentication)
 */

import { BarChart3, DollarSign, Users, TrendingUp, Lock } from 'lucide-react';

export default function DashboardPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="w-24 h-24 bg-optik-blue/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Lock className="w-12 h-12 text-optik-blue" />
          </div>
          <h1 className="text-5xl font-bold optik-gradient-text mb-4">Merchant Dashboard</h1>
          <p className="text-gray-300 text-xl mb-8">
            Connect your wallet to access your merchant dashboard
          </p>
          <button className="optik-btn px-8 py-3 text-lg">
            Connect Wallet
          </button>
        </div>

        {/* Preview Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: BarChart3, title: 'Analytics', desc: 'Track sales and performance' },
            { icon: DollarSign, title: 'Revenue', desc: 'Monitor your earnings' },
            { icon: Users, title: 'Customers', desc: 'Manage your community' },
            { icon: TrendingUp, title: 'Growth', desc: 'View growth metrics' },
          ].map((feature, i) => (
            <div key={i} className="optik-glass p-6 rounded-xl border border-optik-blue/20 text-center">
              <feature.icon className="w-12 h-12 text-optik-blue mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 optik-glass p-8 rounded-2xl border border-optik-blue/20 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Not a merchant yet?</h3>
          <p className="text-gray-300 mb-6">
            Launch your NFT collection and start rewarding customers in minutes
          </p>
          <a href="/onboard" className="inline-block optik-btn px-8 py-3">
            Become a Merchant
          </a>
        </div>
      </div>
    </div>
  );
}
