import React from "react";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';

import PromptCoach from "./PromptCoach";
import PersonalChef from "./PersonalChef";
import VoiceAgent from "./VoiceAgent";
import MBTITest from "./MBTITest";
import HealthMythDebunker from "./HealthMythDebunker";

const GenAI = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen p-6 relative"
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
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
        className="max-w-4xl mx-auto pt-20"
        style={{
          maxWidth: '56rem',
          margin: '0 auto',
          paddingTop: '5rem'
        }}
      >
        {/* Header */}
        <div 
          className="text-center mb-12"
          style={{
            textAlign: 'center',
            marginBottom: '3rem'
          }}
        >
          <div 
            style={{
              fontSize: '4rem',
              marginBottom: '1rem'
            }}
          >
            🤖
          </div>
          
          <h2 
            className="text-4xl font-bold text-white mb-4 drop-shadow-lg"
            style={{
              fontSize: '2.25rem',
              fontWeight: 'bold',
              color: 'white',
              marginBottom: '1rem',
              textShadow: '0 4px 8px rgba(0, 0, 0, 0.3)'
            }}
          >
            AI & Gen AI Projects
          </h2>
          
          <p 
            className="text-lg text-white/90"
            style={{
              fontSize: '1.125rem',
              color: 'rgba(255, 255, 255, 0.9)'
            }}
          >
            Exploring the frontiers of artificial intelligence
          </p>
        </div>

        {/* Project Grid */}
        <div 
          className="grid md:grid-cols-2 gap-6"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem'
          }}
        >
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