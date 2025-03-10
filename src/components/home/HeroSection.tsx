"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const socialLinks = [
    { name: "GitHub", url: "#" },
    { name: "LinkedIn", url: "#" },
    { name: "Twitter", url: "#" },
  ];

  const highlights = [
    { number: "1+", label: "Years Experience" },
    { number: "10+", label: "Projects Completed" },
    { number: "500+", label: "Hours of Coding" },
    { number: "5+", label: "Contributions" },
  ];

  const technologies = [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
  ];

  return (
    <motion.section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ y }}
    >
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-grid-small-black/[0.2] dark:bg-grid-small-white/[0.2]" />
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white/90 to-white/80 dark:from-gray-900 dark:via-gray-900/90 dark:to-gray-900" />

      {/* Animated Circles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute -inset-[100px] opacity-50"
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 15 + i * 5,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <div className="w-full h-full rounded-full border border-blue-500/30 dark:border-blue-400/30" />
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 container mx-auto px-6"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-8"
          >
            <motion.h1
              className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-gray-900 dark:text-white"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.span
                className="inline-block"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring" }}
              >
                Bereket
              </motion.span>{" "}
              <motion.span
                className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring" }}
              >
                Jenay
              </motion.span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="relative"
            >
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                className="absolute inset-0 bg-blue-500/10 dark:bg-blue-400/10 rounded-full blur-3xl"
              />
              <h2 className="relative text-xl sm:text-2xl font-medium text-gray-600 dark:text-gray-300">
                Software Developer
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            >
              Building innovative solutions with modern technologies
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="text-center"
                >
                  <span className="block text-2xl font-bold text-gray-900 dark:text-white">
                    {item.number}
                  </span>
                  <span className="text-xs text-gray-600 dark:text-gray-400">
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-12 flex flex-wrap justify-center gap-3"
            >
              {technologies.map((tech, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                  className="px-4 py-2 rounded-full text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Link
                href="/projects"
                className="group relative inline-flex items-center gap-2 px-6 py-3 text-base font-semibold text-white dark:text-gray-900"
              >
                <span className="absolute inset-0 rounded-full bg-gray-900 dark:bg-white transition-transform duration-300 group-hover:scale-105" />
                <span className="relative">View Projects</span>
                <motion.span
                  className="relative"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="flex justify-center gap-6 pt-8"
            >
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  whileHover={{ y: -5 }}
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors text-xs"
                >
                  {link.name}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-1 h-12 rounded-full bg-gray-300 dark:bg-gray-700"
        >
          <motion.div
            animate={{ y: [0, 32, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-full h-1/3 rounded-full bg-gray-900 dark:bg-white"
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;
