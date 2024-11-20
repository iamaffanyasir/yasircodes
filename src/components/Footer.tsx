import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/yourusername',
      icon: 'fab fa-github'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/yourusername',
      icon: 'fab fa-linkedin-in'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/yourusername',
      icon: 'fab fa-twitter'
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/yourusername',
      icon: 'fab fa-instagram'
    }
  ];

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-links">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
            >
              <i className={link.icon}></i>
            </a>
          ))}
        </div>
        
        <div className="footer-line"></div>
        
        <div className="footer-info">
          <p>Designed & Built by Mohammad Affan Yasir</p>
          <p className="copyright">© 2024 All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 