# Quotidian Nexus

> *A transdisciplinary archive of citations and connections.*

**🔗 [View the Live Nexus](https://meta-seth.github.io/quotidian-nexus/)**

---

## What Is This?

A 3D, real-time knowledge graph of thinkers, themes, traditions, and the citations that connect them. Every quotation is anchored to its source through a rigorous citation apparatus — Chicago, MLA, with provenance chains tracing primary and secondary sources.

Built with Three.js and force-graph physics. Atmospheric depth, ambient particle drift, glowing nodes, cinematic camera transitions. Inspired by TheBrain (focus-driven navigation) and the production aesthetics of Unity/Unreal sandbox interfaces.

## Architecture

Static, client-side, deployable to GitHub Pages. No backend, no database.

```
.
├── index.html           # Application (HTML + CSS + JS)
├── data/
│   └── nexus.js         # Knowledge graph data
├── app.webmanifest      # PWA manifest
├── .nojekyll            # Disable Jekyll on GitHub Pages
└── README.md
```

## Controls

- **Drag** to orbit the camera
- **Scroll** to zoom in / out
- **Right-click + drag** to pan
- **Click** a node to focus on it
- **Esc** to release focus and return to wide view
- **/** to jump to search
- **Auto-Orbit** button toggles cinematic rotation

## Data Model

Each quotation entry includes:
- The text itself, with variant translations
- Source context
- Citations in Chicago (Notes-Bibliography) and MLA (9th ed.)
- A provenance type marking primary, secondary, or tertiary access
- Cross-references to themes and to subjects the quote concerns

Nodes:
- **Thinkers** (gold) — people whose words are recorded
- **Traditions** (red) — philosophical, religious, political schools
- **Themes** (blue) — concepts traced across thinkers

Edges encode: belongs-to (thinker→tradition), wrote-about (thinker→theme), and explicit relationships (influenced, contemporary, responded-to, etc.).

---

*Curated by [META-SETH](https://github.com/META-SETH). Version 0.2.0, June 2026.*
