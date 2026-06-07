# Quotidian Nexus

> *A transdisciplinary archive of citations and connections.*

**🔗 [View the Live Nexus](https://meta-seth.github.io/quotidian-nexus/)**

---

## What Is This?

A 3D, real-time knowledge graph of thinkers, themes, traditions, and the citations that connect them. Every quotation is anchored to its source through a rigorous citation apparatus — Chicago, MLA, with provenance chains tracing primary and secondary sources.

## Visual Architecture (v0.3)

The visualization is **content-reactive**: every node's size is computed from its actual data weight, and the layout responds.

- **Thinker weight** = (quotes by × 3) + (quotes about × 2) + (network connections × 1.2) + (traditions × 0.5)
- **Tradition weight** = (member count × 5) + (total quotes from members × 1.5)
- **Theme weight** = (quote count × 2) + (thinker diversity × 1.5)

Weights are mapped to visual size on a **logarithmic scale**, so dense schools (Enlightenment Liberalism, Catholic Thought) become commanding presences while sparse ones (Discordianism, Cyberpunk) remain visible as smaller orbs.

**Traditions render as volumetric domain spheres** — translucent wireframe shells with a soft inner glow, scaled by content density. The wireframe slowly rotates, giving each tradition a sense of structural depth and living presence.

## Data Model

```
.
├── index.html           # Application
├── data/nexus.js        # Knowledge graph data
├── app.webmanifest      # PWA manifest
├── .nojekyll            # Disable Jekyll on GitHub Pages
└── README.md
```

Each quotation includes:
- The text itself, with variant translations
- Source context
- Citations in Chicago and MLA
- A provenance type (primary / secondary / tertiary)
- Cross-references to themes and concerned thinkers

## Controls

- **Drag** to orbit · **Scroll** to zoom · **Right-click + drag** to pan
- **Click** a node to focus · **Esc** to release
- **/** to jump to search

---

*Curated by [META-SETH](https://github.com/META-SETH). Version 0.3.0, June 2026.*
