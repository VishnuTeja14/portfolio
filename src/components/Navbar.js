import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    setIsOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-secondary text-white fixed w-full z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to="/" className="text-xl font-bold">VISHNU TEJA</Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <button onClick={() => scrollToSection('about')} className="hover:bg-primary px-3 py-2 rounded-md text-sm font-medium">About</button>
              <button onClick={() => scrollToSection('skills')} className="hover:bg-primary px-3 py-2 rounded-md text-sm font-medium">Skills</button>
              <button onClick={() => scrollToSection('education')} className="hover:bg-primary px-3 py-2 rounded-md text-sm font-medium">Education</button>
              <button onClick={() => scrollToSection('experience')} className="hover:bg-primary px-3 py-2 rounded-md text-sm font-medium">Experience</button>
              <button onClick={() => scrollToSection('projects')} className="hover:bg-primary px-3 py-2 rounded-md text-sm font-medium">Projects</button>
              <button onClick={() => scrollToSection('certifications')} className="hover:bg-primary px-3 py-2 rounded-md text-sm font-medium">Certifications</button>
              <button onClick={() => scrollToSection('contact')} className="bg-accent hover:bg-red-700 px-3 py-2 rounded-md text-sm font-medium">Contact</button>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-primary focus:outline-none"
            >
              <svg
                className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        className={`${isOpen ? "block" : "hidden"} md:hidden`}
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? "auto" : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <button onClick={( ) => scrollToSection('about')} className="hover:bg-primary block px-3 py-2 rounded-md text-base font-medium w-full text-left">About</button>
          <button onClick={() => scrollToSection('skills')} className="hover:bg-primary block px-3 py-2 rounded-md text-base font-medium w-full text-left">Skills</button>
          <button onClick={() => scrollToSection('education')} className="hover:bg-primary block px-3 py-2 rounded-md text-base font-medium w-full text-left">Education</button>
          <button onClick={() => scrollToSection('experience')} className="hover:bg-primary block px-3 py-2 rounded-md text-base font-medium w-full text-left">Experience</button>
          <button onClick={() => scrollToSection('projects')} className="hover:bg-primary block px-3 py-2 rounded-md text-base font-medium w-full text-left">Projects</button>
          <button onClick={() => scrollToSection('certifications')} className="hover:bg-primary block px-3 py-2 rounded-md text-base font-medium w-full text-left">Certifications</button>
          <button onClick={() => scrollToSection('contact')} className="bg-accent hover:bg-red-700 block px-3 py-2 rounded-md text-base font-medium w-full text-left">Contact</button>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
