import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const ExperienceCard = ({ role, company, dates, details, logoSrc, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.2, ease: 'easeOut' }}
    whileHover={{ scale: 1.02, boxShadow: '0 8px 24px rgba(255, 255, 255, 0.15)' }}
    style={{
      width: '100%',
      backdropFilter: 'blur(16px)',
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
      padding: '1.5rem',
      borderRadius: '1rem',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      color: 'white',
      transition: 'all 0.3s ease',
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
      dates: "May 2023 – Present",
      logoSrc: "/iqvia-logo.png",
      details: [
        "Driving Gen AI–based initiatives for documentation, testing, and release management.",
        "Created automation workflows using Python, Power Automate, Make, and Langflow.",
        "Enabled prompt-based solutions across teams using tools like ChatGPT, Gemini, and Claude.",
        "Ensured alignment of Agile delivery with regulatory compliance in pharmacovigilance domain.",
        "Built and maintained deployment tracking macros for product validation."
      ]
    },
    {
      role: "Software QA Manager / Scrum Master",
      company: "IQVIA",
      dates: "Apr 2019 – May 2023",
      logoSrc: "/iqvia-logo.png",
      details: [
        "Transitioned from Test Manager to Scrum Master to Release Manager across major healthcare platforms.",
        "Managed cross-functional Agile teams for pharmacovigilance and patient safety systems.",
        "Automated release documentation and validation using Python and macro scripting.",
        "Led end-to-end project execution from planning through post-release tracking.",
        "Recognized with Bronze and Silver Impact Awards for performance excellence."
      ]
    },
    {
      role: "Team Lead",
      company: "Accenture",
      dates: "Apr 2015 – Apr 2019",
      logoSrc: "/accenture-logo.png",
      details: [
        "Led distributed Agile QA teams across healthcare projects with high delivery accountability.",
        "Streamlined test cycles using automation and optimization strategies.",
        "Collaborated across time zones for quality delivery in critical client engagements.",
        "Received the ACE Award for high-impact delivery."
      ]
    },
    {
      role: "Senior Test Engineer",
      company: "CSC",
      dates: "Feb 2011 – Apr 2015",
      logoSrc: "/csc-logo.png",
      details: [
        "Key contributor in Agile transformation across healthcare QA projects.",
        "Developed automated test frameworks and defect triaging mechanisms.",
        "Ensured traceability and compliance through meticulous QA processes."
      ]
    },
    {
      role: "Assistant Systems Engineer",
      company: "TCS",
      dates: "Nov 2008 – Feb 2011",
      logoSrc: "/tcs-logo.png",
      details: [
        "Executed system-level testing for enterprise projects in healthcare.",
        "Collaborated with developers to identify and fix defects early in the SDLC.",
        "Supported successful client delivery in high-pressure timelines."
      ]
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
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
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            style={{ fontSize: '3rem', marginBottom: '1rem' }}
          >
            💼
          </motion.div>
          <motion.h2
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            style={{ fontSize: '2.25rem', fontWeight: 'bold', color: 'white', marginBottom: '1rem' }}
          >
            Professional Experience
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            style={{ fontSize: '1.125rem', color: 'rgba(255, 255, 255, 0.9)' }}
          >
            My journey through various roles in technology
          </motion.p>
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
