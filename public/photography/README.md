# Photography

Every photograph on the site is registered in `src/lib/images.ts`. Until a real
photograph exists, each entry falls back to a temporary Unsplash frame.

## Replacing a stock image

1. Export the photograph as JPEG, sRGB, quality ~80, at the width listed below.
2. Save it into this folder using **exactly** the filename listed below.
3. In `src/lib/images.ts`, set `commissioned: true` on that entry.
4. If the photograph is not purely decorative, write a short `alt` description on
   the same entry. Leave `alt` as an empty string for decorative frames so screen
   readers skip them.

Nothing else needs to change — every page reads the resolved URL from the manifest.

## Shot list

| File | Width | Subject |
| --- | --- | --- |
| `hero-alpine.jpg` | 2200px | Swiss alpine landscape, restrained and cold-toned. Sits behind the homepage headline, so keep the upper third quiet. |
| `programme-access.jpg` | 1200px | A Zurich SME site visit or boardroom in use during the Access Immersion. |
| `programme-banking.jpg` | 1200px | Geneva private-banking interior or facade. |
| `programme-topic.jpg` | 1200px | The Zurich working venue used for Swiss Finance Week. |
| `venue-zurich.jpg` | 1400px | The actual Zurich venue, exterior or approach. |
| `venue-geneva.jpg` | 1400px | The actual Geneva venue, or Lake Geneva from the venue. |
| `venue-alps.jpg` | 1400px | The alpine setting used for the day-four session. |
| `venue-interior.jpg` | 1400px | A private salon interior set for twelve, unoccupied. |
| `network-room.jpg` | 1600px | A reconvening setting. |
| `insight-access.jpg` | 1100px | Editorial frame for Swiss Access articles. |
| `insight-banking.jpg` | 1100px | Editorial frame for Private Banking articles. |
| `insight-methodology.jpg` | 1100px | Editorial frame for Methodology articles. |
| `cta-alps.jpg` | 2000px | Wide alpine frame behind the closing call to action. |

## Rules

- **Consent before publication.** No identifiable participant appears in any
  photograph without that person's specific written consent, per the application
  terms. Prefer empty rooms, details, and architecture over faces.
- **No staged cohort photography.** The published position is that we do not
  stage sessions for marketing; the photographs should not contradict it.
- **No stock clichés.** No handshakes, no skylines with graph overlays, no
  generic conference audiences.
- **Venues must be real.** Once dates are confirmed, photograph the venues
  actually contracted rather than representative ones.

## Checking progress

`npm run audit:photography` lists every key still showing stock.
