import Link from "next/link";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center section-padding"
    >
      <div className="container-custom">
        <div className="max-w-4xl">
          <div className="space-y-8">
            {/* Greeting */}
            <p className="text-teal-400 font-mono text-base md:text-xl fade-in">
              Hi, I&apos;m
            </p>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="hero-text text-white fade-in stagger-1">
                Raj Singhaniya.
              </h1>
              <h2 className="hero-subtitle fade-in stagger-2">
                I build modern, user-focused web experiences that captivate and
                convert.
              </h2>
            </div>

            {/* Description */}
            <div className="max-w-2xl fade-in stagger-3">
              <p className="text-lg text-gray-400 leading-relaxed">
                I&apos;m a{" "}
                <span className="text-teal-400 font-semibold">
                  Frontend Developer
                </span>{" "}
                with a passion for crafting who crafts{" "}
                <span className="text-teal-400 font-semibold">
                  mission-critical web applications
                </span>{" "}
                that power modern businesses. Currently advancing my expertise
                with an MCA at{" "}
                <span className="text-teal-400">Allahabad University</span>, I
                engineer{" "}
                <span className="text-teal-400 font-semibold">
                  industry-leading digital experiences
                </span>{" "}
                using cutting-edge technologies like{" "}
                <span className="text-teal-400">Next.js</span>,
                <span className="text-teal-400">React.js</span>,
                <span className="text-teal-400">TypeScript</span>,{" "}
                <span className="text-teal-400">Node.js</span>, and to deliver
                <span className="text-teal-400 font-semibold">
                  blazing-fast, scalable solutions
                </span>{" "}
                that transform user engagement and accelerate business growth.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-8 fade-in stagger-4">
              <button
                onClick={() => {
                  const element = document.getElementById("projects");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                className="btn-primary group"
              >
                <span>View my Work</span>
                <svg
                  className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>

              <button
                onClick={() => {
                  const element = document.getElementById("contact");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                className="btn-ghost group"
              >
                <span>Get In Touch</span>
                <svg
                  className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Contact Elements */}
      <div className="fixed left-10 top-0 hidden lg:flex flex-col items-center gap-8">
        <div className="w-px h-48 bg-teal-400"></div>
        <div className="flex flex-col gap-8">
          {[
            {
              href: "https://github.com/raj-0508",
              icon: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
            },
            {
              href: "https://www.linkedin.com/in/raj-05r08/",
              icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
            },
            {
              href: "mailto:rajsinghaniya0508@gmail.com",
              icon: "M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h.749L12 10.855l9.615-7.034h.749c.904 0 1.636.732 1.636 1.636z",
            },
            {
              href: "https://www.instagram.com/raj._.singhaniya/",
              icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
            },
          ].map((social, index) => (
            <Link
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className=" text-teal-400 hover:text-teal-700 transition-colors duration-300 hover:-translate-y-1 transform"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d={social.icon} />
              </svg>
            </Link>
          ))}
        </div>
      </div>

      <div className="fixed right-10 bottom-0 hidden lg:flex flex-col items-center gap-8">
        <Link
          href="mailto:rajsinghaniya0508@gmail.com"
          className="text-teal-400 hover:text-teal-700 transition-colors duration-300 writing-mode-vertical text-base font-mono tracking-widest hover:-translate-y-1 transform"
          style={{ writingMode: "vertical-rl" }}
        >
          rajsinghaniya0508@gmail.com
        </Link>
        <div className="w-px h-24 bg-teal-400"></div>
      </div>
    </section>
  );
};

export default Hero;
