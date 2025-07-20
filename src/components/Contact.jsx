// src/pages/Contact.jsx
import React from 'react';

const Contact = () => {
  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
      <ul className="space-y-3 text-lg">
        <li><strong>📞 Phone:</strong> +91 9718519929</li>
        <li>
          <strong>💼 LinkedIn:</strong>{' '}
          <a
            href="https://www.linkedin.com/in/meera-raina-58b54429/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            meera-raina-58b54429
          </a>
        </li>
        <li><strong>📧 Email:</strong> meera.raina011@gmail.com</li>
      </ul>
    </div>
  );
};

export default Contact;
