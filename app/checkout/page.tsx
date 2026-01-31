'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Wallet, Check, ShieldCheck, AlertCircle } from 'lucide-react';

export default function CheckoutPage() {
  const [walletConnected, setWalletConnected] = useState(false);
  const [paymentProcessing, setPaymentProcessing] = useState(false);
  const [paymentComplete, setPaymentComplete] = useState(false);

  // Sample order data
  const orderItems = [
    {
      id: 1,
      name: 'Premium Gold NFT Collection',
      price: 0.5,
      quantity: 1,
    },
    {
      id: 2,
      name: 'Limited Edition Merchandise',
      price: 0.3,
      quantity: 2,
    },
  ];

  const totalSOL = orderItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalUSD = (totalSOL * 150).toFixed(2); // Mock conversion rate

  const handleConnectWallet = () => {
    // In a real app, this would trigger Solana wallet connection
    setWalletConnected(true);
  };

  const handlePayment = () => {
    setPaymentProcessing(true);
    // Simulate payment processing
    setTimeout(() => {
      setPaymentProcessing(false);
      setPaymentComplete(true);
    }, 3000);
  };

  if (paymentComplete) {
    return (
      <div className="pt-24 px-4 min-h-screen flex items-center justify-center">
        <div className="max-w-2xl mx-auto text-center">
          <div className="gold-card">
            <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check size={48} className="text-green-400" />
            </div>
            <h1 className="text-4xl font-bold mb-4 gold-gradient-text">
              Payment Successful!
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              Your order has been confirmed and is being processed
            </p>
            <div className="bg-optik-darker rounded-lg p-6 mb-6">
              <div className="flex justify-between mb-2">
                <span className="text-gray-400">Order Number</span>
                <span className="font-mono text-optik-gold">#ORD-{Date.now()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Total Paid</span>
                <span className="font-bold gold-gradient-text">{totalSOL.toFixed(2)} SOL</span>
              </div>
            </div>
            <div className="flex gap-4 justify-center">
              <Link href="/shop">
                <button className="gold-btn px-8 py-3">
                  Continue Shopping
                </button>
              </Link>
              <Link href="/">
                <button className="bg-transparent border-2 border-optik-gold text-optik-gold hover:bg-optik-gold hover:text-optik-dark transition-all px-8 py-3 rounded-xl font-semibold">
                  Go to Home
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 px-4 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-4">
            <span className="gold-gradient-text">Checkout</span>
          </h1>
          <p className="text-xl text-gray-400">
            Complete your purchase securely with Solana
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Payment Section */}
          <div className="lg:col-span-2 space-y-6">
            {/* Wallet Connection */}
            <div className="gold-card">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Wallet className="text-optik-gold" />
                Wallet Connection
              </h2>

              {!walletConnected ? (
                <div>
                  <p className="text-gray-400 mb-4">
                    Connect your Solana wallet to proceed with payment
                  </p>
                  <button
                    onClick={handleConnectWallet}
                    className="gold-btn w-full py-4 text-lg"
                  >
                    Connect Solana Wallet
                  </button>
                  <div className="mt-4 flex items-start gap-2 text-sm text-gray-500">
                    <ShieldCheck size={16} className="mt-1 flex-shrink-0" />
                    <span>Supports Phantom, Solflare, and other Solana wallets</span>
                  </div>
                </div>
              ) : (
                <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                  <div className="flex items-center gap-2 text-green-400 mb-2">
                    <Check size={20} />
                    <span className="font-semibold">Wallet Connected</span>
                  </div>
                  <p className="text-sm text-gray-400 font-mono">
                    7xK...9mP3
                  </p>
                </div>
              )}
            </div>

            {/* Shipping Information */}
            <div className="gold-card">
              <h2 className="text-2xl font-bold mb-4">Delivery Information</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-400">
                    Email Address (for digital delivery)
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 bg-optik-dark border border-optik-gold/20 rounded-xl text-white focus:outline-none focus:border-optik-gold/40"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-400">
                    Wallet Address (for NFT delivery)
                  </label>
                  <input
                    type="text"
                    placeholder="Solana wallet address"
                    className="w-full px-4 py-3 bg-optik-dark border border-optik-gold/20 rounded-xl text-white focus:outline-none focus:border-optik-gold/40 font-mono"
                  />
                </div>
              </div>
            </div>

            {/* Payment Button */}
            <div className="gold-card bg-optik-darker">
              <div className="flex items-start gap-2 mb-4">
                <AlertCircle size={20} className="text-optik-gold mt-1 flex-shrink-0" />
                <p className="text-sm text-gray-400">
                  By completing this purchase, you agree to our terms of service. All sales are final for digital products.
                </p>
              </div>
              <button
                onClick={handlePayment}
                disabled={!walletConnected || paymentProcessing}
                className="gold-btn w-full py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {paymentProcessing ? 'Processing Payment...' : `Pay ${totalSOL.toFixed(2)} SOL`}
              </button>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="gold-card sticky top-24">
              <h2 className="text-2xl font-bold mb-6 gold-gradient-text">Order Summary</h2>

              {/* Items List */}
              <div className="space-y-4 mb-6">
                {orderItems.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <div>
                      <div className="font-medium">{item.name}</div>
                      <div className="text-gray-500">Qty: {item.quantity}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold">{(item.price * item.quantity).toFixed(2)} SOL</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-optik-gold/20 pt-4 space-y-3">
                <div className="flex justify-between text-gray-400">
                  <span>Subtotal</span>
                  <span>{totalSOL.toFixed(2)} SOL</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Network Fee</span>
                  <span>~0.001 SOL</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Shipping</span>
                  <span className="text-optik-gold">FREE</span>
                </div>
                <div className="border-t border-optik-gold/20 pt-3 mt-3">
                  <div className="flex justify-between text-xl font-bold">
                    <span>Total</span>
                    <div className="text-right">
                      <div className="gold-gradient-text">{(totalSOL + 0.001).toFixed(3)} SOL</div>
                      <div className="text-sm text-gray-500">${totalUSD}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Security Badge */}
              <div className="mt-6 p-4 bg-optik-darker rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <ShieldCheck size={20} className="text-green-400" />
                  <span className="font-semibold text-green-400">Secure Payment</span>
                </div>
                <p className="text-xs text-gray-400">
                  Powered by Solana blockchain. Your transaction is encrypted and secure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
