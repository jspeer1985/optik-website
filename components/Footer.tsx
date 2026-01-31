import Link from 'next/link';
import Image from 'next/image';
import { Twitter, MessageCircle, Send, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="optik-glass border-t border-optik-gold/20 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/android-chrome-192x192.png"
                alt="OPTIK Gold"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="text-xl font-bold gold-gradient-text">OPTIK GOLD</span>
            </div>
            <p className="text-gray-400 text-sm">
              Premium Web3 ecommerce platform powered by Solana blockchain.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-bold text-white mb-4">Shop</h4>
            <div className="space-y-2">
              <Link href="/shop" className="block text-gray-400 hover:text-optik-gold text-sm">All Products</Link>
              <Link href="/shop?category=Digital Art" className="block text-gray-400 hover:text-optik-gold text-sm">Digital Art</Link>
              <Link href="/shop?category=Membership" className="block text-gray-400 hover:text-optik-gold text-sm">Memberships</Link>
              <Link href="/shop?category=Collectibles" className="block text-gray-400 hover:text-optik-gold text-sm">Collectibles</Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-white mb-4">Company</h4>
            <div className="space-y-2">
              <Link href="/about" className="block text-gray-400 hover:text-optik-gold text-sm">About Us</Link>
              <Link href="/how-it-works" className="block text-gray-400 hover:text-optik-gold text-sm">How It Works</Link>
              <Link href="/support" className="block text-gray-400 hover:text-optik-gold text-sm">Support</Link>
              <Link href="/terms" className="block text-gray-400 hover:text-optik-gold text-sm">Terms of Service</Link>
              <Link href="/privacy" className="block text-gray-400 hover:text-optik-gold text-sm">Privacy Policy</Link>
            </div>
          </div>

          {/* Community */}
          <div>
            <h4 className="font-bold text-white mb-4">Connect</h4>
            <div className="flex gap-4 mb-4">
              <a
                href="https://twitter.com/OptikGold"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-optik-gold transition-colors"
              >
                <Twitter size={24} />
              </a>
              <a
                href="https://discord.gg/optikgold"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-optik-gold transition-colors"
              >
                <MessageCircle size={24} />
              </a>
              <a
                href="https://t.me/optikgold"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-optik-gold transition-colors"
              >
                <Send size={24} />
              </a>
              <a
                href="mailto:support@optikgold.com"
                className="text-gray-400 hover:text-optik-gold transition-colors"
              >
                <Mail size={24} />
              </a>
            </div>
            <p className="text-gray-400 text-xs">
              24/7 Customer Support
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-optik-gold/20 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 OPTIK Gold Inc. All rights reserved.
            <span className="block mt-2">
              Secure payments powered by Solana blockchain.
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
