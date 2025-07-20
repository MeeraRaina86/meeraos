// src/pages/Certifications.jsx
import React from 'react';

const Certifications = () => {
  const certs = [
    "Project Management Professional (PMP)",
    "Certified Scrum Master (CSM)",
    "ISTQB – Certified Tester",
    "UFT Automation Certified"
  ];

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Certifications</h2>
      <ul className="list-disc list-inside space-y-2 text-lg">
        {certs.map((cert, idx) => (
          <li key={idx}>{cert}</li>
        ))}
      </ul>
    </div>
  );
};

export default Certifications;
