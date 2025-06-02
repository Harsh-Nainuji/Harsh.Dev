import React from "react";
import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";

const HeroSection = () => {
  return (
    <section className="relative flex flex-col-reverse items-center justify-between min-h-screen px-6 pt-24 overflow-hidden bg-gradient-to-b from-violet-900 to-black xl:flex-row lg:px-24">
      
      {/* Left Side - Text Content */}
      <div className="z-40 flex flex-col justify-center mb-20 xl:w-1/2 xl:mb-0">
        <motion.h1
          initial={{ opacity: 0, y: -80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 40,
            damping: 25,
            delay: 1.3,
            duration: 1.5,
          }}
          className="mb-6 text-3xl font-bold leading-tight text-center text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-left"
        >
          Building Fast Reliable Results for Your Business
        </motion.h1>

        <motion.div
  initial={{ opacity: 0, y: -80 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    type: "spring",
    stiffness: 40,
    damping: 25,
    delay: 1.7,
    duration: 1.5,
  }}
  className="max-w-xl mx-auto space-y-4 text-xs leading-relaxed text-center text-purple-200 sm:text-sm md:text-base lg:text-base xl:text-left"
>
  <p>
    <strong>⦿ Fast and reliable web development</strong> is at the core of what I do. I craft responsive, high-performance websites that elevate your brand.
  </p>

  <p>
    <strong>⦿ Your goals matter.</strong> I focus on turning your vision into a clean, effective digital product designed for impact.
  </p>

  <p>
    <strong>⦿ Performance, scalability, and user experience</strong> are at the heart of my code. Let’s build something exceptional together.
  </p>
</motion.div>

      </div>
      


    </section>
  );
};



export default HeroSection;
