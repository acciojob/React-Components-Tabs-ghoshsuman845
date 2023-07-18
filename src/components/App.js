
import React, { useState } from 'react';
import './App.css';

const TABS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'features', label: 'Features' },
];

const App = () => {
  const [activeTab, setActiveTab] = useState(TABS[0].id);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="tabs">
      {TABS.map((tab) => (
        <div
          key={tab.id}
          className={`tab ${activeTab === tab.id ? 'active' : ''}`}
          id={`${tab.id}-tab`}
          onClick={() => handleTabClick(tab.id)}
        >
          {tab.label}
        </div>
      ))}
      <div className="viewport">
        Pages Go Here
      </div>
    </div>
  );
};

export default App;
