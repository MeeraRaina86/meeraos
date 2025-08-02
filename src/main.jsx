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
import PromptCoach from "./components/GenAI/PromptCoach";
import PersonalChef from './components/GenAI/PersonalChef';
import MBTI from './components/GenAI/MBTITest';
import VoiceAgent from './components/GenAI/VoiceAgent';

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
      style={{ 
        minHeight: '100vh', 
        width: '100%', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        padding: '1rem',
        background: isDark 
          ? 'linear-gradient(135deg, #1f2937 0%, #111827 50%, #374151 100%)'
          : 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
        color: isDark ? '#f9fafb' : '#ffffff'
      }}
    >
      <button
        onClick={toggleDarkMode}
        className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white text-sm px-4 py-2 rounded-full border border-white/30 hover:bg-white/30 transition-all duration-300 shadow-lg"
        style={{
          position: 'absolute',
          top: '1rem',
          right: '1rem',
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          backdropFilter: 'blur(10px)',
          color: 'white',
          fontSize: '0.875rem',
          padding: '0.5rem 1rem',
          borderRadius: '9999px',
          border: '1px solid rgba(255, 255, 255, 0.3)',
          cursor: 'pointer',
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
          transition: 'all 0.3s ease'
        }}
      >
        {isDark ? "Light Mode" : "Dark Mode"}
      </button>

      <div 
        className="w-full max-w-lg text-center backdrop-blur-lg bg-white/10 p-8 rounded-3xl shadow-2xl border border-white/20"
        style={{
          width: '100%',
          maxWidth: '32rem',
          textAlign: 'center',
          backdropFilter: 'blur(16px)',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          padding: '2rem',
          borderRadius: '1.5rem',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          border: '1px solid rgba(255, 255, 255, 0.2)'
        }}
      >
        {/* Profile Picture - Your actual photo */}
        <div 
          className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white/30 shadow-xl"
          style={{
            width: '8rem',
            height: '8rem',
            margin: '0 auto 1.5rem auto',
            borderRadius: '50%',
            overflow: 'hidden',
            border: '4px solid rgba(255, 255, 255, 0.3)',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
          }}
        >
          <img 
            src="/meera-profile.jpg"
            alt="Meera Raina"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
            onError={(e) => {
              // If image fails to load, show a colored background with initials
              e.target.style.display = 'none';
              e.target.parentElement.innerHTML = '<div style="width: 100%; height: 100%; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); display: flex; align-items: center; justify-content: center; color: white; font-size: 2rem; font-weight: bold;">MR</div>';
            }}
          />
        </div>
        
        <h1 
          className="text-4xl font-bold mb-8 text-white drop-shadow-lg"
          style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            marginBottom: '2rem',
            color: 'white',
            textShadow: '0 4px 8px rgba(0, 0, 0, 0.3)'
          }}
        >
          Meera Raina
        </h1>
        
        <div 
          className="grid grid-cols-4 gap-6"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1.5rem'
          }}
        >
          <div 
            onClick={() => handleAppClick("Resume")} 
            className="cursor-pointer text-center hover:scale-110 transition-all duration-300 p-3 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20"
            style={{
              cursor: 'pointer',
              textAlign: 'center',
              padding: '0.75rem',
              borderRadius: '0.75rem',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(4px)',
              transition: 'all 0.3s ease'
            }}
          >
            <div 
              className="text-2xl"
              style={{ fontSize: '1.5rem' }}
            >
              📄
            </div>
            <div 
              className="mt-1 text-sm font-medium"
              style={{
                marginTop: '0.25rem',
                fontSize: '0.875rem',
                fontWeight: '500'
              }}
            >
              Resume
            </div>
          </div>
          
          <div 
            onClick={() => handleAppClick("Experience")} 
            className="cursor-pointer text-center hover:scale-110 transition-all duration-300 p-3 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20"
            style={{
              cursor: 'pointer',
              textAlign: 'center',
              padding: '0.75rem',
              borderRadius: '0.75rem',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(4px)',
              transition: 'all 0.3s ease'
            }}
          >
            <div 
              className="text-2xl"
              style={{ fontSize: '1.5rem' }}
            >
              💼
            </div>
            <div 
              className="mt-1 text-sm font-medium"
              style={{
                marginTop: '0.25rem',
                fontSize: '0.875rem',
                fontWeight: '500'
              }}
            >
              Experience
            </div>
          </div>
          
          <div 
            onClick={() => handleAppClick("Education")} 
            className="cursor-pointer text-center hover:scale-110 transition-all duration-300 p-3 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20"
            style={{
              cursor: 'pointer',
              textAlign: 'center',
              padding: '0.75rem',
              borderRadius: '0.75rem',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(4px)',
              transition: 'all 0.3s ease'
            }}
          >
            <div 
              className="text-2xl"
              style={{ fontSize: '1.5rem' }}
            >
              🎓
            </div>
            <div 
              className="mt-1 text-sm font-medium"
              style={{
                marginTop: '0.25rem',
                fontSize: '0.875rem',
                fontWeight: '500'
              }}
            >
              Education
            </div>
          </div>
          
          <div 
            onClick={() => handleAppClick("Blog")} 
            className="cursor-pointer text-center hover:scale-110 transition-all duration-300 p-3 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20"
            style={{
              cursor: 'pointer',
              textAlign: 'center',
              padding: '0.75rem',
              borderRadius: '0.75rem',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(4px)',
              transition: 'all 0.3s ease'
            }}
          >
            <div 
              className="text-2xl"
              style={{ fontSize: '1.5rem' }}
            >
              ✍️
            </div>
            <div 
              className="mt-1 text-sm font-medium"
              style={{
                marginTop: '0.25rem',
                fontSize: '0.875rem',
                fontWeight: '500'
              }}
            >
              Blog
            </div>
          </div>
          
          <div 
            onClick={() => handleAppClick("GenAI")} 
            className="cursor-pointer text-center hover:scale-110 transition-all duration-300 p-3 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20"
            style={{
              cursor: 'pointer',
              textAlign: 'center',
              padding: '0.75rem',
              borderRadius: '0.75rem',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(4px)',
              transition: 'all 0.3s ease'
            }}
          >
            <div 
              className="text-2xl"
              style={{ fontSize: '1.5rem' }}
            >
              ⚙️
            </div>
            <div 
              className="mt-1 text-sm font-medium"
              style={{
                marginTop: '0.25rem',
                fontSize: '0.875rem',
                fontWeight: '500'
              }}
            >
              Gen AI Work
            </div>
          </div>
          
          <div 
            onClick={() => handleAppClick("Certifications")} 
            className="cursor-pointer text-center hover:scale-110 transition-all duration-300 p-3 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20"
            style={{
              cursor: 'pointer',
              textAlign: 'center',
              padding: '0.75rem',
              borderRadius: '0.75rem',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(4px)',
              transition: 'all 0.3s ease'
            }}
          >
            <div 
              className="text-2xl"
              style={{ fontSize: '1.5rem' }}
            >
              🏆
            </div>
            <div 
              className="mt-1 text-sm font-medium"
              style={{
                marginTop: '0.25rem',
                fontSize: '0.875rem',
                fontWeight: '500'
              }}
            >
              Certs
            </div>
          </div>
          
          <div 
            onClick={() => handleAppClick("Contact")} 
            className="cursor-pointer text-center hover:scale-110 transition-all duration-300 p-3 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20"
            style={{
              cursor: 'pointer',
              textAlign: 'center',
              padding: '0.75rem',
              borderRadius: '0.75rem',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(4px)',
              transition: 'all 0.3s ease'
            }}
          >
            <div 
              className="text-2xl"
              style={{ fontSize: '1.5rem' }}
            >
              📞
            </div>
            <div 
              className="mt-1 text-sm font-medium"
              style={{
                marginTop: '0.25rem',
                fontSize: '0.875rem',
                fontWeight: '500'
              }}
            >
              Contact
            </div>
          </div>
          
          {/* Empty div to maintain grid alignment */}
          <div></div>
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