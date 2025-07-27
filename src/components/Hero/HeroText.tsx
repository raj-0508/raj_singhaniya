import { FlipWords } from "./FlipWords";
import { motion } from "motion/react";
import { Quantico } from "next/font/google";
const quantico = Quantico({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-quantico",
});

const HeroText = () => {
  const words = [
    "Responsive",
    "Interactive",
    "Modern",
    "Secure",
    "Scalable",
    "Accessible",
  ];
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <div
      className={`z-10 mt-20 text-center md:mt-40 md:text-left bg-clip-text max-w-7xl w-full mx-auto px-8 ${quantico.className}`}
    >
      {/* Desktop View */}
      <div className="flex-col hidden md:flex c-space text-white">
        {/* <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-rose-900 via-red-700 to-red-500 tracking-tight text-center"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.5, duration: 1 }}
        >
          <Typewriter
            words={["👋 Hi, I'm Raj Singhaniya"]}
            loop={false}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </motion.h1> */}
        <motion.h1
          className="text-4xl font-medium"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hi I&apos;m RAJ
        </motion.h1>
        <div className="flex flex-col items-start">
          <motion.p
            className="text-5xl font-semibold"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            Frontend Developer <br /> I specialize in building
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <FlipWords
              words={words}
              className="font-extrabold text-7xl"
            />
          </motion.div>
          <motion.p
            className="text-4xl font-medium"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            Web Applications{" "}
          </motion.p>
        </div>
      </div>
      {/* Mobile View */}
      <div className="flex- flex-col space-y-6 md:hidden text-white">
        <motion.p
          className="text-4xl font-medium"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hi,I&apos;m Raj
        </motion.p>
        <div>
          <motion.p
            className="text-5xl font-semibold"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            Frontend Developer
          </motion.p>
          <motion.p
            className="text-5xl font-bold"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            Building
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <FlipWords
              words={words}
              className="font-extrabold text-7xl"
            />
          </motion.div>
          <motion.p
            className="text-4xl font-semibold"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            Web Applications
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default HeroText;
