# Version 3 UI implementation

Design reference: [Hi-Fi Version 3](https://www.figma.com/design/dFW4Nr54OfzHFRKWPkJwWV/Prototype?node-id=171-15254).

## Implemented in this change

- Manual bill creation: restaurant/date, diner count, tax/tip presets and custom percentages, item entry, editing/removal, receipt review and saving to the current session's history. An unfinished item is retained when moving back through setup.
- Amounts use integer cents; percentages support three decimal places, including 8.875%. Equal shares distribute remaining cents without changing the total.
- Completed group ties open the diner pool, spin and reveal screens. A randomly selected diner's original vote determines the restaurant. The selected diner/vote/restaurant tuple is retained for the local round; revisiting does not redraw, and completed rounds reject further votes.
- The restaurant result binds the name and photo to the selected restaurant. Invalid restaurant routes show recovery guidance instead of silently displaying a default restaurant.
- A labelled demo control creates a four-person 2–2 tie for preview testing. Unsupported mixed ties such as 2–2–1 require a separately agreed nominee policy.

Reference frames: 472:1786, 478:1838, 491:2421 (tie flow); 512:1304, 514:2005, 514:2540, 514:3323, 514:3059 (manual bill flow).

## Limits and remaining acceptance work

This is a UI and local demonstration implementation, not completion of Gate A/B/C. Group drawing is available in Demo preview only. Server-side room coordination, atomic drawing, reconnect recovery and two-device result consistency still need implementation and evidence. Manual drafts and saved bills are session state, not backend persistence. Existing sample receipt preview is labelled as sample data; real OCR remains unconnected.

Automated validation covers vote completion, original-vote selection, repeat-entry stability, stale/invalid votes, unsupported ties, manual input validation and cent-exact arithmetic. Type checking and production Web export are required before review.

Browser automation failed with `Cannot read properties of undefined (reading 'constraints')`; no completed visual or interactive acceptance is claimed. Review the deployed preview on mobile widths and test the complete manual-bill and tie flows before merging. Accessibility and real-device regression remain pending.
