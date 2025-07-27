import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ExperienceCard = ({ role, company, dates, details, icon, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3, delay: index * 0.1 }}
    className="backdrop-blur-lg bg-white/10 p-6 rounded-2xl shadow-xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-[1.02]"
    style={{
      backdropFilter: 'blur(16px)',
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      padding: '1.5rem',
      borderRadius: '1rem',
      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      marginBottom: '1.5rem',
      transition: 'all 0.3s ease'
    }}
  >
    <div 
      className="flex items-start space-x-4 mb-4"
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: '1rem',
        marginBottom: '1rem'
      }}
    >
      <div 
        className="text-3xl"
        style={{
          fontSize: '2rem',
          flexShrink: 0
        }}
      >
        {icon}
      </div>
      <div className="flex-1">
        <h3 
          className="text-xl font-bold text-white mb-1"
          style={{
            fontSize: '1.25rem',
            fontWeight: 'bold',
            color: 'white',
            marginBottom: '0.25rem'
          }}
        >
          {role}
        </h3>
        <p 
          className="font-semibold text-white/90 text-lg"
          style={{
            fontWeight: '600',
            color: 'rgba(255, 255, 255, 0.9)',
            fontSize: '1.125rem'
          }}
        >
          {company}
        </p>
        <p 
          className="text-sm text-white/70 mt-1"
          style={{
            fontSize: '0.875rem',
            color: 'rgba(255, 255, 255, 0.7)',
            marginTop: '0.25rem'
          }}
        >
          {dates}
        </p>
      </div>
    </div>
    
    <div 
      className="space-y-2"
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem'
      }}
    >
      {details.map((detail, detailIndex) => (
        <div 
          key={detailIndex}
          className="flex items-start space-x-2"
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: '0.5rem'
          }}
        >
          <div 
            className="text-white/80 mt-1"
            style={{
              color: 'rgba(255, 255, 255, 0.8)',
              marginTop: '0.25rem',
              flexShrink: 0
            }}
          >
            •
          </div>
          <p 
            className="text-white/90 text-sm leading-relaxed"
            style={{
              color: 'rgba(255, 255, 255, 0.9)',
              fontSize: '0.875rem',
              lineHeight: '1.6'
            }}
          >
            {detail}
          </p>
        </div>
      ))}
    </div>
  </motion.div>
);

const Experience = () => {
  const experiences = [
    {
      role: "Delivery Manager / Scrum Master",
      company: "IQVIA",
      dates: "Apr 2019 - Present",
      icon: "🚀",
      details: [
        "Transitioned across roles from Test Manager to Scrum Master to Release Manager",
        "Managed release cycles and Agile ceremonies for critical product launches in US healthcare",
        "Spearheaded prompt-based automation initiatives using Gen AI tools",
        "Received Bronze and Silver Impact Awards for exceptional contribution"
      ]
    },
    {
      role: "Team Lead",
      company: "Accenture",
      dates: "Apr 2015 - Apr 2019",
      icon: "👥",
      details: [
        "Led distributed Agile teams in healthcare accounts",
        "Improved delivery timelines through process automation",
        "Honored with the ACE Award for high-impact delivery"
      ]
    },
    {
      role: "Senior Test Engineer",
      company: "CSC",
      dates: "Feb 2011 - Apr 2015",
      icon: "🔧",
      details: [
        "Key contributor to Agile transformation",
        "Developed test automation and defect management practices"
      ]
    },
    {
      role: "Assistant Systems Engineer",
      company: "TCS",
      dates: "Nov 2008 - Feb 2011",
      icon: "⚙️",
      details: [
        "Delivered system testing and collaborated with developers to resolve defects early in SDLC"
      ]
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
            💼
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
            Professional Experience
          </h2>
          
          <p 
            className="text-lg text-white/90"
            style={{
              fontSize: '1.125rem',
              color: 'rgba(255, 255, 255, 0.9)'
            }}
          >
            My journey through various roles in technology
          </p>
        </div>

        {/* Experience Cards */}
        <div 
          className="space-y-6"
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem'
          }}
        >
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