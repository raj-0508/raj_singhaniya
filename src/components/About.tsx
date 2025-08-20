const About = () => {
  const skills = [
    "Next.js",
    "JavaScript (ES6+)",
    "TypeScript",
    "React",
    "Node.js",
    "HTML & CSS",
    "Tailwind CSS",
    "Git & GitHub",
    "Appwrite",
    "Python",
    "C Programming",
  ];

  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <h2 className="numbered-heading text-3xl font-bold mb-16">About Me</h2>

        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Content */}
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                Hello! I&apos;m Raj, a passionate frontend developer and MCA
                student at{" "}
                <span className="text-teal-400">University of Allahabad</span>.
                My journey into web development started during my undergraduate
                studies, and I&apos;ve been fascinated by the endless
                possibilities of creating beautiful, functional digital
                experiences ever since.
              </p>

              <p>
                I have a strong foundation in modern web technologies, with
                particular expertise in{" "}
                <span className="text-teal-400">Next.js</span> and{" "}
                <span className="text-teal-400">React.js</span>. I&apos;m driven
                by a passion for crafting aesthetic and efficient web
                interfaces, always striving for pixel-perfect layouts and
                optimal user experiences.
              </p>

              <p>
                My approach to development focuses on{" "}
                <span className="text-teal-400">clean code</span>,{" "}
                <span className="text-teal-400">performance optimization</span>,
                and <span className="text-teal-400">accessibility</span>. I
                believe in continuous learning and staying up-to-date with the
                latest trends and best practices in web development.
              </p>

              <p>
                When I&apos;m not coding, you can find me exploring new
                technologies, contributing to open-source projects, or working
                on personal projects that challenge my skills and creativity.
              </p>
            </div>

            <div>
              <p className="text-gray-400 mb-4">
                Here are a few technologies I&apos;ve been working with
                recently:
              </p>

              <div className="grid grid-cols-2 gap-2 max-w-md">
                {skills.map((skill) => (
                  <div key={skill} className="flex items-center space-x-2">
                    <span className="text-teal-400 text-sm">▹</span>
                    <span className="text-sm md:text-base font-mono text-teal-400">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative group">
            <div className="relative max-w-[350px] mx-auto">
              {/* Background overlay */}
              <div className="absolute inset-0 bg-teal-400/20 rounded-lg translate-x-8 translate-y-8 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>

              {/* Image container */}
              <div className="relative bg-gray-800 rounded-lg overflow-hidden border-2 border-teal-400 group-hover:border-teal-300 transition-colors duration-300">
                <div className="aspect-square bg-gradient-to-br from-gray-800 to-gray-700 flex items-center justify-center">
                  {/* Placeholder for profile image */}
                  {/* <div className="w-32 h-32 rounded-full bg-gradient-to-br from-teal-400/20 to-teal-400/10 flex items-center justify-center">
                    <span className="text-4xl font-bold text-teal-400">RS</span>
                  </div> */}
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-teal-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>
        </div>
        {/* Quote */}
        <div className="mt-16 text-center animate-fade-in-up delay-400">
          <blockquote className="text-2xl md:text-3xl text-teal-400 italic">
            &quot;Code is poetry — let&apos;s write beautiful experiences on the web.&quot;
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default About;
