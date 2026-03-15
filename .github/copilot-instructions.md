# Peres Design — Copilot Workspace Instructions

## Project Overview
Portfolio landing page for **Peres Design**, a graphic design / social media designs / visual identity specialist.
Single-page React app, fully in **Brazilian Portuguese**.

## Tech Stack
| Tool | Version | Notes |
|---|---|---|
| React | 18 | Functional components + hooks only |
| Vite | 5 | Dev server: `npm run dev` |
| Tailwind CSS | 3 | Config in `tailwind.config.js` |
| Swiper | 11 | Used in `InstagramCarouselSection` |

## Commands
```bash
npm run dev      # Start dev server (http://localhost:5173)
npm run build    # Production build → dist/
npm run preview  # Preview the production build locally
```
No test runner is configured.

## Color Palette — STRICT, no exceptions
| Token | Hex | Tailwind class | CSS variable |
|---|---|---|---|
| White | `#FFFFFF` | `white` | `--color-white` |
| Black | `#000000` | `black` | `--color-black` |
| Primary 1 (teal-blue) | `#82B2BE` | `primary1` | `--color-primary-1` |
| Primary 2 (lavender) | `#CC99C2` | `primary2` | `--color-primary-2` |
| Neutral gray | `#969696` | `neutral` | `--color-neutral` |

**Never** introduce colors outside this palette (no Tailwind defaults like `blue-500`, `gray-300`, etc.).

## Typography
- **Display / headings**: `var(--font-serif)` → `'Cormorant Garamond', Georgia, serif`
- **Body / labels**: `var(--font-sans)` → `'Montserrat', 'Helvetica Neue', Arial, sans-serif`
- Always use CSS variables, not hardcoded font stacks.

## Design Principles
- **Minimalist & elegant** — inspired by calantagarcia.com, morenamour.com, marcelagrassi.com.br
- **Mobile-first** — write `sm:`, `md:`, `lg:` breakpoints progressively
- **Whitespace-heavy** — generous padding (`py-20`, `py-28`, `py-32`), breathing room between elements
- **Image-focused** — placeholders via `https://dummyimage.com/{W}x{H}/969696/ffffff`
- **Icons** — Font Awesome Free only (loaded via CDN in `index.html`)

## Component Architecture
All components live in `src/components/`. Page order in `App.jsx`:
1. `Header` — sticky nav with mobile hamburger menu, scroll-aware background
2. `HeroSection` — full-screen intro (`#hero`)
3. `PortfolioGallerySection` — project grid (`#galeria`)
4. `InstagramCarouselSection` — social feed carousel using Swiper (`#designs-rede-social`)
5. `ServicesOffersSection` — service packages / pricing (`#ofertas`)
6. `ContactSection` — contact form (`#contato`)
7. `AboutDesignerSection` — designer bio (`#sobre`)
8. `FaqSection` — accordion FAQ (`#faq`)
9. `Footer`

Each section root element must carry the matching `id` attribute for anchor navigation.

## Conventions
- **Inline styles for CSS variables**: use `style={{ color: 'var(--color-primary-1)' }}` when Tailwind doesn't map directly.
- **`scroll-margin-top`**: set globally in `index.css` (`section[id] { scroll-margin-top: 36px }`), no per-element override needed.
- **`aria-label`** on every `<section>` for accessibility.
- **No TypeScript** — plain `.jsx` files throughout.
- **No Router** — single page, all navigation is anchor-based (`href="#section-id"`).
- Services/utilities go in `src/services/` (e.g., `SocialMediaService`).

## Pitfalls to Avoid
- Do **not** use Tailwind color classes like `text-blue-400` — always use `text-primary1`, `text-primary2`, `text-neutral`, `text-black`, or `text-white`.
- Do **not** add new dependencies without explicit user approval (Swiper is the only non-React dep).
- Do **not** hardcode `#82B2BE` or other hex values when a CSS variable or Tailwind token exists.
- Avoid `style={{ backgroundColor: '#FAFAFA' }}` patterns — `#FAFAFA` is an undeclared color; use `bg-white` instead or get palette approval.
