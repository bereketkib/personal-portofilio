"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export const EducationSection = () => {
  const achievements = [
    { label: "GPA", value: "3.92" },
    { label: "Distinction", value: "with Honors" },
    { label: "Scholarship", value: "Government" },
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-grid-small-black/[0.2] dark:bg-grid-small-white/[0.2]" />
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white/90 to-white/80 dark:from-gray-900 dark:via-gray-900/90 dark:to-gray-900" />

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
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12"
          >
            Education
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative group"
          >
            <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-blue-600/20 to-cyan-600/20 dark:from-blue-400/10 dark:to-cyan-400/10 blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />

            <div className="relative space-y-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400">
                  Bachelor of Science in Computer And Information Sciences
                </h3>
                <p className="text-lg text-gray-900 dark:text-white font-medium">
                  Higher Colleges of Technology
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  Fujairah, United Arab Emirates
                </p>
              </div>

              <div className="flex flex-wrap gap-6">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="relative group/item"
                  >
                    <motion.span
                      className="block text-xl font-bold text-gray-900 dark:text-white mb-1"
                      whileHover={{ scale: 1.05 }}
                    >
                      {achievement.value}
                    </motion.span>
                    <span className="text-sm text-gray-600 dark:text-gray-400 relative">
                      {achievement.label}
                      <motion.span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 group-hover/item:w-full transition-all duration-300" />
                    </span>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="pt-4 flex flex-wrap gap-3"
              >
                {[
                  "Computer Science",
                  "Software Development",
                  "Network Security",
                  "Cloud Computing",
                ].map((skill, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ delay: index * 0.1 }}
                    className="px-4 py-2 text-sm bg-white/50 dark:bg-gray-800/50 rounded-full backdrop-blur-sm border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
