"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="flex items-center justify-center p-5 md:pl-16 transition-colors duration-500"
    >
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left side: Text with animation */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-6"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-rose-500 via-blue-950 to-blue-500 bg-clip-text text-transparent">
            About Me
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}
            className="text-lg text-gray-700 dark:text-gray-300"
          >
            I’m{" "}
            <span className="text-black dark:text-white font-semibold">
              Raj Singhaniya
            </span>
            , a passionate Frontend Developer with a bold approach to crafting
            modern, responsive, and visually captivating user interfaces. I
            specialize in React, Next.js, and Tailwind CSS, and I thrive on
            transforming complex ideas into seamless digital experiences.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}
            className="text-lg text-gray-700 dark:text-gray-300"
          >
            My journey reflects commitment, creativity, and continuous growth. I
            love pushing the boundaries of frontend development — from animation
            to performance optimization — ensuring every project I touch is
            sleek, interactive, and built to impress.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}
            className="italic text-lg text-gray-600 dark:text-gray-400 border-l-4 border-indigo-400 dark:border-indigo-500 pl-4"
          >
            I believe great design is a conversation between detail and emotion.
            Let’s build experiences that captivate.
          </motion.p>
        </motion.div>

        {/* Right side: Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
          className="flex justify-center"
        >
          <div className="relative w-fit">
            {/* Gradient Border Behind the Image */}
            <div className="absolute inset-0 -z-10 rotate-6 rounded-xl bg-gradient-to-r from-rose-500  to-blue-500 blur-sm" />

            {/* Actual Image */}
            <div className="relative w-72 h-96 rounded-xl overflow-hidden">
              <Image
                src="/raj.jpg"
                alt="Raj Singhaniya"
                fill
                className="object-cover rounded-xl"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
