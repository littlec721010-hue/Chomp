# Chomp native app foundation

## Stack

React Native, Expo SDK 57, TypeScript, React Navigation (native Stack + bottom Tabs), react-native-safe-area-context, expo-font, and react-native-svg. Use Node 24 LTS. The Vite, HTML, CSS, and react-router-dom application has been replaced.

## Shared files

- `App.tsx` and `index.ts`: Expo application entry.
- `src/App.tsx`: bundled local font loading, SafeAreaProvider, native StatusBar and root container.
- `src/navigation/AppNavigator.tsx`: root Stack, main Tabs, and deep-link mapping. Replace placeholders with each owner's page components here.
- `src/navigation/types.ts`: typed screen names and route parameters.
- `src/navigation/paths.ts`: cross-platform URL paths retained for deep links.
- `src/navigation/BottomNavigation.tsx`: original local Figma SVGs with active states and tab events.
- `src/layouts/AppLayout.tsx`: SafeAreaView and scrolling page layout.
- `src/components/Button.tsx`: accessible native Pressable, with primary, secondary, and soft variants. Use `label` and `onPress` props.
- `src/styles/theme.ts`: shared colors, font family names, and corner radii.
- `src/types/index.ts`: proposed shared data types; money is integer cents, tax/tip rates are fractions such as 0.09 and 0.18.
- `metro.config.js`: transforms original SVG files into react-native-svg components for Android, iOS and Web.

Use `View`, `Text`, `TextInput`, `Pressable`, `ScrollView`, and `StyleSheet` in feature pages. Do not use div, HTML inputs, CSS stylesheets, browser storage, or react-router-dom. Use native navigation through the passed navigation prop. Do not add a second NavigationContainer.

## Ownership and integration

| Owner | Screen names | URL paths |
|---|---|---|
| Tongrong | Decide, Split, SignIn, SignUp, SplitScan, SplitReceipt | `/decide`, `/split`, `/sign-in`, `/sign-up`, `/split/scan`, `/split/receipt` |
| Shan | Profile, Preferences, DecidePreferences, ProfilePreferences | `/profile`, `/preferences`, `/decide/preferences`, `/profile/preferences` |
| Yuhan | Recommendations, Restaurant, Group | `/recommendations`, `/restaurants/:id`, `/group` |

The root Stack contains Main (the three Tabs) plus feature screens. Main opens Decide by default until the welcome page is implemented. Native screens use the actual device status bar and safe-area insets; Web is centered at 390px and shrinks on smaller displays. Tab navigation is shown on the three main screens, and detail flows live in the Stack without the tab bar.

Example navigation: `navigation.navigate('DecidePreferences')`; to select a main tab use `navigation.navigate('Main', { screen: 'Split' })`. Restaurant requires `{ id: string }`. Deep-link scheme is `chomp://`, e.g. `chomp://profile/preferences`.

Each owner builds page components under their own `src/pages` directory and coordinates changes to shared files. Saved preferences and temporary dining preferences must be separate objects. All screen contents are placeholders at this stage; this migration adds no authentication or data services.

## Team Git workflow

After the foundation PR is merged into develop, each teammate fetches origin, switches to their own feature branch, and merges origin/develop. Then run `npm install` to replace web dependencies with Expo dependencies. Submit each feature PR to develop. Do not merge directly into a teammate's branch.

## Validation

Run `npm run typecheck`, `npx expo install --check`, and `npm run build`. For native JavaScript bundling run `npx expo export --platform ios --platform android --output-dir dist-native`. These exports do not create APK/IPA files. Device verification still needs Expo Go or a development build; check tab switching, Stack back navigation, direct deep links, keyboard behavior and safe areas on real phones.

Auth entry is now implemented from Version3 frames Sign (202:17860), Sign in (202:17973), and Sign up (202:18017). Open `/` for Sign, `/sign-in` or `/sign-up` for forms. Auth SVG/PNG assets are stored locally in `src/assets/auth`. No credentials are persisted or sent to a server. Sign in validates required fields and opens Decide; Sign up validates email, password confirmation and agreement, then opens the shared Preferences placeholder. Social login, recovery and legal links display service availability notices. Replace these demo handlers when the team selects a backend. Native devices use their system status/navigation areas; Web reproduces the HiFi status and home indicators.

Split is now implemented in `src/features/split`: home, scanner states, editable receipt, integer-cent calculations, and in-memory history. See `design/tongrong/split.md` for route behavior and demo limits. Expo ImagePicker is included; teammates should run npm install after syncing. Camera/gallery inputs require manual receipt entry until OCR is implemented. Guest allocation is equal sharing; item assignment to specific guests is outside the current HiFi.
