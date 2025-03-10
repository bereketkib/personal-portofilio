"use client";

import { motion } from "framer-motion";
import { useState, useRef } from "react";
import Image from "next/image";
import { projects } from "@/data/projects";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { HiOutlineSparkles } from "react-icons/hi";

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const containerRef = useRef(null);

  const categories = [
    "all",
    ...new Set(projects.flatMap((project) => project.category)),
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) =>
          project.category.includes(selectedCategory)
        );

  return (
    <>
      <main className="relative pt-64 pb-48 min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        {/* Header Section - Not Sticky */}
        <div className="container mx-auto px-6 mb-8">
          <div className="flex flex-col items-center gap-4">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-600/20 to-cyan-600/20 flex items-center justify-center"
            >
              <HiOutlineSparkles className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white"
            >
              Personal{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400">
                Projects
              </span>
            </motion.h1>
          </div>
        </div>

        {/* Category Filter - Sticky */}
        <div className="sticky top-16 z-40 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md py-4 border-y border-gray-200/20 dark:border-gray-700/20">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category, index) => (
                <motion.button
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all transform hover:scale-105 ${
                    selectedCategory === category
                      ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg"
                      : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </motion.button>
              ))}
            </div>
          </div>
        </div>

        <div className="container mx-auto px-6 py-16" ref={containerRef}>
          <div className="space-y-40">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="flex flex-col gap-12 lg:gap-20 items-center mx-auto max-w-[85%]"
              >
                <div
                  className={`grid lg:grid-cols-2 gap-16 items-center ${
                    index % 2 === 0
                      ? "lg:grid-flow-col"
                      : "lg:grid-flow-col-dense"
                  }`}
                >
                  <motion.div
                    initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    className="space-y-8"
                  >
                    <div className="space-y-4">
                      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                        {project.title}
                      </h2>
                      <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <ul className="space-y-4">
                      {project.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start">
                          <span className="mr-3 mt-2 h-2 w-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600" />
                          <span className="text-gray-600 dark:text-gray-300">
                            {highlight}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-3">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-4 py-2 text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-6 pt-2">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
                        >
                          <FiGithub className="w-5 h-5 group-hover:scale-110 transition-transform" />
                          <span>View Source</span>
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
                        >
                          <FiExternalLink className="w-5 h-5 group-hover:scale-110 transition-transform" />
                          <span>Live Demo</span>
                        </a>
                      )}
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ x: index % 2 === 0 ? 50 : -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    className="relative aspect-[16/10] w-full rounded-xl overflow-hidden group shadow-2xl"
                  >
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-cyan-600/20 group-hover:opacity-0 transition-opacity duration-500 z-10" />
                    <Image
                      src={project.image || "/images/projects/placeholder.webp"}
                      alt={project.title}
                      fill
                      className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </motion.div>
                </div>

                {index !== filteredProjects.length - 1 && (
                  <div className="w-48 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
