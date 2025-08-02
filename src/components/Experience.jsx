import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

// This is a self-contained card component using inline styles.
const ExperienceCard = ({ role, company, dates, details, logoSrc, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3, delay: index * 0.1 }}
    style={{
      width: '100%',
      backdropFilter: 'blur(16px)',
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      padding: '1.5rem',
      borderRadius: '1rem',
      boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      color: 'white',
    }}
  >
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1rem' }}>
      <div style={{
        width: '3.5rem',
        height: '3.5rem',
        flexShrink: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        padding: '0.5rem',
        borderRadius: '0.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid rgba(255, 255, 255, 0.2)',
      }}>
        <img src={logoSrc} alt={`${company} logo`} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
      </div>

      <div style={{ flex: 1 }}>
        <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.25rem' }}>{role}</h3>
        <p style={{ fontWeight: '600', color: 'rgba(255, 255, 255, 0.9)', fontSize: '1.125rem' }}>{company}</p>
        <p style={{ fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.7)', marginTop: '0.25rem' }}>{dates}</p>
      </div>
    </div>
    
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      {details.map((detail, detailIndex) => (
        <div key={detailIndex} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
          <div style={{ color: 'rgba(255, 255, 255, 0.8)', marginTop: '0.25rem' }}>•</div>
          <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '0.875rem', lineHeight: '1.6' }}>{detail}</p>
        </div>
      ))}
    </div>
  </motion.div>
);

const Experience = ({ isDark }) => {
  const navigate = useNavigate();
  
  const experiences = [
    {
      role: "Associate Director Software Development",
      company: "IQVIA India",
      dates: "May 2023 - Present",
      logoSrc: "/iqvia-logo.png",
      details: ["Skills: Conflict Management, Project Management"]
    },
    {
      role: "Software QA Manager",
      company: "IQVIA",
      dates: "Apr 2019 - May 2023",
      logoSrc: "/iqvia-logo.png",
      details: ["Managed release cycles and Agile ceremonies for critical product launches.", "Received Bronze and Silver Impact Awards for exceptional contribution."]
    },
    {
      role: "Team Lead",
      company: "Accenture",
      dates: "May 2015 - Apr 2019",
      logoSrc: "/accenture-logo.png",
      details: ["Led distributed Agile teams in healthcare accounts.", "Improved delivery timelines through process automation."]
    },
    {
      role: "Test Engineer",
      company: "CSC",
      dates: "Feb 2011 - Nov 2013",
      logoSrc: "/csc-logo.png",
      details: ["Key contributor to Agile transformation.", "Developed test automation and defect management practices."]
    },
    {
      role: "ASE",
      company: "TCS",
      dates: "Nov 2008 - Feb 2011",
      logoSrc: "/tcs-logo.png",
      details: ["Delivered system testing and collaborated with developers to resolve defects early in SDLC."]
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      style={{
        minHeight: '100vh',
        width: '100%',
        padding: '1.5rem',
        position: 'relative',
        color: 'white',
        background: isDark
          ? 'linear-gradient(135deg, rgb(31, 41, 55) 0%, rgb(17, 24, 39) 100%)'
          : 'linear-gradient(135deg, rgb(102, 126, 234) 0%, rgb(118, 75, 162) 100%)',
      }}
    >
      <button 
        onClick={() => navigate("/")}
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
            cursor: 'pointer',
            fontWeight: '500'
        }}
      >
        ← Back to Home
      </button>
      
      <div style={{ maxWidth: '56rem', margin: '0 auto', paddingTop: '5rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>
            💼
          </div>
          <h2 style={{ fontSize: '2.25rem', fontWeight: 'bold', color: 'white', marginBottom: '1rem' }}>
            Professional Experience
          </h2>
          <p style={{ fontSize: '1.125rem', color: 'rgba(255, 255, 255, 0.9)' }}>
            My journey through various roles in technology
          </p>
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
          {experiences.map((experience, index) => (
            <ExperienceCard 
              key={index} 
              {...experience} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;