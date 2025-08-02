import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Education = ({ isDark }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen w-full flex items-center justify-center p-4 relative"
      style={{
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
        position: 'relative',
        background: isDark
          ? 'linear-gradient(135deg, #1f2937 0%, #111827 100%)'
          : 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)'
      }}
    >
      <Link 
        to="/" 
        className="absolute top-6 left-6 bg-white/20 backdrop-blur-sm text-white text-sm px-6 py-3 rounded-full border border-white/30 hover:bg-white/30 transition-all duration-300 shadow-lg font-medium"
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
          border: '1px solid rgba(255, 255, 255, 0.3)',
          textDecoration: 'none',
          fontWeight: '500',
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
          transition: 'all 0.3s ease'
        }}
      >
        ← Back to Home
      </Link>
      
      {/* Main content card */}
      <div 
        className="text-center backdrop-blur-lg bg-white/10 p-12 rounded-3xl shadow-2xl border border-white/20 max-w-2xl"
        style={{
          textAlign: 'center',
          backdropFilter: 'blur(16px)',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          padding: '3rem',
          borderRadius: '1.5rem',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          maxWidth: '42rem'
        }}
      >
        <div 
          style={{
            fontSize: '4rem',
            marginBottom: '1.5rem'
          }}
        >
          🎓
        </div>
        
        <h2 
          className="text-4xl font-bold text-white mb-8 drop-shadow-lg"
          style={{
            fontSize: '2.25rem',
            fontWeight: 'bold',
            color: 'white',
            marginBottom: '2rem',
            textShadow: '0 4px 8px rgba(0, 0, 0, 0.3)'
          }}
        >
          Education
        </h2>
        
        {/* Inner card for details */}
        <div 
          className="backdrop-blur-lg bg-white/20 p-8 rounded-2xl shadow-xl border border-white/30"
          style={{
            backdropFilter: 'blur(16px)',
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            padding: '2rem',
            borderRadius: '1rem',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
            border: '1px solid rgba(255, 255, 255, 0.3)'
          }}
        >
          <div 
            className="flex items-center justify-center mb-4"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1rem'
            }}
          >
            <div 
              style={{
                fontSize: '2rem',
                marginRight: '1rem'
              }}
            >
              💻
            </div>
            <h3 
              className="text-2xl font-bold text-white"
              style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                color: 'white'
              }}
            >
              Bachelor of Engineering (B.E.)
            </h3>
          </div>
          
          <div 
            className="space-y-3"
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem'
            }}
          >
            <p 
              className="text-xl font-semibold text-white/95"
              style={{
                fontSize: '1.25rem',
                fontWeight: '600',
                color: 'rgba(255, 255, 255, 0.95)'
              }}
            >
              Computer Science
            </p>
            
            <p 
              className="text-lg font-medium text-white/90"
              style={{
                fontSize: '1.125rem',
                fontWeight: '500',
                color: 'rgba(255, 255, 255, 0.9)'
              }}
            >
              Jammu University
            </p>
            
            <div 
              className="flex items-center justify-center space-x-2 mt-4"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                marginTop: '1rem'
              }}
            >
              <div 
                style={{
                  fontSize: '1rem'
                }}
              >
                📅
              </div>
              <p 
                className="text-white/80 font-medium"
                style={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  fontWeight: '500'
                }}
              >
                2004 - 2008
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Education;