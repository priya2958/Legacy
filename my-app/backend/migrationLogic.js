// Migration logic for feature flags
const featureFlags = {
  enableNewComponent: false,
};

function getFeatureFlags() {
  return featureFlags;
}

export default { getFeatureFlags };
