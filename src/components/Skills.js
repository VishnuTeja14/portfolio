import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const skills = {
    programming: ["Java", "C#", "Python", "Julia", "HTML", "JavaScript"],
    databases: ["SQL", "MongoDB"],
    frameworks: [".NET core", "Bootstrap", "React.JS"],
    tools: ["Excel", "GitHub", "Visual Studio Code"],
    soft: ["Communication", "Problem Solving", "Teamwork", "Critical Thinking"]
  };

  const SkillBar = ({ skill, index }) => {
    // Random percentage between 75 and 95 for visual effect
    const percentage = 80 + Math.floor(Math.random() * 20);
    
    return (
      <motion.div 
        className="mb-4"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
      >
        <div className="flex justify-between mb-1">
          <span className="text-base font-medium text-secondary">{skill}</span>
          <span className="text-sm font-medium text-secondary">{percentage}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <motion.div 
            className="bg-primary h-2.5 rounded-full" 
            style={{ width: `${percentage}%` }}
            initial={{ width: 0 }}
            whileInView={{ width: `${percentage}%` }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
          ></motion.div>
        </div>
      </motion.div>
    );
  };

  return (
    <section id="skills" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-secondary">
            Technical Skills
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Programming Languages */}
            <div className="bg-background rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-6 text-primary border-b pb-2">
                Programming Languages
              </h3>
              <div className="space-y-4">
                {skills.programming.map((skill, index) => (
                  <SkillBar key={skill} skill={skill} index={index} />
                ))}
              </div>
            </div>
            
            {/* Databases */}
            <div className="bg-background rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-6 text-primary border-b pb-2">
                Databases
              </h3>
              <div className="space-y-4">
                {skills.databases.map((skill, index) => (
                  <SkillBar key={skill} skill={skill} index={index} />
                ))}
              </div>
            </div>
            
            {/* Frameworks */}
            <div className="bg-background rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-6 text-primary border-b pb-2">
                Frameworks
              </h3>
              <div className="space-y-4">
                {skills.frameworks.map((skill, index) => (
                  <SkillBar key={skill} skill={skill} index={index} />
                ))}
              </div>
            </div>
            
            {/* Tools */}
            <div className="bg-background rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-6 text-primary border-b pb-2">
                Tools
              </h3>
              <div className="space-y-4">
                {skills.tools.map((skill, index) => (
                  <SkillBar key={skill} skill={skill} index={index} />
                ))}
              </div>
            </div>
            
            {/* Soft Skills */}
            <div className="bg-background rounded-lg shadow-lg p-6 md:col-span-2 lg:col-span-1">
              <h3 className="text-xl font-semibold mb-6 text-primary border-b pb-2">
                Soft Skills
              </h3>
              <div className="space-y-4">
                {skills.soft.map((skill, index) => (
                  <SkillBar key={skill} skill={skill} index={index} />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
