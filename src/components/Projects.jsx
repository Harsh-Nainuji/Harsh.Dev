import React, { useState } from "react";
import Spline from "@splinetool/react-spline";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

// Import assets from src/assets
import coffeeImage from "../assets/coffee-shop.jpeg";
import coffeeVideo from "../assets/coffee-shop.mp4";
import blogImage from "../assets/blog-site.jpeg";
import blogVideo from "../assets/blog-site.mp4";
import hospitalImage from "../assets/child-hospital.jpeg";
import hospitalVideo from "../assets/child-hospital.mp4";
import jobImage from "../assets/job-portal.jpeg"
import jobVideo from "../assets/job-portal.mp4";

const projects = [
  {
    title: "Coffee Shop",
    image: coffeeImage,
    video: coffeeVideo,
    description:
      "A modern, responsive coffee shop website with stylish UI and smooth product showcase, perfect for local cafés and modern businesses.",
  },
  {
    title: "Blog Site",
    image: blogImage,
    video: blogVideo,
    description:
      "Full-stack blog site featuring category filters, admin panel, and clean design. Built using PostgreSQL, Node.js, and React.",
  },
  {
    title: "Child Hospital Website",
    image: hospitalImage,
    video: hospitalVideo,
    description:
      "An informative child healthcare platform with appointment booking, doctor listing, and resourceful content, designed for hospitals.",
  },
  {
    title: "Job Portal",
    image: jobImage,
    video: jobVideo,
    description:
      "Feature-rich job portal for job-seekers and recruiters. Includes resume upload, secure login, admin dashboard, and filtering options.",
  },
];

const ProjectSection = () => {
  const [activeProject, setActiveProject] = useState(null);
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section
      id="projects"
      className="relative flex flex-col-reverse items-center justify-between min-h-screen px-6 pt-24 overflow-hidden bg-gradient-to-b from-violet-900 to-black xl:flex-row lg:px-24"
    >
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-4 text-4xl font-bold text-center text-white"
        >
          Projects
        </motion.h2>
        <p className="mb-12 text-center text-white/70">
          Featuring 10+ GitHub repositories and many more projects coming soon...
        </p>

        {/* Project Cards */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative p-5 bg-white/10 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:scale-[1.02] transition-transform text-white"
              onClick={() => {
                setActiveProject(project);
                setShowVideo(false);
              }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-48 rounded-xl"
              />
              <h3 className="mt-4 text-xl font-semibold text-center">
                {project.title}
              </h3>
              <p className="mt-2 text-sm text-center text-white/80">
                {project.description.slice(0, 90)}...
              </p>
            </motion.div>
          ))}
        </div>

        {/* Extra Message */}
        <p className="mt-12 text-sm italic text-center text-white/70">
          Explore 10+ repositories on GitHub — more amazing projects coming soon...
        </p>
      </div>

      {/* Expanded View */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            className="fixed inset-0 z-[999] flex items-center justify-center backdrop-blur-md bg-black/90 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="relative w-full max-w-5xl p-8 shadow-2xl bg-white/10 backdrop-blur-lg rounded-3xl">
              <button
                onClick={() => setActiveProject(null)}
                className="absolute text-white top-4 right-4 hover:text-red-500"
              >
                <X size={28} />
              </button>

              <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
                {!showVideo ? (
                  <img
                    src={activeProject.image}
                    alt={activeProject.title}
                    className="rounded-xl w-full lg:w-1/2 max-h-[450px] object-cover"
                  />
                ) : (
                  <video
                    src={activeProject.video}
                    controls
                    autoPlay
                    className="rounded-xl w-full lg:w-1/2 max-h-[450px] object-cover"
                  />
                )}

                <div className="flex flex-col w-full gap-4 text-white lg:w-1/2">
                  <h3 className="text-3xl font-bold">{activeProject.title}</h3>
                  <p className="text-white/90">{activeProject.description}</p>

                  {!showVideo && (
                    <button
                      onClick={() => setShowVideo(true)}
                      className="px-6 py-2 mt-4 font-semibold text-black transition-all bg-white rounded-xl hover:bg-violet-300"
                    >
                      ▶ Watch Demo
                    </button>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectSection;
