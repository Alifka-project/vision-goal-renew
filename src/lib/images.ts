// Curated photographic references — Swiss / alpine / architecture / interior.
// These are placeholders that align with the brand brief (no handshakes / skylines / graphs).
// Replace with commissioned photography before launch.

const u = (id: string, w = 1600, q = 80) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=${q}`;

export const images = {
  // Hero — dramatic alpine vista
  heroAlpine: u("photo-1527668752968-14dc70a27c95", 2200, 75),

  // Programme moods
  programmeAccess: u("photo-1497366216548-37526070297c", 1200), // warm modern interior
  programmeBanking: u("photo-1551836022-deb4988cc6c0", 1200), // classical architecture
  programmeTopic: u("photo-1481627834876-b7833e8f5570", 1200), // library / study

  // Venue / visual statements
  venueZurich: u("photo-1518998053901-5348d3961a04", 1400), // european cityscape architecture
  venueGeneva: u("photo-1502786129293-79981df4e689", 1400), // lake geneva
  venueAlps: u("photo-1469474968028-56623f02e42e", 1400), // mountain forest
  venueInterior: u("photo-1568084680786-a84f91d1153c", 1400), // editorial interior

  // Alumni context
  alumniRoom: u("photo-1497366216548-37526070297c", 1600),

  // Insights
  insightAccess: u("photo-1464822759023-fed622ff2c3b", 1100),
  insightBanking: u("photo-1551836022-deb4988cc6c0", 1100),
  insightMethodology: u("photo-1542037104857-ffbb0b9155fb", 1100),

  // CTA
  ctaAlps: u("photo-1506905925346-21bda4d32df4", 2000, 75),
};
