/**
 * Careers Page
 */

import { Rocket, Users, TrendingUp, Heart } from 'lucide-react';

export default function CareersPage() {
  const values = [
    {
      icon: Rocket,
      title: 'Innovation First',
      description: 'We push boundaries and explore new frontiers in DeFi and NFTs',
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'Our users and merchants guide our product roadmap',
    },
    {
      icon: TrendingUp,
      title: 'Growth Mindset',
      description: 'We invest in our team's development and continuous learning',
    },
    {
      icon: Heart,
      title: 'Remote-First',
      description: 'Work from anywhere. Results matter, not location',
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold optik-gradient-text mb-4">Join the OPTIK Team</h1>
          <p className="text-xl text-gray-300">
            Help us build the future of commerce on Solana
          </p>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {values.map((value, i) => (
            <div key={i} className="optik-glass p-6 rounded-xl border border-optik-blue/20">
              <value.icon className="w-10 h-10 text-optik-blue mb-3" />
              <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
              <p className="text-gray-400">{value.description}</p>
            </div>
          ))}
        </div>

        {/* Open Positions */}
        <div className="optik-glass p-8 rounded-2xl border border-optik-blue/20 mb-8">
          <h2 className="text-3xl font-bold text-white mb-6">Open Positions</h2>
          <div className="space-y-4">
            {[
              { title: 'Senior Solana Developer', location: 'Remote', type: 'Full-time' },
              { title: 'Product Designer', location: 'Remote', type: 'Full-time' },
              { title: 'Community Manager', location: 'Remote', type: 'Full-time' },
              { title: 'Marketing Lead', location: 'Remote', type: 'Full-time' },
            ].map((job, i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-white/5 rounded-lg hover:bg-white/10 transition">
                <div>
                  <h3 className="text-lg font-semibold text-white">{job.title}</h3>
                  <p className="text-gray-400 text-sm">{job.location} • {job.type}</p>
                </div>
                <button className="optik-btn px-6 py-2 text-sm">Apply</button>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="optik-glass p-8 rounded-2xl border border-optik-blue/20 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Don't see a fit?</h3>
          <p className="text-gray-300 mb-6">
            We're always looking for talented people. Send us your resume!
          </p>
          <a href="mailto:careers@optik.io" className="optik-btn px-8 py-3">
            Email Us
          </a>
        </div>
      </div>
    </div>
  );
}
