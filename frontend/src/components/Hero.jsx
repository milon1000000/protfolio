import React from "react";
import { motion } from "framer-motion";
function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      viewport={{ once: false,amount:0.2 }}
      id="home"
      className="min-h-screen flex items-center pt-20 pb-16 bg-linear-to-r from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a]"
    >
      {/* left side */}
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between mt-20 md:mt-0">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I am <span className="text-purple-500">Mahinur Milon</span>
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold mb-6 typewriter">
            Full Stack Developer
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            I create stunning web experiences with modern technologies and
            innovative design
          </p>
          <div className="flex space-x-4 mt-8">
            <a
              href="#projects"
              className="px-6 py-3 bg-purple-500 text-white font-semibold rounded-lg shadow-lg hover:bg-purple-600 transition-colors duration-300"
            >
              View Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border-2 border-purple-500 text-purple-500 font-semibold rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-300"
            >
              Contact
            </a>
          </div>
        </div>
        {/* right side */}
        <div className="md:w-1/2 flex justify-center">
          <div className="w-64 h-64 rounded-full overflow-hidden flex items-center justify-center">
            <img
              src="/profile.jpeg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Hero;
