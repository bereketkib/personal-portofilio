"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Rajdhani } from "next/font/google";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";

const rajdhani = Rajdhani({ subsets: ["latin"], weight: ["400", "700"] });

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActivePath = (path: string) => {
    if (path === "Home") return pathname === "/";
    return pathname === `/${path.toLowerCase()}`;
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link
              href="/"
              className={`${rajdhani.className} text-2xl tracking-tighter relative group`}
            >
              <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400">
                B
              </span>
              <span className="font-normal text-gray-900 dark:text-white">
                K
              </span>
              <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex space-x-8">
              {["Home", "About", "Projects", "Contact"].map((item) => (
                <div key={item} className="relative group">
                  <Link
                    href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className={`px-3 py-2 text-sm font-medium transition-all duration-300 ${
                      isActivePath(item)
                        ? "text-blue-600 dark:text-blue-400"
                        : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                    }`}
                  >
                    {item}
                  </Link>
                  <div
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 transform origin-left transition-transform duration-300 ${
                      isActivePath(item)
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Theme Toggler */}
          <div className="flex items-center">
            <button
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110 cursor-pointer"
            >
              {theme === "light" ? (
                // Moon icon for dark mode
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              ) : (
                // Sun icon for light mode
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v2m0 14v2M5.636 5.636l1.414 1.414m10.607 10.607l1.414 1.414M3 12h2m14 0h2M5.636 18.364l1.414-1.414m10.607-10.607l1.414-1.414M12 7a5 5 0 100 10 5 5 0 000-10z"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center ml-4">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative w-10 h-10 focus:outline-none"
            >
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <span
                  className={`absolute h-0.5 w-6 bg-gray-900 dark:bg-white transform transition-all duration-300 ${
                    isMenuOpen ? "rotate-45" : "-translate-y-2"
                  }`}
                />
                <span
                  className={`absolute h-0.5 w-6 bg-gray-900 dark:bg-white transform transition-all duration-300 ${
                    isMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute h-0.5 w-6 bg-gray-900 dark:bg-white transform transition-all duration-300 ${
                    isMenuOpen ? "-rotate-45" : "translate-y-2"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? "max-h-64" : "max-h-0"
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {["Home", "About", "Projects", "Contact"].map((item) => (
              <Link
                key={item}
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 rounded-lg text-base font-medium transition-all duration-300 ${
                  isActivePath(item)
                    ? "bg-gradient-to-r from-blue-500/10 to-cyan-500/10 text-blue-600 dark:text-blue-400"
                    : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
