# Chomp

React Native + Expo SDK 57 + TypeScript. Shared app foundation for Hi-Fi Version 3.

## Run

Use Node 24 LTS (24.3 or newer). Run commands inside this repository:

```sh
npm install
npm start
```

Install Expo Go on a phone, keep the phone and computer on the same Wi-Fi, and scan the terminal QR code. The Expo Go version must support SDK 57; otherwise use a compatible development build.

```sh
npm run web       # browser preview, normally localhost:8081
npm run android   # launch a configured Android emulator
npm run typecheck # TypeScript validation
npm run build     # export Expo Web to dist
```

On Windows, iPhone testing uses Expo Go or a development build on a physical device. The iOS simulator needs macOS. Android/iOS JavaScript export checks are not installable application builds or device testing.

The former Vite server at localhost:5173 is no longer the project preview. Stop its terminal with Ctrl+C before starting Expo. If npm cache permissions fail in this environment, use `npm install --cache .npm-cache`. The restricted Codex execution environment may need `EXPO_NO_TELEMETRY=1` for Expo CLI's user-settings directory; this is not required for normal terminal use.

## Current scope

Shared native layout, Plus Jakarta Sans fonts, native Stack + custom bottom Tabs, original Figma navigation SVGs, typed navigation and shared data contracts. Actual HiFi pages are still placeholders. No real login, OCR, backend, preference persistence or restaurant service is implemented yet.

See [team handoff](docs/team-handoff.md) for file ownership and route integration. Source Figma references are in `design/tongrong`; those generated web references are not runtime code.
