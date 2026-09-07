// Cloudflare Turnstile verification.
//
// Optional: when TURNSTILE_SECRET_KEY is unset the site falls back to the
// honeypot, timing trap, and rate limiter alone, which is adequate for launch.
// Set both TURNSTILE_SECRET_KEY and NEXT_PUBLIC_TURNSTILE_SITE_KEY to enable the
// widget and enforce it server-side.

const VERIFY_URL = "https://challenges.cloudflare.com/turnstile/v0/siteverify";

export async function verifyTurnstile(
  token: string | undefined,
  ip: string,
): Promise<{ ok: boolean; reason?: string }> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return { ok: true };

  if (!token) return { ok: false, reason: "missing-token" };

  try {
    const response = await fetch(VERIFY_URL, {
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ secret, response: token, remoteip: ip }),
      cache: "no-store",
    });
    const result = (await response.json()) as { success?: boolean; "error-codes"?: string[] };
    if (result.success) return { ok: true };
    return { ok: false, reason: result["error-codes"]?.join(",") ?? "verification-failed" };
  } catch {
    return { ok: false, reason: "verification-unreachable" };
  }
}
