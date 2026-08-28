// Programme, host, cohort, and editorial content.
//
// Nothing here may describe something that has not happened. Cohorts carry no
// seat count until they are contracted, hosts appear only once they have agreed
// in writing to be listed, and participant accounts stay empty until a cohort has
// actually run. Chrome and short strings live in src/i18n/dictionary.ts; the
// long-form article bodies below are English-only by design.

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

// Cohort size is twelve on every programme. Any change here has to be reflected
// in the trust statistics and the small-cohort article, which both quote it.
export const MAX_COHORT_SIZE = 12;

export const programmes: Programme[] = [
  {
    id: "access",
    slug: "access",
    name: "Swiss Business Access Immersion",
    tagline:
      "Five days inside Swiss business — boardrooms, SME site visits, and the operating culture you cannot read about elsewhere.",
    oneLineFor:
      "International entrepreneurs, executives, and family principals who want practical access to Switzerland and the people who run it.",
    outcome:
      "Direct access to Swiss principals, a working map of the operating culture, and a short list of contacts you can call on.",
    href: "/programmes/access",
    city: "Zurich",
    durationLabel: "5 days · in residence",
    whoFor:
      "International entrepreneurs, senior executives, family-office principals, and corporate decision-makers engaging with Switzerland through expansion, partnership, or capital deployment. We look for seniority and a specific objective.",
    notFor:
      "Open enrolment, general networking circuits, or early-career participants building a CV. Twelve places, filled deliberately.",
    fee: "CHF 14,500",
    feeIncludes: [
      "Five days in residence with a cohort of twelve",
      "Behind-the-scenes visits to Swiss SMEs and Zurich operating partners",
      "A fine-dining business case and a hosted hospitality session",
      "Small-group sessions with Swiss principals, plus site visits alongside your hosts",
      "Welcome dinner, two structured cohort meals, and an alpine field session",
      "Twelve months of follow-on alumni access",
    ],
    feeExcludes: ["Travel", "Accommodation", "Personal expenses"],
    architecture: [
      {
        phase: "Before",
        title: "Pre-immersion briefing",
        body: "Two weeks of structured preparation: a reading pack, framing calls with your hosts, and a written brief setting out exactly what you need from the week. Everyone arrives ready.",
      },
      {
        phase: "Inside",
        title: "Five days in Zurich",
        body: "Mornings inside Swiss boardrooms and at SME sites; afternoons in small groups with the principals who run them; evenings kept for unhurried cohort conversation — and one alpine field session to break the frame. This is a working week, not a lecture theatre.",
      },
      {
        phase: "After",
        title: "Twelve months follow-on",
        body: "Quarterly host dispatches, introductions on request, an annual Zurich reconvening, and access to the alumni register. The relationship continues past the week itself.",
      },
    ],
    format: [
      { label: "Location", value: "Zurich, in residence — Swiss site visits each day" },
      { label: "Languages", value: "English (DE / FR on request)" },
      { label: "Cohort size", value: "Twelve participants, capped" },
      { label: "Schedule", value: "Five consecutive days · 09:00 – 18:00 plus evenings" },
      { label: "Materials", value: "Briefings, host notes, alumni handbook" },
      { label: "Follow-on", value: "Twelve months of alumni access" },
    ],
    faqs: [
      {
        q: "What makes this different from an executive programme at a business school?",
        a: "We do not run a school or a course. What you buy is access — to Swiss principals, to their businesses, and to how decisions are actually taken here. Twelve participants, five working days, and twelve months of follow-on. You leave with contacts and judgement, not a certificate.",
      },
      {
        q: "Will participants be identified publicly?",
        a: "Discretion is the default. The cohort register is shared with participants only, and public attribution requires written consent.",
      },
      {
        q: "How is the application reviewed?",
        a: "By the curation team. We assess fit, how specific your objectives are, and what you will contribute to the group. We reply within five business days.",
      },
      {
        q: "Deferral and refund?",
        a: "One deferral to the following cohort is available up to thirty days before the start date. Refunds beyond the cooling-off window are not standard — see the application terms.",
      },
    ],
    outcomes: [
      "Practical access — direct introductions to Swiss SME principals, family-office partners, or operating peers, matched against the objectives you set out in writing.",
      "An operating-culture briefing — which signals land inside a Swiss boardroom and which quietly do not, drawn from site visits and host commentary.",
      "A small working network — twelve months of alumni access with quarterly dispatches and an annual reconvening in Zurich.",
    ],
  },
  {
    id: "banking",
    slug: "banking",
    name: "Private Swiss Banking & Wealth Intensive",
    tagline:
      "Four days inside Swiss private banking — chatham-house conversation with working practitioners, behind closed doors.",
    oneLineFor:
      "Senior professionals, family principals, and adjacent operators who want practitioner-grade insight into Swiss private banking — and people to call on afterwards.",
    outcome:
      "A working map of the Swiss private banking landscape, candid conversation with practitioners, and better judgement on the questions that shape your remit.",
    href: "/programmes/banking",
    city: "Geneva",
    durationLabel: "4 days · chatham-house",
    whoFor:
      "Senior professionals, family principals, and adjacent operators in private wealth, banking, family office, or wealth-planning practice. A practitioner-grade group, reviewed individually.",
    notFor:
      "Retail investors, sales professionals seeking leads, or press. The sessions are closed and nothing said is for attribution.",
    fee: "CHF 12,800",
    feeIncludes: [
      "Four days inside Swiss private banking, under chatham-house rules",
      "Closed-door sessions with working practitioners and former principals",
      "A private-bank visit in Geneva and an evening with senior wealth practitioners",
      "Pre-reading and host briefing notes",
      "Two cohort dinners in Geneva; one alpine setting on day four",
      "Continued access — quarterly practitioner notes and an annual reconvening",
    ],
    feeExcludes: ["Travel", "Accommodation", "Personal expenses"],
    architecture: [
      {
        phase: "Before",
        title: "Pre-reading & briefing",
        body: "Briefings on the Swiss private banking landscape — structures, regulation, and the debates practitioners are actually having — circulated two weeks ahead.",
      },
      {
        phase: "Inside",
        title: "Four days in Geneva",
        body: "Mornings on landscape and structure; afternoons on how practitioners actually decide; one closed visit to a Geneva private bank; evenings kept for unhurried conversation. Nothing recorded, nothing for attribution.",
      },
      {
        phase: "After",
        title: "Continued dialogue",
        body: "Quarterly practitioner notes, an annual reconvening, and an invitation-only correspondence list. Small and warm by design.",
      },
    ],
    format: [
      { label: "Location", value: "Geneva, chatham-house venue + private-bank visit" },
      { label: "Languages", value: "English" },
      { label: "Cohort size", value: "Twelve participants, capped" },
      { label: "Schedule", value: "Four consecutive days · 09:30 – 17:30 plus evenings" },
      { label: "Materials", value: "Pre-reading, host notes, no recordings" },
      { label: "Continued dialogue", value: "Quarterly practitioner notes" },
    ],
    faqs: [
      {
        q: "Is this a school programme or a consulting engagement?",
        a: "Neither. You are buying access to Swiss private banking — practitioner-grade conversation behind closed doors, a closed visit to a Geneva private bank, and judgement you can take back to your own remit. There is no certificate and no written deliverable.",
      },
      {
        q: "What does chatham-house mean here?",
        a: "Participants may use what is said but may never identify the speaker or any other participant. Recordings are not permitted and notes are for personal use only.",
      },
      {
        q: "Will I meet specific institutions?",
        a: "Practitioners are listed on the cohort page and attend in their personal capacity. One closed visit to a Geneva private bank is part of the week; any further institutional introductions are arranged by the curation team afterwards.",
      },
      {
        q: "Can my organisation send several participants?",
        a: "We admit a maximum of two people from any single institution. Larger institutional engagements are handled through the private cohort enquiry.",
      },
    ],
    outcomes: [
      "Practitioner-grade access — chatham-house conversation with current and former Swiss private bankers, plus a closed visit inside a Geneva private bank.",
      "A working map of the landscape — the structures, the incentives, and the open questions that are discussed privately rather than from a stage.",
      "Continued contact — quarterly practitioner notes, an annual reconvening, and a small register of alumni you can call on.",
    ],
  },
  {
    id: "topic",
    slug: "topic",
    name: "Swiss Finance Week",
    tagline:
      "Five themed days inside one Swiss finance question — small working sessions and host commentary that does not appear on a stage.",
    oneLineFor:
      "Senior contributors with a working stake in the year's selected Swiss finance question — participants, not an audience.",
    outcome:
      "A working synthesis on the year's question, a small group of contributors you can keep talking to, and a follow-on dispatch you can return to.",
    href: "/programmes/topic",
    city: "Zurich",
    durationLabel: "5 days · themed",
    whoFor:
      "Senior professionals, institutional partners, family principals, and policy practitioners with a working stake in the announced topic. We expect you to contribute, not observe.",
    notFor:
      "Press, junior staff seeking exposure, or vendors prospecting. Twelve places, filled deliberately.",
    fee: "CHF 9,500",
    feeIncludes: [
      "Five themed days in Zurich with a cohort of twelve",
      "Working sessions led by practitioners who hold the question in their own remit",
      "Two behind-the-scenes site visits aligned to the year’s topic",
      "A topic dossier circulated three weeks ahead, plus a post-week dispatch",
      "Welcome reception and a topic dinner in a private setting",
      "Six months of continued access on the topic",
    ],
    feeExcludes: ["Travel", "Accommodation", "Personal expenses"],
    architecture: [
      {
        phase: "Before",
        title: "Topic dossier",
        body: "A structured dossier circulated three weeks ahead — framings, primary sources, and the questions the week intends to address. Arrive prepared.",
      },
      {
        phase: "Inside",
        title: "Five days in Zurich",
        body: "Each day is built around one specific question, led by someone who has had to answer it in practice. Two site visits land the question in operating reality. The week closes with a synthesis session.",
      },
      {
        phase: "After",
        title: "Synthesis & follow-on",
        body: "A post-week dispatch captures the synthesis, the disagreements, and the questions still open. Six months of continued access on the topic.",
      },
    ],
    format: [
      { label: "Location", value: "Zurich, plus two operating-site visits" },
      { label: "Languages", value: "English" },
      { label: "Cohort size", value: "Twelve participants, capped" },
      { label: "Schedule", value: "Five consecutive days · 09:00 – 18:00" },
      { label: "Materials", value: "Topic dossier, session notes, post-week dispatch" },
      { label: "Follow-on", value: "Six months of continued access" },
    ],
    faqs: [
      {
        q: "Is this a conference or a course?",
        a: "Neither. It is a working week for twelve senior contributors on one current Swiss finance question. There is no plenary stage, no audience, and no certificate — small sessions, practitioner hosts, two site visits, and a follow-on dispatch you can use.",
      },
      {
        q: "How is the topic selected?",
        a: "The curation team selects one current Swiss finance question each year, drawn from practitioner conversations and the dispatch.",
      },
      {
        q: "Do I need expertise in the topic to attend?",
        a: "A working stake, not academic expertise. The week is built for people who can move the question forward.",
      },
      {
        q: "Will the proceedings be published?",
        a: "The post-week dispatch is shared with participants only. Publishing any specific exchange requires written consent from everyone present.",
      },
    ],
    outcomes: [
      "A working synthesis of the year's Swiss finance question, built by twelve people with operational stake in it.",
      "A post-week dispatch — circulated to participants only — capturing the synthesis, the disagreements, and the questions still open.",
      "Six months of continued access on the topic, with follow-on introductions to other contributors where useful.",
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
  // Omitted until a real profile URL is supplied. The UI hides the link rather
  // than pointing at the LinkedIn homepage.
  linkedin?: string;
};

export const hosts: Host[] = [
  {
    name: "Andreas Svoboda",
    slug: "andreas-svoboda",
    role: "Founder & Curator · 33 years across Swiss private banking",
    initials: "AS",
    expertise: ["Wealth planning", "Swiss private banking", "Sustainable finance"],
    bio: "Founder of Vision Goal (2022). Thirty-three years across Swiss and Liechtenstein private banking, including twelve years at Bank Julius Bär & Co. AG as Head of Wealth Planning, Life & Pension across Switzerland and Singapore, and earlier roles at UBS, Credit Suisse, and Zürcher Kantonalbank. Partner at Q WEALTH AG, a Swiss asset manager, and a FINMA-registered independent insurance intermediary. FCCA, CFP®; LL.M., MSc, DBA. Twelve peer-reviewed papers on banking, sustainable finance, ESG, and cross-border life insurance.",
    programmes: ["access", "banking", "topic"],
  },
];

// Cohort scheduling.
//
// The model deliberately has no seat count and no waitlist field: until a cohort
// is contracted with venues and hosts, the site must not imply availability it
// cannot honour. Set `status` to "Scheduled" and fill `datesLabel` only when the
// dates are genuinely confirmed.
export type Cohort = {
  programmeId: Programme["id"];
  programmeName: string;
  cohortLabel: string;
  datesLabel: string;
  city: string;
  language: "EN" | "DE" | "FR";
  status: "Announcing" | "Scheduled" | "Closed";
};

export const upcomingCohorts: Cohort[] = [
  {
    programmeId: "access",
    programmeName: "Swiss Business Access Immersion",
    cohortLabel: "2026 founding cohort",
    datesLabel: "Dates to be announced",
    city: "Zurich",
    language: "EN",
    status: "Announcing",
  },
  {
    programmeId: "banking",
    programmeName: "Private Swiss Banking & Wealth Intensive",
    cohortLabel: "2026 founding cohort",
    datesLabel: "Dates to be announced",
    city: "Geneva",
    language: "EN",
    status: "Announcing",
  },
  {
    programmeId: "topic",
    programmeName: "Swiss Finance Week",
    cohortLabel: "2026 founding cohort",
    datesLabel: "Dates to be announced",
    city: "Zurich",
    language: "EN",
    status: "Announcing",
  },
];

export type AlumniVoice = {
  quote: string;
  attribution: string;
  cohortLabel: string;
};

// Intentionally empty. Participant quotes are published only once they have been
// given and cleared in writing by the person quoted. Every surface that reads
// this array degrades to an honest "nothing published yet" state when it is
// empty, so nothing has to be invented to fill the space.
export const alumniVoices: AlumniVoice[] = [];

export type PastCohort = {
  label: string;
  composition: string;
  hosts: string;
};

// Populate as cohorts are actually delivered.
export const pastCohorts: PastCohort[] = [];

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
    | "insightCities"
    | "insightApplication"
    | "insightRefusal";
  body: string[];
};

const WORDS_PER_MINUTE = 200;

// Reading time is derived from the article body rather than typed by hand, so a
// label can never drift away from the piece it describes.
export function readingTimeFor(body: string[]): string {
  const words = body.join(" ").trim().split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.round(words / WORDS_PER_MINUTE))} min`;
}

type InsightDraft = Omit<Insight, "readingTime" | "href">;

const insightDrafts: InsightDraft[] = [
  {
    slug: "swiss-sme-evaluation",
    category: "Swiss Access",
    title: "How Swiss SMEs evaluate an international partner.",
    excerpt:
      "What is actually being assessed in the first three meetings — and why it is rarely the proposition itself.",
    authorName: "Vision Goal",
    imageKey: "insightAccess",
    body: [
      "An international executive lands in Zurich with a strong deck, a clear proposition, and a follow-up schedule designed to demonstrate commitment. Three meetings later nothing has moved and nobody has said why. This happens often enough that it is worth setting out what is actually being assessed in those meetings, because it is rarely the proposition itself.",
      "Start with the counterparty. The Swiss SME sector is dominated by firms of fifty to five hundred people, frequently in the second or third generation of family ownership, often holding a defensible position in a narrow industrial or technical niche. A firm like that has usually survived two or three currency shocks, carries little debt by choice, and measures decisions in decades. The cost of a bad partnership is not a write-down. It is the reputation of a family name in a small market where everybody eventually meets again.",
      "That shapes what gets evaluated, and three things are read closely. None of them appear on the agenda.",
      "The first is the introduction itself: who made it, what they staked on it, and whether they will still be reachable in two years. A cold approach is not refused, but it starts from zero. An introduction from someone with a durable local reputation starts from a position of borrowed credit — and that person has now put their own standing at risk on your behalf. This is why Swiss businesses can appear slow to open. They are not evaluating you in isolation; they are evaluating the chain you arrived through.",
      "The second is specificity. “We are exploring the European market” is a statement of intent. “We need a manufacturing partner with ISO 13485 certification who can hold these tolerances at these volumes by the third quarter” is a question that can be answered. A Swiss counterparty will engage far more readily with a narrow question than a broad one, partly because a narrow question shows that work has already been done, and partly because it allows a clean refusal if the answer is no. Being easy to decline is, counter-intuitively, a mark of seriousness.",
      "The third is follow-up discipline — not volume, discipline. What is being read is whether you do exactly what you said you would do, on the day you said you would do it, and nothing beyond that. An unpromised call two days later reads as pressure. A promised document delivered a day late is a small forecast of how the next twenty deliverables will go. Steadiness is the message; enthusiasm is noise.",
      "There is a corresponding set of behaviours that reliably works against an international counterparty, and they are worth naming plainly. Escalating over the head of your contact. Bringing a larger delegation than the meeting requires. Volunteering the size of your own organisation. Pressing for a decision timeline in the first meeting. Describing a Swiss firm's caution as conservatism to its face. Each is survivable on its own. Together they read as a mismatch of tempo, and tempo is difficult to argue your way out of.",
      "Underneath all of this is a difference in how trust is sequenced. In several large markets trust follows the transaction: you close, you deliver, you earn standing. In the Swiss SME context trust more often precedes the transaction, and the transaction is a consequence of it. That inverts the usual business-development order. The first meeting is a credential check rather than a pitch. The second is a technical conversation that is genuinely technical. The third is where the real question — can we work with these people for ten years — gets settled, and it is usually settled in the informal parts: the walk to the car park, the lunch, the unexpected question about your own family business.",
      "None of this is written down anywhere, which is why it is expensive to learn by trial. It also means the remedy is not a better deck. It is a better bridge: an intermediary whose own standing is on the line, a written brief short enough to be circulated internally without editing, and a cadence you can sustain for eighteen months rather than eight weeks.",
      "The Swiss SME does not select on the strength of the pitch. It selects on the credibility of the bridge — and the bridge is built long before the meeting.",
    ],
  },
  {
    slug: "discretion-as-practice",
    category: "Private Banking",
    title: "Discretion is a practice, not a product.",
    excerpt:
      "Confidentiality is what a client signs. Discretion is what an institution does when nobody is checking — and the two are routinely confused.",
    authorName: "Andreas Svoboda",
    authorSlug: "andreas-svoboda",
    imageKey: "insightBanking",
    body: [
      "Every private bank in Switzerland claims discretion. Most of them mean confidentiality, which is a different thing. The difference is worth setting out, because it tells you what kind of institution you are actually dealing with.",
      "Confidentiality is contractual. It is what the client signs, what the bank's policies enumerate, and what the supervisor examines. It has a defined scope, defined exceptions, and a defined remedy if it is breached. Since the automatic exchange of information became operative for Swiss institutions, it is also far more precisely bounded than the popular imagination allows. It protects a client's information from the market. It does not protect it from the tax authority in the client's country of residence, and any institution implying otherwise is selling something that no longer exists.",
      "Discretion is a different animal. It is cultural rather than contractual, it has no defined scope, and nobody examines it. It shows up in decisions that are not obviously about information at all.",
      "It shows up in who an institution declines. A discreet house will turn away a client whose affairs would require the bank to make noise on their behalf, even where the mandate is profitable and entirely lawful. It shows up in recruitment: a relationship manager who arrives with a large book and a loud market profile carries a different risk from one who arrives with four relationships and no press cuttings. It shows up in what the institution will say about itself, because a genuinely discreet bank is commercially handicapped in a marketing meeting — the most persuasive things it could say are precisely the ones it will not.",
      "And it shows up in the handling of adjacency: the fact that a client's brother-in-law also banks there, that two clients sit on opposite sides of a transaction, that a family is mid-succession and the two generations hold different views. Confidentiality has nothing to say about any of that. Discretion has a great deal to say, and most of it involves declining business.",
      "The clients who value this are usually the ones who have been on the wrong end of its absence — a family that went through a public succession dispute, a founder whose liquidity event was reported before the ink was dry, a principal whose previous adviser used them as a reference without asking. Those clients do not negotiate confidentiality clauses. They assume them. What they are testing for is whether the institution's default setting is to say less.",
      "That test is never passed by assertion. It is read from behaviour over time: whether the banker names other clients, how quickly an introduction is offered, whether they follow up on something you mentioned in passing and would rather they had forgotten. The signal is almost always subtractive. The good ones say less than they know and let you notice.",
      "There is a commercial cost here and it should be stated honestly. A discreet institution grows more slowly. It cannot use its best case studies. It loses mandates to competitors willing to promise access it will not promise. The counter-argument is that the client base it does assemble has materially lower attrition and a materially higher tolerance for being told no — which, across a thirty-year relationship, is the more valuable asset by some distance.",
      "For anyone working alongside these institutions rather than inside them — advisers, family offices, intermediaries — there is one practical implication. Do not ask a Swiss private banker a question they cannot answer without breaching something. It puts them in an impossible position and it tells them something about you. Ask instead how they would think about a situation in the abstract. The good ones answer that question generously, and the answer is usually more useful than the specific one you wanted.",
      "This is also why the Banking Intensive runs under chatham-house rules and is not recorded. The useful answer to most of these questions cannot be given from a public stage without being diluted into uselessness. The closed session is not atmosphere. It is a precondition for the content.",
    ],
  },
  {
    slug: "twelve-not-twenty",
    category: "Methodology",
    title: "Why every cohort is capped at twelve.",
    excerpt:
      "The arithmetic favours twenty. Four things break when you get there, and three of them break invisibly.",
    authorName: "Vision Goal",
    imageKey: "insightMethodology",
    body: [
      "Every Vision Goal cohort is capped at twelve people. We are asked regularly to run twenty, and the arithmetic in favour is obvious: the same hosts, the same venue, the same fixed costs, two-thirds more revenue. We have declined it consistently, and the reasoning is worth setting out, because it is not sentimental.",
      "Twelve is roughly the point at which a group stops being a group and becomes a conversation. Below about fifteen people, everyone present can hold everyone else in mind — who said what earlier, who has the relevant experience, who has gone quiet. Above that, the tracking breaks down and participants begin addressing the group rather than each other. The change in behaviour is abrupt and it is visible from the front of the room.",
      "The first failure at twenty is not that people learn less. It is that the distribution of speaking time collapses. Across four days with twelve people, we typically see every participant contribute substantively every day. With twenty, four or five people carry around sixty per cent of the discussion by the second morning and the rest settle into listening, which they do not leave. Those fifteen people paid the same fee for a materially different experience.",
      "The second failure is on the host side. A practitioner who agrees to speak candidly about their own institution's decisions is taking a professional risk. They will take it in front of twelve people whose names and firms they have seen in advance. In front of twenty the calculus changes — not because twenty is a crowd, but because twenty begins to feel like a distribution list. The candour the week is actually selling degrades first, and it degrades invisibly. The session still looks fine from the back.",
      "The third failure is in the introductions. We commit to matching participants against the objectives they set out in their application. With twelve, the curation team can hold the whole map in mind and make three or four genuinely considered matches per person. With twenty, the same effort produces a directory. A directory is not worth CHF 12,800 and we would not defend charging for one.",
      "There is a fourth reason that is less about participants than about us. A hard cap makes the business fragile in a specific and useful way: we cannot absorb a badly selected participant. Among twenty, one person who is prospecting rather than contributing is an irritation. Among twelve, they change the week. That fragility enforces a selection discipline we would otherwise be tempted to relax during a slow quarter.",
      "The economic objection is real and we do not dismiss it. Twelve places against fixed costs that would barely move at twenty is a meaningful amount of foregone margin per cohort. Our answer is that the margin is the product. The alternative business — larger groups, more of them, hosts who fly in for a keynote and leave — exists, is well served by other people, and is priced accordingly. We are not competing with it.",
      "One consequence deserves naming. A cap means we sometimes decline good applicants. When that happens we say so directly and offer the following cohort rather than quietly stretching the number by two. A cap that flexes under commercial pressure is not a cap; it is a marketing claim. This one does not flex, and that includes Swiss Finance Week, which earlier versions of this site described as running twenty-four contributors across two groups. It does not. It runs at twelve, like everything else.",
    ],
  },
  {
    slug: "geneva-and-zurich",
    category: "Methodology",
    title: "Why Geneva and Zurich, and not one or the other.",
    excerpt:
      "Running two cities costs more and buys no economies of scale. We treat it as a cost of accuracy.",
    authorName: "Vision Goal",
    imageKey: "insightCities",
    body: [
      "Vision Goal runs the Banking Intensive in Geneva, and both the Access Immersion and Swiss Finance Week in Zurich. We are asked often why we do not consolidate into one city, which would be cheaper and considerably simpler to operate. The answer is that the two centres do genuinely different work, and a programme built for one reads wrong in the other.",
      "Geneva's private banking industry predates the Swiss federal state. The oldest houses were founded in the eighteenth and early nineteenth centuries as partnerships, and several retained unlimited-liability partnership structures well into the last decade. That history is not decorative. An institution whose partners were personally liable for its obligations develops a particular relationship to risk, to growth, and to what it is willing to say in public. The city is French-speaking, physically closer to Lyon than to Zurich, and oriented historically toward European, Middle Eastern, and Latin American private clients.",
      "Zurich's financial centre grew from a different root: commercial and industrial banking, cantonal banking, insurance, and latterly the large universal banks and the exchange. It is also the gravitational centre of the German-speaking industrial economy — the machine-tool firms, precision manufacturers, and specialist suppliers spread across Zurich, Aargau, Zug, Thurgau, and St. Gallen that make up the SME base an international operator actually needs to meet.",
      "So the placement is subject matter, not symmetry. A four-day conversation about how discretion, succession, and cross-border structuring work in practice belongs in Geneva, where the practitioners who do that work are within a short walk of each other and where the register of the conversation — quieter, slower, more allusive — is native rather than performed. Hold the same session in Zurich and you can assemble the same people, but you lose the ease, and the ease is where the useful material comes from.",
      "Equally, an immersion in Swiss operating culture belongs in Zurich. The site visits that make the week worthwhile are within ninety minutes' drive. The founders and managing directors who host them will not travel to Geneva for a morning, and the version of them you would get if they did is not the version worth meeting.",
      "There is a linguistic dimension that visitors consistently underestimate. The Röstigraben is a real cultural boundary, not a joke about food. Meeting conventions differ in ways that matter: the German-speaking meeting tends to reach the agenda immediately and treats directness as a form of respect, while the French-speaking meeting tends to establish the relationship first and can read immediacy as slightly crude. Neither is better. But a programme that pretends the country is homogeneous teaches a false model, and participants will apply it in the wrong canton six months later.",
      "There is a practical benefit too. Running in two cities means the alumni network spans both, and so do the introductions we can make afterwards. A participant from the Geneva week who later needs an industrial partner in Thurgau has somewhere to start, and the reverse holds as well. Consolidating would have quietly narrowed that.",
      "The cost of two cities is real: two venue relationships, two host groups, two sets of logistics, and no economies of scale worth the name. We treat it as a cost of accuracy. Switzerland is not one financial centre with two postcodes, and a programme that teaches otherwise is teaching the wrong thing.",
    ],
  },
  {
    slug: "an-application-not-a-sale",
    category: "Dispatches",
    title: "What we read in an application.",
    excerpt:
      "Three questions, two referees, and one of them decides most marginal cases. A plain account of how applications are assessed.",
    authorName: "Vision Goal",
    imageKey: "insightApplication",
    body: [
      "Every place on every Vision Goal programme goes through an application. We are periodically asked to drop it — publish the dates, take payment, let the market sort itself out. It would certainly be faster. The reason we have not is that the composition of the group is most of what participants are paying for, and a group assembled by whoever pays first is a different product from one assembled deliberately.",
      "The application itself is short: three substantive questions, two referees, and a consent statement. It is short on purpose. Length filters for available time rather than for fit, and the people we most want to attend usually have the least of it.",
      "The first question asks what you want from the week. What we are reading for is not ambition but resolution. “I want to understand the Swiss market” and “I need to know whether a Zug holding structure survives contact with our German revenue recognition, and who has already done it” are both legitimate, but only the second tells us which sessions to build around you and whom to seat you beside. Vague answers are not refused on principle. They do correlate with a vague week.",
      "The second question asks what you bring. This is the one applicants underestimate, and it decides most marginal cases. Twelve senior people are a resource before they are an audience; if four of them arrive expecting to receive rather than contribute, the whole week thins out. We are not looking for a job title here. We are looking for evidence that you have done something specific that somebody else in the group would want to ask you about.",
      "The third asks about timing — why this year rather than next. It sounds like filler. It is the most predictive of the three. People who can answer it precisely tend to arrive with a live problem, and live problems make good sessions. People who cannot are often still deciding, quite reasonably, and are better served by a later cohort.",
      "Referees exist for one narrow purpose: to confirm that you are who you say you are and that you conduct yourself well alongside others. We do not contact them without written consent, and in practice we contact them in perhaps one case in five, usually where an applicant works outside the sectors we know well.",
      "What we do not read for is worth stating too. Not budget — the fee is published and identical for everyone. Not seniority as a proxy: the founder of an eleven-person firm and a divisional head at a bank of eleven thousand are both plausible. Not the brand on the CV. And not, emphatically, whether you agree with us.",
      "Roughly one application in three is not taken forward. In most cases the reason is fit rather than quality — a strong applicant whose need is genuinely operational and would be better met by an adviser, or someone whose interest is commercial and who is hoping to meet buyers. We say which it is. Declining without a reason is cheap, and we would rather not.",
      "There is a secondary effect we did not design and now rely on. Writing three specific paragraphs about what you want and what you offer is itself preparatory work. Applicants arrive having already had the conversation with themselves that the opening session would otherwise have to prompt. The week starts further along than it would have.",
      "We reply to every application within five business days, whichever way the answer goes.",
    ],
  },
  {
    slug: "what-we-do-not-do",
    category: "Methodology",
    title: "What we do not do.",
    excerpt:
      "Nine refusals, with the reasoning. Read it to rule us out quickly if the fit is wrong.",
    authorName: "Vision Goal",
    imageKey: "insightRefusal",
    body: [
      "It is easier to describe this platform by exclusion than by claim. What follows is a list of things we have been asked for and declined, with the reasoning, so that anyone considering an application can rule us out quickly if the fit is wrong.",
      "We do not run open enrolment. Every place goes through an application, including for returning participants. The composition of the group is the product; selling places to whoever arrives first would produce a different and cheaper thing.",
      "We do not give regulated advice. Vision Goal GmbH is a training and coaching company. It is not a bank, an asset manager, a securities firm, or an insurance intermediary, and it holds no FINMA authorisation. Nothing said in a session or written in a dispatch is investment, tax, or legal advice. Where a participant needs regulated work done, it is done by a licensed practitioner they engage directly, on their own terms.",
      "We do not take retrocessions. No commission, no finder's fees, and no rebates from any institution or practitioner we introduce. Our income is programme fees and a disclosed flat administration fee for Private Office introductions. This is the most important line on the list, because it is the one that determines whether an introduction is advice or distribution.",
      "We do not record sessions. No audio, no video, no transcript, and no photography of participants. Notes are for personal use only. Several of our hosts require this as a condition of attending, and it is not negotiable for a participant who would like to write something up afterwards.",
      "We do not publish participant names — not on this site, not in marketing, and not to anyone outside the cohort register. Attribution requires written consent, per person and per use.",
      "We do not invent proof. No testimonials we have not received, no alumni figures we cannot evidence, no host listed before they have agreed to appear, and no availability shown unless the dates and the places are real. Where a page here looks sparse, it is because the thing that would otherwise fill it does not exist yet.",
      "We do not scale the group. Twelve, on every programme, without exception.",
      "We do not sell a certificate. There is no assessment, no credential, and no letters after your name at the end of it. If the reason for attending is a line on a CV, this is an expensive way to obtain one.",
      "We do not chase press. We will talk to journalists about how the platform operates. We will not discuss what was said in a session, and we do not offer access to participants for comment.",
      "Two consequences follow. The first is that we grow slowly, which we accept. The second is that this list is testable — every item on it is something you can hold us to, and we would rather be held to a short list we keep than a longer one we do not.",
    ],
  },
];

export const featuredInsights: Insight[] = insightDrafts.map((draft) => ({
  ...draft,
  href: `/insights/${draft.slug}`,
  readingTime: readingTimeFor(draft.body),
}));
