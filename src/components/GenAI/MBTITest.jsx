import React from "react";

const MBTITest = () => {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-2">🧩 MBTI for Scrum Teams</h2>
      <p className="mb-2">A fun MBTI-style test to understand personality fit in agile teams.</p>
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSfQI3Qq4oh9FgPBI9U9andviPCeoRdXr_njAqAgXtWqD203Pw/viewform?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline"
      >
        Take the MBTI Test →
      </a>
    </div>
  );
};

export default MBTITest;
