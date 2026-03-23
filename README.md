# Nancy's Lem - Landing Page Variations

A/B testing variations for the Nancy's Lem product landing page.

## Structure

Each folder is a standalone project that can be deployed independently:

| Folder | Headline | Angle |
|---|---|---|
| `original/` | 500,000+ Orgasms Later... | Original product review editorial |
| `variation-1/` | Your Daily Habits Are Shaping You More Than You Think | Soft wellness editorial - daily habits leading to intimate health |
| `variation-2/` | Why LEM Isn't Just a Seasonal Trend — It's a Must-Have | Positioning Lem as a timeless essential, not a passing trend |
| `variation-3/` | When Was the Last Time You Did Something Just for You? | Redefining self-care to include intimate wellness |
| `variation-4/` | Why Is Sex Such a Taboo Topic — And Why Many Women Never Talk About It | Breaking the silence and destigmatizing the conversation |
| `variation-5/` | Is It Just Me… Or Does This Happen to Everyone? | Validation and shared experience - you're not alone |

## Tech Stack

- React 18 + TypeScript
- Vite 7
- Tailwind CSS 4
- Radix UI components
- Framer Motion

## Running a Variation

```bash
cd variation-1   # or any folder
pnpm install
pnpm dev
```

The dev server runs on `http://localhost:3000`.

## Shared Features

All variations include:
- Autoplay muted product video in the product section
- Image gallery with lightbox
- Sticky CTA bar with countdown timer
- Responsive design (mobile, tablet, desktop)
- Google Ads conversion tracking
- Microsoft Clarity analytics
- Discreet product naming ("Wellness Massager")
- Shipping label references "Nancy"
