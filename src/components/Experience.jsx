import React from "react";
import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";

const experiences = [
  {
    date: "2023 – Present",
    title: "Full-Stack Web Developer (Self-Taught)",
    description:
      "Started my journey through Udemy and YouTube, mastering frontend and backend technologies like React.js, Node.js, MongoDB, Express.js, and PostgreSQL. Built real-world clones and improved problem-solving through constant project work.",
  },
  {
    date: "Jan 2025 – Apr 2025",
    title: "Full Stack Developer Intern",
    company: "NovaNectar Services Pvt. Ltd.",
    description:
      "Worked on 5+ full-stack web apps including fitness platforms, job portals, hospital management systems, and product dashboards. Gained hands-on experience in routing, API handling, database CRUD operations, and secure file uploads.",
  },
  {
    date: "2023 – Present",
    title: "GitHub Projects & Open Source",
    description:
      "Contributed to over 10+ GitHub repositories including Coffee Shop, Blog Site, Child Hospital, and more. My projects cover diverse stacks, feature reusable components, and emphasize clean code, responsiveness, and user-centric design. [GitHub ↗](https://github.com/Harsh-Nainuji)",
  },
  {
    date: "2024 – 2025",
    title: "Advanced Full-Stack Projects",
    description:
      "Built an AI-powered Automatic News Site and Staring Learing Web3, leaarn about JWT security, analytics dashboards, and Google Maps integration.",
  },
 
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative px-6 py-32 overflow-hidden bg-gradient-to-b from-black to-violet-900 lg:px-24"
    >
      {/* Spline Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
        <Spline scene="https://prod.spline.design/jPUL63ugm64H6miH/scene.splinecode" />
      </div>

      {/* Section Heading */}
      <div className="relative z-10 mb-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold text-white md:text-5xl"
        >
          My Experience
        </motion.h2>
        <p className="mt-4 text-lg text-purple-200">
          From learning to launching full-scale apps — here's my journey.
        </p>
      </div>

      {/* Timeline Cards */}
      <div className="relative z-10 flex flex-col items-center max-w-3xl mx-auto space-y-12 border-l border-white">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="relative w-full pl-10"
          >
            {/* Timeline Dot */}
            <span className="absolute w-4 h-4 bg-white rounded-full -left-2 top-2" />

            {/* Glassmorphism Card */}
            <div className="p-6 border shadow-md rounded-2xl backdrop-blur-xl bg-white/10 border-white/30">
              <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
              {exp.company && (
                <p className="text-purple-300">{exp.company}</p>
              )}
              <p className="mt-1 text-sm text-purple-200">{exp.date}</p>
              <p className="mt-3 text-base text-purple-100">{exp.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
