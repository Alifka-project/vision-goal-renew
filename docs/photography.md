# Photography

Kept outside `/public` on purpose: anything in `/public` is served to the web.

Every image on the site is registered in `src/lib/images.ts`:

- `photos.*` — real photographs supplied by the founder, stored in `/public/photos`.
- `images.*` — the remaining Unsplash frames, loaded from `images.unsplash.com`.

Each entry's comment states what the picture actually shows and where
(subject, place, orientation), so a mislabelled stock frame is easy to spot.

## Replacing a stock image with a real photograph

1. Export as JPEG, sRGB, quality ~80, at least as wide as the stock frame it
   replaces (the width is the second argument to `u(...)`).
2. Save it to `/public/photos/` with a descriptive name.
3. Add it to `photos` in `src/lib/images.ts`, then point the relevant
   `images.*` key at it, and rewrite the comment to describe the photograph.
4. If the photograph carries meaning (not purely decorative), give it `alt`
   text at the call site; decorative frames keep `alt=""`.

## Rules

- **Consent before publication.** No identifiable person appears without their
  specific written consent. Prefer rooms, details and architecture over faces.
- **No implied roles.** A person in a photograph is never captioned with a name
  or role and is never placed next to the founder biography.
- **Supporting, not leading.** Group photographs stay supporting images; no
  text is set over them.
- **No implied venues or partners.** Until an experience is confirmed, use
  settings that cannot be identified as a specific venue, bank or firm.
- **Swiss, and honest about it.** Frames labelled as Swiss places must show
  those places.
- **No stock clichés.** No handshakes, no skylines with graph overlays, no
  generic conference audiences.

## Checking progress

`npm run audit:photography` lists which keys are real photographs and which
are still stock.
