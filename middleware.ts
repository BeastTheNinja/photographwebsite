import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

function randNonce(bytes = 16) {
  const array = crypto.getRandomValues(new Uint8Array(bytes));
  let binary = '';

  for (const value of array) {
    binary += String.fromCharCode(value);
  }

  return btoa(binary).replace(/=+$/, '');
}

export function middleware(req: NextRequest) {
  const nonce = randNonce(16);
  const isProduction = process.env.NODE_ENV === 'production';

  const csp = [
    "default-src 'self'",
    "worker-src 'self'",
    // allow scripts from self and vercel insights script host; permit only scripts with the generated nonce
    `script-src 'self' 'nonce-${nonce}'${isProduction ? '' : " 'unsafe-eval'"} https://va.vercel-scripts.com`,
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: blob: https:",
    "font-src 'self' data:",
    `connect-src 'self'${isProduction ? '' : ' ws: wss:'} https://vitals.vercel-insights.com https://*.vercel-insights.com https://va.vercel-scripts.com`,
    "frame-ancestors 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "object-src 'none'",
    ...(isProduction ? ["upgrade-insecure-requests"] : []),
  ].join('; ');

  const requestHeaders = new Headers(req.headers);
  requestHeaders.set('x-csp-nonce', nonce);

  const res = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  res.headers.set('Content-Security-Policy', csp);
  res.headers.set('X-Content-Type-Options', 'nosniff');
  res.headers.set('X-Frame-Options', 'DENY');
  res.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  res.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
  res.headers.set('Cross-Origin-Opener-Policy', 'same-origin');
  res.headers.set('Cross-Origin-Resource-Policy', 'same-site');
  res.headers.set('X-DNS-Prefetch-Control', 'on');

  return res;
}

export const config = {
  matcher: '/:path*',
};
