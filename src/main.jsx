import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Vapi from '@vapi-ai/web';

import AskMeera from './pages/AskMeera';
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import GenAI from "./components/GenAI/GenAiHub";
import Certifications from "./components/Certifications";
import Blog from './components/Blog';
import Experience from './components/Experience';
import Education from './components/Education';
import './index.css';

// This is the new, fully functional Vapi button component with an End Call button
const VapiCallButton = () => {
  const vapiKey = "d6e67255-b1fa-4ae1-9fea-1cbc3c26aefc";
  const assistantId = "bc2dbcf6-a04b-4015-8fff-2802aa7335e4";

  // Use state to hold the vapi instance and call status
  const [vapi, setVapi] = useState(null);
  const [isCalling, setIsCalling] = useState(false);

  // Initialize Vapi only once
  useEffect(() => {
    setVapi(new Vapi(vapiKey));
  }, [vapiKey]);

  // Add event listeners for when the call starts and ends
  useEffect(() => {
    if (!vapi) return;

    const onCallStart = () => setIsCalling(true);
    const onCallEnd = () => setIsCalling(false);

    vapi.on('call-start', onCallStart);
    vapi.on('call-end', onCallEnd);

    // Cleanup listeners when component unmounts
    return () => {
      vapi.off('call-start', onCallStart);
      vapi.off('call-end', onCallEnd);
    };
  }, [vapi]);

  const startVapiCall = () => {
    if (vapi) {
      vapi.start(assistantId);
    }
  };

  const stopVapiCall = () => {
    if (vapi) {
      vapi.stop();
    }
  };

  const iconStyle = {
    cursor: 'pointer',
    textAlign: 'center',
    padding: '0.75rem',
    borderRadius: '0.75rem',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    backdropFilter: 'blur(4px)',
    transition: 'all 0.3s ease',
  };
  
  // Conditionally render the "End Call" button
  if (isCalling) {
    return (
      <div
        onClick={stopVapiCall}
        style={{...iconStyle, backgroundColor: 'rgba(239, 68, 68, 0.3)'}} // Red background for end call
        className="hover:scale-110 transition-all duration-300"
      >
        <div style={{ fontSize: '1.5rem' }}>📞</div>
        <div
          style={{
            marginTop: '0.25rem',
            fontSize: '0.875rem',
            fontWeight: '500',
            color: 'white'
          }}
        >
          End Call
        </div>
      </div>
    );
  }

  // Render the "Start Call" button by default
  return (
    <div
      onClick={startVapiCall}
      style={iconStyle}
      className="hover:scale-110 transition-all duration-300"
    >
      <div style={{ fontSize: '1.5rem' }}>💁‍♀️</div>
      <div
        style={{
          marginTop: '0.25rem',
          fontSize: '0.875rem',
          fontWeight: '500',
          color: 'white'
        }}
      >
        Talk to AI Assistant
      </div>
    </div>
  );
};


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
        <div
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
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>

        <h1
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
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1.5rem'
          }}
        >
          <AppIcon onClick={() => handleAppClick("Resume")} icon="📄" name="Resume" />
          <AppIcon onClick={() => handleAppClick("Experience")} icon="💼" name="Experience" />
          <AppIcon onClick={() => handleAppClick("Education")} icon="🎓" name="Education" />
          <AppIcon onClick={() => handleAppClick("Blog")} icon="✍️" name="Blog" />
          <AppIcon onClick={() => handleAppClick("GenAI")} icon="⚙️" name="Gen AI Work" />
          <AppIcon onClick={() => handleAppClick("Certifications")} icon="🏆" name="Certs" />
          <AppIcon onClick={() => handleAppClick("Contact")} icon="📞" name="Contact" />
          <AppIcon onClick={() => handleAppClick("AskMeera")} icon="💬" name="Ask Meera" />
          <VapiCallButton />
        </div>
      </div>
    </motion.div>
  );
};

const AppIcon = ({ onClick, icon, name }) => (
  <div
    onClick={onClick}
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
    className="hover:scale-110 transition-all duration-300"
  >
    <div style={{ fontSize: '1.5rem' }}>{icon}</div>
    <div
      style={{
        marginTop: '0.25rem',
        fontSize: '0.875rem',
        fontWeight: '500',
        color: 'white'
      }}
    >
      {name}
    </div>
  </div>
);

const AppContent = () => {
  const location = useLocation();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const storedMode = localStorage.getItem('darkMode');
    if (storedMode === 'true') {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDark;
    setIsDark(newMode);
    document.documentElement.classList.toggle("dark");
    localStorage.setItem('darkMode', newMode);
  };

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home toggleDarkMode={toggleDarkMode} isDark={isDark} />} />
        <Route path="/Resume" element={<Resume isDark={isDark} />} />
        <Route path="/Blog" element={<Blog isDark={isDark} />} />
        <Route path="/GenAI" element={<GenAI isDark={isDark} />} />
        <Route path="/Contact" element={<Contact isDark={isDark} />} />
        <Route path="/Certifications" element={<Certifications isDark={isDark} />} />
        <Route path="/Experience" element={<Experience isDark={isDark} />} />
        <Route path="/Education" element={<Education isDark={isDark} />} />
        <Route path="/AskMeera" element={<AskMeera isDark={isDark} />} />
        <Route path="*" element={<Home toggleDarkMode={toggleDarkMode} isDark={isDark} />} />
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