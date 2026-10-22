# Postigent — design system

**Style system:** dark-glass, adapted to Postigent's brand (warm near-black instead of blue-black,
burnt orange as the single accent). Chosen because the app itself is dark and the site should feel
like the front door of the same product.

## Tokens
| Token | Value | Use |
|---|---|---|
| bg | `#0E0E0E` | page (same as app) |
| surface | `#161514` | cards |
| raised | `#1E1C1A` | hovered / nested cards |
| border | `rgb(255 255 255 / 0.08)` | hairlines |
| text | `#F5F1EC` | warm off-white body/headings |
| muted | `#A8A29E` | secondary text (7.6:1 on bg) |
| accent | `#D9480F` | primary CTA background, logo |
| highlight | `#F97316` | accent text in headlines (6.6:1 on bg) |

- **Type:** display = Bricolage Grotesque (700, tracking -0.035em, line-height 1.02);
  body = Plus Jakarta Sans (the app's font). Fluid scale via `clamp()`.
- **Radius:** one language, soft: 14px cards, 12px buttons/inputs, full-round only for icon chips.
- **Spacing:** 8px grid; section padding 128px desktop / 72px mobile.
- **Texture:** SVG grain at 4% on the body + faint 64px grid lines behind the hero, masked radially.
- **Depth:** radial orange glows behind hero and final CTA (10–14% opacity), no heavy box shadows.

## Signature idea
**The fanned panels.** The logo is two offset, slanted panels forming a "P". The hero visual
repeats that geometry: a fan of slanted post cards (each a scheduled post with its channel icon
and time) layered like the logo's panels, settling into place on load and drifting apart slightly
on hover. The same slanted-panel shape is reused for the step numbers in "How it works".

## Motion
Medium energy: staggered hero entrance, fade-up on scroll (once), card lift on hover, and one
scroll flourish: the infinite channel marquee. All disabled under `prefers-reduced-motion`.
