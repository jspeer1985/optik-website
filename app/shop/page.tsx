'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Search, Filter } from 'lucide-react';

export default function ShopPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const products = [
    {
      id: 1,
      name: 'Premium Gold NFT Collection',
      price: '0.5 SOL',
      priceUSD: '$75',
      image: '/android-chrome-192x192.png',
      category: 'Digital Art',
      description: 'Exclusive digital art collection',
    },
    {
      id: 2,
      name: 'Limited Edition Merchandise',
      price: '0.3 SOL',
      priceUSD: '$45',
      image: '/android-chrome-192x192.png',
      category: 'Apparel',
      description: 'Premium branded apparel',
    },
    {
      id: 3,
      name: 'Exclusive Access Pass',
      price: '1.0 SOL',
      priceUSD: '$150',
      image: '/android-chrome-192x192.png',
      category: 'Membership',
      description: 'VIP membership access',
    },
    {
      id: 4,
      name: 'Digital Collectibles',
      price: '0.2 SOL',
      priceUSD: '$30',
      image: '/android-chrome-192x192.png',
      category: 'Collectibles',
      description: 'Rare digital collectibles',
    },
    {
      id: 5,
      name: 'OPTIK Gold Token Pack',
      price: '0.8 SOL',
      priceUSD: '$120',
      image: '/android-chrome-192x192.png',
      category: 'Digital Art',
      description: 'Special token bundle',
    },
    {
      id: 6,
      name: 'Gaming Assets Bundle',
      price: '0.6 SOL',
      priceUSD: '$90',
      image: '/android-chrome-192x192.png',
      category: 'Gaming',
      description: 'In-game assets and items',
    },
    {
      id: 7,
      name: 'Founder Edition NFT',
      price: '2.0 SOL',
      priceUSD: '$300',
      image: '/android-chrome-192x192.png',
      category: 'Digital Art',
      description: 'Limited founder NFTs',
    },
    {
      id: 8,
      name: 'Premium Support Tier',
      price: '0.4 SOL',
      priceUSD: '$60',
      image: '/android-chrome-192x192.png',
      category: 'Membership',
      description: 'Priority customer support',
    },
  ];

  const categories = ['all', 'Digital Art', 'Apparel', 'Membership', 'Collectibles', 'Gaming'];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-24 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">
            <span className="gold-gradient-text">Our Shop</span>
          </h1>
          <p className="text-xl text-gray-400">
            Browse our exclusive collection of Web3 products
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 flex flex-col md:flex-row gap-4">
          {/* Search Bar */}
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-optik-dark border border-optik-gold/20 rounded-xl text-white focus:outline-none focus:border-optik-gold/40 transition-colors"
            />
          </div>

          {/* Category Filter */}
          <div className="flex items-center gap-2">
            <Filter className="text-optik-gold" size={20} />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 bg-optik-dark border border-optik-gold/20 rounded-xl text-white focus:outline-none focus:border-optik-gold/40 transition-colors cursor-pointer"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {filteredProducts.map((product) => (
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
              <p className="text-sm text-gray-400 mb-3">{product.description}</p>
              <div className="flex items-center justify-between mb-3">
                <div>
                  <span className="text-xl font-bold gold-gradient-text block">{product.price}</span>
                  <span className="text-xs text-gray-500">{product.priceUSD}</span>
                </div>
              </div>
              <button className="w-full gold-btn text-sm py-2">
                View Details
              </button>
            </Link>
          ))}
        </div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-2xl text-gray-400">No products found</p>
            <p className="text-gray-500 mt-2">Try adjusting your search or filters</p>
          </div>
        )}

        {/* Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 mb-12">
          <div className="gold-card text-center">
            <h3 className="text-xl font-bold mb-2 gold-gradient-text">Secure Payments</h3>
            <p className="text-gray-400 text-sm">
              All transactions secured by Solana blockchain
            </p>
          </div>
          <div className="gold-card text-center">
            <h3 className="text-xl font-bold mb-2 gold-gradient-text">Instant Delivery</h3>
            <p className="text-gray-400 text-sm">
              Digital products delivered immediately
            </p>
          </div>
          <div className="gold-card text-center">
            <h3 className="text-xl font-bold mb-2 gold-gradient-text">24/7 Support</h3>
            <p className="text-gray-400 text-sm">
              Our team is always here to help you
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
