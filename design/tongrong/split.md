# Split — Version3 implementation

Frames: Split `202:17583`; Split 1 `312:27525`; Split 2 `312:27692`; Split 3 `312:27763`; Split 4 `312:27822`.

- `/split`: receipt camera/gallery entries and two initial history examples. Recent receipt taps load the corresponding receipt; View All scrolls to the end of the history list.
- `/split/scan`: original receipt preview and three original scanning overlays, played as one sample scan sequence. Take photo opens the system camera; Choose Photo on Split opens the system image picker. Cancel returns without changing the receipt. Permission/error messages are handled.
- `/split/receipt`: line item edits/add/remove, restaurant/date/guest edits, tax/tip rate edits, calculated totals, exact equal guest shares, and Done & Back to Split. Guest shares can be viewed by tapping Est. per guest.

No OCR backend is connected. Sample scan uses the Figma sample's known data. Camera/gallery photos are previewed but require manual entry; they never receive fabricated recognized items. The scanner explicitly explains this. Receipts/history stay in memory for this demo and reset when the app reloads. Nothing is uploaded to a server.

The original Figma receipt labels the tip as 18% but prints $18.00 on a $100.50 subtotal; these do not exactly agree. Imported sample data preserves the printed $18.00 and total $127.55. Editing prices or tax/tip rates clears the imported amount and computes percentages from the new subtotal. Currency arithmetic is in integer cents; equal shares assign remainder cents to the first guests and sum to the exact total.

Assets: original local SVG/PNG exports in `src/assets/split`. Home uses 20aab/25b2f camera icons, cfe31 OCR, 3df0f/67736 gallery, e4ab1 preview, and 5cfaf guests. Scanner uses f04dd.png, 4a5bf.svg, and 8887b/5e9b5/c3379.svg at their original root dimensions, with wrapper scaling only for narrow screens. Receipt uses 36f8a bowl, e3830 calendar, 82ae6 guests, 1d9bd edits, 599df receipt, 7bc63/40dd5/fcf06/fbcfb/91d9f/27192/11032/3dcb0 item icons, 0fc53 add, 4abe6 tip and 7c0e9 balanced icons. System chrome and Navbar reuse the existing original exports.

Checks: `npm run typecheck`, `node --test scripts/split-model.test.cjs`, and `npx expo export --platform all --output-dir dist --max-workers 2`. These exports are JS bundles, not signed device builds. Actual camera permissions and keyboard behavior require device testing. Browser visual verification is pending due to the installed browser runtime's missing browser-service.mjs file.
