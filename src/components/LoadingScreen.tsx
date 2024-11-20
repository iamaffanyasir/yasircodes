import React, { useEffect, useState } from 'react';
import './LoadingScreen.css';

const LoadingScreen: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [text, setText] = useState('');
  const fullText = "< Developer />";
  
  useEffect(() => {
    // Typing animation
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    // Progress bar animation
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prevProgress + 1;
      });
    }, 20);

    return () => {
      clearInterval(timer);
      clearInterval(typingInterval);
    };
  }, []);

  return (
    <div className="loading-screen">
      <div className="loading-content">
        <div className="loading-text">
          <h1>{text}<span className="cursor">|</span></h1>
          <p className="loading-subtext">Initializing development environment...</p>
          <div className="loading-tags">
            <span>#React.js</span>
            <span>#Node.js</span>
            <span>#Next.js</span>
            <span>#Python</span>
            <span>#MongoDB</span>
            <span>#SQL</span>
            
          </div>
        </div>
        <div className="loading-progress-container">
          <div 
            className="loading-progress-bar" 
            style={{ width: `${progress}%` }}
          />
          <span className="loading-percentage">{progress}%</span>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen; 