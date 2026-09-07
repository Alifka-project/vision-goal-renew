import type { Locale } from "./config";

// A single dictionary covering the chrome and the high-visibility editorial
// strings on every page. Long-form body text (legal copy, programme FAQs,
// insight bodies, host bios) is rendered in English regardless of locale —
// that text is intentionally not machine-translated because the editorial
// posture and (in the legal case) the legal effect would not survive it.
// Translations there will be commissioned per the BRD content plan.

export type Dict = {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    home: string;
    programmes: string;
    hosts: string;
    alumni: string;
    insights: string;
    about: string;
    apply: string;
    privateOffice: string;
    skipToContent: string;
    primaryNav: string;
    // New top-level items for the simplified navigation
    // (Home | What We Do | Experiences | Insights | About | Contact)
    whatWeDo: string;
    experiences: string;
    contact: string;
  };
  cta: {
    applyNext: string;
    requestConsult: string;
    applyForCohort: string;
    submitEnquiry: string;
    readProgramme: string;
    allProgrammes: string;
    allHosts: string;
    allInsights: string;
    subscribe: string;
    send: string;
    continue: string;
    previous: string;
    submitApplication: string;
    // New CTAs for the pre-launch posture — no application flow yet;
    // engagement is a conversation via the contact form
    discussExperience: string;
    discoverVisionGoal: string;
    readExperience: string;
    allExperiences: string;
    sending: string;
  };
  dispatch: {
    label: string;
    items: string[];
  };
  hero: {
    eyebrow: string;
    line1: string;
    line2: string;
    line3: string;
    subline: string;
    subjects: string;
    statusReviewing: string;
    locationLine: string;
    scrollToProgrammes: string;
  };
  posture: {
    eyebrow: string;
    sub: string;
    pillars: { label: string; line: string }[];
  };
  programmesBlock: {
    eyebrow: string;
    headline: string;
    headlineGold: string;
  };
  // "Learning in Practice" — homepage section that shows real event
  // photography and grounds the platform in applied learning, not
  // a brochure feel.
  learningInPractice: {
    eyebrow: string;
    headline: string;
    body: string;
    caption: string;
  };
  programmeMeta: Record<
    "access" | "banking" | "topic",
    {
      name: string;
      tagline: string;
      // `formatLabel` describes the SHAPE of the experience without
      // committing to a duration or city — city / durationLabel are kept
      // in the type for now so existing consumers do not break, but they
      // render as empty strings pre-launch until real cohorts are set.
      formatLabel: string;
      durationLabel: string;
      city: string;
    }
  >;
  hostsStrip: {
    eyebrow: string;
    headline: string;
    headlineGold: string;
    cta: string;
  };
  editorial: {
    eyebrow: string;
    headline: string;
    headlineGold: string;
    side: string;
    tiles: { label: string; caption: string }[];
  };
  alumni: {
    eyebrow: string;
    intro: string;
    voicesEyebrow: string;
    voicesHeadline: string;
    voicesHeadlineGold: string;
    pastEyebrow: string;
    pastHeadline: string;
  };
  insights: {
    eyebrow: string;
    headline: string;
    headlineGold: string;
    practitionerNotes: string;
    featuredLabel: string;
    dispatchEyebrow: string;
    dispatchHeadline: string;
    dispatchHeadlineGold: string;
    dispatchHelp: string;
    dispatchOk: string;
    emailPlaceholder: string;
  };
  privateBanner: {
    eyebrow: string;
    headline: string;
    headlineGold: string;
    response: string;
  };
  ctaBlock: {
    eyebrow: string;
    line1: string;
    line2: string;
  };
  trust: {
    eyebrow: string;
    stats: { value: string; label: string }[];
  };
  enrich: {
    programmesUnitedEyebrow: string;
    programmesUnitedHeadline: string;
    programmesUnitedItems: { title: string; body: string }[];
    hostsCriteriaEyebrow: string;
    hostsCriteriaHeadline: string;
    hostsCriteriaItems: { title: string; body: string }[];
    insightsCategoriesEyebrow: string;
    insightsCategoriesHeadline: string;
    insightsCategoriesItems: { name: string; body: string }[];
    aboutPrinciplesEyebrow: string;
    aboutPrinciplesHeadline: string;
    aboutPrinciplesItems: { title: string; body: string }[];
  };
  pages: {
    programmes: { eyebrow: string; titlePart1: string; titleGold: string; lede: string };
    hosts: { eyebrow: string; titlePart1: string; titleGold: string; lede: string; principleEyebrow: string; principleBody: string };
    alumni: { eyebrow: string; titlePart1: string; titleGold: string; lede: string; postureEyebrow: string; postureHeadline: string; postureBody: string };
    insightsIndex: { eyebrow: string; titlePart1: string; titleGold: string; lede: string };
    about: { eyebrow: string; titlePart1: string; titleGold: string; lede: string; statement: string; statement2: string; standardsEyebrow: string; standardsHeadline: string; pressEyebrow: string; pressHeadline: string; curatorEyebrow: string; curatorNote: string; curatorAttribution: string };
    contact: { eyebrow: string; titlePart1: string; titleGold: string; lede: string; officeEyebrow: string; emailLabel: string; responseLabel: string; responseValue: string; linkedinLabel: string };
    apply: { eyebrow: string; titlePart1: string; titleGold: string; lede: string; steps: string[]; stepLegend: { identity: string; programme: string; whyNow: string; referees: string }; received: string; receivedHeadline: string; receivedBody: string };
    consult: { eyebrow: string; title: string; lede: string; received: string; receivedHeadline: string; receivedBody: string };
    cohort: { eyebrow: string; titlePart1: string; titleGold: string; lede: string; received: string; receivedHeadline: string; receivedBody: string };
    legalSidebar: string;
    programmeDetail: {
      outcomesEyebrow: string;
      outcomesHeadline: string;
      architectureEyebrow: string;
      architectureHeadline: string;
      cohortsEyebrow: string;
      cohortsHeadline: string;
      hostsEyebrow: string;
      hostsHeadlinePart1: string;
      hostsHeadlineGold: string;
      formatEyebrow: string;
      formatHeadline: string;
      investmentEyebrow: string;
      investmentSub: string;
      includesLabel: string;
      excludesLabel: string;
      postureEyebrow: string;
      postureHeadline: string;
      forLabel: string;
      notForLabel: string;
      faqEyebrow: string;
      faqHeadline: string;
      noCohortsNote: string;
    };
  };
  fields: {
    firstName: string;
    lastName: string;
    email: string;
    role: string;
    organisation: string;
    institution: string;
    country: string;
    objective: string;
    objectiveHint: string;
    contribution: string;
    contributionHint: string;
    refereeIntro: string;
    refereeName: string;
    refereeEmail: string;
    consentApply: string;
    consentConsult: string;
    consentCohort: string;
    consentContact: string;
    consentNewsletter: string;
    audience: string;
    audienceHint: string;
    audiencePlaceholder: string;
    languages: string;
    dates: string;
    description: string;
    descriptionHint: string;
    subject: string;
    message: string;
    messageHint: string;
    timing: string;
    timingHint: string;
    timingPlaceholder: string;
    discussTopic: string;
    discussHint: string;
  };
  footer: {
    blurb: string;
    sectionProgrammes: string;
    sectionPlatform: string;
    sectionApply: string;
    linkApplication: string;
    linkPrivateConsultation: string;
    linkPrivateCohort: string;
    linkContact: string;
    legalImprint: string;
    legalPrivacy: string;
    legalCookies: string;
    legalApplicationTerms: string;
    copyright: string;
    contactEyebrow: string;
    contactPhoneLabel: string;
    contactEmailLabel: string;
    contactResponseLabel: string;
    contactResponseValue: string;
    contactPhone: string;
    contactEmail: string;
  };
};

const en: Dict = {
  meta: {
    title: "Vision Goal",
    description:
      "Vision Goal creates curated Swiss executive learning experiences — applied, small, considered.",
  },
  nav: {
    home: "Home",
    programmes: "Experiences",
    hosts: "Practitioner Network",
    alumni: "Network",
    insights: "Insights",
    about: "About",
    apply: "Contact",
    privateOffice: "Private Office",
    skipToContent: "Skip to content",
    primaryNav: "Primary",
    whatWeDo: "What We Do",
    experiences: "Experiences",
    contact: "Contact",
  },
  cta: {
    applyNext: "Discuss an Experience",
    requestConsult: "Discover Vision Goal →",
    applyForCohort: "Discuss an Experience",
    submitEnquiry: "Send message",
    readProgramme: "Read more",
    allProgrammes: "All experiences",
    allHosts: "Back to the practitioner network",
    allInsights: "All insights",
    subscribe: "Subscribe",
    send: "Send →",
    continue: "Continue →",
    previous: "← Previous",
    submitApplication: "Send message",
    discussExperience: "Discuss an Experience",
    discoverVisionGoal: "Discover Vision Goal →",
    readExperience: "Read more",
    allExperiences: "All experiences",
    sending: "Sending…",
  },
  dispatch: {
    label: "Dispatch",
    items: [
      "Applied learning · Small rooms · Practitioner-led",
      "By conversation · Never open enrolment",
      "Curated Swiss executive experiences",
    ],
  },
  hero: {
    eyebrow: "Curated Swiss executive learning experiences",
    line1: "Inside Swiss",
    line2: "business, finance,",
    line3: "and leadership.",
    subline:
      "Curated executive intensives for entrepreneurs, principals, and international professionals — practical access to Swiss business culture, finance, and the networks behind them.",
    subjects: "Executive intensives · Curated access · Private office",
    statusReviewing: "Currently curating experiences",
    locationLine: "Switzerland · Selected venues",
    scrollToProgrammes: "Scroll to programmes ↓",
  },
  posture: {
    eyebrow: "The platform posture",
    sub: "Premium Swiss executive experiences · Curated access · Private networks",
    pillars: [
      { label: "By conversation", line: "Never open enrolment." },
      { label: "Small rooms", line: "Kept small on purpose." },
      { label: "Hosted by practitioners", line: "Applied, not theoretical." },
    ],
  },
  programmesBlock: {
    eyebrow: "Formats of learning",
    headline: "Three ways to learn,",
    headlineGold: "in practice.",
  },
  learningInPractice: {
    eyebrow: "Learning in Practice",
    headline: "Finance beyond slides and textbooks.",
    body: "Learning becomes more relevant when financial and strategic concepts are connected with real operating environments, professional dialogue and peer exchange.",
    caption: "An example of applied learning in a premium Swiss business setting.",
  },
  programmeMeta: {
    access: {
      name: "Business Immersion Experience",
      tagline:
        "An applied immersion in Swiss business — connecting operating culture, professional dialogue and peer exchange.",
      formatLabel: "Immersive format",
      durationLabel: "",
      city: "",
    },
    banking: {
      name: "Finance & Wealth Intensive",
      tagline:
        "A focused format for practitioner-grade dialogue on finance, wealth planning and governance — under considered discretion.",
      formatLabel: "Focused intensive",
      durationLabel: "",
      city: "",
    },
    topic: {
      name: "Themed Learning Sessions",
      tagline:
        "Themed, curated sessions built around a specific question — hosted, small, and applied.",
      formatLabel: "Themed sessions",
      durationLabel: "",
      city: "",
    },
  },
  hostsStrip: {
    eyebrow: "Practitioner network",
    headline: "A curated network.",
    headlineGold: "Named once agreed.",
    cta: "About the network",
  },
  editorial: {
    eyebrow: "The rooms",
    headline: "Editorial. Restrained.",
    headlineGold: "Swiss.",
    side: "Curated environments. Small on purpose. Discretion by default.",
    tiles: [
      { label: "Considered venues", caption: "In residence" },
      { label: "Chatham-house", caption: "Closed rooms" },
      { label: "Alpine settings", caption: "Quiet rooms" },
      { label: "Curated salons", caption: "Small rooms" },
    ],
  },
  alumni: {
    eyebrow: "Alumni signal",
    intro: "",
    voicesEyebrow: "Voices",
    voicesHeadline: "What alumni say.",
    voicesHeadlineGold: "Attributed where consented.",
    pastEyebrow: "Past cohorts",
    pastHeadline: "A record of the rooms.",
  },
  insights: {
    eyebrow: "Insights",
    headline: "Practitioner notes.",
    headlineGold: "Swiss perspective.",
    practitionerNotes: "Practitioner notes.",
    featuredLabel: "Featured",
    dispatchEyebrow: "Dispatch",
    dispatchHeadline: "Two pieces a month.",
    dispatchHeadlineGold: "No promotion.",
    dispatchHelp: "Double opt-in. Unsubscribe at any time.",
    dispatchOk:
      "Thank you. Confirm your email via the double opt-in we’ve sent and the next dispatch will arrive in your inbox.",
    emailPlaceholder: "Your email",
  },
  privateBanner: {
    eyebrow: "For institutional partners",
    headline: "Commission a",
    headlineGold: "private cohort.",
    response: "Response within five business days.",
  },
  ctaBlock: {
    eyebrow: "Start a conversation",
    line1: "The rooms are small.",
    line2: "The conversation comes first.",
  },
  trust: {
    eyebrow: "The platform in numbers",
    stats: [
      { value: "30+", label: "Years across finance, banking, insurance & governance" },
      { value: "12", label: "Peer-reviewed publications" },
    ],
  },
  enrich: {
    programmesUnitedEyebrow: "What unites them",
    programmesUnitedHeadline: "Three programmes. One posture.",
    programmesUnitedItems: [
      {
        title: "Hosted, not lectured",
        body: "Every session has a named practitioner in the room. We do not bring stage speakers; we bring people who can answer the next question.",
      },
      {
        title: "Small, not scaled",
        body: "Rooms are sized so every voice is heard and every introduction is considered. The economics of the room are deliberate.",
      },
      {
        title: "Conversation, not enrolment",
        body: "Each room is curated. A short conversation establishes specificity of objective and calibre of contribution — not credentials and not budget.",
      },
    ],
    hostsCriteriaEyebrow: "What we look for in a host",
    hostsCriteriaHeadline: "Practitioner judgement, not platform celebrity.",
    hostsCriteriaItems: [
      {
        title: "Operating record",
        body: "Hosts have done the work. We invite practitioners with a verifiable operating record in the area they will host.",
      },
      {
        title: "Discreet posture",
        body: "Hosts who speak in stages are rarely the right hosts for a chatham-house room. We invite practitioners who reserve their best for closed conversation.",
      },
      {
        title: "Time for the cohort",
        body: "Hosts commit to the full programme — not a keynote and a flight home. The room is small precisely so the host can stay in it.",
      },
    ],
    insightsCategoriesEyebrow: "Editorial categories",
    insightsCategoriesHeadline: "Five places we publish.",
    insightsCategoriesItems: [
      {
        name: "Swiss Access",
        body: "Notes on operating culture, SME evaluation, and the bridges that work between Switzerland and the rest of the world.",
      },
      {
        name: "Private Banking",
        body: "Practitioner-grade dispatches on the Swiss private-banking landscape — discretion, regulation, and the questions held in the closed room.",
      },
      {
        name: "Markets",
        body: "Macro framings and Swiss capital-market commentary written by practitioners with a working stake in the question.",
      },
      {
        name: "Methodology",
        body: "Why we run cohorts the way we do — the small-cohort case, the chatham-house posture, the curation principle.",
      },
      {
        name: "Dispatches",
        body: "Short post-cohort notes from inside a room: what was said, what was not, and what the cohort will read again next month.",
      },
    ],
    aboutPrinciplesEyebrow: "Operating principles",
    aboutPrinciplesHeadline: "Five rules we hold to.",
    aboutPrinciplesItems: [
      {
        title: "Curation over volume",
        body: "We would rather run a smaller cohort with the right room than a larger cohort with the wrong one.",
      },
      {
        title: "Practitioner over performer",
        body: "Hosts are present in their personal capacity, not on a marketing roster. The platform is curatorial, not promotional.",
      },
      {
        title: "Discretion as default",
        body: "Cohort proceedings are not recorded; participant names are not published without consent; press coverage is the exception.",
      },
      {
        title: "Specificity over ceremony",
        body: "Application questions look for specificity. Programme architecture commits to phases, not slogans. Fees are listed, not negotiated.",
      },
      {
        title: "Premium scope, clearly stated",
        body: "Vision Goal sells curated access, considered introductions, and Swiss business know-how — not a course and not a consulting engagement. The regulated work, when it is needed, is delivered by the principals we introduce.",
      },
    ],
  },
  pages: {
    programmes: {
      eyebrow: "Formats of learning",
      titlePart1: "Three formats.",
      titleGold: "By conversation.",
      lede:
        "Each programme is a curated room: small, hosted by named practitioners, and run with a single posture — restraint over volume, evidence over claim, judgement over performance.",
    },
    hosts: {
      eyebrow: "Practitioner network",
      titlePart1: "A curated",
      titleGold: "professional network.",
      lede:
        "Vision Goal works with a curated professional network across Swiss finance, banking, entrepreneurship, business culture and executive education. Contributors are confirmed individually for each programme and are named publicly only once their participation has been agreed.",
      principleEyebrow: "Curation principle",
      principleBody:
        "We do not list speakers who are not confirmed. The founding curator is named here; per-programme contributors are added to the public roster only once their participation has been agreed. The list will be small on purpose.",
    },
    alumni: {
      eyebrow: "Community & network",
      titlePart1: "Building a",
      titleGold: "selective network.",
      lede:
        "Vision Goal is building a selective network around Swiss executive learning, finance, business culture and curated access. Alumni stories, participant reflections and past cohort highlights will be added once the first programmes have taken place.",
      postureEyebrow: "The network posture",
      postureHeadline: "Calibre over headcount.",
      postureBody:
        "The network is selective because the rooms will be. Members will be able to request named introductions; the curation team will mediate each one. Until the first cohort has met, this page describes the posture — not a record. The record will follow.",
    },
    insightsIndex: {
      eyebrow: "Insights",
      titlePart1: "Practitioner notes.",
      titleGold: "Swiss perspective.",
      lede:
        "Short, considered notes on Swiss access, private banking, markets, and the methodology behind the platform. Two pieces a month; never promotional.",
    },
    about: {
      eyebrow: "About the platform",
      titlePart1: "Curated Swiss",
      titleGold: "executive access.",
      lede:
        "Vision Goal creates curated Swiss executive learning experiences for entrepreneurs, executives, and international professionals who want practical access to Swiss finance, business culture, and premium networks.",
      statement:
        "Vision Goal designs curated executive learning experiences in a small number of formats — an immersive format, a focused intensive, and themed sessions — supplemented by a Private Office for individual principals who want curated introductions rather than a seat in a room.",
      statement2:
        "The platform is deliberately small. Curation is the product; the rooms, introductions, and experiences are the deliverables. You are not buying a course or a consulting engagement — you are buying access, insight, and Swiss business know-how that is difficult to assemble any other way.",
      standardsEyebrow: "Standards & ethics",
      standardsHeadline: "How we operate.",
      pressEyebrow: "Research & publications",
      pressHeadline: "Selected peer-reviewed work.",
      curatorEyebrow: "A note from the curator",
      curatorNote:
        "The platform exists for the rooms. Everything else — the website, the dispatch, the editorial — is in service of what happens when a small room sits down under chatham-house rules with a host who has nothing to sell them. If we keep the rooms honest, the rest takes care of itself.",
      curatorAttribution: "Vision Goal · Zurich",
    },
    contact: {
      eyebrow: "Contact",
      titlePart1: "A short note.",
      titleGold: "Considered reply.",
      lede:
        "For application matters please use the application form. For private cohort enquiries please use the institutional enquiry form. For everything else, this page.",
      officeEyebrow: "Office",
      emailLabel: "Email",
      responseLabel: "Response time",
      responseValue: "Five business days",
      linkedinLabel: "LinkedIn",
    },
    apply: {
      eyebrow: "Apply for next cohort",
      titlePart1: "A short application.",
      titleGold: "Considered review.",
      lede:
        "Every cohort is curated. The application is short on purpose; we read for specificity, not length. Expected response within ten business days.",
      steps: ["Identity", "Programme", "Why now", "Referees", "Confirmation"],
      stepLegend: { identity: "Identity", programme: "Programme", whyNow: "Why now", referees: "Referees" },
      received: "Application received",
      receivedHeadline: "Thank you. We will be in touch.",
      receivedBody:
        "The host curation team reviews every application. You should expect a considered response within ten business days. In the meantime you can read our latest dispatches or request a private consultation.",
    },
    consult: {
      eyebrow: "Private consultation",
      title: "Confirm fit before you apply.",
      lede:
        "A short, confidential call with a member of the host curation team. We use it to confirm programme fit and answer the questions an application form cannot. Response within five business days.",
      received: "Request received",
      receivedHeadline: "Thank you. We will be in touch.",
      receivedBody:
        "A member of the curation team will reach out within five business days to schedule a confidential call.",
    },
    cohort: {
      eyebrow: "For institutional partners",
      titlePart1: "Commission a",
      titleGold: "private cohort.",
      lede:
        "Closed cohorts and topic intensives, curated for institutional partners. We deliver in EN / DE / FR, in flexible formats from three days to a curated week. Response within five business days.",
      received: "Enquiry received",
      receivedHeadline: "Thank you. We will be in touch.",
      receivedBody:
        "A member of the curation team will reach out within five business days to discuss format, timing, and audience.",
    },
    legalSidebar: "Legal",
    programmeDetail: {
      outcomesEyebrow: "What you leave with",
      outcomesHeadline: "Three deliverables — not slogans.",
      architectureEyebrow: "Programme architecture",
      architectureHeadline: "How the programme runs.",
      cohortsEyebrow: "Next cohorts",
      cohortsHeadline: "Dates and seats.",
      hostsEyebrow: "Practitioner network for this programme",
      hostsHeadlinePart1: "Confirmed",
      hostsHeadlineGold: "per programme.",
      formatEyebrow: "Format",
      formatHeadline: "How it operates.",
      investmentEyebrow: "Investment",
      investmentSub: "Programme fee · ex. VAT",
      includesLabel: "Includes",
      excludesLabel: "Not included",
      postureEyebrow: "Application posture",
      postureHeadline: "Who the room is for.",
      forLabel: "For",
      notForLabel: "Not for",
      faqEyebrow: "Frequently asked",
      faqHeadline: "Questions, answered.",
      noCohortsNote:
        "Next cohort dates are confirmed in dispatch. Request a private consultation to be considered for the next round.",
    },
  },
  fields: {
    firstName: "First name",
    lastName: "Last name",
    email: "Email",
    role: "Role",
    organisation: "Organisation",
    institution: "Institution",
    country: "Country",
    objective: "What do you want from the room?",
    objectiveHint: "Specificity is read carefully. Two to four sentences.",
    contribution: "What do you bring to the room?",
    contributionHint: "The cohort is a contribution, not an audience. Two to four sentences.",
    refereeIntro:
      "Two referees who can speak to your professional posture. We will not contact them without your written consent.",
    refereeName: "Referee — name",
    refereeEmail: "Referee — email",
    consentApply:
      "I confirm the application is made in confidence and consent to platform processing of my information per the application terms.",
    consentConsult:
      "I consent to platform processing of my request per the privacy policy. The call is confidential by default.",
    consentCohort:
      "I confirm I am authorised to make this enquiry on behalf of my institution and consent to platform processing per the privacy policy.",
    consentContact:
      "I consent to platform processing of this message per the privacy policy.",
    consentNewsletter:
      "Yes, send me the Vision Goal dispatch. I can unsubscribe at any time.",
    audience: "Audience",
    audienceHint: "Who is the cohort being commissioned for?",
    audiencePlaceholder: "e.g. senior alumni; partner-track principals",
    languages: "Preferred languages",
    dates: "Preferred dates",
    description: "Brief description of the engagement",
    descriptionHint:
      "Audience, objective, and any constraints. Three to six sentences are enough.",
    subject: "Subject",
    message: "Message",
    messageHint: "Three to six sentences are enough.",
    timing: "Preferred timing",
    timingHint: "Indicate one or two preferred windows. We will confirm the slot.",
    timingPlaceholder: "e.g. Wednesday afternoons CET",
    discussTopic: "What you would like to discuss",
    discussHint: "Three to five sentences are enough. Specificity is welcomed.",
  },
  footer: {
    blurb:
      "A curated Swiss platform for applied executive learning — small rooms, practitioner-led, connected to real operating environments.",
    sectionProgrammes: "Programmes",
    sectionPlatform: "Platform",
    sectionApply: "Contact",
    linkApplication: "Application",
    linkPrivateConsultation: "Private consultation",
    linkPrivateCohort: "Private cohort enquiry",
    linkContact: "Contact",
    legalImprint: "Imprint",
    legalPrivacy: "Privacy",
    legalCookies: "Cookies",
    legalApplicationTerms: "Application terms",
    copyright: "© 2026 Vision Goal GmbH · Switzerland",
    contactEyebrow: "Direct line",
    contactPhoneLabel: "Phone",
    contactEmailLabel: "Email",
    contactResponseLabel: "Response window",
    contactResponseValue: "Within 48 hours for institutional and HNWI enquiries",
    contactPhone: "+41 78 728 09 33",
    contactEmail: "info@visiongoal.ch",
  },
};

const de: Dict = {
  meta: {
    title: "Vision Goal",
    description:
      "Vision Goal schafft kuratierte Schweizer Executive-Lernerfahrungen — angewandt, klein, sorgfältig.",
  },
  nav: {
    home: "Start",
    programmes: "Erfahrungen",
    hosts: "Praktiker-Netzwerk",
    alumni: "Netzwerk",
    insights: "Einblicke",
    about: "Über uns",
    apply: "Kontakt",
    privateOffice: "Private Office",
    skipToContent: "Zum Inhalt springen",
    primaryNav: "Hauptnavigation",
    whatWeDo: "Was wir tun",
    experiences: "Erfahrungen",
    contact: "Kontakt",
  },
  cta: {
    applyNext: "Eine Erfahrung besprechen",
    requestConsult: "Vision Goal entdecken →",
    applyForCohort: "Eine Erfahrung besprechen",
    submitEnquiry: "Nachricht senden",
    readProgramme: "Mehr lesen",
    allProgrammes: "Alle Erfahrungen",
    allHosts: "Zurück zum Praktiker-Netzwerk",
    allInsights: "Alle Einblicke",
    subscribe: "Abonnieren",
    send: "Senden →",
    continue: "Weiter →",
    previous: "← Zurück",
    submitApplication: "Nachricht senden",
    discussExperience: "Eine Erfahrung besprechen",
    discoverVisionGoal: "Vision Goal entdecken →",
    readExperience: "Mehr lesen",
    allExperiences: "Alle Erfahrungen",
    sending: "Wird gesendet…",
  },
  dispatch: {
    label: "Dispatch",
    items: [
      "Angewandtes Lernen · Kleine Räume · Von Praktikern geleitet",
      "Auf Gespräch · Keine offene Anmeldung",
      "Kuratierte Schweizer Executive-Erfahrungen",
    ],
  },
  hero: {
    eyebrow: "Kuratierte Schweizer Executive-Lernerfahrungen",
    line1: "Schweizer Wirtschaft,",
    line2: "Finanzen und",
    line3: "Führung — von innen.",
    subline:
      "Kuratierte Executive-Intensivprogramme für Unternehmer, Principals und internationale Führungspersönlichkeiten — praktischer Zugang zu Schweizer Geschäftskultur, Finanzwesen und den dahinterliegenden Netzwerken.",
    subjects: "Executive-Programme · Kuratierter Zugang · Private Office",
    statusReviewing: "Erfahrungen werden derzeit kuratiert",
    locationLine: "Schweiz · Ausgewählte Orte",
    scrollToProgrammes: "Zu den Programmen ↓",
  },
  posture: {
    eyebrow: "Die Haltung der Plattform",
    sub: "Premium Schweizer Executive-Erlebnisse · Kuratierter Zugang · Private Netzwerke",
    pillars: [
      { label: "Auf Gespräch", line: "Niemals offene Anmeldung." },
      { label: "Kleine Räume", line: "Bewusst klein gehalten." },
      { label: "Von Praktikern geleitet", line: "Angewandt, nicht theoretisch." },
    ],
  },
  programmesBlock: {
    eyebrow: "Formate des Lernens",
    headline: "Drei Wege zu lernen,",
    headlineGold: "in der Praxis.",
  },
  learningInPractice: {
    eyebrow: "Lernen in der Praxis",
    headline: "Finanzen jenseits von Folien und Lehrbüchern.",
    body: "Lernen wird relevanter, wenn finanzielle und strategische Konzepte mit realen operativen Umgebungen, professionellem Dialog und Peer-Austausch verbunden werden.",
    caption: "Ein Beispiel für angewandtes Lernen in einem premium Schweizer Geschäftsumfeld.",
  },
  programmeMeta: {
    access: {
      name: "Business Immersion Experience",
      tagline:
        "Eine angewandte Immersion in die Schweizer Wirtschaft — verbindet Operating-Kultur, professionellen Dialog und Peer-Austausch.",
      formatLabel: "Immersives Format",
      durationLabel: "",
      city: "",
    },
    banking: {
      name: "Finance & Wealth Intensive",
      tagline:
        "Ein fokussiertes Format für Dialog auf Praktiker-Niveau zu Finanzen, Vermögensplanung und Governance — unter sorgfältiger Diskretion.",
      formatLabel: "Fokussiertes Intensiv",
      durationLabel: "",
      city: "",
    },
    topic: {
      name: "Themed Learning Sessions",
      tagline:
        "Themenbezogene, kuratierte Sitzungen zu einer spezifischen Frage — geführt, klein, angewandt.",
      formatLabel: "Themenbezogene Sitzungen",
      durationLabel: "",
      city: "",
    },
  },
  hostsStrip: {
    eyebrow: "Praktiker-Netzwerk",
    headline: "Ein kuratiertes Netzwerk.",
    headlineGold: "Namentlich, wenn bestätigt.",
    cta: "Über das Netzwerk",
  },
  editorial: {
    eyebrow: "Die Räume",
    headline: "Redaktionell. Zurückhaltend.",
    headlineGold: "Schweizerisch.",
    side: "Kuratierte Umgebungen. Bewusst klein. Diskretion als Standard.",
    tiles: [
      { label: "Überlegte Orte", caption: "Vor Ort" },
      { label: "Chatham-House", caption: "Geschlossene Räume" },
      { label: "Alpiner Rückzug", caption: "Stille Räume" },
      { label: "Kuratierte Salons", caption: "Kleine Räume" },
    ],
  },
  alumni: {
    eyebrow: "Alumni-Signal",
    intro: "",
    voicesEyebrow: "Stimmen",
    voicesHeadline: "Was Alumni sagen.",
    voicesHeadlineGold: "Mit Einwilligung zugeschrieben.",
    pastEyebrow: "Vergangene Kohorten",
    pastHeadline: "Eine Aufzeichnung der Räume.",
  },
  insights: {
    eyebrow: "Einblicke",
    headline: "Notizen aus der Praxis.",
    headlineGold: "Schweizer Perspektive.",
    practitionerNotes: "Notizen aus der Praxis.",
    featuredLabel: "Hervorgehoben",
    dispatchEyebrow: "Dispatch",
    dispatchHeadline: "Zwei Beiträge pro Monat.",
    dispatchHeadlineGold: "Keine Werbung.",
    dispatchHelp: "Doppeltes Opt-In. Jederzeit abbestellbar.",
    dispatchOk:
      "Vielen Dank. Bitte bestätigen Sie Ihre E-Mail über das Doppelte Opt-In; der nächste Dispatch trifft dann in Ihrem Posteingang ein.",
    emailPlaceholder: "Ihre E-Mail",
  },
  privateBanner: {
    eyebrow: "Für institutionelle Partner",
    headline: "Eine private",
    headlineGold: "Kohorte beauftragen.",
    response: "Antwort in fünf Werktagen.",
  },
  ctaBlock: {
    eyebrow: "Ins Gespräch kommen",
    line1: "Die Räume sind klein.",
    line2: "Das Gespräch steht am Anfang.",
  },
  trust: {
    eyebrow: "Die Plattform in Zahlen",
    stats: [
      { value: "30+", label: "Jahre in Finanzwesen, Banking, Versicherung & Governance" },
      { value: "12", label: "Peer-reviewte Publikationen" },
    ],
  },
  enrich: {
    programmesUnitedEyebrow: "Was sie verbindet",
    programmesUnitedHeadline: "Drei Programme. Eine Haltung.",
    programmesUnitedItems: [
      {
        title: "Gastgeber, kein Vortrag",
        body: "In jeder Sitzung ist ein namentlich genannter Praktiker im Raum. Wir buchen keine Bühnenredner; wir bringen Menschen, die die nächste Frage beantworten können.",
      },
      {
        title: "Klein, nicht skaliert",
        body: "Räume sind so dimensioniert, dass jede Stimme gehört und jede Vorstellung überlegt wird. Die Ökonomie des Raums ist bewusst gewählt.",
      },
      {
        title: "Gespräch, keine Anmeldung",
        body: "Jeder Raum ist kuratiert. Ein kurzes Gespräch klärt Spezifität des Ziels und Kaliber des Beitrags — nicht Titel und nicht Budget.",
      },
    ],
    hostsCriteriaEyebrow: "Was wir an einem Gastgeber suchen",
    hostsCriteriaHeadline: "Praktikerurteil, nicht Plattformprominenz.",
    hostsCriteriaItems: [
      {
        title: "Operative Bilanz",
        body: "Gastgeber haben die Arbeit getan. Wir laden Praktiker mit einer nachvollziehbaren operativen Bilanz im jeweiligen Bereich ein.",
      },
      {
        title: "Diskrete Haltung",
        body: "Wer auf Bühnen spricht, ist selten der richtige Gastgeber für einen Chatham-House-Raum. Wir laden Praktiker ein, die ihr Bestes der geschlossenen Runde vorbehalten.",
      },
      {
        title: "Zeit für die Kohorte",
        body: "Gastgeber verpflichten sich auf das gesamte Programm — keine Keynote und Heimflug. Der Raum ist klein, damit der Gastgeber bleiben kann.",
      },
    ],
    insightsCategoriesEyebrow: "Redaktionelle Kategorien",
    insightsCategoriesHeadline: "Fünf Orte, an denen wir publizieren.",
    insightsCategoriesItems: [
      {
        name: "Swiss Access",
        body: "Notizen zu Geschäftskultur, KMU-Bewertung und den Brücken, die zwischen der Schweiz und der Welt funktionieren.",
      },
      {
        name: "Private Banking",
        body: "Praktiker-Dispatches zur Schweizer Privatbanking-Landschaft — Diskretion, Regulierung und die Fragen, die im geschlossenen Raum bleiben.",
      },
      {
        name: "Markets",
        body: "Makro-Einordnungen und Schweizer Kapitalmarkt-Kommentare von Praktikern mit operativem Anteil an der Frage.",
      },
      {
        name: "Methodology",
        body: "Warum wir Kohorten so führen, wie wir sie führen — die Kleinkohorten-Begründung, die Chatham-House-Haltung, das Kurationsprinzip.",
      },
      {
        name: "Dispatches",
        body: "Kurze Post-Kohorten-Notizen aus dem Raum: Was gesagt wurde, was nicht und was die Kohorte im nächsten Monat erneut lesen wird.",
      },
    ],
    aboutPrinciplesEyebrow: "Operative Grundsätze",
    aboutPrinciplesHeadline: "Fünf Regeln, an denen wir festhalten.",
    aboutPrinciplesItems: [
      {
        title: "Kuration vor Volumen",
        body: "Lieber eine kleinere Kohorte mit dem richtigen Raum als eine grössere mit dem falschen.",
      },
      {
        title: "Praktiker vor Performer",
        body: "Gastgeber sind in persönlicher Funktion anwesend, nicht auf einer Marketingliste. Die Plattform ist kuratorisch, nicht werblich.",
      },
      {
        title: "Diskretion als Standard",
        body: "Kohortensitzungen werden nicht aufgezeichnet; Teilnehmernamen werden nicht ohne Einwilligung veröffentlicht; Pressberichterstattung ist die Ausnahme.",
      },
      {
        title: "Spezifität vor Zeremonie",
        body: "Bewerbungsfragen suchen Spezifität. Programmaufbau verpflichtet sich auf Phasen, nicht auf Slogans. Gebühren werden ausgewiesen, nicht verhandelt.",
      },
      {
        title: "Premium-Umfang, klar definiert",
        body: "Vision Goal verkauft kuratierten Zugang, überlegte Vorstellungen und Schweizer Geschäftsexpertise — weder einen Kurs noch ein Beratungsmandat. Die regulierten Leistungen, sofern erforderlich, erbringen die von uns eingeführten Principals.",
      },
    ],
  },
  pages: {
    programmes: {
      eyebrow: "Formate des Lernens",
      titlePart1: "Drei Formate.",
      titleGold: "Auf Gespräch.",
      lede:
        "Jedes Programm ist ein kuratierter Raum: klein, von namentlich genannten Praktikern geführt und mit einer einzigen Haltung geleitet — Zurückhaltung statt Lautstärke, Belege statt Behauptungen, Urteilsvermögen statt Inszenierung.",
    },
    hosts: {
      eyebrow: "Praktiker-Netzwerk",
      titlePart1: "Ein kuratiertes",
      titleGold: "professionelles Netzwerk.",
      lede:
        "Vision Goal arbeitet mit einem kuratierten professionellen Netzwerk aus Schweizer Finanzwesen, Banking, Unternehmertum, Wirtschaftskultur und Executive Education. Die Beitragenden werden für jedes Programm einzeln bestätigt und erst dann öffentlich namentlich genannt, wenn ihre Teilnahme vereinbart wurde.",
      principleEyebrow: "Kurationsprinzip",
      principleBody:
        "Wir listen keine Sprecher, die nicht bestätigt sind. Der Gründungskurator ist hier namentlich genannt; programmbezogene Beitragende erscheinen erst öffentlich auf der Liste, wenn ihre Teilnahme vereinbart ist. Die Liste wird bewusst klein gehalten.",
    },
    alumni: {
      eyebrow: "Community & Netzwerk",
      titlePart1: "Ein selektives",
      titleGold: "Netzwerk im Aufbau.",
      lede:
        "Vision Goal baut ein selektives Netzwerk rund um Schweizer Executive Learning, Finanzwesen, Wirtschaftskultur und kuratierten Zugang auf. Alumni-Geschichten, Teilnehmerstimmen und Highlights vergangener Kohorten werden hier ergänzt, sobald die ersten Programme stattgefunden haben.",
      postureEyebrow: "Die Netzwerk-Haltung",
      postureHeadline: "Kaliber statt Kopfzahl.",
      postureBody:
        "Das Netzwerk wird selektiv sein, weil es die Räume sein werden. Mitglieder werden namentliche Vorstellungen anfragen können; das Kurationsteam wird jede einzelne vermitteln. Bis die erste Kohorte zusammengekommen ist, beschreibt diese Seite die Haltung — nicht eine Bilanz. Die Bilanz folgt.",
    },
    insightsIndex: {
      eyebrow: "Einblicke",
      titlePart1: "Notizen aus der Praxis.",
      titleGold: "Schweizer Perspektive.",
      lede:
        "Kurze, überlegte Notizen zu Schweizer Zugang, Privatbanking, Märkten und der Methodik hinter der Plattform. Zwei Beiträge pro Monat; niemals werblich.",
    },
    about: {
      eyebrow: "Über die Plattform",
      titlePart1: "Kuratierter Schweizer",
      titleGold: "Executive-Zugang.",
      lede:
        "Vision Goal schafft kuratierte Schweizer Executive-Lernerlebnisse für Unternehmer, Führungspersönlichkeiten und internationale Professionals, die praktischen Zugang zu Schweizer Finanzwesen, Geschäftskultur und Premium-Netzwerken suchen.",
      statement:
        "Vision Goal gestaltet kuratierte Executive-Lernerfahrungen in einigen wenigen Formaten — ein immersives Format, ein fokussiertes Intensiv und themenbezogene Sitzungen — ergänzt durch ein Private Office für einzelne Principals, die kuratierte Vorstellungen statt eines Platzes im Raum suchen.",
      statement2:
        "Die Plattform ist bewusst klein. Kuration ist das Produkt; die Räume, Vorstellungen und Erlebnisse sind die Lieferergebnisse. Sie kaufen weder einen Kurs noch ein Beratungsmandat — Sie kaufen Zugang, Einsicht und Schweizer Geschäftsexpertise, die anderswo schwer zu beschaffen sind.",
      standardsEyebrow: "Standards & Ethik",
      standardsHeadline: "Wie wir arbeiten.",
      pressEyebrow: "Forschung & Publikationen",
      pressHeadline: "Ausgewählte begutachtete Arbeiten.",
      curatorEyebrow: "Eine Notiz des Kurators",
      curatorNote:
        "Die Plattform existiert für die Räume. Alles andere — die Website, der Dispatch, das Editorial — steht im Dienste dessen, was geschieht, wenn ein kleiner Raum unter Chatham-House-Regeln mit einem Gastgeber zusammensitzt, der ihnen nichts zu verkaufen hat. Wenn wir die Räume ehrlich halten, regelt sich der Rest von selbst.",
      curatorAttribution: "Vision Goal · Zürich",
    },
    contact: {
      eyebrow: "Kontakt",
      titlePart1: "Eine kurze Nachricht.",
      titleGold: "Überlegte Antwort.",
      lede:
        "Für Bewerbungsangelegenheiten nutzen Sie bitte das Bewerbungsformular. Für Anfragen privater Kohorten nutzen Sie bitte das institutionelle Anfrageformular. Für alles andere diese Seite.",
      officeEyebrow: "Büro",
      emailLabel: "E-Mail",
      responseLabel: "Antwortzeit",
      responseValue: "Fünf Werktage",
      linkedinLabel: "LinkedIn",
    },
    apply: {
      eyebrow: "Für nächste Kohorte bewerben",
      titlePart1: "Eine kurze Bewerbung.",
      titleGold: "Sorgfältige Prüfung.",
      lede:
        "Jede Kohorte ist kuratiert. Die Bewerbung ist absichtlich kurz; wir lesen auf Spezifität, nicht auf Länge. Antwort innerhalb von zehn Werktagen.",
      steps: ["Identität", "Programm", "Warum jetzt", "Referenzen", "Bestätigung"],
      stepLegend: { identity: "Identität", programme: "Programm", whyNow: "Warum jetzt", referees: "Referenzen" },
      received: "Bewerbung eingegangen",
      receivedHeadline: "Vielen Dank. Wir melden uns.",
      receivedBody:
        "Das Kurationsteam prüft jede Bewerbung. Sie können mit einer überlegten Antwort innerhalb von zehn Werktagen rechnen. In der Zwischenzeit können Sie unsere neuesten Dispatches lesen oder eine private Beratung anfragen.",
    },
    consult: {
      eyebrow: "Private Beratung",
      title: "Passung vor der Bewerbung bestätigen.",
      lede:
        "Ein kurzes, vertrauliches Gespräch mit einem Mitglied des Kurationsteams. Wir nutzen es, um die Programmpassung zu bestätigen und die Fragen zu beantworten, die ein Bewerbungsformular nicht beantworten kann. Antwort in fünf Werktagen.",
      received: "Anfrage eingegangen",
      receivedHeadline: "Vielen Dank. Wir melden uns.",
      receivedBody:
        "Ein Mitglied des Kurationsteams meldet sich innerhalb von fünf Werktagen, um ein vertrauliches Gespräch zu vereinbaren.",
    },
    cohort: {
      eyebrow: "Für institutionelle Partner",
      titlePart1: "Eine private",
      titleGold: "Kohorte beauftragen.",
      lede:
        "Geschlossene Kohorten und Themenintensive, kuratiert für institutionelle Partner. Wir liefern in EN / DE / FR, in flexiblen Formaten von drei Tagen bis zur kuratierten Woche. Antwort in fünf Werktagen.",
      received: "Anfrage eingegangen",
      receivedHeadline: "Vielen Dank. Wir melden uns.",
      receivedBody:
        "Ein Mitglied des Kurationsteams meldet sich innerhalb von fünf Werktagen, um Format, Termine und Zielgruppe zu besprechen.",
    },
    legalSidebar: "Rechtliches",
    programmeDetail: {
      outcomesEyebrow: "Was Sie mitnehmen",
      outcomesHeadline: "Drei Lieferergebnisse — keine Slogans.",
      architectureEyebrow: "Programmaufbau",
      architectureHeadline: "Wie das Programm abläuft.",
      cohortsEyebrow: "Nächste Kohorten",
      cohortsHeadline: "Termine und Plätze.",
      hostsEyebrow: "Praktiker-Netzwerk dieses Programms",
      hostsHeadlinePart1: "Bestätigt",
      hostsHeadlineGold: "pro Programm.",
      formatEyebrow: "Format",
      formatHeadline: "Wie es abläuft.",
      investmentEyebrow: "Investition",
      investmentSub: "Programmgebühr · zzgl. MwSt.",
      includesLabel: "Enthalten",
      excludesLabel: "Nicht enthalten",
      postureEyebrow: "Bewerbungshaltung",
      postureHeadline: "Für wen der Raum gedacht ist.",
      forLabel: "Für",
      notForLabel: "Nicht für",
      faqEyebrow: "Häufig gefragt",
      faqHeadline: "Fragen, beantwortet.",
      noCohortsNote:
        "Die nächsten Kohortentermine werden im Dispatch bestätigt. Fragen Sie eine private Beratung an, um für die nächste Runde berücksichtigt zu werden.",
    },
  },
  fields: {
    firstName: "Vorname",
    lastName: "Nachname",
    email: "E-Mail",
    role: "Funktion",
    organisation: "Organisation",
    institution: "Institution",
    country: "Land",
    objective: "Was wollen Sie aus dem Raum mitnehmen?",
    objectiveHint: "Spezifität wird sorgfältig gelesen. Zwei bis vier Sätze.",
    contribution: "Was bringen Sie in den Raum ein?",
    contributionHint:
      "Die Kohorte ist ein Beitrag, kein Publikum. Zwei bis vier Sätze.",
    refereeIntro:
      "Zwei Referenzen, die zu Ihrer beruflichen Haltung sprechen können. Wir kontaktieren sie nicht ohne Ihre schriftliche Einwilligung.",
    refereeName: "Referenz — Name",
    refereeEmail: "Referenz — E-Mail",
    consentApply:
      "Ich bestätige, dass die Bewerbung vertraulich erfolgt, und stimme der plattformseitigen Verarbeitung meiner Angaben gemäss den Bewerbungsbedingungen zu.",
    consentConsult:
      "Ich stimme der plattformseitigen Verarbeitung meiner Anfrage gemäss der Datenschutzerklärung zu. Das Gespräch ist standardmässig vertraulich.",
    consentCohort:
      "Ich bestätige, dass ich befugt bin, diese Anfrage im Namen meiner Institution zu stellen, und stimme der plattformseitigen Verarbeitung gemäss der Datenschutzerklärung zu.",
    consentContact:
      "Ich stimme der plattformseitigen Verarbeitung dieser Nachricht gemäss der Datenschutzerklärung zu.",
    consentNewsletter:
      "Ja, senden Sie mir den Vision Goal Dispatch. Ich kann mich jederzeit abmelden.",
    audience: "Zielgruppe",
    audienceHint: "Für wen wird die Kohorte beauftragt?",
    audiencePlaceholder: "z.B. Senior-Alumni; Partner-Track-Principals",
    languages: "Bevorzugte Sprachen",
    dates: "Bevorzugte Termine",
    description: "Kurze Beschreibung des Auftrags",
    descriptionHint:
      "Zielgruppe, Ziel und etwaige Einschränkungen. Drei bis sechs Sätze genügen.",
    subject: "Betreff",
    message: "Nachricht",
    messageHint: "Drei bis sechs Sätze genügen.",
    timing: "Bevorzugter Termin",
    timingHint:
      "Geben Sie ein oder zwei bevorzugte Zeitfenster an. Wir bestätigen den Termin.",
    timingPlaceholder: "z.B. Mittwochnachmittage MEZ",
    discussTopic: "Was Sie besprechen möchten",
    discussHint: "Drei bis fünf Sätze genügen. Spezifität ist willkommen.",
  },
  footer: {
    blurb:
      "Eine kuratierte Schweizer Plattform für angewandtes Executive-Lernen — kleine Räume, von Praktikern geleitet, mit realen operativen Umgebungen verbunden.",
    sectionProgrammes: "Programme",
    sectionPlatform: "Plattform",
    sectionApply: "Kontakt",
    linkApplication: "Bewerbung",
    linkPrivateConsultation: "Private Beratung",
    linkPrivateCohort: "Anfrage private Kohorte",
    linkContact: "Kontakt",
    legalImprint: "Impressum",
    legalPrivacy: "Datenschutz",
    legalCookies: "Cookies",
    legalApplicationTerms: "Bewerbungsbedingungen",
    copyright: "© 2026 Vision Goal GmbH · Schweiz",
    contactEyebrow: "Direkter Draht",
    contactPhoneLabel: "Telefon",
    contactEmailLabel: "E-Mail",
    contactResponseLabel: "Antwortfenster",
    contactResponseValue: "Innerhalb von 48 Stunden für institutionelle und HNWI-Anfragen",
    contactPhone: "+41 78 728 09 33",
    contactEmail: "info@visiongoal.ch",
  },
};

const fr: Dict = {
  meta: {
    title: "Vision Goal",
    description:
      "Vision Goal crée des expériences d’apprentissage exécutif suisses curatées — appliquées, restreintes, réfléchies.",
  },
  nav: {
    home: "Accueil",
    programmes: "Expériences",
    hosts: "Réseau de praticiens",
    alumni: "Réseau",
    insights: "Analyses",
    about: "À propos",
    apply: "Contact",
    privateOffice: "Private Office",
    skipToContent: "Aller au contenu",
    primaryNav: "Principal",
    whatWeDo: "Ce que nous faisons",
    experiences: "Expériences",
    contact: "Contact",
  },
  cta: {
    applyNext: "Discuter d’une expérience",
    requestConsult: "Découvrir Vision Goal →",
    applyForCohort: "Discuter d’une expérience",
    submitEnquiry: "Envoyer un message",
    readProgramme: "En savoir plus",
    allProgrammes: "Toutes les expériences",
    allHosts: "Retour au réseau de praticiens",
    allInsights: "Toutes les analyses",
    subscribe: "S’abonner",
    send: "Envoyer →",
    continue: "Continuer →",
    previous: "← Précédent",
    submitApplication: "Envoyer un message",
    discussExperience: "Discuter d’une expérience",
    discoverVisionGoal: "Découvrir Vision Goal →",
    readExperience: "En savoir plus",
    allExperiences: "Toutes les expériences",
    sending: "Envoi…",
  },
  dispatch: {
    label: "Dispatch",
    items: [
      "Apprentissage appliqué · Petites salles · Animé par des praticiens",
      "Par la conversation · Jamais d’inscription ouverte",
      "Expériences exécutives suisses curatées",
    ],
  },
  hero: {
    eyebrow: "Expériences d’apprentissage exécutif suisses curatées",
    line1: "L’entreprise, la",
    line2: "finance, le leadership",
    line3: "suisses — vus de l’intérieur.",
    subline:
      "Programmes exécutifs curatés pour entrepreneurs, principals et professionnels internationaux — un accès pratique à la culture business suisse, à la finance et aux réseaux qui les sous-tendent.",
    subjects: "Programmes exécutifs · Accès curaté · Private office",
    statusReviewing: "Expériences en cours de curation",
    locationLine: "Suisse · Lieux sélectionnés",
    scrollToProgrammes: "Voir les programmes ↓",
  },
  posture: {
    eyebrow: "La posture de la plateforme",
    sub: "Expériences exécutives suisses premium · Accès curaté · Réseaux privés",
    pillars: [
      { label: "Par la conversation", line: "Jamais d’inscription ouverte." },
      { label: "Petites salles", line: "Restreintes par choix." },
      { label: "Animé par des praticiens", line: "Appliqué, pas théorique." },
    ],
  },
  programmesBlock: {
    eyebrow: "Formats d’apprentissage",
    headline: "Trois façons d’apprendre,",
    headlineGold: "en pratique.",
  },
  learningInPractice: {
    eyebrow: "Apprentissage en pratique",
    headline: "La finance au-delà des slides et des manuels.",
    body: "L’apprentissage devient plus pertinent lorsque les concepts financiers et stratégiques sont reliés à des environnements opérationnels réels, à un dialogue professionnel et à un échange entre pairs.",
    caption: "Un exemple d’apprentissage appliqué dans un cadre business suisse premium.",
  },
  programmeMeta: {
    access: {
      name: "Business Immersion Experience",
      tagline:
        "Une immersion appliquée dans le business suisse — reliant culture opérationnelle, dialogue professionnel et échange entre pairs.",
      formatLabel: "Format immersif",
      durationLabel: "",
      city: "",
    },
    banking: {
      name: "Finance & Wealth Intensive",
      tagline:
        "Un format concentré pour un dialogue de niveau praticien sur la finance, la planification patrimoniale et la gouvernance — sous discrétion réfléchie.",
      formatLabel: "Intensif ciblé",
      durationLabel: "",
      city: "",
    },
    topic: {
      name: "Themed Learning Sessions",
      tagline:
        "Des sessions thématiques et curatées construites autour d’une question précise — animées, restreintes, appliquées.",
      formatLabel: "Sessions thématiques",
      durationLabel: "",
      city: "",
    },
  },
  hostsStrip: {
    eyebrow: "Réseau de praticiens",
    headline: "Un réseau curaté.",
    headlineGold: "Nommé après accord.",
    cta: "À propos du réseau",
  },
  editorial: {
    eyebrow: "Les salles",
    headline: "Éditorial. Mesuré.",
    headlineGold: "Suisse.",
    side: "Environnements curatés. Restreints par choix. Discrétion par défaut.",
    tiles: [
      { label: "Lieux réfléchis", caption: "En résidence" },
      { label: "Chatham house", caption: "Salles fermées" },
      { label: "Retraite alpine", caption: "Salles silencieuses" },
      { label: "Salons curatés", caption: "Petites salles" },
    ],
  },
  alumni: {
    eyebrow: "Signal alumni",
    intro: "",
    voicesEyebrow: "Voix",
    voicesHeadline: "Ce que disent les alumni.",
    voicesHeadlineGold: "Attribué avec consentement.",
    pastEyebrow: "Cohortes passées",
    pastHeadline: "Une trace des salles.",
  },
  insights: {
    eyebrow: "Analyses",
    headline: "Notes de praticiens.",
    headlineGold: "Perspective suisse.",
    practitionerNotes: "Notes de praticiens.",
    featuredLabel: "À la une",
    dispatchEyebrow: "Dispatch",
    dispatchHeadline: "Deux pièces par mois.",
    dispatchHeadlineGold: "Aucune promotion.",
    dispatchHelp: "Double opt-in. Désinscription possible à tout moment.",
    dispatchOk:
      "Merci. Confirmez votre e-mail via le double opt-in que nous avons envoyé ; le prochain dispatch arrivera dans votre boîte.",
    emailPlaceholder: "Votre e-mail",
  },
  privateBanner: {
    eyebrow: "Pour les partenaires institutionnels",
    headline: "Commander une",
    headlineGold: "cohorte privée.",
    response: "Réponse sous cinq jours ouvrés.",
  },
  ctaBlock: {
    eyebrow: "Engager la conversation",
    line1: "Les salles sont petites.",
    line2: "La conversation vient d’abord.",
  },
  trust: {
    eyebrow: "La plateforme en chiffres",
    stats: [
      { value: "30+", label: "Années en finance, banque, assurance & gouvernance" },
      { value: "12", label: "Publications à comité de lecture" },
    ],
  },
  enrich: {
    programmesUnitedEyebrow: "Ce qui les unit",
    programmesUnitedHeadline: "Trois programmes. Une posture.",
    programmesUnitedItems: [
      {
        title: "Animé, non donné",
        body: "Chaque session a un praticien nommé dans la salle. Nous n’invitons pas d’orateurs de scène ; nous invitons des personnes capables de répondre à la question suivante.",
      },
      {
        title: "Petit, pas mis à l’échelle",
        body: "Les salles sont dimensionnées pour que chaque voix soit entendue et chaque introduction réfléchie. L’économie de la salle est délibérée.",
      },
      {
        title: "Conversation, pas inscription",
        body: "Chaque salle est curatée. Une courte conversation établit la spécificité de l’objectif et le calibre de la contribution — pas les titres, pas le budget.",
      },
    ],
    hostsCriteriaEyebrow: "Ce que nous cherchons chez un animateur",
    hostsCriteriaHeadline: "Le jugement du praticien, pas la célébrité de la plateforme.",
    hostsCriteriaItems: [
      {
        title: "Bilan opérationnel",
        body: "Les animateurs ont fait le travail. Nous invitons des praticiens dont le bilan opérationnel dans le domaine est vérifiable.",
      },
      {
        title: "Posture discrète",
        body: "Ceux qui parlent sur les scènes sont rarement les bons animateurs d’une salle chatham house. Nous invitons des praticiens qui réservent le meilleur d’eux-mêmes au cercle fermé.",
      },
      {
        title: "Du temps pour la cohorte",
        body: "Les animateurs s’engagent sur tout le programme — pas une keynote et un avion de retour. La salle est petite pour que l’animateur y reste.",
      },
    ],
    insightsCategoriesEyebrow: "Catégories éditoriales",
    insightsCategoriesHeadline: "Cinq lieux où nous publions.",
    insightsCategoriesItems: [
      {
        name: "Swiss Access",
        body: "Notes sur la culture opérationnelle, l’évaluation des PME et les ponts qui fonctionnent entre la Suisse et le reste du monde.",
      },
      {
        name: "Private Banking",
        body: "Dispatches de praticiens sur le paysage suisse de la banque privée — discrétion, régulation et questions tenues dans la salle fermée.",
      },
      {
        name: "Markets",
        body: "Cadrages macro et commentaires des marchés suisses signés par des praticiens engagés dans la question.",
      },
      {
        name: "Methodology",
        body: "Pourquoi nous opérons les cohortes ainsi — la justification de la petite cohorte, la posture chatham house, le principe de curation.",
      },
      {
        name: "Dispatches",
        body: "Notes courtes après cohorte : ce qui s’est dit, ce qui ne s’est pas dit, et ce que la cohorte relira le mois suivant.",
      },
    ],
    aboutPrinciplesEyebrow: "Principes opérationnels",
    aboutPrinciplesHeadline: "Cinq règles auxquelles nous tenons.",
    aboutPrinciplesItems: [
      {
        title: "Curation plutôt que volume",
        body: "Nous préférons une cohorte plus petite avec la bonne salle qu’une cohorte plus grande avec la mauvaise.",
      },
      {
        title: "Praticien plutôt que performeur",
        body: "Les animateurs sont présents à titre personnel, pas dans une liste marketing. La plateforme est curatoriale, pas promotionnelle.",
      },
      {
        title: "Discrétion par défaut",
        body: "Les sessions ne sont pas enregistrées ; les noms ne sont pas publiés sans consentement ; la presse est l’exception.",
      },
      {
        title: "Spécificité plutôt que cérémonie",
        body: "Les questions de candidature cherchent la spécificité. L’architecture s’engage sur des phases, pas des slogans. Les frais sont affichés, pas négociés.",
      },
      {
        title: "Périmètre premium, clairement énoncé",
        body: "Vision Goal vend de l’accès curaté, des introductions réfléchies et un savoir-faire business suisse — pas un cours, pas une mission de conseil. Les services régulés, lorsqu’ils sont nécessaires, sont assurés par les principals que nous présentons.",
      },
    ],
  },
  pages: {
    programmes: {
      eyebrow: "Formats d’apprentissage",
      titlePart1: "Trois formats.",
      titleGold: "Sur conversation.",
      lede:
        "Chaque programme est une salle curatée : petite, animée par des praticiens nommés, et menée avec une seule posture — la mesure plutôt que le volume, la preuve plutôt que la déclaration, le jugement plutôt que la performance.",
    },
    hosts: {
      eyebrow: "Réseau de praticiens",
      titlePart1: "Un réseau professionnel",
      titleGold: "curaté.",
      lede:
        "Vision Goal s’appuie sur un réseau professionnel curaté à travers la finance suisse, la banque, l’entrepreneuriat, la culture des affaires et l’executive education. Les contributeurs sont confirmés individuellement pour chaque programme et ne sont nommés publiquement qu’une fois leur participation actée.",
      principleEyebrow: "Principe de curation",
      principleBody:
        "Nous ne listons pas d’intervenants non confirmés. Le curateur fondateur est nommé ici ; les contributeurs propres à chaque programme n’apparaissent publiquement qu’une fois leur participation actée. La liste restera courte par choix.",
    },
    alumni: {
      eyebrow: "Communauté & réseau",
      titlePart1: "Un réseau sélectif",
      titleGold: "en construction.",
      lede:
        "Vision Goal construit un réseau sélectif autour de l’executive learning suisse, de la finance, de la culture des affaires et de l’accès curaté. Témoignages d’alumni, retours de participants et faits marquants des cohortes passées seront ajoutés ici une fois les premiers programmes tenus.",
      postureEyebrow: "La posture du réseau",
      postureHeadline: "Le calibre, pas l’effectif.",
      postureBody:
        "Le réseau sera sélectif parce que les salles le seront. Les membres pourront demander des introductions nommées ; l’équipe de curation médiatisera chacune. Tant que la première cohorte ne s’est pas tenue, cette page décrit la posture — pas un bilan. Le bilan suivra.",
    },
    insightsIndex: {
      eyebrow: "Analyses",
      titlePart1: "Notes de praticiens.",
      titleGold: "Perspective suisse.",
      lede:
        "Notes courtes et réfléchies sur l’accès suisse, la banque privée, les marchés et la méthodologie de la plateforme. Deux pièces par mois ; jamais promotionnelles.",
    },
    about: {
      eyebrow: "À propos de la plateforme",
      titlePart1: "Accès exécutif",
      titleGold: "suisse curaté.",
      lede:
        "Vision Goal crée des expériences exécutives suisses curatées pour entrepreneurs, dirigeants et professionnels internationaux qui recherchent un accès pratique à la finance, à la culture business et aux réseaux suisses premium.",
      statement:
        "Vision Goal conçoit des expériences d’apprentissage exécutif curatées en quelques formats — un format immersif, un intensif ciblé et des sessions thématiques — complétés par un Private Office pour les principals qui préfèrent des introductions curatées à une place dans une salle.",
      statement2:
        "La plateforme est volontairement petite. La curation est le produit ; les salles, les introductions et les expériences en sont les livrables. Vous n’achetez ni un cours ni une mission de conseil — vous achetez de l’accès, de l’insight et un savoir-faire business suisse difficile à assembler autrement.",
      standardsEyebrow: "Standards & éthique",
      standardsHeadline: "Comment nous opérons.",
      pressEyebrow: "Recherche & publications",
      pressHeadline: "Travaux évalués par les pairs — sélection.",
      curatorEyebrow: "Une note du curateur",
      curatorNote:
        "La plateforme existe pour les salles. Tout le reste — le site, le dispatch, l’éditorial — est au service de ce qui se passe quand une petite salle s’assoit sous chatham house avec un animateur qui n’a rien à leur vendre. Si nous tenons les salles avec honnêteté, le reste s’occupe de lui-même.",
      curatorAttribution: "Vision Goal · Zurich",
    },
    contact: {
      eyebrow: "Contact",
      titlePart1: "Un message court.",
      titleGold: "Réponse réfléchie.",
      lede:
        "Pour les questions de candidature, utilisez le formulaire de candidature. Pour les demandes de cohorte privée, utilisez le formulaire institutionnel. Pour le reste, cette page.",
      officeEyebrow: "Bureau",
      emailLabel: "E-mail",
      responseLabel: "Délai de réponse",
      responseValue: "Cinq jours ouvrés",
      linkedinLabel: "LinkedIn",
    },
    apply: {
      eyebrow: "Candidater à la prochaine cohorte",
      titlePart1: "Une candidature courte.",
      titleGold: "Examen attentif.",
      lede:
        "Chaque cohorte est curatée. La candidature est volontairement courte ; nous lisons la spécificité, pas la longueur. Réponse attendue sous dix jours ouvrés.",
      steps: ["Identité", "Programme", "Pourquoi maintenant", "Référents", "Confirmation"],
      stepLegend: { identity: "Identité", programme: "Programme", whyNow: "Pourquoi maintenant", referees: "Référents" },
      received: "Candidature reçue",
      receivedHeadline: "Merci. Nous vous contacterons.",
      receivedBody:
        "L’équipe de curation lit chaque candidature. Vous pouvez attendre une réponse réfléchie sous dix jours ouvrés. Entre-temps, lisez nos derniers dispatches ou demandez une consultation privée.",
    },
    consult: {
      eyebrow: "Consultation privée",
      title: "Confirmer l’adéquation avant de candidater.",
      lede:
        "Un échange court et confidentiel avec un membre de l’équipe de curation. Nous l’utilisons pour confirmer l’adéquation et répondre aux questions qu’un formulaire ne traite pas. Réponse sous cinq jours ouvrés.",
      received: "Demande reçue",
      receivedHeadline: "Merci. Nous vous contacterons.",
      receivedBody:
        "Un membre de l’équipe de curation vous contactera sous cinq jours ouvrés pour planifier un échange confidentiel.",
    },
    cohort: {
      eyebrow: "Pour les partenaires institutionnels",
      titlePart1: "Commander une",
      titleGold: "cohorte privée.",
      lede:
        "Cohortes fermées et intensifs thématiques curatés pour partenaires institutionnels. Nous livrons en EN / DE / FR, dans des formats flexibles allant de trois jours à une semaine curatée. Réponse sous cinq jours ouvrés.",
      received: "Demande reçue",
      receivedHeadline: "Merci. Nous vous contacterons.",
      receivedBody:
        "Un membre de l’équipe de curation vous contactera sous cinq jours ouvrés pour discuter format, calendrier et audience.",
    },
    legalSidebar: "Mentions légales",
    programmeDetail: {
      outcomesEyebrow: "Ce que vous emportez",
      outcomesHeadline: "Trois livrables — pas des slogans.",
      architectureEyebrow: "Architecture du programme",
      architectureHeadline: "Comment se déroule le programme.",
      cohortsEyebrow: "Prochaines cohortes",
      cohortsHeadline: "Dates et places.",
      hostsEyebrow: "Réseau de praticiens pour ce programme",
      hostsHeadlinePart1: "Confirmés",
      hostsHeadlineGold: "par programme.",
      formatEyebrow: "Format",
      formatHeadline: "Comment ça fonctionne.",
      investmentEyebrow: "Investissement",
      investmentSub: "Frais du programme · hors TVA",
      includesLabel: "Inclus",
      excludesLabel: "Non inclus",
      postureEyebrow: "Posture de candidature",
      postureHeadline: "Pour qui la salle est faite.",
      forLabel: "Pour",
      notForLabel: "Pas pour",
      faqEyebrow: "Foire aux questions",
      faqHeadline: "Questions, réponses.",
      noCohortsNote:
        "Les prochaines dates de cohorte sont confirmées dans le dispatch. Demandez une consultation privée pour être considéré pour la prochaine session.",
    },
  },
  fields: {
    firstName: "Prénom",
    lastName: "Nom",
    email: "E-mail",
    role: "Fonction",
    organisation: "Organisation",
    institution: "Institution",
    country: "Pays",
    objective: "Que voulez-vous tirer de la salle ?",
    objectiveHint: "La spécificité est lue avec attention. Deux à quatre phrases.",
    contribution: "Qu’apportez-vous à la salle ?",
    contributionHint:
      "La cohorte est une contribution, non un public. Deux à quatre phrases.",
    refereeIntro:
      "Deux référents capables de parler de votre posture professionnelle. Nous ne les contacterons pas sans votre accord écrit.",
    refereeName: "Référent — nom",
    refereeEmail: "Référent — e-mail",
    consentApply:
      "Je confirme que cette candidature est faite en confidentialité et consens au traitement de mes données par la plateforme selon les conditions de candidature.",
    consentConsult:
      "Je consens au traitement de ma demande par la plateforme selon la politique de confidentialité. L’échange est confidentiel par défaut.",
    consentCohort:
      "Je confirme être autorisé à formuler cette demande au nom de mon institution et consens au traitement par la plateforme selon la politique de confidentialité.",
    consentContact:
      "Je consens au traitement de ce message par la plateforme selon la politique de confidentialité.",
    consentNewsletter:
      "Oui, envoyez-moi le dispatch Vision Goal. Je peux me désabonner à tout moment.",
    audience: "Audience",
    audienceHint: "Pour qui la cohorte est-elle commandée ?",
    audiencePlaceholder: "ex. alumni seniors ; principals partner-track",
    languages: "Langues préférées",
    dates: "Dates préférées",
    description: "Brève description de la mission",
    descriptionHint:
      "Audience, objectif et contraintes éventuelles. Trois à six phrases suffisent.",
    subject: "Objet",
    message: "Message",
    messageHint: "Trois à six phrases suffisent.",
    timing: "Disponibilité",
    timingHint:
      "Indiquez une ou deux fenêtres préférées. Nous confirmerons le créneau.",
    timingPlaceholder: "ex. mercredis après-midi CET",
    discussTopic: "Ce dont vous souhaitez parler",
    discussHint: "Trois à cinq phrases suffisent. La spécificité est bienvenue.",
  },
  footer: {
    blurb:
      "Une plateforme suisse curatée pour un apprentissage exécutif appliqué — petites salles, animées par des praticiens, reliées à des environnements opérationnels réels.",
    sectionProgrammes: "Programmes",
    sectionPlatform: "Plateforme",
    sectionApply: "Contact",
    linkApplication: "Candidature",
    linkPrivateConsultation: "Consultation privée",
    linkPrivateCohort: "Demande de cohorte privée",
    linkContact: "Contact",
    legalImprint: "Mentions légales",
    legalPrivacy: "Confidentialité",
    legalCookies: "Cookies",
    legalApplicationTerms: "Conditions de candidature",
    copyright: "© 2026 Vision Goal GmbH · Suisse",
    contactEyebrow: "Ligne directe",
    contactPhoneLabel: "Téléphone",
    contactEmailLabel: "E-mail",
    contactResponseLabel: "Délai de réponse",
    contactResponseValue: "Sous 48 heures pour les demandes institutionnelles et HNWI",
    contactPhone: "+41 78 728 09 33",
    contactEmail: "info@visiongoal.ch",
  },
};

const es: Dict = {
  meta: {
    title: "Vision Goal",
    description:
      "Vision Goal crea experiencias suizas curadas de aprendizaje ejecutivo — aplicadas, reducidas, consideradas.",
  },
  nav: {
    home: "Inicio",
    programmes: "Experiencias",
    hosts: "Red de profesionales",
    alumni: "Red",
    insights: "Análisis",
    about: "Acerca",
    apply: "Contacto",
    privateOffice: "Private Office",
    skipToContent: "Ir al contenido",
    primaryNav: "Principal",
    whatWeDo: "Qué hacemos",
    experiences: "Experiencias",
    contact: "Contacto",
  },
  cta: {
    applyNext: "Conversar sobre una experiencia",
    requestConsult: "Descubrir Vision Goal →",
    applyForCohort: "Conversar sobre una experiencia",
    submitEnquiry: "Enviar mensaje",
    readProgramme: "Leer más",
    allProgrammes: "Todas las experiencias",
    allHosts: "Volver a la red de profesionales",
    allInsights: "Todos los análisis",
    subscribe: "Suscribirse",
    send: "Enviar →",
    continue: "Continuar →",
    previous: "← Anterior",
    submitApplication: "Enviar mensaje",
    discussExperience: "Conversar sobre una experiencia",
    discoverVisionGoal: "Descubrir Vision Goal →",
    readExperience: "Leer más",
    allExperiences: "Todas las experiencias",
    sending: "Enviando…",
  },
  dispatch: {
    label: "Dispatch",
    items: [
      "Aprendizaje aplicado · Salas reducidas · Conducido por practicantes",
      "Por conversación · Nunca matrícula abierta",
      "Experiencias ejecutivas suizas curadas",
    ],
  },
  hero: {
    eyebrow: "Experiencias suizas curadas de aprendizaje ejecutivo",
    line1: "Negocios, finanzas",
    line2: "y liderazgo suizos —",
    line3: "desde dentro.",
    subline:
      "Programas ejecutivos curados para emprendedores, principals y profesionales internacionales — acceso práctico a la cultura empresarial suiza, a las finanzas y a las redes detrás de ellas.",
    subjects: "Programas ejecutivos · Acceso curado · Private office",
    statusReviewing: "Experiencias en curso de curaduría",
    locationLine: "Suiza · Sedes seleccionadas",
    scrollToProgrammes: "Ver los programas ↓",
  },
  posture: {
    eyebrow: "La postura de la plataforma",
    sub: "Experiencias ejecutivas suizas premium · Acceso curado · Redes privadas",
    pillars: [
      { label: "Por conversación", line: "Nunca matrícula abierta." },
      { label: "Salas reducidas", line: "Reducidas por elección." },
      { label: "Conducido por practicantes", line: "Aplicado, no teórico." },
    ],
  },
  programmesBlock: {
    eyebrow: "Formatos de aprendizaje",
    headline: "Tres formas de aprender,",
    headlineGold: "en la práctica.",
  },
  learningInPractice: {
    eyebrow: "Aprendizaje en la práctica",
    headline: "Finanzas más allá de las diapositivas y los manuales.",
    body: "El aprendizaje se vuelve más relevante cuando los conceptos financieros y estratégicos se conectan con entornos operativos reales, diálogo profesional e intercambio entre pares.",
    caption: "Un ejemplo de aprendizaje aplicado en un entorno de negocio suizo premium.",
  },
  programmeMeta: {
    access: {
      name: "Business Immersion Experience",
      tagline:
        "Una inmersión aplicada en el negocio suizo — conectando cultura operativa, diálogo profesional e intercambio entre pares.",
      formatLabel: "Formato inmersivo",
      durationLabel: "",
      city: "",
    },
    banking: {
      name: "Finance & Wealth Intensive",
      tagline:
        "Un formato enfocado para diálogo de nivel practicante sobre finanzas, planificación patrimonial y gobernanza — bajo discreción considerada.",
      formatLabel: "Intensivo enfocado",
      durationLabel: "",
      city: "",
    },
    topic: {
      name: "Themed Learning Sessions",
      tagline:
        "Sesiones temáticas y curadas construidas alrededor de una pregunta específica — conducidas, reducidas, aplicadas.",
      formatLabel: "Sesiones temáticas",
      durationLabel: "",
      city: "",
    },
  },
  hostsStrip: {
    eyebrow: "Red de profesionales",
    headline: "Una red curada.",
    headlineGold: "Nombrada al confirmarse.",
    cta: "Sobre la red",
  },
  editorial: {
    eyebrow: "Las salas",
    headline: "Editorial. Mesurado.",
    headlineGold: "Suizo.",
    side: "Entornos curados. Reducidos por elección. Discreción por defecto.",
    tiles: [
      { label: "Sedes consideradas", caption: "En residencia" },
      { label: "Chatham house", caption: "Salas cerradas" },
      { label: "Retiro alpino", caption: "Salas silenciosas" },
      { label: "Salones curados", caption: "Salas reducidas" },
    ],
  },
  alumni: {
    eyebrow: "Señal alumni",
    intro: "",
    voicesEyebrow: "Voces",
    voicesHeadline: "Lo que dicen los alumni.",
    voicesHeadlineGold: "Atribuido con consentimiento.",
    pastEyebrow: "Cohortes pasadas",
    pastHeadline: "Un registro de las salas.",
  },
  insights: {
    eyebrow: "Análisis",
    headline: "Notas de practicantes.",
    headlineGold: "Perspectiva suiza.",
    practitionerNotes: "Notas de practicantes.",
    featuredLabel: "Destacado",
    dispatchEyebrow: "Dispatch",
    dispatchHeadline: "Dos piezas al mes.",
    dispatchHeadlineGold: "Sin promoción.",
    dispatchHelp: "Doble opt-in. Cancele cuando quiera.",
    dispatchOk:
      "Gracias. Confirme su correo a través del doble opt-in que enviamos; el próximo dispatch llegará a su bandeja de entrada.",
    emailPlaceholder: "Su correo",
  },
  privateBanner: {
    eyebrow: "Para socios institucionales",
    headline: "Encargar una",
    headlineGold: "cohorte privada.",
    response: "Respuesta en cinco días hábiles.",
  },
  ctaBlock: {
    eyebrow: "Iniciar una conversación",
    line1: "Las salas son pequeñas.",
    line2: "La conversación va primero.",
  },
  trust: {
    eyebrow: "La plataforma en cifras",
    stats: [
      { value: "30+", label: "Años en finanzas, banca, seguros y gobernanza" },
      { value: "12", label: "Publicaciones revisadas por pares" },
    ],
  },
  enrich: {
    programmesUnitedEyebrow: "Lo que los une",
    programmesUnitedHeadline: "Tres programas. Una postura.",
    programmesUnitedItems: [
      {
        title: "Conducido, no expuesto",
        body: "Cada sesión tiene un practicante nombrado en la sala. No traemos oradores de escenario; traemos personas capaces de responder la siguiente pregunta.",
      },
      {
        title: "Reducido, no escalado",
        body: "Las salas están dimensionadas para que cada voz se escuche y cada presentación se considere. La economía de la sala es deliberada.",
      },
      {
        title: "Conversación, no matrícula",
        body: "Cada sala es curada. Una breve conversación establece la especificidad del objetivo y el calibre de la contribución — no títulos y no presupuesto.",
      },
    ],
    hostsCriteriaEyebrow: "Lo que buscamos en un anfitrión",
    hostsCriteriaHeadline: "Juicio del practicante, no celebridad de plataforma.",
    hostsCriteriaItems: [
      {
        title: "Trayectoria operativa",
        body: "Los anfitriones han hecho el trabajo. Invitamos a practicantes con una trayectoria operativa verificable en el área que conducirán.",
      },
      {
        title: "Postura discreta",
        body: "Quienes hablan en escenarios rara vez son los anfitriones adecuados para una sala chatham house. Invitamos a practicantes que reservan lo mejor para la conversación cerrada.",
      },
      {
        title: "Tiempo para la cohorte",
        body: "Los anfitriones se comprometen con todo el programa — no una keynote y vuelo de regreso. La sala es pequeña precisamente para que el anfitrión permanezca.",
      },
    ],
    insightsCategoriesEyebrow: "Categorías editoriales",
    insightsCategoriesHeadline: "Cinco lugares donde publicamos.",
    insightsCategoriesItems: [
      {
        name: "Swiss Access",
        body: "Notas sobre cultura operativa, evaluación de PYMES y los puentes que funcionan entre Suiza y el resto del mundo.",
      },
      {
        name: "Private Banking",
        body: "Dispatches de practicantes sobre el panorama suizo de banca privada — discreción, regulación y las preguntas que permanecen en la sala cerrada.",
      },
      {
        name: "Markets",
        body: "Encuadres macro y comentario del mercado suizo de capitales escritos por practicantes con interés operativo en la pregunta.",
      },
      {
        name: "Methodology",
        body: "Por qué operamos las cohortes así — el caso de la cohorte pequeña, la postura chatham house, el principio de curaduría.",
      },
      {
        name: "Dispatches",
        body: "Notas cortas tras la cohorte: lo que se dijo, lo que no, y lo que la cohorte volverá a leer el mes siguiente.",
      },
    ],
    aboutPrinciplesEyebrow: "Principios operativos",
    aboutPrinciplesHeadline: "Cinco reglas que sostenemos.",
    aboutPrinciplesItems: [
      {
        title: "Curaduría sobre volumen",
        body: "Preferimos una cohorte más pequeña con la sala correcta que una más grande con la incorrecta.",
      },
      {
        title: "Practicante sobre performer",
        body: "Los anfitriones están presentes a título personal, no en una lista de marketing. La plataforma es curatorial, no promocional.",
      },
      {
        title: "Discreción por defecto",
        body: "Las sesiones no se graban; los nombres no se publican sin consentimiento; la cobertura de prensa es la excepción.",
      },
      {
        title: "Especificidad sobre ceremonia",
        body: "Las preguntas de candidatura buscan especificidad. La arquitectura se compromete con fases, no eslóganes. Las tarifas se publican, no se negocian.",
      },
      {
        title: "Alcance premium, claramente enunciado",
        body: "Vision Goal vende acceso curado, introducciones consideradas y know-how empresarial suizo — no un curso, no un encargo de consultoría. El trabajo regulado, cuando es necesario, lo entregan los principals que presentamos.",
      },
    ],
  },
  pages: {
    programmes: {
      eyebrow: "Formatos de aprendizaje",
      titlePart1: "Tres formatos.",
      titleGold: "Por conversación.",
      lede:
        "Cada programa es una sala curada: pequeña, conducida por practicantes nombrados y dirigida con una sola postura — la mesura sobre el volumen, la prueba sobre la afirmación, el juicio sobre la actuación.",
    },
    hosts: {
      eyebrow: "Red de profesionales",
      titlePart1: "Una red profesional",
      titleGold: "curada.",
      lede:
        "Vision Goal trabaja con una red profesional curada en finanzas suizas, banca, emprendimiento, cultura de negocios y educación ejecutiva. Los contribuyentes se confirman individualmente para cada programa y sólo se nombran públicamente una vez acordada su participación.",
      principleEyebrow: "Principio de curaduría",
      principleBody:
        "No enumeramos ponentes que no estén confirmados. El curador fundador aparece aquí nombrado; los contribuyentes de cada programa sólo se incorporan al registro público una vez acordada su participación. La lista será corta a propósito.",
    },
    alumni: {
      eyebrow: "Comunidad y red",
      titlePart1: "Una red selectiva",
      titleGold: "en construcción.",
      lede:
        "Vision Goal está construyendo una red selectiva en torno al aprendizaje ejecutivo suizo, las finanzas, la cultura empresarial y el acceso curado. Historias de alumni, reflexiones de participantes y momentos destacados de cohortes pasadas se añadirán aquí una vez que los primeros programas se hayan celebrado.",
      postureEyebrow: "La postura de la red",
      postureHeadline: "Calibre, no número.",
      postureBody:
        "La red será selectiva porque las salas lo serán. Los miembros podrán solicitar presentaciones nominadas; el equipo de curaduría mediará cada una. Hasta que se celebre la primera cohorte, esta página describe la postura — no un registro. El registro vendrá después.",
    },
    insightsIndex: {
      eyebrow: "Análisis",
      titlePart1: "Notas de practicantes.",
      titleGold: "Perspectiva suiza.",
      lede:
        "Notas cortas y consideradas sobre acceso suizo, banca privada, mercados y la metodología detrás de la plataforma. Dos piezas al mes; nunca promocionales.",
    },
    about: {
      eyebrow: "Acerca de la plataforma",
      titlePart1: "Acceso ejecutivo",
      titleGold: "suizo curado.",
      lede:
        "Vision Goal crea experiencias ejecutivas suizas curadas para emprendedores, directivos y profesionales internacionales que buscan acceso práctico a las finanzas, la cultura empresarial y las redes premium suizas.",
      statement:
        "Vision Goal diseña experiencias curadas de aprendizaje ejecutivo en unos pocos formatos — un formato inmersivo, un intensivo enfocado y sesiones temáticas — complementados por un Private Office para principals que prefieren introducciones curadas en lugar de una plaza en una sala.",
      statement2:
        "La plataforma es deliberadamente pequeña. La curaduría es el producto; las salas, introducciones y experiencias son los entregables. No compra un curso ni un encargo de consultoría — compra acceso, perspectiva y know-how empresarial suizo difícil de armar de otro modo.",
      standardsEyebrow: "Estándares y ética",
      standardsHeadline: "Cómo operamos.",
      pressEyebrow: "Investigación y publicaciones",
      pressHeadline: "Trabajos revisados por pares — selección.",
      curatorEyebrow: "Una nota del curador",
      curatorNote:
        "La plataforma existe para las salas. Todo lo demás — el sitio, el dispatch, el editorial — está al servicio de lo que ocurre cuando una sala reducida se sienta bajo reglas chatham house con un anfitrión que no tiene nada que venderles. Si mantenemos las salas honestas, el resto se cuida solo.",
      curatorAttribution: "Vision Goal · Zúrich",
    },
    contact: {
      eyebrow: "Contacto",
      titlePart1: "Una nota corta.",
      titleGold: "Respuesta considerada.",
      lede:
        "Para asuntos de candidatura, use el formulario de candidatura. Para consultas de cohorte privada, use el formulario institucional. Para todo lo demás, esta página.",
      officeEyebrow: "Oficina",
      emailLabel: "Correo",
      responseLabel: "Tiempo de respuesta",
      responseValue: "Cinco días hábiles",
      linkedinLabel: "LinkedIn",
    },
    apply: {
      eyebrow: "Postular a la próxima cohorte",
      titlePart1: "Una candidatura corta.",
      titleGold: "Revisión considerada.",
      lede:
        "Cada cohorte es curada. La candidatura es deliberadamente corta; leemos por especificidad, no por extensión. Respuesta esperada en diez días hábiles.",
      steps: ["Identidad", "Programa", "Por qué ahora", "Referentes", "Confirmación"],
      stepLegend: { identity: "Identidad", programme: "Programa", whyNow: "Por qué ahora", referees: "Referentes" },
      received: "Candidatura recibida",
      receivedHeadline: "Gracias. Nos pondremos en contacto.",
      receivedBody:
        "El equipo de curaduría revisa cada candidatura. Puede esperar una respuesta considerada en diez días hábiles. Mientras tanto, puede leer nuestros últimos dispatches o solicitar una consulta privada.",
    },
    consult: {
      eyebrow: "Consulta privada",
      title: "Confirmar el encaje antes de postular.",
      lede:
        "Una llamada corta y confidencial con un miembro del equipo de curaduría. La usamos para confirmar el encaje del programa y responder lo que un formulario no responde. Respuesta en cinco días hábiles.",
      received: "Solicitud recibida",
      receivedHeadline: "Gracias. Nos pondremos en contacto.",
      receivedBody:
        "Un miembro del equipo de curaduría se pondrá en contacto en cinco días hábiles para coordinar una llamada confidencial.",
    },
    cohort: {
      eyebrow: "Para socios institucionales",
      titlePart1: "Encargar una",
      titleGold: "cohorte privada.",
      lede:
        "Cohortes cerradas e intensivos temáticos curados para socios institucionales. Entregamos en EN / DE / FR, en formatos flexibles desde tres días hasta una semana curada. Respuesta en cinco días hábiles.",
      received: "Consulta recibida",
      receivedHeadline: "Gracias. Nos pondremos en contacto.",
      receivedBody:
        "Un miembro del equipo de curaduría se pondrá en contacto en cinco días hábiles para discutir formato, fechas y audiencia.",
    },
    legalSidebar: "Legal",
    programmeDetail: {
      outcomesEyebrow: "Lo que se lleva",
      outcomesHeadline: "Tres entregables — no eslóganes.",
      architectureEyebrow: "Arquitectura del programa",
      architectureHeadline: "Cómo se desarrolla el programa.",
      cohortsEyebrow: "Próximas cohortes",
      cohortsHeadline: "Fechas y plazas.",
      hostsEyebrow: "Red de profesionales de este programa",
      hostsHeadlinePart1: "Confirmados",
      hostsHeadlineGold: "por programa.",
      formatEyebrow: "Formato",
      formatHeadline: "Cómo opera.",
      investmentEyebrow: "Inversión",
      investmentSub: "Tarifa del programa · sin IVA",
      includesLabel: "Incluye",
      excludesLabel: "No incluye",
      postureEyebrow: "Postura de candidatura",
      postureHeadline: "Para quién es la sala.",
      forLabel: "Para",
      notForLabel: "No para",
      faqEyebrow: "Preguntas frecuentes",
      faqHeadline: "Preguntas, respondidas.",
      noCohortsNote:
        "Las próximas fechas de cohorte se confirman en el dispatch. Solicite una consulta privada para ser considerado en la próxima ronda.",
    },
  },
  fields: {
    firstName: "Nombre",
    lastName: "Apellido",
    email: "Correo",
    role: "Cargo",
    organisation: "Organización",
    institution: "Institución",
    country: "País",
    objective: "¿Qué quiere de la sala?",
    objectiveHint: "La especificidad se lee con cuidado. Dos a cuatro frases.",
    contribution: "¿Qué aporta a la sala?",
    contributionHint:
      "La cohorte es una contribución, no un público. Dos a cuatro frases.",
    refereeIntro:
      "Dos referentes que puedan hablar de su postura profesional. No los contactaremos sin su consentimiento por escrito.",
    refereeName: "Referente — nombre",
    refereeEmail: "Referente — correo",
    consentApply:
      "Confirmo que la candidatura se realiza de manera confidencial y consiento el tratamiento de mis datos por la plataforma según los términos de candidatura.",
    consentConsult:
      "Consiento el tratamiento de mi solicitud por la plataforma según la política de privacidad. La llamada es confidencial por defecto.",
    consentCohort:
      "Confirmo estar autorizado a realizar esta consulta en nombre de mi institución y consiento el tratamiento por la plataforma según la política de privacidad.",
    consentContact:
      "Consiento el tratamiento de este mensaje por la plataforma según la política de privacidad.",
    consentNewsletter:
      "Sí, envíenme el dispatch de Vision Goal. Puedo darme de baja en cualquier momento.",
    audience: "Audiencia",
    audienceHint: "¿Para quién se encarga la cohorte?",
    audiencePlaceholder: "p.ej. alumni senior; principals partner-track",
    languages: "Idiomas preferidos",
    dates: "Fechas preferidas",
    description: "Breve descripción del encargo",
    descriptionHint:
      "Audiencia, objetivo y restricciones. Tres a seis frases bastan.",
    subject: "Asunto",
    message: "Mensaje",
    messageHint: "Tres a seis frases bastan.",
    timing: "Disponibilidad",
    timingHint:
      "Indique una o dos ventanas preferidas. Confirmaremos el horario.",
    timingPlaceholder: "p.ej. miércoles por la tarde CET",
    discussTopic: "Lo que desea tratar",
    discussHint: "Tres a cinco frases bastan. La especificidad es bienvenida.",
  },
  footer: {
    blurb:
      "Una plataforma suiza curada para el aprendizaje ejecutivo aplicado — salas reducidas, conducidas por practicantes, conectadas con entornos operativos reales.",
    sectionProgrammes: "Programas",
    sectionPlatform: "Plataforma",
    sectionApply: "Contacto",
    linkApplication: "Candidatura",
    linkPrivateConsultation: "Consulta privada",
    linkPrivateCohort: "Consulta cohorte privada",
    linkContact: "Contacto",
    legalImprint: "Aviso legal",
    legalPrivacy: "Privacidad",
    legalCookies: "Cookies",
    legalApplicationTerms: "Términos de candidatura",
    copyright: "© 2026 Vision Goal GmbH · Suiza",
    contactEyebrow: "Línea directa",
    contactPhoneLabel: "Teléfono",
    contactEmailLabel: "Correo",
    contactResponseLabel: "Ventana de respuesta",
    contactResponseValue: "En 48 horas para consultas institucionales y HNWI",
    contactPhone: "+41 78 728 09 33",
    contactEmail: "info@visiongoal.ch",
  },
};

const zh: Dict = {
  meta: {
    title: "Vision Goal",
    description:
      "Vision Goal 创造精心策展的瑞士高管学习体验 —— 应用性强、规模精简、审慎周到。",
  },
  nav: {
    home: "首页",
    programmes: "体验",
    hosts: "实践者网络",
    alumni: "网络",
    insights: "洞察",
    about: "关于",
    apply: "联系",
    privateOffice: "私人办公室",
    skipToContent: "跳至正文",
    primaryNav: "主导航",
    whatWeDo: "我们做什么",
    experiences: "体验",
    contact: "联系",
  },
  cta: {
    applyNext: "洽谈一次体验",
    requestConsult: "了解 Vision Goal →",
    applyForCohort: "洽谈一次体验",
    submitEnquiry: "发送信息",
    readProgramme: "了解更多",
    allProgrammes: "全部体验",
    allHosts: "返回实践者网络",
    allInsights: "全部洞察",
    subscribe: "订阅",
    send: "发送 →",
    continue: "继续 →",
    previous: "← 上一步",
    submitApplication: "发送信息",
    discussExperience: "洽谈一次体验",
    discoverVisionGoal: "了解 Vision Goal →",
    readExperience: "了解更多",
    allExperiences: "全部体验",
    sending: "发送中…",
  },
  dispatch: {
    label: "速递",
    items: [
      "应用式学习 · 小型场景 · 资深从业者主持",
      "凭对话 · 从不公开招生",
      "精心策展的瑞士高管体验",
    ],
  },
  hero: {
    eyebrow: "精选瑞士高管学习体验",
    line1: "瑞士商业、金融",
    line2: "与领导力,",
    line3: "由内而外。",
    subline:
      "为企业家、合伙人与跨国资深人士打造的精选高管集训 —— 让您亲临瑞士商业文化、金融体系, 以及背后的网络。",
    subjects: "高管集训 · 精选通道 · 私人办公室",
    statusReviewing: "体验正在策展中",
    locationLine: "瑞士 · 精选场地",
    scrollToProgrammes: "查看项目 ↓",
  },
  posture: {
    eyebrow: "平台姿态",
    sub: "瑞士高端高管体验 · 精选通道 · 私享网络",
    pillars: [
      { label: "凭对话", line: "从不公开招生。" },
      { label: "小型场景", line: "刻意保持精简。" },
      { label: "资深从业者主持", line: "应用性, 而非理论。" },
    ],
  },
  programmesBlock: {
    eyebrow: "学习形式",
    headline: "三种学习方式,",
    headlineGold: "以实践为核心。",
  },
  learningInPractice: {
    eyebrow: "学以致用",
    headline: "超越幻灯片与教科书的金融学习。",
    body: "当金融与战略概念与真实的运营环境、专业对话与同侪交流相连接时, 学习才更具意义。",
    caption: "在瑞士高端商业场景中的应用式学习一例。",
  },
  programmeMeta: {
    access: {
      name: "Business Immersion Experience",
      tagline:
        "身处瑞士商业的应用式浸入 —— 连接运营文化、专业对话与同侪交流。",
      formatLabel: "浸入式形式",
      durationLabel: "",
      city: "",
    },
    banking: {
      name: "Finance & Wealth Intensive",
      tagline:
        "针对金融、财富规划与治理的从业者级对话的聚焦形式 —— 在审慎的保密之下。",
      formatLabel: "聚焦集训",
      durationLabel: "",
      city: "",
    },
    topic: {
      name: "Themed Learning Sessions",
      tagline:
        "围绕特定议题精心策展的主题会话 —— 主持式、精简、应用性强。",
      formatLabel: "主题会话",
      durationLabel: "",
      city: "",
    },
  },
  hostsStrip: {
    eyebrow: "实践者网络",
    headline: "精心策展的网络。",
    headlineGold: "经同意后公开署名。",
    cta: "关于网络",
  },
  editorial: {
    eyebrow: "场所",
    headline: "克制。编辑式。",
    headlineGold: "瑞士风格。",
    side: "精选场地。刻意保持精简。审慎为常态。",
    tiles: [
      { label: "精选场地", caption: "驻地" },
      { label: "查塔姆守则", caption: "闭门场景" },
      { label: "阿尔卑斯静修", caption: "静室" },
      { label: "精选沙龙", caption: "小型场景" },
    ],
  },
  alumni: {
    eyebrow: "校友之声",
    intro: "",
    voicesEyebrow: "声音",
    voicesHeadline: "校友所言。",
    voicesHeadlineGold: "经同意署名。",
    pastEyebrow: "往期群体",
    pastHeadline: "房间的记录。",
  },
  insights: {
    eyebrow: "洞察",
    headline: "从业者札记。",
    headlineGold: "瑞士视角。",
    practitionerNotes: "从业者札记。",
    featuredLabel: "精选",
    dispatchEyebrow: "速递",
    dispatchHeadline: "每月两篇。",
    dispatchHeadlineGold: "无促销。",
    dispatchHelp: "双重确认订阅。可随时退订。",
    dispatchOk:
      "感谢。请通过我们发送的双重确认邮件完成订阅, 下一期速递将寄送至您的邮箱。",
    emailPlaceholder: "您的邮箱",
  },
  privateBanner: {
    eyebrow: "面向机构合作方",
    headline: "委托一期",
    headlineGold: "私享群体。",
    response: "五个工作日内回复。",
  },
  ctaBlock: {
    eyebrow: "开启对话",
    line1: "场地保持精简。",
    line2: "对话是第一步。",
  },
  trust: {
    eyebrow: "平台数据",
    stats: [
      { value: "30+", label: "横跨金融、银行、保险与治理的从业年资" },
      { value: "12", label: "同行评审论文" },
    ],
  },
  enrich: {
    programmesUnitedEyebrow: "三者之共通",
    programmesUnitedHeadline: "三个项目。一种姿态。",
    programmesUnitedItems: [
      {
        title: "主持, 而非授课",
        body: "每节课都有具名从业者在场。我们不安排登台演讲, 我们带来能回答下一个问题的人。",
      },
      {
        title: "精简, 而非规模化",
        body: "房间规模刻意为之, 让每个声音被听见, 每次引荐被斟酌。房间的经济学是有意的。",
      },
      {
        title: "对话, 而非报名",
        body: "每个房间都经策划。一次简短的对话即可厘清目标的具体性与贡献的分量 —— 而非头衔, 也非预算。",
      },
    ],
    hostsCriteriaEyebrow: "我们对主持人的要求",
    hostsCriteriaHeadline: "看重从业者的判断, 而非平台的名气。",
    hostsCriteriaItems: [
      {
        title: "实操履历",
        body: "主持人都做过这件事。我们邀请在该领域有可核实实操履历的从业者。",
      },
      {
        title: "审慎姿态",
        body: "习惯登台者鲜有适合查塔姆守则之室。我们邀请那些将最佳话语留给闭门交流的从业者。",
      },
      {
        title: "全程陪伴",
        body: "主持人承诺投入整段项目 —— 而非主旨演讲后即刻离开。房间之小, 正是为了让主持人留下。",
      },
    ],
    insightsCategoriesEyebrow: "编辑版块",
    insightsCategoriesHeadline: "我们发表的五个版面。",
    insightsCategoriesItems: [
      {
        name: "Swiss Access",
        body: "关于运营文化、瑞士中小企业评估, 以及瑞士与世界之间真正可行的桥梁的札记。",
      },
      {
        name: "Private Banking",
        body: "面向瑞士私人银行格局的从业者札记 —— 审慎、监管, 以及只在闭门时才会讨论的问题。",
      },
      {
        name: "Markets",
        body: "由具有实务利益的从业者撰写的宏观框架与瑞士资本市场评注。",
      },
      {
        name: "Methodology",
        body: "我们为何如此运行群体 —— 小群体的理由、查塔姆守则的姿态、以及策划原则。",
      },
      {
        name: "Dispatches",
        body: "群体结束后的短札记: 哪些说了, 哪些未说, 以及群体下个月会再读哪一段。",
      },
    ],
    aboutPrinciplesEyebrow: "运营原则",
    aboutPrinciplesHeadline: "我们恪守的五条规矩。",
    aboutPrinciplesItems: [
      {
        title: "策划胜于体量",
        body: "我们宁愿组一支正确的小群体, 也不愿组一支错位的大群体。",
      },
      {
        title: "从业者胜于演员",
        body: "主持人以个人身份出席, 而非营销名册的一员。平台为策划, 而非推广。",
      },
      {
        title: "审慎为常态",
        body: "群体不录音; 未经同意不公布参与者姓名; 媒体报道为例外。",
      },
      {
        title: "具体胜于仪式",
        body: "申请问题考察具体性。项目架构以阶段承诺, 而非以口号。费用明示, 不议价。",
      },
      {
        title: "高端范围, 清楚界定",
        body: "Vision Goal 售卖的, 是精选通道、审慎引荐与瑞士商业素养 —— 既非课程, 也非咨询合约。在确有需要时, 受监管的工作由我们引荐的 Principal 承担。",
      },
    ],
  },
  pages: {
    programmes: {
      eyebrow: "学习形式",
      titlePart1: "三种形式。",
      titleGold: "凭对话。",
      lede:
        "每个项目都是一间精选的房间: 小规模, 由具名从业者主持, 以单一姿态运行 —— 克制胜过喧哗、证据胜过断言、判断胜过表演。",
    },
    hosts: {
      eyebrow: "实践者网络",
      titlePart1: "精心策展的",
      titleGold: "专业网络。",
      lede:
        "Vision Goal 与瑞士金融、银行、创业、商业文化及高管教育领域的精选专业网络合作。每项项目的贡献者会单独确认；只有在其参与正式同意之后，名字才会公开列出。",
      principleEyebrow: "策划原则",
      principleBody:
        "未经确认的讲者，我们不予列出。创始策展人在此署名；各项目的贡献者只有在其参与确认之后，才会出现在公开名册。名单将刻意保持精简。",
    },
    alumni: {
      eyebrow: "社群与网络",
      titlePart1: "正在构建的",
      titleGold: "精选网络。",
      lede:
        "Vision Goal 正围绕瑞士高管学习、金融、商业文化与精选准入，构建一个具有选择性的网络。校友故事、参与者反思与既往期次的亮点，将在首批项目完成后加入此页。",
      postureEyebrow: "网络姿态",
      postureHeadline: "重质量, 不重人数。",
      postureBody:
        "网络之所以具有选择性，正因房间本身亦是。成员将可申请向其他成员的具名引荐, 由策划团队居中协调。在首期群体尚未召开之前, 本页只描述姿态, 而非记录。记录, 将随之而来。",
    },
    insightsIndex: {
      eyebrow: "洞察",
      titlePart1: "从业者札记。",
      titleGold: "瑞士视角。",
      lede:
        "对瑞士通道、私人银行、市场以及平台方法论的简短而审慎之札记。每月两篇; 从不促销。",
    },
    about: {
      eyebrow: "关于平台",
      titlePart1: "瑞士高管",
      titleGold: "精选通道。",
      lede:
        "Vision Goal 为企业家、高管与跨国资深人士打造精选的瑞士高管学习体验, 让您切实接触瑞士金融、商业文化与高端网络。",
      statement:
        "Vision Goal 以少数几种形式设计精选的高管学习体验 —— 浸入式形式、聚焦集训与主题会话 —— 并辅以为希望获得精选引荐、而非席位的个人 Principal 设立的私人办公室。",
      statement2:
        "平台刻意精简。策划即产品; 房间、引荐与体验则是交付。您所得到的不是一门课程, 也不是一份咨询合约 —— 而是难以从他处汇集的瑞士商业通道、洞察与专业素养。",
      standardsEyebrow: "标准与伦理",
      standardsHeadline: "我们如何运营。",
      pressEyebrow: "研究与发表",
      pressHeadline: "经同行评审的精选论文。",
      curatorEyebrow: "策展人手记",
      curatorNote:
        "平台为房间而存在。其他一切 —— 网站、速递、编辑内容 —— 都服务于一件事: 当一个小型场景在查塔姆守则下与一位无所推销的主持人相聚时, 在房间里发生的事。只要房间保持诚实, 其余的便会自行妥善。",
      curatorAttribution: "Vision Goal · 苏黎世",
    },
    contact: {
      eyebrow: "联系",
      titlePart1: "简短致函。",
      titleGold: "审慎回复。",
      lede:
        "申请相关请使用申请表。私享群体相关请使用机构咨询表。其他事宜请使用本页面。",
      officeEyebrow: "办公室",
      emailLabel: "邮箱",
      responseLabel: "回复时间",
      responseValue: "五个工作日",
      linkedinLabel: "LinkedIn",
    },
    apply: {
      eyebrow: "申请下一期群体",
      titlePart1: "简短的申请。",
      titleGold: "审慎的审阅。",
      lede:
        "每一期群体均经策划。申请刻意简短; 我们看重具体性, 而非篇幅。预期十个工作日内回复。",
      steps: ["身份", "项目", "为何此时", "推荐人", "确认"],
      stepLegend: { identity: "身份", programme: "项目", whyNow: "为何此时", referees: "推荐人" },
      received: "申请已收到",
      receivedHeadline: "感谢。我们会与您联系。",
      receivedBody:
        "策划团队会审阅每一份申请。您可期望在十个工作日内得到审慎的回复。其间, 您可阅读最新速递或申请一次私下咨询。",
    },
    consult: {
      eyebrow: "私下咨询",
      title: "申请前先确认契合。",
      lede:
        "与策划团队成员的一次简短保密通话。我们以此确认项目契合度, 解答申请表难以承载的问题。五个工作日内回复。",
      received: "请求已收到",
      receivedHeadline: "感谢。我们会与您联系。",
      receivedBody:
        "策划团队成员将在五个工作日内与您联系, 以安排一次保密通话。",
    },
    cohort: {
      eyebrow: "面向机构合作方",
      titlePart1: "委托一期",
      titleGold: "私享群体。",
      lede:
        "为机构合作方策划的封闭式群体与议题集训。我们以英语 / 德语 / 法语交付, 形式灵活, 自三日至精选周不等。五个工作日内回复。",
      received: "咨询已收到",
      receivedHeadline: "感谢。我们会与您联系。",
      receivedBody:
        "策划团队成员将在五个工作日内与您联系, 沟通形式、时间与对象。",
    },
    legalSidebar: "法律",
    programmeDetail: {
      outcomesEyebrow: "您将带走的",
      outcomesHeadline: "三项交付 —— 而非口号。",
      architectureEyebrow: "项目架构",
      architectureHeadline: "项目如何展开。",
      cohortsEyebrow: "下一期群体",
      cohortsHeadline: "时间与名额。",
      hostsEyebrow: "本项目实践者网络",
      hostsHeadlinePart1: "按项目",
      hostsHeadlineGold: "逐一确认。",
      formatEyebrow: "形式",
      formatHeadline: "如何运作。",
      investmentEyebrow: "投入",
      investmentSub: "项目费用 · 不含增值税",
      includesLabel: "包含",
      excludesLabel: "不含",
      postureEyebrow: "申请姿态",
      postureHeadline: "房间为谁而设。",
      forLabel: "适用于",
      notForLabel: "不适用于",
      faqEyebrow: "常见问题",
      faqHeadline: "问题与回答。",
      noCohortsNote:
        "下一期群体的具体日期将在速递中确认。请申请一次私下咨询, 以便纳入下一轮考量。",
    },
  },
  fields: {
    firstName: "名",
    lastName: "姓",
    email: "邮箱",
    role: "职位",
    organisation: "机构",
    institution: "机构",
    country: "国家 / 地区",
    objective: "您希望从房间中获得什么?",
    objectiveHint: "具体性会被仔细阅读。两到四句即可。",
    contribution: "您能为房间带来什么?",
    contributionHint: "群体是贡献, 而非观众。两到四句即可。",
    refereeIntro: "两位能描述您专业姿态的推荐人。未经书面同意, 我们不会与其联系。",
    refereeName: "推荐人 — 姓名",
    refereeEmail: "推荐人 — 邮箱",
    consentApply:
      "本人确认申请系基于保密前提, 并依据申请条款同意平台处理本人信息。",
    consentConsult:
      "本人依据隐私政策同意平台处理本请求。该次通话默认保密。",
    consentCohort:
      "本人确认有权代表所属机构提出此咨询, 并依据隐私政策同意平台处理。",
    consentContact:
      "本人依据隐私政策同意平台处理此消息。",
    consentNewsletter:
      "是的, 请向我发送 Vision Goal 速递。我可以随时取消订阅。",
    audience: "对象",
    audienceHint: "本群体为何对象而设?",
    audiencePlaceholder: "例如: 资深校友;合伙人通道",
    languages: "意向语言",
    dates: "意向日期",
    description: "项目简述",
    descriptionHint: "对象、目标与限制。三到六句即可。",
    subject: "主题",
    message: "信息",
    messageHint: "三到六句即可。",
    timing: "意向时段",
    timingHint: "请提供一两个意向时段, 我们将确认。",
    timingPlaceholder: "例如: 周三下午 CET",
    discussTopic: "您希望讨论的内容",
    discussHint: "三到五句即可。具体性受欢迎。",
  },
  footer: {
    blurb:
      "精心策展的瑞士平台, 专注于应用式高管学习 —— 小型场景、由资深从业者主持、与真实运营环境相连。",
    sectionProgrammes: "项目",
    sectionPlatform: "平台",
    sectionApply: "联系",
    linkApplication: "申请",
    linkPrivateConsultation: "私下咨询",
    linkPrivateCohort: "私享群体咨询",
    linkContact: "联系",
    legalImprint: "公司信息",
    legalPrivacy: "隐私",
    legalCookies: "Cookie",
    legalApplicationTerms: "申请条款",
    copyright: "© 2026 Vision Goal GmbH · 瑞士",
    contactEyebrow: "直线联络",
    contactPhoneLabel: "电话",
    contactEmailLabel: "邮箱",
    contactResponseLabel: "回复时间",
    contactResponseValue: "机构与高净值咨询: 48 小时内回复",
    contactPhone: "+41 78 728 09 33",
    contactEmail: "info@visiongoal.ch",
  },
};

export const dictionaries: Record<Locale, Dict> = { en, de, fr, es, zh };
