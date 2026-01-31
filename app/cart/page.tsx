'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';

export default function CartPage() {
  // Sample cart items - in a real app, this would come from state management
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Premium Gold NFT Collection',
      price: 0.5,
      priceUSD: 75,
      image: '/android-chrome-192x192.png',
      quantity: 1,
    },
    {
      id: 2,
      name: 'Limited Edition Merchandise',
      price: 0.3,
      priceUSD: 45,
      image: '/android-chrome-192x192.png',
      quantity: 2,
    },
  ]);

  const updateQuantity = (id: number, change: number) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const totalSOL = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalUSD = cartItems.reduce((sum, item) => sum + item.priceUSD * item.quantity, 0);

  return (
    <div className="pt-24 px-4 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-4">
            <span className="gold-gradient-text">Shopping Cart</span>
          </h1>
          <p className="text-xl text-gray-400">
            {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} in your cart
          </p>
        </div>

        {cartItems.length === 0 ? (
          /* Empty Cart */
          <div className="text-center py-20">
            <ShoppingBag size={80} className="mx-auto mb-6 text-gray-600" />
            <h2 className="text-3xl font-bold mb-4 text-gray-400">Your cart is empty</h2>
            <p className="text-gray-500 mb-8">Add some products to get started!</p>
            <Link href="/shop">
              <button className="gold-btn text-lg px-8 py-4">
                Continue Shopping
              </button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="gold-card">
                  <div className="flex gap-4">
                    {/* Product Image */}
                    <div className="relative w-24 h-24 rounded-lg overflow-hidden bg-optik-darker flex-shrink-0">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-contain p-2"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="flex-1">
                      <h3 className="text-lg font-bold mb-1">{item.name}</h3>
                      <div className="text-sm text-gray-400 mb-3">
                        <span className="gold-gradient-text font-bold">{item.price} SOL</span>
                        <span className="text-gray-500 ml-2">(${item.priceUSD})</span>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2 bg-optik-darker rounded-lg p-1">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="p-2 hover:text-optik-gold transition-colors"
                          >
                            <Minus size={16} />
                          </button>
                          <span className="w-8 text-center font-bold">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="p-2 hover:text-optik-gold transition-colors"
                          >
                            <Plus size={16} />
                          </button>
                        </div>

                        <button
                          onClick={() => removeItem(item.id)}
                          className="ml-auto p-2 text-red-400 hover:text-red-300 transition-colors"
                        >
                          <Trash2 size={20} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="gold-card sticky top-24">
                <h2 className="text-2xl font-bold mb-6 gold-gradient-text">Order Summary</h2>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-gray-400">
                    <span>Subtotal</span>
                    <span>{totalSOL.toFixed(2)} SOL</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Shipping</span>
                    <span className="text-optik-gold">FREE</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Tax</span>
                    <span>0.00 SOL</span>
                  </div>
                  <div className="border-t border-optik-gold/20 pt-3 mt-3">
                    <div className="flex justify-between text-xl font-bold">
                      <span>Total</span>
                      <div className="text-right">
                        <div className="gold-gradient-text">{totalSOL.toFixed(2)} SOL</div>
                        <div className="text-sm text-gray-500">${totalUSD.toFixed(2)}</div>
                      </div>
                    </div>
                  </div>
                </div>

                <Link href="/checkout">
                  <button className="w-full gold-btn text-lg py-4 mb-3">
                    Proceed to Checkout
                  </button>
                </Link>

                <Link href="/shop">
                  <button className="w-full bg-transparent border-2 border-optik-gold text-optik-gold hover:bg-optik-gold hover:text-optik-dark transition-all py-3 rounded-xl font-semibold">
                    Continue Shopping
                  </button>
                </Link>

                {/* Payment Info */}
                <div className="mt-6 p-4 bg-optik-darker rounded-lg">
                  <p className="text-xs text-gray-400 text-center">
                    Secure payment powered by Solana blockchain
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
