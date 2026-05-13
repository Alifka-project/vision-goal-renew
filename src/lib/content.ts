// Placeholder content used at the landing-page stage before the CMS is wired up.
// Every visible string must move into Sanity / locale files before launch — see CLAUDE.md §11.

export type Programme = {
  id: "access" | "banking" | "topic";
  slug: "access" | "banking" | "topic";
  name: string;
  tagline: string;
  oneLineFor: string;
  outcome: string;
  href: string;
  city: string;
  durationLabel: string;
  whoFor: string;
  notFor: string;
  fee: string;
  feeIncludes: string[];
  feeExcludes: string[];
  architecture: { phase: string; title: string; body: string }[];
  format: { label: string; value: string }[];
  faqs: { q: string; a: string }[];
  outcomes: string[];
};

export const programmes: Programme[] = [
  {
    id: "access",
    slug: "access",
    name: "Swiss Business Access Immersion",
    tagline:
      "Five days inside Swiss business — boardrooms, SME visits, hospitality, and the operating culture you cannot read about elsewhere.",
    oneLineFor:
      "International entrepreneurs, executives, and family principals who want practical access to Switzerland and the networks behind it.",
    outcome:
      "Direct access to Swiss principals, a working map of the operating culture, and a curated network you can call on.",
    href: "/programmes/access",
    city: "Zurich",
    durationLabel: "5 days · in residence",
    whoFor:
      "International entrepreneurs, senior executives, family-office principals, and corporate decision-makers engaging with Switzerland — by expansion, partnership, or capital deployment. Considered seniority; specific objectives.",
    notFor:
      "Open enrolment, generic networking circuits, or first-jobbers building a CV. The room is small on purpose.",
    fee: "CHF 14,500",
    feeIncludes: [
      "Five days in residence with a cohort of twelve",
      "Behind-the-scenes visits to Swiss SMEs and Zurich operating partners",
      "A curated fine-dining business case and a hosted hospitality session",
      "Small-group rooms with named Swiss principals; site visits with hosts",
      "Welcome dinner, two structured cohort meals, and an alpine field session",
      "Twelve months of follow-on alumni access",
    ],
    feeExcludes: ["Travel", "Accommodation", "Personal expenses"],
    architecture: [
      {
        phase: "Before",
        title: "Pre-immersion briefing",
        body: "A two-week structured preparation: curated reading, framing calls with hosts, and a written brief on your specific access objectives. The room arrives ready.",
      },
      {
        phase: "Inside",
        title: "Five days in Zurich",
        body: "Mornings inside Swiss boardrooms and at SME sites; afternoons in small-group rooms with named principals; evenings reserved for considered cohort dialogue — and one alpine field session to break frame. This is not a lecture room; it is a working week inside Swiss business.",
      },
      {
        phase: "After",
        title: "Twelve months follow-on",
        body: "Quarterly host dispatches, named introductions on request, an annual Zurich reconvening, and access to the alumni register. The relationship continues.",
      },
    ],
    format: [
      { label: "Location", value: "Zurich, in residence — Swiss site visits each day" },
      { label: "Languages", value: "English (DE / FR on request)" },
      { label: "Group size", value: "Twelve principals in the room" },
      { label: "Schedule", value: "Five consecutive days · 09:00 – 18:00 plus evenings" },
      { label: "Materials", value: "Briefings, host notes, alumni handbook" },
      { label: "Follow-on", value: "Twelve months of curated alumni access" },
    ],
    faqs: [
      {
        q: "What makes this different from an executive programme at a business school?",
        a: "We do not run a school or a course. The deliverable is access — to Swiss principals, businesses, and operating culture, hosted by named practitioners. The room is small; the days are working days; the relationship continues for twelve months. You leave with names, judgement, and a network you can call on, not a certificate.",
      },
      {
        q: "Will participants be named publicly?",
        a: "Discretion is the default. The cohort register is shared with participants only. Public attribution requires written consent.",
      },
      {
        q: "How is the application reviewed?",
        a: "By the host curation team. We assess fit, specificity of access objectives, and the calibre of contribution you bring to the room. Expected response within ten business days.",
      },
      {
        q: "Deferral and refund?",
        a: "One deferral to the next cohort is available up to thirty days before start. Refunds beyond the cooling-off window are not standard — see the application terms.",
      },
    ],
    outcomes: [
      "Practical access — named introductions to Swiss SME principals, family-office partners, or operating peers, matched against your written objectives.",
      "An operating-culture briefing — the signals that read inside a Swiss boardroom, and the ones that quietly do not, drawn from behind-the-scenes visits and host commentary.",
      "A small, considered network — twelve months of follow-on alumni access with quarterly dispatches and an annual reconvening in Zurich.",
    ],
  },
  {
    id: "banking",
    slug: "banking",
    name: "Private Swiss Banking & Wealth Intensive",
    tagline:
      "Four days inside Swiss private banking — chatham-house rooms with named practitioners, behind closed doors.",
    oneLineFor:
      "Senior professionals, family principals, and adjacent operators who want practitioner-grade insight into Swiss private banking — and a network to call on after.",
    outcome:
      "A working map of the Swiss private banking landscape, chatham-house dialogue with named practitioners, and considered judgement on the questions that shape your remit.",
    href: "/programmes/banking",
    city: "Geneva",
    durationLabel: "4 days · chatham-house",
    whoFor:
      "Senior professionals, family principals, and adjacent operators in private wealth, banking, family office, or wealth-planning practice. Practitioner-grade audience by application.",
    notFor:
      "Retail investors, sales professionals seeking leads, or media. The room is closed; nothing said is for attribution.",
    fee: "CHF 12,800",
    feeIncludes: [
      "Four days inside Swiss private banking, under chatham-house rules",
      "Closed-door rooms with named practitioners and former principals",
      "A private-bank visit in Geneva and an evening with senior wealth practitioners",
      "Curated pre-reading and host briefing notes",
      "Two cohort dinners in Geneva; one alpine setting on day four",
      "Continued-dialogue access — quarterly practitioner notes, annual reconvening",
    ],
    feeExcludes: ["Travel", "Accommodation", "Personal expenses"],
    architecture: [
      {
        phase: "Before",
        title: "Pre-reading & briefing",
        body: "Curated briefings on the Swiss private banking landscape — structures, regulation, current practitioner debates — circulated two weeks ahead.",
      },
      {
        phase: "Inside",
        title: "Four days in Geneva",
        body: "Mornings on landscape and structure; afternoons inside practitioner judgement; one closed visit to a Geneva private bank; evenings reserved for considered dialogue. Nothing recorded; nothing for attribution.",
      },
      {
        phase: "After",
        title: "Continued dialogue",
        body: "Quarterly practitioner notes, an annual reconvening, and an invitation-only continued-dialogue list. The relationship is small and warm.",
      },
    ],
    format: [
      { label: "Location", value: "Geneva, chatham-house venue + private-bank visit" },
      { label: "Languages", value: "English" },
      { label: "Group size", value: "Twelve principals in the room" },
      { label: "Schedule", value: "Four consecutive days · 09:30 – 17:30 plus evenings" },
      { label: "Materials", value: "Pre-reading, host notes, no recordings" },
      { label: "Continued dialogue", value: "Quarterly practitioner notes" },
    ],
    faqs: [
      {
        q: "Is this a school programme or a consulting engagement?",
        a: "Neither. You are buying access to Swiss private banking — practitioner-grade conversation behind closed doors, a closed visit to a Geneva private bank, and considered judgement you can take back to your remit. There is no certificate and no deliverable; the room is the deliverable.",
      },
      {
        q: "What does chatham-house mean here?",
        a: "Participants may use what is said but may never identify the speaker or any other participant. Recordings are not permitted; notes are personal use only.",
      },
      {
        q: "Will I meet specific institutions?",
        a: "Practitioners are named on the cohort page and present in their personal capacity. One closed visit to a Geneva private bank is part of the week; further institutional introductions are mediated by the curation team after the room.",
      },
      {
        q: "Can my organisation send several participants?",
        a: "Cohorts admit a maximum of two from any single institution. Larger institutional engagements are routed through the private cohort enquiry.",
      },
    ],
    outcomes: [
      "Practitioner-grade access — chatham-house dialogue with named former and current Swiss private bankers, plus a closed visit inside a Geneva private bank.",
      "A working map of the landscape — structures, postures, and the working questions that are held in the room and not said on a stage.",
      "Continued network — quarterly practitioner notes, an annual reconvening, and a small register of cohort alumni you can call on.",
    ],
  },
  {
    id: "topic",
    slug: "topic",
    name: "Swiss Finance Week",
    tagline:
      "Five themed days inside one Swiss finance question — curated rooms, hospitality settings, and host commentary that does not appear on a stage.",
    oneLineFor:
      "Senior contributors with a working stake in the year's selected Swiss finance question — by application, not audience.",
    outcome:
      "A working synthesis on the year's question, a curated network of contributors, and a follow-on dispatch you can return to.",
    href: "/programmes/topic",
    city: "Zurich",
    durationLabel: "5 days · curated",
    whoFor:
      "Senior professionals, institutional partners, family principals, and policy practitioners with a working stake in the announced topic. Posture is contributory, not observational.",
    notFor:
      "Press, junior staff seeking exposure, or vendors prospecting. The week is for working contributors; the room is curated.",
    fee: "CHF 9,500",
    feeIncludes: [
      "Five themed days in Zurich",
      "Curated rooms hosted by named practitioners",
      "Two behind-the-scenes site visits aligned to the year’s topic",
      "A topic dossier circulated three weeks ahead, plus post-week dispatch",
      "Welcome reception, topic dinner in a private setting",
      "Six months of continued-dialogue access on the topic",
    ],
    feeExcludes: ["Travel", "Accommodation", "Personal expenses"],
    architecture: [
      {
        phase: "Before",
        title: "Topic dossier",
        body: "A structured topic dossier circulated three weeks ahead — framings, primary sources, and the questions the week intends to address. Arrive prepared.",
      },
      {
        phase: "Inside",
        title: "Five days in Zurich",
        body: "Five days of curated rooms in Zurich. Each room is built around a specific question with a host who has working judgement on it. Two site visits land the question in operating reality. The week ends with a synthesis session.",
      },
      {
        phase: "After",
        title: "Synthesis & follow-on",
        body: "A post-week host dispatch captures the synthesis, divergences, and follow-on questions. Six months of continued-dialogue access on the topic.",
      },
    ],
    format: [
      { label: "Location", value: "Zurich, curated venues + two operating-site visits" },
      { label: "Languages", value: "English" },
      { label: "Group size", value: "Twenty-four contributors, divided into rooms of twelve" },
      { label: "Schedule", value: "Five consecutive days · 09:00 – 18:00" },
      { label: "Materials", value: "Topic dossier, room notes, post-week dispatch" },
      { label: "Follow-on", value: "Six months continued-dialogue access" },
    ],
    faqs: [
      {
        q: "Is this a conference or a course?",
        a: "Neither. It is a curated working week for senior contributors on one current Swiss finance question. There is no plenary stage, no audience, no certificate — just small rooms, named hosts, two operating-site visits, and a follow-on dispatch you can use.",
      },
      {
        q: "How is the topic selected?",
        a: "The host curation team selects one current Swiss finance question per year, surfaced from practitioner conversations and dispatches.",
      },
      {
        q: "Do I need expertise in the topic to attend?",
        a: "Working stake, not academic expertise. The week is built for contributors who can move the question forward, not for general audience.",
      },
      {
        q: "Will the proceedings be published?",
        a: "A post-week host dispatch is shared with cohort alumni only. Public publication of any specific exchange requires written consent from those present.",
      },
    ],
    outcomes: [
      "A working synthesis of the year's chosen Swiss finance question — drawn from rooms designed for contributors with operational stake, not audience.",
      "A post-week host dispatch — circulated to cohort alumni only — capturing the synthesis, divergences, and follow-on questions.",
      "Six months of continued-dialogue access on the topic, with named follow-on introductions to other contributors where useful.",
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

export const hosts: Host[] = [
  {
    name: "Andreas Svoboda",
    slug: "andreas-svoboda",
    role: "Founder & Curator · 33 years across Swiss private banking",
    initials: "AS",
    expertise: ["Wealth planning", "Swiss private banking", "Sustainable finance"],
    bio: "Founder of Vision Goal (2022). Thirty-three years across Swiss and Liechtenstein private banking, including twelve years at Bank Julius Bär & Co. AG as Head of Wealth Planning, Life & Pension across Switzerland and Singapore, and earlier roles at UBS, Credit Suisse, and Zürcher Kantonalbank. FCCA, CFP®, Swiss Asset Manager licence, FINMA Insurance Broker authorisation; LL.M., MSc, DBA. Twelve peer-reviewed papers on banking, sustainable finance, ESG, and cross-border life insurance.",
    programmes: ["access", "banking", "topic"],
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Henri Vauchel",
    slug: "henri-vauchel",
    role: "Host · Senior practitioner, Geneva",
    initials: "HV",
    expertise: ["Cross-border access", "Geneva"],
    bio: "Senior practitioner with three decades of cross-border work between French-speaking Europe and Switzerland. Hosts the Geneva intensive and curates introductions for the access immersion.",
    programmes: ["access", "banking"],
    linkedin: "https://www.linkedin.com/",
    placeholder: true,
  },
  {
    name: "Anja Brönnimann",
    slug: "anja-bronnimann",
    role: "Host · Operating partner, Zurich",
    initials: "AB",
    expertise: ["Swiss SME access", "Operating culture"],
    bio: "Operating partner with a portfolio of Swiss SME engagements. Curates the Swiss Business Access Immersion access map and hosts cohort sessions on Swiss operating culture.",
    programmes: ["access"],
    linkedin: "https://www.linkedin.com/",
    placeholder: true,
  },
  {
    name: "Rafael Kübler",
    slug: "rafael-kuebler",
    role: "Faculty · Swiss financial regulation",
    initials: "RK",
    expertise: ["FINMA", "Regulatory"],
    bio: "Former regulator, now in private practice. Faculty on regulatory and supervisory questions in the Private Banking Intensive and selected Topic weeks.",
    programmes: ["banking", "topic"],
    linkedin: "https://www.linkedin.com/",
    placeholder: true,
  },
  {
    name: "Dr. Léa Marchand",
    slug: "lea-marchand",
    role: "Faculty · Macro practitioner, Geneva",
    initials: "LM",
    expertise: ["Macro", "Markets"],
    bio: "Macro practitioner with a Geneva research seat. Faculty on macro and markets framings across the Banking Intensive and Topic weeks.",
    programmes: ["banking", "topic"],
    linkedin: "https://www.linkedin.com/",
    placeholder: true,
  },
  {
    name: "Stefan Imboden",
    slug: "stefan-imboden",
    role: "Host · Former MD, Swiss boutique bank",
    initials: "SI",
    expertise: ["Boutique banking", "Discretion"],
    bio: "Former managing director of a Zurich boutique private bank. Hosts the discretion-and-posture sessions on the Banking Intensive and is a returning Topic-week host.",
    programmes: ["banking", "topic"],
    linkedin: "https://www.linkedin.com/",
    placeholder: true,
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

export const upcomingCohorts: Cohort[] = [
  {
    programmeId: "access",
    programmeName: "Swiss Business Access Immersion",
    startLabel: "23 — 27 June 2026",
    city: "Zurich",
    language: "EN",
    status: "Open",
    seatsLine: "4 seats remaining",
  },
  {
    programmeId: "banking",
    programmeName: "Private Swiss Banking & Wealth Intensive",
    startLabel: "8 — 11 September 2026",
    city: "Geneva",
    language: "EN",
    status: "Waitlist",
    seatsLine: "Waitlist open",
  },
  {
    programmeId: "topic",
    programmeName: "Swiss Finance Week",
    startLabel: "10 — 14 November 2026",
    city: "Zurich",
    language: "EN",
    status: "Open",
    seatsLine: "8 seats remaining",
  },
];

export type AlumniVoice = {
  quote: string;
  attribution: string;
  cohortLabel: string;
};

export const alumniVoices: AlumniVoice[] = [
  {
    quote:
      "Five days that compressed two years of relationship-building. The rooms were small, the conversations were candid, and the introductions were considered.",
    attribution: "International decision-maker · EMEA",
    cohortLabel: "Swiss Business Access · Zurich 2025",
  },
  {
    quote:
      "Practitioner-grade. The hosts said things in this room that they will not say on a stage. That is the entire point.",
    attribution: "Senior banking professional · Europe",
    cohortLabel: "Private Banking Intensive · Geneva 2025",
  },
  {
    quote:
      "The week was a working week, not a stage. We left with a synthesis dispatch we are still referencing six months later.",
    attribution: "Institutional partner · Asia",
    cohortLabel: "Swiss Finance Week · Zurich 2025",
  },
  {
    quote:
      "What I valued most: the absence of advisory tone. The room respected the seniority in it.",
    attribution: "Family-office principal · GCC",
    cohortLabel: "Swiss Business Access · Zurich 2024",
  },
];

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
  imageKey: "insightAccess" | "insightBanking" | "insightMethodology";
  body: string[];
};

export const featuredInsights: Insight[] = [
  {
    slug: "swiss-sme-evaluation",
    category: "Swiss Access",
    title: "How Swiss SMEs evaluate an international partner.",
    excerpt:
      "The signals that matter inside a Swiss SME — what is read in the first meeting, and what is read in the third.",
    authorName: "Anja Brönnimann",
    authorSlug: "anja-bronnimann",
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
    authorName: "Dr. Margit Holzer",
    authorSlug: "dr-margit-holzer",
    readingTime: "9 min",
    href: "/insights/discretion-as-posture",
    imageKey: "insightBanking",
    body: [
      "Discretion in Swiss private banking is often described as a feature of the service. Inside the institutions that practise it well, it is described differently — as a posture that shapes which clients are taken on, which conversations are held, and how decisions are remembered.",
      "Practitioners distinguish between confidentiality, which is contractual, and discretion, which is cultural. The first is what the client signs. The second is what the institution carries.",
      "A discreet posture is conservative on language, slow to introduce, and watchful on attribution. It is also commercially expensive — it limits what one will say in a marketing room — and that is precisely why clients of a certain calibre still seek it out.",
      "On the Banking Intensive we hold this question under chatham-house rules because the answer cannot be given on a public stage without diluting it. The room is built for the answer.",
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
    slug: "geneva-and-zurich",
    category: "Methodology",
    title: "Why Geneva and Zurich, never one or the other.",
    excerpt:
      "The platform runs in two cities for a reason. The reason is not symmetry.",
    authorName: "Vision Goal",
    readingTime: "4 min",
    href: "/insights/geneva-and-zurich",
    imageKey: "insightMethodology",
    body: [
      "Vision Goal runs the Banking Intensive in Geneva and the Access Immersion and Topic Week in Zurich. The cities are not interchangeable.",
      "Geneva, for the Banking Intensive, is where the chatham-house posture is native. The institutions are nearer; the practitioners are closer; the silence in the room reads correctly.",
      "Zurich, for Access and Topic, is where the operating questions are asked most directly. SMEs answer; founders meet; the working week of Swiss business is visible.",
      "We do not host the Banking Intensive in Zurich, and we do not host the Access Immersion in Geneva. Geography is curatorial here, not logistical.",
    ],
  },
  {
    slug: "an-application-not-a-sale",
    category: "Dispatches",
    title: "An application is not a sale.",
    excerpt:
      "Why every Vision Goal cohort goes through application — and what we read in the application that we will not read elsewhere.",
    authorName: "Vision Goal",
    readingTime: "3 min",
    href: "/insights/an-application-not-a-sale",
    imageKey: "insightAccess",
    body: [
      "We are sometimes asked why we do not simply offer open enrolment and let the market decide. The answer is that the room is the product, and a room shaped by the market is a different product to one shaped by the host.",
      "An application asks three things: who you are, what you want from the room, and what you bring to it. The third question is the most important. A room without contribution is not a cohort; it is an audience.",
      "We read applications for specificity. Vague answers are not refused on principle, but they signal that the room would receive a vague contribution.",
      "An applicant who has thought clearly about what they want and what they offer is already a member of the room — the application has done the work the first session would otherwise do.",
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
    imageKey: "insightMethodology",
    body: [
      "We do not run open enrolment. Every seat is by application; the rooms shape themselves through curation, not transaction.",
      "We do not deliver coaching, advisory, or any regulated financial service. The platform is curatorial — hosts speak as practitioners, not as advisors.",
      "We do not record cohort sessions. We do not publish participant names without consent. We do not stage cohort photography for marketing.",
      "We do not scale the cohort. Twelve in the room is a structural choice, not a soft cap.",
      "We do not pursue media coverage of cohort proceedings. The platform reads quieter than its peers because the proceedings are quieter than its peers.",
    ],
  },
];
