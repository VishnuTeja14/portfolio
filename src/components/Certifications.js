import React from "react";
import { motion } from "framer-motion";

const Certifications = () => {
  const certifications = [
    {
      title: "Career Essentials in Generative AI",
      issuer: "Microsoft & LinkedIn",
      date: "Jun 2020 – Jul 2023"
    },
    {
      title: "Become a Python Developer",
      issuer: "LinkedIn",
      date: "Jan 2023 – Feb 2023"
    },
    {
      title: "Java Programming",
      issuer: "Udemy",
      date: ""
    },
    {
      title: "SQL Essential Training",
      issuer: "LinkedIn",
      date: ""
    }
  ];

  return (
    <section id="certifications" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-secondary">
            Certifications
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="bg-background rounded-lg shadow-lg p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold text-primary mb-2">
                  {cert.title}
                </h3>
                <p className="text-gray-700">
                  <span className="font-medium">Issuer:</span> {cert.issuer}
                </p>
                {cert.date && (
                  <p className="text-gray-600 mt-1">
                    <span className="font-medium">Date:</span> {cert.date}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
