import React from "react";
import { motion } from 'framer-motion';

const VoiceAgent = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.3 }}
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
          🎙️
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
            Voice Agent
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
            Explore a working AI-powered voice agent in action. Experience natural conversation with advanced speech recognition and synthesis.
          </p>
          <div 
            className="bg-white/20 text-white px-4 py-3 rounded-2xl border border-white/30"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              color: 'white',
              padding: '0.75rem 1rem',
              borderRadius: '1rem',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem'
            }}
          >
            <div 
              style={{
                fontSize: '1.25rem'
              }}
            >
              📞
            </div>
            <div>
              <div 
                className="font-medium text-sm"
                style={{
                  fontWeight: '500',
                  fontSize: '0.875rem'
                }}
              >
                Call Mira:
              </div>
              <div 
                className="font-bold text-lg"
                style={{
                  fontWeight: 'bold',
                  fontSize: '1.125rem'
                }}
              >
                +1 (341) 587 9436
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default VoiceAgent;