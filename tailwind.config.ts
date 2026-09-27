import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        md: "2.5rem",
        lg: "4rem",
      },
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0A1F44",
          deep: "#06143A",
        },
        gold: {
          DEFAULT: "#B8924A",
          hi: "#D4B26A",
          // Small gold text (eyebrows) on light surfaces: brand gold is
          // 2.9:1 on white; this is 5.3:1 on white, 4.7:1 on cream.
          ink: "#876628",
        },
        cream: {
          DEFAULT: "#F7F1E3",
          2: "#FBF7EC",
        },
        ink: "#1F2937",
        slate: {
          DEFAULT: "#3D4654",
          2: "#4B5563",
        },
        hairline: "#DAD2BB",
      },
      fontFamily: {
        serif: [
          "Georgia",
          "Source Serif Pro",
          "Cambria",
          "Times New Roman",
          "serif",
        ],
        sans: [
          "Inter",
          "Calibri",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
      },
      fontSize: {
        eyebrow: ["0.6875rem", { lineHeight: "1", letterSpacing: "0.18em", fontWeight: "700" }],
        "body-sm": ["0.875rem", { lineHeight: "1.6" }],
        body: ["1rem", { lineHeight: "1.7" }],
        "body-lg": ["1.125rem", { lineHeight: "1.65" }],
        "display-sm": ["1.75rem", { lineHeight: "1.15", letterSpacing: "-0.005em", fontWeight: "700" }],
        // 2rem on phones: at 2.25rem bold, section H2s outweighed the regular
        // 40px homepage H1 and ran to four lines. Every usage has an md:
        // override, so larger screens are unchanged.
        "display-md": ["2rem", { lineHeight: "1.1", letterSpacing: "-0.01em", fontWeight: "700" }],
        "display-lg": ["3.5rem", { lineHeight: "1.05", letterSpacing: "-0.015em", fontWeight: "700" }],
        "display-xl": ["5rem", { lineHeight: "1.02", letterSpacing: "-0.02em", fontWeight: "700" }],
      },
      // Vertical padding for every page section (top AND bottom), so the gap
      // between two sections' content is twice this value. At 8rem / 5rem it
      // measured ~19% of the homepage as pure padding and made the sparser
      // sections read as mostly empty. 6rem / 4rem keeps the editorial air
      // while giving each boundary a pause rather than a void.
      spacing: {
        "section-y": "4rem",
        "section-y-lg": "6rem",
      },
      maxWidth: {
        prose: "62ch",
        "prose-narrow": "48ch",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      fontVariantNumeric: {
        tabular: "tabular-nums",
      },
    },
  },
  plugins: [],
};

export default config;
