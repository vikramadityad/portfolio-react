// @ts-check

import React from 'react';

const Footer = () => {
  return (
    <footer className="footer-section">
        <div className="footer-text">
        <p className="footer-text-content">Vikram.Devaguptapu</p>
      </div>
      <div className="social-links">
        <a href="https://github.com/vikramadityad?tab=repositories" className="social-link" target="_blank" rel="noopener noreferrer">
          <img src="./images/github-icon.png" alt="GitHub" className="social-icon github-icon" />
        </a>
        <a href="https://www.linkedin.com/in/vikramad/" className="social-link" target="_blank" rel="noopener noreferrer">
          <img src="./images/linkedin-icon.png" alt="LinkedIn" className="social-icon linkedin-icon" />
        </a>
        <a href="https://twitter.com/VikramAdityaD" className="social-link" target="_blank" rel="noopener noreferrer">
          <img src="./images/twitter-icon.png" alt="Twitter" className="social-icon twitter-icon" />
        </a>
      </div>
    
    </footer>
  );
};

export default Footer;
