// Curated photographic references — Swiss / alpine / architecture / interior.
// Stock imagery aligned with the brand brief (no handshakes / skylines / graphs)
// coexists with real event photography supplied by the founder — those live
// under /public/photos and appear here as `photo*` keys. Next.js Image serves
// WebP/AVIF on the fly for both local and remote sources; alt text is set at
// the call site so each image reads meaningfully to screen readers.

const u = (id: string, w = 1600, q = 80) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=${q}`;

// Real event photographs supplied by the founder. Portrait vs landscape is
// noted for layout. Public path: `/photos/<name>.jpg` (WebP variants live
// alongside if a plain <picture> fallback is ever needed).
export const photos = {
  // Group at Restaurant Orsini, Zurich — senior professionals (768×1024, portrait).
  orsiniSeniorGroup: "/photos/orsini-senior-group.jpg",
  // Group at Restaurant Orsini, Zurich — mixed audience (665×1182, portrait).
  orsiniMixedGroup: "/photos/orsini-mixed-group.jpg",
  // Premium retail delicatessen environment (1080×665, landscape — cropped).
  retailDelicatessen: "/photos/retail-delicatessen.jpg",
  // Kitchen behind-the-scenes access (1182×665, landscape, deliberately informal).
  kitchenBehindScenes: "/photos/kitchen-behind-scenes.jpg",
  // Professional at a laptop in a wood-panelled executive office (724×1086, portrait).
  executiveDesk: "/photos/executive-desk.jpg",
  // Professional crossing a formally furnished hotel lounge (1158×1600, ~3:4 portrait).
  hotelLounge: "/photos/hotel-lounge.jpg",
} as const;

export const images = {
  // Hero — dramatic alpine vista
  heroAlpine: u("photo-1527668752968-14dc70a27c95", 2200, 75),

  // Programme moods
  programmeAccess: u("photo-1497366216548-37526070297c", 1200), // warm modern interior
  // Real photography, replacing a generic stock portrait (a person holding a
  // coffee mug against a brick wall) that the old comment mislabelled as
  // "classical architecture".
  programmeBanking: "/photos/executive-desk.jpg",
  programmeTopic: u("photo-1481627834876-b7833e8f5570", 1200), // library / study

  // Venue / visual statements
  venueZurich: u("photo-1518998053901-5348d3961a04", 1400), // european cityscape architecture
  venueGeneva: u("photo-1502786129293-79981df4e689", 1400), // lake geneva
  venueAlps: u("photo-1469474968028-56623f02e42e", 1400), // mountain forest
  // Real photography, replacing a stock tropical resort with palm trees that
  // the old comment mislabelled as "editorial interior" — off-brand for a
  // Swiss platform. The 3:4 tile matches this ~0.72 portrait almost exactly.
  venueInterior: "/photos/hotel-lounge.jpg",

  // Alumni context
  alumniRoom: u("photo-1517248135467-4c7edcad34c4", 1600), // moody dining / cohort-dinner room

  // Private office — dedicated, distinct from programmeBanking
  privateOffice: u("photo-1524758631624-e2822e304c36", 1400), // refined private lounge

  // Insights — one image per article so no two insight pages share a hero
  insightAccess: u("photo-1464822759023-fed622ff2c3b", 1100), // swiss-sme-evaluation
  insightBanking: u("photo-1521295121783-8a321d551ad2", 1100), // discretion-as-posture (globe in study)
  insightMethodology: u("photo-1542037104857-ffbb0b9155fb", 1100), // small-rooms (alpine sea of clouds)
  insightApplication: u("photo-1499856871958-5b9627545d1a", 1100), // an-application-not-a-sale (european bridge at dusk)
  insightCities: u("photo-1501785888041-af3ef285b470", 1100), // geneva-and-zurich (alpine lake with rowboat)
  insightRefusal: u("photo-1577140917170-285929fb55b7", 1100), // what-we-do-not-do (minimal room — visual restraint)

  // CTA
  ctaAlps: u("photo-1506905925346-21bda4d32df4", 2000, 75),
};
