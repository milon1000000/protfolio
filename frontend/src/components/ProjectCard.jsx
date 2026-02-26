import React from "react";
import { motion } from "framer-motion";
function ProjectCard({ title, description, image, tech, icons, demo, code }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      viewport={{ once: false, amount: 0.2 }}
      className="bg-gray-700 rounded-lg overflow-hidden hover:translate-y-2 transition duration-300 cursor-pointer"
    >
      <div>
        <img src={image} className="w-full h-60 object-cover" alt="" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((item, index) => {
            const Icon = icons[index];
            return (
              <a
                href={item.link}
                target="_blank"
                key={index}
                className="flex items-center gap-2 px-3 py-1 bg-gray-900 rounded-lg text-sm text-gray-300 border border-gray-700"
              >
                {Icon && <Icon className="text-lg text-purple-400" />}
                {item.name}
              </a>
            );
          })}
        </div>
        <div className="flex space-x-4 mt-8">
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-purple-500 whitespace-nowrap text-white font-semibold rounded-lg shadow-lg hover:bg-purple-600 transition-all duration-300"
          >
            View Demo
          </a>

          <a
            href={code}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 whitespace-nowrap border-2 border-purple-500 text-purple-500 font-semibold rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-300"
          >
            View Code
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
