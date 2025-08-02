import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Resume = ({ isDark }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen w-full flex flex-col items-center justify-center p-4 relative"
      style={{
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
        position: 'relative',
        backgroundColor: isDark ? '#111827' : '#f3f4f6' // Dark mode background
      }}
    >
      <Link 
        to="/" 
        className="absolute top-4 left-4 bg-gray-200 dark:bg-gray-700 text-sm px-4 py-2 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
        style={{
          position: 'absolute',
          top: '1rem',
          left: '1rem',
          backgroundColor: isDark ? 'rgba(255, 255, 255, 0.1)' : '#e5e7eb',
          color: isDark ? 'white' : '#374151',
          textDecoration: 'none',
        }}
      >
        ← Back
      </Link>

      <div 
        className="text-center"
        style={{ textAlign: 'center' }}
      >
        <h2 
          className="text-2xl md:text-3xl font-bold mb-4"
          style={{
            fontSize: '1.875rem',
            fontWeight: 'bold',
            marginBottom: '1rem',
            color: isDark ? 'white' : '#111827'
          }}
        >
          View My Professional Profile
        </h2>
        <p 
          className="mb-8"
          style={{
            color: isDark ? '#d1d5db' : '#4b5563',
            marginBottom: '2rem'
          }}
        >
          Click the button below to view or download my resume.
        </p>
        
        <a
          href="https://drive.google.com/file/d/1pAtu9gx93vnzZ15uHxh9e1MgWa66yXrV/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 text-lg px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-600 text-white rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 transform"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-4 w-4" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            strokeWidth={2}
            style={{
              width: '1rem',
              height: '1rem'
            }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Download Resume (PDF)
        </a>
      </div>
    </motion.div>
  );
};

export default Resume;