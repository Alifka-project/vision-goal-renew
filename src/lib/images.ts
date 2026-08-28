// Photography manifest.
//
// Every image on the site is registered here. Each entry names the local file it
// should eventually use, the subject it needs to show, and a temporary Unsplash
// stock frame to stand in until the commissioned photograph exists.
//
// TO REPLACE A STOCK IMAGE WITH A REAL ONE:
//   1. Export the photograph at the width given by `width` (JPEG, sRGB, q80).
//   2. Save it to `public/photography/<file>` using exactly the filename below.
//   3. Flip `commissioned` to true for that entry.
//   4. Fill in `alt` if the placeholder wording no longer describes the frame.
//
// Nothing else needs to change: `images.<key>` resolves to the local file as
// soon as the flag is set. See public/photography/README.md for the shot list.

type Photo = {
  /** Filename inside public/photography. */
  file: string;
  /** Set to true once the real photograph is in place. */
  commissioned: boolean;
  /** Intended width in pixels. */
  width: number;
  /** What the frame must show. Also used as the brief for the photographer. */
  subject: string;
  /** Empty string marks the image as decorative for assistive technology. */
  alt: string;
  /** Temporary stock frame, used only while `commissioned` is false. */
  fallback: string;
};

const stock = (id: string, w = 1600, q = 80) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=${q}`;

export const photography = {
  heroAlpine: {
    file: "hero-alpine.jpg",
    commissioned: false,
    width: 2200,
    subject: "Swiss alpine landscape, restrained and cold-toned, used behind the homepage headline.",
    alt: "",
    fallback: stock("photo-1527668752968-14dc70a27c95", 2200, 75),
  },
  programmeAccess: {
    file: "programme-access.jpg",
    commissioned: false,
    width: 1200,
    subject: "A Zurich SME site visit or boardroom in use during the Access Immersion.",
    alt: "",
    fallback: stock("photo-1497366216548-37526070297c", 1200),
  },
  programmeBanking: {
    file: "programme-banking.jpg",
    commissioned: false,
    width: 1200,
    subject: "Geneva private-banking interior or facade used for the Banking Intensive.",
    alt: "",
    fallback: stock("photo-1551836022-deb4988cc6c0", 1200),
  },
  programmeTopic: {
    file: "programme-topic.jpg",
    commissioned: false,
    width: 1200,
    subject: "The Zurich working venue used for Swiss Finance Week.",
    alt: "",
    fallback: stock("photo-1481627834876-b7833e8f5570", 1200),
  },
  venueZurich: {
    file: "venue-zurich.jpg",
    commissioned: false,
    width: 1400,
    subject: "The actual Zurich venue exterior or approach.",
    alt: "",
    fallback: stock("photo-1518998053901-5348d3961a04", 1400),
  },
  venueGeneva: {
    file: "venue-geneva.jpg",
    commissioned: false,
    width: 1400,
    subject: "The actual Geneva venue, or Lake Geneva from the venue.",
    alt: "",
    fallback: stock("photo-1502786129293-79981df4e689", 1400),
  },
  venueAlps: {
    file: "venue-alps.jpg",
    commissioned: false,
    width: 1400,
    subject: "The alpine setting used for the day-four session.",
    alt: "",
    fallback: stock("photo-1469474968028-56623f02e42e", 1400),
  },
  venueInterior: {
    file: "venue-interior.jpg",
    commissioned: false,
    width: 1400,
    subject: "A private salon interior set for twelve, unoccupied.",
    alt: "",
    fallback: stock("photo-1568084680786-a84f91d1153c", 1400),
  },
  alumniRoom: {
    file: "network-room.jpg",
    commissioned: false,
    width: 1600,
    subject:
      "A reconvening setting. No identifiable participants unless written consent has been obtained.",
    alt: "",
    fallback: stock("photo-1517248135467-4c7edcad34c4", 1600),
  },
  insightAccess: {
    file: "insight-access.jpg",
    commissioned: false,
    width: 1100,
    subject: "Editorial frame for Swiss Access articles.",
    alt: "",
    fallback: stock("photo-1464822759023-fed622ff2c3b", 1100),
  },
  insightBanking: {
    file: "insight-banking.jpg",
    commissioned: false,
    width: 1100,
    subject: "Editorial frame for Private Banking articles.",
    alt: "",
    fallback: stock("photo-1551836022-deb4988cc6c0", 1100),
  },
  insightMethodology: {
    file: "insight-methodology.jpg",
    commissioned: false,
    width: 1100,
    subject: "Editorial frame for Methodology articles.",
    alt: "",
    fallback: stock("photo-1542037104857-ffbb0b9155fb", 1100),
  },
  // One frame per article, so no two Insights pages share a hero.
  insightCities: {
    file: "insight-cities.jpg",
    commissioned: false,
    width: 1100,
    subject: "Editorial frame contrasting the Geneva and Zurich financial centres.",
    alt: "",
    fallback: stock("photo-1501785888041-af3ef285b470", 1100),
  },
  insightApplication: {
    file: "insight-application.jpg",
    commissioned: false,
    width: 1100,
    subject: "Editorial frame for the piece on applying rather than buying.",
    alt: "",
    fallback: stock("photo-1499856871958-5b9627545d1a", 1100),
  },
  insightRefusal: {
    file: "insight-refusal.jpg",
    commissioned: false,
    width: 1100,
    subject: "Restrained, near-empty frame for the piece on what Vision Goal does not do.",
    alt: "",
    fallback: stock("photo-1577140917170-285929fb55b7", 1100),
  },
  privateOffice: {
    file: "private-office.jpg",
    commissioned: false,
    width: 1400,
    subject: "A private lounge or meeting setting for the Private Office page.",
    alt: "",
    fallback: stock("photo-1524758631624-e2822e304c36", 1400),
  },
  ctaAlps: {
    file: "cta-alps.jpg",
    commissioned: false,
    width: 2000,
    subject: "Wide alpine frame behind the closing call to action.",
    alt: "",
    fallback: stock("photo-1506905925346-21bda4d32df4", 2000, 75),
  },
} satisfies Record<string, Photo>;

export type PhotoKey = keyof typeof photography;

function resolve(photo: Photo) {
  return photo.commissioned ? `/photography/${photo.file}` : photo.fallback;
}

/** Resolved URL per key, so call sites stay unchanged as photographs land. */
export const images = Object.fromEntries(
  Object.entries(photography).map(([key, photo]) => [key, resolve(photo)]),
) as Record<PhotoKey, string>;

export const altText = Object.fromEntries(
  Object.entries(photography).map(([key, photo]) => [key, photo.alt]),
) as Record<PhotoKey, string>;

/** True while a key is still showing stock. Used by the pre-launch audit script. */
export const isStock = (key: PhotoKey) => !photography[key].commissioned;

export const stockImageCount = Object.values(photography).filter((p) => !p.commissioned).length;
