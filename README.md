# Quotidian Nexus — GLITCHWAVE

> *A transdisciplinary archive of citations and connections.*

**🔗 [View the Live Nexus](https://meta-seth.github.io/quotidian-nexus/)**

---

## What Is This?

A 3D, real-time knowledge graph of thinkers, themes, traditions, and the citations that connect them. Every quotation is anchored to its source through a rigorous citation apparatus — Chicago and MLA, with provenance chains tracing primary, secondary, and tertiary sources.

Rendered in native Three.js (r160) loaded via ES-module importmap. Three geodesic sphere clusters — one each for thinkers, traditions, and themes — arranged in space, with cross-cluster connectors tracing the relationships between them.

## Archive Contents

- **29 thinkers** spanning antiquity to the present — from Socrates, Plato, and Aristotle through Augustine and Aquinas, the Enlightenment (Locke, Hume, Lafayette, Jefferson, Kant), the 19th century (Hegel, Kierkegaard, Nietzsche, Dostoevsky), and into the modern era (Chesterton, Lewis, Evola, Harris, Taleb, Rushkoff, Stephenson)
- **37 quotations**, each with full Chicago and MLA citations and a provenance classification
- **22 traditions** and **15 themes** cross-referencing the collection
- **37 explicit relationships** (influenced, responded-to, contemporary, served-under, eulogized, etc.)


## Splash Sigil Rain

The splash screen features an original "sigil rain" flanking the boot panel — its
own thing, not a Matrix homage. Glyphs fall in aged-parchment tones (dim bronze
trails, pale-gold leading characters, with occasional luminous gold sigils that
surface, glow, and dissolve). The corpus is weighted across the archive's own
intellectual territory:

- **Latin** letters and scribal marks (§ ¶ † ‡)
- **Greek** upper and lower (the working alphabet of philosophy)
- **Hebrew**, full alephbet including final forms
- **Numerals**, **mathematics** (∫ ∑ ∏ √ ∞ ∂ ∇ ⌈ ⌉ ⟨ ⟩), and **symbolic logic / set theory** (∀ ∃ ¬ ∧ ∨ ⊢ ⊨ ≡ ⇒ ⇔ ∈)
- **Computer science & cybersecurity** artifacts ({ } => :: && || λ, hex and CIDR fragments)
- **Esoteric accents**, appearing rarely: planetary/alchemical metal sigils (☉ ☽ ☿ ♀ ♂ ♃ ♄), lunar nodes (☊ ☋), zodiac, stars and pentagram/hexagram, and sacred-geometry / masonic forms (△ ▽ ◇ ⊙ ⟁ ⬡). Symbols with color-emoji variants carry a text-presentation selector (U+FE0E) so they render as thin monochrome glyphs on mobile, not chunky emoji.

The animation deliberately breaks the Matrix signature: columns drift with a gentle
horizontal sway, occasionally stall to break the lockstep march, sometimes carry
oversized "major" glyphs, and periodically spawn held **sigil flares** — the
system's voice interjecting over the parchment rain. Flares render in two local
cyberpunk display fonts (NeoCyberpunk, SDGlitch — demo cuts, personal-use license)
in GLITCHWAVE neon: a near-white core with cyan glow, flanked by magenta/cyan
chromatic-aberration ghosts that split wider on the beat, with occasional
horizontal glitch jitter. Since the demo fonts cover Latin letters only, flares
draw from a dedicated A–Z + punctuation pool rather than the full rain corpus. An
**opacity gradient keyed to distance from center** keeps the columns fully clear
behind the boot panel and progressively more visible toward the screen edges. The
fall **pulses on a fixed tempo** (configurable `BPM`, default 80) that phase-aligns
to the moment the music begins.


## Ambient Score

The **splash screen** plays an original ambient composition — *NEXUS SoundScape* — on a seamless loop. It attempts to autoplay on load and, if the browser blocks that (no user gesture yet), begins on the first interaction. A **mute toggle and volume slider** sit in the splash's bottom-right corner. Entering the nexus fades the music out and stops it — the main graph is silent.

## Citation Rigor

Every quotation entry carries:
- The text, with variant translations where they exist
- Source context (where it was said, written, or published)
- Citations in Chicago (Notes-Bibliography) and MLA (9th ed.)
- A provenance type: **primary** (from the source itself), **secondary** (quoted in another work), or **tertiary** (popular paraphrase / disputed attribution)
- Cross-references to themes and to the figures a quote concerns

Disputed and misattributed quotations are flagged in their provenance notes rather than presented as verified — e.g., the "We are what we repeatedly do" line commonly credited to Aristotle is correctly traced to Will Durant's paraphrase.

## Architecture

```
.
├── index.html           # Application (Three.js r160 via importmap)
├── data/nexus.js        # Knowledge graph data
├── assets/
│   └── NEXUS_SoundScape.mp3   # Original ambient score
├── app.webmanifest      # PWA manifest
├── .nojekyll            # Disable Jekyll on GitHub Pages
└── README.md
```

The importmap pattern is what makes the single-file deployment work:

```html
<script type="importmap">
{ "imports": {
    "three": "https://unpkg.com/three@0.160.0/build/three.module.js",
    "three/addons/": "https://unpkg.com/three@0.160.0/examples/jsm/"
}}
</script>
```

Three.js loads as a true ES module — no bundler, no build step, no `window.THREE` ambiguity.

## Controls

- **Drag** to orbit · **Scroll** to zoom
- **Click** a node to focus and open its citation panel
- **Esc** to release
- **/** to search

---

*Curated by [META-SETH](https://github.com/META-SETH). June 2026.*
