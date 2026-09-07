"use client";

import { useCallback, useRef, useState } from "react";
import type { FormKind } from "@/lib/forms/schemas";

type Status = "idle" | "submitting" | "success" | "error";

export type FieldErrors = Record<string, string[]>;

const GENERIC_ERROR =
  "Something went wrong on our side. Please try again, or write to info@visiongoal.ch.";

/**
 * Posts a form as JSON to /api/submit.
 *
 * Everything travels in the request body: no form on this site uses GET, so
 * personal information never appears in a URL, a browser history entry, or a
 * referrer header.
 */
export function useFormSubmission(kind: FormKind) {
  const renderedAt = useRef(Date.now());
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  const submit = useCallback(
    async (form: HTMLFormElement, extra: Record<string, unknown> = {}) => {
      setStatus("submitting");
      setError(null);
      setFieldErrors({});

      const entries = Object.fromEntries(new FormData(form).entries());
      const consentInput = form.querySelector<HTMLInputElement>('input[name="consent"]');

      const payload = {
        ...entries,
        ...extra,
        kind,
        consent: consentInput ? consentInput.checked : true,
        consentText: consentInput?.dataset.consentText ?? undefined,
        elapsedMs: Date.now() - renderedAt.current,
      };

      try {
        const response = await fetch("/api/submit", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(payload),
        });

        const result = (await response.json().catch(() => null)) as
          | { ok: boolean; error?: string; fieldErrors?: FieldErrors }
          | null;

        if (response.ok && result?.ok) {
          setStatus("success");
          return true;
        }

        setFieldErrors(result?.fieldErrors ?? {});
        setError(result?.error ?? GENERIC_ERROR);
        setStatus("error");
        return false;
      } catch {
        setError("We could not reach the server. Please check your connection and try again.");
        setStatus("error");
        return false;
      }
    },
    [kind],
  );

  return {
    submit,
    status,
    error,
    fieldErrors,
    isSubmitting: status === "submitting",
    isSuccess: status === "success",
  };
}
