import Link from "next/link";
import type { Metadata } from "next";
import { Header } from "@/components/chrome/Header";
import { Footer } from "@/components/chrome/Footer";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/effects/Reveal";
import { organisation } from "@/lib/organisation";

export const metadata: Metadata = {
  title: "Dispatch subscription — Vision Goal",
  description: "Confirmation of your Vision Goal dispatch subscription.",
  robots: { index: false, follow: false },
};

// Landing page for the confirmation link in the opt-in email. It is deliberately
// English-only and outside the dictionary: it is reached once, from an email, and
// never linked from the site itself.
const outcomes = {
  confirmed: {
    eyebrow: "Subscription confirmed",
    headline: "You are on the list.",
    body: [
      "Your address is confirmed and the next dispatch will reach you. We publish roughly two pieces a month and never anything promotional.",
      "You can unsubscribe at any time using the link at the foot of every dispatch.",
    ],
  },
  expired: {
    eyebrow: "Link expired",
    headline: "That link is no longer valid.",
    body: [
      "Confirmation links last seven days. Yours has passed that, so nothing has been subscribed.",
      "Subscribing again from any page on the site will send a fresh link.",
    ],
  },
  invalid: {
    eyebrow: "Link not recognised",
    headline: "We could not read that link.",
    body: [
      "The link may have been truncated by an email client, or it may have been altered in transit. Nothing has been subscribed.",
      "Try subscribing again, or copy the whole link from the email into your browser.",
    ],
  },
  failed: {
    eyebrow: "Something went wrong",
    headline: "We could not complete that just now.",
    body: [
      "Your confirmation reached us but we could not record it. This is our fault, not yours.",
      `Please write to ${organisation.email.general} and we will add you by hand.`,
    ],
  },
} as const;

type Status = keyof typeof outcomes;

export default async function NewsletterConfirmedPage({
  searchParams,
}: {
  searchParams: Promise<{ status?: string }>;
}) {
  const { status } = await searchParams;
  const key: Status = status && status in outcomes ? (status as Status) : "invalid";
  const copy = outcomes[key];

  return (
    <>
      <Header variant="solid" />
      <main>
        <section className="bg-cream-2 border-b hairline">
          <div className="container py-section-y md:py-section-y-lg">
            <Reveal duration={800}>
              <div className="max-w-2xl">
                <Eyebrow>{copy.eyebrow}</Eyebrow>
                <h1 className="mt-6 font-serif text-display-md md:text-[3.5rem] text-navy leading-[1.05] tracking-[-0.015em]">
                  {copy.headline}
                </h1>
                {copy.body.map((paragraph) => (
                  <p key={paragraph} className="mt-6 max-w-prose text-body-lg text-slate">
                    {paragraph}
                  </p>
                ))}
                <div className="mt-10 flex flex-wrap gap-4">
                  <Link
                    href="/insights"
                    className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium border bg-navy text-cream border-navy hover:bg-navy-deep transition-colors duration-200"
                  >
                    Read the insights
                  </Link>
                  <Link
                    href="/"
                    className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium border border-navy/25 text-navy hover:border-navy transition-colors duration-200"
                  >
                    Back to the homepage
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
