import Link from 'next/link';
import Image from 'next/image';
import { Twitter, MessageCircle, Send } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="optik-glass border-t border-optik-blue/20 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <Image 
                src="/android-chrome-192x192.png" 
                alt="OPTIK" 
                width={40} 
                height={40}
                className="rounded-full"
              />
              <span className="text-xl font-bold optik-gradient-text">OPTIK</span>
            </div>
            <p className="text-gray-400 text-sm">
              The ultimate Solana DeFi ecosystem for trading, staking, and gaming.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-bold text-white mb-4">Product</h4>
            <div className="space-y-2">
              <Link href="/dex" className="block text-gray-400 hover:text-optik-blue text-sm">DEX</Link>
              <Link href="/launchpad" className="block text-gray-400 hover:text-optik-blue text-sm">Launchpad</Link>
              <Link href="/dashboard" className="block text-gray-400 hover:text-optik-blue text-sm">Dashboard</Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-white mb-4">Company</h4>
            <div className="space-y-2">
              <Link href="/about" className="block text-gray-400 hover:text-optik-blue text-sm">About</Link>
              <Link href="/roadmap" className="block text-gray-400 hover:text-optik-blue text-sm">Roadmap</Link>
              <Link href="/whitepaper" className="block text-gray-400 hover:text-optik-blue text-sm">Whitepaper</Link>
              <Link href="/terms" className="block text-gray-400 hover:text-optik-blue text-sm">Terms</Link>
            </div>
          </div>

          {/* Community */}
          <div>
            <h4 className="font-bold text-white mb-4">Community</h4>
            <div className="flex gap-4">
              <a 
                href="https://twitter.com/OptikEcosystem" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-optik-blue transition-colors"
              >
                <Twitter size={24} />
              </a>
              <a 
                href="https://discord.gg/optik" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-optik-blue transition-colors"
              >
                <MessageCircle size={24} />
              </a>
              <a 
                href="https://t.me/optikofficial" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-optik-blue transition-colors"
              >
                <Send size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-optik-blue/20 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 OPTIK Ecosystem. All rights reserved. 
            <span className="block mt-2">
              Not financial advice. Crypto trading involves risk.
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
