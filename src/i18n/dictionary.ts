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
    sending: string;
    continue: string;
    previous: string;
    submitApplication: string;
    requestDossier: string;
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
    note: string;
    statusAnnouncing: string;
    statusScheduled: string;
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
    alumni: { eyebrow: string; titlePart1: string; titleGold: string; lede: string; postureEyebrow: string; postureHeadline: string; postureBody: string; noVoicesHeadline: string; noVoicesBody: string; noCohortsHeadline: string; noCohortsBody: string };
    insightsIndex: { eyebrow: string; titlePart1: string; titleGold: string; lede: string };
    about: { eyebrow: string; titlePart1: string; titleGold: string; lede: string; statement: string; statement2: string; standardsEyebrow: string; standardsHeadline: string; pressEyebrow: string; pressHeadline: string; curatorEyebrow: string; curatorNote: string; curatorAttribution: string };
    contact: { eyebrow: string; titlePart1: string; titleGold: string; lede: string; officeEyebrow: string; emailLabel: string; phoneLabel: string; responseLabel: string; responseValue: string; received: string; receivedHeadline: string; receivedBody: string };
    dossier: { eyebrow: string; titlePart1: string; titleGold: string; lede: string; received: string; receivedHeadline: string; receivedBody: string };
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
    allProgrammes: string;
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
    consentNewsletter: string;
    consentDossier: string;
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
    applyNext: "Apply for the founding cohort",
    requestConsult: "Request a private consultation →",
    applyForCohort: "Apply for the founding cohort",
    submitEnquiry: "Submit enquiry",
    readProgramme: "Read the programme",
    allProgrammes: "All programmes",
    allHosts: "All hosts and faculty",
    allInsights: "All insights",
    subscribe: "Subscribe",
    send: "Send →",
    sending: "Sending…",
    continue: "Continue →",
    previous: "← Previous",
    submitApplication: "Submit application",
    requestDossier: "Request the programme dossier →",
  },
  dispatch: {
    label: "Dispatch",
    items: [
      "Swiss Business Access Immersion · Zurich · 2026 founding cohort · dates to be announced",
      "Private Swiss Banking & Wealth Intensive · Geneva · 2026 founding cohort · dates to be announced",
      "Swiss Finance Week · Zurich · 2026 founding cohort · dates to be announced",
      "Request the programme dossier to be notified first",
      "Twelve participants per cohort · hosted by working practitioners",
      "Applications reviewed individually · we reply within five business days",
    ],
  },
  hero: {
    eyebrow: "Swiss executive immersions · Applications reviewed individually",
    line1: "Inside Swiss",
    line2: "business, finance,",
    line3: "and leadership.",
    subline:
      "Small-group executive immersions for entrepreneurs, principals, and international professionals — practical access to Swiss business culture, finance, and the people behind them.",
    subjects: "Executive immersions · Swiss access · Private office",
    statusReviewing: "2026 founding cohorts · dates to be announced",
    locationLine: "Zurich · Geneva · selected Swiss venues",
    scrollToProgrammes: "Scroll to programmes ↓",
  },
  posture: {
    eyebrow: "How the platform works",
    sub: "Swiss executive immersions · practitioner hosts · private introductions",
    pillars: [
      { label: "Reviewed individually", line: "No open enrolment, ever." },
      { label: "Twelve participants", line: "A hard cap, not a target." },
      { label: "Practitioner hosts", line: "Listed before you apply." },
    ],
  },
  programmesBlock: {
    eyebrow: "The flagship executive intensives",
    headline: "Three Swiss intensives.",
    headlineGold: "Twelve places each.",
  },
  programmeMeta: {
    access: {
      name: "Swiss Business Access Immersion",
      tagline:
        "Five days inside Swiss business — SME visits, boardrooms, hospitality, and operating culture you cannot read about elsewhere.",
      durationLabel: "5 days · in residence",
      city: "Zurich",
    },
    banking: {
      name: "Private Swiss Banking & Wealth Intensive",
      tagline:
        "Four days inside Swiss private banking — chatham-house rooms with named practitioners, behind closed doors.",
      durationLabel: "4 days · chatham-house",
      city: "Geneva",
    },
    topic: {
      name: "Swiss Finance Week",
      tagline:
        "Five themed days inside one Swiss finance question — small working sessions led by practitioners.",
      durationLabel: "5 days · themed",
      city: "Zurich",
    },
  },
  hostsStrip: {
    eyebrow: "Hosts & faculty",
    headline: "Listed before you apply.",
    headlineGold: "Present all week.",
    cta: "All hosts and faculty",
  },
  editorial: {
    eyebrow: "The settings",
    headline: "Editorial. Restrained.",
    headlineGold: "Swiss.",
    side: "Working venues. Twelve participants. Discretion by default.",
    tiles: [
      { label: "Zurich", caption: "In residence" },
      { label: "Geneva", caption: "Chatham-house" },
      { label: "Alpine retreat", caption: "Off the record" },
      { label: "Private salons", caption: "Twelve at the table" },
    ],
  },
  cohorts: {
    eyebrow: "2026 founding cohorts",
    headline: "Three programmes.",
    headlineGold: "Dates to be announced.",
    note: "Dates are published only once venues and hosts are contracted. Request the programme dossier and we will write to you first.",
    statusAnnouncing: "To be announced",
    statusScheduled: "Scheduled",
    statusClosed: "Closed",
  },
  alumni: {
    eyebrow: "The network",
    intro: "",
    voicesEyebrow: "Participant accounts",
    voicesHeadline: "What participants say.",
    voicesHeadlineGold: "Published only with consent.",
    pastEyebrow: "Delivered cohorts",
    pastHeadline: "A record of what has run.",
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
    dispatchHelp: "Roughly two pieces a month. Unsubscribe at any time.",
    dispatchOk:
      "Thank you. Please open the email we have just sent and follow the confirmation link — we will not send you anything until you do.",
    emailPlaceholder: "Your email",
  },
  privateBanner: {
    eyebrow: "For institutional partners",
    headline: "Commission a",
    headlineGold: "private cohort.",
    response: "We reply within five business days.",
  },
  ctaBlock: {
    eyebrow: "Ready to apply",
    line1: "Twelve places.",
    line2: "Each one considered.",
  },
  trust: {
    eyebrow: "The platform in numbers",
    stats: [
      { value: "33", label: "Years the founder spent in Swiss private banking" },
      { value: "3", label: "Flagship programmes" },
      { value: "12", label: "Participants per cohort, capped" },
      { value: "12", label: "Peer-reviewed publications" },
    ],
  },
  enrich: {
    programmesUnitedEyebrow: "What unites them",
    programmesUnitedHeadline: "Three programmes. One standard.",
    programmesUnitedItems: [
      {
        title: "Hosted, not lectured",
        body: "Every session is led by a working practitioner. We do not book stage speakers; we invite people who can answer the follow-up question.",
      },
      {
        title: "Twelve, not twenty",
        body: "Cohorts are sized so that every participant speaks each day and every introduction is deliberate. The economics of that choice are ours to absorb.",
      },
      {
        title: "Application, not enrolment",
        body: "We read for how specific your objective is and what you will contribute — not for credentials and not for budget.",
      },
    ],
    hostsCriteriaEyebrow: "What we look for in a host",
    hostsCriteriaHeadline: "Practitioner judgement, not platform celebrity.",
    hostsCriteriaItems: [
      {
        title: "Operating record",
        body: "Hosts have done the work. We invite practitioners with a verifiable record in the area they lead on.",
      },
      {
        title: "Comfortable off the record",
        body: "People who are at their best on a stage are rarely at their best in a closed session. We look for practitioners who save the useful material for the latter.",
      },
      {
        title: "Time for the cohort",
        body: "Hosts commit to the full programme rather than a keynote and a flight home. The group is small precisely so the host can stay in it.",
      },
    ],
    alumniNumbersEyebrow: "How the network works",
    alumniNumbersHeadline: "Small, and kept warm deliberately.",
    alumniStats: [
      { value: "12", label: "Participants per cohort, capped" },
      { value: "2", label: "Cities: Zurich and Geneva" },
      { value: "12", label: "Months of follow-on access" },
      { value: "1", label: "Annual reconvening" },
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
        body: "Why we run programmes the way we do — the case for twelve, the chatham-house rule, and how applications are read.",
      },
      {
        name: "Dispatches",
        body: "Short notes written after a cohort: what was said, what was not, and what participants went back to a month later.",
      },
    ],
    aboutPrinciplesEyebrow: "Operating principles",
    aboutPrinciplesHeadline: "Five rules we hold to.",
    aboutPrinciplesItems: [
      {
        title: "Selection over volume",
        body: "We would rather run twelve places filled well than twenty filled quickly. When a cohort is not right, we move it rather than pad it.",
      },
      {
        title: "Practitioner over performer",
        body: "Hosts attend in their personal capacity, not as part of a marketing roster, and they stay for the whole programme.",
      },
      {
        title: "Discretion as default",
        body: "Sessions are not recorded, participant names are not published without written consent, and press coverage is the exception.",
      },
      {
        title: "Specificity over ceremony",
        body: "Application questions ask for detail. Programme structure commits to phases rather than slogans. Fees are published, not negotiated.",
      },
      {
        title: "Clear scope, plainly stated",
        body: "Vision Goal sells access, introductions, and Swiss business know-how. It is not a course and not a consulting engagement, and it holds no FINMA authorisation. Regulated work, where it is needed, is done by the licensed practitioners you meet.",
      },
    ],
  },
  pages: {
    programmes: {
      eyebrow: "The flagship intensives",
      titlePart1: "Three programmes.",
      titleGold: "Twelve places each.",
      lede:
        "Each programme is small, led by practitioners who still do the work, and built on the same three commitments: restraint over volume, evidence over claim, judgement over performance.",
    },
    hosts: {
      eyebrow: "Hosts & faculty",
      titlePart1: "Listed before you apply.",
      titleGold: "Present all week.",
      lede:
        "Hosts and faculty appear here as practitioners, attending in their personal capacity. We do not list anyone we have not booked.",
      principleEyebrow: "How this list is kept",
      principleBody:
        "We do not list every speaker who has ever appeared. The founding curator is here; programme hosts are confirmed cycle by cycle. Profiles marked Sample are placeholder entries and will be replaced with confirmed hosts before the founding cohort opens.",
    },
    alumni: {
      eyebrow: "Network",
      titlePart1: "Who you will",
      titleGold: "be sitting with.",
      lede:
        "Participants are identified only with written consent. The network is small on purpose; its value is in who is in it, not how many.",
      postureEyebrow: "How the network works",
      postureHeadline: "Selectivity is the point.",
      postureBody:
        "Members can request an introduction to another participant, and the curation team arranges each one individually. Quarterly host dispatches and an annual reconvening keep the network warm without making it loud.",
      noVoicesHeadline: "No participant accounts published yet.",
      noVoicesBody:
        "The 2026 founding cohorts have not yet run. We publish accounts of the programmes only once participants have given them and cleared the wording in writing, so there is nothing to show here — and nothing invented in its place.",
      noCohortsHeadline: "No cohorts delivered yet.",
      noCohortsBody:
        "This page will list every cohort as it is delivered: dates, composition, and the hosts who led it. It stays empty until the first one has run.",
    },
    insightsIndex: {
      eyebrow: "Insights",
      titlePart1: "Practitioner notes.",
      titleGold: "Swiss perspective.",
      lede:
        "Considered notes on Swiss access, private banking, markets, and how these programmes are built. Roughly two pieces a month; never promotional.",
    },
    about: {
      eyebrow: "About the platform",
      titlePart1: "Swiss executive",
      titleGold: "access, in person.",
      lede:
        "Vision Goal builds small Swiss executive programmes for entrepreneurs, executives, and international professionals who want practical access to Swiss finance, business culture, and the people inside them.",
      statement:
        "Vision Goal runs three flagship intensives — a Swiss Business Access Immersion in Zurich, a Private Swiss Banking & Wealth Intensive in Geneva, and an annual Swiss Finance Week on one current question — alongside a Private Office for individual principals who want an introduction rather than a place in a cohort.",
      statement2:
        "The platform is deliberately small. What you are buying is access, judgement, and Swiss business know-how that is difficult to assemble any other way. It is not a course, not a consulting engagement, and not a regulated financial service.",
      standardsEyebrow: "Standards & ethics",
      standardsHeadline: "How we operate.",
      pressEyebrow: "Press & recognition",
      pressHeadline: "Selected mentions.",
      curatorEyebrow: "A note from the curator",
      curatorNote:
        "The platform exists for what happens when twelve people sit down for four days, off the record, with a host who has nothing to sell them. Everything else — the website, the dispatch, the writing — is in service of that. Keep those days honest and the rest takes care of itself.",
      curatorAttribution: "Vision Goal · Pfäffikon SZ",
    },
    contact: {
      eyebrow: "Contact",
      titlePart1: "A short note.",
      titleGold: "Considered reply.",
      lede:
        "For applications please use the application form, and for private cohort enquiries the institutional enquiry form. For everything else, this page.",
      officeEyebrow: "Registered office",
      emailLabel: "Email",
      phoneLabel: "Phone",
      responseLabel: "Response time",
      responseValue: "Within five business days",
      received: "Message received",
      receivedHeadline: "Thank you. Your message has reached us.",
      receivedBody:
        "We have sent a confirmation to the address you gave and will reply within five business days.",
    },
    apply: {
      eyebrow: "Apply for the founding cohort",
      titlePart1: "A short application.",
      titleGold: "Considered review.",
      lede:
        "Every place is reviewed individually. The application is short on purpose — we read for specificity, not length — and we reply within five business days, whichever way the answer goes.",
      steps: ["Identity", "Programme", "Why now", "Referees", "Confirmation"],
      stepLegend: { identity: "Identity", programme: "Programme", whyNow: "Why now", referees: "Referees" },
      received: "Application received",
      receivedHeadline: "Thank you. We will be in touch.",
      receivedBody:
        "The curation team reads every application in full and will reply within five business days. We have sent a confirmation to the address you gave, and we will not contact your referees without asking you first in writing.",
    },
    consult: {
      eyebrow: "Private consultation",
      title: "Confirm fit before you apply.",
      lede:
        "A short, confidential call with the curation team to confirm which programme suits you and answer the questions an application form cannot. We reply within five business days.",
      received: "Request received",
      receivedHeadline: "Thank you. We will be in touch.",
      receivedBody:
        "We have sent a confirmation to the address you gave. A member of the curation team will write within five business days to arrange the call.",
    },
    cohort: {
      eyebrow: "For institutional partners",
      titlePart1: "Commission a",
      titleGold: "private cohort.",
      lede:
        "Closed cohorts and themed intensives built for institutional partners. We deliver in EN / DE / FR, in formats from three days to a full week. We reply within five business days.",
      received: "Enquiry received",
      receivedHeadline: "Thank you. We will be in touch.",
      receivedBody:
        "We have sent a confirmation to the address you gave. A member of the curation team will write within five business days to discuss format, timing, and audience.",
    },
    dossier: {
      eyebrow: "Programme dossier",
      titlePart1: "Request the",
      titleGold: "programme dossier.",
      lede:
        "The dossier sets out each programme in full: structure, hosts, fees, what is included, and who the week is built for. We will also write to you first when the 2026 founding cohort dates are confirmed.",
      received: "Request received",
      receivedHeadline: "Thank you. The dossier is on its way.",
      receivedBody:
        "We will send the dossier within five business days, and we will write again as soon as the 2026 founding cohort dates are confirmed. You can unsubscribe from those notices at any time.",
    },
    legalSidebar: "Legal",
    programmeDetail: {
      outcomesEyebrow: "What you leave with",
      outcomesHeadline: "Three deliverables — not slogans.",
      architectureEyebrow: "Programme architecture",
      architectureHeadline: "How the programme runs.",
      cohortsEyebrow: "Next cohorts",
      cohortsHeadline: "When it runs.",
      hostsEyebrow: "Hosts & faculty for this programme",
      hostsHeadlinePart1: "Listed here before you apply.",
      hostsHeadlineGold: "Present all week.",
      formatEyebrow: "Format",
      formatHeadline: "How it operates.",
      investmentEyebrow: "Investment",
      investmentSub: "Programme fee · per participant",
      includesLabel: "Includes",
      excludesLabel: "Not included",
      postureEyebrow: "Who applies",
      postureHeadline: "Who the programme is for.",
      forLabel: "For",
      notForLabel: "Not for",
      faqEyebrow: "Frequently asked",
      faqHeadline: "Questions, answered.",
      noCohortsNote:
        "Dates for this programme have not yet been confirmed. Request the programme dossier and we will write to you as soon as they are.",
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
    allProgrammes: "All three programmes",
    notSure: "I am not sure — please advise",
    preferredCohort: "Preferred timing",
    preferredCohortHint:
      "2026 dates are not yet confirmed. Tell us which part of the year suits you and we will match you to a cohort.",
    objective: "What do you want from the week?",
    objectiveHint: "Be specific — we read this closely. Two to four sentences.",
    contribution: "What will you contribute?",
    contributionHint: "Twelve senior people are a resource before they are an audience. Two to four sentences.",
    refereeIntro:
      "Two referees who can speak to how you work with others. We will not contact them without asking you first in writing.",
    refereeName: "Referee — name",
    refereeEmail: "Referee — email",
    consentApply:
      "I confirm this application is made in confidence, and I consent to Vision Goal GmbH processing the information in it under the application terms and the privacy policy.",
    consentConsult:
      "I consent to Vision Goal GmbH processing this request under the privacy policy. The call is confidential by default.",
    consentCohort:
      "I confirm I am authorised to make this enquiry on behalf of my institution, and I consent to Vision Goal GmbH processing it under the privacy policy.",
    consentContact:
      "I consent to Vision Goal GmbH processing this message under the privacy policy in order to reply to me.",
    consentNewsletter:
      "I consent to Vision Goal GmbH sending me the dispatch by email and to processing my address under the privacy policy. I can unsubscribe at any time.",
    consentDossier:
      "I consent to Vision Goal GmbH sending me the programme dossier and cohort-date announcements, and to processing my details under the privacy policy.",
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
    cohortPlaceholder: "e.g. spring 2026",
    discussTopic: "What you would like to discuss",
    discussHint: "Three to five sentences are enough. Be as specific as you can.",
  },
  footer: {
    blurb:
      "A Swiss platform for small executive intensives and practical business access — three flagship programmes, twelve participants each, led by working practitioners.",
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
    copyright: "© 2026 Vision Goal GmbH · Pfäffikon SZ, Switzerland · CHE-488.435.445",
    contactEyebrow: "Direct line",
    contactPhoneLabel: "Phone",
    contactEmailLabel: "Email",
    contactResponseLabel: "Response window",
    contactResponseValue: "Within five business days, on every enquiry",
    contactPhone: "+41 78 728 09 33",
    contactEmail: "info@visiongoal.ch",
  },
};

const de: Dict = {
  meta: {
    title: "Vision Goal — Schweizer Zugang, auf Bewerbung",
    description:
      "Eine Schweizer Premium-Plattform für Intensivprogramme in kleinen Kohorten und praktischen Geschäftszugang — drei Flaggschiff-Programme, geführt von tätigen Praktikern, auf Bewerbung.",
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
    applyNext: "Für die Gründungskohorte bewerben",
    requestConsult: "Private Beratung anfragen →",
    applyForCohort: "Für die Gründungskohorte bewerben",
    submitEnquiry: "Anfrage senden",
    readProgramme: "Programm lesen",
    allProgrammes: "Alle Programme",
    allHosts: "Alle Gastgeber und Fakultät",
    allInsights: "Alle Einblicke",
    subscribe: "Abonnieren",
    send: "Senden →",
    sending: "Wird gesendet …",
    continue: "Weiter →",
    previous: "← Zurück",
    submitApplication: "Bewerbung absenden",
    requestDossier: "Programmdossier anfordern →",
  },
  dispatch: {
    label: "Dispatch",
    items: [
      "Swiss Business Access Immersion · Zürich · Gründungskohorte 2026 · Termine werden bekannt gegeben",
      "Private Swiss Banking & Wealth Intensive · Genf · Gründungskohorte 2026 · Termine werden bekannt gegeben",
      "Swiss Finance Week · Zürich · Gründungskohorte 2026 · Termine werden bekannt gegeben",
      "Programmdossier anfordern und als Erste informiert werden",
      "Zwölf Teilnehmende pro Kohorte · geführt von tätigen Praktikern",
      "Jede Bewerbung wird einzeln geprüft · Antwort innerhalb von fünf Arbeitstagen",
    ],
  },
  hero: {
    eyebrow: "Schweizer Executive-Immersionen · Jede Bewerbung wird einzeln geprüft",
    line1: "Schweizer Wirtschaft,",
    line2: "Finanzen und",
    line3: "Führung — von innen.",
    subline:
      "Executive-Immersionen in kleinen Gruppen für Unternehmer, Principals und internationale Fachleute — praktischer Zugang zur Schweizer Geschäftskultur, zum Finanzplatz und zu den Menschen dahinter.",
    subjects: "Executive-Immersionen · Schweizer Zugang · Private Office",
    statusReviewing: "Gründungskohorten 2026 · Termine werden bekannt gegeben",
    locationLine: "Zürich · Genf · ausgewählte Schweizer Veranstaltungsorte",
    scrollToProgrammes: "Zu den Programmen ↓",
  },
  posture: {
    eyebrow: "So funktioniert die Plattform",
    sub: "Schweizer Executive-Immersionen · Praktiker als Gastgeber · persönliche Vorstellungen",
    pillars: [
      { label: "Einzeln geprüft", line: "Keine offene Anmeldung, nie." },
      { label: "Zwölf Teilnehmende", line: "Eine harte Grenze, kein Zielwert." },
      { label: "Praktiker als Gastgeber", line: "Genannt, bevor Sie sich bewerben." },
    ],
  },
  programmesBlock: {
    eyebrow: "Die Flaggschiff-Intensivprogramme",
    headline: "Drei Schweizer Intensivprogramme.",
    headlineGold: "Je zwölf Plätze.",
  },
  programmeMeta: {
    access: {
      name: "Swiss Business Access Immersion",
      tagline:
        "Fünf Tage im Innern der Schweizer Wirtschaft — KMU-Besuche, Boardrooms, Gastfreundschaft und eine Betriebskultur, über die man nirgends nachlesen kann.",
      durationLabel: "5 Tage · vor Ort",
      city: "Zürich",
    },
    banking: {
      name: "Private Swiss Banking & Wealth Intensive",
      tagline:
        "Vier Tage im Schweizer Privatbanking — Chatham-House-Runden mit namentlich genannten Praktikern, hinter verschlossenen Türen.",
      durationLabel: "4 Tage · Chatham House",
      city: "Genf",
    },
    topic: {
      name: "Swiss Finance Week",
      tagline:
        "Fünf thematische Tage zu einer einzigen Schweizer Finanzfrage — kleine Arbeitssitzungen unter der Leitung von Praktikern.",
      durationLabel: "5 Tage · thematisch",
      city: "Zürich",
    },
  },
  hostsStrip: {
    eyebrow: "Gastgeber & Fakultät",
    headline: "Genannt, bevor Sie sich bewerben.",
    headlineGold: "Die ganze Woche dabei.",
    cta: "Alle Gastgeber und Fakultät",
  },
  editorial: {
    eyebrow: "Die Orte",
    headline: "Redaktionell. Zurückhaltend.",
    headlineGold: "Schweizerisch.",
    side: "Arbeitsorte. Zwölf Teilnehmende. Diskretion als Standard.",
    tiles: [
      { label: "Zürich", caption: "Vor Ort" },
      { label: "Genf", caption: "Chatham House" },
      { label: "Alpiner Rückzugsort", caption: "Off the Record" },
      { label: "Private Salons", caption: "Zwölf am Tisch" },
    ],
  },
  cohorts: {
    eyebrow: "Gründungskohorten 2026",
    headline: "Drei Programme.",
    headlineGold: "Termine folgen.",
    note: "Termine veröffentlichen wir erst, wenn Veranstaltungsorte und Gastgeber vertraglich fixiert sind. Fordern Sie das Programmdossier an, und wir schreiben Ihnen zuerst.",
    statusAnnouncing: "Wird bekannt gegeben",
    statusScheduled: "Terminiert",
    statusClosed: "Geschlossen",
  },
  alumni: {
    eyebrow: "Das Netzwerk",
    intro: "",
    voicesEyebrow: "Berichte von Teilnehmenden",
    voicesHeadline: "Was Teilnehmende sagen.",
    voicesHeadlineGold: "Nur mit Einwilligung veröffentlicht.",
    pastEyebrow: "Durchgeführte Kohorten",
    pastHeadline: "Eine Aufzeichnung dessen, was stattgefunden hat.",
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
    dispatchHelp: "Etwa zwei Beiträge pro Monat. Jederzeit abbestellbar.",
    dispatchOk:
      "Vielen Dank. Bitte öffnen Sie die soeben versandte E-Mail und folgen Sie dem Bestätigungslink — vorher senden wir Ihnen nichts zu.",
    emailPlaceholder: "Ihre E-Mail",
  },
  privateBanner: {
    eyebrow: "Für institutionelle Partner",
    headline: "Eine private",
    headlineGold: "Kohorte beauftragen.",
    response: "Wir antworten innerhalb von fünf Arbeitstagen.",
  },
  ctaBlock: {
    eyebrow: "Bereit zur Bewerbung",
    line1: "Zwölf Plätze.",
    line2: "Jeder einzeln geprüft.",
  },
  trust: {
    eyebrow: "Die Plattform in Zahlen",
    stats: [
      { value: "33", label: "Jahre des Gründers im Schweizer Privatbanking" },
      { value: "3", label: "Flaggschiff-Programme" },
      { value: "12", label: "Teilnehmende pro Kohorte, begrenzt" },
      { value: "12", label: "Peer-reviewte Publikationen" },
    ],
  },
  enrich: {
    programmesUnitedEyebrow: "Was sie verbindet",
    programmesUnitedHeadline: "Drei Programme. Ein Standard.",
    programmesUnitedItems: [
      {
        title: "Geführt, nicht vorgetragen",
        body: "Jede Sitzung wird von einem tätigen Praktiker geleitet. Wir buchen keine Bühnenredner, sondern laden Menschen ein, die auch die Nachfrage beantworten können.",
      },
      {
        title: "Zwölf, nicht zwanzig",
        body: "Die Kohorten sind so bemessen, dass jede Person täglich zu Wort kommt und jede Vorstellung bewusst erfolgt. Die wirtschaftlichen Folgen dieser Entscheidung tragen wir.",
      },
      {
        title: "Bewerbung, keine Anmeldung",
        body: "Wir lesen, wie konkret Ihr Ziel ist und was Sie beitragen werden — nicht Titel und nicht Budget.",
      },
    ],
    hostsCriteriaEyebrow: "Was wir bei Gastgebern suchen",
    hostsCriteriaHeadline: "Urteilsvermögen aus der Praxis, keine Bühnenprominenz.",
    hostsCriteriaItems: [
      {
        title: "Operative Bilanz",
        body: "Gastgeber haben die Arbeit selbst gemacht. Wir laden Praktiker mit nachprüfbarer Erfahrung in dem Bereich ein, den sie verantworten.",
      },
      {
        title: "Sicher im vertraulichen Rahmen",
        body: "Wer auf der Bühne glänzt, ist in einer geschlossenen Runde selten am stärksten. Wir suchen Praktiker, die das Nützliche für die geschlossene Runde aufsparen.",
      },
      {
        title: "Zeit für die Kohorte",
        body: "Gastgeber verpflichten sich auf das gesamte Programm, nicht auf eine Keynote und den Heimflug. Die Gruppe ist genau darum klein, damit der Gastgeber dabeibleiben kann.",
      },
    ],
    alumniNumbersEyebrow: "Wie das Netzwerk funktioniert",
    alumniNumbersHeadline: "Klein und bewusst warm gehalten.",
    alumniStats: [
      { value: "12", label: "Teilnehmende pro Kohorte, begrenzt" },
      { value: "2", label: "Städte: Zürich und Genf" },
      { value: "12", label: "Monate weiterführender Zugang" },
      { value: "1", label: "Jährliches Wiedersehen" },
    ],
    insightsCategoriesEyebrow: "Redaktionelle Kategorien",
    insightsCategoriesHeadline: "Fünf Rubriken, in denen wir publizieren.",
    insightsCategoriesItems: [
      {
        name: "Swiss Access",
        body: "Notizen zur Betriebskultur, zur Bewertung von KMU und zu den Brücken, die zwischen der Schweiz und dem Rest der Welt tatsächlich tragen.",
      },
      {
        name: "Private Banking",
        body: "Dispatches auf Praktikerniveau zum Schweizer Privatbanking — Diskretion, Regulierung und die Fragen, die in der geschlossenen Runde bleiben.",
      },
      {
        name: "Markets",
        body: "Makro-Einordnungen und Kommentare zum Schweizer Kapitalmarkt, geschrieben von Praktikern, die selbst im Thema stehen.",
      },
      {
        name: "Methodology",
        body: "Warum wir unsere Programme so führen, wie wir sie führen — die Begründung für zwölf, die Chatham-House-Regel und wie Bewerbungen gelesen werden.",
      },
      {
        name: "Dispatches",
        body: "Kurze Notizen nach einer Kohorte: was gesagt wurde, was nicht, und worauf die Teilnehmenden einen Monat später zurückkamen.",
      },
    ],
    aboutPrinciplesEyebrow: "Operative Grundsätze",
    aboutPrinciplesHeadline: "Fünf Regeln, an denen wir festhalten.",
    aboutPrinciplesItems: [
      {
        title: "Auswahl vor Volumen",
        body: "Lieber zwölf gut besetzte Plätze als zwanzig schnell gefüllte. Wenn eine Kohorte nicht stimmig ist, verschieben wir sie, anstatt sie aufzufüllen.",
      },
      {
        title: "Praktiker vor Performer",
        body: "Gastgeber sind in persönlicher Funktion anwesend, nicht als Teil einer Marketingliste, und sie bleiben für das gesamte Programm.",
      },
      {
        title: "Diskretion als Standard",
        body: "Sitzungen werden nicht aufgezeichnet, Teilnehmernamen nicht ohne schriftliche Einwilligung veröffentlicht, und Presseberichte sind die Ausnahme.",
      },
      {
        title: "Konkretes vor Zeremonie",
        body: "Die Bewerbungsfragen verlangen Details. Der Programmaufbau verpflichtet sich auf Phasen statt auf Slogans. Gebühren werden ausgewiesen, nicht verhandelt.",
      },
      {
        title: "Klarer Leistungsumfang, offen benannt",
        body: "Vision Goal verkauft Zugang, Vorstellungen und Schweizer Geschäftswissen. Es ist kein Kurs und kein Beratungsmandat, und es besteht keine FINMA-Zulassung. Regulierte Tätigkeiten übernehmen, wo sie nötig sind, die lizenzierten Praktiker, die Sie treffen.",
      },
    ],
  },
  pages: {
    programmes: {
      eyebrow: "Die Flaggschiff-Intensivprogramme",
      titlePart1: "Drei Programme.",
      titleGold: "Je zwölf Plätze.",
      lede:
        "Jedes Programm ist klein, wird von Praktikern geleitet, die die Arbeit noch selbst machen, und beruht auf denselben drei Verpflichtungen: Zurückhaltung statt Volumen, Belege statt Behauptungen, Urteilsvermögen statt Inszenierung.",
    },
    hosts: {
      eyebrow: "Gastgeber & Fakultät",
      titlePart1: "Genannt, bevor Sie sich bewerben.",
      titleGold: "Die ganze Woche dabei.",
      lede:
        "Gastgeber und Fakultät erscheinen hier als Praktiker und nehmen in persönlicher Funktion teil. Wir listen niemanden, den wir nicht gebucht haben.",
      principleEyebrow: "Wie diese Liste geführt wird",
      principleBody:
        "Wir listen nicht jeden Sprecher, der jemals aufgetreten ist. Der Gründungskurator steht hier; die Gastgeber der Programme werden Zyklus für Zyklus bestätigt. Als Beispiel markierte Profile sind Platzhalter und werden vor Öffnung der Gründungskohorte durch bestätigte Gastgeber ersetzt.",
    },
    alumni: {
      eyebrow: "Netzwerk",
      titlePart1: "Mit wem Sie",
      titleGold: "am Tisch sitzen.",
      lede:
        "Teilnehmende werden nur mit schriftlicher Einwilligung namentlich genannt. Das Netzwerk ist absichtlich klein; sein Wert liegt darin, wer dabei ist, nicht wie viele.",
      postureEyebrow: "Wie das Netzwerk funktioniert",
      postureHeadline: "Die Selektivität ist der Punkt.",
      postureBody:
        "Mitglieder können um eine Vorstellung zu anderen Teilnehmenden bitten, und das Kurationsteam vermittelt jede einzeln. Vierteljährliche Dispatches der Gastgeber und ein jährliches Wiedersehen halten das Netzwerk warm, ohne es laut zu machen.",
      noVoicesHeadline: "Noch keine Teilnehmerberichte veröffentlicht.",
      noVoicesBody:
        "Die Gründungskohorten 2026 haben noch nicht stattgefunden. Wir veröffentlichen Berichte über die Programme erst, wenn Teilnehmende sie abgegeben und den Wortlaut schriftlich freigegeben haben — hier ist also nichts zu zeigen, und nichts an seiner Stelle erfunden.",
      noCohortsHeadline: "Noch keine Kohorte durchgeführt.",
      noCohortsBody:
        "Diese Seite listet jede Kohorte, sobald sie durchgeführt ist: Termine, Zusammensetzung und die Gastgeber, die sie geleitet haben. Bis zur ersten bleibt sie leer.",
    },
    insightsIndex: {
      eyebrow: "Einblicke",
      titlePart1: "Notizen aus der Praxis.",
      titleGold: "Schweizer Perspektive.",
      lede:
        "Überlegte Notizen zu Schweizer Zugang, Privatbanking, Märkten und dazu, wie diese Programme gebaut sind. Etwa zwei Beiträge pro Monat; niemals werblich.",
    },
    about: {
      eyebrow: "Über die Plattform",
      titlePart1: "Schweizer Executive-Zugang.",
      titleGold: "Persönlich.",
      lede:
        "Vision Goal baut kleine Schweizer Executive-Programme für Unternehmer, Führungskräfte und internationale Fachleute, die praktischen Zugang zum Schweizer Finanzwesen, zur Geschäftskultur und zu den Menschen darin suchen.",
      statement:
        "Vision Goal führt drei Flaggschiff-Intensivprogramme — eine Swiss Business Access Immersion in Zürich, ein Private Swiss Banking & Wealth Intensive in Genf und eine jährliche Swiss Finance Week zu einer aktuellen Frage — ergänzt durch ein Private Office für einzelne Principals, die eine Vorstellung statt eines Kohortenplatzes suchen.",
      statement2:
        "Die Plattform ist bewusst klein. Was Sie kaufen, sind Zugang, Urteilsvermögen und Schweizer Geschäftswissen, das anders kaum zusammenzutragen ist. Es ist kein Kurs, kein Beratungsmandat und keine regulierte Finanzdienstleistung.",
      standardsEyebrow: "Standards & Ethik",
      standardsHeadline: "Wie wir arbeiten.",
      pressEyebrow: "Presse & Auszeichnungen",
      pressHeadline: "Ausgewählte Erwähnungen.",
      curatorEyebrow: "Eine Notiz des Kurators",
      curatorNote:
        "Die Plattform existiert für das, was geschieht, wenn zwölf Menschen sich vier Tage lang vertraulich mit einem Gastgeber zusammensetzen, der ihnen nichts zu verkaufen hat. Alles andere — die Website, der Dispatch, die Texte — steht im Dienst dieser Tage. Hält man sie ehrlich, ergibt sich der Rest von selbst.",
      curatorAttribution: "Vision Goal · Pfäffikon SZ",
    },
    contact: {
      eyebrow: "Kontakt",
      titlePart1: "Eine kurze Nachricht.",
      titleGold: "Überlegte Antwort.",
      lede:
        "Für Bewerbungen nutzen Sie bitte das Bewerbungsformular, für Anfragen zu privaten Kohorten das institutionelle Anfrageformular. Für alles andere diese Seite.",
      officeEyebrow: "Sitz der Gesellschaft",
      emailLabel: "E-Mail",
      phoneLabel: "Telefon",
      responseLabel: "Antwortzeit",
      responseValue: "Innerhalb von fünf Arbeitstagen",
      received: "Nachricht eingegangen",
      receivedHeadline: "Vielen Dank. Ihre Nachricht ist bei uns angekommen.",
      receivedBody:
        "Wir haben eine Bestätigung an die angegebene Adresse gesendet und antworten innerhalb von fünf Arbeitstagen.",
    },
    apply: {
      eyebrow: "Für die Gründungskohorte bewerben",
      titlePart1: "Eine kurze Bewerbung.",
      titleGold: "Sorgfältige Prüfung.",
      lede:
        "Jeder Platz wird einzeln geprüft. Die Bewerbung ist absichtlich kurz — wir lesen auf Konkretheit, nicht auf Länge — und wir antworten innerhalb von fünf Arbeitstagen, wie die Antwort auch ausfällt.",
      steps: ["Identität", "Programm", "Warum jetzt", "Referenzen", "Bestätigung"],
      stepLegend: { identity: "Identität", programme: "Programm", whyNow: "Warum jetzt", referees: "Referenzen" },
      received: "Bewerbung eingegangen",
      receivedHeadline: "Vielen Dank. Wir melden uns.",
      receivedBody:
        "Das Kurationsteam liest jede Bewerbung vollständig und antwortet innerhalb von fünf Arbeitstagen. Wir haben eine Bestätigung an die angegebene Adresse gesendet und kontaktieren Ihre Referenzen nicht, ohne Sie vorher schriftlich zu fragen.",
    },
    consult: {
      eyebrow: "Private Beratung",
      title: "Passung klären, bevor Sie sich bewerben.",
      lede:
        "Ein kurzes, vertrauliches Gespräch mit dem Kurationsteam, um zu klären, welches Programm zu Ihnen passt, und die Fragen zu beantworten, die ein Formular nicht beantworten kann. Wir antworten innerhalb von fünf Arbeitstagen.",
      received: "Anfrage eingegangen",
      receivedHeadline: "Vielen Dank. Wir melden uns.",
      receivedBody:
        "Wir haben eine Bestätigung an die angegebene Adresse gesendet. Ein Mitglied des Kurationsteams schreibt Ihnen innerhalb von fünf Arbeitstagen, um das Gespräch zu vereinbaren.",
    },
    cohort: {
      eyebrow: "Für institutionelle Partner",
      titlePart1: "Eine private",
      titleGold: "Kohorte beauftragen.",
      lede:
        "Geschlossene Kohorten und thematische Intensivprogramme für institutionelle Partner. Wir liefern auf EN / DE / FR, in Formaten von drei Tagen bis zur ganzen Woche. Wir antworten innerhalb von fünf Arbeitstagen.",
      received: "Anfrage eingegangen",
      receivedHeadline: "Vielen Dank. Wir melden uns.",
      receivedBody:
        "Wir haben eine Bestätigung an die angegebene Adresse gesendet. Ein Mitglied des Kurationsteams schreibt Ihnen innerhalb von fünf Arbeitstagen, um Format, Termine und Zielgruppe zu besprechen.",
    },
    dossier: {
      eyebrow: "Programmdossier",
      titlePart1: "Das Programmdossier",
      titleGold: "anfordern.",
      lede:
        "Das Dossier stellt jedes Programm vollständig dar: Aufbau, Gastgeber, Gebühren, was enthalten ist und für wen die Woche gebaut ist. Ausserdem schreiben wir Ihnen zuerst, sobald die Termine der Gründungskohorten 2026 feststehen.",
      received: "Anfrage eingegangen",
      receivedHeadline: "Vielen Dank. Das Dossier ist auf dem Weg.",
      receivedBody:
        "Wir senden das Dossier innerhalb von fünf Arbeitstagen und schreiben erneut, sobald die Termine der Gründungskohorten 2026 feststehen. Sie können diese Benachrichtigungen jederzeit abbestellen.",
    },
    legalSidebar: "Rechtliches",
    programmeDetail: {
      outcomesEyebrow: "Was Sie mitnehmen",
      outcomesHeadline: "Drei Ergebnisse — keine Slogans.",
      architectureEyebrow: "Programmaufbau",
      architectureHeadline: "Wie das Programm abläuft.",
      cohortsEyebrow: "Nächste Kohorten",
      cohortsHeadline: "Wann es stattfindet.",
      hostsEyebrow: "Gastgeber & Fakultät dieses Programms",
      hostsHeadlinePart1: "Vor der Bewerbung einsehbar.",
      hostsHeadlineGold: "Die ganze Woche anwesend.",
      formatEyebrow: "Format",
      formatHeadline: "Wie es abläuft.",
      investmentEyebrow: "Investition",
      investmentSub: "Programmgebühr · pro Teilnehmenden",
      includesLabel: "Enthalten",
      excludesLabel: "Nicht enthalten",
      postureEyebrow: "Wer sich bewirbt",
      postureHeadline: "Für wen das Programm gedacht ist.",
      forLabel: "Für",
      notForLabel: "Nicht für",
      faqEyebrow: "Häufig gefragt",
      faqHeadline: "Fragen, beantwortet.",
      noCohortsNote:
        "Die Termine für dieses Programm stehen noch nicht fest. Fordern Sie das Programmdossier an, und wir schreiben Ihnen, sobald sie es tun.",
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
    programmeOfInterest: "Programm von Interesse",
    selectProgramme: "Programm wählen",
    allProgrammes: "Alle drei Programme",
    notSure: "Ich bin unsicher — bitte beraten",
    preferredCohort: "Bevorzugter Zeitraum",
    preferredCohortHint:
      "Die Termine für 2026 stehen noch nicht fest. Sagen Sie uns, welcher Teil des Jahres Ihnen passt, und wir ordnen Sie einer Kohorte zu.",
    objective: "Was möchten Sie aus der Woche mitnehmen?",
    objectiveHint: "Werden Sie konkret — wir lesen dies genau. Zwei bis vier Sätze.",
    contribution: "Was werden Sie beitragen?",
    contributionHint: "Zwölf erfahrene Menschen sind erst eine Ressource und dann ein Publikum. Zwei bis vier Sätze.",
    refereeIntro:
      "Zwei Referenzen, die etwas darüber sagen können, wie Sie mit anderen arbeiten. Wir kontaktieren sie nicht, ohne Sie vorher schriftlich zu fragen.",
    refereeName: "Referenz — Name",
    refereeEmail: "Referenz — E-Mail",
    consentApply:
      "Ich bestätige, dass diese Bewerbung vertraulich erfolgt, und willige ein, dass die Vision Goal GmbH die darin enthaltenen Angaben gemäss den Bewerbungsbedingungen und der Datenschutzerklärung bearbeitet.",
    consentConsult:
      "Ich willige ein, dass die Vision Goal GmbH diese Anfrage gemäss der Datenschutzerklärung bearbeitet. Das Gespräch ist standardmässig vertraulich.",
    consentCohort:
      "Ich bestätige, dass ich befugt bin, diese Anfrage im Namen meiner Institution zu stellen, und willige ein, dass die Vision Goal GmbH sie gemäss der Datenschutzerklärung bearbeitet.",
    consentContact:
      "Ich willige ein, dass die Vision Goal GmbH diese Nachricht gemäss der Datenschutzerklärung bearbeitet, um mir zu antworten.",
    consentNewsletter:
      "Ich willige ein, dass die Vision Goal GmbH mir den Dispatch per E-Mail zusendet und meine Adresse gemäss der Datenschutzerklärung bearbeitet. Ich kann das Abonnement jederzeit beenden.",
    consentDossier:
      "Ich willige ein, dass die Vision Goal GmbH mir das Programmdossier und Ankündigungen zu Kohortenterminen zusendet und meine Angaben gemäss der Datenschutzerklärung bearbeitet.",
    audience: "Zielgruppe",
    audienceHint: "Für wen wird die Kohorte beauftragt?",
    audiencePlaceholder: "z.B. Senior-Alumni; Principals auf Partner-Track",
    format: "Format",
    selectFormat: "Format wählen",
    formatThree: "Dreitägiges Intensivprogramm",
    formatChatham: "Viertägiges Chatham House",
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
    timing: "Bevorzugter Zeitraum",
    timingHint: "Nennen Sie ein oder zwei bevorzugte Zeitfenster. Wir bestätigen den Termin.",
    timingPlaceholder: "z.B. Mittwochnachmittage MEZ",
    cohortPlaceholder: "z.B. Frühjahr 2026",
    discussTopic: "Was Sie besprechen möchten",
    discussHint: "Drei bis fünf Sätze genügen. Seien Sie so konkret wie möglich.",
  },
  footer: {
    blurb:
      "Eine Schweizer Plattform für kleine Executive-Intensivprogramme und praktischen Geschäftszugang — drei Flaggschiff-Programme, je zwölf Teilnehmende, geleitet von tätigen Praktikern.",
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
    copyright: "© 2026 Vision Goal GmbH · Pfäffikon SZ, Schweiz · CHE-488.435.445",
    contactEyebrow: "Direkter Draht",
    contactPhoneLabel: "Telefon",
    contactEmailLabel: "E-Mail",
    contactResponseLabel: "Antwortfenster",
    contactResponseValue: "Innerhalb von fünf Arbeitstagen, bei jeder Anfrage",
    contactPhone: "+41 78 728 09 33",
    contactEmail: "info@visiongoal.ch",
  },
};

const fr: Dict = {
  meta: {
    title: "Vision Goal — Un accès suisse choisi, sur candidature",
    description:
      "Une plateforme suisse haut de gamme d'immersions en petites cohortes et d'accès concret au monde des affaires — trois programmes phares, animés par des praticiens en activité, sur candidature.",
  },
  nav: {
    home: "Accueil",
    programmes: "Programmes",
    hosts: "Intervenants",
    alumni: "Alumni",
    insights: "Analyses",
    about: "À propos",
    apply: "Candidater",
    privateOffice: "Private Office",
    skipToContent: "Aller au contenu",
    primaryNav: "Navigation principale",
  },
  cta: {
    applyNext: "Candidater à la cohorte fondatrice",
    requestConsult: "Demander un entretien privé →",
    applyForCohort: "Candidater à la cohorte fondatrice",
    submitEnquiry: "Envoyer la demande",
    readProgramme: "Lire le programme",
    allProgrammes: "Tous les programmes",
    allHosts: "Tous les intervenants et la faculté",
    allInsights: "Toutes les analyses",
    subscribe: "S'abonner",
    send: "Envoyer →",
    sending: "Envoi en cours…",
    continue: "Continuer →",
    previous: "← Précédent",
    submitApplication: "Envoyer ma candidature",
    requestDossier: "Demander le dossier de programme →",
  },
  dispatch: {
    label: "Dispatch",
    items: [
      "Swiss Business Access Immersion · Zurich · cohorte fondatrice 2026 · dates à annoncer",
      "Private Swiss Banking & Wealth Intensive · Genève · cohorte fondatrice 2026 · dates à annoncer",
      "Swiss Finance Week · Zurich · cohorte fondatrice 2026 · dates à annoncer",
      "Demandez le dossier de programme pour être prévenu en premier",
      "Douze participants par cohorte · animé par des praticiens en activité",
      "Chaque candidature est examinée individuellement · réponse sous cinq jours ouvrés",
    ],
  },
  hero: {
    eyebrow: "Immersions suisses pour dirigeants · Candidatures examinées une par une",
    line1: "Au cœur des affaires,",
    line2: "de la finance et du",
    line3: "leadership suisses.",
    subline:
      "Des immersions en petits groupes pour entrepreneurs, dirigeants et professionnels internationaux — un accès concret à la culture d'affaires suisse, à sa finance et aux personnes qui les font vivre.",
    subjects: "Immersions pour dirigeants · Accès suisse · Private Office",
    statusReviewing: "Cohortes fondatrices 2026 · dates à annoncer",
    locationLine: "Zurich · Genève · lieux suisses sélectionnés",
    scrollToProgrammes: "Voir les programmes ↓",
  },
  posture: {
    eyebrow: "Comment fonctionne la plateforme",
    sub: "Immersions suisses pour dirigeants · praticiens hôtes · présentations privées",
    pillars: [
      { label: "Examen individuel", line: "Jamais d'inscription libre." },
      { label: "Douze participants", line: "Un plafond ferme, pas un objectif." },
      { label: "Des praticiens hôtes", line: "Nommés avant votre candidature." },
    ],
  },
  programmesBlock: {
    eyebrow: "Les immersions phares",
    headline: "Trois immersions suisses.",
    headlineGold: "Douze places chacune.",
  },
  programmeMeta: {
    access: {
      name: "Swiss Business Access Immersion",
      tagline:
        "Cinq jours au cœur des affaires suisses — visites de PME, conseils d'administration, hospitalité et une culture opérationnelle qu'aucun livre ne raconte.",
      durationLabel: "5 jours · en résidence",
      city: "Zurich",
    },
    banking: {
      name: "Private Swiss Banking & Wealth Intensive",
      tagline:
        "Quatre jours au cœur de la banque privée suisse — des séances à huis clos, sous la règle de Chatham House, avec des praticiens nommés.",
      durationLabel: "4 jours · Chatham House",
      city: "Genève",
    },
    topic: {
      name: "Swiss Finance Week",
      tagline:
        "Cinq jours thématiques sur une seule question de la finance suisse — petites séances de travail conduites par des praticiens.",
      durationLabel: "5 jours · thématique",
      city: "Zurich",
    },
  },
  hostsStrip: {
    eyebrow: "Intervenants & faculté",
    headline: "Nommés avant votre candidature.",
    headlineGold: "Présents toute la semaine.",
    cta: "Tous les intervenants et la faculté",
  },
  editorial: {
    eyebrow: "Les lieux",
    headline: "Éditorial. Sobre.",
    headlineGold: "Suisse.",
    side: "Des lieux de travail. Douze participants. La discrétion par défaut.",
    tiles: [
      { label: "Zurich", caption: "En résidence" },
      { label: "Genève", caption: "Huis clos" },
      { label: "Retraite alpine", caption: "Hors micro" },
      { label: "Salons privés", caption: "Douze à table" },
    ],
  },
  cohorts: {
    eyebrow: "Cohortes fondatrices 2026",
    headline: "Trois programmes.",
    headlineGold: "Dates à annoncer.",
    note: "Les dates ne sont publiées qu'une fois les lieux et les intervenants sous contrat. Demandez le dossier de programme et nous vous écrirons en premier.",
    statusAnnouncing: "À annoncer",
    statusScheduled: "Programmé",
    statusClosed: "Clôturé",
  },
  alumni: {
    eyebrow: "Le réseau",
    intro: "",
    voicesEyebrow: "Témoignages de participants",
    voicesHeadline: "Ce que disent les participants.",
    voicesHeadlineGold: "Publiés uniquement avec leur accord.",
    pastEyebrow: "Cohortes réalisées",
    pastHeadline: "Le relevé de ce qui a eu lieu.",
  },
  insights: {
    eyebrow: "Analyses",
    headline: "Notes de praticiens.",
    headlineGold: "Regard suisse.",
    practitionerNotes: "Notes de praticiens.",
    featuredLabel: "À la une",
    dispatchEyebrow: "Dispatch",
    dispatchHeadline: "Deux textes par mois.",
    dispatchHeadlineGold: "Aucune promotion.",
    dispatchHelp: "Environ deux textes par mois. Désabonnement à tout moment.",
    dispatchOk:
      "Merci. Veuillez ouvrir l’e-mail que nous venons d’envoyer et suivre le lien de confirmation — nous ne vous enverrons rien avant.",
    emailPlaceholder: "Votre e-mail",
  },
  privateBanner: {
    eyebrow: "Pour les partenaires institutionnels",
    headline: "Commander une",
    headlineGold: "cohorte privée.",
    response: "Nous répondons sous cinq jours ouvrés.",
  },
  ctaBlock: {
    eyebrow: "Prêt à candidater",
    line1: "Douze places.",
    line2: "Chacune examinée.",
  },
  trust: {
    eyebrow: "La plateforme en chiffres",
    stats: [
      { value: "33", label: "Années du fondateur dans la banque privée suisse" },
      { value: "3", label: "Programmes phares" },
      { value: "12", label: "Participants par cohorte, plafonnés" },
      { value: "12", label: "Publications évaluées par des pairs" },
    ],
  },
  enrich: {
    programmesUnitedEyebrow: "Ce qui les réunit",
    programmesUnitedHeadline: "Trois programmes. Une même exigence.",
    programmesUnitedItems: [
      {
        title: "Animé, pas enseigné",
        body: "Chaque séance est conduite par un praticien en activité. Nous n'engageons pas d'orateurs de scène ; nous invitons des personnes capables de répondre à la question suivante.",
      },
      {
        title: "Douze, pas vingt",
        body: "Les cohortes sont dimensionnées pour que chacun prenne la parole chaque jour et que chaque présentation soit délibérée. Le coût de ce choix est pour nous.",
      },
      {
        title: "Candidature, pas inscription",
        body: "Nous lisons la précision de votre objectif et ce que vous apporterez — ni les titres, ni le budget.",
      },
    ],
    hostsCriteriaEyebrow: "Ce que nous attendons d'un intervenant",
    hostsCriteriaHeadline: "Le jugement du praticien, pas la notoriété de scène.",
    hostsCriteriaItems: [
      {
        title: "Un parcours opérationnel",
        body: "Nos intervenants ont fait le travail. Nous invitons des praticiens dont l'expérience est vérifiable dans le domaine qu'ils conduisent.",
      },
      {
        title: "À l'aise hors micro",
        body: "Ceux qui brillent sur une scène sont rarement les meilleurs en séance fermée. Nous cherchons des praticiens qui réservent l'essentiel à cette dernière.",
      },
      {
        title: "Du temps pour la cohorte",
        body: "Les intervenants s'engagent sur tout le programme, pas sur une keynote suivie d'un vol de retour. Le groupe est petit précisément pour qu'ils puissent rester.",
      },
    ],
    alumniNumbersEyebrow: "Comment fonctionne le réseau",
    alumniNumbersHeadline: "Petit, et entretenu volontairement.",
    alumniStats: [
      { value: "12", label: "Participants par cohorte, plafonnés" },
      { value: "2", label: "Villes : Zurich et Genève" },
      { value: "12", label: "Mois d'accès prolongé" },
      { value: "1", label: "Retrouvailles annuelles" },
    ],
    insightsCategoriesEyebrow: "Rubriques éditoriales",
    insightsCategoriesHeadline: "Cinq rubriques où nous publions.",
    insightsCategoriesItems: [
      {
        name: "Swiss Access",
        body: "Notes sur la culture opérationnelle, l'évaluation des PME et les passerelles qui fonctionnent réellement entre la Suisse et le reste du monde.",
      },
      {
        name: "Private Banking",
        body: "Des dispatches de niveau praticien sur la banque privée suisse — discrétion, régulation et questions qui restent en séance fermée.",
      },
      {
        name: "Markets",
        body: "Cadrages macroéconomiques et commentaires sur les marchés de capitaux suisses, écrits par des praticiens directement engagés dans le sujet.",
      },
      {
        name: "Methodology",
        body: "Pourquoi nous conduisons nos programmes ainsi — les raisons du chiffre douze, la règle de Chatham House et la façon dont les candidatures sont lues.",
      },
      {
        name: "Dispatches",
        body: "Notes brèves rédigées après une cohorte : ce qui a été dit, ce qui ne l'a pas été, et ce à quoi les participants sont revenus un mois plus tard.",
      },
    ],
    aboutPrinciplesEyebrow: "Principes de fonctionnement",
    aboutPrinciplesHeadline: "Cinq règles auxquelles nous tenons.",
    aboutPrinciplesItems: [
      {
        title: "La sélection avant le volume",
        body: "Nous préférons douze places bien remplies à vingt remplies vite. Quand une cohorte ne tient pas, nous la reportons plutôt que de la compléter.",
      },
      {
        title: "Le praticien avant l'orateur",
        body: "Les intervenants participent à titre personnel, hors de tout catalogue marketing, et restent pendant tout le programme.",
      },
      {
        title: "La discrétion par défaut",
        body: "Les séances ne sont pas enregistrées, les noms des participants ne sont pas publiés sans accord écrit, et la couverture presse reste l'exception.",
      },
      {
        title: "La précision avant le cérémonial",
        body: "Les questions de candidature demandent du détail. La structure du programme s'engage sur des phases, pas sur des slogans. Les tarifs sont publiés, non négociés.",
      },
      {
        title: "Un périmètre clair, énoncé simplement",
        body: "Vision Goal vend un accès, des présentations et une connaissance des affaires suisses. Ce n'est ni un cours ni une mission de conseil, et la société ne détient aucune autorisation FINMA. Les activités réglementées, lorsqu'elles sont nécessaires, sont assurées par les praticiens agréés que vous rencontrez.",
      },
    ],
  },
  pages: {
    programmes: {
      eyebrow: "Les immersions phares",
      titlePart1: "Trois programmes.",
      titleGold: "Douze places chacune.",
      lede:
        "Chaque programme est petit, conduit par des praticiens qui exercent encore, et bâti sur les mêmes trois engagements : la retenue plutôt que le volume, la preuve plutôt que l'affirmation, le jugement plutôt que la performance.",
    },
    hosts: {
      eyebrow: "Intervenants & faculté",
      titlePart1: "Nommés avant votre candidature.",
      titleGold: "Présents toute la semaine.",
      lede:
        "Les intervenants et la faculté figurent ici comme praticiens, participant à titre personnel. Nous ne listons personne que nous n'ayons engagé.",
      principleEyebrow: "Comment cette liste est tenue",
      principleBody:
        "Nous ne listons pas tous les orateurs jamais venus. Le curateur fondateur figure ici ; les intervenants des programmes sont confirmés cycle après cycle. Les profils marqués Exemple sont provisoires et seront remplacés par des intervenants confirmés avant l'ouverture de la cohorte fondatrice.",
    },
    alumni: {
      eyebrow: "Réseau",
      titlePart1: "Avec qui vous",
      titleGold: "serez assis.",
      lede:
        "Les participants ne sont identifiés qu'avec leur accord écrit. Le réseau est petit à dessein ; sa valeur tient à qui en fait partie, pas au nombre.",
      postureEyebrow: "Comment fonctionne le réseau",
      postureHeadline: "La sélectivité est le sujet.",
      postureBody:
        "Les membres peuvent demander une présentation à un autre participant, et l'équipe de curation l'organise au cas par cas. Des dispatches trimestriels des intervenants et des retrouvailles annuelles entretiennent le réseau sans le rendre bruyant.",
      noVoicesHeadline: "Aucun témoignage publié pour l'instant.",
      noVoicesBody:
        "Les cohortes fondatrices 2026 n'ont pas encore eu lieu. Nous ne publions des témoignages sur les programmes qu'une fois qu'ils nous ont été confiés et que leur formulation a été validée par écrit : il n'y a donc rien à montrer ici, et rien d'inventé à la place.",
      noCohortsHeadline: "Aucune cohorte réalisée pour l'instant.",
      noCohortsBody:
        "Cette page listera chaque cohorte à mesure qu'elle sera réalisée : dates, composition et intervenants qui l'ont conduite. Elle reste vide jusqu'à la première.",
    },
    insightsIndex: {
      eyebrow: "Analyses",
      titlePart1: "Notes de praticiens.",
      titleGold: "Regard suisse.",
      lede:
        "Des notes réfléchies sur l'accès suisse, la banque privée, les marchés et la façon dont ces programmes sont construits. Environ deux textes par mois ; jamais promotionnels.",
    },
    about: {
      eyebrow: "À propos de la plateforme",
      titlePart1: "L'accès suisse aux affaires,",
      titleGold: "en personne.",
      lede:
        "Vision Goal construit de petits programmes suisses pour entrepreneurs, dirigeants et professionnels internationaux qui veulent un accès concret à la finance suisse, à sa culture d'affaires et aux personnes qui les animent.",
      statement:
        "Vision Goal conduit trois immersions phares — une Swiss Business Access Immersion à Zurich, un Private Swiss Banking & Wealth Intensive à Genève et une Swiss Finance Week annuelle consacrée à une question d'actualité — auxquelles s'ajoute un Private Office pour les dirigeants qui préfèrent une présentation à une place en cohorte.",
      statement2:
        "La plateforme est délibérément petite. Ce que vous achetez, c'est un accès, un jugement et une connaissance des affaires suisses difficiles à réunir autrement. Ce n'est pas un cours, pas une mission de conseil et pas un service financier réglementé.",
      standardsEyebrow: "Normes & éthique",
      standardsHeadline: "Notre manière de travailler.",
      pressEyebrow: "Presse & distinctions",
      pressHeadline: "Mentions sélectionnées.",
      curatorEyebrow: "Un mot du curateur",
      curatorNote:
        "La plateforme existe pour ce qui se passe quand douze personnes s'assoient quatre jours, hors micro, avec un hôte qui n'a rien à leur vendre. Tout le reste — le site, le dispatch, les textes — est au service de ces journées. Gardez-les honnêtes et le reste suit.",
      curatorAttribution: "Vision Goal · Pfäffikon SZ",
    },
    contact: {
      eyebrow: "Contact",
      titlePart1: "Un mot bref.",
      titleGold: "Une réponse réfléchie.",
      lede:
        "Pour les candidatures, utilisez le formulaire de candidature ; pour les cohortes privées, le formulaire institutionnel. Pour tout le reste, cette page.",
      officeEyebrow: "Siège social",
      emailLabel: "E-mail",
      phoneLabel: "Téléphone",
      responseLabel: "Délai de réponse",
      responseValue: "Sous cinq jours ouvrés",
      received: "Message reçu",
      receivedHeadline: "Merci. Votre message nous est parvenu.",
      receivedBody:
        "Nous avons envoyé une confirmation à l'adresse indiquée et nous répondrons sous cinq jours ouvrés.",
    },
    apply: {
      eyebrow: "Candidater à la cohorte fondatrice",
      titlePart1: "Une candidature brève.",
      titleGold: "Un examen attentif.",
      lede:
        "Chaque place est examinée individuellement. La candidature est courte à dessein — nous lisons la précision, pas la longueur — et nous répondons sous cinq jours ouvrés, quelle que soit la réponse.",
      steps: ["Identité", "Programme", "Pourquoi maintenant", "Références", "Confirmation"],
      stepLegend: { identity: "Identité", programme: "Programme", whyNow: "Pourquoi maintenant", referees: "Références" },
      received: "Candidature reçue",
      receivedHeadline: "Merci. Nous reviendrons vers vous.",
      receivedBody:
        "L'équipe de curation lit chaque candidature en entier et répondra sous cinq jours ouvrés. Nous avons envoyé une confirmation à l'adresse indiquée et nous ne contacterons pas vos références sans vous le demander d'abord par écrit.",
    },
    consult: {
      eyebrow: "Entretien privé",
      title: "Vérifier l'adéquation avant de candidater.",
      lede:
        "Un échange bref et confidentiel avec l'équipe de curation pour déterminer quel programme vous convient et répondre aux questions qu'un formulaire ne peut pas traiter. Nous répondons sous cinq jours ouvrés.",
      received: "Demande reçue",
      receivedHeadline: "Merci. Nous reviendrons vers vous.",
      receivedBody:
        "Nous avons envoyé une confirmation à l'adresse indiquée. Un membre de l'équipe de curation vous écrira sous cinq jours ouvrés pour convenir de l'entretien.",
    },
    cohort: {
      eyebrow: "Pour les partenaires institutionnels",
      titlePart1: "Commander une",
      titleGold: "cohorte privée.",
      lede:
        "Cohortes fermées et immersions thématiques conçues pour des partenaires institutionnels. Nous intervenons en EN / DE / FR, dans des formats de trois jours à une semaine complète. Nous répondons sous cinq jours ouvrés.",
      received: "Demande reçue",
      receivedHeadline: "Merci. Nous reviendrons vers vous.",
      receivedBody:
        "Nous avons envoyé une confirmation à l'adresse indiquée. Un membre de l'équipe de curation vous écrira sous cinq jours ouvrés pour discuter du format, du calendrier et du public.",
    },
    dossier: {
      eyebrow: "Dossier de programme",
      titlePart1: "Demander le",
      titleGold: "dossier de programme.",
      lede:
        "Le dossier présente chaque programme en détail : structure, intervenants, tarifs, ce qui est inclus et à qui la semaine est destinée. Nous vous écrirons également en premier dès que les dates des cohortes fondatrices 2026 seront confirmées.",
      received: "Demande reçue",
      receivedHeadline: "Merci. Le dossier est en route.",
      receivedBody:
        "Nous enverrons le dossier sous cinq jours ouvrés et nous vous écrirons de nouveau dès que les dates des cohortes fondatrices 2026 seront confirmées. Vous pouvez vous désabonner de ces avis à tout moment.",
    },
    legalSidebar: "Mentions légales",
    programmeDetail: {
      outcomesEyebrow: "Ce que vous en retirez",
      outcomesHeadline: "Trois livrables — pas des slogans.",
      architectureEyebrow: "Architecture du programme",
      architectureHeadline: "Comment le programme se déroule.",
      cohortsEyebrow: "Prochaines cohortes",
      cohortsHeadline: "Quand cela se tient.",
      hostsEyebrow: "Intervenants & faculté de ce programme",
      hostsHeadlinePart1: "Consultables avant de postuler.",
      hostsHeadlineGold: "Présents toute la semaine.",
      formatEyebrow: "Format",
      formatHeadline: "Son fonctionnement.",
      investmentEyebrow: "Investissement",
      investmentSub: "Frais de programme · par participant",
      includesLabel: "Inclus",
      excludesLabel: "Non inclus",
      postureEyebrow: "Qui candidate",
      postureHeadline: "À qui le programme s'adresse.",
      forLabel: "Pour",
      notForLabel: "Pas pour",
      faqEyebrow: "Questions fréquentes",
      faqHeadline: "Vos questions, nos réponses.",
      noCohortsNote:
        "Les dates de ce programme ne sont pas encore confirmées. Demandez le dossier de programme et nous vous écrirons dès qu'elles le seront.",
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
    programmeOfInterest: "Programme visé",
    selectProgramme: "Choisir un programme",
    allProgrammes: "Les trois programmes",
    notSure: "Je ne sais pas encore — merci de me conseiller",
    preferredCohort: "Période souhaitée",
    preferredCohortHint:
      "Les dates 2026 ne sont pas encore confirmées. Indiquez la période de l'année qui vous convient et nous vous orienterons vers une cohorte.",
    objective: "Qu'attendez-vous de cette semaine ?",
    objectiveHint: "Soyez précis — nous lisons attentivement. Deux à quatre phrases.",
    contribution: "Qu'allez-vous apporter ?",
    contributionHint: "Douze dirigeants sont une ressource avant d'être un public. Deux à quatre phrases.",
    refereeIntro:
      "Deux références capables de parler de votre façon de travailler avec les autres. Nous ne les contacterons pas sans vous le demander d'abord par écrit.",
    refereeName: "Référence — nom",
    refereeEmail: "Référence — e-mail",
    consentApply:
      "Je confirme que cette candidature est faite à titre confidentiel et je consens à ce que Vision Goal GmbH traite les informations qu'elle contient conformément aux conditions de candidature et à la politique de confidentialité.",
    consentConsult:
      "Je consens à ce que Vision Goal GmbH traite cette demande conformément à la politique de confidentialité. L'entretien est confidentiel par défaut.",
    consentCohort:
      "Je confirme être autorisé à formuler cette demande au nom de mon institution et je consens à ce que Vision Goal GmbH la traite conformément à la politique de confidentialité.",
    consentContact:
      "Je consens à ce que Vision Goal GmbH traite ce message conformément à la politique de confidentialité afin de me répondre.",
    consentNewsletter:
      "Je consens à ce que Vision Goal GmbH m'envoie le dispatch par e-mail et traite mon adresse conformément à la politique de confidentialité. Je peux me désabonner à tout moment.",
    consentDossier:
      "Je consens à ce que Vision Goal GmbH m'envoie le dossier de programme et les annonces de dates de cohorte, et traite mes données conformément à la politique de confidentialité.",
    audience: "Public",
    audienceHint: "Pour qui la cohorte est-elle commandée ?",
    audiencePlaceholder: "p. ex. alumni seniors ; dirigeants en voie d'association",
    format: "Format",
    selectFormat: "Choisir un format",
    formatThree: "Immersion de trois jours",
    formatChatham: "Quatre jours à huis clos",
    formatWeek: "Semaine sur mesure",
    formatModular: "Modulaire / en plusieurs temps",
    formatUndecided: "Indécis — merci de me conseiller",
    languages: "Langues souhaitées",
    dates: "Dates souhaitées",
    description: "Brève description de la mission",
    descriptionHint:
      "Public, objectif et contraintes éventuelles. Trois à six phrases suffisent.",
    subject: "Objet",
    message: "Message",
    messageHint: "Trois à six phrases suffisent.",
    timing: "Période souhaitée",
    timingHint: "Indiquez une ou deux fenêtres préférées. Nous confirmerons le créneau.",
    timingPlaceholder: "p. ex. mercredi après-midi, heure de Zurich",
    cohortPlaceholder: "p. ex. printemps 2026",
    discussTopic: "Ce dont vous souhaitez parler",
    discussHint: "Trois à cinq phrases suffisent. Soyez aussi précis que possible.",
  },
  footer: {
    blurb:
      "Une plateforme suisse d'immersions en petit comité et d'accès concret au monde des affaires — trois programmes phares, douze participants chacun, conduits par des praticiens en activité.",
    sectionProgrammes: "Programmes",
    sectionPlatform: "Plateforme",
    sectionApply: "Candidater",
    linkApplication: "Candidature",
    linkPrivateConsultation: "Entretien privé",
    linkPrivateCohort: "Demande de cohorte privée",
    linkContact: "Contact",
    legalImprint: "Mentions légales",
    legalPrivacy: "Confidentialité",
    legalCookies: "Cookies",
    legalApplicationTerms: "Conditions de candidature",
    copyright: "© 2026 Vision Goal GmbH · Pfäffikon SZ, Suisse · CHE-488.435.445",
    contactEyebrow: "Ligne directe",
    contactPhoneLabel: "Téléphone",
    contactEmailLabel: "E-mail",
    contactResponseLabel: "Délai de réponse",
    contactResponseValue: "Sous cinq jours ouvrés, pour chaque demande",
    contactPhone: "+41 78 728 09 33",
    contactEmail: "info@visiongoal.ch",
  },
};

const es: Dict = {
  meta: {
    title: "Vision Goal — Acceso suizo seleccionado, por candidatura",
    description:
      "Una plataforma suiza premium de intensivos en cohortes reducidas y acceso real al mundo empresarial: tres programas insignia, dirigidos por profesionales en activo, por candidatura.",
  },
  nav: {
    home: "Inicio",
    programmes: "Programas",
    hosts: "Anfitriones",
    alumni: "Alumni",
    insights: "Análisis",
    about: "Nosotros",
    apply: "Candidatura",
    privateOffice: "Private Office",
    skipToContent: "Ir al contenido",
    primaryNav: "Navegación principal",
  },
  cta: {
    applyNext: "Presentar candidatura a la cohorte fundadora",
    requestConsult: "Solicitar una consulta privada →",
    applyForCohort: "Presentar candidatura a la cohorte fundadora",
    submitEnquiry: "Enviar consulta",
    readProgramme: "Leer el programa",
    allProgrammes: "Todos los programas",
    allHosts: "Todos los anfitriones y el claustro",
    allInsights: "Todos los análisis",
    subscribe: "Suscribirse",
    send: "Enviar →",
    sending: "Enviando…",
    continue: "Continuar →",
    previous: "← Anterior",
    submitApplication: "Enviar candidatura",
    requestDossier: "Solicitar el dosier del programa →",
  },
  dispatch: {
    label: "Dispatch",
    items: [
      "Swiss Business Access Immersion · Zúrich · cohorte fundadora 2026 · fechas por anunciar",
      "Private Swiss Banking & Wealth Intensive · Ginebra · cohorte fundadora 2026 · fechas por anunciar",
      "Swiss Finance Week · Zúrich · cohorte fundadora 2026 · fechas por anunciar",
      "Solicite el dosier del programa para recibir aviso antes que nadie",
      "Doce participantes por cohorte · dirigido por profesionales en activo",
      "Cada candidatura se revisa de forma individual · respondemos en cinco días hábiles",
    ],
  },
  hero: {
    eyebrow: "Inmersiones ejecutivas suizas · Cada candidatura se revisa individualmente",
    line1: "Por dentro: negocios,",
    line2: "finanzas y liderazgo",
    line3: "en Suiza.",
    subline:
      "Inmersiones ejecutivas en grupos reducidos para emprendedores, directivos y profesionales internacionales: acceso práctico a la cultura empresarial suiza, a sus finanzas y a las personas que están detrás.",
    subjects: "Inmersiones ejecutivas · Acceso suizo · Private Office",
    statusReviewing: "Cohortes fundadoras 2026 · fechas por anunciar",
    locationLine: "Zúrich · Ginebra · sedes suizas seleccionadas",
    scrollToProgrammes: "Ver los programas ↓",
  },
  posture: {
    eyebrow: "Cómo funciona la plataforma",
    sub: "Inmersiones ejecutivas suizas · anfitriones en activo · presentaciones privadas",
    pillars: [
      { label: "Revisión individual", line: "Nunca hay matrícula abierta." },
      { label: "Doce participantes", line: "Un límite firme, no una meta." },
      { label: "Anfitriones en activo", line: "Con nombre antes de que se presente." },
    ],
  },
  programmesBlock: {
    eyebrow: "Los intensivos insignia",
    headline: "Tres intensivos suizos.",
    headlineGold: "Doce plazas cada uno.",
  },
  programmeMeta: {
    access: {
      name: "Swiss Business Access Immersion",
      tagline:
        "Cinco días dentro de la empresa suiza: visitas a pymes, consejos de administración, hospitalidad y una cultura operativa que no se encuentra en ningún libro.",
      durationLabel: "5 días · en residencia",
      city: "Zúrich",
    },
    banking: {
      name: "Private Swiss Banking & Wealth Intensive",
      tagline:
        "Cuatro días dentro de la banca privada suiza: sesiones a puerta cerrada bajo la regla de Chatham House, con profesionales identificados.",
      durationLabel: "4 días · Chatham House",
      city: "Ginebra",
    },
    topic: {
      name: "Swiss Finance Week",
      tagline:
        "Cinco días temáticos sobre una única cuestión de las finanzas suizas: sesiones de trabajo reducidas dirigidas por profesionales.",
      durationLabel: "5 días · temático",
      city: "Zúrich",
    },
  },
  hostsStrip: {
    eyebrow: "Anfitriones y claustro",
    headline: "Con nombre antes de que se presente.",
    headlineGold: "Presentes toda la semana.",
    cta: "Todos los anfitriones y el claustro",
  },
  editorial: {
    eyebrow: "Los espacios",
    headline: "Editorial. Sobrio.",
    headlineGold: "Suizo.",
    side: "Espacios de trabajo. Doce participantes. Discreción por defecto.",
    tiles: [
      { label: "Zúrich", caption: "En residencia" },
      { label: "Ginebra", caption: "Puerta cerrada" },
      { label: "Retiro alpino", caption: "Sin grabaciones" },
      { label: "Salones privados", caption: "Doce a la mesa" },
    ],
  },
  cohorts: {
    eyebrow: "Cohortes fundadoras 2026",
    headline: "Tres programas.",
    headlineGold: "Fechas por anunciar.",
    note: "Las fechas se publican solo cuando las sedes y los anfitriones están contratados. Solicite el dosier del programa y le escribiremos antes que a nadie.",
    statusAnnouncing: "Por anunciar",
    statusScheduled: "Programado",
    statusClosed: "Cerrado",
  },
  alumni: {
    eyebrow: "La red",
    intro: "",
    voicesEyebrow: "Testimonios de participantes",
    voicesHeadline: "Lo que dicen los participantes.",
    voicesHeadlineGold: "Se publican solo con su consentimiento.",
    pastEyebrow: "Cohortes celebradas",
    pastHeadline: "El registro de lo que se ha hecho.",
  },
  insights: {
    eyebrow: "Análisis",
    headline: "Notas de profesionales.",
    headlineGold: "Mirada suiza.",
    practitionerNotes: "Notas de profesionales.",
    featuredLabel: "Destacado",
    dispatchEyebrow: "Dispatch",
    dispatchHeadline: "Dos textos al mes.",
    dispatchHeadlineGold: "Sin promociones.",
    dispatchHelp: "Alrededor de dos textos al mes. Puede darse de baja cuando quiera.",
    dispatchOk:
      "Gracias. Abra el correo que acabamos de enviarle y siga el enlace de confirmación: no le enviaremos nada hasta entonces.",
    emailPlaceholder: "Su correo electrónico",
  },
  privateBanner: {
    eyebrow: "Para socios institucionales",
    headline: "Encargue una",
    headlineGold: "cohorte privada.",
    response: "Respondemos en cinco días hábiles.",
  },
  ctaBlock: {
    eyebrow: "Listo para presentarse",
    line1: "Doce plazas.",
    line2: "Cada una, estudiada.",
  },
  trust: {
    eyebrow: "La plataforma en cifras",
    stats: [
      { value: "33", label: "Años del fundador en la banca privada suiza" },
      { value: "3", label: "Programas insignia" },
      { value: "12", label: "Participantes por cohorte, con límite" },
      { value: "12", label: "Publicaciones revisadas por pares" },
    ],
  },
  enrich: {
    programmesUnitedEyebrow: "Lo que los une",
    programmesUnitedHeadline: "Tres programas. Un mismo estándar.",
    programmesUnitedItems: [
      {
        title: "Con anfitrión, no con conferencia",
        body: "Cada sesión la dirige un profesional en activo. No contratamos oradores de escenario; invitamos a personas capaces de responder la siguiente pregunta.",
      },
      {
        title: "Doce, no veinte",
        body: "Las cohortes se dimensionan para que cada participante intervenga a diario y cada presentación sea deliberada. El coste de esa decisión lo asumimos nosotros.",
      },
      {
        title: "Candidatura, no matrícula",
        body: "Leemos hasta qué punto es concreto su objetivo y qué va a aportar; no los títulos ni el presupuesto.",
      },
    ],
    hostsCriteriaEyebrow: "Qué buscamos en un anfitrión",
    hostsCriteriaHeadline: "Criterio profesional, no notoriedad.",
    hostsCriteriaItems: [
      {
        title: "Trayectoria operativa",
        body: "Nuestros anfitriones han hecho el trabajo. Invitamos a profesionales con una trayectoria verificable en el ámbito que dirigen.",
      },
      {
        title: "Cómodos sin micrófono",
        body: "Quien brilla en un escenario rara vez rinde igual en una sesión cerrada. Buscamos profesionales que reserven lo valioso para esta última.",
      },
      {
        title: "Tiempo para la cohorte",
        body: "Los anfitriones se comprometen con todo el programa, no con una ponencia y un vuelo de vuelta. El grupo es reducido precisamente para que puedan quedarse.",
      },
    ],
    alumniNumbersEyebrow: "Cómo funciona la red",
    alumniNumbersHeadline: "Pequeña y cuidada a propósito.",
    alumniStats: [
      { value: "12", label: "Participantes por cohorte, con límite" },
      { value: "2", label: "Ciudades: Zúrich y Ginebra" },
      { value: "12", label: "Meses de acceso posterior" },
      { value: "1", label: "Reencuentro anual" },
    ],
    insightsCategoriesEyebrow: "Secciones editoriales",
    insightsCategoriesHeadline: "Cinco secciones en las que publicamos.",
    insightsCategoriesItems: [
      {
        name: "Swiss Access",
        body: "Notas sobre cultura operativa, evaluación de pymes y los puentes que de verdad funcionan entre Suiza y el resto del mundo.",
      },
      {
        name: "Private Banking",
        body: "Textos de nivel profesional sobre la banca privada suiza: discreción, regulación y las preguntas que se quedan en la sala cerrada.",
      },
      {
        name: "Markets",
        body: "Encuadres macroeconómicos y comentario sobre el mercado de capitales suizo, escritos por profesionales con intereses reales en el asunto.",
      },
      {
        name: "Methodology",
        body: "Por qué dirigimos los programas como lo hacemos: los motivos del número doce, la regla de Chatham House y cómo se leen las candidaturas.",
      },
      {
        name: "Dispatches",
        body: "Notas breves escritas después de una cohorte: lo que se dijo, lo que no y aquello a lo que los participantes volvieron un mes después.",
      },
    ],
    aboutPrinciplesEyebrow: "Principios de funcionamiento",
    aboutPrinciplesHeadline: "Cinco reglas que mantenemos.",
    aboutPrinciplesItems: [
      {
        title: "Selección antes que volumen",
        body: "Preferimos doce plazas bien cubiertas a veinte cubiertas rápido. Cuando una cohorte no encaja, la aplazamos en lugar de rellenarla.",
      },
      {
        title: "Profesional antes que orador",
        body: "Los anfitriones asisten a título personal, no como parte de un catálogo comercial, y permanecen durante todo el programa.",
      },
      {
        title: "Discreción por defecto",
        body: "Las sesiones no se graban, los nombres de los participantes no se publican sin consentimiento por escrito y la cobertura de prensa es la excepción.",
      },
      {
        title: "Concreción antes que ceremonia",
        body: "Las preguntas de la candidatura piden detalle. La estructura del programa se compromete con fases, no con eslóganes. Las tarifas se publican, no se negocian.",
      },
      {
        title: "Un alcance claro, dicho sin rodeos",
        body: "Vision Goal vende acceso, presentaciones y conocimiento del mundo empresarial suizo. No es un curso ni un encargo de consultoría, y no cuenta con autorización de la FINMA. La actividad regulada, cuando es necesaria, la realizan los profesionales autorizados a los que conocerá.",
      },
    ],
  },
  pages: {
    programmes: {
      eyebrow: "Los intensivos insignia",
      titlePart1: "Tres programas.",
      titleGold: "Doce plazas cada uno.",
      lede:
        "Cada programa es pequeño, lo dirigen profesionales que siguen ejerciendo y se apoya en los mismos tres compromisos: contención antes que volumen, evidencia antes que afirmación, criterio antes que espectáculo.",
    },
    hosts: {
      eyebrow: "Anfitriones y claustro",
      titlePart1: "Con nombre antes de que se presente.",
      titleGold: "Presentes toda la semana.",
      lede:
        "Los anfitriones y el claustro aparecen aquí como profesionales y participan a título personal. No incluimos a nadie a quien no hayamos contratado.",
      principleEyebrow: "Cómo se mantiene esta lista",
      principleBody:
        "No incluimos a todos los ponentes que han pasado por aquí. El curador fundador figura en la lista; los anfitriones de cada programa se confirman ciclo a ciclo. Los perfiles marcados como Ejemplo son provisionales y se sustituirán por anfitriones confirmados antes de que abra la cohorte fundadora.",
    },
    alumni: {
      eyebrow: "Red",
      titlePart1: "Con quién va a",
      titleGold: "compartir la mesa.",
      lede:
        "Los participantes solo se identifican con su consentimiento por escrito. La red es pequeña a propósito; su valor está en quién forma parte de ella, no en cuántos son.",
      postureEyebrow: "Cómo funciona la red",
      postureHeadline: "La selectividad es el punto.",
      postureBody:
        "Los miembros pueden pedir una presentación a otro participante y el equipo de curaduría organiza cada una de forma individual. Los dispatches trimestrales de los anfitriones y un reencuentro anual mantienen viva la red sin volverla ruidosa.",
      noVoicesHeadline: "Todavía no hay testimonios publicados.",
      noVoicesBody:
        "Las cohortes fundadoras de 2026 aún no se han celebrado. Publicamos testimonios sobre los programas solo cuando los participantes los han dado y han aprobado su redacción por escrito, así que aquí no hay nada que mostrar, y nada inventado en su lugar.",
      noCohortsHeadline: "Todavía no se ha celebrado ninguna cohorte.",
      noCohortsBody:
        "Esta página irá recogiendo cada cohorte a medida que se celebre: fechas, composición y los anfitriones que la dirigieron. Permanecerá vacía hasta que se celebre la primera.",
    },
    insightsIndex: {
      eyebrow: "Análisis",
      titlePart1: "Notas de profesionales.",
      titleGold: "Mirada suiza.",
      lede:
        "Notas reflexivas sobre el acceso suizo, la banca privada, los mercados y cómo se construyen estos programas. Alrededor de dos textos al mes; nunca promocionales.",
    },
    about: {
      eyebrow: "Sobre la plataforma",
      titlePart1: "Acceso ejecutivo suizo,",
      titleGold: "en persona.",
      lede:
        "Vision Goal crea programas ejecutivos suizos de formato reducido para emprendedores, directivos y profesionales internacionales que buscan acceso práctico a las finanzas suizas, a su cultura empresarial y a las personas que las mueven.",
      statement:
        "Vision Goal dirige tres intensivos insignia — una Swiss Business Access Immersion en Zúrich, un Private Swiss Banking & Wealth Intensive en Ginebra y una Swiss Finance Week anual dedicada a una cuestión de actualidad — junto con un Private Office para directivos que prefieren una presentación a una plaza en una cohorte.",
      statement2:
        "La plataforma es deliberadamente pequeña. Lo que se adquiere es acceso, criterio y un conocimiento del mundo empresarial suizo difícil de reunir de otro modo. No es un curso, ni un encargo de consultoría, ni un servicio financiero regulado.",
      standardsEyebrow: "Estándares y ética",
      standardsHeadline: "Cómo trabajamos.",
      pressEyebrow: "Prensa y reconocimientos",
      pressHeadline: "Menciones seleccionadas.",
      curatorEyebrow: "Una nota del curador",
      curatorNote:
        "La plataforma existe por lo que ocurre cuando doce personas se sientan cuatro días, sin grabaciones, con un anfitrión que no tiene nada que venderles. Todo lo demás — la web, el dispatch, los textos — está al servicio de esos días. Si se mantienen honestos, el resto se resuelve solo.",
      curatorAttribution: "Vision Goal · Pfäffikon SZ",
    },
    contact: {
      eyebrow: "Contacto",
      titlePart1: "Una nota breve.",
      titleGold: "Respuesta pensada.",
      lede:
        "Para las candidaturas utilice el formulario de candidatura, y para consultas sobre cohortes privadas el formulario institucional. Para todo lo demás, esta página.",
      officeEyebrow: "Domicilio social",
      emailLabel: "Correo electrónico",
      phoneLabel: "Teléfono",
      responseLabel: "Tiempo de respuesta",
      responseValue: "En cinco días hábiles",
      received: "Mensaje recibido",
      receivedHeadline: "Gracias. Su mensaje ha llegado.",
      receivedBody:
        "Hemos enviado una confirmación a la dirección que nos indicó y responderemos en cinco días hábiles.",
    },
    apply: {
      eyebrow: "Presentar candidatura a la cohorte fundadora",
      titlePart1: "Una candidatura breve.",
      titleGold: "Una revisión atenta.",
      lede:
        "Cada plaza se revisa de forma individual. La candidatura es corta a propósito — leemos la concreción, no la extensión — y respondemos en cinco días hábiles, sea cual sea la respuesta.",
      steps: ["Identidad", "Programa", "Por qué ahora", "Referencias", "Confirmación"],
      stepLegend: { identity: "Identidad", programme: "Programa", whyNow: "Por qué ahora", referees: "Referencias" },
      received: "Candidatura recibida",
      receivedHeadline: "Gracias. Nos pondremos en contacto.",
      receivedBody:
        "El equipo de curaduría lee cada candidatura por completo y responderá en cinco días hábiles. Hemos enviado una confirmación a la dirección que nos indicó y no contactaremos con sus referencias sin pedírselo antes por escrito.",
    },
    consult: {
      eyebrow: "Consulta privada",
      title: "Confirme el encaje antes de presentarse.",
      lede:
        "Una conversación breve y confidencial con el equipo de curaduría para decidir qué programa le conviene y responder a lo que un formulario no puede. Respondemos en cinco días hábiles.",
      received: "Solicitud recibida",
      receivedHeadline: "Gracias. Nos pondremos en contacto.",
      receivedBody:
        "Hemos enviado una confirmación a la dirección que nos indicó. Un miembro del equipo de curaduría le escribirá en cinco días hábiles para concertar la llamada.",
    },
    cohort: {
      eyebrow: "Para socios institucionales",
      titlePart1: "Encargue una",
      titleGold: "cohorte privada.",
      lede:
        "Cohortes cerradas e intensivos temáticos diseñados para socios institucionales. Impartimos en EN / DE / FR, en formatos de tres días a una semana completa. Respondemos en cinco días hábiles.",
      received: "Consulta recibida",
      receivedHeadline: "Gracias. Nos pondremos en contacto.",
      receivedBody:
        "Hemos enviado una confirmación a la dirección que nos indicó. Un miembro del equipo de curaduría le escribirá en cinco días hábiles para hablar del formato, las fechas y el público.",
    },
    dossier: {
      eyebrow: "Dosier del programa",
      titlePart1: "Solicite el",
      titleGold: "dosier del programa.",
      lede:
        "El dosier presenta cada programa al detalle: estructura, anfitriones, tarifas, qué incluye y para quién está pensada la semana. También le escribiremos antes que a nadie cuando se confirmen las fechas de las cohortes fundadoras de 2026.",
      received: "Solicitud recibida",
      receivedHeadline: "Gracias. El dosier está en camino.",
      receivedBody:
        "Enviaremos el dosier en cinco días hábiles y volveremos a escribirle en cuanto se confirmen las fechas de las cohortes fundadoras de 2026. Puede darse de baja de estos avisos cuando quiera.",
    },
    legalSidebar: "Aviso legal",
    programmeDetail: {
      outcomesEyebrow: "Con qué se marcha",
      outcomesHeadline: "Tres resultados, no eslóganes.",
      architectureEyebrow: "Arquitectura del programa",
      architectureHeadline: "Cómo se desarrolla el programa.",
      cohortsEyebrow: "Próximas cohortes",
      cohortsHeadline: "Cuándo se celebra.",
      hostsEyebrow: "Anfitriones y claustro de este programa",
      hostsHeadlinePart1: "Consultables antes de solicitar.",
      hostsHeadlineGold: "Presentes toda la semana.",
      formatEyebrow: "Formato",
      formatHeadline: "Cómo funciona.",
      investmentEyebrow: "Inversión",
      investmentSub: "Tarifa del programa · por participante",
      includesLabel: "Incluye",
      excludesLabel: "No incluye",
      postureEyebrow: "Quién se presenta",
      postureHeadline: "Para quién es el programa.",
      forLabel: "Para",
      notForLabel: "No para",
      faqEyebrow: "Preguntas frecuentes",
      faqHeadline: "Preguntas, respondidas.",
      noCohortsNote:
        "Las fechas de este programa aún no están confirmadas. Solicite el dosier del programa y le escribiremos en cuanto lo estén.",
    },
  },
  fields: {
    firstName: "Nombre",
    lastName: "Apellidos",
    email: "Correo electrónico",
    role: "Cargo",
    organisation: "Organización",
    institution: "Institución",
    country: "País",
    programmeOfInterest: "Programa de interés",
    selectProgramme: "Seleccione un programa",
    allProgrammes: "Los tres programas",
    notSure: "No estoy seguro — les pido consejo",
    preferredCohort: "Periodo preferido",
    preferredCohortHint:
      "Las fechas de 2026 aún no están confirmadas. Díganos qué parte del año le conviene y le asignaremos una cohorte.",
    objective: "¿Qué espera obtener de la semana?",
    objectiveHint: "Sea concreto: lo leemos con atención. De dos a cuatro frases.",
    contribution: "¿Qué va a aportar?",
    contributionHint: "Doce personas con experiencia son un recurso antes que un público. De dos a cuatro frases.",
    refereeIntro:
      "Dos referencias que puedan hablar de cómo trabaja con otros. No las contactaremos sin pedírselo antes por escrito.",
    refereeName: "Referencia — nombre",
    refereeEmail: "Referencia — correo electrónico",
    consentApply:
      "Confirmo que presento esta candidatura de forma confidencial y consiento que Vision Goal GmbH trate la información que contiene conforme a las condiciones de candidatura y a la política de privacidad.",
    consentConsult:
      "Consiento que Vision Goal GmbH trate esta solicitud conforme a la política de privacidad. La llamada es confidencial por defecto.",
    consentCohort:
      "Confirmo que estoy autorizado a realizar esta consulta en nombre de mi institución y consiento que Vision Goal GmbH la trate conforme a la política de privacidad.",
    consentContact:
      "Consiento que Vision Goal GmbH trate este mensaje conforme a la política de privacidad para poder responderme.",
    consentNewsletter:
      "Consiento que Vision Goal GmbH me envíe el dispatch por correo electrónico y trate mi dirección conforme a la política de privacidad. Puedo darme de baja cuando quiera.",
    consentDossier:
      "Consiento que Vision Goal GmbH me envíe el dosier del programa y los avisos de fechas de cohorte, y que trate mis datos conforme a la política de privacidad.",
    audience: "Público",
    audienceHint: "¿Para quién se encarga la cohorte?",
    audiencePlaceholder: "p. ej. alumni sénior; directivos en camino a socio",
    format: "Formato",
    selectFormat: "Seleccione un formato",
    formatThree: "Intensivo de tres días",
    formatChatham: "Cuatro días bajo la regla de Chatham House",
    formatWeek: "Semana a medida",
    formatModular: "Modular / en varias fases",
    formatUndecided: "Sin decidir — les pido consejo",
    languages: "Idiomas preferidos",
    dates: "Fechas preferidas",
    description: "Breve descripción del encargo",
    descriptionHint:
      "Público, objetivo y cualquier limitación. Bastan de tres a seis frases.",
    subject: "Asunto",
    message: "Mensaje",
    messageHint: "Bastan de tres a seis frases.",
    timing: "Periodo preferido",
    timingHint: "Indique una o dos franjas preferidas. Nosotros confirmaremos la cita.",
    timingPlaceholder: "p. ej. miércoles por la tarde, hora de Europa central",
    cohortPlaceholder: "p. ej. primavera de 2026",
    discussTopic: "Lo que le gustaría tratar",
    discussHint: "Bastan de tres a cinco frases. Sea lo más concreto posible.",
  },
  footer: {
    blurb:
      "Una plataforma suiza de intensivos ejecutivos en formato reducido y acceso real al mundo empresarial: tres programas insignia, doce participantes cada uno, dirigidos por profesionales en activo.",
    sectionProgrammes: "Programas",
    sectionPlatform: "Plataforma",
    sectionApply: "Candidatura",
    linkApplication: "Candidatura",
    linkPrivateConsultation: "Consulta privada",
    linkPrivateCohort: "Consulta de cohorte privada",
    linkContact: "Contacto",
    legalImprint: "Aviso legal",
    legalPrivacy: "Privacidad",
    legalCookies: "Cookies",
    legalApplicationTerms: "Condiciones de candidatura",
    copyright: "© 2026 Vision Goal GmbH · Pfäffikon SZ, Suiza · CHE-488.435.445",
    contactEyebrow: "Línea directa",
    contactPhoneLabel: "Teléfono",
    contactEmailLabel: "Correo electrónico",
    contactResponseLabel: "Plazo de respuesta",
    contactResponseValue: "En cinco días hábiles, en todas las consultas",
    contactPhone: "+41 78 728 09 33",
    contactEmail: "info@visiongoal.ch",
  },
};

const zh: Dict = {
  meta: {
    title: "Vision Goal — 精选瑞士门径，仅接受申请",
    description:
      "瑞士高端平台，提供小规模同期班沉浸式课程与切实的商业门径——三大旗舰项目，由在职从业者主持，仅接受申请。",
  },
  nav: {
    home: "首页",
    programmes: "项目",
    hosts: "主持人",
    alumni: "校友",
    insights: "洞见",
    about: "关于",
    apply: "申请",
    privateOffice: "私人办公室",
    skipToContent: "跳至正文",
    primaryNav: "主导航",
  },
  cta: {
    applyNext: "申请首届同期班",
    requestConsult: "申请私密咨询 →",
    applyForCohort: "申请首届同期班",
    submitEnquiry: "提交咨询",
    readProgramme: "查看项目详情",
    allProgrammes: "全部项目",
    allHosts: "全部主持人与讲席",
    allInsights: "全部洞见",
    subscribe: "订阅",
    send: "发送 →",
    sending: "正在发送…",
    continue: "继续 →",
    previous: "← 上一步",
    submitApplication: "提交申请",
    requestDossier: "索取项目资料册 →",
  },
  dispatch: {
    label: "Dispatch",
    items: [
      "Swiss Business Access Immersion · 苏黎世 · 2026 首届同期班 · 日期待公布",
      "Private Swiss Banking & Wealth Intensive · 日内瓦 · 2026 首届同期班 · 日期待公布",
      "Swiss Finance Week · 苏黎世 · 2026 首届同期班 · 日期待公布",
      "索取项目资料册，第一时间获得通知",
      "每届同期班十二位参与者 · 由在职从业者主持",
      "每份申请单独审阅 · 我们在五个工作日内回复",
    ],
  },
  hero: {
    eyebrow: "瑞士高管沉浸式课程 · 每份申请单独审阅",
    line1: "走进瑞士的",
    line2: "商业、金融",
    line3: "与领导力。",
    subline:
      "面向企业家、机构负责人与国际专业人士的小组高管沉浸式课程——切实接触瑞士商业文化、金融体系，以及背后的人。",
    subjects: "高管沉浸式课程 · 瑞士门径 · 私人办公室",
    statusReviewing: "2026 首届同期班 · 日期待公布",
    locationLine: "苏黎世 · 日内瓦 · 精选瑞士场地",
    scrollToProgrammes: "查看项目 ↓",
  },
  posture: {
    eyebrow: "平台如何运作",
    sub: "瑞士高管沉浸式课程 · 从业者主持 · 私下引荐",
    pillars: [
      { label: "单独审阅", line: "从不公开招生。" },
      { label: "十二位参与者", line: "硬性上限，而非目标。" },
      { label: "从业者主持", line: "申请之前即已公布姓名。" },
    ],
  },
  programmesBlock: {
    eyebrow: "旗舰高管密训",
    headline: "三个瑞士密训项目。",
    headlineGold: "每期十二个席位。",
  },
  programmeMeta: {
    access: {
      name: "Swiss Business Access Immersion",
      tagline:
        "五天深入瑞士商业内部——走访中小企业、进入董事会议室、体验待客之道，以及书本上读不到的经营文化。",
      durationLabel: "5 天 · 驻场",
      city: "苏黎世",
    },
    banking: {
      name: "Private Swiss Banking & Wealth Intensive",
      tagline:
        "四天深入瑞士私人银行业——在查塔姆宫规则下，与具名从业者闭门交流。",
      durationLabel: "4 天 · 查塔姆宫规则",
      city: "日内瓦",
    },
    topic: {
      name: "Swiss Finance Week",
      tagline:
        "五天围绕瑞士金融的一个议题展开——由从业者带领的小型工作会议。",
      durationLabel: "5 天 · 专题",
      city: "苏黎世",
    },
  },
  hostsStrip: {
    eyebrow: "主持人与讲席",
    headline: "申请之前即已公布姓名。",
    headlineGold: "全程在场。",
    cta: "全部主持人与讲席",
  },
  editorial: {
    eyebrow: "场地",
    headline: "编辑取向。克制。",
    headlineGold: "瑞士。",
    side: "真实的工作场所。十二位参与者。默认保密。",
    tiles: [
      { label: "苏黎世", caption: "驻场" },
      { label: "日内瓦", caption: "闭门" },
      { label: "阿尔卑斯静修", caption: "不作记录" },
      { label: "私人沙龙", caption: "十二人同席" },
    ],
  },
  cohorts: {
    eyebrow: "2026 首届同期班",
    headline: "三个项目。",
    headlineGold: "日期待公布。",
    note: "只有在场地与主持人均已签约后，我们才公布日期。索取项目资料册，我们会第一时间写信告知您。",
    statusAnnouncing: "待公布",
    statusScheduled: "已排期",
    statusClosed: "已关闭",
  },
  alumni: {
    eyebrow: "网络",
    intro: "",
    voicesEyebrow: "参与者自述",
    voicesHeadline: "参与者怎么说。",
    voicesHeadlineGold: "仅在获得同意后发布。",
    pastEyebrow: "已举办的同期班",
    pastHeadline: "已举办场次的记录。",
  },
  insights: {
    eyebrow: "洞见",
    headline: "从业者笔记。",
    headlineGold: "瑞士视角。",
    practitionerNotes: "从业者笔记。",
    featuredLabel: "精选",
    dispatchEyebrow: "Dispatch",
    dispatchHeadline: "每月两篇。",
    dispatchHeadlineGold: "绝无推销。",
    dispatchHelp: "大约每月两篇。可随时取消订阅。",
    dispatchOk:
      "谢谢。请查收我们刚刚发送的邮件并点击确认链接——在此之前我们不会向您发送任何内容。",
    emailPlaceholder: "您的邮箱",
  },
  privateBanner: {
    eyebrow: "面向机构合作方",
    headline: "定制一场",
    headlineGold: "专属同期班。",
    response: "我们在五个工作日内回复。",
  },
  ctaBlock: {
    eyebrow: "准备申请",
    line1: "十二个席位。",
    line2: "每一个都经过考量。",
  },
  trust: {
    eyebrow: "平台数据",
    stats: [
      { value: "33", label: "创办人在瑞士私人银行业的从业年数" },
      { value: "3", label: "旗舰项目" },
      { value: "12", label: "每届参与者上限" },
      { value: "12", label: "同行评审出版物" },
    ],
  },
  enrich: {
    programmesUnitedEyebrow: "共通之处",
    programmesUnitedHeadline: "三个项目，同一标准。",
    programmesUnitedItems: [
      {
        title: "主持，而非讲授",
        body: "每场会议都由在职从业者带领。我们不请舞台演讲者，只邀请能回答追问的人。",
      },
      {
        title: "十二人，而非二十人",
        body: "同期班的规模，确保每位参与者每天都能发言，每次引荐都出于用心。这一选择带来的成本由我们承担。",
      },
      {
        title: "申请，而非报名",
        body: "我们看重您的目标有多具体、您能带来什么——而不是头衔与预算。",
      },
    ],
    hostsCriteriaEyebrow: "我们对主持人的要求",
    hostsCriteriaHeadline: "从业者的判断力，而非平台上的名气。",
    hostsCriteriaItems: [
      {
        title: "实际经营记录",
        body: "主持人都亲手做过这份工作。我们邀请在其负责领域拥有可查证经历的从业者。",
      },
      {
        title: "习惯不作记录的场合",
        body: "在舞台上最出色的人，在闭门会议中往往并非如此。我们寻找的是把真正有用的内容留给闭门场合的从业者。",
      },
      {
        title: "为同期班留出时间",
        body: "主持人承诺全程参与，而不是讲完主题演讲就登机回家。小组之所以小，正是为了让主持人能留下来。",
      },
    ],
    alumniNumbersEyebrow: "网络如何运作",
    alumniNumbersHeadline: "规模不大，用心维系。",
    alumniStats: [
      { value: "12", label: "每届参与者上限" },
      { value: "2", label: "两座城市：苏黎世与日内瓦" },
      { value: "12", label: "个月的后续联络" },
      { value: "1", label: "每年一次重聚" },
    ],
    insightsCategoriesEyebrow: "编辑栏目",
    insightsCategoriesHeadline: "我们发布的五个栏目。",
    insightsCategoriesItems: [
      {
        name: "Swiss Access",
        body: "关于经营文化、中小企业评估，以及瑞士与世界之间真正有效的桥梁的笔记。",
      },
      {
        name: "Private Banking",
        body: "从业者水准的瑞士私人银行业观察——保密、监管，以及留在闭门场合里的那些问题。",
      },
      {
        name: "Markets",
        body: "宏观视角与瑞士资本市场评论，由与议题切身相关的从业者撰写。",
      },
      {
        name: "Methodology",
        body: "我们为何这样办项目——为什么是十二人、查塔姆宫规则，以及申请是如何被审阅的。",
      },
      {
        name: "Dispatches",
        body: "同期班结束后的简短笔记：说了什么、没说什么，以及一个月后参与者又回头讨论了什么。",
      },
    ],
    aboutPrinciplesEyebrow: "运作准则",
    aboutPrinciplesHeadline: "我们坚持的五条规则。",
    aboutPrinciplesItems: [
      {
        title: "宁精不多",
        body: "我们宁愿把十二个席位填得妥当，也不愿把二十个席位填得很快。同期班条件不成熟时，我们会推迟，而不是凑人数。",
      },
      {
        title: "从业者优于表演者",
        body: "主持人以个人身份出席，并非营销名单的一部分，且全程留在项目中。",
      },
      {
        title: "默认保密",
        body: "会议不作录音录像，未经书面同意不公布参与者姓名，媒体报道属于例外。",
      },
      {
        title: "具体优于形式",
        body: "申请问题要求细节。项目结构承诺的是阶段安排，而不是口号。费用公开列示，不作议价。",
      },
      {
        title: "业务范围清晰直白",
        body: "Vision Goal 提供的是门径、引荐与瑞士商业实务经验。它既不是课程，也不是咨询项目，并且不持有 FINMA 牌照。凡涉及受监管的业务，均由您所接触的持牌从业者承担。",
      },
    ],
  },
  pages: {
    programmes: {
      eyebrow: "旗舰密训项目",
      titlePart1: "三个项目。",
      titleGold: "每期十二个席位。",
      lede:
        "每个项目规模都小，由仍在一线工作的从业者带领，并建立在同样的三项承诺之上：克制胜于规模、证据胜于断言、判断胜于表演。",
    },
    hosts: {
      eyebrow: "主持人与讲席",
      titlePart1: "申请之前即已公布姓名。",
      titleGold: "全程在场。",
      lede:
        "主持人与讲席以从业者身份出现在这里，并以个人身份参与。凡未确认合作的人，我们不会列出。",
      principleEyebrow: "这份名单如何维护",
      principleBody:
        "我们不会列出所有曾经登台的人。创始策划人已在此列；各项目的主持人按周期逐一确认。标注为示例的档案属占位内容，将在首届同期班开放申请前替换为已确认的主持人。",
    },
    alumni: {
      eyebrow: "网络",
      titlePart1: "与您同席的",
      titleGold: "会是哪些人。",
      lede:
        "只有在获得书面同意后，我们才会公布参与者身份。这个网络刻意保持小规模；它的价值在于成员是谁，而不在于人数多少。",
      postureEyebrow: "网络如何运作",
      postureHeadline: "选择性正是关键。",
      postureBody:
        "成员可以申请引荐给另一位参与者，策划团队会逐一安排。主持人每季度的 Dispatch 与每年一次的重聚，让这个网络保持热度而不喧闹。",
      noVoicesHeadline: "暂未发布参与者自述。",
      noVoicesBody:
        "2026 首届同期班尚未举办。只有在参与者亲自给出自述、并以书面方式确认措辞之后，我们才会发布，因此这里暂时没有内容——我们也不会编造任何内容来填补。",
      noCohortsHeadline: "尚未举办任何同期班。",
      noCohortsBody:
        "本页将在每届同期班举办后逐一记录：日期、成员构成，以及带领它的主持人。在第一届举办之前，本页保持空白。",
    },
    insightsIndex: {
      eyebrow: "洞见",
      titlePart1: "从业者笔记。",
      titleGold: "瑞士视角。",
      lede:
        "关于瑞士门径、私人银行、市场，以及这些项目如何构建的深思笔记。大约每月两篇；绝不推销。",
    },
    about: {
      eyebrow: "关于平台",
      titlePart1: "瑞士高管门径，",
      titleGold: "亲身参与。",
      lede:
        "Vision Goal 为希望切实接触瑞士金融、商业文化及其中人物的企业家、高管与国际专业人士，打造小规模的瑞士高管项目。",
      statement:
        "Vision Goal 运营三个旗舰密训项目——苏黎世的 Swiss Business Access Immersion、日内瓦的 Private Swiss Banking & Wealth Intensive，以及每年围绕一个当下议题举办的 Swiss Finance Week——并设有私人办公室，服务那些更需要一次引荐而非一个同期班席位的机构负责人。",
      statement2:
        "平台的规模是刻意保持小的。您所获得的是门径、判断力，以及难以通过其他途径集齐的瑞士商业实务经验。它不是课程，不是咨询项目，也不是受监管的金融服务。",
      standardsEyebrow: "标准与伦理",
      standardsHeadline: "我们如何运作。",
      pressEyebrow: "媒体与认可",
      pressHeadline: "精选报道。",
      curatorEyebrow: "策划人的话",
      curatorNote:
        "这个平台之所以存在，是为了十二个人在不作记录的前提下、与一位无物可售的主持人共处四天时所发生的一切。其余的一切——网站、Dispatch、文字——都为此服务。只要那几天保持诚实，其余自然成立。",
      curatorAttribution: "Vision Goal · Pfäffikon SZ",
    },
    contact: {
      eyebrow: "联系",
      titlePart1: "简短来信。",
      titleGold: "认真回复。",
      lede:
        "申请事宜请使用申请表，专属同期班咨询请使用机构咨询表。其他一切事宜，请用本页。",
      officeEyebrow: "注册办公地址",
      emailLabel: "邮箱",
      phoneLabel: "电话",
      responseLabel: "回复时间",
      responseValue: "五个工作日内",
      received: "消息已收到",
      receivedHeadline: "谢谢。您的消息已送达。",
      receivedBody:
        "我们已向您提供的邮箱发送确认函，并将在五个工作日内回复。",
    },
    apply: {
      eyebrow: "申请首届同期班",
      titlePart1: "一份简短的申请。",
      titleGold: "一次认真的审阅。",
      lede:
        "每个席位都单独审阅。申请刻意简短——我们看的是具体程度，而非篇幅——无论结果如何，我们都会在五个工作日内回复。",
      steps: ["身份", "项目", "为何是现在", "推荐人", "确认"],
      stepLegend: { identity: "身份", programme: "项目", whyNow: "为何是现在", referees: "推荐人" },
      received: "申请已收到",
      receivedHeadline: "谢谢。我们会与您联系。",
      receivedBody:
        "策划团队会完整阅读每一份申请，并在五个工作日内回复。我们已向您提供的邮箱发送确认函；在未以书面形式征得您同意之前，我们不会联系您的推荐人。",
    },
    consult: {
      eyebrow: "私密咨询",
      title: "在申请之前先确认是否合适。",
      lede:
        "与策划团队进行一次简短、保密的通话，确认哪个项目适合您，并回答申请表无法解决的问题。我们在五个工作日内回复。",
      received: "请求已收到",
      receivedHeadline: "谢谢。我们会与您联系。",
      receivedBody:
        "我们已向您提供的邮箱发送确认函。策划团队成员将在五个工作日内写信与您安排通话。",
    },
    cohort: {
      eyebrow: "面向机构合作方",
      titlePart1: "定制一场",
      titleGold: "专属同期班。",
      lede:
        "为机构合作方打造的封闭同期班与专题密训。我们可用英语、德语或法语交付，形式从三天到整周不等。我们在五个工作日内回复。",
      received: "咨询已收到",
      receivedHeadline: "谢谢。我们会与您联系。",
      receivedBody:
        "我们已向您提供的邮箱发送确认函。策划团队成员将在五个工作日内写信，与您商讨形式、时间与受众。",
    },
    dossier: {
      eyebrow: "项目资料册",
      titlePart1: "索取",
      titleGold: "项目资料册。",
      lede:
        "资料册完整介绍每个项目：结构、主持人、费用、包含哪些内容，以及这一周为谁而设。2026 首届同期班日期确认后，我们也会第一时间写信告知您。",
      received: "请求已收到",
      receivedHeadline: "谢谢。资料册正在发送中。",
      receivedBody:
        "我们将在五个工作日内发送资料册，并在 2026 首届同期班日期确认后再次写信告知。您可随时取消这类通知。",
    },
    legalSidebar: "法律信息",
    programmeDetail: {
      outcomesEyebrow: "您将带走什么",
      outcomesHeadline: "三项成果——不是口号。",
      architectureEyebrow: "项目结构",
      architectureHeadline: "项目如何进行。",
      cohortsEyebrow: "下一批同期班",
      cohortsHeadline: "举办时间。",
      hostsEyebrow: "本项目的主持人与讲席",
      hostsHeadlinePart1: "申请前即可查阅。",
      hostsHeadlineGold: "全程在场。",
      formatEyebrow: "形式",
      formatHeadline: "运作方式。",
      investmentEyebrow: "投入",
      investmentSub: "项目费用 · 每位参与者",
      includesLabel: "包含",
      excludesLabel: "不包含",
      postureEyebrow: "谁在申请",
      postureHeadline: "本项目适合谁。",
      forLabel: "适合",
      notForLabel: "不适合",
      faqEyebrow: "常见问题",
      faqHeadline: "问题，逐一解答。",
      noCohortsNote:
        "本项目日期尚未确认。索取项目资料册，日期一经确定我们就会写信告知您。",
    },
  },
  fields: {
    firstName: "名",
    lastName: "姓",
    email: "邮箱",
    role: "职务",
    organisation: "机构",
    institution: "所属机构",
    country: "国家/地区",
    programmeOfInterest: "感兴趣的项目",
    selectProgramme: "请选择项目",
    allProgrammes: "全部三个项目",
    notSure: "尚不确定——请给我建议",
    preferredCohort: "希望的时间段",
    preferredCohortHint:
      "2026 年的日期尚未确定。请告知您方便的时段，我们会为您匹配同期班。",
    objective: "您希望从这一周中获得什么？",
    objectiveHint: "请具体说明——我们会仔细阅读。两到四句话。",
    contribution: "您能带来什么？",
    contributionHint: "十二位资深人士首先是资源，然后才是听众。两到四句话。",
    refereeIntro:
      "请提供两位能说明您与他人共事方式的推荐人。在未以书面形式征得您同意之前，我们不会联系他们。",
    refereeName: "推荐人 — 姓名",
    refereeEmail: "推荐人 — 邮箱",
    consentApply:
      "我确认本申请以保密方式提交，并同意 Vision Goal GmbH 依据申请条款与隐私政策处理其中的信息。",
    consentConsult:
      "我同意 Vision Goal GmbH 依据隐私政策处理本请求。通话默认保密。",
    consentCohort:
      "我确认本人有权代表所属机构提出此咨询，并同意 Vision Goal GmbH 依据隐私政策进行处理。",
    consentContact:
      "我同意 Vision Goal GmbH 依据隐私政策处理本消息，以便回复我。",
    consentNewsletter:
      "我同意 Vision Goal GmbH 通过电子邮件向我发送 Dispatch，并依据隐私政策处理我的邮箱地址。我可以随时取消订阅。",
    consentDossier:
      "我同意 Vision Goal GmbH 向我发送项目资料册及同期班日期通知，并依据隐私政策处理我的个人信息。",
    audience: "受众",
    audienceHint: "这场同期班是为谁定制的？",
    audiencePlaceholder: "例如：资深校友；合伙人晋升通道上的负责人",
    format: "形式",
    selectFormat: "请选择形式",
    formatThree: "三天密训",
    formatChatham: "四天查塔姆宫规则会议",
    formatWeek: "定制一周",
    formatModular: "模块化 / 多次触点",
    formatUndecided: "尚未决定——请给我建议",
    languages: "希望使用的语言",
    dates: "希望的日期",
    description: "对合作内容的简要说明",
    descriptionHint:
      "受众、目标以及任何限制条件。三到六句话即可。",
    subject: "主题",
    message: "留言",
    messageHint: "三到六句话即可。",
    timing: "希望的时间段",
    timingHint: "请给出一两个方便的时间窗口。我们会确认具体时段。",
    timingPlaceholder: "例如：中欧时间周三下午",
    cohortPlaceholder: "例如：2026 年春季",
    discussTopic: "您希望讨论的内容",
    discussHint: "三到五句话即可。请尽可能具体。",
  },
  footer: {
    blurb:
      "一个瑞士平台，提供小规模高管密训与切实的商业门径——三大旗舰项目，每届十二位参与者，由在职从业者带领。",
    sectionProgrammes: "项目",
    sectionPlatform: "平台",
    sectionApply: "申请",
    linkApplication: "申请表",
    linkPrivateConsultation: "私密咨询",
    linkPrivateCohort: "专属同期班咨询",
    linkContact: "联系",
    legalImprint: "公司信息",
    legalPrivacy: "隐私",
    legalCookies: "Cookie",
    legalApplicationTerms: "申请条款",
    copyright: "© 2026 Vision Goal GmbH · Pfäffikon SZ, 瑞士 · CHE-488.435.445",
    contactEyebrow: "直线联络",
    contactPhoneLabel: "电话",
    contactEmailLabel: "邮箱",
    contactResponseLabel: "回复时限",
    contactResponseValue: "每一项咨询均在五个工作日内回复",
    contactPhone: "+41 78 728 09 33",
    contactEmail: "info@visiongoal.ch",
  },
};

export const dictionaries: Record<Locale, Dict> = { en, de, fr, es, zh };
