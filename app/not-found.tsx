/**
 * 404 Not Found Page
 * Beautiful error page with navigation options
 */

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-black flex items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center">
        {/* 404 Animation */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-4">
            404
          </h1>
          <div className="text-6xl mb-6">🔍</div>
        </div>

        {/* Error Message */}
        <h2 className="text-4xl font-bold text-white mb-4">Page Not Found</h2>
        <p className="text-xl text-gray-300 mb-8">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>

        {/* Navigation Options */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8">
          <h3 className="text-xl font-semibold text-white mb-4">Where would you like to go?</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link
              href="/"
              className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition"
            >
              🏠 Home
            </Link>
            <Link
              href="/onboard"
              className="bg-white/10 border border-white/20 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition"
            >
              🚀 Merchant Onboarding
            </Link>
            <Link
              href="/tokenomics"
              className="bg-white/10 border border-white/20 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition"
            >
              💎 Tokenomics
            </Link>
            <Link
              href="/about"
              className="bg-white/10 border border-white/20 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition"
            >
              ℹ️ About Us
            </Link>
          </div>
        </div>

        {/* Popular Pages */}
        <div className="text-left">
          <h3 className="text-lg font-semibold text-white mb-3">Popular Pages:</h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="/airdrop"
                className="text-purple-400 hover:text-purple-300 transition"
              >
                → Join the Airdrop
              </Link>
            </li>
            <li>
              <Link
                href="/roadmap"
                className="text-purple-400 hover:text-purple-300 transition"
              >
                → View Roadmap
              </Link>
            </li>
            <li>
              <Link
                href="/whitepaper"
                className="text-purple-400 hover:text-purple-300 transition"
              >
                → Read Whitepaper
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Support */}
        <div className="mt-8 pt-8 border-t border-white/10">
          <p className="text-gray-400">
            Still need help?{' '}
            <a href="mailto:support@optik.io" className="text-purple-400 hover:underline">
              Contact Support
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
