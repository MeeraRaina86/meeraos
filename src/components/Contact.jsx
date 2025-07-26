import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen p-6 relative"
    >
      <Link
        to="/"
        className="absolute top-4 left-4 bg-gray-200 dark:bg-gray-700 text-sm px-4 py-2 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
      >
        &larr; Back
      </Link>
      <div className="max-w-xl mx-auto pt-16">
        <h2 className="text-3xl font-bold mb-6 text-center">Contact Me</h2>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl space-y-4">
          <p className="text-lg">
            <strong>📞 Phone:</strong> <a href="tel:+919718519929" className="hover:underline">+91 9718519929</a>
          </p>
          <p className="text-lg">
            <strong>💼 LinkedIn:</strong>{' '}
            <a
              href="https://www.linkedin.com/in/meera-raina-58b54429/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              meera-raina-58b54429
            </a>
          </p>
          <p className="text-lg">
            <strong>📧 Email:</strong> <a href="mailto:Meera_011@yahoo.com" className="hover:underline">Meera_011@yahoo.com</a>
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;