import React from "react";
import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative min-h-screen px-4 pt-24 pb-32 text-white bg-gradient-to-b from-black to-violet-900 lg:px-24"
    >

      {/* Glassmorphism Contact Card */}
      <div className="relative z-10 max-w-3xl p-8 mx-auto mt-10 bg-white border shadow-2xl bg-opacity-10 backdrop-blur-lg rounded-3xl border-white/20">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-6 text-3xl font-bold text-center text-white md:text-4xl"
        >
          Let’s Connect
        </motion.h2>

        <form
          action="https://formsubmit.co/nainujiharsh@gmail.com"
          method="POST"
          className="grid gap-6"
        >
          {/* Hidden input to disable CAPTCHA (optional) */}
          <input type="hidden" name="_captcha" value="false" />

          {/* Name */}
          <div>
            <label className="block mb-2 text-sm font-semibold">Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-4 py-2 text-black bg-white border border-gray-300 rounded-md bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 text-sm font-semibold">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-2 text-black bg-white border border-gray-300 rounded-md bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block mb-2 text-sm font-semibold">Message</label>
            <textarea
              name="message"
              rows="4"
              required
              className="w-full px-4 py-2 text-black bg-white border border-gray-300 rounded-md bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-violet-500"
            ></textarea>
          </div>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            type="submit"
            className="px-6 py-3 text-white transition-all duration-300 rounded-lg bg-violet-700 hover:bg-violet-800"
          >
            Send Message
          </motion.button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
