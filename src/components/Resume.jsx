import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Resume = ({ isDark }) => {
  // Google Drive preview/view link
  const resumeViewLink = "https://drive.google.com/file/d/1pAtu9gx93vnzZ15uHxh9e1MgWa66yXrV/view";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      style={{
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
        position: 'relative',
        color: 'white',
        background: isDark
          ? 'linear-gradient(135deg, rgb(31, 41, 55) 0%, rgb(17, 24, 39) 100%)'
          : 'linear-gradient(135deg, rgb(102, 126, 234) 0%, rgb(118, 75, 162) 100%)',
      }}
    >
      <Link
        to="/"
        style={{
          position: 'absolute',
          top: '1.5rem',
          left: '1.5rem',
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          backdropFilter: 'blur(10px)',
          color: 'white',
          fontSize: '0.875rem',
          padding: '0.75rem 1.5rem',
          borderRadius: '9999px',
          textDecoration: 'none',
          border: '1px solid rgba(255, 255, 255, 0.3)',
          fontWeight: '500'
        }}
      >
        ← Back to Home
      </Link>

      <div style={{ textAlign: 'center' }}>
        <h2 style={{
            fontSize: '1.875rem',
            fontWeight: 'bold',
            marginBottom: '1rem',
            color: 'white'
          }}
        >
          View My Professional Profile
        </h2>
        <p style={{
            color: 'rgba(255, 255, 255, 0.9)',
            marginBottom: '2rem'
          }}
        >
          Click the button below to view my resume in a new tab.
        </p>
        
        <a
          href={resumeViewLink}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.75rem',
            fontSize: '1.125rem',
            padding: '1rem 2rem',
            background: 'linear-gradient(to right, rgb(168, 85, 247), rgb(37, 99, 235))',
            color: 'white',
            borderRadius: '0.5rem',
            boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)',
            textDecoration: 'none',
            transition: 'all 0.3s ease',
          }}
          onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: '1.25rem', height: '1.25rem' }}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          View Resume (PDF)
        </a>
      </div>
    </motion.div>
  );
};

export default Resume;
