import React from "react";
import { motion } from "framer-motion";
// Import your photo (adjust the path as needed)
import profilePhoto from "../assets/images/profile.jpg"; 

const About = () => {
  return (
    <section id="about" className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-secondary">
            About Me
          </h2>
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
            <div className="max-w-3xl mx-auto">
              {/* Add photo and flex container */}
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-6">
                {/* Profile photo with styling */}
                <div className="w-64 h-80 overflow-hidden rounded-md shadow-lg flex-shrink-0 relative">
  <img 
    src={profilePhoto} 
    alt="Vishnu Teja Lingabathini"
    className="absolute top-0 w-full animate-scroll-image"
  />
</div>
                
                {/* Summary section */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-primary">Summary</h3>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Strong foundation in software development with a focus on building full-stack applications using Java, Python, and web technologies.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Hands-on experience with IoT applications using Julia and Arduino.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Familiar with database management, RESTful API design, and responsive front-end frameworks like React.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Keen interest in building scalable applications and exploring machine learning applications in healthcare.</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <p className="text-gray-700 mb-6">
                I am a passionate software developer with a strong interest in IoT and machine learning applications. 
                Currently pursuing my Bachelor of Technology in Electronics and Communication Engineering, 
                I am dedicated to expanding my knowledge and skills in software development while contributing to meaningful projects.
              </p>
              <p className="text-gray-700">
                My goal is to leverage my technical skills and creativity to develop innovative solutions that address real-world challenges. 
                I am particularly interested in the intersection of software development and healthcare, where I believe technology can make a significant impact.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
