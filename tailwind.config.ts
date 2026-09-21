import type { Config } from "tailwindcss";

// Our theme colors are plain oklch() CSS variables (so they can be swapped
// wholesale between light/dark in globals.css). Tailwind's opacity modifiers
// (e.g. `bg-bg/60`) only work automatically on colors defined via the
// `rgb(var(--x) / <alpha-value>)` channel pattern -- a raw `var(--bg)`
// string doesn't support that, so `/NN` modifiers on these tokens silently
// produced no CSS at all. This wraps each token so opacity modifiers instead
// resolve to `color-mix()`, which works with any color space and keeps the
// single oklch() variable as the source of truth.
function withOpacity(variable: string) {
  return ({ opacityValue }: { opacityValue?: string | number }) => {
    // No `/NN` modifier -> Tailwind's legacy bg-opacity-*/text-opacity-* support
    // still calls this with opacityValue set to a CSS var placeholder (e.g.
    // "var(--tw-bg-opacity)") rather than leaving it undefined. Treat both
    // "no modifier" cases as "just the plain color".
    const raw = opacityValue === undefined ? undefined : String(opacityValue);
    if (raw === undefined || raw.startsWith("var(") || Number.isNaN(Number(raw))) {
      return `var(${variable})`;
    }
    return `color-mix(in oklab, var(${variable}) ${Number(raw) * 100}%, transparent)`;
  };
}

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: withOpacity("--bg"),
        surface: withOpacity("--surface"),
        "surface-2": withOpacity("--surface-2"),
        ink: withOpacity("--ink"),
        muted: withOpacity("--muted"),
        border: withOpacity("--border"),
        brand: withOpacity("--brand"),
        "brand-contrast": withOpacity("--brand-contrast"),
        gold: withOpacity("--gold"),
        "gold-contrast": withOpacity("--gold-contrast"),
        "btn-bg": withOpacity("--btn-bg"),
        "btn-ink": withOpacity("--btn-ink"),
        // Fixed footer palette -- same color in light and dark mode, so it's
        // kept as its own token rather than swapped per-theme like the ones
        // above.
        "footer-bg": withOpacity("--footer-bg"),
        "footer-ink": withOpacity("--footer-ink"),
        "footer-muted": withOpacity("--footer-muted"),
        "footer-border": withOpacity("--footer-border"),
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } as any,
      fontFamily: {
        display: ["Fraunces", "ui-serif", "Georgia", "serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        // Bold geometric sans reserved for the hero headline treatment.
        hero: ["Sora", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "72rem",
      },
      boxShadow: {
        soft: "0 1px 2px oklch(0% 0 0 / 0.04), 0 8px 24px -8px oklch(0% 0 0 / 0.12)",
        "soft-dark": "0 1px 2px oklch(0% 0 0 / 0.2), 0 12px 32px -8px oklch(0% 0 0 / 0.45)",
        pill: "0 1px 2px oklch(0% 0 0 / 0.06), 0 4px 16px -4px oklch(0% 0 0 / 0.1)",
      },
      animation: {
        "spin-slow": "spin 14s linear infinite",
        float: "float 6s ease-in-out infinite",
        marquee: "marquee 26s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
