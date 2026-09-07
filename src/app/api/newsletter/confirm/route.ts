import { NextResponse } from "next/server";
import { recordConfirmedSubscription } from "@/lib/forms/mailer";
import { clientIpFrom } from "@/lib/forms/rateLimit";
import { siteUrl, verifyOptInToken } from "@/lib/forms/optIn";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Step two of the dispatch double opt-in. Reached only from the link in the
// confirmation email, so this is the one GET on the site that carries a
// parameter — and the address inside it is encrypted, not readable.
//
// The outcome is passed to the page as a status word rather than an email
// address, so nothing personal survives into the browser history.
function redirect(status: "confirmed" | "expired" | "invalid" | "failed") {
  return NextResponse.redirect(`${siteUrl()}/newsletter/confirmed?status=${status}`, {
    status: 303,
  });
}

export async function GET(request: Request) {
  const token = new URL(request.url).searchParams.get("t");
  const verified = verifyOptInToken(token);

  if (!verified.ok) {
    if (verified.reason === "expired") return redirect("expired");
    if (verified.reason === "unconfigured") {
      console.error("[newsletter] OPTIN_SECRET is not configured; cannot confirm subscriptions.");
      return redirect("failed");
    }
    return redirect("invalid");
  }

  const result = await recordConfirmedSubscription(verified.email, {
    requestedAt: new Date(verified.issuedAt).toISOString(),
    confirmedAt: new Date().toISOString(),
    ip: clientIpFrom(request.headers),
  });

  if (!result.delivered) {
    console.error("[newsletter] confirmation could not be recorded", { reason: result.reason });
    return redirect("failed");
  }

  return redirect("confirmed");
}
