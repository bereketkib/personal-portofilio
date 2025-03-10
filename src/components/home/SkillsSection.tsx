"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

const SkillsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.8, 1, 1, 0.8]
  );
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [20, 0, -20]);

  const skills = [
    {
      category: "Languages",
      icon: "🔤",
      items: [
        { name: "TypeScript", proficiency: 90 },
        { name: "JavaScript", proficiency: 95 },
        { name: "Python", proficiency: 85 },
        { name: "Java", proficiency: 80 },
      ],
      gradient: "from-blue-500 via-blue-700 to-blue-500",
      shadowGradient: "from-blue-500/30 to-blue-700/30",
    },
    {
      category: "Frontend",
      icon: "🎨",
      items: [
        { name: "React", proficiency: 95 },
        { name: "Next.js", proficiency: 90 },
        { name: "HTML/CSS", proficiency: 99 },
        { name: "EJS view", proficiency: 80 },
      ],
      gradient: "from-blue-500 via-blue-700 to-blue-500",
      shadowGradient: "from-blue-500/30 to-blue-700/30",
    },
    {
      category: "Backend",
      icon: "⚙️",
      items: [
        { name: "Node.js", proficiency: 90 },
        { name: "Express", proficiency: 85 },
        { name: "Django", proficiency: 70 },
        { name: "Spring", proficiency: 75 },
      ],
      gradient: "from-blue-500 via-blue-700 to-blue-500",
      shadowGradient: "from-blue-500/30 to-blue-700/30",
    },
    {
      category: "Database",
      icon: "🗄️",
      items: [
        { name: "PostgreSQL", proficiency: 90 },
        { name: "MongoDB", proficiency: 85 },
        { name: "Redis", proficiency: 75 },
        { name: "MySQL", proficiency: 85 },
      ],
      gradient: "from-blue-500 via-blue-700 to-blue-500",
      shadowGradient: "from-blue-500/30 to-blue-700/30",
    },
  ];

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen py-32 overflow-hidden perspective-3000 bg-gray-400/20 dark:bg-gray-900/90"
    >
      {/* Dynamic Background */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
      />

      {/* Animated Grid */}
      <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]" />

      {/* 3D Floating Elements */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-64 h-64 -z-10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transformStyle: "preserve-3d",
            }}
            animate={{
              rotateX: [0, 360],
              rotateY: [0, 360],
              z: [-200, 200],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
          >
            <div
              className={`w-full h-full opacity-[0.08] dark:opacity-[0.05] bg-gradient-to-br ${
                i % 2 === 0
                  ? "from-blue-500 via-purple-500 to-pink-500"
                  : "from-emerald-500 via-teal-500 to-cyan-500"
              } rounded-[30%] blur-2xl`}
            />
          </motion.div>
        ))}
      </div>

      <motion.div
        style={{ opacity, scale }}
        className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8"
      >
        <motion.div
          style={{ rotateX }}
          className="text-center max-w-3xl mx-auto perspective-1000"
        >
          <motion.h2
            className="text-6xl sm:text-7xl font-bold tracking-tight"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 dark:from-blue-400 dark:via-cyan-400 dark:to-blue-400">
              Skills & Expertise
            </span>
          </motion.h2>
          <motion.p
            className="mt-8 text-xl text-gray-600 dark:text-gray-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Mastering modern technologies to create exceptional digital
            experiences
          </motion.p>
        </motion.div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateX: 30 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              onHoverStart={() => setHoveredSkill(index)}
              onHoverEnd={() => setHoveredSkill(null)}
              className="group relative perspective-1000"
            >
              <motion.div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${skill.gradient} opacity-0 group-hover:opacity-10 dark:group-hover:opacity-20 transition-all duration-500`}
                style={{
                  filter: "blur(20px)",
                  transform:
                    hoveredSkill === index
                      ? "translateZ(-50px)"
                      : "translateZ(0)",
                }}
              />
              <motion.div
                className="relative glass-morphism p-8 rounded-2xl transform-gpu transition-all duration-500"
                style={{
                  transformStyle: "preserve-3d",
                  transform:
                    hoveredSkill === index
                      ? "translateZ(50px)"
                      : "translateZ(0)",
                }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <motion.span
                    className="text-5xl"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {skill.icon}
                  </motion.span>
                  <h3
                    className={`text-2xl font-bold text-gray-800 dark:text-gray-200`}
                  >
                    {skill.category}
                  </h3>
                </div>
                <ul className="space-y-6">
                  {skill.items.map((item, itemIndex) => (
                    <motion.li
                      key={itemIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + itemIndex * 0.1 }}
                    >
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-800 dark:text-gray-200 font-medium">
                          {item.name}
                        </span>
                        <span className="text-gray-500 dark:text-gray-400 font-mono">
                          {item.proficiency}%
                        </span>
                      </div>
                      <div className="relative h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.proficiency}%` }}
                          transition={{ duration: 1.5, ease: "easeOut" }}
                          className={`absolute h-full rounded-full bg-gradient-to-r ${skill.gradient}`}
                        >
                          <motion.div
                            className="absolute inset-0 bg-white opacity-30"
                            animate={{
                              x: ["-100%", "100%"],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                          />
                        </motion.div>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default SkillsSection;
