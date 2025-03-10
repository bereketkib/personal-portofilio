import { motion } from "framer-motion";
import Link from "next/link";
import { useRef, useState } from "react";
import Image from "next/image";

const AboutPreview = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);

  const skills = [
    {
      icon: "/icons/frontend.png", // Add these icons to your public folder
      title: "Frontend",
      items: ["React", "Next.js", "TypeScript"],
      gradient: "from-[#FF3CAC] via-[#784BA0] to-[#2B86C5]",
      bgPattern: "circuit-board",
    },
    {
      icon: "/icons/backend.png",
      title: "Backend",
      items: ["Node.js", "Python", "Java"],
      gradient: "from-[#FF416C] to-[#FF4B2B]",
      bgPattern: "hexagons",
    },
    {
      icon: "/icons/database.png",
      title: "Database",
      items: ["MongoDB", "PostgreSQL", "MySQL"],
      gradient: "from-[#4158D0] via-[#C850C0] to-[#FFCC70]",
      bgPattern: "diagonal-lines",
    },
    {
      icon: "/icons/tools.png",
      title: "Tools",
      items: ["Git", "Docker", "AWS"],
      gradient: "from-[#0093E9] to-[#80D0C7]",
      bgPattern: "plus",
    },
  ];

  return (
    <div className="relative min-h-[70vh] bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 perspective-1000">
      <motion.section
        ref={containerRef}
        className="relative py-32 overflow-hidden min-h-[70vh]"
      >
        {/* 3D Floating Elements */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-24 h-24"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                zIndex: 0,
              }}
              animate={{
                rotateX: [0, 360],
                rotateY: [0, 360],
                z: [-100, 100],
              }}
              transition={{
                duration: Math.random() * 20 + 10,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear",
              }}
            >
              <div
                className={`w-full h-full opacity-[0.08] dark:opacity-[0.05] bg-gradient-to-br shadow-lg ${
                  skills[i % 4].gradient
                }`}
                style={{
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Add a subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white dark:via-gray-900/50 dark:to-gray-900 pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* About Section */}
            <motion.div
              className="relative z-10"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <motion.div
                  className="absolute -inset-4 rounded-2xl"
                  style={{
                    background:
                      "radial-gradient(circle at top left, rgba(255,255,255,0.1), transparent)",
                    backdropFilter: "blur(20px)",
                  }}
                />
                <div className="relative glass-card p-8 rounded-2xl">
                  <motion.h2
                    className="text-5xl sm:text-6xl font-bold"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <span className="inline-block text-black dark:text-white transform hover:scale-105 transition-transform">
                      About
                    </span>{" "}
                    <span className="inline-block transform hover:scale-105 transition-transform bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400">
                      Me
                    </span>
                  </motion.h2>

                  <motion.p
                    className="mt-8 text-xl leading-relaxed text-gray-600 dark:text-gray-300"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    I craft digital experiences with code, bringing ideas to
                    life through elegant solutions and innovative technologies.
                  </motion.p>

                  <motion.div
                    className="mt-10"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    <Link
                      href="/about"
                      className="group relative inline-flex items-center gap-2 px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-full overflow-hidden transform hover:scale-105 transition-all duration-300"
                    >
                      <span className="relative z-10">Discover My Journey</span>
                      <motion.span
                        className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600"
                        initial={{ x: "100%" }}
                        whileHover={{ x: "0%" }}
                        transition={{ duration: 0.3 }}
                      />
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 gap-6 perspective-1000">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="group relative"
                  initial={{ opacity: 0, y: 20, rotateX: 10 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onHoverStart={() => setHoveredSkill(index)}
                  onHoverEnd={() => setHoveredSkill(null)}
                >
                  <motion.div
                    className={`absolute inset-0 rounded-2xl ${skill.gradient} opacity-0 group-hover:opacity-10 dark:group-hover:opacity-20 transition-opacity duration-300`}
                    style={{
                      filter: "blur(20px)",
                      transform: "translateZ(-10px)",
                    }}
                  />
                  <motion.div
                    className="relative glass-card p-6 rounded-2xl transform-gpu transition-all duration-300"
                    style={{
                      transformStyle: "preserve-3d",
                      transform:
                        hoveredSkill === index
                          ? "translateZ(20px)"
                          : "translateZ(0)",
                    }}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <Image
                        src={skill.icon}
                        alt={skill.title}
                        width={40}
                        height={40}
                        className="transform transition-transform group-hover:scale-110"
                      />
                      <h3
                        className={`text-xl font-bold dark:text-white text-gray-950`}
                      >
                        {skill.title}
                      </h3>
                    </div>
                    <ul className="space-y-3">
                      {skill.items.map((item, itemIndex) => (
                        <motion.li
                          key={itemIndex}
                          className="flex items-center gap-2 text-gray-600 dark:text-gray-300"
                          initial={{ x: -10, opacity: 0 }}
                          whileInView={{ x: 0, opacity: 1 }}
                          transition={{ delay: index * 0.1 + itemIndex * 0.1 }}
                        >
                          <motion.span
                            className={`h-2 w-2 rounded-full bg-gray-600 dark:bg-gray-300`}
                            animate={{
                              scale: [1, 1.2, 1],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              repeatType: "reverse",
                            }}
                          />
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default AboutPreview;
