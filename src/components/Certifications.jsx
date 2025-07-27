import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Certifications = () => {
  const certs = [
    {
      name: "Project Management Professional (PMP)",
      icon: "📋",
      description: "Advanced project management certification from PMI",
      issuer: "Project Management Institute"
    },
    {
      name: "Certified Scrum Master (CSM)",
      icon: "🔄",
      description: "Agile and Scrum methodology expertise",
      issuer: "Scrum Alliance"
    },
    {
      name: "ISTQB – Certified Tester",
      icon: "🧪",
      description: "International software testing qualification",
      issuer: "International Software Testing Qualifications Board"
    },
    {
      name: "UFT MicroFocus Certified",
      icon: "⚡",
      description: "Test automation framework proficiency",
      issuer: "MicroFocus"
    }
  ];

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
            🏆
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
            Professional Certifications
          </h2>
          
          <p 
            className="text-lg text-white/90"
            style={{
              fontSize: '1.125rem',
              color: 'rgba(255, 255, 255, 0.9)'
            }}
          >
            Industry-recognized qualifications and expertise
          </p>
        </div>
        
        <div 
          className="grid md:grid-cols-2 gap-6"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem'
          }}
        >
          {certs.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
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
                  {cert.icon}
                </div>
                <div className="flex-1">
                  <h3 
                    className="text-xl font-bold text-white mb-2"
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: 'bold',
                      color: 'white',
                      marginBottom: '0.5rem',
                      lineHeight: '1.3'
                    }}
                  >
                    {cert.name}
                  </h3>
                  <p 
                    className="text-white/80 text-sm mb-2"
                    style={{
                      color: 'rgba(255, 255, 255, 0.8)',
                      fontSize: '0.875rem',
                      marginBottom: '0.5rem'
                    }}
                  >
                    {cert.description}
                  </p>
                  <div 
                    className="text-xs text-white/60 font-medium"
                    style={{
                      fontSize: '0.75rem',
                      color: 'rgba(255, 255, 255, 0.6)',
                      fontWeight: '500'
                    }}
                  >
                    Issued by: {cert.issuer}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Certifications;