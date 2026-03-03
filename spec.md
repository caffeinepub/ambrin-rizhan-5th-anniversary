# Ambrin & Rizhan 5th Anniversary

## Current State
A multi-page romantic anniversary website with 6 pages: Welcome, Together, Love Question, Gallery, Date Picker, Final Message. Previously used a dark burgundy/red theme. The NO button on Page 3 showed all dodging words at once. Page labels used old gold text. All pages are complete with 5 couple photos.

## Requested Changes (Diff)

### Add
- New midnight navy + violet + pink/magenta theme replacing the old burgundy theme
- Starfield background (60 animated twinkling stars)
- `shimmer-text` utility: gold-to-pink animated gradient text on headings
- `animate-heartbeat` keyframe for the 💍 and 💗 emojis
- `animate-twinkle` keyframe for stars
- Cormorant Garamond (heading) + Nunito (body) font pair replacing Playfair + Lato
- Fun fact card on Page 2: "That's 1,826 days of loving each other..."
- Year labels on gallery photos (Year 1 through Year 5)
- Button label "Seal the Promise 💍" on Page 5 instead of "Submit 💕"

### Modify
- Page 3 NO button: now shows ONE dodging word at a time from a sequence of 9 phrases; clicking advances to the next phrase; last phrase forces `onYes()`; word dodges on hover and on click
- GlobalBackground: replaced floating hearts with starfield + floating petals (🌸💗✨🌺💕⭐🌹)
- GlobalBackground gradient: midnight navy → deep violet with pink radial glow and corner accents
- StyledButton: primary is now magenta→pink-glow gradient; secondary uses pink-glow border
- All pages: updated all inline style colors from gold/rose to new palette (oklch pink-glow, gold, navy)
- FloatingWord: color changed to pink-light with pink glow shadow
- tailwind.config.js: added new color tokens (midnight, deep-navy, navy-mid, violet-soft, pink-glow, pink-light, magenta, rose-warm, star-white)
- index.css: completely redesigned — new CSS variables, new font imports, all animation keyframes retained plus new ones

### Remove
- Old deep burgundy/rose-dark/rose-medium visual identity (kept as alias tokens for backward compat)
- All dodging words shown simultaneously on Page 3

## Implementation Plan
1. All code changes already applied directly to source files
2. Frontend agent should typecheck, lint, and build to confirm no errors
3. Fix any TypeScript or build errors found
