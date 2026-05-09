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
  programmeMeta: Record<
    "access" | "banking" | "topic",
    { name: string; tagline: string; durationLabel: string; city: string }
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
  cohorts: {
    eyebrow: string;
    headline: string;
    headlineGold: string;
    statusOpen: string;
    statusWaitlist: string;
    statusClosed: string;
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
    alumniNumbersEyebrow: string;
    alumniNumbersHeadline: string;
    alumniStats: { value: string; label: string }[];
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
    programmeOfInterest: string;
    selectProgramme: string;
    notSure: string;
    preferredCohort: string;
    preferredCohortHint: string;
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
    audience: string;
    audienceHint: string;
    audiencePlaceholder: string;
    format: string;
    selectFormat: string;
    formatThree: string;
    formatChatham: string;
    formatWeek: string;
    formatModular: string;
    formatUndecided: string;
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
    cohortPlaceholder: string;
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
    title: "Vision Goal — Curated Swiss access, by application",
    description:
      "A premium Swiss platform for cohort-based intensives and curated business access — three flagship programmes, hosted by practitioners, by application.",
  },
  nav: {
    home: "Home",
    programmes: "Programmes",
    hosts: "Hosts",
    alumni: "Alumni",
    insights: "Insights",
    about: "About",
    apply: "Apply",
    privateOffice: "Private Office",
    skipToContent: "Skip to content",
    primaryNav: "Primary",
  },
  cta: {
    applyNext: "Apply for next cohort",
    requestConsult: "Request a private consultation →",
    applyForCohort: "Apply for next cohort",
    submitEnquiry: "Submit enquiry",
    readProgramme: "Read the programme",
    allProgrammes: "All programmes",
    allHosts: "All hosts and faculty",
    allInsights: "All insights",
    subscribe: "Subscribe",
    send: "Send →",
    continue: "Continue →",
    previous: "← Previous",
    submitApplication: "Submit application",
  },
  dispatch: {
    label: "Dispatch",
    items: [
      "Swiss Business Access Immersion · Zurich · 23—27 June 2026 · 4 seats remaining",
      "Private Swiss Banking & Wealth Intensive · Geneva · 8—11 September 2026 · Waitlist",
      "Swiss Finance Week · Zurich · 10—14 November 2026 · 8 seats",
      "Private cohort enquiries open · Five business-day response",
      "Cohort-based · Twelve in the room · Hosted by practitioners",
      "By application · Never open enrolment",
    ],
  },
  hero: {
    eyebrow: "Curated Swiss intensives & access · By application",
    line1: "Three flagship",
    line2: "programmes.",
    line3: "By application.",
    subline:
      "A Swiss platform for cohort-based intensives and curated business access — small rooms, named hosts, by application.",
    subjects: "Swiss business access · Private banking · Finance topic week",
    statusReviewing: "Reviewing applications · Q3 2026",
    locationLine: "Zurich · Geneva · Selected Swiss venues",
    scrollToProgrammes: "Scroll to programmes ↓",
  },
  posture: {
    eyebrow: "The platform posture",
    sub: "Curated learning, access, and considered introductions",
    pillars: [
      { label: "By application", line: "Never open enrolment." },
      { label: "Twelve in the room", line: "Cohort-based on purpose." },
      { label: "Hosted by practitioners", line: "Named on the page." },
    ],
  },
  programmesBlock: {
    eyebrow: "The flagship intensives",
    headline: "Three curated programmes.",
    headlineGold: "By application.",
  },
  programmeMeta: {
    access: {
      name: "Swiss Business Access Immersion",
      tagline:
        "A curated immersion — direct access to Swiss businesses, networks, and operating culture.",
      durationLabel: "5 days · in residence",
      city: "Zurich",
    },
    banking: {
      name: "Private Swiss Banking & Wealth Intensive",
      tagline: "A chatham-house intensive — Swiss private banking, hosted by practitioners.",
      durationLabel: "4 days · chatham-house",
      city: "Geneva",
    },
    topic: {
      name: "Swiss Finance Week",
      tagline:
        "A themed week of curated rooms — one Swiss finance topic, hosted by practitioners.",
      durationLabel: "5 days · curated",
      city: "Zurich",
    },
  },
  hostsStrip: {
    eyebrow: "Hosts & faculty",
    headline: "Named on the page.",
    headlineGold: "In the room.",
    cta: "All hosts and faculty",
  },
  editorial: {
    eyebrow: "The rooms",
    headline: "Editorial. Restrained.",
    headlineGold: "Swiss.",
    side: "Curated venues. Twelve in the room. Discretion by default.",
    tiles: [
      { label: "Zurich", caption: "In residence" },
      { label: "Geneva", caption: "Chatham-house" },
      { label: "Alpine retreat", caption: "Quiet rooms" },
      { label: "Curated salons", caption: "Twelve in the room" },
    ],
  },
  cohorts: {
    eyebrow: "Next cohorts",
    headline: "Three rooms",
    headlineGold: "opening soon.",
    statusOpen: "Open",
    statusWaitlist: "Waitlist",
    statusClosed: "Closed",
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
    eyebrow: "Ready to apply",
    line1: "The room is small.",
    line2: "It closes when it’s full.",
  },
  trust: {
    eyebrow: "The platform in numbers",
    stats: [
      { value: "33", label: "Years across Swiss private banking" },
      { value: "3", label: "Flagship programmes" },
      { value: "12", label: "Maximum in the room" },
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
        title: "Twelve, not twenty",
        body: "Cohorts are sized so every voice is heard and every introduction is considered. The economics of the room are deliberate.",
      },
      {
        title: "Application, not enrolment",
        body: "Each room is curated. We read for specificity of objective and calibre of contribution — not credentials and not budget.",
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
    alumniNumbersEyebrow: "The network in numbers",
    alumniNumbersHeadline: "A small register, kept warm.",
    alumniStats: [
      { value: "84", label: "Alumni across cohorts since 2022" },
      { value: "12", label: "Maximum participants per cohort" },
      { value: "27", label: "Countries represented in the network" },
      { value: "4", label: "Annual reconvening days per year" },
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
        title: "Honesty about scope",
        body: "We are not advisory, not coaching, not regulated. We convene rooms; we do not deliver outcomes. We say so on every page.",
      },
    ],
  },
  pages: {
    programmes: {
      eyebrow: "The flagship intensives",
      titlePart1: "Three programmes.",
      titleGold: "By application.",
      lede:
        "Each programme is a curated room: small, hosted by named practitioners, and run with a single posture — restraint over volume, evidence over claim, judgement over performance.",
    },
    hosts: {
      eyebrow: "Hosts & faculty",
      titlePart1: "Named on the page.",
      titleGold: "In the room.",
      lede:
        "Hosts and faculty appear here as practitioners. Each is named on the cohort page and present in their personal capacity. The platform does not list speakers it has not booked.",
      principleEyebrow: "Curation principle",
      principleBody:
        "We do not list every speaker who has appeared in the platform’s history. The founding curator is named here; cohort hosts are confirmed per programme cycle. Profiles flagged as Sample are placeholder roster entries until the next cohort is announced.",
    },
    alumni: {
      eyebrow: "Alumni & network",
      titlePart1: "Who has been",
      titleGold: "in the room.",
      lede:
        "Alumni are named where consented and attributed where appropriate. The network is small on purpose; its value is in calibre, not headcount.",
      postureEyebrow: "The alumni posture",
      postureHeadline: "Selectivity is the value.",
      postureBody:
        "The alumni network is selective because the rooms are. Members can request named introductions to other alumni; the curation team mediates each one. Quarterly host dispatches and an annual reconvening keep the network warm without making it loud.",
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
      titlePart1: "A curated Swiss platform.",
      titleGold: "Not advisory.",
      lede:
        "Vision Goal exists to convene small, considered rooms on Swiss access, private banking, and topic-specific finance questions. The platform is curatorial; the rooms are by application; the proceedings are quiet.",
      statement:
        "We do three things. We run a Swiss Business Access Immersion in Zurich. We run a Private Swiss Banking & Wealth Intensive in Geneva. And we host one Swiss Finance Week per year on a current question. Twelve in the room. Hosted by named practitioners. By application.",
      statement2:
        "The platform is deliberately small. Curation is the product; the rooms are the deliverable. We do not run open enrolment, we do not deliver coaching, and we do not promise outcomes. We promise considered rooms with named hosts, and we run them as they are described on this page.",
      standardsEyebrow: "Standards & ethics",
      standardsHeadline: "How we operate.",
      pressEyebrow: "Press & recognition",
      pressHeadline: "Selected mentions.",
      curatorEyebrow: "A note from the curator",
      curatorNote:
        "The platform exists for the rooms. Everything else — the website, the dispatch, the press column — is in service of what happens when twelve people sit down for four days under chatham-house rules with a host who has nothing to sell them. If we keep the rooms honest, the rest takes care of itself.",
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
      hostsEyebrow: "Hosts & faculty for this programme",
      hostsHeadlinePart1: "Named on the page.",
      hostsHeadlineGold: "In the room.",
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
    programmeOfInterest: "Programme of interest",
    selectProgramme: "Select a programme",
    notSure: "I am not sure — please advise",
    preferredCohort: "Preferred cohort",
    preferredCohortHint:
      "If you have a preferred date, indicate it. Otherwise we will route you to the next available.",
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
    audience: "Audience",
    audienceHint: "Who is the cohort being commissioned for?",
    audiencePlaceholder: "e.g. senior alumni; partner-track principals",
    format: "Format",
    selectFormat: "Select a format",
    formatThree: "Three-day intensive",
    formatChatham: "Four-day chatham-house",
    formatWeek: "Curated week",
    formatModular: "Modular / multi-touch",
    formatUndecided: "Undecided — please advise",
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
    cohortPlaceholder: "e.g. June 2026",
    discussTopic: "What you would like to discuss",
    discussHint: "Three to five sentences are enough. Specificity is welcomed.",
  },
  footer: {
    blurb:
      "A premium Swiss platform for cohort-based intensives and curated business access — three flagship programmes, hosted by practitioners, by application.",
    sectionProgrammes: "Programmes",
    sectionPlatform: "Platform",
    sectionApply: "Apply",
    linkApplication: "Application",
    linkPrivateConsultation: "Private consultation",
    linkPrivateCohort: "Private cohort enquiry",
    linkContact: "Contact",
    legalImprint: "Imprint",
    legalPrivacy: "Privacy",
    legalCookies: "Cookies",
    legalApplicationTerms: "Application terms",
    copyright: "© 2026 Vision Goal · Zurich, Switzerland",
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
    title: "Vision Goal — Kuratierter Schweizer Zugang, auf Bewerbung",
    description:
      "Eine premium Schweizer Plattform für kohortenbasierte Intensivprogramme und kuratierten Geschäftszugang — drei Flaggschiff-Programme, geführt von Praktikern, auf Bewerbung.",
  },
  nav: {
    home: "Start",
    programmes: "Programme",
    hosts: "Gastgeber",
    alumni: "Alumni",
    insights: "Einblicke",
    about: "Über uns",
    apply: "Bewerben",
    privateOffice: "Private Office",
    skipToContent: "Zum Inhalt springen",
    primaryNav: "Hauptnavigation",
  },
  cta: {
    applyNext: "Für nächste Kohorte bewerben",
    requestConsult: "Private Beratung anfragen →",
    applyForCohort: "Für nächste Kohorte bewerben",
    submitEnquiry: "Anfrage senden",
    readProgramme: "Programm lesen",
    allProgrammes: "Alle Programme",
    allHosts: "Alle Gastgeber und Fakultät",
    allInsights: "Alle Einblicke",
    subscribe: "Abonnieren",
    send: "Senden →",
    continue: "Weiter →",
    previous: "← Zurück",
    submitApplication: "Bewerbung absenden",
  },
  dispatch: {
    label: "Dispatch",
    items: [
      "Swiss Business Access Immersion · Zürich · 23.—27. Juni 2026 · 4 Plätze frei",
      "Private Swiss Banking & Wealth Intensive · Genf · 8.—11. September 2026 · Warteliste",
      "Swiss Finance Week · Zürich · 10.—14. November 2026 · 8 Plätze",
      "Anfragen für private Kohorten offen · Antwort in fünf Werktagen",
      "Kohortenbasiert · Zwölf im Raum · Geführt von Praktikern",
      "Auf Bewerbung · Keine offene Anmeldung",
    ],
  },
  hero: {
    eyebrow: "Kuratierte Schweizer Intensivprogramme & Zugang · Auf Bewerbung",
    line1: "Drei Flaggschiff-",
    line2: "Programme.",
    line3: "Auf Bewerbung.",
    subline:
      "Eine Schweizer Plattform für kohortenbasierte Intensivprogramme und kuratierten Geschäftszugang — kleine Räume, namentlich genannte Gastgeber, auf Bewerbung.",
    subjects: "Schweizer Geschäftszugang · Privatbanking · Finance-Themenwoche",
    statusReviewing: "Bewerbungen werden geprüft · Q3 2026",
    locationLine: "Zürich · Genf · Ausgewählte Schweizer Veranstaltungsorte",
    scrollToProgrammes: "Zu den Programmen ↓",
  },
  posture: {
    eyebrow: "Die Haltung der Plattform",
    sub: "Kuratiertes Lernen, Zugang und überlegte Vorstellungen",
    pillars: [
      { label: "Auf Bewerbung", line: "Niemals offene Anmeldung." },
      { label: "Zwölf im Raum", line: "Bewusst kohortenbasiert." },
      { label: "Geführt von Praktikern", line: "Namentlich auf der Seite." },
    ],
  },
  programmesBlock: {
    eyebrow: "Die Flaggschiff-Intensivprogramme",
    headline: "Drei kuratierte Programme.",
    headlineGold: "Auf Bewerbung.",
  },
  programmeMeta: {
    access: {
      name: "Swiss Business Access Immersion",
      tagline:
        "Eine kuratierte Immersion — direkter Zugang zu Schweizer Unternehmen, Netzwerken und Geschäftskultur.",
      durationLabel: "5 Tage · vor Ort",
      city: "Zürich",
    },
    banking: {
      name: "Private Swiss Banking & Wealth Intensive",
      tagline:
        "Ein Chatham-House-Intensivprogramm — Schweizer Privatbanking, geführt von Praktikern.",
      durationLabel: "4 Tage · Chatham-House",
      city: "Genf",
    },
    topic: {
      name: "Swiss Finance Week",
      tagline:
        "Eine thematische Woche kuratierter Räume — ein Schweizer Finanzthema, geführt von Praktikern.",
      durationLabel: "5 Tage · kuratiert",
      city: "Zürich",
    },
  },
  hostsStrip: {
    eyebrow: "Gastgeber & Fakultät",
    headline: "Namentlich auf der Seite.",
    headlineGold: "Im Raum.",
    cta: "Alle Gastgeber und Fakultät",
  },
  editorial: {
    eyebrow: "Die Räume",
    headline: "Redaktionell. Zurückhaltend.",
    headlineGold: "Schweizerisch.",
    side: "Kuratierte Veranstaltungsorte. Zwölf im Raum. Diskretion als Standard.",
    tiles: [
      { label: "Zürich", caption: "Vor Ort" },
      { label: "Genf", caption: "Chatham-House" },
      { label: "Alpiner Rückzug", caption: "Stille Räume" },
      { label: "Kuratierte Salons", caption: "Zwölf im Raum" },
    ],
  },
  cohorts: {
    eyebrow: "Nächste Kohorten",
    headline: "Drei Räume",
    headlineGold: "öffnen bald.",
    statusOpen: "Offen",
    statusWaitlist: "Warteliste",
    statusClosed: "Geschlossen",
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
    eyebrow: "Bereit zur Bewerbung",
    line1: "Der Raum ist klein.",
    line2: "Er schliesst, wenn er voll ist.",
  },
  trust: {
    eyebrow: "Die Plattform in Zahlen",
    stats: [
      { value: "33", label: "Jahre Schweizer Privatbanking" },
      { value: "3", label: "Flaggschiff-Programme" },
      { value: "12", label: "Maximum im Raum" },
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
        title: "Zwölf, nicht zwanzig",
        body: "Kohorten sind so dimensioniert, dass jede Stimme gehört und jede Vorstellung überlegt wird. Die Ökonomie des Raums ist bewusst gewählt.",
      },
      {
        title: "Bewerbung, keine Anmeldung",
        body: "Jeder Raum ist kuratiert. Wir lesen auf Spezifität des Ziels und Kaliber des Beitrags — nicht auf Titel und nicht auf Budget.",
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
    alumniNumbersEyebrow: "Das Netzwerk in Zahlen",
    alumniNumbersHeadline: "Ein kleines Register, warm gehalten.",
    alumniStats: [
      { value: "84", label: "Alumni über alle Kohorten seit 2022" },
      { value: "12", label: "Maximale Teilnehmer pro Kohorte" },
      { value: "27", label: "Vertretene Länder im Netzwerk" },
      { value: "4", label: "Jährliche Wiedersehenstage pro Jahr" },
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
        title: "Ehrlichkeit über den Umfang",
        body: "Wir sind keine Beratung, kein Coaching, nicht reguliert. Wir versammeln Räume; wir liefern keine Resultate. Das sagen wir auf jeder Seite.",
      },
    ],
  },
  pages: {
    programmes: {
      eyebrow: "Die Flaggschiff-Intensivprogramme",
      titlePart1: "Drei Programme.",
      titleGold: "Auf Bewerbung.",
      lede:
        "Jedes Programm ist ein kuratierter Raum: klein, von namentlich genannten Praktikern geführt und mit einer einzigen Haltung geleitet — Zurückhaltung statt Lautstärke, Belege statt Behauptungen, Urteilsvermögen statt Inszenierung.",
    },
    hosts: {
      eyebrow: "Gastgeber & Fakultät",
      titlePart1: "Namentlich auf der Seite.",
      titleGold: "Im Raum.",
      lede:
        "Gastgeber und Fakultät erscheinen hier als Praktiker. Jeder ist auf der Kohortenseite namentlich genannt und in persönlicher Funktion anwesend. Die Plattform listet keine Sprecher, die sie nicht gebucht hat.",
      principleEyebrow: "Kurationsprinzip",
      principleBody:
        "Wir listen nicht jeden Sprecher, der jemals auf der Plattform aufgetreten ist. Wir listen die Praktiker auf der Seite, deren Anwesenheit im Raum bestätigt ist. Die Liste ist absichtlich kurz.",
    },
    alumni: {
      eyebrow: "Alumni & Netzwerk",
      titlePart1: "Wer im Raum war.",
      titleGold: "Sorgfältig kuratiert.",
      lede:
        "Alumni werden mit Einwilligung namentlich und mit angemessener Zuschreibung genannt. Das Netzwerk ist absichtlich klein; sein Wert liegt im Kaliber, nicht in der Anzahl.",
      postureEyebrow: "Die Alumni-Haltung",
      postureHeadline: "Selektivität ist der Wert.",
      postureBody:
        "Das Alumni-Netzwerk ist selektiv, weil es die Räume sind. Mitglieder können namentliche Vorstellungen zu anderen Alumni anfragen; das Kurationsteam vermittelt jede einzelne. Vierteljährliche Gastgeber-Dispatches und ein jährliches Wiedersehen halten das Netzwerk warm, ohne es laut zu machen.",
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
      titlePart1: "Eine kuratierte Schweizer Plattform.",
      titleGold: "Keine Beratung.",
      lede:
        "Vision Goal existiert, um kleine, überlegte Räume zu Schweizer Zugang, Privatbanking und themenspezifischen Finanzfragen zusammenzubringen. Die Plattform ist kuratorisch; die Räume sind auf Bewerbung; die Verfahren sind leise.",
      statement:
        "Wir tun drei Dinge. Wir führen eine Swiss Business Access Immersion in Zürich durch. Wir führen ein Private Swiss Banking & Wealth Intensive in Genf durch. Und wir richten einmal jährlich eine Swiss Finance Week zu einer aktuellen Frage aus. Zwölf im Raum. Geführt von namentlich genannten Praktikern. Auf Bewerbung.",
      statement2:
        "Die Plattform ist bewusst klein. Kuration ist das Produkt; die Räume sind das Lieferergebnis. Wir betreiben keine offene Anmeldung, wir liefern kein Coaching, und wir versprechen keine Resultate. Wir versprechen überlegte Räume mit namentlich genannten Gastgebern, und wir führen sie genau so, wie auf dieser Seite beschrieben.",
      standardsEyebrow: "Standards & Ethik",
      standardsHeadline: "Wie wir arbeiten.",
      pressEyebrow: "Presse & Auszeichnungen",
      pressHeadline: "Ausgewählte Erwähnungen.",
      curatorEyebrow: "Eine Notiz des Kurators",
      curatorNote:
        "Die Plattform existiert für die Räume. Alles andere — die Website, der Dispatch, die Pressespalte — steht im Dienste dessen, was geschieht, wenn zwölf Personen unter Chatham-House-Regeln vier Tage mit einem Gastgeber zusammensitzen, der ihnen nichts zu verkaufen hat. Wenn wir die Räume ehrlich halten, regelt sich der Rest von selbst.",
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
      hostsEyebrow: "Gastgeber & Fakultät dieses Programms",
      hostsHeadlinePart1: "Namentlich auf der Seite.",
      hostsHeadlineGold: "Im Raum.",
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
    programmeOfInterest: "Programm",
    selectProgramme: "Programm wählen",
    notSure: "Ich bin unsicher — bitte beraten",
    preferredCohort: "Bevorzugte Kohorte",
    preferredCohortHint:
      "Wenn Sie ein bevorzugtes Datum haben, geben Sie es an. Andernfalls leiten wir Sie zur nächsten verfügbaren Kohorte.",
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
    audience: "Zielgruppe",
    audienceHint: "Für wen wird die Kohorte beauftragt?",
    audiencePlaceholder: "z.B. Senior-Alumni; Partner-Track-Principals",
    format: "Format",
    selectFormat: "Format wählen",
    formatThree: "Dreitägiges Intensivprogramm",
    formatChatham: "Viertägiges Chatham-House",
    formatWeek: "Kuratierte Woche",
    formatModular: "Modular / mehrteilig",
    formatUndecided: "Unentschieden — bitte beraten",
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
    cohortPlaceholder: "z.B. Juni 2026",
    discussTopic: "Was Sie besprechen möchten",
    discussHint: "Drei bis fünf Sätze genügen. Spezifität ist willkommen.",
  },
  footer: {
    blurb:
      "Eine premium Schweizer Plattform für kohortenbasierte Intensivprogramme und kuratierten Geschäftszugang — drei Flaggschiff-Programme, geführt von Praktikern, auf Bewerbung.",
    sectionProgrammes: "Programme",
    sectionPlatform: "Plattform",
    sectionApply: "Bewerben",
    linkApplication: "Bewerbung",
    linkPrivateConsultation: "Private Beratung",
    linkPrivateCohort: "Anfrage private Kohorte",
    linkContact: "Kontakt",
    legalImprint: "Impressum",
    legalPrivacy: "Datenschutz",
    legalCookies: "Cookies",
    legalApplicationTerms: "Bewerbungsbedingungen",
    copyright: "© 2026 Vision Goal · Zürich, Schweiz",
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
    title: "Vision Goal — Accès suisse curaté, sur candidature",
    description:
      "Une plateforme suisse premium pour intensifs en cohorte et accès business curaté — trois programmes phares, animés par des praticiens, sur candidature.",
  },
  nav: {
    home: "Accueil",
    programmes: "Programmes",
    hosts: "Animateurs",
    alumni: "Alumni",
    insights: "Analyses",
    about: "À propos",
    apply: "Candidater",
    privateOffice: "Private Office",
    skipToContent: "Aller au contenu",
    primaryNav: "Principal",
  },
  cta: {
    applyNext: "Candidater à la prochaine cohorte",
    requestConsult: "Demander une consultation privée →",
    applyForCohort: "Candidater à la prochaine cohorte",
    submitEnquiry: "Envoyer la demande",
    readProgramme: "Lire le programme",
    allProgrammes: "Tous les programmes",
    allHosts: "Tous les animateurs et la faculté",
    allInsights: "Toutes les analyses",
    subscribe: "S’abonner",
    send: "Envoyer →",
    continue: "Continuer →",
    previous: "← Précédent",
    submitApplication: "Envoyer la candidature",
  },
  dispatch: {
    label: "Dispatch",
    items: [
      "Swiss Business Access Immersion · Zurich · 23—27 juin 2026 · 4 places restantes",
      "Private Swiss Banking & Wealth Intensive · Genève · 8—11 septembre 2026 · Liste d’attente",
      "Swiss Finance Week · Zurich · 10—14 novembre 2026 · 8 places",
      "Demandes de cohortes privées ouvertes · Réponse sous cinq jours ouvrés",
      "En cohorte · Douze dans la salle · Animé par des praticiens",
      "Sur candidature · Jamais d’inscription ouverte",
    ],
  },
  hero: {
    eyebrow: "Intensifs et accès suisses curatés · Sur candidature",
    line1: "Trois programmes",
    line2: "phares.",
    line3: "Sur candidature.",
    subline:
      "Une plateforme suisse pour intensifs en cohorte et accès business curaté — petites salles, animateurs nommés, sur candidature.",
    subjects: "Accès business suisse · Banque privée · Semaine thématique finance",
    statusReviewing: "Examen des candidatures · T3 2026",
    locationLine: "Zurich · Genève · Lieux suisses sélectionnés",
    scrollToProgrammes: "Voir les programmes ↓",
  },
  posture: {
    eyebrow: "La posture de la plateforme",
    sub: "Apprentissage curaté, accès et introductions réfléchies",
    pillars: [
      { label: "Sur candidature", line: "Jamais d’inscription ouverte." },
      { label: "Douze dans la salle", line: "En cohorte par choix." },
      { label: "Animé par des praticiens", line: "Nommés sur la page." },
    ],
  },
  programmesBlock: {
    eyebrow: "Les intensifs phares",
    headline: "Trois programmes curatés.",
    headlineGold: "Sur candidature.",
  },
  programmeMeta: {
    access: {
      name: "Swiss Business Access Immersion",
      tagline:
        "Une immersion curatée — accès direct aux entreprises, réseaux et culture opérationnelle suisses.",
      durationLabel: "5 jours · en résidence",
      city: "Zurich",
    },
    banking: {
      name: "Private Swiss Banking & Wealth Intensive",
      tagline:
        "Un intensif chatham house — banque privée suisse, animé par des praticiens.",
      durationLabel: "4 jours · chatham house",
      city: "Genève",
    },
    topic: {
      name: "Swiss Finance Week",
      tagline:
        "Une semaine thématique de salles curatées — un sujet de finance suisse, animé par des praticiens.",
      durationLabel: "5 jours · curaté",
      city: "Zurich",
    },
  },
  hostsStrip: {
    eyebrow: "Animateurs & faculté",
    headline: "Nommés sur la page.",
    headlineGold: "Dans la salle.",
    cta: "Tous les animateurs et la faculté",
  },
  editorial: {
    eyebrow: "Les salles",
    headline: "Éditorial. Mesuré.",
    headlineGold: "Suisse.",
    side: "Lieux curatés. Douze dans la salle. Discrétion par défaut.",
    tiles: [
      { label: "Zurich", caption: "En résidence" },
      { label: "Genève", caption: "Chatham house" },
      { label: "Retraite alpine", caption: "Salles silencieuses" },
      { label: "Salons curatés", caption: "Douze dans la salle" },
    ],
  },
  cohorts: {
    eyebrow: "Prochaines cohortes",
    headline: "Trois salles",
    headlineGold: "ouvrent bientôt.",
    statusOpen: "Ouverte",
    statusWaitlist: "Liste d’attente",
    statusClosed: "Fermée",
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
    eyebrow: "Prêt à candidater",
    line1: "La salle est petite.",
    line2: "Elle ferme quand elle est pleine.",
  },
  trust: {
    eyebrow: "La plateforme en chiffres",
    stats: [
      { value: "33", label: "Années dans la banque privée suisse" },
      { value: "3", label: "Programmes phares" },
      { value: "12", label: "Maximum dans la salle" },
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
        title: "Douze, pas vingt",
        body: "Les cohortes sont dimensionnées pour que chaque voix soit entendue et chaque introduction réfléchie. L’économie de la salle est délibérée.",
      },
      {
        title: "Candidature, pas inscription",
        body: "Chaque salle est curatée. Nous lisons la spécificité de l’objectif et le calibre de la contribution — pas les titres, pas le budget.",
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
    alumniNumbersEyebrow: "Le réseau en chiffres",
    alumniNumbersHeadline: "Un petit registre, gardé chaud.",
    alumniStats: [
      { value: "84", label: "Alumni au total depuis 2022" },
      { value: "12", label: "Participants maximum par cohorte" },
      { value: "27", label: "Pays représentés dans le réseau" },
      { value: "4", label: "Jours de retrouvailles par an" },
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
        title: "Honnêteté sur le périmètre",
        body: "Nous ne sommes ni conseil, ni coaching, ni régulés. Nous convoquons des salles ; nous ne livrons pas de résultats. Nous le disons sur chaque page.",
      },
    ],
  },
  pages: {
    programmes: {
      eyebrow: "Les intensifs phares",
      titlePart1: "Trois programmes.",
      titleGold: "Sur candidature.",
      lede:
        "Chaque programme est une salle curatée : petite, animée par des praticiens nommés, et menée avec une seule posture — la mesure plutôt que le volume, la preuve plutôt que la déclaration, le jugement plutôt que la performance.",
    },
    hosts: {
      eyebrow: "Animateurs & faculté",
      titlePart1: "Nommés sur la page.",
      titleGold: "Dans la salle.",
      lede:
        "Les animateurs et la faculté apparaissent ici comme praticiens. Chacun est nommé sur la page de cohorte et présent à titre personnel. La plateforme ne liste pas d’intervenants qu’elle n’a pas réservés.",
      principleEyebrow: "Principe de curation",
      principleBody:
        "Nous ne listons pas tous les intervenants ayant un jour figuré sur la plateforme. Nous listons les praticiens dont la présence dans la salle est confirmée. La liste est volontairement courte.",
    },
    alumni: {
      eyebrow: "Alumni & réseau",
      titlePart1: "Qui était",
      titleGold: "dans la salle.",
      lede:
        "Les alumni sont nommés avec consentement et attribués lorsque c’est approprié. Le réseau est volontairement petit ; sa valeur tient au calibre, non au nombre.",
      postureEyebrow: "La posture alumni",
      postureHeadline: "La sélectivité est la valeur.",
      postureBody:
        "Le réseau alumni est sélectif parce que les salles le sont. Les membres peuvent demander des introductions nommées vers d’autres alumni ; l’équipe de curation médiatise chacune. Des dispatches trimestrielles d’animateurs et un rendez-vous annuel maintiennent le réseau chaud sans le rendre bruyant.",
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
      titlePart1: "Une plateforme suisse curatée.",
      titleGold: "Pas du conseil.",
      lede:
        "Vision Goal existe pour réunir de petites salles réfléchies sur l’accès suisse, la banque privée et les questions financières spécifiques. La plateforme est curatoriale ; les salles se font sur candidature ; les débats restent silencieux.",
      statement:
        "Nous faisons trois choses. Nous animons une Swiss Business Access Immersion à Zurich. Nous animons un Private Swiss Banking & Wealth Intensive à Genève. Et nous tenons une fois par an une Swiss Finance Week sur une question d’actualité. Douze dans la salle. Animé par des praticiens nommés. Sur candidature.",
      statement2:
        "La plateforme est volontairement petite. La curation est le produit ; les salles sont le livrable. Nous ne pratiquons pas l’inscription ouverte, nous ne livrons pas de coaching et nous ne promettons pas de résultats. Nous promettons des salles réfléchies avec des animateurs nommés, et nous les conduisons telles que décrites sur cette page.",
      standardsEyebrow: "Standards & éthique",
      standardsHeadline: "Comment nous opérons.",
      pressEyebrow: "Presse & reconnaissance",
      pressHeadline: "Mentions sélectionnées.",
      curatorEyebrow: "Une note du curateur",
      curatorNote:
        "La plateforme existe pour les salles. Tout le reste — le site, le dispatch, la rubrique presse — est au service de ce qui se passe quand douze personnes s’assoient quatre jours sous chatham house avec un animateur qui n’a rien à leur vendre. Si nous tenons les salles avec honnêteté, le reste s’occupe de lui-même.",
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
      hostsEyebrow: "Animateurs & faculté de ce programme",
      hostsHeadlinePart1: "Nommés sur la page.",
      hostsHeadlineGold: "Dans la salle.",
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
    programmeOfInterest: "Programme",
    selectProgramme: "Choisir un programme",
    notSure: "Je ne suis pas sûr — merci de m’orienter",
    preferredCohort: "Cohorte préférée",
    preferredCohortHint:
      "Si vous avez une date préférée, indiquez-la. Sinon, nous vous orientons vers la prochaine disponible.",
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
    audience: "Audience",
    audienceHint: "Pour qui la cohorte est-elle commandée ?",
    audiencePlaceholder: "ex. alumni seniors ; principals partner-track",
    format: "Format",
    selectFormat: "Choisir un format",
    formatThree: "Intensif de trois jours",
    formatChatham: "Chatham house de quatre jours",
    formatWeek: "Semaine curatée",
    formatModular: "Modulaire / multi-touch",
    formatUndecided: "Indécis — merci de m’orienter",
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
    cohortPlaceholder: "ex. juin 2026",
    discussTopic: "Ce dont vous souhaitez parler",
    discussHint: "Trois à cinq phrases suffisent. La spécificité est bienvenue.",
  },
  footer: {
    blurb:
      "Une plateforme suisse premium pour intensifs en cohorte et accès business curaté — trois programmes phares, animés par des praticiens, sur candidature.",
    sectionProgrammes: "Programmes",
    sectionPlatform: "Plateforme",
    sectionApply: "Candidater",
    linkApplication: "Candidature",
    linkPrivateConsultation: "Consultation privée",
    linkPrivateCohort: "Demande de cohorte privée",
    linkContact: "Contact",
    legalImprint: "Mentions légales",
    legalPrivacy: "Confidentialité",
    legalCookies: "Cookies",
    legalApplicationTerms: "Conditions de candidature",
    copyright: "© 2026 Vision Goal · Zurich, Suisse",
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
    title: "Vision Goal — Acceso suizo curado, por candidatura",
    description:
      "Una plataforma suiza premium para intensivos por cohorte y acceso de negocio curado — tres programas insignia, conducidos por practicantes, por candidatura.",
  },
  nav: {
    home: "Inicio",
    programmes: "Programas",
    hosts: "Anfitriones",
    alumni: "Alumni",
    insights: "Análisis",
    about: "Acerca",
    apply: "Postular",
    privateOffice: "Private Office",
    skipToContent: "Ir al contenido",
    primaryNav: "Principal",
  },
  cta: {
    applyNext: "Postular a la próxima cohorte",
    requestConsult: "Solicitar consulta privada →",
    applyForCohort: "Postular a la próxima cohorte",
    submitEnquiry: "Enviar consulta",
    readProgramme: "Leer el programa",
    allProgrammes: "Todos los programas",
    allHosts: "Todos los anfitriones y la facultad",
    allInsights: "Todos los análisis",
    subscribe: "Suscribirse",
    send: "Enviar →",
    continue: "Continuar →",
    previous: "← Anterior",
    submitApplication: "Enviar candidatura",
  },
  dispatch: {
    label: "Dispatch",
    items: [
      "Swiss Business Access Immersion · Zúrich · 23—27 de junio de 2026 · 4 plazas restantes",
      "Private Swiss Banking & Wealth Intensive · Ginebra · 8—11 de septiembre de 2026 · Lista de espera",
      "Swiss Finance Week · Zúrich · 10—14 de noviembre de 2026 · 8 plazas",
      "Consultas de cohorte privada abiertas · Respuesta en cinco días hábiles",
      "Por cohorte · Doce en la sala · Conducido por practicantes",
      "Por candidatura · Nunca matrícula abierta",
    ],
  },
  hero: {
    eyebrow: "Intensivos suizos curados y acceso · Por candidatura",
    line1: "Tres programas",
    line2: "insignia.",
    line3: "Por candidatura.",
    subline:
      "Una plataforma suiza para intensivos por cohorte y acceso de negocio curado — salas pequeñas, anfitriones nombrados, por candidatura.",
    subjects: "Acceso de negocio suizo · Banca privada · Semana temática de finanzas",
    statusReviewing: "Revisando candidaturas · T3 2026",
    locationLine: "Zúrich · Ginebra · Sedes suizas seleccionadas",
    scrollToProgrammes: "Ver los programas ↓",
  },
  posture: {
    eyebrow: "La postura de la plataforma",
    sub: "Aprendizaje curado, acceso e introducciones consideradas",
    pillars: [
      { label: "Por candidatura", line: "Nunca matrícula abierta." },
      { label: "Doce en la sala", line: "Por cohorte, por elección." },
      { label: "Conducido por practicantes", line: "Nombrados en la página." },
    ],
  },
  programmesBlock: {
    eyebrow: "Los intensivos insignia",
    headline: "Tres programas curados.",
    headlineGold: "Por candidatura.",
  },
  programmeMeta: {
    access: {
      name: "Swiss Business Access Immersion",
      tagline:
        "Una inmersión curada — acceso directo a empresas, redes y cultura operativa suizas.",
      durationLabel: "5 días · en residencia",
      city: "Zúrich",
    },
    banking: {
      name: "Private Swiss Banking & Wealth Intensive",
      tagline:
        "Un intensivo chatham house — banca privada suiza, conducido por practicantes.",
      durationLabel: "4 días · chatham house",
      city: "Ginebra",
    },
    topic: {
      name: "Swiss Finance Week",
      tagline:
        "Una semana temática de salas curadas — un tema de finanzas suizas, conducido por practicantes.",
      durationLabel: "5 días · curado",
      city: "Zúrich",
    },
  },
  hostsStrip: {
    eyebrow: "Anfitriones y facultad",
    headline: "Nombrados en la página.",
    headlineGold: "En la sala.",
    cta: "Todos los anfitriones y la facultad",
  },
  editorial: {
    eyebrow: "Las salas",
    headline: "Editorial. Mesurado.",
    headlineGold: "Suizo.",
    side: "Sedes curadas. Doce en la sala. Discreción por defecto.",
    tiles: [
      { label: "Zúrich", caption: "En residencia" },
      { label: "Ginebra", caption: "Chatham house" },
      { label: "Retiro alpino", caption: "Salas silenciosas" },
      { label: "Salones curados", caption: "Doce en la sala" },
    ],
  },
  cohorts: {
    eyebrow: "Próximas cohortes",
    headline: "Tres salas",
    headlineGold: "abren pronto.",
    statusOpen: "Abierta",
    statusWaitlist: "Lista de espera",
    statusClosed: "Cerrada",
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
    eyebrow: "Listo para postular",
    line1: "La sala es pequeña.",
    line2: "Cierra cuando se llena.",
  },
  trust: {
    eyebrow: "La plataforma en cifras",
    stats: [
      { value: "33", label: "Años en la banca privada suiza" },
      { value: "3", label: "Programas insignia" },
      { value: "12", label: "Máximo en la sala" },
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
        title: "Doce, no veinte",
        body: "Las cohortes están dimensionadas para que cada voz se escuche y cada presentación se considere. La economía de la sala es deliberada.",
      },
      {
        title: "Candidatura, no matrícula",
        body: "Cada sala es curada. Leemos la especificidad del objetivo y el calibre de la contribución — no títulos y no presupuesto.",
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
    alumniNumbersEyebrow: "La red en cifras",
    alumniNumbersHeadline: "Un registro pequeño, mantenido cálido.",
    alumniStats: [
      { value: "84", label: "Alumni en todas las cohortes desde 2022" },
      { value: "12", label: "Participantes máximos por cohorte" },
      { value: "27", label: "Países representados en la red" },
      { value: "4", label: "Días anuales de reencuentro" },
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
        title: "Honestidad sobre el alcance",
        body: "No somos asesoría, no somos coaching, no estamos regulados. Convocamos salas; no entregamos resultados. Lo decimos en cada página.",
      },
    ],
  },
  pages: {
    programmes: {
      eyebrow: "Los intensivos insignia",
      titlePart1: "Tres programas.",
      titleGold: "Por candidatura.",
      lede:
        "Cada programa es una sala curada: pequeña, conducida por practicantes nombrados y dirigida con una sola postura — la mesura sobre el volumen, la prueba sobre la afirmación, el juicio sobre la actuación.",
    },
    hosts: {
      eyebrow: "Anfitriones y facultad",
      titlePart1: "Nombrados en la página.",
      titleGold: "En la sala.",
      lede:
        "Los anfitriones y la facultad aparecen aquí como practicantes. Cada uno está nombrado en la página de cohorte y presente a título personal. La plataforma no enumera ponentes que no haya contratado.",
      principleEyebrow: "Principio de curaduría",
      principleBody:
        "No enumeramos a todos los ponentes que han pasado por la plataforma. Enumeramos a los practicantes cuya presencia en la sala está confirmada. La lista es deliberadamente corta.",
    },
    alumni: {
      eyebrow: "Alumni y red",
      titlePart1: "Quién ha estado",
      titleGold: "en la sala.",
      lede:
        "Los alumni se nombran con consentimiento y se atribuyen cuando corresponde. La red es deliberadamente pequeña; su valor está en el calibre, no en el número.",
      postureEyebrow: "La postura alumni",
      postureHeadline: "La selectividad es el valor.",
      postureBody:
        "La red alumni es selectiva porque las salas lo son. Los miembros pueden solicitar presentaciones nominadas a otros alumni; el equipo de curaduría media cada una. Dispatches trimestrales del anfitrión y un reencuentro anual mantienen la red cálida sin volverla ruidosa.",
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
      titlePart1: "Una plataforma suiza curada.",
      titleGold: "No es asesoría.",
      lede:
        "Vision Goal existe para convocar pequeñas salas consideradas sobre acceso suizo, banca privada y preguntas financieras específicas. La plataforma es curatorial; las salas son por candidatura; los procedimientos son silenciosos.",
      statement:
        "Hacemos tres cosas. Llevamos a cabo una Swiss Business Access Immersion en Zúrich. Llevamos a cabo un Private Swiss Banking & Wealth Intensive en Ginebra. Y celebramos una Swiss Finance Week al año sobre una pregunta actual. Doce en la sala. Conducido por practicantes nombrados. Por candidatura.",
      statement2:
        "La plataforma es deliberadamente pequeña. La curaduría es el producto; las salas son el entregable. No realizamos matrícula abierta, no entregamos coaching y no prometemos resultados. Prometemos salas consideradas con anfitriones nombrados, y las conducimos tal como se describe en esta página.",
      standardsEyebrow: "Estándares y ética",
      standardsHeadline: "Cómo operamos.",
      pressEyebrow: "Prensa y reconocimiento",
      pressHeadline: "Menciones seleccionadas.",
      curatorEyebrow: "Una nota del curador",
      curatorNote:
        "La plataforma existe para las salas. Todo lo demás — el sitio, el dispatch, la columna de prensa — está al servicio de lo que ocurre cuando doce personas se sientan cuatro días bajo reglas chatham house con un anfitrión que no tiene nada que venderles. Si mantenemos las salas honestas, el resto se cuida solo.",
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
      hostsEyebrow: "Anfitriones y facultad de este programa",
      hostsHeadlinePart1: "Nombrados en la página.",
      hostsHeadlineGold: "En la sala.",
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
    programmeOfInterest: "Programa",
    selectProgramme: "Seleccionar programa",
    notSure: "No estoy seguro — por favor, oriénteme",
    preferredCohort: "Cohorte preferida",
    preferredCohortHint:
      "Si tiene una fecha preferida, indíquela. De lo contrario, lo orientaremos a la próxima disponible.",
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
    audience: "Audiencia",
    audienceHint: "¿Para quién se encarga la cohorte?",
    audiencePlaceholder: "p.ej. alumni senior; principals partner-track",
    format: "Formato",
    selectFormat: "Seleccionar formato",
    formatThree: "Intensivo de tres días",
    formatChatham: "Chatham house de cuatro días",
    formatWeek: "Semana curada",
    formatModular: "Modular / multi-touch",
    formatUndecided: "Indeciso — por favor, oriénteme",
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
    cohortPlaceholder: "p.ej. junio de 2026",
    discussTopic: "Lo que desea tratar",
    discussHint: "Tres a cinco frases bastan. La especificidad es bienvenida.",
  },
  footer: {
    blurb:
      "Una plataforma suiza premium para intensivos por cohorte y acceso de negocio curado — tres programas insignia, conducidos por practicantes, por candidatura.",
    sectionProgrammes: "Programas",
    sectionPlatform: "Plataforma",
    sectionApply: "Postular",
    linkApplication: "Candidatura",
    linkPrivateConsultation: "Consulta privada",
    linkPrivateCohort: "Consulta cohorte privada",
    linkContact: "Contacto",
    legalImprint: "Aviso legal",
    legalPrivacy: "Privacidad",
    legalCookies: "Cookies",
    legalApplicationTerms: "Términos de candidatura",
    copyright: "© 2026 Vision Goal · Zúrich, Suiza",
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
    title: "Vision Goal — 精选瑞士通道, 申请制",
    description:
      "面向群体集训与精选商务通道的高端瑞士平台 —— 三大旗舰项目, 由资深从业者主持, 申请制。",
  },
  nav: {
    home: "首页",
    programmes: "项目",
    hosts: "主持人",
    alumni: "校友",
    insights: "洞察",
    about: "关于",
    apply: "申请",
    privateOffice: "私人办公室",
    skipToContent: "跳至正文",
    primaryNav: "主导航",
  },
  cta: {
    applyNext: "申请下一期群体",
    requestConsult: "申请私下咨询 →",
    applyForCohort: "申请下一期群体",
    submitEnquiry: "提交咨询",
    readProgramme: "查看项目",
    allProgrammes: "全部项目",
    allHosts: "全部主持与教席",
    allInsights: "全部洞察",
    subscribe: "订阅",
    send: "发送 →",
    continue: "继续 →",
    previous: "← 上一步",
    submitApplication: "提交申请",
  },
  dispatch: {
    label: "速递",
    items: [
      "Swiss Business Access Immersion · 苏黎世 · 2026 年 6 月 23—27 日 · 余 4 席",
      "Private Swiss Banking & Wealth Intensive · 日内瓦 · 2026 年 9 月 8—11 日 · 候补",
      "Swiss Finance Week · 苏黎世 · 2026 年 11 月 10—14 日 · 8 席",
      "私享群体咨询开放 · 五个工作日内回复",
      "群体制 · 室内仅十二人 · 资深从业者主持",
      "申请制 · 从不公开招生",
    ],
  },
  hero: {
    eyebrow: "精选瑞士集训与通道 · 申请制",
    line1: "三大",
    line2: "旗舰项目。",
    line3: "申请制。",
    subline:
      "面向群体集训与精选商务通道的瑞士平台 —— 小型房间、具名主持、申请制。",
    subjects: "瑞士商务通道 · 私人银行 · 金融议题周",
    statusReviewing: "申请审阅中 · 2026 年第三季度",
    locationLine: "苏黎世 · 日内瓦 · 精选瑞士场地",
    scrollToProgrammes: "查看项目 ↓",
  },
  posture: {
    eyebrow: "平台姿态",
    sub: "精选学习、通道与审慎引荐",
    pillars: [
      { label: "申请制", line: "从不公开招生。" },
      { label: "室内仅十二人", line: "群体制乃刻意。" },
      { label: "资深从业者主持", line: "页面署名。" },
    ],
  },
  programmesBlock: {
    eyebrow: "旗舰集训项目",
    headline: "三个精选项目。",
    headlineGold: "申请制。",
  },
  programmeMeta: {
    access: {
      name: "Swiss Business Access Immersion",
      tagline:
        "精选沉浸式集训 —— 直通瑞士企业、网络与运营文化。",
      durationLabel: "5 天 · 全程驻地",
      city: "苏黎世",
    },
    banking: {
      name: "Private Swiss Banking & Wealth Intensive",
      tagline:
        "查塔姆守则下的集训 —— 瑞士私人银行业, 由资深从业者主持。",
      durationLabel: "4 天 · 查塔姆守则",
      city: "日内瓦",
    },
    topic: {
      name: "Swiss Finance Week",
      tagline:
        "围绕单一瑞士金融议题的精选周 —— 由资深从业者主持。",
      durationLabel: "5 天 · 精选",
      city: "苏黎世",
    },
  },
  hostsStrip: {
    eyebrow: "主持人与教席",
    headline: "页面署名。",
    headlineGold: "在场。",
    cta: "全部主持与教席",
  },
  editorial: {
    eyebrow: "场所",
    headline: "克制。编辑式。",
    headlineGold: "瑞士风格。",
    side: "精选场地。室内仅十二人。审慎为常态。",
    tiles: [
      { label: "苏黎世", caption: "驻地" },
      { label: "日内瓦", caption: "查塔姆守则" },
      { label: "阿尔卑斯静修", caption: "静室" },
      { label: "精选沙龙", caption: "室内仅十二人" },
    ],
  },
  cohorts: {
    eyebrow: "下一期群体",
    headline: "三个房间",
    headlineGold: "即将开放。",
    statusOpen: "开放",
    statusWaitlist: "候补",
    statusClosed: "关闭",
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
    eyebrow: "准备申请",
    line1: "房间很小。",
    line2: "满员即闭。",
  },
  trust: {
    eyebrow: "平台数据",
    stats: [
      { value: "33", label: "瑞士私人银行从业年资" },
      { value: "3", label: "旗舰项目" },
      { value: "12", label: "房间内人数上限" },
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
        title: "十二人, 而非二十人",
        body: "群体规模刻意为之, 让每个声音被听见, 每次引荐被斟酌。房间的经济学是有意的。",
      },
      {
        title: "申请, 而非报名",
        body: "每个房间都经策划。我们看重目标的具体性与贡献的分量 —— 而非头衔, 也非预算。",
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
    alumniNumbersEyebrow: "网络数据",
    alumniNumbersHeadline: "一份精简的名册, 持续温度。",
    alumniStats: [
      { value: "84", label: "自 2022 年至今的全部校友" },
      { value: "12", label: "每期群体最多人数" },
      { value: "27", label: "网络覆盖国家与地区数" },
      { value: "4", label: "每年重聚天数" },
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
        title: "对范围的诚实",
        body: "我们既非顾问, 亦非教练, 也未受监管。我们召集房间; 不承诺结果。每一页皆如此声明。",
      },
    ],
  },
  pages: {
    programmes: {
      eyebrow: "旗舰集训项目",
      titlePart1: "三个项目。",
      titleGold: "申请制。",
      lede:
        "每个项目都是一间精选的房间: 小规模, 由具名从业者主持, 以单一姿态运行 —— 克制胜过喧哗、证据胜过断言、判断胜过表演。",
    },
    hosts: {
      eyebrow: "主持人与教席",
      titlePart1: "页面署名。",
      titleGold: "在场。",
      lede:
        "主持人与教席以从业者身份在此呈现。每位均在群体页面署名, 并以个人身份出席。平台不会列出未受邀请的讲者。",
      principleEyebrow: "策划原则",
      principleBody:
        "我们不会罗列平台历史上每位讲者。我们仅列出已确认在场的从业者。名单刻意精简。",
    },
    alumni: {
      eyebrow: "校友与网络",
      titlePart1: "谁曾在",
      titleGold: "房间里。",
      lede:
        "校友在征得同意后署名, 并酌情归属。该网络刻意精简; 价值在质量, 而非人数。",
      postureEyebrow: "校友姿态",
      postureHeadline: "选择性即价值。",
      postureBody:
        "校友网络具有选择性, 因为房间本身亦是。成员可申请向其他校友的具名引荐, 由策划团队居中协调。每季度的主持人速递与年度重聚, 让网络保持温度而不喧闹。",
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
      titlePart1: "一座精选的瑞士平台。",
      titleGold: "非顾问。",
      lede:
        "Vision Goal 旨在召集围绕瑞士通道、私人银行与具体金融议题的小型审慎房间。平台为策划性质; 房间为申请制; 议程从容静默。",
      statement:
        "我们做三件事。在苏黎世举办 Swiss Business Access Immersion。在日内瓦举办 Private Swiss Banking & Wealth Intensive。每年围绕一个当下议题举办一届 Swiss Finance Week。室内仅十二人。由具名从业者主持。申请制。",
      statement2:
        "平台刻意精简。策划即产品; 房间为交付。我们不进行公开招生, 不提供教练辅导, 也不承诺结果。我们承诺由具名主持人主持的审慎房间, 并按本页所述方式运行。",
      standardsEyebrow: "标准与伦理",
      standardsHeadline: "我们如何运营。",
      pressEyebrow: "媒体与认可",
      pressHeadline: "精选提及。",
      curatorEyebrow: "策展人手记",
      curatorNote:
        "平台为房间而存在。其他一切 —— 网站、速递、媒体专栏 —— 都服务于一件事: 当十二人在查塔姆守则下与一位无所推销的主持人相聚四日时, 在房间里发生的事。只要房间保持诚实, 其余的便会自行妥善。",
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
      hostsEyebrow: "本项目主持人与教席",
      hostsHeadlinePart1: "页面署名。",
      hostsHeadlineGold: "在场。",
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
    programmeOfInterest: "意向项目",
    selectProgramme: "选择项目",
    notSure: "尚未确定 —— 请协助",
    preferredCohort: "意向群体",
    preferredCohortHint:
      "若有意向日期请注明, 否则我们会安排至最近一期。",
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
    audience: "对象",
    audienceHint: "本群体为何对象而设?",
    audiencePlaceholder: "例如: 资深校友;合伙人通道",
    format: "形式",
    selectFormat: "选择形式",
    formatThree: "三日集训",
    formatChatham: "四日查塔姆守则",
    formatWeek: "精选周",
    formatModular: "模块化 / 多触点",
    formatUndecided: "未决 —— 请协助",
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
    cohortPlaceholder: "例如: 2026 年 6 月",
    discussTopic: "您希望讨论的内容",
    discussHint: "三到五句即可。具体性受欢迎。",
  },
  footer: {
    blurb:
      "面向群体集训与精选商务通道的高端瑞士平台 —— 三大旗舰项目, 由资深从业者主持, 申请制。",
    sectionProgrammes: "项目",
    sectionPlatform: "平台",
    sectionApply: "申请",
    linkApplication: "申请",
    linkPrivateConsultation: "私下咨询",
    linkPrivateCohort: "私享群体咨询",
    linkContact: "联系",
    legalImprint: "公司信息",
    legalPrivacy: "隐私",
    legalCookies: "Cookie",
    legalApplicationTerms: "申请条款",
    copyright: "© 2026 Vision Goal · 瑞士苏黎世",
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
