/**
 * Next.js Middleware
 * Handles security headers, CSP, route protection, and rate limiting
 */

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Rate limiting map (in production, use Redis or similar)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

// Rate limit configuration
const RATE_LIMIT = {
  windowMs: 60000, // 1 minute
  maxRequests: 100, // Max requests per window
};

/**
 * Apply rate limiting
 */
function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetTime) {
    // Create new rate limit record
    rateLimitMap.set(ip, {
      count: 1,
      resetTime: now + RATE_LIMIT.windowMs,
    });
    return true;
  }

  if (record.count >= RATE_LIMIT.maxRequests) {
    return false; // Rate limit exceeded
  }

  // Increment count
  record.count += 1;
  return true;
}

/**
 * Get client IP address
 */
function getClientIp(request: NextRequest): string {
  return (
    request.headers.get('x-forwarded-for')?.split(',')[0] ||
    request.headers.get('x-real-ip') ||
    'unknown'
  );
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Apply rate limiting to API routes
  if (pathname.startsWith('/api/')) {
    const ip = getClientIp(request);
    const allowed = checkRateLimit(ip);

    if (!allowed) {
      return NextResponse.json(
        {
          error: 'Too many requests',
          message: 'Rate limit exceeded. Please try again later.',
        },
        {
          status: 429,
          headers: {
            'Retry-After': '60',
          },
        }
      );
    }
  }

  // Create response
  const response = NextResponse.next();

  // Security Headers
  const securityHeaders = {
    // Prevent clickjacking
    'X-Frame-Options': 'DENY',

    // Prevent MIME type sniffing
    'X-Content-Type-Options': 'nosniff',

    // XSS Protection (legacy browsers)
    'X-XSS-Protection': '1; mode=block',

    // Referrer Policy
    'Referrer-Policy': 'strict-origin-when-cross-origin',

    // Permissions Policy (Feature Policy)
    'Permissions-Policy':
      'camera=(), microphone=(), geolocation=(), interest-cohort=()',

    // HSTS (HTTPS only)
    'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload',
  };

  // Content Security Policy
  const cspDirectives = [
    "default-src 'self'",
    "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://cdn.jsdelivr.net", // Allow inline scripts for Next.js
    "style-src 'self' 'unsafe-inline'", // Allow inline styles for Tailwind
    "img-src 'self' data: https: blob:",
    "font-src 'self' data:",
    "connect-src 'self' https://api.solana.com https://*.solana.com https://solana-mainnet.g.alchemy.com https://rpc.helius.xyz wss://*.solana.com",
    "frame-ancestors 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "upgrade-insecure-requests",
  ];

  const csp = cspDirectives.join('; ');

  // Apply all security headers
  Object.entries(securityHeaders).forEach(([key, value]) => {
    response.headers.set(key, value);
  });

  response.headers.set('Content-Security-Policy', csp);

  // CORS headers for API routes
  if (pathname.startsWith('/api/')) {
    response.headers.set('Access-Control-Allow-Origin', '*'); // In production, specify allowed origins
    response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    response.headers.set('Access-Control-Max-Age', '86400'); // 24 hours
  }

  // Add cache control headers
  if (pathname.startsWith('/api/')) {
    // Don't cache API responses
    response.headers.set('Cache-Control', 'no-store, max-age=0');
  } else if (
    pathname.match(/\.(jpg|jpeg|png|gif|svg|ico|webp)$/) ||
    pathname.startsWith('/_next/static/')
  ) {
    // Cache static assets for 1 year
    response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
  } else {
    // Cache pages for 1 hour
    response.headers.set('Cache-Control', 'public, max-age=3600, must-revalidate');
  }

  return response;
}

// Configure which routes to run middleware on
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};
