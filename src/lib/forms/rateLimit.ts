// Per-IP fixed-window limiter held in module memory.
//
// This is deliberately simple and is sufficient for a low-volume marketing site
// running on a single region. If the site is ever deployed across several
// instances, swap the Map for a shared store (Upstash Redis or equivalent) —
// the interface below is the only thing that needs to change.

type Window = { count: number; resetAt: number };

const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;

const windows = new Map<string, Window>();

function sweep(now: number) {
  if (windows.size < 500) return;
  for (const [key, window] of windows) {
    if (window.resetAt <= now) windows.delete(key);
  }
}

export function checkRateLimit(key: string): { ok: boolean; retryAfterSeconds: number } {
  const now = Date.now();
  sweep(now);

  const existing = windows.get(key);
  if (!existing || existing.resetAt <= now) {
    windows.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return { ok: true, retryAfterSeconds: 0 };
  }

  existing.count += 1;
  if (existing.count > MAX_PER_WINDOW) {
    return { ok: false, retryAfterSeconds: Math.ceil((existing.resetAt - now) / 1000) };
  }
  return { ok: true, retryAfterSeconds: 0 };
}

// Vercel and most proxies put the originating address first in x-forwarded-for.
export function clientIpFrom(headers: Headers): string {
  const forwarded = headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]!.trim();
  return headers.get("x-real-ip")?.trim() || "unknown";
}
