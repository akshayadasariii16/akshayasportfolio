# AKSHAYA — Premium Futuristic AI Portfolio (v2.0)

> A cinematic, futuristic digital experience inspired by JARVIS-style AI interfaces, reimagined through blush pink, pearl white, and soft lavender aesthetics.

---

## ✦ System Architecture & Design Tokens

### Core Color Palette
| Token | Hex Value | Role |
|---|---|---|
| `--color-baby-pink` | `#F8D7E3` | Primary identity, highlights and accents |
| `--color-pearl-white` | `#FFF8FA` | Main background and primary surfaces |
| `--color-secondary-bg` | `#FCEEF3` | Alternating section backgrounds |
| `--color-dusty-blush` | `#E9A8BC` | Secondary accents, borders and controls |
| `--color-strong-pink` | `#D982A3` | Emphasized interactive states |
| `--color-lavender` | `#C4B5FD` | Secondary holographic accent |
| `--color-lavender-glow` | `#A78BFA` | AI core illumination & gradient highlights |
| `--color-rosewood` | `#513747` | High-contrast primary typography |
| `--color-muted-text` | `#795A6B` | Supporting descriptions and metadata |
| `--color-border` | `#F1E6EC` | Glass dividers and subtle card borders |

---

## ✦ 10-Scene Feature Overview

1. **Scene 1 — Cinematic AI Activation Sequence (`LoadingScreen.tsx`)**:
   - Initializing telemetry HUD on pearl background with soft pink illumination.
   - Concentric orbital rings, pulsating holographic core, and instant "Skip Sequence" button.
   - Automatic bypass when `prefers-reduced-motion` is detected.

2. **Scene 2 — Optional Voice Experience & Floating HUD (`JarvisVoicePlayer.tsx`)**:
   - Web Speech API integration preferring British English voice (`en-GB`).
   - 4-bar reactive audio equalizer animating exclusively during speech activity.
   - Play, stop, mute controls with expandable non-obtrusive transcript drawer.
   - Strict non-autoplay compliance.

3. **Scene 3 — Hero Scene (`Hero.tsx`)**:
   - Oversized headline featuring **AKSHAYA** with pink-to-rose typographic gradient.
   - Dynamic rotating role indicator with subtle spring transitions.
   - Interactive 3D Holographic AI Core (`AICore.tsx`) with automatic WebGL detection and CSS 3D fallback.
   - Responsive HTML5 Canvas particle field (capped at 50 desktop / 18 mobile).
   - Prominent dual CTAs with smooth section scrolling.

4. **Scene 4 — Philosophy & Executive Profile (`About.tsx`)**:
   - Editorial two-column layout with core philosophy quote and interactive technical interest chips.
   - Holographic profile card attempting to load `public/profile.jpg`, with automatic fallback to monogram `AK`.
   - Verified telemetry metric cards.

5. **Scene 5 — Project Universe (`Projects.tsx` & `ProjectCard.tsx`)**:
   - Filterable project grid featuring JARVIS, NovaMart, Wi-Fi Attendance, and HoloPulse.
   - Interactive drawer expanding "The Problem", "The Solution", and key architectural highlights.
   - Verified repository and deployment links.

6. **Scene 6 — Skills Intelligence Matrix (`Skills.tsx` & `SkillBar.tsx`)**:
   - 6 category tabs (Programming, AI & ML, Web Dev, Backend & DBs, Dev Tools, Creative Media).
   - Fluid crossfades, accessible progress bars (`role="progressbar"`), and self-assessment transparency notice.

7. **Scene 7 — Fluid Custom Cursor (`CustomCursor.tsx`)**:
   - Desktop-only central precision dot with trailing glowing ring (spring lerp via `requestAnimationFrame`).
   - Automatically disabled for touch / coarse pointers and reduced motion.
   - Preserves native text selection for inputs and textareas.

8. **Scene 8 — Fixed Frosted Navigation (`Navigation.tsx`)**:
   - Frosted glass navbar (`backdrop-filter: blur(16px)`).
   - `IntersectionObserver` scroll-spy active indicators.
   - Mobile slide-over drawer with keyboard accessibility, escape-key handler, and scroll-lock.

9. **Scene 9 — Contact Terminal (`Contact.tsx`)**:
   - Email link with one-click clipboard copy and feedback toast.
   - Validated contact form with inline error alerts.
   - Transparent email client fallback dispatch mechanism.

10. **Scene 10 — Closing Footer (`Footer.tsx`)**:
    - Attribution, network links, status indicator, back-to-top button, and stack credits.

---

## ✦ Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start local development server
npm run dev

# 3. Build optimized production bundle
npm run build

# 4. Preview production build locally
npm run preview
```

---

## ✦ Modular Data Customization

All personal content and telemetry are separated from presentation code:
- **Profile & Contact**: [`src/data/portfolio.ts`](file:///c:/Users/khani/OneDrive/Desktop/portfolio%20buddi/src/data/portfolio.ts)
- **Projects**: [`src/data/projects.ts`](file:///c:/Users/khani/OneDrive/Desktop/portfolio%20buddi/src/data/projects.ts)
- **Skills Matrix**: [`src/data/skills.ts`](file:///c:/Users/khani/OneDrive/Desktop/portfolio%20buddi/src/data/skills.ts)
- **Profile Portrait**: Drop [`profile.jpg`](file:///c:/Users/khani/OneDrive/Desktop/portfolio%20buddi/public/README.md) into the `public/` directory.
