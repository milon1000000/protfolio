import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10">
      <div className="container mx-auto px-6 flex flex-col items-center space-y-6">
        
        {/* Social Icons */}
        <div className="flex space-x-6 text-3xl">
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="https://github.com/milon1000000"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition duration-300"
          >
            <FaGithub />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.2 }}
            href="https://www.linkedin.com/in/md-mahinur-rahman-milon-a70748317"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition duration-300"
          >
            <FaLinkedin />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.2 }}
            href="https://www.facebook.com/share/1ARB8y5bZ7/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition duration-300"
          >
            <FaFacebook />
          </motion.a>
        </div>

        {/* Divider */}
        <div className="w-24 h-1 bg-purple-500 rounded-full"></div>

        {/* Copyright */}
        <p className="text-sm text-gray-500">
          © {new Date().toLocaleDateString()} Mahinur Milon. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;