// Placeholder content used at the landing-page stage before the CMS is wired up.
// Every visible string must move into Sanity / locale files before launch — see CLAUDE.md §11.
//
// Pre-launch posture (client feedback pass 2): no specific programme names,
// prices, durations, cities, participant limits, hosts, venues, dates, alumni
// promises. What ships now describes indicative FORMATS the platform runs —
// generic Experience shapes, no products for sale. Once real cohorts are
// confirmed we can reintroduce named programmes with fees, dates and
// locations here.

export type Programme = {
  id: "access" | "banking" | "topic";
  slug: "access" | "banking" | "topic";
  name: string;
  tagline: string;
  oneLineFor: string;
  outcome: string;
  href: string;
  whoFor: string;
  notFor: string;
  architecture: { phase: string; title: string; body: string }[];
  faqs: { q: string; a: string }[];
  outcomes: string[];
};

// Indicative Experience formats. Not products for sale — no fees, dates,
// cities, participant limits, hosts or venues are stated until they are
// confirmed for a specific cohort. The three ids are internal only; visible
// names describe the shape of the learning, not a fixed programme.
export const programmes: Programme[] = [
  {
    id: "access",
    slug: "access",
    name: "Business Immersion Experience",
    tagline:
      "An applied immersion in Swiss business — connecting operating culture, SME visits and considered peer dialogue.",
    oneLineFor:
      "Entrepreneurs, executives and family principals who want practical, working exposure to Swiss business — not a lecture room.",
    outcome:
      "A working feel for Swiss operating culture, applied dialogue with practitioners, and a curated network built on shared context.",
    href: "/experiences/access",
    whoFor:
      "Entrepreneurs, senior executives, family principals and corporate decision-makers engaging with Switzerland — by expansion, partnership or capital deployment. Considered seniority; specific objectives.",
    notFor:
      "Open enrolment, generic networking circuits, or professionals building a CV. The rooms are small on purpose.",
    architecture: [
      {
        phase: "Before",
        title: "Structured preparation",
        body: "A structured pre-experience briefing: curated reading, framing conversations, and a written brief on your specific access objectives. The room arrives ready.",
      },
      {
        phase: "Inside",
        title: "In the room",
        body: "Working sessions inside Swiss businesses and operating environments, small-group dialogue with practitioners, and considered peer exchange. Not a lecture room — a working series of sessions inside Swiss business.",
      },
      {
        phase: "After",
        title: "Continued dialogue",
        body: "Considered follow-on dialogue, tailored to the objectives you brought into the room. Details of any continued-access format are confirmed at the time each experience is announced.",
      },
    ],
    faqs: [
      {
        q: "How is this different from an executive programme at a business school?",
        a: "Vision Goal does not run a school or a course. The deliverable is applied learning and considered access — hosted by practitioners, in small rooms, with a working brief you can act on. There is no certificate; the room is the deliverable.",
      },
      {
        q: "Will participants be named publicly?",
        a: "Discretion is the default. Participant registers are shared inside the room only. Public attribution requires written consent.",
      },
      {
        q: "How do I engage?",
        a: "Start with a conversation via the contact form. Vision Goal listens, understands your context, and comes back with what could be relevant.",
      },
    ],
    outcomes: [
      "Applied exposure — working sessions inside Swiss operating environments, matched against a brief you have written.",
      "Operating-culture judgement — the quiet signals that read inside Swiss businesses, drawn from practitioner commentary in the room.",
      "A small, considered network — built on shared context, not badge collection.",
    ],
  },
  {
    id: "banking",
    slug: "banking",
    name: "Finance & Wealth Intensive",
    tagline:
      "A focused format for practitioner-grade dialogue on finance, wealth planning and governance — under considered discretion.",
    oneLineFor:
      "Senior professionals, family principals and adjacent operators who want practitioner-grade insight and a network built from shared context.",
    outcome:
      "A working map of the practitioner landscape, considered dialogue behind closed doors, and judgement you can bring back to your remit.",
    href: "/experiences/banking",
    whoFor:
      "Senior professionals, family principals and adjacent operators in wealth, banking, family office or wealth-planning practice. Practitioner-grade audience by conversation.",
    notFor:
      "Retail investors, sales professionals seeking leads, or media. Sessions are closed; nothing said is for attribution.",
    architecture: [
      {
        phase: "Before",
        title: "Framing & briefing",
        body: "Curated framing on the landscape — structures, current practitioner debates, the questions worth holding in the room — circulated ahead of each session.",
      },
      {
        phase: "Inside",
        title: "In the room",
        body: "Sessions built around applied practitioner judgement, held under discretion. Nothing recorded; nothing for attribution. The room is small and closed on purpose.",
      },
      {
        phase: "After",
        title: "Continued dialogue",
        body: "Considered follow-on where useful. Any continued-access format is confirmed at the time each session is scheduled.",
      },
    ],
    faqs: [
      {
        q: "Is this a school programme or a consulting engagement?",
        a: "Neither. Vision Goal creates applied learning experiences — practitioner-grade conversation behind closed doors, and considered judgement you can bring back to your remit. There is no certificate and no deliverable; the room is the deliverable.",
      },
      {
        q: "What does discretion mean here?",
        a: "Participants may use what is said but never identify the speaker or any other participant. Recordings are not permitted; notes are personal use only.",
      },
      {
        q: "How do I engage?",
        a: "Reach out via the contact form. A short conversation is the first step — no application process before a specific format is confirmed.",
      },
    ],
    outcomes: [
      "Practitioner-grade dialogue — closed-room conversation with senior practitioners.",
      "A working map of the landscape — the questions that are actually held in the room, not the ones on a stage.",
      "A small, considered network — practitioners you can call on when the question is real.",
    ],
  },
  {
    id: "topic",
    slug: "topic",
    name: "Themed Learning Sessions",
    tagline:
      "Themed, curated sessions built around a specific question — hosted, small, and applied.",
    oneLineFor:
      "Senior contributors with a working stake in the question being held — by conversation, not audience.",
    outcome:
      "A working synthesis on the question in play, a curated set of contributors, and a follow-on you can actually return to.",
    href: "/experiences/topic",
    whoFor:
      "Senior professionals, institutional partners, family principals and policy practitioners with a working stake in the announced theme. Contributory posture, not observational.",
    notFor:
      "Press, junior staff seeking exposure, or vendors prospecting. Sessions are for working contributors; the room is curated.",
    architecture: [
      {
        phase: "Before",
        title: "Thematic framing",
        body: "A structured framing circulated ahead of each session — the primary questions, the sources worth reading, the shape of the conversation. Arrive prepared.",
      },
      {
        phase: "Inside",
        title: "In the room",
        body: "Curated sessions built around a specific question, each hosted by a practitioner with working judgement on it. The format ends with a synthesis conversation.",
      },
      {
        phase: "After",
        title: "Synthesis & follow-on",
        body: "A short post-session synthesis captures the divergences and follow-on questions worth returning to. Continued-access details are confirmed per session.",
      },
    ],
    faqs: [
      {
        q: "Is this a conference or a course?",
        a: "Neither. It is a curated set of working sessions for senior contributors on a specific question. No plenary stage, no audience, no certificate — small rooms, host-led, applied.",
      },
      {
        q: "How is the theme selected?",
        a: "By conversation with practitioners — the questions that are currently live, not the ones that read well on a poster.",
      },
      {
        q: "Do I need expertise in the theme to attend?",
        a: "A working stake, not academic expertise. Sessions are built for contributors who can move the question forward.",
      },
      {
        q: "Will the proceedings be published?",
        a: "The post-session synthesis is shared with those in the room only. Public publication of any specific exchange requires written consent from those present.",
      },
    ],
    outcomes: [
      "A working synthesis of the question in play — drawn from sessions designed for contributors with operational stake, not audience.",
      "A post-session synthesis — shared with those in the room — capturing divergences and follow-on questions.",
      "Considered follow-on where useful — named introductions to other contributors on request.",
    ],
  },
];

export type Host = {
  name: string;
  slug: string;
  role: string;
  initials: string;
  expertise: string[];
  bio: string;
  programmes: ("access" | "banking" | "topic")[];
  // Placeholder LinkedIn URL — real URLs are set in the CMS at launch.
  // These are intentionally set to the LinkedIn root so the link works in dev
  // without fabricating identities. Replace before going live.
  linkedin: string;
  // True if the host record is a placeholder profile pending the real
  // confirmed roster. Surfaces a "Faculty TBA" badge in UI and keeps us honest.
  placeholder?: boolean;
};

// Pre-launch posture: we name only confirmed contributors who have approved
// public listing. The founder is named here; per-programme contributors are
// confirmed individually for each programme cycle and added once their
// participation has been agreed publicly. Do NOT add placeholder host
// records — keep the list truthful even if it is small.
export const hosts: Host[] = [
  {
    name: "Andreas Svoboda",
    slug: "andreas-svoboda",
    role: "Founder & Curator · More than 30 years across finance, banking, insurance, governance and executive education",
    initials: "AS",
    expertise: ["Wealth planning", "Governance", "Executive education"],
    bio: "Founder of Vision Goal (2022). More than 30 years across finance, banking, insurance, governance and executive education — including twelve years at Bank Julius Bär & Co. AG as Head of Wealth Planning, Life & Pension across Switzerland and Singapore, and earlier roles at UBS, Credit Suisse, and Zürcher Kantonalbank. FCCA, CFP®, Swiss Asset Manager licence, FINMA Insurance Broker authorisation; LL.M., MSc, DBA. Twelve peer-reviewed papers on banking, sustainable finance, ESG, and cross-border life insurance.",
    programmes: ["access", "banking", "topic"],
    linkedin: "https://www.linkedin.com/",
  },
];

export type Cohort = {
  programmeId: Programme["id"];
  programmeName: string;
  startLabel: string;
  city: string;
  language: "EN" | "DE" | "FR";
  status: "Open" | "Waitlist" | "Closed";
  seatsLine: string;
};

// No cohorts are announced. Specific dates, cities, programme names and
// participant limits will be reinstated here once real cohorts have been
// confirmed and are ready to accept participants. Until then, callers that
// import `upcomingCohorts` render nothing.
export const upcomingCohorts: Cohort[] = [];

export type AlumniVoice = {
  quote: string;
  attribution: string;
  cohortLabel: string;
};

// No alumni voices are shown pre-launch. Real, consented quotes from actual
// participants will populate this array once the first cohorts have run.
export const alumniVoices: AlumniVoice[] = [];

// Peer-reviewed publications by the founder, hosted on Academia.edu.
// These are real, attributable, and link out to the source. Sorted newest first.
export type Publication = {
  year: string;
  title: string;
  journal: string;
  href: string;
};

export const publications: Publication[] = [
  {
    year: "2025",
    title: "The Democratization of Diversification: How Exchange-Traded Funds (ETFs) Are Transforming Investment Strategies",
    journal: "Economics and Finance",
    href: "https://www.academia.edu/126873401/THE_DEMOCRATIZATION_OF_DIVERSIFICATION_HOW_EXCHANGE_TRADED_FUNDS_ETFs_ARE_TRANSFORMING_INVESTMENT_STRATEGIES",
  },
  {
    year: "2024",
    title: "Beyond the Bottom Line: Balancing Profits and Ethical Conduct in the Financial Sector",
    journal: "International Journal of Management Studies and Social Science Research",
    href: "https://www.academia.edu/124022171/Beyond_the_Bottom_Line_Balancing_Profits_and_Ethical_Conduct_in_the_Financial_Sector",
  },
  {
    year: "2024",
    title: "Gig Economy and Remote Work Challenge Traditional Retirement Planning",
    journal: "International Journal of Management Studies and Social Science Research",
    href: "https://www.academia.edu/124022194/Gig_Economy_and_Remote_Work_Challenge_Traditional_Retirement_Planning",
  },
  {
    year: "2023",
    title: "Investing in the Islamic World: Opportunities, Challenges, and Implications",
    journal: "Economics and Finance",
    href: "https://www.academia.edu/124022192/Investing_in_the_Islamic_World_Opportunities_Challenges_and_Implications",
  },
  {
    year: "2023",
    title: "The Role of Financial Services in the Transition to a Sustainable Economy",
    journal: "Journal of Strategic Innovation and Sustainability",
    href: "https://www.academia.edu/124022191/The_Role_of_Financial_Services_in_the_Transition_to_a_Sustainable_Economy",
  },
  {
    year: "2023",
    title: "The Impact of Artificial Intelligence on the Banking Industry",
    journal: "Journal of Banking and Finance Management",
    href: "https://www.academia.edu/124022189/The_Impact_of_Artificial_Intelligence_on_the_Banking_Industry",
  },
  {
    year: "2023",
    title: "Sustainable Finance: The Role of Banks",
    journal: "Journal of Insurance and Financial Management",
    href: "https://www.academia.edu/108113497/Sustainable_Finance_The_Role_of_Banks",
  },
  {
    year: "2023",
    title: "Crypto Assets in Unit-Linked Life Insurance",
    journal: "Journal of Insurance and Financial Management",
    href: "https://www.academia.edu/98785514/Crypto_Assets_in_Unit_Linked_Life_Insurance",
  },
  {
    year: "2022",
    title: "The Impact of COVID-19 on the Financial System",
    journal: "International Journal of Management Studies and Social Science Research",
    href: "https://www.academia.edu/124022190/The_Impact_of_COVID_19_on_the_Financial_System",
  },
  {
    year: "2022",
    title: "The Impact of Artificial Intelligence on the Banking Industry",
    journal: "Journal of Banking and Finance Management",
    href: "https://www.academia.edu/108288521/The_Impact_of_Artificial_Intelligence_on_the_Banking_Industry",
  },
  {
    year: "2021",
    title: "Building an ESG Investment Portfolio",
    journal: "Journal of Insurance and Financial Management",
    href: "https://www.academia.edu/62617632/Building_and_ESG_Investment_Portfolio",
  },
  {
    year: "2021",
    title: "Future Distribution of Life Insurance",
    journal: "Journal of Insurance and Financial Management",
    href: "https://www.academia.edu/59116608/Future_Distribution_of_Life_Insurance",
  },
];

export type Insight = {
  slug: string;
  category: "Swiss Access" | "Private Banking" | "Markets" | "Methodology" | "Dispatches";
  title: string;
  excerpt: string;
  authorName: string;
  authorSlug?: string;
  readingTime: string;
  href: string;
  imageKey:
    | "insightAccess"
    | "insightBanking"
    | "insightMethodology"
    | "insightApplication"
    | "insightCities"
    | "insightRefusal";
  body: string[];
};

export const featuredInsights: Insight[] = [
  {
    slug: "swiss-sme-evaluation",
    category: "Swiss Access",
    title: "How Swiss SMEs evaluate an international partner.",
    excerpt:
      "The signals that matter inside a Swiss SME — what is read in the first meeting, and what is read in the third.",
    authorName: "Vision Goal",
    readingTime: "7 min",
    href: "/insights/swiss-sme-evaluation",
    imageKey: "insightAccess",
    body: [
      "International executives often arrive in Switzerland reading the wrong signals. The bigger room, the bolder pitch, the rapid follow-up — these read elsewhere as competence; inside a Swiss SME they often read as something else entirely.",
      "Swiss SMEs evaluate on three quiet axes: the calibre of the introduction, the specificity of what is being asked, and the discipline with which a follow-up is conducted. None of these is communicated overtly; all of them are observed.",
      "What helps is preparation that shows respect for the operating culture: a written brief that is short and specific, an intermediary who is named and trusted, and a follow-up cadence that is steady rather than urgent.",
      "What does not help is volume. The Swiss SME does not select on the strength of the pitch. It selects on the credibility of the bridge.",
    ],
  },
  {
    slug: "discretion-as-posture",
    category: "Private Banking",
    title: "Discretion is a posture, not a product.",
    excerpt:
      "Why the discretion that defines Swiss private banking is read as a stance, not a feature — and what that means for the room.",
    authorName: "Vision Goal",
    readingTime: "9 min",
    href: "/insights/discretion-as-posture",
    imageKey: "insightBanking",
    body: [
      "Discretion in Swiss private banking is often described as a feature of the service. Inside the institutions that practise it well, it is described differently — as a posture that shapes which clients are taken on, which conversations are held, and how decisions are remembered.",
      "Practitioners distinguish between confidentiality, which is contractual, and discretion, which is cultural. The first is what the client signs. The second is what the institution carries.",
      "A discreet posture is conservative on language, slow to introduce, and watchful on attribution. It is also commercially expensive — it limits what one will say in a marketing room — and that is precisely why clients of a certain calibre still seek it out.",
      "In the finance and wealth sessions we hold this question under discretion because the answer cannot be given on a public stage without diluting it. The room is built for the answer.",
    ],
  },
  {
    slug: "twelve-not-twenty",
    category: "Methodology",
    title: "Why we run cohorts of twelve, never twenty.",
    excerpt:
      "Group dynamics, attention, and the calibre of what is said — the case for the small cohort.",
    authorName: "Vision Goal",
    readingTime: "5 min",
    href: "/insights/twelve-not-twenty",
    imageKey: "insightMethodology",
    body: [
      "We run cohorts of twelve. We have been asked many times to run cohorts of twenty. We do not.",
      "At twelve, the room is a single conversation. Every participant is named, every question is heard, and every contribution is observable to every other participant. The hosts can read each face and adjust the room in real time.",
      "At twenty, the room becomes an audience. Some voices recede; the dialogue becomes a sequence of presentations. The hosts revert to lecturing rather than hosting. Calibre drops, and so does what participants are willing to say in front of each other.",
      "The economic argument for twenty is that it covers the room cost more easily. The argument for twelve is that twelve is what the product is. Open enrolment platforms can run at twenty. We cannot — because we are not selling seats; we are convening rooms.",
    ],
  },
  {
    slug: "geography-is-curatorial",
    category: "Methodology",
    title: "Geography is curatorial.",
    excerpt:
      "Where a learning experience happens is part of what is being taught, not a logistical afterthought.",
    authorName: "Vision Goal",
    readingTime: "4 min",
    href: "/insights/geography-is-curatorial",
    imageKey: "insightCities",
    body: [
      "The place a learning experience is held changes what it teaches. A closed-room finance session reads one way in a considered practitioner setting; the same conversation held in a plenary hall reads as performance.",
      "Vision Goal chooses environments for what they carry — the discretion of a chatham-house room, the operating context of a working business, the composure of a considered venue. Geography is part of the curriculum.",
      "Cities and venues for specific formats are confirmed at the time each experience is announced. The principle stays the same: the room is the deliverable, and the room is chosen for the question.",
    ],
  },
  {
    slug: "a-conversation-not-a-sale",
    category: "Dispatches",
    title: "A conversation is not a sale.",
    excerpt:
      "Why every engagement with Vision Goal starts with a conversation — and what a short conversation surfaces that a form never will.",
    authorName: "Vision Goal",
    readingTime: "3 min",
    href: "/insights/a-conversation-not-a-sale",
    imageKey: "insightApplication",
    body: [
      "We are sometimes asked why we do not simply publish a menu and let people transact. The answer is that the room is the product, and a room shaped by a shopping cart is a different product to one shaped by a considered conversation.",
      "A short conversation surfaces three things: who you are, what you would want from the room, and what you would bring to it. The third question is the most important. A room without contribution is not a room; it is an audience.",
      "We listen for specificity. Vague answers are not refused on principle, but they signal that the room would receive a vague contribution.",
      "Someone who has thought clearly about what they want and what they offer has already made the room stronger — the conversation has done the work the first session would otherwise do.",
    ],
  },
  {
    slug: "what-we-do-not-do",
    category: "Methodology",
    title: "What we do not do.",
    excerpt:
      "The platform is defined as much by its refusals as by its offers. A short list of the things we will not do.",
    authorName: "Vision Goal",
    readingTime: "4 min",
    href: "/insights/what-we-do-not-do",
    imageKey: "insightRefusal",
    body: [
      "We do not run open enrolment. Engagement starts with a conversation; rooms shape themselves through curation, not transaction.",
      "We do not deliver coaching, advisory, or any regulated financial service. The platform is curatorial — practitioners speak in their own capacity, not as advisors.",
      "We do not record cohort sessions. We do not publish participant names without consent. We do not stage cohort photography for marketing.",
      "We do not scale the cohort. Twelve in the room is a structural choice, not a soft cap.",
      "We do not pursue media coverage of cohort proceedings. The platform reads quieter than its peers because the proceedings are quieter than its peers.",
    ],
  },
];
