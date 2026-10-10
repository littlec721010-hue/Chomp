# Navbar component source

Use the original component set `389:873` in Hi-Fi Version 3.

| Active tab | Variant | Background left | Decide icon x,y | Split icon x,y | Profile icon x,y |
|---|---|---|---|---|---|
| Decide | `389:872` (Default) | 16 | 60,36 | 182,68 | 299,67 |
| Split | `389:955` (Split) | 134 | 60,67 | 182,37 | 301,67 |
| Profile | `389:905` (Profile) | 251 | 60,68 | 182,69 | 296,35 |

Design size: 390 × 130. White surface: x=0, y=47, width=390, height=83, top corner radius=12. Active background SVG: 127 × 94 at y=0. Original icon sizes: Decide 33.588 × 30; Split 26 × 28; Profile 31 × 31.

The original component has no Home Indicator. On devices the system owns that indicator; the web implementation does not add one to Navbar. Keep device safe-area padding outside the 390 × 130 design and scale the whole design proportionally when the available width differs.

Local SVG source assets are reused without editing paths. Split's inactive Decide and Profile icons use the original Split variant assets. The original component is fixed-coordinate; use variant-specific positioning, not equal-width distribution of the icons.
