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


## Splash Symbol Rain

The splash screen features a Matrix-style digital rain flanking the boot panel —
columns of falling glyphs drawn from many writing systems and notations: Latin,
Greek, Hebrew, Cyrillic, and Katakana, plus numerals, mathematical operators
(∫ ∑ ∏ √ ∞ ∂ ∇), set-theory and symbolic-logic symbols (∀ ∃ ¬ ∧ ∨ ⊢ ⊨ ⇒ ⇔),
and computer-science artifacts (`{ } => != && || λ ::`).

The rain is rendered faint and pale (medium-slow fall), with an **opacity gradient
keyed to horizontal distance from center**: columns are fully clear behind the
central boot panel and grow progressively more visible toward the screen edges, so
the title and log text stay perfectly legible. The fall **pulses on a fixed tempo**
(a configurable `BPM` constant, default 80) and phase-aligns to the moment the
music begins playing.

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
