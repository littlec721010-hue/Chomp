# Decide integration

Yuhan’s React Native pages from `feature-yuhan-recommendations` commit `a00c65b` are the implementation authority for Decide 5–9 and 13–17. Imported views live in `src/features/yuhan`, with original assets in `assets/yuhan/figma`.

The duplicate manually recreated recommendation and group screens have been removed. `Screens.tsx` connects the views to the shared navigation, account preferences, rooms, voting, bookmarks and restaurant history. Tongrong’s Decide homepage and Split, and Shan’s preference and authentication screens remain connected. Group voting remains a local demonstration with a clearly labeled simulation control.

The reference files in this folder document Version3 Figma nodes, not a second active screen implementation.
