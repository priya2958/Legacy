// Feature flag utility
export const featureFlags = {
  enableNewComponent: false, // Set to true to enable new component
};

export function isFeatureEnabled(flag) {
  return !!featureFlags[flag];
}
