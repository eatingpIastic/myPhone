import React, { useState } from 'react';
import '../styles/game.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [showGame, setShowGame] = useState(false);
  
  const footerLinks = [
    {
      title: 'Products',
      links: ['Overview', 'Features', 'Solutions', 'Tutorials']
    },
    {
      title: 'Company',
      links: ['About', 'Careers', 'Press', 'News']
    },
    {
      title: 'Resources',
      links: ['Blog', 'Newsletter', 'Events', 'Help Center']
    },
    {
      title: 'Legal',
      links: ['Terms', 'Privacy', 'Cookies', 'Licenses']
    }
  ];

  const toggleGame = () => {
    setShowGame(!showGame);
  };

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {footerLinks.map((category, index) => (
            <div key={index}>
              <h3 className="text-sm font-semibold text-gray-900 mb-4">{category.title}</h3>
              <ul className="space-y-3">
                {category.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-xl font-semibold tracking-tight">Innovate</span>
          </div>
          
          <div className="text-sm text-gray-500">
            © {currentYear} Innovate Inc. All rights reserved.
            <button 
              onClick={toggleGame}
              className="ml-2 text-gray-400 hover:text-gray-500 transition-colors"
              aria-label="Calculator"
            >
              Calculator
            </button>
          </div>
        </div>

        {showGame && (
          <div className="fixed inset-0 z-50">
            <div className="container">
              <div className="content" aria-label="Interactive content container">
                <div className="toggle-button-container">
                  <div className="button" onClick={() => document.body.classList.toggle('dark-mode')} aria-label="Toggle light/dark mode" tabIndex={0}>
                    <span className="hover-effect"></span>
                    <i className="fas fa-adjust icon" aria-hidden="true"></i>
                    <span className="button-text">Toggle Mode</span>
                  </div>
                </div>
                <iframe id="gameFrame" src="https://hello1405.github.io/1v1lol.html/" title="Interactive game" />
                <div className="fullscreen-button-container">
                  <div className="button fullscreen-button" onClick={() => {
                    const iframe = document.getElementById('gameFrame');
                    if (iframe) {
                      iframe.requestFullscreen();
                    }
                  }} aria-label="Fullscreen button" tabIndex={0}>
                    <span className="hover-effect"></span>
                    <i className="fas fa-expand icon" aria-hidden="true"></i>
                    <span className="button-text">Fullscreen</span>
                  </div>
                </div>
              </div>
              
              <div className="button home-button" onClick={toggleGame} aria-label="Close game" tabIndex={0}>
                <span className="hover-effect"></span>
                <i className="fas fa-times icon" aria-hidden="true"></i>
              </div>
            </div>
          </div>
        )}
      </div>
    </footer>
  );
};

export default Footer;