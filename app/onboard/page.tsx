'use client';

/**
 * Merchant Onboarding Page
 * Comprehensive intake form for merchants to launch their NFT collections
 */

import { useState } from 'react';
import { validateMerchantOnboarding, validateField, formatPhoneNumber, type MerchantOnboardingData } from '@/lib/validation';
import { merchantConfig } from '@/config/site';

export default function MerchantOnboardingPage() {
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [formData, setFormData] = useState<MerchantOnboardingData>({
    fullName: '',
    email: '',
    phone: '',
    businessName: '',
    businessWebsite: '',
    collectionName: '',
    collectionSymbol: '',
    supply: 1000,
    royaltyPercentage: 5,
    creatorWallet: '',
    utilityType: 'DISCOUNT',
  });

  const handleInputChange = (
    field: keyof MerchantOnboardingData,
    value: string | number
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));

    // Real-time validation
    const error = validateField(field, value);
    setErrors((prev) => ({
      ...prev,
      [field]: error || '',
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate entire form
    const validation = validateMerchantOnboarding(formData);

    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/onboard', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStep('success');
      } else {
        setErrors({ submit: result.error || 'Onboarding failed. Please try again.' });
      }
    } catch (error) {
      setErrors({ submit: 'Network error. Please check your connection and try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (step === 'success') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-black flex items-center justify-center p-4">
        <div className="max-w-2xl w-full bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center">
          <div className="text-6xl mb-6">🎉</div>
          <h1 className="text-4xl font-bold text-white mb-4">Welcome to OPTIK!</h1>
          <p className="text-xl text-gray-300 mb-6">
            Your NFT collection is being created. We'll email you at{' '}
            <span className="text-purple-400 font-semibold">{formData.email}</span> with next
            steps.
          </p>
          <div className="bg-purple-500/20 rounded-lg p-6 mb-8 text-left">
            <h2 className="text-xl font-semibold text-white mb-4">What Happens Next?</h2>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-green-400 mr-2">✓</span>
                <span>Your NFT collection is being deployed to Solana</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">✓</span>
                <span>You'll receive setup instructions via email within 5 minutes</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">✓</span>
                <span>Our team will schedule an onboarding call to help you launch</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">✓</span>
                <span>Start minting NFTs and rewarding customers immediately</span>
              </li>
            </ul>
          </div>
          <button
            onClick={() => (window.location.href = '/')}
            className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition"
          >
            Return Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-black py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">
            {merchantConfig.onboarding.title}
          </h1>
          <p className="text-xl text-gray-300">{merchantConfig.onboarding.description}</p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-4 mb-12">
          {merchantConfig.onboarding.benefits.slice(0, 3).map((benefit, i) => (
            <div
              key={i}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-4 text-center"
            >
              <div className="text-3xl mb-2">{benefit.icon}</div>
              <h3 className="text-white font-semibold mb-1">{benefit.title}</h3>
              <p className="text-gray-400 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Main Form */}
        <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
          {/* Business Information Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <span className="bg-purple-500 rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm">
                1
              </span>
              Business Information
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white mb-2 font-medium">Full Name *</label>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange('fullName', e.target.value)}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                  placeholder="John Doe"
                />
                {errors.fullName && (
                  <p className="text-red-400 text-sm mt-1">{errors.fullName}</p>
                )}
              </div>

              <div>
                <label className="block text-white mb-2 font-medium">Email *</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                  placeholder="john@example.com"
                />
                {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-white mb-2 font-medium">Phone *</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                  placeholder="(555) 123-4567"
                />
                {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone}</p>}
              </div>

              <div>
                <label className="block text-white mb-2 font-medium">Business Name *</label>
                <input
                  type="text"
                  value={formData.businessName}
                  onChange={(e) => handleInputChange('businessName', e.target.value)}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                  placeholder="Acme Corp"
                />
                {errors.businessName && (
                  <p className="text-red-400 text-sm mt-1">{errors.businessName}</p>
                )}
              </div>

              <div className="md:col-span-2">
                <label className="block text-white mb-2 font-medium">
                  Business Website (Optional)
                </label>
                <input
                  type="url"
                  value={formData.businessWebsite}
                  onChange={(e) => handleInputChange('businessWebsite', e.target.value)}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                  placeholder="https://example.com"
                />
                {errors.businessWebsite && (
                  <p className="text-red-400 text-sm mt-1">{errors.businessWebsite}</p>
                )}
              </div>
            </div>
          </div>

          {/* NFT Configuration Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <span className="bg-purple-500 rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm">
                2
              </span>
              NFT Collection Configuration
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white mb-2 font-medium">
                  Collection Name *
                </label>
                <input
                  type="text"
                  value={formData.collectionName}
                  onChange={(e) => handleInputChange('collectionName', e.target.value)}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                  placeholder="Acme VIP Club"
                />
                {errors.collectionName && (
                  <p className="text-red-400 text-sm mt-1">{errors.collectionName}</p>
                )}
              </div>

              <div>
                <label className="block text-white mb-2 font-medium">
                  Collection Symbol *
                </label>
                <input
                  type="text"
                  value={formData.collectionSymbol}
                  onChange={(e) =>
                    handleInputChange('collectionSymbol', e.target.value.toUpperCase())
                  }
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 uppercase"
                  placeholder="ACME"
                  maxLength={10}
                />
                {errors.collectionSymbol && (
                  <p className="text-red-400 text-sm mt-1">{errors.collectionSymbol}</p>
                )}
              </div>

              <div>
                <label className="block text-white mb-2 font-medium">Total Supply *</label>
                <input
                  type="number"
                  value={formData.supply}
                  onChange={(e) => handleInputChange('supply', parseInt(e.target.value))}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                  placeholder="1000"
                  min="1"
                  max="10000"
                />
                {errors.supply && (
                  <p className="text-red-400 text-sm mt-1">{errors.supply}</p>
                )}
                <p className="text-gray-400 text-sm mt-1">Max 10,000 NFTs</p>
              </div>

              <div>
                <label className="block text-white mb-2 font-medium">
                  Royalty Percentage *
                </label>
                <input
                  type="number"
                  value={formData.royaltyPercentage}
                  onChange={(e) =>
                    handleInputChange('royaltyPercentage', parseFloat(e.target.value))
                  }
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                  placeholder="5"
                  min="0"
                  max="20"
                  step="0.5"
                />
                {errors.royaltyPercentage && (
                  <p className="text-red-400 text-sm mt-1">{errors.royaltyPercentage}</p>
                )}
                <p className="text-gray-400 text-sm mt-1">0-20% recommended</p>
              </div>

              <div className="md:col-span-2">
                <label className="block text-white mb-2 font-medium">
                  Creator Wallet Address *
                </label>
                <input
                  type="text"
                  value={formData.creatorWallet}
                  onChange={(e) => handleInputChange('creatorWallet', e.target.value)}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 font-mono text-sm"
                  placeholder="Your Solana wallet address"
                />
                {errors.creatorWallet && (
                  <p className="text-red-400 text-sm mt-1">{errors.creatorWallet}</p>
                )}
              </div>
            </div>
          </div>

          {/* Utility Type Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <span className="bg-purple-500 rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm">
                3
              </span>
              Select Utility Type
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              {merchantConfig.onboarding.utilityTypes.map((utility) => (
                <button
                  key={utility.value}
                  type="button"
                  onClick={() => handleInputChange('utilityType', utility.value)}
                  className={`text-left p-4 rounded-xl border-2 transition ${
                    formData.utilityType === utility.value
                      ? 'border-purple-500 bg-purple-500/20'
                      : 'border-white/20 bg-white/5 hover:border-white/40'
                  }`}
                >
                  <div className="flex items-start">
                    <span className="text-3xl mr-3">{utility.icon}</span>
                    <div className="flex-1">
                      <h3 className="text-white font-semibold mb-1">{utility.label}</h3>
                      <p className="text-gray-400 text-sm mb-2">{utility.description}</p>
                      <p className="text-gray-500 text-xs">
                        Examples: {utility.examples.join(', ')}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          {errors.submit && (
            <div className="mb-6 bg-red-500/20 border border-red-500 rounded-lg p-4 text-red-300">
              {errors.submit}
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-4 rounded-lg font-bold text-lg hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Creating Your Collection...' : 'Launch My NFT Collection 🚀'}
          </button>

          <p className="text-gray-400 text-sm text-center mt-4">
            By submitting, you agree to our Terms of Service and Privacy Policy
          </p>
        </form>

        {/* Trust Indicators */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4">Trusted by 500+ merchants worldwide</p>
          <div className="flex justify-center items-center gap-8 text-gray-500">
            <div className="flex items-center">
              <span className="text-green-400 mr-2">✓</span>
              <span>Solana Verified</span>
            </div>
            <div className="flex items-center">
              <span className="text-green-400 mr-2">✓</span>
              <span>SOC 2 Compliant</span>
            </div>
            <div className="flex items-center">
              <span className="text-green-400 mr-2">✓</span>
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
