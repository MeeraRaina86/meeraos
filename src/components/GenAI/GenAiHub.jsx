import React from "react";
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
      transition={{ duration: 0.3, delay: 0.5 }}
      className="backdrop-blur-lg bg-white/10 p-6 rounded-2xl shadow-xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
      style={{
        backdropFilter: 'blur(16px)',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        padding: '1.5rem',
        borderRadius: '1rem',
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        transition: 'all 0.3s ease'
      }}
    >
      <div 
        className="flex items-start space-x-4"
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: '1rem'
        }}
      >
        <div 
          className="text-4xl"
          style={{
            fontSize: '2.5rem',
            flexShrink: 0
          }}
        >
          🏥
        </div>
        <div className="flex-1">
          <h3 
            className="text-xl font-bold text-white mb-3"
            style={{
              fontSize: '1.25rem',
              fontWeight: 'bold',
              color: 'white',
              marginBottom: '0.75rem',
              lineHeight: '1.3'
            }}
          >
            Health Myth Debunker
          </h3>
          <p 
            className="text-white/80 text-sm mb-4 leading-relaxed"
            style={{
              color: 'rgba(255, 255, 255, 0.8)',
              fontSize: '0.875rem',
              marginBottom: '1rem',
              lineHeight: '1.6'
            }}
          >
            An AI-powered tool that helps separate health facts from fiction by analyzing and debunking common health myths with evidence-based information.
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

          <a
            href="https://health-myth-debunker-xe96.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-white/30 transition-all duration-300 border border-white/30"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              color: 'white',
              padding: '0.5rem 1rem',
              borderRadius: '9999px',
              fontSize: '0.875rem',
              fontWeight: '500',
              textDecoration: 'none',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              transition: 'all 0.3s ease'
            }}
          >
            Try Health Debunker →
          </a>

        </div>
      </div>
    </motion.div>
  );
};

export default HealthMythDebunker;