import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen w-full flex items-center justify-center p-4 relative"
    >
      <Link to="/" className="absolute top-4 left-4 bg-white/50 dark:bg-gray-700/50 text-sm px-4 py-2 rounded-lg hover:bg-gray-300/50 dark:hover:bg-gray-600/50 transition-colors backdrop-blur-sm">
        &larr; Back
      </Link>
      <div className="text-center bg-white/30 dark:bg-gray-800/30 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border border-white/20">
        <h2 className="text-3xl font-bold mb-4">Education</h2>
        <div className="bg-white/50 dark:bg-gray-800/50 p-6 rounded-lg shadow-inner">
          <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400">Bachelor of Engineering (B.E.) - Computer Science</h3>
          <p className="font-semibold mt-1">Jammu University</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">2004 - 2008</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
