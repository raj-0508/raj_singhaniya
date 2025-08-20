"use client";

import { useState } from "react";

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);

  const experiences = [
    {
      title: "MCA Student",
      company: "University of Allahabad",
      period: "2024 - Present",
      description: [
        "Pursuing Master of Computer Applications with focus on modern web technologies and software development",
        "Building expertise in full-stack development, data structures, and algorithms",
        "Working on various academic projects using Next.js, Node.js, and modern JavaScript",
        "Collaborating with peers on group projects and participating in coding competitions",
      ],
      technologies: [
        "Next.js",
        "React",
        "Node.js",
        "JavaScript",
        "TypeScript",
        "Python",
        "Data Structures",
        "Algorithms",
      ],
    },
    {
      title: "Frontend Developer",
      company: "Personal Projects",
      period: "2021 - Present",
      description: [
        "Developed multiple responsive web applications using Next.js and modern TypeScript",
        "Created pixel-perfect clones of popular websites to master CSS and layout techniques",
        "Built interactive applications with state management using Context API and local storage",
        "Implemented best practices for code organization, performance optimization, and accessibility",
      ],
      technologies: [
        "Next.js",
        "TypeScript",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Git",
      ],
    },
    {
      title: "Self-Taught Developer",
      company: "Independent Learning",
      period: "2024 - Present",
      description: [
        "Started learning web development through online resources and documentation",
        "Built foundational knowledge in HTML, CSS, and JavaScript",
        "Progressed to modern frameworks and libraries including Next.js and React.js",
        "Developed problem-solving skills through coding challenges and personal projects",
      ],
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Next.js",
        "Problem Solving",
      ],
    },
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <h2 className="numbered-heading text-3xl font-bold mb-16">
          Education and Skills
        </h2>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Tab List */}
          <div className="flex lg:flex-col overflow-x-auto lg:overflow-x-visible">
            <div className="flex lg:flex-col border-b lg:border-b-0 lg:border-l border-gray-700">
              {experiences.map((exp, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`px-6 py-3 text-left text-sm font-mono whitespace-nowrap lg:whitespace-normal transition-all duration-300 border-b-2 lg:border-b-0 lg:border-l-2 ${
                    activeTab === index
                      ? "border-teal-400 text-teal-400 bg-gray-800/50"
                      : "border-transparent text-gray-600 hover:text-teal-400 hover:bg-gray-800/30"
                  }`}
                >
                  {exp.company}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="flex-1 min-h-[400px]">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`${
                  activeTab === index ? "block" : "hidden"
                } space-y-6`}
              >
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {exp.title}{" "}
                    <span className="text-teal-400">@ {exp.company}</span>
                  </h3>
                  <p className="text-sm font-mono text-gray-600 mt-1">
                    {exp.period}
                  </p>
                </div>

                <div className="space-y-4">
                  {exp.description.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start space-x-3">
                      <span className="text-teal-400 text-sm mt-2">▹</span>
                      <p className="text-gray-400 leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="skill-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
