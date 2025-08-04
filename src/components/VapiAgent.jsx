import React from 'react';
import { VapiButton } from '@vapi-ai/web';
import { motion } from 'framer-motion';

const VapiAgent = () => {
  const vapiKey = import.meta.env.VITE_VAPI_PUBLIC_KEY;
  
  // Naya, smart prompt
  const baseSystemPrompt = `
You are Meera Raina's AI Assistant. Your name is 'Mira'. You are professional, warm, and highly intelligent at understanding human speech.

// CONVERSATIONAL STYLE
- Be natural and use conversational fillers like "Alright," "Got it," "Let me see...".
- Be empathetic and acknowledge the user's input.
- Speak at a calm, natural pace.

// DATA HANDLING INSTRUCTIONS
- **Listen for Spelling:** When a user spells out information like an email, pay close attention. Understand "underscore" as the "_" symbol, and "double one" as "11". For example, "meera underscore 0 double 1 at yahoo dot com" must be understood as "meera_011@yahoo.com".
- **Understand Acronyms:** For company names like "IQVIA", understand it as a single word "IQVIA", not as separate letters "I Q V I A".

// CORE PROFESSIONAL INFO
My full name is Meera Raina, but you can refer to her as Meera. She is a GenAI Project Manager and Consultant with over 16 years of experience. She is currently an Associate Director at IQVIA. Her key certifications include PMP and CSM. Her notice period is 3 months. Please politely decline any questions about salary.

// THOUGHT LEADERSHIP & OPINIONS
- Meera believes GenAI is a creative partner. She often writes on her blog, ctrlaltopinion, about using AI to automate tedious work and free up human talent.
- Her project management philosophy is built on "Clarity, Communication, and Collaboration."

// PROACTIVE FUNCTIONAL CAPABILITY: INTERVIEW SCHEDULING
- My main goal is to identify if the caller is a potential professional contact, like a recruiter.
- If the conversation leads to it, I should offer to help schedule a call.
- My Offer Script: "It sounds like a conversation would be really productive. I can help set that up. To make it easy, I can send a scheduling link to your email. What's your full name, email address, and company name?"
- If the call is ending, I can ask: "Before we wrap up, would you be interested in scheduling a brief call with Meera to discuss this further?"
- **CRITICAL:** Once I have the details (fullName, email, companyName), I will use the 'scheduleInterview' function. I will then confirm by saying, "Perfect, I have all the details. I'm sending that scheduling link over to you now." I will NOT read the Calendly URL out loud.
  `;

  const now = new Date();
  const currentDate = now.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  const currentTime = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', timeZoneName: 'short' });
  const dynamicContextHeader = `
Current conversation context:
- Today's Date: ${currentDate}
- Current Time: ${currentTime}
- The user has initiated this call from Meera Raina's portfolio website.
  `;
  const finalSystemPrompt = baseSystemPrompt.replace('{{dynamicContextHeader}}', dynamicContextHeader);

  if (!vapiKey) {
    console.error("VITE_VAPI_PUBLIC_KEY is not set in your .env.local file.");
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.6 }}
            className="backdrop-blur-lg bg-red-500/20 p-6 rounded-2xl shadow-xl border border-red-500/30"
        >
            <h3 className="text-xl font-bold text-white mb-2">Vapi Agent Error</h3>
            <p className="text-white/80 text-sm">Vapi key is missing. Please check your `.env.local` file and restart the server.</p>
        </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.6 }}
      className="backdrop-blur-lg bg-white/10 p-6 rounded-2xl shadow-xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center'
      }}
    >
        <div className="text-4xl mb-3">📞</div>
        <h3 className="text-xl font-bold text-white mb-2">Talk to My AI Assistant</h3>
        <p className="text-white/80 text-sm mb-4 leading-relaxed">
          Click the button below to start a real-time voice conversation.
        </p>
        <VapiButton
            publicKey={vapiKey}
            assistant={{
              name: "Meera's Assistant",
              firstMessage: "Hello, this is Mira, Meera Raina's AI assistant. How can I help you today?",
              model: {
                provider: "openai",
                model: "gpt-4o",
                messages: [{
                  role: "system",
                  content: finalSystemPrompt
                }]
              },
              voice: "jennifer-playht",
              tools: [
                {
                  type: "function",
                  // Yahan par 'async: false' kar diya hai
                  async: false, 
                  function: {
                    name: "scheduleInterview",
                    description: "Collects the user's full name, email, and company to send a scheduling link.",
                    parameters: {
                      type: "object",
                      properties: {
                        fullName: { type: "string", description: "The full name of the person requesting the interview." },
                        email: { type: "string", description: "The email address where the scheduling link will be sent." },
                        companyName: { type: "string", description: "The name of the company the person represents." }
                      },
                      required: ["fullName", "email", "companyName"]
                    }
                  }
                }
              ]
            }}
        />
    </motion.div>
  );
};

export default VapiAgent;