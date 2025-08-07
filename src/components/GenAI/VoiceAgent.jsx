import React, { useEffect, useState } from "react";
import { motion } from 'framer-motion';
import Vapi from '@vapi-ai/web'; // Import directly from the package

const VoiceAgent = () => {
  const [vapi, setVapi] = useState(null);
  const [isCallActive, setIsCallActive] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Start with loading true until Vapi is ready

  // Hardcoded keys for simplicity
  const vapiKey = "d6e67255-b1fa-4ae1-9fea-1cbc3c26aefc";
  const assistantId = "a7b07fbd-0bc9-4513-b1cd-1d566fb948fb";

  // Initialize the Vapi client once when the component loads
  useEffect(() => {
    const vapiInstance = new Vapi(vapiKey);
    setVapi(vapiInstance);
    setIsLoading(false); // Vapi is ready

    // Set up event listeners
    vapiInstance.on('call-start', () => {
      console.log('Call started');
      setIsCallActive(true);
      setIsLoading(false);
    });

    vapiInstance.on('call-end', () => {
      console.log('Call ended');
      setIsCallActive(false);
      setIsLoading(false);
    });

    vapiInstance.on('error', (error) => {
      console.error('Vapi error:', error);
      setIsLoading(false);
      setIsCallActive(false);
    });

    // Cleanup function to remove listeners
    return () => {
      vapiInstance.removeAllListeners();
    };
  }, []); // Empty array ensures this runs only once

  const handleStartCall = () => {
    if (!vapi) return;
    setIsLoading(true);
    vapi.start(assistantId);
  };

  const handleEndCall = () => {
    if (vapi) {
      vapi.stop();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.3 }}
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        padding: '1.5rem',
        borderRadius: '1rem',
        border: '1px solid rgba(255, 255, 255, 0.2)',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
        <div style={{ fontSize: '2.5rem', flexShrink: 0 }}>🎙️</div>
        <div style={{ flex: 1 }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'white', marginBottom: '0.75rem' }}>
            Mira - Your AI Companion
          </h3>
          <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.875rem', marginBottom: '1rem', lineHeight: '1.6' }}>
            Meet Mira, your compassionate AI companion who's here to listen without judgment. Whether you need someone to talk through your thoughts, share your day, or just have a friendly conversation.
          </p>
          
          {/* We are removing the chat widget part to keep it simple */}

          {/* Direct Call Container */}
          <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', borderRadius: '0.75rem', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
            <div style={{ padding: '0.75rem', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', fontSize: '0.875rem', fontWeight: '600', color: 'white' }}>
              📞 Voice Call with Mira
            </div>
            <div style={{ padding: '1rem', textAlign: 'center' }}>
              {!isCallActive ? (
                <button
                  onClick={handleStartCall}
                  disabled={isLoading || !vapi}
                  style={{
                    backgroundColor: isLoading || !vapi ? 'rgba(34, 197, 94, 0.3)' : 'rgba(34, 197, 94, 0.8)',
                    color: 'white',
                    padding: '0.75rem 1.5rem',
                    borderRadius: '0.5rem',
                    border: 'none',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    cursor: isLoading || !vapi ? 'not-allowed' : 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    margin: '0 auto',
                    transition: 'all 0.3s ease',
                    opacity: !vapi ? 0.6 : 1
                  }}
                >
                  {isLoading ? 'Connecting...' : (vapi ? 'Start Voice Conversation' : 'Initializing...')}
                </button>
              ) : (
                <button
                  onClick={handleEndCall}
                  style={{
                    backgroundColor: 'rgba(239, 68, 68, 0.8)',
                    color: 'white',
                    padding: '0.75rem 1.5rem',
                    borderRadius: '0.5rem',
                    border: 'none',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    margin: '0 auto',
                  }}
                >
                  End Conversation
                </button>
              )}
            </div>
          </div>

          {/* Status Info */}
          <div style={{ marginTop: '1rem', fontSize: '0.7rem', color: 'rgba(255, 255, 255, 0.6)' }}>
            Status: Web Client {vapi && !isLoading ? '✅' : '⏳'} | Call {isCallActive ? '🔴 Active' : '⚪ Inactive'}
          </div>

        </div>
      </div>
    </motion.div>
  );
};

export default VoiceAgent;