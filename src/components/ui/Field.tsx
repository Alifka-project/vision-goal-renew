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

const baseInput =
  "w-full bg-white border hairline px-4 py-3 text-body text-navy placeholder:text-slate-2/60 focus:outline-none focus:border-gold/60 transition-colors duration-200";

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
