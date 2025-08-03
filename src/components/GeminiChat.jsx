import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const GeminiChat = ({ isDark }) => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);

  const meeraContext = `
You are Meera Raina — a GenAI Project Manager and Consultant with 16+ years of experience across US healthcare, pharmacovigilance, and enterprise IT transformation.

🎭 Personality:
Speak in first person ("I"), maintain a firm yet polite tone. You are confident, articulate, and always professional. You do not guess — if unsure, say "I’ll need to get back to you on that." Keep responses concise, clear, and friendly.

📌 About Me:
I’m currently working as a Delivery Manager and Release Manager at IQVIA, where I leverage GenAI tools and prompt engineering skills to automate my tracking monitoring and controlling progress. My prior roles include Team Lead at Accenture, Senior Test Engineer at CSC, and Assistant Systems Engineer at TCS.

🏆 Awards:
- Bronze & Silver Impact Awards at IQVIA
- ACE Award at Accenture

📍 LinkedIn: https://www.linkedin.com/in/meera-raina-58b54429/
📍 Notice Period: 3 months
⛔ Do not answer salary or CTC-related questions. Politely decline.
`;

  const handleSend = async () => {
    if (!userInput.trim()) return;

    const userMessage = { role: 'user', content: userInput };
    setMessages((prev) => [...prev, userMessage]);
    setUserInput('');
    setLoading(true);

    try {
      const fullPrompt = `${meeraContext}\n\nUser: ${userInput}`;
      const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${import.meta.env.VITE_GEMINI_API_KEY}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{ role: 'user', parts: [{ text: fullPrompt }] }]
          })
        }
      );

      if (!res.ok) {
        throw new Error(`API request failed with status ${res.status}`);
      }
      
      const data = await res.json();
      const botText = data?.candidates?.[0]?.content?.parts?.[0]?.text || 'I am not sure how to respond to that. Could you please rephrase?';
      const botMessage = { role: 'model', content: botText };
      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [...prev, { role: 'model', content: '❌ Sorry, I am having trouble connecting. Please try again later.' }]);
    }

    setLoading(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const containerStyle = {
    minHeight: '100vh',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1rem',
    position: 'relative',
    background: isDark
      ? 'linear-gradient(135deg, #1f2937 0%, #111827 100%)'
      : 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
  };

  const chatboxStyle = {
    maxWidth: '42rem',
    width: '90%',
    margin: '0 auto',
    padding: '1.5rem',
    borderRadius: '1.5rem',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(16px)',
  };

  const backButtonStyle = {
      position: 'absolute',
      top: '1.5rem',
      left: '1.5rem',
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      backdropFilter: 'blur(10px)',
      color: 'white',
      fontSize: '0.875rem',
      padding: '0.75rem 1.5rem',
      borderRadius: '9999px',
      border: '1px solid rgba(255, 255, 255, 0.3)',
      textDecoration: 'none',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      fontWeight: '500',
      zIndex: 10,
      transition: 'background-color 0.3s ease',
  };

  return (
    <div style={containerStyle}>
        <Link to="/" style={backButtonStyle}>
            ← Back to Home
        </Link>
      <div style={chatboxStyle}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', color: 'white' }}>
          💬 Ask Meera (Powered by Gemini)
        </h2>
        <div style={{ maxHeight: '60vh', overflowY: 'auto', marginBottom: '1rem', padding: '1rem', borderRadius: '0.375rem', border: '1px solid rgba(255, 255, 255, 0.1)', backgroundColor: 'rgba(0, 0, 0, 0.1)' }} className="custom-scroll space-y-3">
          {messages.map((msg, i) => (
            <div key={i} style={{ display: 'flex', justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start' }}>
              <div style={{ padding: '0.75rem', borderRadius: '0.5rem', maxWidth: '90%', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', backgroundColor: msg.role === 'user' ? '#9333ea' : 'rgba(255, 255, 255, 0.1)', color: 'white' }}>
                <div style={{ fontSize: '0.75rem', opacity: 0.6, marginBottom: '0.25rem' }}>{msg.role === 'user' ? 'You' : 'Meera'}</div>
                <div style={{ whiteSpace: 'pre-line' }}>{msg.content}</div>
              </div>
            </div>
          ))}
          {loading && <p style={{ fontSize: '0.875rem', fontStyle: 'italic', color: 'rgba(255, 255, 255, 0.7)' }}>⏳ Meera is thinking...</p>}
          <div ref={bottomRef} />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <textarea
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyDown={handleKeyPress}
            rows="2"
            placeholder="Ask something about Meera..."
            style={{ flex: 1, padding: '0.5rem 1rem', border: '1px solid rgba(255, 255, 255, 0.2)', borderRadius: '0.375rem', resize: 'none', backgroundColor: 'rgba(255, 255, 255, 0.1)', color: 'white' }}
          />
          <button
            onClick={handleSend}
            disabled={loading}
            style={{ padding: '0.5rem 1rem', backgroundColor: loading ? '#6b7280' : '#8b5cf6', color: 'white', fontWeight: '600', borderRadius: '0.375rem', cursor: loading ? 'not-allowed' : 'pointer' }}
          >
            {loading ? '...' : 'Send'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default GeminiChat;