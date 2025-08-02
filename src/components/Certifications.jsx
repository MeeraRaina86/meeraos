import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Certifications = ({ isDark }) => {
  const certs = [
    {
      name: "Project Management Professional (PMP)",
      logoSrc: "/PMP-logo.png",
      description: "Advanced project management certification from PMI",
      issuer: "Project Management Institute"
    },
    {
      name: "Certified Scrum Master (CSM)",
      logoSrc: "/CSM-logo.png",
      description: "Agile and Scrum methodology expertise",
      issuer: "Scrum Alliance"
    },
    {
      name: "ISTQB – Certified Tester",
      logoSrc: "/ISTQB-logo.png",
      description: "International software testing qualification",
      issuer: "International Software Testing Qualifications Board"
    },
    {
      name: "UFT MicroFocus Certified",
      logoSrc: "/UFT-logo.png",
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
      style={{
        minHeight: '100vh',
        width: '100%',
        position: 'relative',
        padding: '1.5rem',
        color: 'white',
        background: isDark
          ? 'linear-gradient(135deg, rgb(31, 41, 55) 0%, rgb(17, 24, 39) 100%)'
          : 'linear-gradient(135deg, rgb(102, 126, 234) 0%, rgb(118, 75, 162) 100%)',
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
            fontWeight: '500'
        }}
      >
        ← Back to Home
      </Link>
      
      <div style={{ maxWidth: '56rem', margin: '0 auto', paddingTop: '5rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>
            🏆
          </div>
          <h2 style={{ fontSize: '2.25rem', fontWeight: 'bold', color: 'white', marginBottom: '1rem' }}>
            Professional Certifications
          </h2>
          <p style={{ fontSize: '1.125rem', color: 'rgba(255, 255, 255, 0.9)' }}>
            Industry-recognized qualifications and expertise
          </p>
        </div>
        
        <div style={{
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
              style={{
                backdropFilter: 'blur(16px)',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                padding: '1.5rem',
                borderRadius: '1rem',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div style={{
                  width: '3.5rem',
                  height: '3.5rem',
                  flexShrink: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  padding: '0.5rem',
                  borderRadius: '0.5rem',
                }}>
                  <img src={cert.logoSrc} alt={`${cert.name} logo`} style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }} />
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'white', marginBottom: '0.5rem' }}>
                    {cert.name}
                  </h3>
                  <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.875rem', marginBottom: '0.5rem' }}>
                    {cert.description}
                  </p>
                  <div style={{ fontSize: '0.75rem', color: 'rgba(255, 255, 255, 0.6)', fontWeight: '500' }}>
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