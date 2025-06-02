// src/components/SkillSection.jsx
import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";

const skills = [
  {
    name: "React JS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    level: 90,
  },
  {
    name: "HTML5 & CSS3 / Tailwind CSS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    level: 95,
  },
  {
    name: "Bootstrap",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    level: 85,
  },
  {
    name: "jQuery",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg",
    level: 80,
  },
  {
    name: "Responsive Design",
    logo: "https://img.icons8.com/?size=100&id=5zuVgEwv1rTz&format=png&color=000000", // From icons8
    level: 90,
  },
  {
    name: "EJS",
    logo: "https://img.icons8.com/?size=100&id=Pxe6MGswB8pX&format=png&color=000000", // From svgrepo
    level: 80,
  },
  {
    name: "REST APIs",
    logo: "https://www.vectorlogo.zone/logos/json/json-icon.svg",
    level: 95,
  },
  {
    name: "React Hooks",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    level: 80,
  },
  {
    name: "Web Design",
    logo: "https://img.icons8.com/fluency/48/web-design.png", // From icons8
    level: 98,
  },
  {
    name: "Node.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    level: 95,
  },
  {
    name: "Express.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    level: 90,
  },
  {
    name: "MongoDB / PostgreSQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    level: 98,
  },
  {
    name: "Secure Payment Integration",
    logo: "https://img.icons8.com/?size=100&id=U4d2EvS64Bmc&format=png&color=000000", // icons8
    level: 85,
  },
];

const SkillSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <section
      id="skills"
      className="relative z-10 px-6 py-24 overflow-hidden bg-gradient-to-b from-violet-900 to-black sm:px-10 md:px-20"
    >
      
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="z-10 mb-12 text-4xl font-bold text-center text-white"
      >
        My Skill Timeline
      </motion.h2>

      {/* Skill Cards */}
      <div
        ref={ref}
        className="z-10 flex flex-col gap-8 overflow-x-auto whitespace-nowrap scrollbar-hide md:flex-row md:flex-wrap"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.1, duration: 0.6, type: "spring" }}
            className="relative flex-shrink-0 w-full max-w-sm p-6 mx-auto text-white bg-white border bg-opacity-10 border-white/20 rounded-2xl backdrop-blur-lg"
          >
            <div className="flex items-center mb-4 space-x-4">
              <img
                src={skill.logo}
                alt={skill.name}
                className="object-contain w-10 h-10"
              />
              <h3 className="text-xl font-semibold">{skill.name}</h3>
            </div>

            <div className="w-full h-3 overflow-hidden rounded-full bg-white/20">
              <motion.div
                initial={{ width: 0 }}
                animate={inView ? { width: `${skill.level}%` } : {}}
                transition={{ duration: 1.2, delay: index * 0.15 }}
                className="h-full rounded-full bg-violet-500"
              />
            </div>
            <span className="block mt-2 text-sm text-right text-purple-300">
              {skill.level}%
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillSection;
