import React, { useState } from "react";
import ReactDOM from "react-dom/client";

import Resume from "./components/Resume";
import Projects from "./components/Projects";
import GenAI from "./components/GenAI";
import Contact from "./components/Contact";

import "./index.css";

function App() {
  const [activeApp, setActiveApp] = useState(null);

  const handleAppClick = (appName) => {
    setActiveApp(appName);
  };

  const closeApp = () => {
    setActiveApp(null);
  };

  return (
    <div className="min-h-screen bg-white p-8 font-sans">
      <h1 className="text-4xl font-bold mb-8 flex items-center gap-3">
        <span role="img" aria-label="desktop">🖥️</span> MeeraOS v0.1
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-12">
        <div onClick={() => handleAppClick("Resume")} className="cursor-pointer text-center">
          <div className="text-3xl">📄</div>
          <div className="mt-1 text-sm font-medium">Resume</div>
        </div>

        <div onClick={() => handleAppClick("Projects")} className="cursor-pointer text-center">
          <div className="text-3xl">💼</div>
          <div className="mt-1 text-sm font-medium">Projects</div>
        </div>

        <div onClick={() => handleAppClick("GenAI")} className="cursor-pointer text-center">
          <div className="text-3xl">🤖</div>
          <div className="mt-1 text-sm font-medium">GenAI</div>
        </div>

        <div onClick={() => handleAppClick("Contact")} className="cursor-pointer text-center">
          <div className="text-3xl">📬</div>
          <div className="mt-1 text-sm font-medium">Contact</div>
        </div>
      </div>

      {activeApp === "Resume" && <Resume onClose={closeApp} />}
      {activeApp === "Projects" && <Projects onClose={closeApp} />}
      {activeApp === "GenAI" && <GenAI onClose={closeApp} />}
      {activeApp === "Contact" && <Contact onClose={closeApp} />}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
