"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

const ContactPreview = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Background parallax effect
  const backgroundY = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  // Card animation values
  const rotate = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);

  const contactMethods = [
    {
      title: "Email",
      description: "Drop me a line anytime",
      icon: "📧",
      link: "mailto:bekibreab@gmail.com",
      color: "from-blue-500/20 to-cyan-500/20",
    },
    {
      title: "LinkedIn",
      description: "Let's connect professionally",
      icon: "💼",
      link: "https://www.linkedin.com/in/bereket-jenay-2107821b8/",
      color: "from-purple-500/20 to-pink-500/20",
    },
    {
      title: "GitHub",
      description: "Check out my code",
      icon: "💻",
      link: "https://github.com/bereketkib",
      color: "from-emerald-500/20 to-teal-500/20",
    },
  ];

  return (
    <section
      ref={containerRef}
      className="relative py-24 overflow-hidden bg-white dark:bg-gray-900"
    >
      {/* Parallax Background */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 -z-10"
      />
      <div className="absolute inset-0 bg-grid-gray-900/[0.02] dark:bg-grid-gray-100/[0.02] -z-10" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            Let&apos;s Work Together
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            I&apos;m always open to discussing new projects, creative ideas, or
            opportunities to be part of your visions.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, rotate: 0 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${method.color} dark:opacity-40 rounded-2xl blur-xl opacity-25 transition-opacity duration-300 group-hover:opacity-50`}
              />
              <motion.a
                href={method.link}
                style={{ rotate, scale }}
                whileHover={{ scale: 1.05, rotate: 0 }}
                whileTap={{ scale: 0.98 }}
                className="relative block p-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <motion.span
                  initial={{ rotate: -5 }}
                  animate={{ rotate: 0 }}
                  className="text-4xl mb-4 block"
                >
                  {method.icon}
                </motion.span>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {method.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {method.description}
                </p>
                <motion.span
                  className="absolute bottom-4 right-4 text-gray-400 dark:text-gray-500 transition-transform duration-300 group-hover:translate-x-1"
                  whileHover={{ x: 5 }}
                >
                  →
                </motion.span>
              </motion.a>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 text-lg font-semibold text-white dark:text-gray-900 bg-gray-900 dark:bg-white rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors duration-300"
          >
            Get in Touch
            <motion.span
              className="ml-2"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              →
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactPreview;
