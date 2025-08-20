// "use client";

import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

function Project() {
  const featuredProjects = [
    {
      title: "TODO with Context API",
      description:
        "A modern Todo App built with React.js, Context API for state management, and LocalStorage for persistent data. Features include add, edit, delete, complete, and save todos with a clean UI using Tailwind CSS.",
      image: "/project/Todo.png",
      technologies: [
        "React",
        "Context API",
        "LocalStorage",
        "Tailwind CSS",
        "JavaScript",
        "Responsive Design",
      ],
      githubUrl: "https://github.com/raj-0508/TODO_with_ContextAPI",
      liveUrl: "https://todo-with-context-api-kappa.vercel.app",
    },
    {
      title: "Authentication & Authorization System",
      description:
        "This project is a modern authentication system built using Next.js (App Router), TypeScript, ShadCN UI, and Appwrite. It supports sign up, login, logout, session-based user context, and Google OAuth, all styled with ShadCN UI and deployed via Vercel.",
      image: "/project/authentication.png",
      technologies: [
        "Next.js",
        "TypeScript",
        "ShadCN UI",
        "Appwrite",
        "Tailwind CSS",
        "Responsive Design",
      ],
      githubUrl: "https://github.com/raj-0508/authentication_app_in_next.js",
      liveUrl: "https://authentication-app-in-next-js.vercel.app",
    },
    {
      title: "React Image Slider",
      description:
        "A responsive React Image Slider built with Tailwind CSS, featuring auto-play, hover pause, and manual controls using React Hooks.",
      image: "/project/Image-Slider.png",
      technologies: [
        "React",
        "JavaScript",
        "Tailwind CSS",
        "Responsive Design",
      ],
      githubUrl: "https://github.com/raj-0508/Image_Slider",
      liveUrl: "https://image-slider-alpha-seven.vercel.app",
    },
    {
      title: "Learn React Router",
      description:
        "This project is a hands-on practice for understanding and implementing routing in React applications using the React Router library. It includes basic navigation, route parameters, and nested routes.",
      image: "/project/React-Router.png",
      technologies: [
        "React",
        "JavaScript",
        "Tailwind CSS",
        "Responsive Design",
      ],
      githubUrl: "https://github.com/raj-0508/Learn_React_Router",
      liveUrl: "https://learn-react-router-alpha.vercel.app",
    },
    {
      title: "RODE web clone",
      description:
        "This project demonstrates the creation of a responsive website using Tailwind CSS, a utility-first CSS framework. The site adapts beautifully across different screen sizes and devices while maintaining high performance and design consistency.",
      image: "/project/rode.png",
      technologies: [
        "HTML",
        "Tailwind CSS",
        "Responsive Design",
        "Flexbox",
        "Grid",
      ],
      githubUrl: "https://github.com/raj-0508/Rode.com-Web-Clone",
      liveUrl: "https://rode-com-web-clone.vercel.app",
    },
    {
      title: "React Resume Practice",
      description:
        "A modern, responsive portfolio website built using React, Vite, and Tailwind CSS. Features a clean design, interactive UI, and mobile-friendly layout. Ideal for showcasing projects and skills.",
      image: "/project/Portfolio.png",
      technologies: [
        "React",
        "Vite",
        "Tailwind CSS",
        "JavaScript",
        "Responsive Design",
      ],
      githubUrl: "https://github.com/raj-0508/React-Resume-Practice",
      liveUrl: "https://react-resume-practice.vercel.app",
    },
    {
      title: "PW Skills Clone",
      description:
        "A pixel-perfect clone of the PW Skills website, demonstrating advanced CSS techniques, responsive design principles, and attention to detail in recreating complex layouts.",
      image: "/project/Todo.png",
      technologies: ["HTML5", "CSS3", "Responsive Design", "Flexbox", "Grid"],
      githubUrl: "https://github.com/raj-0508/PW-Skills-Clone",
      liveUrl: "https://pw-skills-clone-chi.vercel.app",
    },
  ];

  const content = featuredProjects.map((project) => ({
    title: project.title,
    description: (
      <div className="space-y-3">
        {/* use div instead of <p> to avoid nested <p> issues */}
        <div>{project.description}</div>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((t) => (
            <span
              key={t}
              className="px-2 py-1 text-xs bg-gray-800 text-teal-400 rounded-md"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-6 pt-2">
          <Link
            href={project.githubUrl}
            target="_blank"
            className="flex items-center gap-2 text-teal-400 hover:text-white"
          >
            <Github className="w-5 h-5" /> Source Code
          </Link>
          <Link
            href={project.liveUrl}
            target="_blank"
            className="flex items-center gap-2 text-teal-400 hover:text-white"
          >
            <ExternalLink className="w-5 h-5" /> Live Link
          </Link>
        </div>
      </div>
    ),
    content: (
      <div className="relative w-full h-full">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="rounded-lg object-cover"
          sizes="(max-width: 768px) 100vw, 600px"
        />
      </div>
    ),
  }));

  return (
    <section id="projects" className="section-padding ">
      <h2 className="numbered-heading text-3xl font-bold mb-16 max-w-5xl px-6 mx-auto">
        Projects I&apos;ve Built
      </h2>

      {/* Desktop */}
      <div className="w-full py-10 hidden md:block">
        <StickyScroll content={content} />
      </div>

      {/* Mobile */}
      <div className="space-y-8 mb-24 max-w-xl mx-auto md:hidden">
        {featuredProjects.map((project) => (
          <div
            key={project.title}
            className="relative overflow-hidden rounded-xl shadow-lg"
          >
            {/* Background Image */}
            <div className="absolute inset-0 blur-[.75px]">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-black/60" />
            </div>

            {/* Content */}
            <div className="relative z-10 p-8 flex flex-col items-start space-y-4">
              <p className="text-teal-400 font-mono text-sm">
                Featured Project
              </p>
              <h3 className="text-3xl font-bold text-white">{project.title}</h3>
              <div className="text-gray-100 max-w-xl">{project.description}</div>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="skill-tag bg-teal-400/20 text-teal-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center space-x-6 mt-4">
                <Link
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-teal-400 hover:text-white transition"
                >
                  <Github className="w-5 h-5" />
                  <span>Source Code</span>
                </Link>
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-teal-400 hover:text-white transition"
                >
                  <ExternalLink className="w-5 h-5" />
                  <span>Live Link</span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-16">
        <Link
          href="https://github.com/raj-0508"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          Explore More Projects
        </Link>
      </div>
    </section>
  );
}

export default Project;
