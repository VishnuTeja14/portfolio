import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-20 bg-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            VISHNU TEJA LINGABATHINI
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl mb-6 text-primary">
            Software Developer | ML & IoT Enthusiast
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
            Passionate about developing software applications and seeking opportunities to enhance my skills and knowledge while
            contributing to organizational growth.
          </p>
          <div className="flex justify-center space-x-6 mb-10">
            <a
              href="https://www.linkedin.com/in/VishnuTeja"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary transition-colors"
            >
              <FaLinkedin size={32} />
            </a>
            <a
              href="https://github.com/VishnuTeja14"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary transition-colors"
            >
              <FaGithub size={32} />
            </a>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#projects"
              className="bg-primary hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-md transition-colors"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="bg-accent hover:bg-red-700 text-white font-bold py-3 px-6 rounded-md transition-colors"
            >
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
