# Quotidian Nexus

> *A transdisciplinary archive of citations and connections.*

**🔗 [View the Live Nexus](https://meta-seth.github.io/quotidian-nexus/)**

---

## What Is This?

The Quotidian Nexus is a navigable knowledge graph of thinkers, themes, traditions, and the citations that connect them. Every quotation is anchored to its source through a rigorous citation apparatus — Chicago, MLA, with provenance chains tracing primary and secondary sources.

The name draws on a productive etymological ambiguity. *Quotidian* (from Latin *quotīdiē*, "every day") and *quotation* (from Latin *quotāre*, "to number, to cite") share the same Latin root — *quot*, "how many." The Nexus binds the everyday and the cited into a single graph: scholarship as a daily practice, daily reading as scholarship.

## Architecture

A static, client-side web application. No backend, no database, no API. The graph is a single JavaScript data file (`data/nexus.js`) rendered by [force-graph](https://github.com/vasturiano/force-graph).

```
.
├── index.html           # The application
├── data/
│   └── nexus.js         # Knowledge graph data (thinkers, quotes, themes, traditions, relationships)
├── app.webmanifest      # PWA manifest
├── .nojekyll            # Tells GitHub Pages to skip Jekyll
└── README.md
```

## Data Model

- **Thinkers** — people whose words or ideas are recorded (with biographical metadata, disciplines, traditions)
- **Quotations** — passages attributed to thinkers, tagged with themes, with full citation data and variant translations where applicable
- **Themes** — concepts (Liberty, Power, Faith & Reason, Antifragility, etc.) traced across thinkers
- **Traditions** — philosophical, religious, and political schools that group thinkers
- **Relationships** — explicit edges between thinkers (influenced, contemporary, responded-to, served-under)

Each quotation entry includes:
- The text itself, with variant translations where they exist
- Source context (where it was said, written, or published)
- Citations in Chicago (Notes-Bibliography) and MLA (9th ed.) formats
- A provenance type (`primary`, `secondary`, `tertiary`) marking how the quote was accessed
- Cross-references to themes and to the thinkers it concerns

## Navigation

- **Click any node** to focus on it; the graph highlights its connections and opens a detail panel
- **Click again on background** to release focus and return to the full view
- **Search** by name in the top-right input — jumps directly to any node
- **Filter** by node type via the legend in the bottom-left
- **Press `/`** to jump to search; **`Esc`** to close panels

## Contributing Quotations

The current entries are seed data. The intent is to grow this archive over time, with the same citation rigor demonstrated in the existing entries. New entries should be added to `data/nexus.js` following the existing structure.

---

*Curated by [META-SETH](https://github.com/META-SETH). Built June 2026.*
