import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ExperienceCard = ({ role, company, dates, details }) => (
  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md mb-4">
    <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400">{role}</h3>
    <p className="font-semibold">{company}</p>
    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{dates}</p>
    <ul className="list-disc list-inside space-y-1 text-sm">
      {details.map((detail, index) => <li key={index}>{detail}</li>)}
    </ul>
  </div>
);

const Experience = () => {
  // Corrected arrays without the [cite] tags
  const experiences = [
    {
      role: "Delivery Manager / Scrum Master",
      company: "IQVIA",
      dates: "Apr 2019 - Present",
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
      details: [
        "Key contributor to Agile transformation",
        "Developed test automation and defect management practices"
      ]
    },
    {
      role: "Assistant Systems Engineer",
      company: "TCS",
      dates: "Nov 2008 - Feb 2011",
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
      className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white p-6 relative"
    >
      <Link to="/" className="absolute top-4 left-4 bg-gray-200 dark:bg-gray-700 text-sm px-4 py-2 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
        &larr; Back
      </Link>
      <div className="max-w-3xl mx-auto pt-16">
        <h2 className="text-3xl font-bold mb-6 text-center">Professional Experience</h2>
        {experiences.map((exp, index) => <ExperienceCard key={index} {...exp} />)}
      </div>
    </motion.div>
  );
};

export default Experience;