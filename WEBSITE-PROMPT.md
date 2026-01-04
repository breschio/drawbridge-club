# Drawbridge.club Website Design Brief

## Overview

Build a minimal, retro-inspired marketing website for **Drawbridge** — a visual annotation tool that connects browser comments directly to Claude Code and Cursor.

**The Hook:** "Figma Comments for the browser, sent directly to your AI code editor."

**URL:** drawbridge.club  
**Type:** Single-page marketing site  
**Tone:** Direct, action-oriented, technically credible

---

## Product Positioning

### What Drawbridge Actually Is

From the [GitHub README](https://github.com/breschio/drawbridge):

> "Make comments in the browser (like in Figma) and send them to Claude Code and Cursor. This Chrome extension + editor ruleset connects your browser to your local development project."

### The Core Loop

```
1. ANNOTATE → Press C to comment, R to draw rectangles on your live site
2. PROCESS  → Run `bridge` in Cursor or `/bridge` in Claude Code  
3. REVIEW   → See your changes, refine, repeat
```

### Key Differentiators

- **Visual-first workflow** — Click on elements, not describe them
- **Works with both ecosystems** — Cursor AND Claude Code
- **Three processing modes** — `step` (safe), `batch` (efficient), `yolo` (autonomous)
- **Screenshot context** — AI sees what you see
- **Dependency-aware** — Smart task ordering

---

## Design Philosophy

### The Aesthetic Triangle

```
           ANTHROPIC
          (warmth, credibility)
               △
              /  \
             /    \
            /      \
           /________\
     RETRO            MINIMAL
  (pixel heritage)   (breathing room)
```

Position at the center — not too precious about pixels, not too stark, not too corporate.

### Guiding Principles

| Principle | Expression |
|-----------|------------|
| **Direct Communication** | Say what it does, show how it works |
| **Quiet Confidence** | No desperate CTAs, no visual noise |
| **Technical Elegance** | Built by someone who understands craft |
| **Heritage as Accent** | Pixel aesthetic references, not costumes |

---

## Color Palette

### Primary Palette (Anthropic-Aligned)

```css
:root {
  /* Backgrounds - Warm Neutrals */
  --canvas: #FAF9F7;              /* Warm off-white */
  --surface: #F5F3F0;             /* Cards, panels */
  --surface-elevated: #FFFFFF;    /* Overlays */
  
  /* Text - Rich, Not Harsh */
  --text-primary: #1C1917;        /* Stone-900 */
  --text-secondary: #44403C;      /* Stone-700 */
  --text-tertiary: #78716C;       /* Stone-500 */
  --text-subtle: #A8A29E;         /* Stone-400 */
  
  /* Accent - Dignified, Not Electric */
  --accent: #3B5998;              /* Muted blue */
  --accent-muted: #64748B;        /* Slate */
  
  /* Signature - The Drawbridge Amber */
  --pixel-gold: #D97706;          /* Retro callback, status indicators */
  --pixel-gold-soft: rgba(217, 119, 6, 0.1);
  
  /* Status Colors (from existing styleguide) */
  --status-todo: #F59E0B;         /* Orange - pending */
  --status-doing: #3B82F6;        /* Blue - in progress */
  --status-done: #10B981;         /* Green - complete */
  
  /* Borders */
  --border: rgba(0, 0, 0, 0.06);
  --border-strong: rgba(0, 0, 0, 0.12);
  
  /* Terminal */
  --terminal-bg: #1C1917;
  --terminal-text: #E7E5E4;
  --terminal-green: #4ADE80;
  --terminal-blue: #60A5FA;
}
```

### Dark Mode (Optional)

```css
[data-theme="dark"] {
  --canvas: #0C0A09;
  --surface: #1C1917;
  --surface-elevated: #292524;
  
  --text-primary: #FAFAF9;
  --text-secondary: #D6D3D1;
  --text-tertiary: #A8A29E;
}
```

---

## Typography

### Font Stack

| Purpose | Font | Fallback |
|---------|------|----------|
| **Display / Logo** | `Silkscreen` | `monospace` |
| **Headlines** | `Newsreader` or `Libre Baskerville` | `Georgia, serif` |
| **Body** | `Inter` | `system-ui, sans-serif` |
| **Code / Commands** | `Berkeley Mono` or `JetBrains Mono` | `SF Mono, monospace` |

### Type Scale

```css
/* Display - Silkscreen, use sparingly */
.display-hero { font-size: 48px; line-height: 1.1; }
.display-section { font-size: 24px; line-height: 1.2; }

/* Headlines - Serif for warmth */
.headline-1 { font-size: 36px; line-height: 1.25; letter-spacing: -0.02em; }
.headline-2 { font-size: 24px; line-height: 1.3; }
.headline-3 { font-size: 18px; line-height: 1.4; }

/* Body */
.body-lg { font-size: 18px; line-height: 1.7; }
.body { font-size: 16px; line-height: 1.6; }
.body-sm { font-size: 14px; line-height: 1.5; }

/* Utility */
.caption { font-size: 13px; line-height: 1.4; }
.overline { font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; }
.kbd { font-size: 12px; font-family: var(--font-mono); }
```

---

## Page Structure & Content

### Navigation

```
┌────────────────────────────────────────────────────────────────┐
│  [Pixel Bridge Icon] Drawbridge          Docs   GitHub   Install │
└────────────────────────────────────────────────────────────────┘
```

- Fixed header, minimal
- Logo: Pixel drawbridge + "Drawbridge" in Silkscreen
- 3 links max on right
- Subtle backdrop-blur on scroll

---

### SECTION 1: Hero

**Headline:**
> Figma comments for the browser.

**Subhead:**
> Click on anything. Tell AI what to change. It does.

**CTAs:**
- Primary: `Install for Chrome`
- Secondary: `View on GitHub`

**Hero Visual:** Browser mockup with comment pins, or terminal showing `bridge` output.

**That's it.** No paragraph. No feature list. The hero says what it is in under 15 words.

---

### SECTION 2: How It Works

**Three steps. No configuration.**

| Step | What you do |
|------|-------------|
| **1** | Press `C`. Click anything. Leave a comment. |
| **2** | Run `bridge` in your editor. |
| **3** | See changes in browser. |

**Visual:** Simple 1 → 2 → 3 diagram with icons. No paragraphs.

---

### SECTION 3: Features

**Format:** 2x2 or 3-column grid. Each card is a title + one line.

| Feature | Copy |
|---------|------|
| **Visual context** | Click on elements. AI sees what you see. |
| **Works everywhere** | Cursor and Claude Code. Same workflow. |
| **Draw rectangles** | Press `R`. Annotate any area. |
| **Three modes** | Step, batch, or yolo. You choose. |

**That's it.** Four features. Four lines. No bullet points inside cards.

**Icons:** Use [HackerNoon's Pixel Icon Library](https://pixeliconlibrary.com/). 24px, single color.

---

### SECTION 4: Terminal Demo (Optional)

**If included, keep it short:**

```
$ bridge

Found 3 tasks. Processing...

[done] make this button green
[done] add more padding  
[done] change font to sans-serif

Done.
```

**No elaborate output.** Show the command, show it working, done.

---

### SECTION 5: Get Started

**Headline:** Get started now.

**One code block:**
```
git clone https://github.com/breschio/drawbridge.git
```

**One CTA:** `Install for Chrome`

**That's it.** Link to docs for detailed setup. Don't explain the whole process on the marketing page.

---

### SECTION 6: Technical Detail (Optional)

**Skip this on the main page.** If included, one line:

> Tasks sync to `.moat/` in your project. Human-readable. Git-safe.

Link to docs for file structure details.

---

### Footer

```
Drawbridge

GitHub · Docs · Changelog

© 2026
```

**That's it.** Logo, three links, copyright. No tagline in footer.

---

## Copy Guidelines

### The Cursor Standard

Study how [cursor.com](https://cursor.com/) writes:

| Element | Cursor's approach |
|---------|-------------------|
| Hero headline | One bold statement. No subhead paragraph. |
| Feature title | 3-5 words max |
| Feature description | One sentence. Period. |
| CTA | Verb + object. "Download for macOS" |

### Rules for Drawbridge

1. **One sentence per idea.** If you need two, it's two ideas.
2. **No adjectives unless essential.** Not "powerful AI processing" — just "AI processes your tasks."
3. **Keyboard shortcuts in code style.** `C` not "C" or C.
4. **No emoji.** Ever.
5. **No filler.** "Easy to use" says nothing. Delete it.

### Word Budget

| Section | Max words |
|---------|-----------|
| Hero headline | 8 |
| Hero subhead | 12 |
| Feature title | 4 |
| Feature description | 10 |
| CTA | 4 |

### Copy Examples

**Hero:**
```
Figma comments for the browser.
Click on anything. Tell AI what to change. It does.
```

**Feature card:**
```
Visual context
Click on elements. AI sees what you see.
```

**CTA:**
```
Install for Chrome
```

### Words to Avoid

- Revolutionary, powerful, seamless, robust
- Supercharge, unlock, leverage
- Easy, simple, intuitive (show don't tell)
- Game-changing, next-generation
- Any word that could describe any product

---

## Site Architecture

### Launch Navigation (V1)

```
[Logo] Drawbridge                              Docs  GitHub  Install
```

Keep it minimal. Three links. Ship fast.

### Future Navigation (V2+)

```
[Logo] Drawbridge          Features  Enterprise  Pricing  Docs  GitHub
```

| Page | When to add | Purpose |
|------|-------------|---------|
| `/features` | When you have 6+ distinct features | Deep-dive on capabilities |
| `/enterprise` | When you have team/org features | SSO, admin controls, volume licensing |
| `/pricing` | When you monetize | Free vs Pro vs Enterprise tiers |
| `/docs` | Can link externally at first | README, setup guides, API reference |
| `/changelog` | After 5+ releases | Release notes, what's new |
| `/blog` | Optional, low priority | Tutorials, case studies |

### Placeholder Strategy

For V1, these links can:
1. **Not exist** — Just ship with Docs, GitHub, Install
2. **Link to anchors** — `/features` scrolls to features section
3. **Show "Coming Soon"** — Simple page with email capture

**Recommendation:** Launch with `Docs | GitHub | Install` only. Add pages as the product grows.

### URL Structure

```
drawbridge.club/              <- Marketing home
drawbridge.club/docs          <- Documentation (or link to GitHub wiki/README)
drawbridge.club/changelog     <- Release notes
drawbridge.club/enterprise    <- Future: team features
drawbridge.club/pricing       <- Future: monetization
```

All lowercase, no trailing slashes.

---

## Optional Sections (Consider for V2)

### Social Proof

If/when you have traction, add a subtle proof section:

```
533 stars on GitHub · Used by developers at [logos]
```

Or a single testimonial:

```
"Finally, visual feedback that actually reaches my AI editor."
— Name, Title
```

**Rules:**
- No fake testimonials
- GitHub stars are honest social proof
- Keep it one line, not a carousel

### Email Capture

For enterprise/pricing waitlist:

```
Get notified when Teams launches.

[email@example.com] [Notify me]
```

**Rules:**
- One field, one button
- No spam promises needed — it's implied
- Place below the fold, not in hero

### Integrations Preview (Future)

When you support more editors:

```
Works with

[Cursor logo]  [Claude Code logo]  [VS Code logo]  [Windsurf logo]
```

Keep logos monochrome/grayscale for visual consistency.

---

### Footer Links (Future)

```
Product          Resources        Company         Legal
─────────        ─────────        ─────────       ─────────
Features         Docs             About           Terms
Enterprise       Changelog        Careers         Privacy
Pricing          Blog             Contact
                 GitHub
```

Don't build this footer until you have the pages. For V1, keep footer minimal.

---

## Complete Page Copy

Here's the entire page, word for word. This is the target.

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

[Logo] Drawbridge                              Docs  GitHub  Install

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

                    Figma comments for the browser.

          Click on anything. Tell AI what to change. It does.

                [Install for Chrome]    [GitHub]


                        [Hero Visual]


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

                         How it works

        1                      2                      3
     Annotate               Process                Review
        
   Press C. Click         Run bridge            See changes 
   anything. Comment.     in your editor.       in browser.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

    ┌─────────────────────────┐  ┌─────────────────────────┐
    │  Visual context         │  │  Works everywhere       │
    │                         │  │                         │
    │  Click on elements.     │  │  Cursor and Claude      │
    │  AI sees what you see.  │  │  Code. Same workflow.   │
    └─────────────────────────┘  └─────────────────────────┘
    
    ┌─────────────────────────┐  ┌─────────────────────────┐
    │  Draw rectangles        │  │  Three modes            │
    │                         │  │                         │
    │  Press R. Annotate      │  │  Step, batch, or yolo.  │
    │  any area.              │  │  You choose.            │
    └─────────────────────────┘  └─────────────────────────┘


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

                        Get started now.

    git clone https://github.com/breschio/drawbridge.git

                       [Install for Chrome]


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

                          Drawbridge

                    GitHub · Docs · Changelog

                            © 2026

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

**Total word count:** ~80 words of actual copy. That's the goal.

---

## Icons

### No Emoji

Do not use emoji anywhere on the site. They undercut the premium aesthetic.

### Pixel Icon Library

Use [HackerNoon's Pixel Icon Library](https://pixeliconlibrary.com/) for all iconography.

**Why this library:**
- 24px grid — matches our pixel heritage
- Open source (CC BY 4.0)
- Consistent, minimal style
- Aligns with retro-computing aesthetic

**Installation:**
```html
<!-- Via CDN -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/pixel-icon-library/dist/pixel-icons.min.css">

<!-- Usage -->
<i class="hn hn-icon-name"></i>
```

**Recommended Icons:**
| Use Case | Icon Name |
|----------|-----------|
| Comment/Annotation | `hn-chat` or `hn-message` |
| Rectangle/Draw | `hn-square` or `hn-frame` |
| Process/Run | `hn-play` or `hn-terminal` |
| Complete/Done | `hn-check` |
| Settings | `hn-gear` |
| External Link | `hn-external` |
| GitHub | `hn-github` |

**Fallback:** If specific icons aren't available, use simple SVG shapes in the same 24px pixel-art style, or Lucide icons with `stroke-width: 1.5` for a cleaner alternative.

---

## Components

### Keyboard Shortcut Badge

```css
.kbd {
  display: inline-block;
  background: var(--surface);
  border: 1px solid var(--border-strong);
  border-radius: 4px;
  padding: 2px 8px;
  font-family: var(--font-mono);
  font-size: 12px;
  font-weight: 500;
  color: var(--text-secondary);
  box-shadow: 0 1px 0 var(--border-strong);
}
```

### Terminal Block

```css
.terminal {
  background: var(--terminal-bg);
  border-radius: 12px;
  padding: 24px;
  font-family: var(--font-mono);
  font-size: 14px;
  line-height: 1.7;
  color: var(--terminal-text);
  overflow-x: auto;
}

.terminal-prompt::before {
  content: "$ ";
  color: var(--terminal-green);
}

.terminal-output {
  color: var(--text-tertiary);
}
```

### Feature Card

```css
.feature-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 24px;
}

.feature-card-icon {
  font-size: 24px;
  margin-bottom: 12px;
}

.feature-card-title {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 8px;
  color: var(--text-primary);
}

.feature-card-body {
  font-size: 14px;
  line-height: 1.6;
  color: var(--text-secondary);
}
```

### Status Pill (for task states)

```css
.status-pill {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 10px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.status-pill.todo {
  background: rgba(245, 158, 11, 0.1);
  color: #D97706;
}

.status-pill.doing {
  background: rgba(59, 130, 246, 0.1);
  color: #3B82F6;
}

.status-pill.done {
  background: rgba(16, 185, 129, 0.1);
  color: #059669;
}
```

---

## Animations

### Philosophy

Match the README's direct style — animations should be functional, not decorative.

### Allowed

| Element | Animation | Duration |
|---------|-----------|----------|
| Page load | Fade up, staggered | 0.4s |
| Terminal typing | Character-by-character | Variable |
| Bridge icon | Slow lower/raise on hover | 1.5s |
| Status changes | Color transition | 0.2s |

### Avoid

- Bounce effects
- Heavy parallax
- Autoplaying videos
- Animated gradients

---

## Visual Assets Needed

### Hero Visual Options

1. **Animated demo GIF** — Show comment → process → done flow
2. **Pixel bridge animation** — SVG, subtle, loops every 3s
3. **Terminal mockup** — Static or typing animation
4. **Browser + editor split view** — Shows the connection concept

### Screenshots to Include

- Comment mode cursor on a button
- Rectangle drawing over a layout section
- Terminal showing `bridge` output
- Task status changing from "to do" → "done"

---

## Mobile Considerations

The site should be fully responsive, but priorities differ:

| Element | Desktop | Mobile |
|---------|---------|--------|
| Hero visual | Large, prominent | Smaller or hidden |
| Navigation | Inline links | Hamburger or simplified |
| Feature grid | 2x2 | Stacked single column |
| Terminal demo | Full width | Scrollable or simplified |
| CTAs | Side by side | Stacked |

**Mobile CTA priority:** On mobile, "Install for Chrome" is less relevant (users can't install Chrome extensions on mobile). Consider:
- Primary: "View on GitHub" (works everywhere)
- Secondary: "Get started on desktop"

Or detect mobile and show:
> "Drawbridge is a Chrome extension. Open this page on desktop to install."

---

## Technical Implementation

### Stack

| Layer | Recommendation |
|-------|---------------|
| **Framework** | Astro (static, fast) or plain HTML |
| **Styling** | Tailwind or vanilla CSS |
| **Animations** | CSS only, no JS libraries |
| **Hosting** | Vercel, Cloudflare Pages, or GitHub Pages |

### Performance Targets

- Lighthouse 95+ all categories
- First Contentful Paint < 1s
- Total page weight < 500kb
- Zero layout shift

### SEO

```html
<title>Drawbridge — Figma comments for the browser</title>
<meta name="description" content="Click on anything in your browser. Tell AI what to change. It does. Works with Claude Code and Cursor.">

<meta property="og:title" content="Drawbridge">
<meta property="og:description" content="Figma comments for the browser.">
<meta property="og:image" content="https://drawbridge.club/og.png">

<meta name="twitter:card" content="summary_large_image">
```

Keep meta descriptions under 120 characters. Same voice as the site.

---

## Reference Sites

### Primary Reference

**[cursor.com](https://cursor.com/)** — Our north star for copy density and confidence. Study how every sentence earns its place.

### Secondary References

| Site | What to take |
|------|--------------|
| **anthropic.com** | Warm color palette, breathing room |
| **linear.app** | Premium minimalism, subtle polish |
| **raycast.com** | Direct copy, clear CTAs |

### Avoid

- SaaS templates with blob illustrations
- Gradient hero backgrounds
- Stock photography
- Marketing language that could describe any product

---

## Deliverables Checklist

### Design Assets

- [ ] Logo: Pixel bridge SVG (24px, 32px, 48px variants)
- [ ] Favicon: .ico + apple-touch-icon.png
- [ ] OG image: 1200x630, shows logo + tagline
- [ ] Hero visual: Animation, mockup, or illustration

### Pages

- [ ] Home (marketing page)
- [ ] 404 (simple, on-brand)
- [ ] Docs (can link to GitHub initially)

### Technical

- [ ] Responsive: Mobile, tablet, desktop
- [ ] Dark mode: Optional for V1, nice-to-have
- [ ] Analytics: Plausible, Fathom, or Vercel Analytics (privacy-respecting)
- [ ] Performance: Lighthouse 95+ all categories

### Launch Checklist

- [ ] Domain configured (drawbridge.club)
- [ ] SSL certificate active
- [ ] OG tags working (test with opengraph.xyz)
- [ ] Favicon visible
- [ ] All links working
- [ ] Mobile tested on real device
- [ ] Load time under 2s on 3G

---

## Success Criteria

| Test | Pass if... |
|------|------------|
| **3-second test** | Visitor knows what it does before scrolling |
| **Ecosystem fit** | Looks like it belongs next to Claude and Cursor |
| **Zero friction** | Install CTA is obvious and immediate |
| **Speed** | Lighthouse 95+, FCP under 1s |

---

## Final Notes

### The Elevator Pitch

> Figma comments for the browser. Click on anything, tell AI what to change, it does.

That's 14 words. The website should feel like an expansion of this, not a departure from it.

### What We're Not Saying

| Don't say | Why |
|-----------|-----|
| "Revolutionary" | Meaningless |
| "Seamless integration" | Jargon |
| "Unlock the power of" | Cliché |
| "Easy to use" | Prove it, don't claim it |
| "The future of" | Overused |

### What We Are Saying

| Say | Why |
|-----|-----|
| "Figma comments for the browser" | Instant mental model |
| "Click on anything" | Action, not description |
| "Run bridge" | Specific, concrete |
| "It does" | Confidence |

---

*Say less. Mean more.*

---

## Out of Scope (For This Prompt)

This prompt covers the marketing website only. Not included:

| Item | Where it lives |
|------|----------------|
| Chrome extension UI | Separate design system |
| Documentation content | GitHub README / docs site |
| Pricing strategy | Business decision |
| Blog posts | Content strategy |
| User authentication | If/when you add accounts |
| Dashboard UI | If/when you add web app |

Keep the marketing site simple. It has one job: explain what Drawbridge does and get people to install it.
