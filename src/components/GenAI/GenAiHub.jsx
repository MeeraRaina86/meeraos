import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import PromptCoach from "./PromptCoach";
import PersonalChef from './PersonalChef';
import VoiceAgent from './VoiceAgent';
import MBTITest from './MBTITest';
import HealthMythDebunker from './HealthMythDebunker';

const GenAI = ({ isDark }) => { // isDark prop ko accept karein
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen p-6 relative"
      style={{
        minHeight: '100vh',
        // isDark ke basis par background change karein
        background: isDark
          ? 'linear-gradient(135deg, #1f2937 0%, #111827 100%)'
          : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: '1.5rem',
        position: 'relative'
      }}
    >
      <Link
        to="/"
        className="absolute top-6 left-6 bg-white/20 backdrop-blur-sm text-white text-sm px-6 py-3 rounded-full border border-white/30 hover:bg-white/30 transition-all duration-300 shadow-lg font-medium"
      >
        ← Back to Home
      </Link>

      <div className="max-w-4xl mx-auto pt-20">
        <div className="text-center mb-12">
          <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🤖</div>
          <h2 className="text-4xl font-bold text-white mb-4 drop-shadow-lg">
            Generative AI Showcase
          </h2>
          <p className="text-lg text-white/90">
            A collection of my experiments and projects using generative AI.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <PromptCoach />
          <PersonalChef />
          <VoiceAgent />
          <MBTITest />
          <HealthMythDebunker />
        </div>
      </div>
    </motion.div>
  );
};

export default GenAI;