const { getDefaultConfig } = require('expo/metro-config');
const config = getDefaultConfig(__dirname);
// Ignore project output/cache only; dependency packages contain their own dist folders.
config.resolver.blockList = [new RegExp(`${__dirname}/(dist|\\.pnpm-store|\\.git)/`)];
module.exports = config;
