import React from "react";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';

export default function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white p-6 relative"
    >
      <Link
        to="/"
        className="absolute top-4 left-4 bg-gray-200 dark:bg-gray-700 text-sm px-4 py-2 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
      >
        &larr; Back
      </Link>
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-2">💻 Projects</h2>
        <p className="text-lg">This section is under construction.</p>
      </div>
    </motion.div>
  );
}