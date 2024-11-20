import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero: React.FC = () => {
  const [nameText, setNameText] = useState('');
  const [roleText, setRoleText] = useState('');
  const [nameTypingComplete, setNameTypingComplete] = useState(false);
  const [roleTypingComplete, setRoleTypingComplete] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  const fullName = "Mohammad Affan Yasir";
  const fullRole = "Full Stack Developer & AI Enthusiast";
  
  useEffect(() => {
    setIsVisible(true);
    
    // Name typing animation
    let nameIndex = 0;
    const nameTyping = setInterval(() => {
      if (nameIndex <= fullName.length) {
        setNameText(fullName.slice(0, nameIndex));
        nameIndex++;
      } else {
        clearInterval(nameTyping);
        setNameTypingComplete(true);
        // Start role typing after name is complete
        let roleIndex = 0;
        const roleTyping = setInterval(() => {
          if (roleIndex <= fullRole.length) {
            setRoleText(fullRole.slice(0, roleIndex));
            roleIndex++;
          } else {
            clearInterval(roleTyping);
            setRoleTypingComplete(true);
          }
        }, 50);
      }
    }, 100);

    return () => {
      clearInterval(nameTyping);
    };
  }, []);

  return (
    <section id="home" className="hero">
      <div className={`hero-content ${isVisible ? 'visible' : ''}`}>
        <div className="hero-text-content">
          <p className="hero-greeting">Hi there, I'm</p>
          <h1 className="hero-title">
            {nameText}
            <span className={`cursor ${nameTypingComplete ? 'hidden' : ''}`}>|</span>
          </h1>
          <h2 className="hero-subtitle">
            {roleText}
            <span className={`cursor ${roleTypingComplete ? 'hidden' : ''}`}>|</span>
          </h2>
          <p className="hero-description">
          I specialize in developing modern web applications and delving into AI-driven solutions. I’m passionate about crafting innovative digital experiences that seamlessly blend advanced technologies with outstanding user-centric design.
          </p>
          <div className="hero-buttons">
            <Link to="/projects" className="cta-button primary">
              View My Work
              <i className="fas fa-arrow-right"></i>
            </Link>
            
          </div>
        </div>

        <div className="social-links-vertical">
          <a href="https://github.com/iamaffanyasir" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/mohammad-affan-yasir-6a1976179/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="https://x.com/wolverine1k999" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <div className="social-line"></div>
        </div>

        <div className="email-link">
          <a href="mailto:yasirmohammadaffan@gmail.com">yasirmohammadaffan@gmail.com</a>
          <div className="email-line"></div>
        </div>

        <div className="scroll-indicator">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <div className="arrows">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div className="social-links-mobile">
          <a href="https://github.com/iamaffanyasir" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/mohammad-affan-yasir-6a1976179/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="https://x.com/wolverine1k999" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.instagram.com/imaffanyasir/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
        </div>

        <div className="email-link-mobile">
          <a href="mailto:yasirmohammadaffan@gmail.com">
            yasirmohammadaffan@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero; 