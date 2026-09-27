import type { ReactNode } from "react";

type Props = {
  label: string;
  htmlFor: string;
  hint?: string;
  required?: boolean;
  children: ReactNode;
};

export function Field({ label, htmlFor, hint, required, children }: Props) {
  return (
    <div className="grid gap-2">
      <label
        htmlFor={htmlFor}
        className="text-eyebrow uppercase text-slate-2 tracking-[0.16em]"
      >
        {label}
        {required ? <span aria-hidden="true" className="text-gold ml-1">*</span> : null}
      </label>
      {children}
      {hint ? <p className="text-[0.78rem] text-slate-2">{hint}</p> : null}
    </div>
  );
}

// Control borders are a darker stone than the decorative hairline (3.7:1 on
// white), so the field boundary is visible; focus darkens it to navy and
// keeps a real outline for keyboard users. min-h keeps the select the same
// height as the text inputs beside it.
const baseInput =
  "w-full min-h-[3.25rem] bg-white border border-[#8C8471] px-4 py-3 text-body text-navy placeholder:text-slate-2/70 focus:border-navy focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy transition-colors duration-200";

export function TextInput(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={`${baseInput} ${props.className ?? ""}`} />;
}

export function Textarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      rows={5}
      {...props}
      className={`${baseInput} resize-y ${props.className ?? ""}`}
    />
  );
}

export function Select(props: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return <select {...props} className={`${baseInput} ${props.className ?? ""}`} />;
}
