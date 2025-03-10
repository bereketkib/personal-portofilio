"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const stats = [
    { number: "1+", label: "Years Experience" },
    { number: "10+", label: "Projects Completed" },
    { number: "8+", label: "Certifications" },
    { number: "3.92", label: "GPA" },
  ];

  return (
    <motion.section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ y }}
    >
      <div className="absolute inset-0 bg-grid-small-black/[0.2] dark:bg-grid-small-white/[0.2]" />
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white/90 to-white/80 dark:from-gray-900 dark:via-gray-900/90 dark:to-gray-900" />

      <div className="absolute inset-0 overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute -inset-[100px] opacity-40"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 20 + i * 5,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <div className="w-full h-full rounded-full border-2 border-blue-500/30 dark:border-blue-400/30" />
          </motion.div>
        ))}
      </div>

      <motion.div
        style={{ opacity }}
        className="relative container mx-auto px-6"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left space-y-8"
          >
            <div className="space-y-4">
              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                About{" "}
                <motion.span
                  className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring" }}
                >
                  Me
                </motion.span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl"
              >
                Tech-savvy IT Support Specialist and Computer Science graduate,
                passionate about creating innovative solutions and pushing the
                boundaries of what&apos;s possible in tech.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-8 md:gap-12"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="relative group"
                >
                  <motion.span
                    className="block text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-1"
                    whileHover={{ scale: 1.1 }}
                  >
                    {stat.number}
                  </motion.span>
                  <span className="text-sm text-gray-600 dark:text-gray-400 relative">
                    {stat.label}
                    <motion.span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 group-hover:w-full transition-all duration-300" />
                  </span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex gap-4"
            >
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white dark:text-gray-900"
              >
                <span className="absolute inset-0 rounded-full bg-gray-900 dark:bg-white transition-transform duration-300 group-hover:scale-105" />
                <span className="relative">Let&apos;s Connect</span>
                <motion.span
                  className="relative"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative order-first md:order-last"
          >
            <div className="relative w-72 h-72 mx-auto">
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full blur-3xl opacity-30"
              />
              <div className="relative w-full h-full">
                <div className="absolute inset-0 rounded-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 mix-blend-overlay" />
                  <Image
                    src="/images/profile.jpeg"
                    alt="Profile Picture"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </div>
                <motion.div
                  className="absolute -inset-4 rounded-full border-2 border-dashed border-blue-500/30 dark:border-blue-400/30"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
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
