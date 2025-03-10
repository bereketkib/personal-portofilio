"use client";

import { motion } from "framer-motion";

export const SkillsSection = () => {
  const categories = {
    Frontend: [
      "React",
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "HTML5",
      "CSS3",
    ],
    Backend: ["Node.js", "Express", "Python", "Java", "SQL"],
    "Tools & Others": ["Git", "Docker", "AWS", "Linux", "Agile"],
  };

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Animated background circles */}
      <div className="absolute inset-0">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute -inset-[100px] opacity-30"
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
            className="text-3xl md:text-4xl font-bold mb-12"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400">
              <span className="text-gray-950 dark:text-white">Skills & </span>
              Technologies
            </span>
          </motion.h2>

          <div className="space-y-12">
            {Object.entries(categories).map(
              ([category, categorySkills], categoryIndex) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: categoryIndex * 0.2 }}
                  className="relative group"
                >
                  <div className="relative space-y-6">
                    <h3 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400">
                      {category}
                    </h3>
                    <div className="flex flex-wrap gap-6">
                      {categorySkills.map((skill, index) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="group/skill relative"
                        >
                          <motion.span
                            whileHover={{ y: -2 }}
                            className="relative inline-flex items-center text-gray-800 dark:text-gray-200 text-sm font-medium"
                          >
                            {skill}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 group-hover/skill:w-full transition-all duration-300 ease-out" />
                          </motion.span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )
            )}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-16 p-8 bg-white/50 dark:bg-gray-800/50 rounded-2xl backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-lg relative group"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-600/10 to-cyan-600/10 dark:from-blue-400/5 dark:to-cyan-400/5 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl" />
            <p className="relative text-gray-600 dark:text-gray-300 text-center font-medium">
              Continuously learning and exploring new technologies to stay at
              the forefront of web development.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
