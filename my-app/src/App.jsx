
import './App.css'
import LegacyComponent from './components/LegacyComponent';
import NewComponent from './components/NewComponent';
import FeatureFlagSwitch from './components/FeatureFlagSwitch';
import { featureFlags, isFeatureEnabled } from './utils/featureFlags';

function App() {
 

  const handleToggle = (flag) => {
    featureFlags[flag] = !featureFlags[flag];
    // setFlags({ ...featureFlags }); // removed unused setFlags
  };

  return (
    <>
      
  
      <FeatureFlagSwitch flag="enableNewComponent" onToggle={handleToggle} />
      {isFeatureEnabled('enableNewComponent') ? <NewComponent /> : <LegacyComponent />}
    </>
  )
}

export default App
