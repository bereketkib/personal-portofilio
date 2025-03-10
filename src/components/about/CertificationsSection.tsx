"use client";

import { motion } from "framer-motion";
import { certifications } from "@/data/about";
import { BsAward } from "react-icons/bs";

export const CertificationsSection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute -inset-[100px] opacity-20"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 25 + i * 5,
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16 space-y-4"
          >
            <BsAward className="w-12 h-12 mx-auto text-blue-600 dark:text-blue-400" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-950 dark:text-white">
              Professional{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400">
                Certifications
              </span>
            </h2>
          </motion.div>

          <div className="grid gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-blue-600/10 to-cyan-600/10 dark:from-blue-400/5 dark:to-cyan-400/5 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl" />

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg flex flex-col md:flex-row items-start md:items-center gap-4"
                >
                  {/* Certificate Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600/10 to-cyan-600/10 dark:from-blue-400/10 dark:to-cyan-400/10 flex items-center justify-center">
                      <BsAward className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                  </div>

                  {/* Certificate Details */}
                  <div className="flex-grow space-y-1">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {cert.issuer}
                    </p>
                  </div>

                  {/* Date with gradient border */}
                  <div className="md:self-end">
                    <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-gradient-to-r from-blue-600/10 to-cyan-600/10 dark:from-blue-400/10 dark:to-cyan-400/10 text-gray-900 dark:text-gray-100 border border-transparent group-hover:border-blue-500/50 dark:group-hover:border-blue-400/50 transition-all">
                      {cert.date}
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Decorative bottom element */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-16 text-center"
          >
            <div className="inline-block p-px rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400">
              <div className="px-6 py-2 rounded-full bg-white dark:bg-gray-900 text-sm text-gray-600 dark:text-gray-400">
                Continuously expanding knowledge and expertise
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
