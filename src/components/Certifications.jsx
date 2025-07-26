import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Certifications = () => {
  // Corrected array without the [cite] tags
  const certs = [
    "Project Management Professional (PMP)",
    "Certified Scrum Master (CSM)",
    "ISTQB – Certified Tester",
    "UFT Automation Certified"
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
      <div className="max-w-2xl mx-auto pt-16">
        <h2 className="text-3xl font-bold mb-6 text-center">Certifications</h2>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <ul className="list-disc list-inside space-y-3 text-lg">
            {certs.map((cert, idx) => (
              <li key={idx}>{cert}</li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default Certifications;