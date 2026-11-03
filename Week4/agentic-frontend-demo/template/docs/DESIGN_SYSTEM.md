# TPEO Design System

> Generated from Figma. Implementation agents must follow this document and `AGENTS.md`. Measurements below come from the editable Figma copy; responsive, font-delivery, and accessibility adaptations are explicitly identified as project policy.

## Source

- Figma, authoritative editable copy: [TPEO Website 2026](https://www.figma.com/design/jHK2U5QLaUKZixpMWdFhdp/TPEO-Website-2026--Copy-?node-id=35-1345).
- Original reference: [TPEO Website 2026](https://www.figma.com/design/HPtaiqKRNRqtAZMHNIMZcR/TPEO-Website-2026?node-id=35-1345).
- Generated: 2026-10-26.
- Inspected through Figma MCP: `Web UI` page `35:1345`, `Home` frame `35:1346` (1512 × 4598), its text styles, layout properties and component references, plus the `Components` page `9:973`.
- `35:1345` identifies a page, not the Home frame. The frame is `35:1346`.
- No local Figma variables were returned. These semantic implementation names synthesize repeated measured values; they are not existing Figma variable names.
- Evidence labels: **M** = measured Figma property; **D** = derived/normalized from measurements; **P** = implementation policy where the design is unspecified or needs a web adaptation. No screenshot-estimated hex colors or font families are used.
- All rem conversions assume a 16px root size. Preserve browser/user font scaling; do not lock the root to a fixed pixel size.

Page order: Navbar → Hero → Building Tech for Good / feature cards → Our Three Fellowships → Where We've Worked → recruitment CTA → Footer. The existing workshop integration example is partial; this document describes the full landing page without implementing it.

## Colors

All solid colors below are opaque **M** values.

| Token name | Hex | Tailwind key | Usage |
|------------|-----|--------------|-------|
| Brand | `#F3801A` | `brand.DEFAULT` | `bg-brand`, `text-brand`, primary CTAs, orange headings and accents |
| Brand gradient start | `#FB8C14` | `brand.start` | `from-brand-start`; active Home link/logo gradient source |
| Brand gradient end | `#F6A606` | `brand.end` | `to-brand-end`; gradient source |
| Canvas / on-brand text | `#101010` | `canvas` | `bg-canvas`; `text-canvas` on orange buttons |
| Raised surface | `#191919` | `surface` | `bg-surface`; navigation, cards, CTA panel, top of hero |
| Primary foreground | `#FFFFFF` | `foreground` | `text-foreground`; headings, navigation, feature-card copy |
| Muted foreground | `#D7D7D7` | `muted` | `text-muted`; hero/fellowship body copy, application status, copyright |
| Decorative border | `#444444` | `border` | `border-border`; card/panel/secondary-action outlines and dividers |

Background-image tokens:

| Key / class | CSS value | Evidence / usage |
|-------------|-----------|------------------|
| `brand-gradient` / `bg-brand-gradient` | `linear-gradient(90.328deg, #FB8C14 2.5543%, #F6A606 102.47%)` | **D**, rounded serialized angle/stops from the active Home text's measured linear gradient |
| `hero-gradient` / `bg-hero-gradient` | `linear-gradient(to bottom, #191919 76.953%, #101010 100%)` | **D**, CSS representation of the measured vertical hero gradient (`35:1351`) |

For the active Home text, combine `bg-brand-gradient bg-clip-text text-transparent`. The primary buttons use solid `brand`, not the gradient. Use exported logo/illustration artwork rather than reconstructing its colors or shapes in CSS.

## Typography

### Font families

| Role | Measured font | Tailwind key / class | Delivery rule |
|------|---------------|----------------------|---------------|
| Headings, feature titles, fellowship labels, recruitment title/buttons | DM Sans Bold, 700; variable optical size `opsz=14` | `heading` / `font-heading` | Load the actual DM Sans family in the later UI implementation. A config alias alone does not load a font. |
| Body and ordinary navigation/buttons | Helvetica Neue Regular 400, Medium 500, Bold 700 | `body` / `font-body` | Stack: `"Helvetica Neue", Helvetica, Arial, sans-serif`. Exact Helvetica Neue availability/webfont licensing remains unresolved; fallbacks change wrapping. |

Use `font-heading font-bold` for headings; `font-body font-normal` for body; `font-body font-medium` for navigation; `font-body font-bold` for the hero/footer CTA. Font loading and applying the page-wide body family are future UI work. Figma DM Sans uses `opsz=14`; a future font-face setup should preserve that setting where the supplied font supports it. Do not claim a fallback font is an exact match.

### Type scale (h1, h2, body, small, label)

Font-size tokens do not set weight or family. Apply the role classes above explicitly. Letter spacing is 0 in the inspected text styles; retain Tailwind's default tracking.

| Role / Tailwind key | Config size / line height | Measured source | Evidence / classes |
|---------------------|---------------------------|-----------------|--------------------|
| Hero `hero` | 64px / `normal` | Figma `Hero`: 64px / Auto | **M** size, Auto mapped to CSS normal; `font-heading font-bold text-hero` |
| Mobile hero `hero-mobile` | 40px / 1.2 | No current mobile frame | **P**; `text-hero-mobile lg:text-hero` |
| Section/recruitment title `section` | 48px / 1.2 (57.6px) | Figma style `H1`: **48px / 36px** | **M** size, **P** line height; `font-heading font-bold text-section` |
| Mobile section title `section-mobile` | 32px / 1.2 (38.4px) | No current mobile frame | **P**; `text-section-mobile lg:text-section` |
| Feature title / CTA eyebrow `card` | 32px / 36px | Figma `H2`: 32px / 36px | **M**; `font-heading font-bold text-card` |
| Fellowship title / large CTA label `subheading` | 28px / 36px | Figma `H3`: 28px / 36px | **M**; `font-heading font-bold text-subheading` |
| Large body `body-large` | 28px / 36px | Figma `Body large`: 28px / 36px | **M**; `font-body font-normal text-body-large` |
| Body / hero button `body` | 24px / 36px | Figma `Body` and `Body (bold)` | **M**; choose `font-normal` or `font-bold` by role |
| Mobile body `body-mobile` | 18px / 28px | No current mobile frame | **P**; `text-body-mobile lg:text-body` |
| Navigation / small `small` | 20px / `normal` | `Body small (med)`: 20px / Auto; copyright is regular | **M**; navigation `font-medium`, copyright `font-normal` |
| Mobile caption `caption` | 14px / 20px | No current mobile frame | **P**; copyright `text-caption lg:text-small` |

**Heading ambiguity and adaptation:** the 48px heading styles have a measured 36px line height, smaller than the font size. This works as a single-line canvas composition but can overlap when text wraps. The web `section` token deliberately uses 1.2. All implementers must use that documented token rather than independently choosing a line height. Figma's style names (`H1`, `H2`, `H3`) are typography labels, not prescribed HTML levels: the page has exactly one semantic h1 in Hero, h2 section titles, and h3 card/fellowship titles.

## Spacing

### Section spacing

| Token / spacing key | Value | Evidence / usage |
|---------------------|-------|------------------|
| `section` | 100px / 6.25rem | **M**, gap in section stacks `237:548` and `35:1374`; `gap-section` between major sections |
| `section-inner` | 80px / 5rem | **M**, heading-group to content spacing in feature/fellowship sections; `gap-section-inner` |
| `section-mobile` | 64px / 4rem | **P**, narrow-screen major-section rhythm; `gap-section-mobile lg:gap-section` |
| `heading` | 20px / 1.25rem | **M**, section title → subtitle; `gap-heading` |
| `content` | 24px / 1.5rem | **M**, hero title → body, fellowship illustration → copy; also **P** mobile grid gap |
| `copy` | 8px / 0.5rem | **M**, feature/fellowship title → body; `gap-copy` |

The 100px value is a gap between section containers, not a universal 100px padding on both sides. Avoid applying both a full parent gap and duplicate section margins/padding. Measured sections also contain dividers and their own space; preserve that composition during implementation.

### Component spacing

| Spacing key | Value | Measured role / application |
|-------------|-------|-----------------------------|
| `feature-gap` | 63px / 3.9375rem | **M**, desktop feature-card row; `lg:gap-feature-gap` |
| `card-top` | 30px / 1.875rem | **M**, feature-card top padding; `pt-card-top` |
| `card-x` | 20px / 1.25rem | **M**, feature-card side padding; `px-card-x` |
| `card-bottom` | 50px / 3.125rem | **M**, feature-card bottom padding; `pb-card-bottom` |
| `panel` | 64px / 4rem | **M**, recruitment panel padding; use `p-content lg:p-panel` (**P** mobile reduction) |
| `nav-x` | 60px / 3.75rem | **M**, desktop navigation side padding |
| `nav-top` | 42px / 2.625rem | **M**, desktop navigation top padding |
| `nav-bottom` | 24px / 1.5rem | **M**, desktop navigation bottom padding |
| `nav-gap` | 35px / 2.1875rem | **M**, navigation-link and action-link gaps |
| `hero-gutter` | 79px / 4.9375rem | **M**, desktop hero text's left offset; `lg:px-hero-gutter` where needed |
| `hero-action` | 40px / 2.5rem | **D**, 512 − (257 + 215): hero copy block → CTA |
| `control-x` | 24px / 1.5rem | **M**, hero button horizontal padding |
| `control-y` | 20px / 1.25rem | **M**, hero button vertical padding |
| `control-small-x` | 16px / 1rem | **M**, navigation button horizontal padding |
| `control-small-y` | 12px / 0.75rem | **M**, navigation and recruitment button vertical padding |
| `control-large-x` | 32px / 2rem | **M**, recruitment buttons' horizontal padding |
| `action` | 40px / 2.5rem | **M**, recruitment button-row gap |
| `gutter` | 24px / 1.5rem | **P**, mobile page gutter |
| `gutter-tablet` | 40px / 2.5rem | **P**, tablet page gutter |

Existing Tailwind defaults used by component recipes are also part of the contract: `gap-2` = 8px for inline icon/label gaps (the hero button's measured 5.04px gap is normalized to 8px); `gap-8` = 32px for recruitment content groups; `gap-section-inner` = 80px for desktop navigation groups. Structural `gap-0`, `p-0`, `w-full`, `h-auto`, `mx-auto`, and `h-full` retain standard meanings.

### Layout (max-width, horizontal padding)

| Max-width key / class | Value | Evidence / intended use |
|-----------------------|-------|-------------------------|
| `page` / `max-w-page` | 1512px / 94.5rem | **P** ceiling adopted from the **M** Home frame width; not a Figma max-width constraint |
| `content` / `max-w-content` | 1326.8px / 82.925rem | **D**, feature row measured 1326.7982px; normalized by <0.002px |
| `hero-copy` / `max-w-hero-copy` | 694px / 43.375rem | **M**, hero paragraph/copy block width |
| `cta` / `max-w-cta` | 1048px / 65.5rem | **M**, visible recruitment panel width; outer Figma instance is 1128px including 40px on each side |

**P shared container recipe:** outer `mx-auto w-full max-w-page px-gutter md:px-gutter-tablet lg:px-nav-x`, then inner `mx-auto w-full max-w-content`. Keep the maximum width on the inner element so outer gutters do not reduce the documented 1326.8px feature-row width at a 1512px viewport. Background bands/dividers may span the outer page width. Navbar uses the outer container; hero may use `lg:px-hero-gutter` instead of the general desktop gutter. Recruitment uses a centered `w-full max-w-cta` within the padded shell.

Measured layout is mixed: Home uses `layoutMode=NONE`; section stacks and feature rows use vertical/horizontal Auto Layout; hero and footer include manually placed groups. No layout grid or `maxWidth` constraint was defined on the inspected Home containers. The fellowship row is three illustrations/copy blocks with decorative connecting curves; logos use varied-width rows. Use fluid layout rather than copying absolute coordinates.

**Geometry ambiguity:** Home is 1512 × 4598, while its outer content container is 1515px wide and approximately 4615px tall. Its children therefore exceed the nominal frame by 3px horizontally and roughly 17px vertically. Treat this as a source inconsistency; the web page must grow with content and must not reproduce clipping or horizontal overflow. The frame's dimensions are reference dimensions, not fixed page dimensions.

## Borders & effects

### Border radius

| Key / class | Value | Evidence |
|-------------|-------|----------|
| `control-small` / `rounded-control-small` | 10px | **M**, navigation Join TPEO button |
| `control` / `rounded-control` | 12px | **M**, hero/recruitment buttons |
| `card` / `rounded-card` | 12px | **M**, three feature cards |
| `panel` / `rounded-panel` | 24px | **M**, recruitment surface |

Card, panel and secondary CTA outlines are 1px `#444444`: use existing `border border-border`. The footer button is a scaled frame with radius ~13.782px and non-integer padding (~21.707px vertical, ~28.943px horizontal). **P normalization:** reuse the hero button's 12px radius and 20px/24px padding for the footer; preserve its measured 28px bold body label. Do not introduce a separate scaled-button token.

### Shadows

No effects were present on the inspected Home card, panel, navigation, or button containers. `boxShadow.surface = none` / `shadow-surface` records that measured treatment. Do not introduce elevation shadows. Decorative artwork can contain its own rendered details; this does not imply the complete file has no effects.

## Components

Extract primitives to `src/components/ui/` when a pattern appears twice. Put page sections in `src/components/sections/`; do not implement section logic in `PageLayout`. This task only defines the system.

### Button (variants, sizes, states)

Base **P** behavior: `inline-flex items-center justify-center gap-2 min-h-control`, where `minHeight.control = 44px / 2.75rem`. Buttons must grow with translated/wrapped labels; do not set a fixed height. Use an anchor for navigation/application/Slack destinations and a button for actions.

| Variant | Classes / rule |
|---------|----------------|
| Primary | `bg-brand text-canvas`; dark text matches Figma and passes contrast |
| Secondary | `border border-border bg-transparent text-foreground`; outline is decorative, label remains visible |
| Text link | `font-body font-medium text-small text-brand underline`; active Home uses the documented gradient recipe |

| Size / placement | Classes / measured reference |
|------------------|-------------------------------|
| Small / navbar | `rounded-control-small px-control-small-x py-control-small-y font-body font-medium text-small`; source height 48px |
| Standard / hero | `rounded-control px-control-x py-control-y font-body font-bold text-body`; source 169 × 76px |
| Large / recruitment | `rounded-control px-control-large-x py-control-small-y font-heading font-bold text-subheading`; source primary 353 × 60px, secondary 252 × 62px (border contributes to size) |
| Footer | Standard padding/radius; `font-body font-bold text-subheading` (**P** normalized frame, measured label) |

States are **P**: default as above; primary hover `hover:brightness-110`, primary active `active:brightness-95`; secondary hover `hover:bg-canvas`; text-link hover retains its underline. Keyboard focus must use the accessibility recipe below. Disabled action buttons use native `disabled`, `disabled:opacity-50 disabled:cursor-not-allowed`, and do not respond to pointer or keyboard activation. Do not represent an unavailable navigation link with a working destination. No hover/focus/pressed/disabled variants were defined in the inspected Components page.

### Card

Feature Card **M** (`237:512`, `237:529`, `237:535`, main component `237:511`): surface background; 1px border; 12px radius; approximately 400.266 × 510px; top/side/bottom padding 30/20/50px; illustration slot 258 × 243px; title/body gap 8px. Titles are 32px bold DM Sans in brand; copy is 24px/36px regular Helvetica Neue in white.

Recipe: `flex h-full flex-col items-center rounded-card border border-border bg-surface px-card-x pt-card-top pb-card-bottom text-center shadow-surface`. Inner title/copy group uses `gap-copy`; responsive title `text-subheading lg:text-card`, body `text-body-mobile lg:text-body`. **P**: equal-height grid rows, content-driven height; never force 510px when copy wraps. Preserve the exported illustration's intrinsic proportions. There is no measured extra gap between the illustration slot and copy block.

Section-heading group: centered vertical stack `gap-heading`; heading `font-heading font-bold text-section-mobile text-brand lg:text-section`, subtitle `font-body text-body-mobile text-foreground lg:text-body`. Recruitment title uses foreground; hero is left aligned.

Fellowship items use the existing `core` component set `232:468`: `Default` = Product, `Variant2` = Design, `core3` = Engineering. These are content variants, not interactive states. Each has a 28px bold heading, 24px muted body, 8px title/body gap, and 24px illustration/copy gap. Connecting curves are decorative, page-specific artwork.

### Navbar

Figma `Top Nav` component `39:521`, placed as `39:522`: 1512 × 141px, surface background, 75px logo, desktop padding 42px top / 60px sides / 24px bottom, space-between alignment. Navigation links use 20px Helvetica Neue Medium, 35px gaps; groups use an 80px gap. Preserve Home, Our Team, Fellowship, Projects, Partners, Contact Us, Join TPEO order. Contact Us is orange and underlined; active Home has gradient text.

Navbar is a semantic `nav` with an accessible name; mark the active item with `aria-current`. Keep all links reachable and focus indicators visible. No sticky behavior or current mobile variant was defined; default to normal document flow. The navbar/footer button layers are frames, not a shared Figma Button component; a shared project Button primitive is an intentional implementation extraction. Top Nav references a legacy `nav bar` component; follow the appearance of the current placed Home instance, not unrelated legacy pages.

### Recruitment CTA and Footer

`JoinCTA` set `237:1037` has `Application Open=Yes` and `No`, each with outer bounds 1128 × 412px. Yes shows APPLY NOW, application-status copy, Link to Application and Join our Slack. No shows APPLY SOON, fall-semester copy and Join our Slack. The Home instance uses Yes. Select state from confirmed content requirements; the design is not evidence that applications are currently open. Use a fluid, content-sized panel, `gap-8` between its main content groups and `gap-action` between desktop actions.

Footer component `36:2105` repeats branding, navigation, primary CTA and email/social links. Its desktop frame is 1512 × 473px with manually placed children. Use the shared palette/type/buttons and a fluid layout; retain intrinsic logo proportions. Each icon-only link needs an accessible destination-specific name.

## Responsive behavior

All rules in this section are **P**. Current inspected Web UI frames are desktop width; the separate page called `Old - Mobile UI` is not a current responsive specification. Keep Tailwind's existing default screens: `md=768px`, `lg=1024px`; do not replace `screens` in config. Do not infer breakpoints from canvas frame widths.

### Mobile (default)

- Use the shared container's 24px gutter; 64px major-section gaps. Hero is copy then illustration; body is 18px/28px, hero 40px, section titles 32px. Let content wrap and grow.
- Hero, feature cards, fellowship items and CTA actions stack. Feature/fellowship grids start `grid grid-cols-1 gap-content`; primary and secondary recruitment actions are full-width.
- Navbar uses a keyboard-operable menu disclosure exposing the same links and CTA. Trigger has an accessible name, `aria-expanded`, `aria-controls` and a 44px target; close on Escape and return focus to its trigger. Avoid hiding the only path to any destination.
- Logos form a wrapping collection preserving each logo's aspect ratio; do not crop or stretch them. Footer groups stack with full keyboard access.
- Decorative fellowship connecting curves may be hidden when the row stacks; retain the meaningful illustrations and text. This treatment is inferred, not supplied by Figma.

### md (768px+)

- Use 40px gutters; retain the mobile type scale and stacked hero until `lg`.
- Feature cards may use `md:grid-cols-2`; the third card flows naturally and is not duplicated. Fellowship items remain stacked until `lg`.
- Recruitment actions may use `md:flex-row` with intrinsic-width buttons if both fit. Logo rows wrap according to available space, not a fixed item count.

### lg (1024px+)

- Use the shared desktop gutters, ceilings and measured typography. Section stacks use 100px gaps; heading groups to section content use 80px.
- Hero uses two fluid columns with a copy maximum of 694px. Feature grid is `lg:grid-cols-3 lg:gap-feature-gap`; fellowship items form three columns. Illustrations keep intrinsic aspect ratios.
- Attempt desktop navbar links at `lg`. If the full 887px navigation group plus the logo/gutters cannot fit, keep the disclosure until there is room; a later `xl` switch may be needed. Tailwind's existing `xl=1280px` is a permitted **P** fit-based refinement, not a measured Figma breakpoint.
- Footer uses separated branding/navigation and action/social groups where they fit. At 1512px compare against Figma; keep the page fluid at intermediate widths.

Verify later UI at 375px, 768px, 1024px and 1512px, plus 200% zoom. These are review targets, not newly defined breakpoints. Do not add animation, routing, API calls or application-state logic as part of this design-system task.

## Accessibility

### Minimum contrast pairs

WCAG sRGB relative-luminance calculations below use opaque solid values. Normal text must reach 4.5:1; large text 3:1; meaningful non-text control/focus cues 3:1 against adjacent colors.

| Foreground / background | Calculated contrast | Rule |
|-------------------------|---------------------|------|
| Foreground / canvas | 19.03:1 | Passes normal text |
| Foreground / surface | 17.58:1 | Passes normal text |
| Muted / canvas | 13.22:1 | Passes normal text |
| Muted / surface | 12.22:1 | Passes normal text |
| Brand / canvas | 7.17:1 | Passes normal text and focus contrast |
| Brand / surface | 6.63:1 | Passes normal text and focus contrast |
| Canvas / brand | 7.17:1 | Required primary-button foreground |
| Foreground / brand | 2.65:1 | Fails normal and large text; do not use white on orange |
| Canvas / gradient start; end | 8.03:1; 9.40:1 | Endpoints pass; inspect rendered gradient/text placement |
| Border / canvas; surface | 1.95:1; 1.81:1 | Decorative only; cannot be the sole meaningful control boundary |

For an input/control whose boundary itself conveys required information, use a higher-contrast palette outline such as `border-muted` rather than relying on `border-border`. Evaluate actual compositing, gradients and imagery; solid-color ratios do not establish whole-page compliance.

### Focus styles

**P** shared recipe: `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-canvas`. On a surface background replace the final class with `focus-visible:ring-offset-surface`. Ring width and offset use existing Tailwind 2px defaults. Preserve the dark offset around orange buttons so the ring is distinguishable from the fill. Never remove an outline without a visible replacement, and do not clip rings with overflow containers.

### Touch target minimums

**P** project target: at least 44 × 44 CSS px for controls and icon links. `min-h-control` supplies the 44px minimum height; use `min-w-11` (existing Tailwind 44px spacing) on icon-only controls. This is the project's touch-target policy, not a claim that Figma defines all mobile target sizes.

Use exactly one h1 and ordered heading levels; semantic nav/main/section/a/button elements; full keyboard access; meaningful image alternatives, or `alt=""` for decorative images. Decorative SVGs are hidden from assistive technology. Keep focus in view, honor reduced motion if motion is later added, and do not communicate active/disabled/application status by color alone.

## Open decisions and implementation handoff

- Confirm font delivery, especially Helvetica Neue availability/licensing; fallback metrics will alter wrapping.
- Accept or revise the documented 48/36 → 48/1.2 line-height adaptation and footer-button normalization before final visual sign-off. They are deliberate web policies, not measured Figma values.
- Validate the inferred mobile navigation, breakpoints, stacking, logo wrapping and curve treatment against future current mobile designs.
- Resolve the 1515px/4615px content overflow within the 1512px/4598px frame without reproducing clipping.
- Fellowship Latin descriptions are placeholders. CTA destinations, social/email destinations, application dates/status and final copy need confirmation; never invent links.
- Hover/focus/pressed/disabled/mobile variants and prototype reactions were not defined in the inspected landing-page component subtrees; their recipes above are implementation policy.
- Read `AGENTS.md`, then this file, before implementing. Use the matching `theme.extend` keys in `tailwind.config.js`. Add any new token to both files with provenance; arbitrary values are allowed only for measured one-off artwork geometry documented at its call site, never for unrecorded replacement colors/type/spacing. No section components or App integration are included here.
