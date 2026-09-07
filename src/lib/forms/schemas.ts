import { z } from "zod";

// Every form on the site is validated here and again nowhere else, so the client
// and the API route cannot disagree about what a valid submission looks like.

export const FORM_KINDS = [
  "application",
  "consultation",
  "institutional",
  "contact",
  "dossier",
  "newsletter",
] as const;

export type FormKind = (typeof FORM_KINDS)[number];

// These messages are shown to the visitor, so they say what to do rather than
// reporting that a constraint failed.
const shortText = (max = 200) =>
  z.string().trim().min(1, "This field is required.").max(max, `Please keep this under ${max} characters.`);
const longText = (max = 4000) =>
  z
    .string()
    .trim()
    .min(20, "Please write a little more.")
    .max(max, `Please keep this under ${max} characters.`);
const email = z.string().trim().toLowerCase().email("Enter a valid email address.").max(254);
const optionalText = (max = 300) =>
  z
    .string()
    .trim()
    .max(max, `Please keep this under ${max} characters.`)
    .optional()
    .transform((v) => (v ? v : undefined));

// Accepted only when explicitly true; the boolean is stored with the submission
// as the consent record required under the FADP and the GDPR.
const consent = z.literal(true, {
  message: "Consent is required before the form can be submitted.",
});

// Anti-spam envelope shared by every form.
//   company  — honeypot; real visitors never see the field
//   elapsedMs — milliseconds between form render and submit
//
// The honeypot is deliberately NOT rejected here. Failing validation on it would
// return a 422 naming the field, which tells an automated submitter exactly what
// tripped it, and would show an unfixable error to the occasional real visitor
// whose password manager fills a field called "company". The route inspects this
// value instead and answers with a plain success while delivering nothing.
export const antiSpam = z.object({
  company: z.string().max(200).optional().default(""),
  elapsedMs: z.coerce.number().int().nonnegative().default(0),
});

const person = {
  firstName: shortText(80),
  lastName: shortText(80),
  email,
};

export const applicationSchema = z.object({
  kind: z.literal("application"),
  ...person,
  role: shortText(120),
  organisation: shortText(160),
  country: shortText(80),
  programme: z.enum(["access", "banking", "topic", "unsure"]),
  cohort: optionalText(120),
  objective: longText(),
  contribution: longText(),
  ref1Name: shortText(120),
  ref1Email: email,
  ref2Name: shortText(120),
  ref2Email: email,
  consent,
});

export const consultationSchema = z.object({
  kind: z.literal("consultation"),
  ...person,
  role: shortText(120),
  organisation: shortText(160),
  programme: z.enum(["access", "banking", "topic", "unsure"]).default("unsure"),
  topic: longText(),
  timing: optionalText(200),
  consent,
});

export const institutionalSchema = z.object({
  kind: z.literal("institutional"),
  ...person,
  role: shortText(120),
  institution: shortText(160),
  audience: shortText(300),
  format: z.enum(["three-day", "four-day-chatham", "curated-week", "modular", "undecided"]),
  languages: optionalText(120),
  dates: optionalText(120),
  description: longText(),
  consent,
});

// The client specified this field list exactly: first name, last name, email,
// optional organisation, optional role, area of interest, message, consent.
export const AREAS_OF_INTEREST = [
  "Executive learning",
  "Tailored organisational programme",
  "Finance workshop",
  "Swiss business experience",
  "Speaking or teaching enquiry",
  "Other",
] as const;

export const contactSchema = z.object({
  kind: z.literal("contact"),
  ...person,
  organisation: optionalText(160),
  role: optionalText(160),
  areaOfInterest: z.enum(AREAS_OF_INTEREST, {
    message: "Please choose an area of interest.",
  }),
  message: longText(),
  consent,
});

export const dossierSchema = z.object({
  kind: z.literal("dossier"),
  ...person,
  organisation: optionalText(160),
  programme: z.enum(["access", "banking", "topic", "all"]).default("all"),
  consent,
});

export const newsletterSchema = z.object({
  kind: z.literal("newsletter"),
  email,
  consent,
});

export const submissionSchema = z
  .discriminatedUnion("kind", [
    applicationSchema,
    consultationSchema,
    institutionalSchema,
    contactSchema,
    dossierSchema,
    newsletterSchema,
  ])
  .and(antiSpam);

export type Submission = z.infer<typeof submissionSchema>;

// Human-readable labels used in the notification email and the audit line.
export const formKindLabels: Record<FormKind, string> = {
  application: "Cohort application",
  consultation: "Private consultation request",
  institutional: "Institutional / private cohort enquiry",
  contact: "Contact message",
  dossier: "Programme dossier request",
  newsletter: "Dispatch subscription",
};
