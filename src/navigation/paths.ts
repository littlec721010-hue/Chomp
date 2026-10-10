// Shared route contract for the three feature branches.
export const paths = {
  decide: '/decide', split: '/split', profile: '/profile',
  signIn: '/sign-in', signUp: '/sign-up', preferences: '/preferences',
  decidePreferences: '/decide/preferences', profilePreferences: '/profile/preferences',
  recommendations: '/recommendations', group: '/group',
  splitScan: '/split/scan', splitReceipt: '/split/receipt',
} as const
