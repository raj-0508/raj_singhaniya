"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { ThemeToggleButton } from "../ui/theme-toggle-button";
import Image from "next/image";
import DownloadBtn from "../ui/downloadbutton";

interface NavItem {
  name: string;
  href: string;
  hasDropdown?: boolean;
  dropdownItems?: { name: string; href: string; description?: string }[];
}

const navItems: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  // {
  //   name: "Products",
  //   href: "/products",
  //   hasDropdown: true,
  //   dropdownItems: [
  //     { name: "Analytics", href: "/analytics", description: "Track your metrics" },
  //     { name: "Dashboard", href: "/dashboard", description: "Manage your data" },
  //     { name: "Reports", href: "/reports", description: "Generate insights" },
  //   ],
  // },
  { name: "Project", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 backdrop-blur-md bg-white/10 border border-white/30 text-blue-500 ${
        isScrolled ? "backdrop-blur-md shadow-lg" : ""
      }`}
      style={{
        backgroundColor: isScrolled
          ? theme === "dark"
            ? "rgba(0,0,0,0.7)"
            : "rgba(255,255,255,0.7)"
          : "transparent",
        WebkitBackdropFilter: isScrolled ? "blur(16px)" : undefined,
        backdropFilter: isScrolled ? "blur(16px)" : undefined,
        borderBottom: isScrolled ? "1px solid rgba(255,255,255,0.1)" : "none",
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo.png" alt="LOGO" width={90} height={40} />
          </Link>

          <nav className="hidden items-center space-x-8 lg:flex">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() =>
                  item.hasDropdown && setActiveDropdown(item.name)
                }
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center space-x-1 font-medium text-foreground transition-colors duration-200 hover:text-rose-500"
                >
                  <span>{item.name}</span>
                  {item.hasDropdown && <ChevronDown className="h-4 w-4" />}
                </Link>

                <AnimatePresence>
                  {item.hasDropdown && activeDropdown === item.name && (
                    <motion.div
                      className="absolute left-0 top-full mt-2 w-64 overflow-hidden rounded-xl border border-border bg-background/95 shadow-xl backdrop-blur-lg"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                    >
                      {item.dropdownItems?.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className="block px-4 py-3 transition-colors duration-200 hover:bg-muted"
                        >
                          <div className="font-medium text-foreground">
                            {dropdownItem.name}
                          </div>
                          {dropdownItem.description && (
                            <div className="text-sm text-muted-foreground">
                              {dropdownItem.description}
                            </div>
                          )}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          <div className="hidden items-center space-x-4 lg:flex">
            <a href="/sample.png" download>
              <DownloadBtn />
            </a>

            {/* <ThemeToggleButton
              showLabel
              variant="circle-blur"
              start="top-right"
            /> */}
          </div>

          <button
            className="rounded-lg p-2 transition-colors duration-200 hover:bg-muted lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="lg:hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mt-4 space-y-2 rounded-xl border border-border bg-background/95 py-4 shadow-xl backdrop-blur-lg">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-3 font-medium text-foreground transition-colors duration-200 hover:bg-muted"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="space-y-2 px-4 py-2">
                  <a href="/sample.png" download>
                    <DownloadBtn />
                  </a>
                  {/* <div className="text-center">
                    <ThemeToggleButton
                      showLabel
                      variant="circle-blur"
                      start="top-right"
                    />
                  </div> */}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
