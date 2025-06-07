import React from "react";
import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      title: "Summer Intern",
      company: "National Institute of Technology, Warangal",
      duration: "Jun 2023 – Aug 2023",
      description: [
        "Worked on IoT and sensor-based modules using Julia programming.",
        "Designed and implemented water-level monitoring systems using Arduino and Ultrasonic sensors."
      ]
    }
  ];

  return (
    <section id="experience" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-secondary">
            Experience
          </h2>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="bg-background rounded-lg shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="p-6">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                    <h3 className="text-xl font-bold text-primary mb-2 md:mb-0">
                      {exp.title}
                    </h3>
                    <span className="inline-block bg-blue-100 text-primary px-3 py-1 rounded-full text-sm font-semibold">
                      {exp.duration}
                    </span>
                  </div>
                  <p className="text-gray-700 mt-2 font-medium">
                    {exp.company}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
