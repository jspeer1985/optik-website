'use client';

/**
 * Error Boundary Component
 * Catches and handles runtime errors gracefully
 */

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to error reporting service
    console.error('Application error:', error);

    // In production, send to error tracking service like Sentry
    // Sentry.captureException(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-black flex items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center">
        {/* Error Icon */}
        <div className="mb-8">
          <div className="text-8xl mb-6">⚠️</div>
          <h1 className="text-5xl font-bold text-white mb-4">Oops! Something Went Wrong</h1>
        </div>

        {/* Error Details */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            We encountered an unexpected error
          </h2>
          <p className="text-gray-300 mb-6">
            Don't worry, our team has been notified and we're working on it. Please try again
            or return to the homepage.
          </p>

          {/* Error Details (Development Only) */}
          {process.env.NODE_ENV === 'development' && (
            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 mb-6 text-left">
              <h3 className="text-red-400 font-semibold mb-2">Error Details (Dev Only):</h3>
              <pre className="text-red-300 text-xs overflow-x-auto whitespace-pre-wrap">
                {error.message}
              </pre>
              {error.digest && (
                <p className="text-red-400 text-xs mt-2">Error ID: {error.digest}</p>
              )}
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={reset}
              className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition"
            >
              🔄 Try Again
            </button>
            <a
              href="/"
              className="bg-white/10 border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/20 transition inline-block"
            >
              🏠 Go Home
            </a>
          </div>
        </div>

        {/* Help Section */}
        <div className="text-gray-400">
          <p className="mb-4">If the problem persists, please contact our support team:</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:support@optik.io"
              className="text-purple-400 hover:text-purple-300 transition"
            >
              📧 support@optik.io
            </a>
            <a
              href="https://discord.gg/optik"
              className="text-purple-400 hover:text-purple-300 transition"
            >
              💬 Discord Support
            </a>
            <a
              href="https://twitter.com/optik_io"
              className="text-purple-400 hover:text-purple-300 transition"
            >
              🐦 Twitter
            </a>
          </div>
        </div>

        {/* Status Page Link */}
        <div className="mt-8 pt-8 border-t border-white/10">
          <p className="text-gray-500 text-sm">
            Check our{' '}
            <a href="/status" className="text-purple-400 hover:underline">
              status page
            </a>{' '}
            for any ongoing issues
          </p>
        </div>
      </div>
    </div>
  );
}
