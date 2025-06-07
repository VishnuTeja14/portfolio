import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      title: "Water Level Detector",
      technologies: "Julia, Arduino, Sensors",
      description: "The Water Level Detector is an automated monitoring system designed to detect and control water levels in overhead tanks. Utilizing an Arduino microcontroller, ultrasonic or float sensors, and a control script written in Julia, the system monitors water levels in real-time and automatically turns off the water pump once the tank reaches its maximum capacity. This prevents water wastage due to overflow.",
      github: null
    },
    {
      title: "Automobile Service Manager",
      technologies: "Java, JDBC, SQL, HTML, CSS",
      description: "The project streamlines the process of servicing vehicles by maintaining a centralized database of customers, their vehicles, and the services performed. This eliminates manual errors and speeds up service operations. Built using Java, JDBC (Java Database Connectivity), and SQL, this system handles various functionalities such as customer registration, vehicle details management, job card creation, service tracking, and billing and HTML/CSS for the front-end.",
      github: "https://github.com/VishnuTeja14/automobile-service-manager"
    },
    {
      title: "PPG Signal Classification using ML",
      technologies: "Python, Scikit-learn, Pandas, Matplotlib",
      description: "Implemented classification model to analyze blood pressure using PPG signals. Detected BP categories: Normal, Pre-hypertension, Hypertension using entropy measures. Sophisticated algorithms are used to analyze the PPG data, taking into account factors like arterial stiffness, age, and other individual characteristics, to derive accurate blood pressure estimates.",
      github: "https://github.com/VishnuTeja14/ppg-signal-classification"
    }
  ];

  return (
    <section id="projects" className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-secondary">
            Projects
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden h-full flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="p-6 flex-grow">
                  <h3 className="text-xl font-bold text-primary mb-2">
                    {project.title}
                  </h3>
                  <div className="bg-blue-100 text-primary px-3 py-1 rounded-full text-sm font-semibold inline-block mb-4">
                    {project.technologies}
                  </div>
                  <p className="text-gray-600">
                    {project.description}
                  </p>
                </div>
                <div className="p-6 pt-0 mt-auto">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary hover:text-blue-700 transition-colors"
                    >
                      <FaGithub className="mr-2" size={20} />
                      View on GitHub
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
