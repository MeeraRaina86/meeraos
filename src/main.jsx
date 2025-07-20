import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function App() {
  const [activeApp, setActiveApp] = useState(null);

  const handleAppClick = (appName) => {
    setActiveApp(appName);
  };

  const renderContent = () => {
    switch (activeApp) {
      case 'Resume':
        window.open("https://drive.google.com/file/d/1pAtu9gx93vnzZ15uHxh9e1MgWa66yXrV/view?usp=drive_link", "_blank");
        return null;
      case 'Blog':
        window.open("https://ctrlaltopinion.wordpress.com/", "_blank");
        return null;
      default:
        return (
          <div className="grid grid-cols-2 gap-6 mt-10 text-center text-white">
            <div onClick={() => handleAppClick("Resume")} className="cursor-pointer">
              <div className="text-4xl">📄</div>
              <div className="mt-2 text-sm font-medium">Resume</div>
            </div>
            <div onClick={() => handleAppClick("Blog")} className="cursor-pointer">
              <div className="text-4xl">✍️</div>
              <div className="mt-2 text-sm font-medium">Blog</div>
            </div>
            <div className="cursor-pointer">
              <div className="text-4xl">🤖</div>
              <div className="mt-2 text-sm font-medium">Gen AI Work</div>
              <div className="mt-2 space-y-1 text-xs text-gray-300">
                <div onClick={() => window.open("https://www.perplexity.ai/collections/prompt-coach-meera%20raina-W73lUB6fR66h_I3w0_owkw", "_blank")} className="underline hover:text-blue-300">Prompt Coach</div>
                <div onClick={() => window.open("https://www.perplexity.ai/collections/personal-chef%206Rlp1b0aQyqkO1b6.zpmCw", "_blank")} className="underline hover:text-blue-300">Personal Chef AI</div>
                <div onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSfQI3Qq4oh9FgPBI9U9andviPCeoRdXr_njAqAgXtWqD203Pw/viewform?usp=sharing&ouid=105535942989488211270", "_blank")} className="underline hover:text-blue-300">MBTI Test</div>
                <div className="text-gray-400">Voice Agent:<br/> +1 (341) 587 9436 (Mira)</div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 p-10 text-white">
      <h1 className="text-3xl font-bold text-center mb-6">Meera Raina's OS</h1>
      {renderContent()}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
