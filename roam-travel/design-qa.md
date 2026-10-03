# Design QA

## Comparison target

- Source visual truth: `C:\Users\jhama\Downloads\travel agency\web page design.jpeg`, plus the user supplied hero and adventure-map reference screenshots from this chat.
- Implementation: browser-rendered local page at `http://127.0.0.1:5173/`.
- Viewport: 1280 × 720 CSS pixels at device scale factor 1.
- State: default desktop view; hero and Journey navigation target checked.

## Evidence

- Full-view hero comparison: the implementation keeps the cream editorial layout, large condensed headline, handwritten note, orange circle, route annotation, floating Madeira card, and a clipped alpine hiker photograph.
- Focused map comparison: the implementation uses a real flat world map background, three photo pins, a dashed route, the left-edge scenic photograph, and the `3 days / 2 moods / 1 route` summary card.
- Primary interaction checked: the `Journeys` navigation link scrolls to the map section.
- Console errors: none observed in the browser.

## Required fidelity surfaces

- Fonts and typography: Bebas Neue for display headings, DM Sans for interface copy, and Caveat for editorial annotations maintain the reference hierarchy.
- Spacing and layout rhythm: the hero remains a two-column composition; map pins, route, and summary card sit on distinct layers without overlap.
- Colors and visual tokens: cream base, deep ink typography, mint route accents, and orange marker match the supplied palette.
- Image quality and asset fidelity: the hero now uses a high-resolution alpine backpacker photo. The map uses a raster world-map asset and destination photography, avoiding placeholder continent blocks.
- Copy and content: hero, route, and destination copy match the visible travel concept.

## Comparison history

1. Initial issue: the hero used a sunset image and the map used abstract continent blocks.
   - Fix: replaced the hero with an alpine backpacker image and replaced the map drawing with a flat raster world map.
   - Post-fix evidence: browser views at the URLs above show the hiker hero and the complete pinned map treatment.

## Follow-up polish

- [P3] Replace the third-party hiker photo with a project-owned photograph if you need the exact same person and mountain composition as the reference.

final result: passed
