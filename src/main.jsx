import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

import './index.css';
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import GenAI from "./components/genai/genai";
import Certifications from "./components/Certifications";


import PromptCoach from "./components/genai/PromptCoach";
import PersonalChef from './components/genai/PersonalChef';
import MBTI from './components/genai/MBTITest';
import VoiceAgent from './components/genai/VoiceAgent';

const Home = ({ toggleDarkMode, isDark }) => {
  const navigate = useNavigate();

  const handleAppClick = (appName) => {
    navigate(`/${appName}`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <button
        onClick={toggleDarkMode}
        className="absolute top-4 right-4 bg-gray-200 dark:bg-gray-700 text-sm px-3 py-1 rounded"
      >
        {isDark ? "Light Mode" : "Dark Mode"}
      </button>

      <h1 className="text-4xl font-bold mb-10">MeeraOS</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        <div onClick={() => handleAppClick("Resume")} className="cursor-pointer text-center">
          <div className="text-3xl">📄</div>
          <div className="mt-1 text-sm font-medium">Resume</div>
        </div>
        <div onClick={() => handleAppClick("Blog")} className="cursor-pointer text-center">
          <div className="text-3xl">✍️</div>
          <div className="mt-1 text-sm font-medium">Blog</div>
        </div>
        <div onClick={() => handleAppClick("GenAI")} className="cursor-pointer text-center">
          <div className="text-3xl">🤖</div>
          <div className="mt-1 text-sm font-medium">Gen AI Work</div>
        </div>
        <div onClick={() => handleAppClick("Contact")} className="cursor-pointer text-center">
          <div className="text-3xl">📞</div>
          <div className="mt-1 text-sm font-medium">Contact</div>
        </div>
        <div onClick={() => handleAppClick("Certifications")} className="cursor-pointer text-center">
          <div className="text-3xl">🎓</div>
          <div className="mt-1 text-sm font-medium">Certifications</div>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home toggleDarkMode={toggleDarkMode} isDark={isDark} />} />
        <Route path="/Resume" element={<Resume />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/GenAI" element={<GenAI />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Certifications" element={<Certifications />} />
        <Route path="/GenAI/PromptCoach" element={<PromptCoach />} />
        <Route path="/GenAI/PersonalChef" element={<PersonalChef />} />
        <Route path="/GenAI/MBTI" element={<MBTI />} />
        <Route path="/GenAI/VoiceAgent" element={<VoiceAgent />} />
      </Routes>
    </Router>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
