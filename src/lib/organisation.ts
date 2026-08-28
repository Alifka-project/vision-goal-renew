// Registered particulars for the operating entity, taken from the Swiss commercial
// register (Zefix / SHAB). Every legal page, imprint line, and form-notification
// footer reads from here so the details can never drift apart between pages.

export const organisation = {
  legalName: "Vision Goal GmbH",
  tradingName: "Vision Goal",
  legalForm: "Gesellschaft mit beschränkter Haftung (GmbH) under Swiss law",

  // Commercial register
  uid: "CHE-488.435.445",
  registerOffice: "Handelsregisteramt des Kantons Schwyz",
  registeredSeat: "Freienbach, Canton of Schwyz",
  incorporated: "5 August 2022",
  shareCapital: "CHF 20,000",
  purpose: "Provision of coaching and training services",

  // Set this once the entity is entered in the Swiss VAT register. While it is
  // null the imprint states that no VAT number is held and prices are shown
  // without a VAT line.
  vatNumber: null as string | null,

  address: {
    line1: "Huobstrasse 10",
    postalCode: "8808",
    city: "Pfäffikon SZ",
    canton: "Schwyz",
    country: "Switzerland",
  },

  // Sole managing officer with individual signing authority; also the person
  // responsible for the content of the website and the data-protection contact.
  responsiblePerson: {
    name: "Andreas Svoboda",
    role: "Managing Director and sole shareholder, individual signing authority",
  },

  email: {
    general: "info@visiongoal.ch",
    applications: "applications@visiongoal.ch",
    privacy: "privacy@visiongoal.ch",
    editorial: "editorial@visiongoal.ch",
  },
  phone: "+41 78 728 09 33",

  // Courts at the registered seat. Freienbach sits in the district of Höfe.
  jurisdiction: "the courts of the District of Höfe, Canton of Schwyz, Switzerland",
  governingLaw: "Swiss law",
} as const;

export const postalAddressLines = [
  organisation.legalName,
  organisation.address.line1,
  `${organisation.address.postalCode} ${organisation.address.city}`,
  organisation.address.country,
];

export const postalAddressInline = `${organisation.address.line1}, ${organisation.address.postalCode} ${organisation.address.city}, ${organisation.address.country}`;

// A single response standard, applied to every form, every page, and every
// automated acknowledgement. Previously the site quoted 48 hours, five business
// days, and ten business days on different pages.
export const RESPONSE_STANDARD_DAYS = 5;
export const responseStandard = {
  short: "Within five business days",
  sentence: "We reply to every enquiry within five business days.",
};
