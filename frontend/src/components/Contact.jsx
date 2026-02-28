import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [send, setSend] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSend(true);

    try {
      const result = await axios.post(
        "https://protfolio-backend-aeuy.onrender.com/api/contact/contactController",
        formData,
      );

      if (result.data.success) {
        toast.success(result.data.message || "Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        toast.error(result.data.message || "Failed to send message");
      }
      setSend(false);
    } catch (error) {
      setSend(false);
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        toast.error(error.response.data.message);
      } else {
        // Generic network or unknown error
        toast.error("Something went wrong! Please try again.");
      }
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: "easeInOut" }}
      viewport={{ once: true }}
      id="contact"
      className="py-24 bg-linear-to-r from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a]"
    >
      <div className="container mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-4 text-white">
          Get In <span className="text-purple-500">Touch</span>
        </h2>

        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Have a project in mind or want to collaborate? Let’s build something
          amazing together.
        </p>

        {/* Form Card */}
        <div className="max-w-3xl mx-auto bg-white/8 backdrop-blur-lg border border-gray-200 rounded-2xl p-10 shadow-xl">
          <form className="space-y-6 relative" onSubmit={handleSubmit}>
            {/* Name */}
            <div>
              <label className="block text-gray-300 mb-2">Your Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="w-full bg-gray-800 text-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-purple-500 outline-none transition"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-300 mb-2">Your Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full bg-gray-800 text-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-purple-500 outline-none transition"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-gray-300 mb-2">Your Message</label>
              <textarea
                name="message"
                rows="5"
                placeholder="Write your message..."
                className="w-full bg-gray-800 text-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-purple-500 outline-none transition"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            {/* Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-lg shadow-lg transition"
              disabled={send}
            >
              {send ? "sending" : "send"}
            </motion.button>

            {/* Toast Container */}
            <ToastContainer
              position={window.innerWidth < 640 ? "top-center" : "top-right"}
              autoClose={3000}
              style={{ zIndex: 9999 }}
              toastStyle={
                window.innerWidth < 640
                  ? {
                      width: "60%",
                      fontSize: "14px",
                      padding: "10px",
                      minHeight: "50px",
                    }
                  : {}
              }
            />
          </form>
        </div>
      </div>
    </motion.section>
  );
}

export default Contact;
