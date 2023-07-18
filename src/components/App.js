
import React, { useState } from 'react';
import '../styles/App.css';


const Tab = ({ tabName, activeTab, handleTabClick }) => {
  const isActive = activeTab === tabName;
  const tabId = `${tabName}-tab`;

  return (
    <div
      className={`tab ${isActive ? 'active' : ''}`}
      id={tabId}
      onClick={() => handleTabClick(tabName)}
    >
      {tabName}
    </div>
  );
};

const App = () => {
  const [activeTab, setActiveTab] = useState('Home');

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="tabs">
      <Tab tabName="Home" activeTab={activeTab} handleTabClick={handleTabClick} />
      <Tab tabName="About" activeTab={activeTab} handleTabClick={handleTabClick} />
      <Tab tabName="Features" activeTab={activeTab} handleTabClick={handleTabClick} />
      <div className="viewport">
        Pages Go Here - {activeTab}
      </div>
    </div>
  );
};

export default App;
