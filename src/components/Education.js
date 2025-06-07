import React from "react";
import { motion } from "framer-motion";

const Education = () => {
  const education = [
    {
      institution: "Kakatiya Institute of Technology and Science, Warangal",
      degree: "Bachelor of Technology in Electronics and Communication Engineering",
      duration: "Jun 2021 – May 2025",
      score: "CGPA: 8.22"
    },
    {
      institution: "Kakatiya Junior College, Huzurabad",
      degree: "Intermediate (PCM)",
      duration: "May 2018 – Dec 2020",
      score: "Percentage: 92.3%"
    },
    {
      institution: "Tetrahedron Model School",
      degree: "SSC",
      duration: "May 2018",
      score: "CGPA: 9.3"
    }
  ];

  return (
    <section id="education" className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-secondary">
            Education
          </h2>
          
          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="md:flex">
                  <div className="p-6 md:w-full">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                      <h3 className="text-xl font-bold text-primary mb-2 md:mb-0">
                        {edu.institution}
                      </h3>
                      <span className="inline-block bg-blue-100 text-primary px-3 py-1 rounded-full text-sm font-semibold">
                        {edu.duration}
                      </span>
                    </div>
                    <p className="text-gray-700 mt-3 font-medium">
                      {edu.degree}
                    </p>
                    <p className="text-gray-600 mt-2">
                      {edu.score}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
