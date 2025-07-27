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
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
        padding: '1.5rem',
        position: 'relative'
      }}
    >
      <Link
        to="/"
        className="absolute top-6 left-6 bg-white/20 backdrop-blur-sm text-white text-sm px-6 py-3 rounded-full border border-white/30 hover:bg-white/30 transition-all duration-300 shadow-lg font-medium"
        style={{
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
          fontWeight: '500',
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
          transition: 'all 0.3s ease'
        }}
      >
        ← Back to Home
      </Link>
      
      <div 
        className="max-w-xl mx-auto pt-20"
        style={{
          maxWidth: '36rem',
          margin: '0 auto',
          paddingTop: '5rem'
        }}
      >
        <div 
          className="text-center mb-8"
          style={{
            textAlign: 'center',
            marginBottom: '2rem'
          }}
        >
          <div 
            style={{
              fontSize: '4rem',
              marginBottom: '1rem'
            }}
          >
            📞
          </div>
          
          <h2 
            className="text-4xl font-bold text-white mb-4 drop-shadow-lg"
            style={{
              fontSize: '2.25rem',
              fontWeight: 'bold',
              color: 'white',
              marginBottom: '1rem',
              textShadow: '0 4px 8px rgba(0, 0, 0, 0.3)'
            }}
          >
            Get In Touch
          </h2>
          
          <p 
            className="text-lg text-white/90"
            style={{
              fontSize: '1.125rem',
              color: 'rgba(255, 255, 255, 0.9)'
            }}
          >
            Let's connect and discuss opportunities
          </p>
        </div>
        
        <div 
          className="backdrop-blur-lg bg-white/10 p-8 rounded-3xl shadow-2xl border border-white/20 space-y-6"
          style={{
            backdropFilter: 'blur(16px)',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            padding: '2rem',
            borderRadius: '1.5rem',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem'
          }}
        >
          {/* Email Contact */}
          <div 
            className="flex items-center p-4 bg-white/10 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300"
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '1rem',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '1rem',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              transition: 'all 0.3s ease'
            }}
          >
            <div 
              style={{
                fontSize: '1.5rem',
                marginRight: '1rem'
              }}
            >
              ✉️
            </div>
            <div>
              <h3 
                className="text-white font-semibold text-lg"
                style={{
                  color: 'white',
                  fontWeight: '600',
                  fontSize: '1.125rem'
                }}
              >
                Email
              </h3>
              <a 
                href="mailto:meera.raina011@gmail.com"
                className="text-white/80 hover:text-white transition-colors"
                style={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease'
                }}
              >
                meera.raina011@gmail.com
              </a>
            </div>
          </div>

          {/* Phone Contact */}
          <div 
            className="flex items-center p-4 bg-white/10 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300"
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '1rem',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '1rem',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              transition: 'all 0.3s ease'
            }}
          >
            <div 
              style={{
                fontSize: '1.5rem',
                marginRight: '1rem'
              }}
            >
              📱
            </div>
            <div>
              <h3 
                className="text-white font-semibold text-lg"
                style={{
                  color: 'white',
                  fontWeight: '600',
                  fontSize: '1.125rem'
                }}
              >
                Phone
              </h3>
              <a 
                href="tel:+91 9718519929"
                className="text-white/80 hover:text-white transition-colors"
                style={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease'
                }}
              >
                +91 9718519929
              </a>
            </div>
          </div>

          {/* LinkedIn Contact */}
          <div 
            className="flex items-center p-4 bg-white/10 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300"
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '1rem',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '1rem',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              transition: 'all 0.3s ease'
            }}
          >
            <div 
              style={{
                fontSize: '1.5rem',
                marginRight: '1rem'
              }}
            >
              💼
            </div>
            <div>
              <h3 
                className="text-white font-semibold text-lg"
                style={{
                  color: 'white',
                  fontWeight: '600',
                  fontSize: '1.125rem'
                }}
              >
                LinkedIn
              </h3>
              <a 
                href="https://www.linkedin.com/in/meera-raina-58b54429/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors"
                style={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease'
                }}
              >
                https://www.linkedin.com/in/meera-raina-58b54429/
              </a>
            </div>
          </div>

          {/* Location */}
          <div 
            className="flex items-center p-4 bg-white/10 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300"
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '1rem',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '1rem',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              transition: 'all 0.3s ease'
            }}
          >
            <div 
              style={{
                fontSize: '1.5rem',
                marginRight: '1rem'
              }}
            >
              📍
            </div>
            <div>
              <h3 
                className="text-white font-semibold text-lg"
                style={{
                  color: 'white',
                  fontWeight: '600',
                  fontSize: '1.125rem'
                }}
              >
                Location
              </h3>
              <p 
                className="text-white/80"
                style={{
                  color: 'rgba(255, 255, 255, 0.8)'
                }}
              >
                Greater Noida West, India
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;