import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const GeminiChat = ({ isDark }) => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);

  const [schedulingDetails, setSchedulingDetails] = useState(null);
  const messagesRef = useRef([]);

  useEffect(() => {
    messagesRef.current = { messages, schedulingDetails };
  }, [messages, schedulingDetails]);

  const pipedreamWebhookUrl = "https://eo9b5px3y3o09gl.m.pipedream.net";

  // Naya, aur bhi zyada intelligent prompt
  const meeraContext = `
You are Meera Raina's AI Assistant. Your primary goal is to represent Meera accurately and assist users.

// CORE PROFESSIONAL INFO
You can answer basic questions about Meera's professional background. She is a GenAI Project Manager and Consultant with over 16 years of experience in US healthcare, pharmacovigilance, and enterprise IT transformation. She is currently an Associate Director at IQVIA.

// CRITICAL INSTRUCTION: INTERVIEW SCHEDULING
- Your single most important task is to identify if a user wants to schedule a call or connect with Meera.
- When intent is detected, your first step is to CHECK if the user has already provided their full name, email, and company name in their message.

- **Scenario 1: If details are MISSING:**
  - If the user has NOT provided all three details, you MUST ask for them. Use this exact script: "I can certainly help with that. To proceed, could you please provide me with your full name, email address, and company name? I will then forward your details to have a scheduling link sent to you."

- **Scenario 2: If details are PROVIDED:**
  - If the user has already provided all three details (like "My name is Michael Scott, I work at Dunder Mifflin, email is mscott@dundermifflin.com"), you must NOT ask for them again.
  - Instead, you must IMMEDIATELY respond with the final confirmation.

// FINAL RESPONSE FORMAT
- After you have all three details, your final response MUST STRICTLY follow this format.
- **Your EXACT Response MUST BE:** "Perfect, I have your details. The scheduling link will be sent to you shortly. Here is the confirmation: <SCHEDULE_DETAILS>{"fullName": "USER_FULL_NAME", "email": "USER_EMAIL", "companyName": "USER_COMPANY"}</SCHEDULE_DETAILS>"
- You must fill in the USER_FULL_NAME, USER_EMAIL, and USER_COMPANY with the information the user provided.
`;

  const sendDetailsToPipedream = async (details) => {
    if (!pipedreamWebhookUrl.startsWith('http')) return;
    try {
      await fetch(pipedreamWebhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(details),
      });
    } catch (error) {
      console.error("Failed to send details to Pipedream:", error);
    }
  };

  useEffect(() => {
    return () => {
      const { messages: finalMessages, schedulingDetails: finalDetails } = messagesRef.current;
      if (finalMessages.length > 0) {
        // This is a simplified logger that just sends the transcript
        // The details are sent instantly when captured
      }
    };
  }, []);

  const handleSend = async () => {
    if (!userInput.trim()) return;
    const geminiApiKey = import.meta.env.VITE_GEMINI_API_KEY;
    if (!geminiApiKey) {
      setMessages((prev) => [...prev, { role: 'model', content: '❌ Configuration error. The Gemini API key is missing.' }]);
      return;
    }

    const currentInput = userInput;
    const userMessage = { role: 'user', content: currentInput };
    setMessages((prev) => [...prev, userMessage]);
    setUserInput('');
    setLoading(true);

    try {
      const fullPrompt = `${meeraContext}\n\nUser: ${currentInput}`;
      const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${geminiApiKey}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ contents: [{ role: 'user', parts: [{ text: fullPrompt }] }] })
        }
      );

      if (!res.ok) throw new Error(`API request failed`);
      
      const data = await res.json();
      let botText = data?.candidates?.[0]?.content?.parts?.[0]?.text || 'I am not sure how to respond to that.';
      
      const scheduleDetailsMatch = botText.match(/<SCHEDULE_DETAILS>(.*?)<\/SCHEDULE_DETAILS>/);
      if (scheduleDetailsMatch && scheduleDetailsMatch[1]) {
        try {
          const detailsJson = JSON.parse(scheduleDetailsMatch[1]);
          await sendDetailsToPipedream(detailsJson); // Send details immediately
          setSchedulingDetails(detailsJson); // Also save to state
          botText = botText.replace(scheduleDetailsMatch[0], "").trim();
        } catch (e) {
          console.error("Could not parse schedule details from AI response:", e);
        }
      }

      const botMessage = { role: 'model', content: botText };
      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [...prev, { role: 'model', content: '❌ Sorry, I am having trouble connecting.' }]);
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