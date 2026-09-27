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

// Unsplash frames still in use. Each comment states what the picture
// actually shows and where — the earlier comments described intent ("lake
// geneva", "european cityscape") and hid a Canadian lake, a Romanian ridge
// and a Paris bridge on a Swiss site. None of these shows an identifiable
// venue, bank or firm, so nothing implies a confirmed venue or partner.
export const images = {
  heroAlpine: u("photo-1527668752968-14dc70a27c95", 2200, 75), // Hero — alpine pasture and snow peaks above a small lake — landscape

  // Concept cards (and the full-bleed hero on each concept page)
  programmeAccess: u("photo-1781478424318-2169641b44b2", 2200), // Bern old-town street, arcades and Münster spire — landscape
  // Real photography on the Finance & Wealth card only. The concept page
  // hero uses programmeBankingHero instead: a 724px portrait stretched to a
  // 1440px hero was soft, and a face behind the concept title read as the
  // programme's host.
  programmeBanking: "/photos/executive-desk.jpg",
  programmeBankingHero: u("photo-1563644734741-7382a8584739", 2200), // Lake Geneva from the Dent de Jaman above Montreux — wide landscape
  programmeTopic: u("photo-1779542394057-f38de1382830", 2200), // Lucerne riverside seen through a stone archway — portrait

  // Homepage "Learning settings" tiles
  venueZurich: u("photo-1649790247375-3bd1db87721d", 1400), // St. Peter clock tower over the Limmat, Zurich — portrait
  venueGeneva: u("photo-1663616842575-c24b40700e0a", 1400), // Lavaux vineyard village above Lake Geneva, Vaud — landscape
  venueAlps: u("photo-1709023401550-6b5f0f1c2f59", 1400), // Peaks above a sea of cloud near St. Moritz — portrait
  // Real photography (hotel lounge), ~3:4 portrait.
  venueInterior: "/photos/hotel-lounge.jpg",

  // Private Office hero
  privateOffice: u("photo-1744563331347-f1175dbb5500", 2200), // Brunngasse arcades, Bern old town, black and white — landscape

  // Insights — one image per article so no two insight pages share a hero
  insightAccess: u("photo-1728402077556-7c2d3787e44f", 1800), // Basel Münster and old town above the Rhine — landscape
  insightBanking: u("photo-1766781075588-05a0a1206e1d", 1800), // Carved wooden door in a sandstone arch, Basel old town — portrait
  insightMethodology: u("photo-1566475955255-404134a79aeb", 1800), // Alpage huts in Val d'Hérens, Valais — landscape
  // Not the Zurich night view: St. Peter already appears in the homepage tiles.
  insightApplication: u("photo-1634042493368-4fd212a8bb0f", 1800), // St. Pierre Cathedral above the lakefront at night, Geneva — landscape
  insightCities: u("photo-1643981670720-eef07ebdb179", 1800), // Zurich old town, Limmat and lake from above, morning — landscape
  insightRefusal: u("photo-1577140917170-285929fb55b7", 1800), // Minimal, sparsely furnished room — landscape

  ctaAlps: u("photo-1506905925346-21bda4d32df4", 2000, 75), // Closing CTA — alpine peaks above a sea of cloud at dusk — landscape
};
