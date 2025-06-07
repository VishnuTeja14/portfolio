import React from "react";
import { FaHeart } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">VISHNU TEJA</h3>
            <p className="text-sm mt-1">Software Developer & IoT Enthusiast</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a 
                href="https://www.linkedin.com/in/VishnuTeja" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                LinkedIn
              </a>
              <a 
                href="https://github.com/VishnuTeja14" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                GitHub
              </a>
              <a 
                href="mailto:vishnutejalingabathini@gmail.com"
                className="hover:text-primary transition-colors"
              >
                Email
              </a>
            </div>
            
            <p className="text-sm flex items-center">
              Made with <FaHeart className="mx-1 text-accent" /> {currentYear}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
