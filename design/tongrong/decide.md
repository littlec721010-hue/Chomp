# Decide — Version3

Source: Figma `202:17522`, original width 390, exported screenshot height 1018. Implementation: `src/pages/DecideScreen.tsx`.

At width 390, Web status area is 47 high; hook starts at (28,52). Cards start at (20,156) and (20,395), each 350 × 214.5. Recent section starts at (20,634); tray cards are 190 × 210 with a 12 gap. Web navigation overlays at y714 when space permits, using the existing exact Navbar component. Smaller viewports keep navigation visible; content remains scrollable. Native navigation stays above the system bottom safe area.

Local assets and slots:
- `0995c.svg` 8 × 8: Solo Cravings badge.
- `c3159.svg` 12 × 6: Party of 2+ badge.
- `651f1.svg` 71 × 70.1728: Just Me illustration.
- `79563.svg` 71 × 70.1728: With Friends illustration.
- `1fbe0.svg` / `03d99.svg` 12 × 12: yellow / terracotta action arrows.
- `99caf.svg` 13.5 × 13.5: Recent Chomps heading.
- `4fff8.svg` 10.5 × 12.25: repeat action on both restaurant cards.
- `62333.png` / `38e36.png`: original restaurant images, clipped to 166 × 96 with root widths 103.53% / 106.13% and offsets -1.77% / -3.06% from Figma.

History entries are the two static HiFi examples. See all (12) opens the Recommendations placeholder; no backend history exists yet. Solo opens DecidePreferences, Group opens Group, and each repeat action opens Restaurant with its example id.

Validation: TypeScript check and all-platform Expo export. Browser screenshot comparison is pending because the installed browser runtime refers to a missing browser-service.mjs file.
