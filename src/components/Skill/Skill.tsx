"use client";

import Image from "next/image";
import SparkleCloud from "./SparkleCloud";
import { motion } from "framer-motion";

const skills = [
  { name: "HTML", ext: "png" },
  { name: "CSS", ext: "png" },
  { name: "Bootstrap", ext: "svg" },
  { name: "Tailwind", ext: "png" },
  { name: "Javascript", ext: "svg" },
  { name: "React", ext: "png" },
  { name: "Redux", ext: "svg" },
  { name: "Vite", ext: "png" },
  { name: "NodeJs", ext: "svg" },
  { name: "NextJs", ext: "png" },
  { name: "Git", ext: "svg" },
  { name: "Github", ext: "svg" },
  { name: "Shadcn-ui", ext: "svg" },
  { name: "MaterialUI", ext: "svg" },
  { name: "Vercel", ext: "svg" },
  { name: "Netlify", ext: "svg" },
  { name: "Appwrite", ext: "svg" },
  { name: "C", ext: "svg" },
  { name: "Python", ext: "svg" },
  { name: "C(Sharp)", ext: "svg" },
];

const Skills = () => {
  return (
    <section
      id="skils"
      className="relative bg-[#0A0118] dark:bg-transparent overflow-hidden"
    >
      <div className=" gap-10 px-8 py-24 max-w-screen-xl mx-auto relative z-10 ">
        {/* Section Heading */}
        <motion.h2
          className="text-center mb-20 text-5xl md:text-6xl font-extrabold leading-tight"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="block sm:inline">My</span>{" "}
          <span className="inline-block">
            Tech Stack
          </span>
        </motion.h2>

        <div className="max-w-3xl mx-auto flex flex-wrap justify-center items-center gap-6 relative">
          {/* Glass Video Background */}
          <div className="absolute top-3/5 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[-5] pointer-events-none w-[700px] h-[400px] ">
            <video
              src="/stack/cards-video.webm"
              autoPlay
              loop
              muted
              playsInline
              className="rounded-lg shadow-lg w-full"
            />
          </div>

          {/* Skills Icons */}
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className="flex flex-col items-center gap-2"
            >
              <Image
                src={`/stack/${skill.name}.${skill.ext}`}
                alt={skill.name}
                width={64}
                height={64}
                className="h-16 w-16 object-contain drop-shadow-lg"
              />
              <span className="text-xs font-semibold text-white">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Decorative Skills Background Text */}
        <motion.div
          className="absolute text-[9rem] font-bold bg-gradient-to-t from-transparent via-[#c2c2c213] to-transparent bg-clip-text text-transparent contrast-125 select-none right-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Skills
        </motion.div>
      </div>
      <SparkleCloud />
    </section>
  );
};

export default Skills;
