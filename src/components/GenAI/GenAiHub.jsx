import React from "react";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';

import PromptCoach from "./PromptCoach";
import PersonalChef from "./PersonalChef";
import VoiceAgent from "./VoiceAgent";
import MBTITest from "./MBTITest";

const GenAI = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-gray-100 dark:bg-gray-900 p-4 relative"
    >
      <Link
        to="/"
        className="absolute top-4 left-4 bg-gray-200 dark:bg-gray-700 text-sm px-4 py-2 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
      >
        &larr; Back
      </Link>
      <div className="max-w-4xl mx-auto pt-16">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-white">AI & Gen AI Projects</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <PromptCoach />
          <PersonalChef />
          <VoiceAgent />
          <MBTITest />
        </div>
      </div>
    </motion.div>
  );
};

export default GenAI;