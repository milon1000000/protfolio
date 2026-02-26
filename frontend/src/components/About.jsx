import React from "react";
import { motion } from "framer-motion";
import { aboutInfo } from "../assets/assets";

function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      viewport={{ once: true }}
      id="about"
      className="py-20 bg-linear-to-r from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a]"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4">
          About <span className="text-purple-500">Me</span>
        </h2>
        <p className="text-gray-200 text-center max-w-2xl mx-auto mb-16">
          Get to know more about my background and passion
        </p>

        {/* Image + My Journey */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Profile Image */}
          <div className="lg:w-1/2 overflow-hidden flex items-center justify-center">
            <motion.img
              src="/profile2.jpeg"
              alt="Profile"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeInOut" }}
              viewport={{ once: false, amount: 0.2 }}
              className="w-full max-w-sm h-auto object-cover rounded-2xl"
            />
          </div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
            viewport={{ once: false, amount: 0.2 }}
            className="lg:w-1/2 w-full"
          >
            <div className="rounded-2xl p-8 bg-gray-800">
              <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
              <p className="text-gray-300 mb-6">
                I'm a passionate full-stack developer with over 5 years of
                experience creating digital solutions for businesses around the
                world. My journey started with basic HTML/CSS websites and has
                evolved into building complex web applications with modern
                frameworks.
              </p>
              <p className="text-gray-300 mb-12">
                When I'm not coding, you can find me exploring new technologies,
                contributing to open-source projects, or sharing my knowledge
                through tech blogs and tutorials. I believe in continuous
                learning and pushing the boundaries of what's possible on the
                web.
              </p>

              {/* Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {aboutInfo.map((data, index) => (
                  <div
                    key={index}
                    className="bg-gray-700 rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1 cursor-pointer shadow-lg flex flex-col items-start gap-4"
                  >
                    <div className="text-3xl flex gap-3 items-center">
                      <data.icon className="text-purple-500 "/>
                       <h3 className="text-xl font-semibold lg:whitespace-nowrap">{data.title}</h3>
                    </div>
                   
                    <p className="text-gray-300 text-sm">{data.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </motion.div>
  );
}

export default About;