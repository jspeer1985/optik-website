'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ShoppingBag, Shield, Zap, TrendingUp } from 'lucide-react';

export default function HomePage() {
  const featuredProducts = [
    {
      id: 1,
      name: 'Premium Gold NFT Collection',
      price: '0.5 SOL',
      image: '/android-chrome-192x192.png',
      category: 'Digital Art',
    },
    {
      id: 2,
      name: 'Limited Edition Merchandise',
      price: '0.3 SOL',
      image: '/android-chrome-192x192.png',
      category: 'Apparel',
    },
    {
      id: 3,
      name: 'Exclusive Access Pass',
      price: '1.0 SOL',
      image: '/android-chrome-192x192.png',
      category: 'Membership',
    },
    {
      id: 4,
      name: 'Digital Collectibles',
      price: '0.2 SOL',
      image: '/android-chrome-192x192.png',
      category: 'Collectibles',
    },
  ];

  const features = [
    {
      icon: Shield,
      title: 'Secure Payments',
      description: 'Pay with SOL and SPL tokens on Solana blockchain',
    },
    {
      icon: Zap,
      title: 'Instant Delivery',
      description: 'Get your digital products instantly after purchase',
    },
    {
      icon: TrendingUp,
      title: 'Exclusive Drops',
      description: 'Access limited edition products and NFT collections',
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-optik-gold rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-optik-blue rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          {/* Logo */}
          <div className="flex justify-center mb-8 animate-float">
            <Image
              src="/android-chrome-192x192.png"
              alt="OPTIK Gold"
              width={120}
              height={120}
              className="rounded-full"
            />
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6">
            <span className="gold-gradient-text">Welcome to</span>
            <br />
            <span className="gold-glow-text">OPTIK GOLD INC</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Premium Web3 ecommerce powered by Solana. Shop exclusive products with cryptocurrency.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link href="/shop">
              <button className="gold-btn text-lg px-8 py-4 flex items-center gap-2">
                Shop Now <ShoppingBag size={20} />
              </button>
            </Link>
            <Link href="/how-it-works">
              <button className="bg-transparent border-2 border-optik-gold text-optik-gold hover:bg-optik-gold hover:text-optik-dark transition-all px-8 py-4 rounded-xl font-semibold">
                How It Works
              </button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20">
            <div className="gold-card">
              <div className="text-3xl font-bold gold-gradient-text mb-1">100+</div>
              <div className="text-sm text-gray-400">Products</div>
            </div>
            <div className="gold-card">
              <div className="text-3xl font-bold gold-gradient-text mb-1">500+</div>
              <div className="text-sm text-gray-400">Happy Customers</div>
            </div>
            <div className="gold-card">
              <div className="text-3xl font-bold gold-gradient-text mb-1">24/7</div>
              <div className="text-sm text-gray-400">Support</div>
            </div>
            <div className="gold-card">
              <div className="text-3xl font-bold gold-gradient-text mb-1">Secure</div>
              <div className="text-sm text-gray-400">Blockchain</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="gold-gradient-text">Featured Products</span>
            </h2>
            <p className="text-xl text-gray-400">
              Discover our exclusive collection
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <Link
                key={product.id}
                href={`/product/${product.id}`}
                className="gold-card product-card group cursor-pointer"
              >
                <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden bg-optik-darker">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-4"
                  />
                </div>
                <div className="text-xs text-optik-gold mb-2">{product.category}</div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-optik-gold transition-colors">
                  {product.name}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold gold-gradient-text">{product.price}</span>
                  <button className="gold-btn text-xs px-4 py-2">
                    Add to Cart
                  </button>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/shop">
              <button className="gold-btn text-lg px-8 py-4 flex items-center gap-2 mx-auto">
                View All Products <ArrowRight size={20} />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent to-optik-darker/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="gold-gradient-text">Why Shop With Us?</span>
            </h2>
            <p className="text-xl text-gray-400">
              The future of online shopping is here
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="gold-card text-center group cursor-pointer">
                <feature.icon className="w-16 h-16 text-optik-gold mb-4 mx-auto group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center gold-card">
          <h2 className="text-4xl font-bold mb-6">
            <span className="gold-glow-text">Ready to Shop?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Connect your Solana wallet and start shopping with crypto today
          </p>
          <Link href="/shop">
            <button className="gold-btn text-xl px-12 py-4">
              Browse Products
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
