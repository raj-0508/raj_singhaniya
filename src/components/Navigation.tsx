"use client";

import { useState, useEffect } from "react";
import { MoveDown, X } from "lucide-react";
import Link from "next/link";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false); // close menu after clicking
    }
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gray-900/80 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              href="#home"
              className="text-2xl font-bold font-mono text-teal-400 hover:text-teal-300 transition-all duration-300 hover:scale-105"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              &lt;Raj/&gt;
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {[
              { name: "About", id: "about" },
              { name: "Experience", id: "experience" },
              { name: "Projects", id: "projects" },
              { name: "Contact", id: "contact" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-base font-mono text-gray-400 hover:text-teal-400 transition-colors duration-300 cursor-pointer"
              >
                {item.name}
              </button>
            ))}

            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm font-mono flex items-center gap-2"
              download
            >
              Resume
              <div className="animate-bounce rounded-full bg-teal-400 hover:bg-green-500 p-1.5 text-white">
                <MoveDown size={14} strokeWidth={3} />
              </div>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex flex-col gap-1.5 items-end p-2"
            >
              {/* Top line - longest */}
              <span
                className={`h-0.5 bg-teal-400 rounded transition-all duration-300 ${
                  menuOpen ? "w-6 rotate-45 translate-y-2 bg-teal-400" : "w-8"
                }`}
              ></span>

              {/* Middle line - medium */}
              <span
                className={`h-0.5 bg-teal-400 rounded transition-all duration-300 ${
                  menuOpen ? "opacity-0" : "w-6"
                }`}
              ></span>

              {/* Bottom line - shortest */}
              <span
                className={`h-0.5 bg-teal-400 rounded transition-all duration-300 ${
                  menuOpen ? "w-6 -rotate-45 -translate-y-2 bg-teal-400" : "w-4"
                }`}
              ></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-52 bg-gray-900/95 backdrop-blur-md shadow-lg transform transition-transform duration-300 z-40
        ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Close button */}
        <div className="flex justify-end p-4">
          <button
            onClick={() => setMenuOpen(false)}
            className="text-gray-400 hover:text-teal-400"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Links */}
        <div className="flex flex-col items-start space-y-6 p-6 bg-gray-900">
          {[
            { name: "About", id: "about" },
            { name: "Experience", id: "experience" },
            { name: "Projects", id: "projects" },
            { name: "Contact", id: "contact" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-lg font-mono text-gray-300 hover:text-teal-400 transition-colors"
            >
              {item.name}
            </button>
          ))}

          <Link
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm font-mono"
            download
          >
            Resume
          </Link>
        </div>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </header>
  );
};

export default Navigation;
