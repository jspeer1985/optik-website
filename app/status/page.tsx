'use client';

/**
 * System Status Page
 */

import { CheckCircle, AlertCircle, Clock } from 'lucide-react';

export default function StatusPage() {
  const services = [
    { name: 'OPTIK DEX', status: 'operational', uptime: '99.98%' },
    { name: 'Launchpad', status: 'operational', uptime: '99.95%' },
    { name: 'NFT Marketplace', status: 'operational', uptime: '99.92%' },
    { name: 'Merchant Onboarding', status: 'operational', uptime: '100%' },
    { name: 'API Services', status: 'operational', uptime: '99.97%' },
    { name: 'Solana RPC', status: 'operational', uptime: '99.85%' },
  ];

  const incidents = [
    {
      date: '2026-01-28',
      title: 'Scheduled Maintenance',
      description: 'DEX upgrade completed successfully',
      status: 'resolved',
    },
    {
      date: '2026-01-15',
      title: 'Minor Performance Degradation',
      description: 'Resolved within 15 minutes',
      status: 'resolved',
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold optik-gradient-text mb-4">System Status</h1>
        <p className="text-gray-300 mb-12">Current operational status of all OPTIK services</p>

        {/* Overall Status */}
        <div className="optik-glass p-8 rounded-2xl border border-green-500/20 mb-8">
          <div className="flex items-center gap-4 mb-4">
            <CheckCircle className="w-12 h-12 text-green-400" />
            <div>
              <h2 className="text-2xl font-bold text-white">All Systems Operational</h2>
              <p className="text-green-400">No known issues at this time</p>
            </div>
          </div>
        </div>

        {/* Service Status */}
        <div className="optik-glass p-8 rounded-2xl border border-optik-blue/20 mb-8">
          <h3 className="text-2xl font-bold text-white mb-6">Services</h3>
          <div className="space-y-4">
            {services.map((service, i) => (
              <div key={i} className="flex items-center justify-between py-3 border-b border-white/10 last:border-0">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-white font-medium">{service.name}</span>
                </div>
                <div className="flex items-center gap-6">
                  <span className="text-gray-400 text-sm">Uptime: {service.uptime}</span>
                  <span className="text-green-400 text-sm font-semibold capitalize">
                    {service.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Incidents */}
        <div className="optik-glass p-8 rounded-2xl border border-optik-blue/20">
          <h3 className="text-2xl font-bold text-white mb-6">Recent Incidents</h3>
          <div className="space-y-4">
            {incidents.map((incident, i) => (
              <div key={i} className="border-l-2 border-green-500/50 pl-4 py-2">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-gray-400 text-sm">{incident.date}</span>
                  <span className="text-green-400 text-xs font-semibold uppercase">
                    {incident.status}
                  </span>
                </div>
                <h4 className="text-white font-semibold mb-1">{incident.title}</h4>
                <p className="text-gray-400 text-sm">{incident.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Subscribe to Updates */}
        <div className="mt-8 text-center">
          <p className="text-gray-400 mb-4">Get notified about incidents and maintenance</p>
          <button className="optik-btn px-6 py-2">Subscribe to Updates</button>
        </div>
      </div>
    </div>
  );
}
