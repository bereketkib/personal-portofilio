"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/about";

export const ExperienceSection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-small-black/[0.2] dark:bg-grid-small-white/[0.2]" />
      <div className="absolute inset-0 bg-gradient-to-r from-gray-50 via-gray-50/90 to-gray-50/80 dark:from-gray-900 dark:via-gray-800/90 dark:to-gray-800/60" />

      <div className="relative container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-16 text-center text-gray-950 dark:text-white"
          >
            Professional{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400">
              Experience
            </span>
          </motion.h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px top-0 h-full w-px bg-gradient-to-b from-blue-600/20 via-cyan-600/20 to-transparent" />

            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className={`relative grid md:grid-cols-2 gap-8 mb-12 ${
                  index % 2 ? "md:rtl" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4">
                  <div className="w-full h-full rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 animate-pulse" />
                </div>

                {/* Content */}
                <div
                  className={`md:contents ${
                    index % 2 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className="col-start-1 md:col-start-auto group">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="relative p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200/50 dark:border-gray-700/50"
                    >
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-600/5 to-cyan-600/5 dark:from-blue-400/5 dark:to-cyan-400/5 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                      <div className="relative">
                        <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400">
                          {exp.title}
                        </h3>
                        <p className="text-lg font-semibold text-gray-900 dark:text-white mt-1">
                          {exp.company}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                          {exp.period} | {exp.location}
                        </p>
                        <ul className="mt-4 space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.1 * i }}
                              className="flex items-start group/item"
                            >
                              <span className="mr-3 mt-1.5 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400" />
                              <span className="text-gray-600 dark:text-gray-300 text-sm relative">
                                {achievement}
                                <span className="absolute inset-x-0 -bottom-0.5 h-px bg-gradient-to-r from-blue-600/0 via-blue-600/40 to-blue-600/0 dark:from-blue-400/0 dark:via-blue-400/40 dark:to-blue-400/0 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                              </span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
