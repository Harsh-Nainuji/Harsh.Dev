// src/components/AboutSection.jsx
import React from "react";
import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative flex flex-col-reverse items-center justify-between min-h-screen px-6 pt-24 overflow-hidden bg-gradient-to-b from-black to-violet-900 xl:flex-row lg:px-24"
    >
      {/* Glassmorphism Card */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="z-40 max-w-4xl p-10 mx-auto text-center text-white border shadow-xl backdrop-blur-xl bg-white/10 border-white/20 rounded-2xl"
      >
        <h2 className="mb-6 text-4xl font-bold text-transparent bg-gradient-to-r from-violet-400 to-purple-600 bg-clip-text">
          About Me
        </h2>
        <p className="text-lg leading-relaxed text-purple-100">
          I'm a passionate developer focused on building beautiful, performant,
          and accessible digital products. I thrive in fast-paced environments
          and love tackling complex technical problems. <br />
          <br />
          I believe every great solution starts with a strong understanding of
          the problem. Whether you're a startup or a seasoned business, I'm here
          to help craft digital experiences that connect and convert.
          <br />
          <br />
          Let's collaborate and bring your vision to life.
        </p>
        
      </motion.div>

     
    </section>
  );
};

export default AboutSection;
