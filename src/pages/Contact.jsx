import React, { useState, useEffect } from 'react';
import './Contact.scss';

const Contact = () => {
    const [isDownloading, setIsDownloading] = useState(false);
    const [displayedTitle, setDisplayedTitle] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const fullTitle = 'Get In Touch';
    
    // Typing animation effect for the title that repeats
    useEffect(() => {
        let currentCharIndex = 0;
        let typingSpeed = 100; // Base typing speed (milliseconds)
        
        const typingInterval = setInterval(() => {
            // If we're deleting text
            if (isDeleting) {
                if (currentCharIndex > 0) {
                    currentCharIndex--;
                    setDisplayedTitle(fullTitle.substring(0, currentCharIndex));
                } else {
                    setIsDeleting(false);
                    // Pause before starting to type again
                    setTimeout(() => {}, 500);
                }
            } 
            // If we're typing text
            else {
                if (currentCharIndex < fullTitle.length) {
                    currentCharIndex++;
                    setDisplayedTitle(fullTitle.substring(0, currentCharIndex));
                } else {
                    // Pause at the end before starting to delete
                    setTimeout(() => {
                        setIsDeleting(true);
                    }, 1500);
                }
            }
        }, isDeleting ? typingSpeed / 2 : typingSpeed); // Delete faster than type
        
        return () => clearInterval(typingInterval);
    }, [isDeleting]);
    
    // Function to handle resume download
    const handleResumeDownload = () => {
        setIsDownloading(true);
        
        // Create a link element
        const link = document.createElement('a');
        
        // Set the link's href to the path of your resume file
        link.href = '/Resume.pdf';
        
        // Set the download attribute with the desired filename
        link.download = 'Nikhil_Resume.pdf';
        
        // Append the link to the document
        document.body.appendChild(link);
        
        // Trigger the click event
        link.click();
        
        // Remove the link from the document
        document.body.removeChild(link);
        
        // Reset the downloading state after a short delay
        setTimeout(() => {
            setIsDownloading(false);
        }, 1500);
    };

    return (
      <div className="contact-container">
        <h1 className="typing-title">{displayedTitle}<span className="cursor">|</span></h1>
        
        <div className="contact-content">
          <p>
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
          </p>
          
          <div className="contact-methods">
            <div className="contact-method">
              <div className="icon">✉️</div>
              <div className="method-title">Email</div>
              <div className="method-value">
                <a href="mailto:nikhilthakur3958@gmail.com">
                  nikhilthakur3958@gmail.com
                </a>
              </div>
            </div>
            
            <div className="contact-method">
              <div className="icon">📱</div>
              <div className="method-title">Phone</div>
              <div className="method-value">
                <a href="tel:+919805470561">+91 - 9805470561</a>
              </div>
            </div>
            
            <div className="contact-method">
              <div className="icon">💼</div>
              <div className="method-title">LinkedIn</div>
              <div className="method-value">
                <a href="https://linkedin.com/in/07nikk" target="_blank" rel="noopener noreferrer">
                  linkedin.com/in/07nikk
                </a>
              </div>
            </div>
          </div>
          
          <div className="resume-section">
            <p>Want to know more about my experience and skills?</p>
            <button 
              className="download-button" 
              onClick={handleResumeDownload}
              disabled={isDownloading}
            >
              {isDownloading ? 'Downloading...' : 'Download Resume'}
            </button>
          </div>
        </div>
      </div>
    );
};

export default Contact;
