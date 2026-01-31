'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X, ShoppingCart } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/shop', label: 'Shop' },
    { href: '/about', label: 'About' },
    { href: '/how-it-works', label: 'How It Works' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 optik-glass border-b border-optik-blue/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <Image
              src="/android-chrome-192x192.png"
              alt="OPTIK Gold"
              width={40}
              height={40}
              className="rounded-full"
            />
            <div className="flex flex-col">
              <span className="text-xl font-bold gold-gradient-text">OPTIK GOLD</span>
              <span className="text-xs text-gray-400">Premium Web3 Shop</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-optik-blue transition-colors text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Cart and Wallet */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/cart" className="relative p-2 hover:text-optik-gold transition-colors">
              <ShoppingCart size={24} />
              <span className="cart-badge">0</span>
            </Link>
            <button className="gold-btn text-sm">
              Connect Wallet
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-optik-blue"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden optik-glass border-t border-optik-blue/20">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-gray-300 hover:text-optik-blue transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/cart"
              className="block text-gray-300 hover:text-optik-blue transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Cart (0)
            </Link>
            <button className="w-full gold-btn mt-4">
              Connect Wallet
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
