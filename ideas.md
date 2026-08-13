# Karaikudi Chettinad Mess — Design Directions

## Three possible approaches

| Theme Name | Very Brief Intro | Probability |
| --- | --- | --- |
| **The Spice Ledger** | A tactile, editorial dining journal: deep ink, parchment, copper rules, and the confidence of a carefully kept family recipe book. | 0.07 |
| **Athangudi Modernism** | A bright architectural composition where contemporary white space is punctuated by the geometry and warmth of Chettinad tilework. | 0.04 |
| **The Tamarind House** | A restrained, cinematic heritage dining experience built from maroon shadow, polished wood, warm brass, and exceptional food photography. | 0.09 |

## Chosen approach — The Tamarind House

**Design Movement.** Contemporary Indian heritage hospitality, interpreted through editorial restraint rather than decorative nostalgia.

**Core Principles.** The interface uses contrast as an appetite cue: quiet ivory pages give way to deep tamarind-maroon moments; typography has the composure of a restaurant menu; Chettinad references appear as line-work and texture, never as wallpaper; photography leads whenever a dish is being introduced.

**Color Philosophy.** Deep tamarind maroon communicates spice, ceremony, and late-evening warmth. Rice-paper ivory creates restorative breathing room, while a muted antique copper is reserved for small directional details and never becomes a competing third primary color.

**Layout Paradigm.** The site follows a sequence of rooms rather than a centrally stacked template. It alternates cinematic full-bleed moments, offset editorial columns, and narrow recipe-card rhythms to create a considered dining journey.

**Signature Elements.** A fine Athangudi-inspired diamond rule frames sections; small copper disc markers lead metadata; large italic display words are cropped at section edges to suggest a printed culinary journal.

**Interaction Philosophy.** Interactions are decisive and calm: navigation reveals cleanly, buttons press into the surface, and cards lift by only a few pixels. The experience should feel like handling a well-made menu, not a busy delivery app.

**Animation.** Use short 160–260ms transform and opacity transitions with a crisp custom ease-out. Staggered entrance motion is limited to groups of dish cards, and all nonessential motion is disabled for reduced-motion preferences.

**Typography System.** Cormorant Garamond is the high-contrast heritage display face for headlines, dish names, and pull quotes; DM Sans carries body copy, labels, and navigation. Noto Serif Tamil and Noto Sans Tamil provide equivalent Tamil dignity and legibility. Display headlines are spacious and dramatic; utility text is compact, uppercase, and tracked.

**Brand Essence.** *A single-table invitation to the spice-rich, uncompromising food culture of Chettinad, made for diners who want the real thing.* Personality: **assured, sensory, rooted**.

**Brand Voice.** Headlines are spare and declarative; CTAs name the next human action; microcopy is helpful and transparent when details are still being confirmed. Example lines: “Pepper, slow fire, no shortcuts.” and “Choose your table. We’ll prepare the rest.” Generic welcome language is prohibited.

**Wordmark & Logo.** A solid maroon doorway-emblem holds a stylised spice mortar, suggesting an open Chettinad home and a kitchen working from first principles. The accompanying wordmark should eventually be custom-drawn with a slightly flared serif rather than set in a default typeface.

**Signature Brand Color.** **Tamarind No. 8 — #641B20**.

## Language-toggle recommendation

The primary experience uses a persistent **EN / தமிழ்** switch in the header, not duplicated pages. It preserves the user’s chosen language while they move through the site and changes all navigation, calls-to-action, page headings, and key restaurant information in place. This keeps the website fast, coherent, and easy to maintain when the final Tamil copy is approved.

## Style Decisions

- Treat all supplied food photography as editorial assets: crop to the established card ratios and retain dark image overlays where copy is placed on an image.
- Until operating details are finalised, label all address, contact, delivery, menu, and review integrations plainly rather than inventing data or reviews.
- Inner pages are distinct rooms, not repeated banners: the menu opens as a printed card, reservations as a candlelit invitation, location as a directional field, and the story as a photo essay.
- The fine Athangudi diamond rule is the primary visual signature. It is used as a crop edge, stationery frame, or page rhythm—never generic background decoration.
- Functional elements use the material language of restaurant stationery: ivory paper, maroon ink, thin copper rules, generous margins, and restrained framing.
