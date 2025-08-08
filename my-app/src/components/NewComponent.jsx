import React from 'react';

const NewComponent = () => {
  return (
    <div style={{ border: '2px solid green', padding: '1rem', margin: '1rem 0' }}>
      <h2>New Component (Feature Flag Enabled)</h2>
      <p>This is the new component, visible only when the feature flag is enabled.</p>
    </div>
  );
};

export default NewComponent;
