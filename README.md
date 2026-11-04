# Fairwayze website

A Next.js App Router implementation of the [Fairwayze Figma design](https://www.figma.com/design/9shqFjfG85cFUv3prAVjZW/Fairwayze-Website?node-id=368-212). The page includes the complete desktop and mobile section sets, local Figma assets, local Plus Jakarta Sans fonts, and the designed mobile menu.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Checks

```bash
npm run build
npm run typecheck
npm run lint
npm run qa
```

`npm run qa` uses headless Google Chrome on macOS, checks 11 viewport widths, exercises the mobile menu and CTA dialog, and saves screenshots and results in `qa/`. Set the `CHROME_PATH` environment variable if Chrome is installed elsewhere.

## Implementation notes

- The desktop 1600px and mobile 375px frames are reproduced as separate DOM compositions. Each page section is its own React component.
- The desktop Hero keeps its background gradient, feature image, section image, and stats card as independent elements.
- Intermediate widths scale the closest reference composition. The mobile composition is capped at 1.25× and centered through 949px; the desktop composition fills the viewport from 950px upward.
- The Figma file does not provide live destinations for Pricing, Demo, Contact, Get started, Book a demo, Privacy Policy, or Terms of Service. These controls open an accessible notice so they remain operable without inventing URLs or backend behavior.
