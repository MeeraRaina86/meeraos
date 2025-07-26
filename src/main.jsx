import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import './index.css';
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import GenAI from "./components/GenAI/GenAiHub.jsx"; 
import Certifications from "./components/Certifications";
import Blog from './components/Blog';
import Experience from './components/Experience';
import Education from './components/Education';

// Sub-component imports
import PromptCoach from "./components/genai/PromptCoach";
import PersonalChef from './components/genai/PersonalChef';
import MBTI from './components/genai/MBTITest';
import VoiceAgent from './components/genai/VoiceAgent';

const Home = ({ toggleDarkMode, isDark }) => {
  const navigate = useNavigate();
  const handleAppClick = (appName) => navigate(`/${appName}`);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen w-full flex flex-col items-center justify-center p-4"
    >
      <button
        onClick={toggleDarkMode}
        className="absolute top-4 right-4 bg-gray-200 dark:bg-gray-700 text-sm px-3 py-1 rounded"
      >
        {isDark ? "Light Mode" : "Dark Mode"}
      </button>

      <div className="w-full max-w-lg text-center">
        {/* Profile Picture Placeholder - Size will now work correctly */}
        <div className="w-24 h-24 mx-auto mb-4 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center border-2 border-gray-400/50">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 text-gray-500 dark:text-gray-300">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
          </svg>
        </div>
        
        <h1 className="text-4xl font-bold mb-8">MeeraOS</h1>
        
        <div className="grid grid-cols-4 gap-6">
          <div onClick={() => handleAppClick("Resume")} className="cursor-pointer text-center">
            <div className="text-3xl">📄</div>
            <div className="mt-1 text-sm font-medium">Resume</div>
          </div>
          <div onClick={() => handleAppClick("Experience")} className="cursor-pointer text-center">
            <div className="text-3xl">💼</div>
            <div className="mt-1 text-sm font-medium">Experience</div>
          </div>
           <div onClick={() => handleAppClick("Education")} className="cursor-pointer text-center">
            <div className="text-3xl">🎓</div>
            <div className="mt-1 text-sm font-medium">Education</div>
          </div>
          <div onClick={() => handleAppClick("Blog")} className="cursor-pointer text-center">
            <div className="text-3xl">✍️</div>
            <div className="mt-1 text-sm font-medium">Blog</div>
          </div>
          <div onClick={() => handleAppClick("GenAI")} className="cursor-pointer text-center">
            <div className="text-3xl">🤖</div>
            <div className="mt-1 text-sm font-medium">Gen AI Work</div>
          </div>
          <div onClick={() => handleAppClick("Certifications")} className="cursor-pointer text-center">
            <div className="text-3xl">🏆</div>
            <div className="mt-1 text-sm font-medium">Certs</div>
          </div>
          <div onClick={() => handleAppClick("Contact")} className="cursor-pointer text-center">
            <div className="text-3xl">📞</div>
            <div className="mt-1 text-sm font-medium">Contact</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const AppContent = () => {
  const location = useLocation();
  const [isDark, setIsDark] = useState(false);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home toggleDarkMode={toggleDarkMode} isDark={isDark} />} />
        <Route path="/Resume" element={<Resume />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/GenAI" element={<GenAI />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Certifications" element={<Certifications />} />
        <Route path="/Experience" element={<Experience />} />
        <Route path="/Education" element={<Education />} />
        <Route path="/GenAI/PromptCoach" element={<PromptCoach />} />
        <Route path="/GenAI/PersonalChef" element={<PersonalChef />} />
        <Route path="/GenAI/MBTI" element={<MBTI />} />
        <Route path="/GenAI/VoiceAgent" element={<VoiceAgent />} />
      </Routes>
    </AnimatePresence>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <AppContent />
    </Router>
  </React.StrictMode>
);
