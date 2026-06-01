export interface RateLimitEntry {
  count: number;
  resetAt: number;
}

export interface RateLimitOptions {
  limit: number;
  windowMs: number;
  maxEntries: number;
}

export const DEFAULT_BOOKING_RATE_LIMIT: RateLimitOptions = {
  limit: 5,
  windowMs: 10 * 60 * 1000,
  maxEntries: 500,
};

const rateLimitStore = new Map<string, RateLimitEntry>();

function normalizePositiveInteger(value: number, fallback: number) {
  return Number.isFinite(value) && value > 0 ? Math.floor(value) : fallback;
}

function pruneExpiredEntries(now: number) {
  for (const [key, value] of rateLimitStore.entries()) {
    if (value.resetAt <= now) {
      rateLimitStore.delete(key);
    }
  }
}

function evictOldestEntries(maxEntries: number) {
  while (rateLimitStore.size > maxEntries) {
    const oldestKey = rateLimitStore.keys().next().value;
    if (!oldestKey) {
      break;
    }

    rateLimitStore.delete(oldestKey);
  }
}

export function createRateLimitOptions(overrides?: Partial<RateLimitOptions>): RateLimitOptions {
  return {
    limit: normalizePositiveInteger(overrides?.limit ?? DEFAULT_BOOKING_RATE_LIMIT.limit, DEFAULT_BOOKING_RATE_LIMIT.limit),
    windowMs: normalizePositiveInteger(overrides?.windowMs ?? DEFAULT_BOOKING_RATE_LIMIT.windowMs, DEFAULT_BOOKING_RATE_LIMIT.windowMs),
    maxEntries: normalizePositiveInteger(overrides?.maxEntries ?? DEFAULT_BOOKING_RATE_LIMIT.maxEntries, DEFAULT_BOOKING_RATE_LIMIT.maxEntries),
  };
}

export function isRateLimited(ip: string, options: RateLimitOptions, now = Date.now()) {
  pruneExpiredEntries(now);

  const existing = rateLimitStore.get(ip);

  if (!existing || existing.resetAt <= now) {
    rateLimitStore.set(ip, { count: 1, resetAt: now + options.windowMs });
    evictOldestEntries(options.maxEntries);
    return false;
  }

  if (existing.count >= options.limit) {
    return true;
  }

  rateLimitStore.set(ip, { count: existing.count + 1, resetAt: existing.resetAt });
  evictOldestEntries(options.maxEntries);
  return false;
}