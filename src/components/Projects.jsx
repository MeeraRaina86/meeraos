// src/components/Projects.jsx
import React from "react";

export default function Projects({ onClose }) {
  return (
    <div className="p-4 border rounded shadow-md bg-gray-100 relative">
      <button
        onClick={onClose}
        className="absolute top-2 right-2 text-sm bg-red-500 text-white px-2 rounded hover:bg-red-600"
      >
        ×
      </button>
      <h2 className="text-xl font-bold mb-2">💻 Projects</h2>
      <p>This is where Meera showcases her awesome projects.</p>
    </div>
  );
}
