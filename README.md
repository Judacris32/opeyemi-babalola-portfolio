# Opeyemi Babalola — Portfolio

A multi-page, premium portfolio for Opeyemi Babalola, Senior Software & ML Systems Engineer and founder of Wardscribe.

## Pages

- `/` — Home: hero, a scrolling marquee of companies, and condensed teasers for every section below, each linking out to its full page
- `/about` — full bio + the community/open-source section
- `/experience` — full role history
- `/work` — full project grid
- `/skills` — full toolbox
- `/recognition` — both awards + press clippings ("as featured in")
- `/contact` — the contact CTA

Navbar and footer are rendered once in `src/app/layout.tsx` and shared
across every route; the pill nav highlights whichever route you're on.

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS (class-based dark mode)
- Framer Motion for scroll-in animations
- next-themes for the light/dark toggle
- lucide-react + react-icons/si for icons
- Fonts: Fraunces (display) + Inter (body), self-hosted via `@fontsource` — no network calls at build time

## Getting started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

```bash
npm run build
npm run start
```

## Content

All copy, experience, projects, skills and award data live in one place:
`src/data/content.ts`. Edit that file to update anything on the site — no
need to touch components for text changes.

**One placeholder to fill in:** `profile.linkedin` in `src/data/content.ts`
is empty — the source resume linked the word "LinkedIn" but didn't include
the actual URL. Drop in the real profile URL and wire it back into
`src/components/sections/about.tsx` (there's a `TODO` comment marking where
it was removed) whenever you have it.

## Theme tokens

Color tokens are defined as CSS custom properties in `src/app/globals.css`,
using the exact `oklch()` values specified for this build:

- Light mode (default): `oklch(95.1% 0.026 236.824)` background
- Dark mode: `oklch(62.3% 0.214 259.815)` background, with darker
  same-hue panels layered on top for readable card content
- Hover state on interactive buttons: `oklch(82.8% 0.189 84.429)`

## Background rhythm

`src/components/ui/section.tsx` exports a `Section` wrapper with three
tones — `base` (page background), `tint` (a visibly different panel color,
`bg-surface-2`), and `invert` (the bold blue-to-navy gradient band used for
the marquee and the contact CTA). Every section on every page picks one of
these, alternating tint/base as you scroll so the page doesn't read as one
flat color block. `PageHeader` (used at the top of every subpage) is always
`tint`, so each page opens on a distinct band before dropping into its body
content.

## Marquee

`src/components/ui/marquee.tsx` is a CSS-animated infinite scroller (see
the `marquee` keyframe in `tailwind.config.ts`) currently fed the list of
companies from `src/data/content.ts` (`companies`). Swap that array, or
point the component at a different list, to change what scrolls.

## Recognition / press

`src/data/content.ts` exports a `press` array (outlet, headline, date,
image, optional url) rendered on `/recognition` as "as featured in" cards.
The two clippings already in there were cropped from the screenshots you
sent — site chrome and ad rails trimmed out — and saved to
`public/images/press/`. To add more coverage later: drop the new image in
that folder and add an entry to `press`; no component changes needed. The
Independent piece has no `url` set (the live article link wasn't found by
search), so that card renders without a "Read the piece" link — add the
url whenever you have it.

## Images

The hero, about and contact sections reference a few photos hotlinked from
Unsplash (`images.unsplash.com`, allowed via `next.config.mjs` remote
patterns) for texture and location context. The headshot, logo and press
clippings are local files under `public/images/`, cropped and optimized
from the source assets you sent over.
