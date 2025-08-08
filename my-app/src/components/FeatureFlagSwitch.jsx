import React from 'react';
import { featureFlags } from '../utils/featureFlags';

const FeatureFlagSwitch = ({ flag, onToggle }) => (
  <div style={{ margin: '1rem 0' }}>
    <label>
      <input
        type="checkbox"
        checked={featureFlags[flag]}
        onChange={() => onToggle(flag)}
      />
      Enable {flag}
    </label>
  </div>
);

export default FeatureFlagSwitch;
