# Tongrong — Hi-Fi Version 3

Source: https://www.figma.com/design/dFW4Nr54OfzHFRKWPkJwWV/Prototype?node-id=171-15254

These .reference.tsx files are Figma MCP design references, not application implementation. Adapt them to project CSS and accessible interactive React components; do not install Tailwind or use full-screen screenshots as page assets. Asset URLs expire after seven days and must be downloaded or refreshed before implementation.

| Frame | Node | Purpose |
|---|---|---|
| Sign | 202:17860 | Application screen |
| Sign in | 202:17973 | Application screen |
| Sign up | 202:18017 | Application screen |
| Decide | 202:17522 | Application screen |
| Split | 202:17583 | Application screen |
| Split 1 | 312:27525 | Receipt scanning animation state |
| Split 2 | 312:27692 | Receipt scanning animation state |
| Split 3 | 312:27763 | Receipt scanning animation state |
| Split 4 | 312:27822 | Editable receipt and bill breakdown |

Typography: Plus Jakarta Sans for the application; SF Pro for simulated iOS status text. Base width: 390 px; standard viewport: 844 px. Palette: background #fff8f4, text #251e14, primary #ffd43b, secondary #a83b20 (confirm each exact layer from references).

Flows: Sign → Sign in → Shan's Set Preference → Decide. Sign in ↔ Sign up. Decide → Shan's solo preference selection or Yuhan's group entry. Bottom navigation: Decide / Split / Profile. Split → Split 1 → Split 2 → Split 3 → Split 4 → Split. Camera/upload, authentication, and OCR require implementation beyond static Figma references; avoid presenting sample receipt processing as real OCR.

Split 4 design data: 8 line items, subtotal $100.50, tax $9.05, tip $18.00, total $127.55, four guests, per guest $31.89. The displayed 18% tip is inconsistent with $100.50 × 18% ($18.09); agree on rounding/calculation behavior during implementation.

