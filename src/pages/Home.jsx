import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './Home.scss';


const Home = () => {
  const user = useSelector((state) => state.user);
  const [displayedText, setDisplayedText] = useState({
    title: '',
    subtitle: '',
    description: ''
  });
  
  const fullText = {
    title: 'Welcome to My Portfolio',
    subtitle: `Hi, I'm ${user.name}`,
    description: `I'm a passionate ${user.role} dedicated to creating beautiful and functional web experiences.`
  };
  
  useEffect(() => {
    let currentTextIndex = 0;
    let currentCharIndex = 0;
    const textKeys = ['title', 'subtitle', 'description'];
    
    const typingInterval = setInterval(() => {
      if (currentTextIndex >= textKeys.length) {
        clearInterval(typingInterval);
        return;
      }
      
      const currentKey = textKeys[currentTextIndex];
      const currentFullText = fullText[currentKey];
      
      if (currentCharIndex < currentFullText.length) {
        setDisplayedText(prev => ({
          ...prev,
          [currentKey]: currentFullText.substring(0, currentCharIndex + 1)
        }));
        currentCharIndex++;
      } else {
        currentTextIndex++;
        currentCharIndex = 0;
      }
    }, 50); // Adjust typing speed here (milliseconds)
    
    return () => clearInterval(typingInterval);
  }, [user.name, user.role]);

  return (
    <div className="home-container">
      <div className="home-content">
        <h1 className="typing-text">{displayedText.title}</h1>
        <h2 className="typing-text">{displayedText.subtitle}</h2>
        <p className="typing-text">{displayedText.description}</p>
        
        {displayedText.description === fullText.description && (
          <div className="cta-buttons fade-in">
            <a href="/about" className="btn btn-primary">Learn More</a>
            <a href="/contact" className="btn btn-secondary">Contact Me</a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
