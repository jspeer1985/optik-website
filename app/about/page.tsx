'use client';

import { Target, Eye, Heart, Shield, Users, Sparkles } from 'lucide-react';

export default function AboutPage() {
  const values = [
    {
      icon: Shield,
      title: 'Security & Trust',
      description: 'Blockchain-verified transactions and secure payment processing',
    },
    {
      icon: Users,
      title: 'Customer First',
      description: '24/7 support and dedicated to your satisfaction',
    },
    {
      icon: Sparkles,
      title: 'Innovation',
      description: 'Pioneering the future of Web3 ecommerce',
    },
    {
      icon: Heart,
      title: 'Quality',
      description: 'Curated premium products and exclusive collections',
    },
  ];

  const milestones = [
    {
      year: '2024',
      title: 'Founded',
      description: 'OPTIK Gold Inc was established to revolutionize online shopping',
    },
    {
      year: '2025',
      title: 'Platform Launch',
      description: 'Launched our Web3 ecommerce platform on Solana',
    },
    {
      year: '2025+',
      title: 'Future',
      description: 'Expanding product lines and global partnerships',
    },
  ];

  return (
    <div className="pt-24 pb-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">
            <span className="gold-gradient-text">About OPTIK Gold Inc</span>
          </h1>
          <p className="text-xl text-gray-400">
            Premium Web3 ecommerce powered by blockchain technology
          </p>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="gold-card">
            <Eye className="w-12 h-12 text-optik-gold mb-4" />
            <h2 className="text-2xl font-bold mb-4 gold-gradient-text">Our Vision</h2>
            <p className="text-gray-300 leading-relaxed">
              To become the world's leading Web3 ecommerce platform, where customers can shop premium products with the security and transparency of blockchain technology.
            </p>
          </div>
          <div className="gold-card">
            <Target className="w-12 h-12 text-optik-gold mb-4" />
            <h2 className="text-2xl font-bold mb-4 gold-gradient-text">Our Mission</h2>
            <p className="text-gray-300 leading-relaxed">
              Empower consumers with seamless cryptocurrency payments, instant delivery, and true ownership of digital products through blockchain innovation.
            </p>
          </div>
        </div>

        {/* Why Blockchain */}
        <div className="gold-card mb-16">
          <h2 className="text-3xl font-bold mb-6 gold-gradient-text">Why Blockchain Commerce?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold gold-glow-text mb-2">&lt;1s</div>
              <div className="text-sm text-gray-400">Payment Confirmation</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gold-glow-text mb-2">$0.001</div>
              <div className="text-sm text-gray-400">Transaction Fees</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gold-glow-text mb-2">100%</div>
              <div className="text-sm text-gray-400">Transparent</div>
            </div>
          </div>
          <p className="text-gray-300 mt-6 leading-relaxed">
            By leveraging Solana's high-speed blockchain, we offer instant payment processing with minimal fees. Every transaction is transparent, secure, and permanently recorded on the blockchain.
          </p>
        </div>

        {/* Company Story */}
        <div className="gold-card mb-16">
          <h2 className="text-3xl font-bold mb-6 gold-gradient-text">Our Story</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            OPTIK Gold Inc was founded with a simple belief: the future of ecommerce lies in blockchain technology. We saw an opportunity to combine the convenience of online shopping with the security and transparency of cryptocurrency payments.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            Our team consists of ecommerce veterans, blockchain developers, and customer experience experts who share a passion for innovation. Together, we've built a platform that makes crypto payments as easy as traditional methods, while offering benefits that conventional ecommerce can't match.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Today, we serve thousands of customers worldwide, offering exclusive digital products, NFTs, and premium merchandise - all purchasable with cryptocurrency.
          </p>
        </div>

        {/* Milestones */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center gold-gradient-text">Our Journey</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {milestones.map((milestone, index) => (
              <div key={index} className="gold-card text-center">
                <div className="text-4xl font-bold gold-glow-text mb-2">{milestone.year}</div>
                <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                <p className="text-gray-400">{milestone.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center gold-gradient-text">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div key={index} className="gold-card">
                <value.icon className="w-10 h-10 text-optik-gold mb-3" />
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="gold-card mb-16">
          <h2 className="text-3xl font-bold mb-6 gold-gradient-text">Why Choose OPTIK Gold?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-bold mb-3 text-optik-gold">For Shoppers</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-optik-gold mt-2"></div>
                  <span>Shop with cryptocurrency safely and securely</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-optik-gold mt-2"></div>
                  <span>Own your digital purchases forever in your wallet</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-optik-gold mt-2"></div>
                  <span>Access exclusive Web3 products and NFTs</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-optik-gold mt-2"></div>
                  <span>Lightning-fast checkout with minimal fees</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3 text-optik-gold">For Sellers</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-optik-gold mt-2"></div>
                  <span>Instant settlements with crypto payments</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-optik-gold mt-2"></div>
                  <span>Global reach without payment processor fees</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-optik-gold mt-2"></div>
                  <span>Transparent blockchain-verified transactions</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-optik-gold mt-2"></div>
                  <span>Access to the growing Web3 community</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="gold-card text-center">
          <h2 className="text-3xl font-bold mb-4 gold-glow-text">Ready to Experience the Future?</h2>
          <p className="text-gray-400 mb-6">
            Join thousands of customers shopping with crypto
          </p>
          <a href="/shop">
            <button className="gold-btn text-lg px-8 py-3">
              Start Shopping
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
