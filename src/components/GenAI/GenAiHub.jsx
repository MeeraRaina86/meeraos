import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Importing all the original components
import PromptCoach from "./PromptCoach";
import PersonalChef from './PersonalChef';
import VoiceAgent from './VoiceAgent'; // The original one with the phone number
import MBTITest from './MBTITest';
import HealthMythDebunker from './HealthMythDebunker';

const GenAI = ({ isDark }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      style={{
        minHeight: '100vh',
        background: isDark
          ? 'linear-gradient(135deg, #1f2937 0%, #111827 100%)'
          : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: '1.5rem',
        position: 'relative'
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
          fontWeight: '500',
          transition: 'all 0.3s ease',
          boxShadow: '0 8px 24px rgba(0,0,0,0.2)'
        }}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.3)')}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)')}
      >
        ← Back to Home
      </Link>

      <div style={{ maxWidth: '56rem', margin: '0 auto', paddingTop: '5rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🤖</div>
          <h2 style={{ fontSize: '2.25rem', fontWeight: 'bold', color: 'white', marginBottom: '1rem' }}>
            Generative AI Showcase
          </h2>
          <p style={{ fontSize: '1.125rem', color: 'rgba(255, 255, 255, 0.9)' }}>
            A collection of my experiments and projects using generative AI.
          </p>
        </div>

        {/* Notice the VapiAgent is removed from this grid for the test */}
        <div style={{ display: 'grid', gap: '1.5rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
          <PromptCoach />
          <PersonalChef />
          <HealthMythDebunker />
          <MBTITest />
          <VoiceAgent />
        </div>
      </div>
    </motion.div>
  );
};

export default GenAI;