"use client";

import { useState } from "react";
import Project from "./Project";
import { myProjects } from "./constants";
import { motion, useMotionValue, useSpring } from "framer-motion";

const Projects = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 10, stiffness: 50 });
  const springY = useSpring(y, { damping: 10, stiffness: 50 });
  const handleMouseMove = (e: { clientX: number; clientY: number }) => {
    x.set(e.clientX + 20);
    y.set(e.clientY + 20);
  };
  const [preview, setPreview] = useState<string | null>(null);
  return (
    <section
      id="projects"
      onMouseMove={handleMouseMove}
      className="relative c-space section-spacing max-w-7xl mx-auto py-20"
    >
      <h2 className="text-heading inline-block bg-gradient-to-r from-rose-500 via-pink-500 to-blue-500 bg-clip-text text-transparent">
        My Selected Projects
      </h2>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full" />
      {myProjects.map((project) => (
        <Project
          key={project.id}
          {...project}
          subDescription={
            Array.isArray(project.subDescription)
              ? project.subDescription.join(", ")
              : project.subDescription
          }
          setPreview={setPreview}
        />
      ))}
      {preview && (
        <motion.img
          className="fixed top-0 left-0 z-50 object-cover h-56 rounded-lg shadow-lg pointer-events-none w-80"
          src={preview}
          style={{ x: springX, y: springY }}
        />
      )}
      <a
        href="https://github.com/raj-0508"
        target="_blank"
        rel="noopener noreferrer"
        className="block w-fit mx-auto mt-8 text-center text-lg font-semibold text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-5 py-3 rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
      >
        🚀 To See All My Projects 👉 Click Me 👈
      </a>
    </section>
  );
};

export default Projects;
