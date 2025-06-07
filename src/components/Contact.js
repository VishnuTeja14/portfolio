import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to a server
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
    
    // Reset submission status after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <section id="contact" className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-secondary">
            Contact Me
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-primary mb-6">Get In Touch</h3>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <FaEnvelope className="text-primary mr-4" size={20} />
                  <a href="mailto:vishnutejalingabathini@gmail.com" className="text-gray-700 hover:text-primary">
                    vishnutejalingabathini@gmail.com
                  </a>
                </div>
                
                <div className="flex items-center">
                  <FaPhone className="text-primary mr-4" size={20} />
                  <a href="tel:+916300339803" className="text-gray-700 hover:text-primary">
                    +91 6300339803
                  </a>
                </div>
                
                <div className="flex items-center">
                  <FaLinkedin className="text-primary mr-4" size={20} />
                  <a 
                    href="https://www.linkedin.com/in/VishnuTeja" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-primary"
                  >
                    LinkedIn/VishnuTeja
                  </a>
                </div>
                
                <div className="flex items-center">
                  <FaGithub className="text-primary mr-4" size={20} />
                  <a 
                    href="https://github.com/VishnuTeja14" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-primary"
                  >
                    GitHub/VishnuTeja14
                  </a>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-semibold text-secondary mb-2">Languages</h4>
                <p className="text-gray-700">Telugu, Hindi, English</p>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-primary mb-6">Send Me a Message</h3>
              
              {isSubmitted ? (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
                  Thank you for your message! I will get back to you soon.
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="bg-primary hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md transition-colors w-full"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
