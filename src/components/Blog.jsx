import React from 'react';
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';

export default function Blog() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen flex items-center justify-center p-6 relative"
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
        position: 'relative'
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
      
      <div 
        className="text-center backdrop-blur-lg bg-white/10 p-12 rounded-3xl shadow-2xl border border-white/20 max-w-lg"
        style={{
          textAlign: 'center',
          backdropFilter: 'blur(16px)',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          padding: '3rem',
          borderRadius: '1.5rem',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          maxWidth: '32rem'
        }}
      >
        <div 
          style={{
            fontSize: '4rem',
            marginBottom: '1.5rem'
          }}
        >
          ✍️
        </div>
        
        <h2 
          className="text-4xl font-bold text-white mb-6 drop-shadow-lg"
          style={{
            fontSize: '2.25rem',
            fontWeight: 'bold',
            color: 'white',
            marginBottom: '1.5rem',
            textShadow: '0 4px 8px rgba(0, 0, 0, 0.3)'
          }}
        >
          My Blog
        </h2>
        
        <p 
          className="text-lg text-white/90 mb-8 leading-relaxed"
          style={{
            fontSize: '1.125rem',
            color: 'rgba(255, 255, 255, 0.9)',
            marginBottom: '2rem',
            lineHeight: '1.75'
          }}
        >
          Welcome to my personal blog where I share insights on technology, project management, and AI innovations.
        </p>
        
        <a
          href="https://ctrlaltopinion.wordpress.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full border border-white/30 hover:bg-white/30 hover:scale-105 transition-all duration-300 shadow-lg font-semibold"
          style={{
            display: 'inline-block',
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            backdropFilter: 'blur(10px)',
            color: 'white',
            padding: '1rem 2rem',
            borderRadius: '9999px',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            textDecoration: 'none',
            fontWeight: '600',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
            transition: 'all 0.3s ease'
          }}
        >
          Visit ctrlaltopinion →
        </a>
      </div>
    </motion.div>
  );
}