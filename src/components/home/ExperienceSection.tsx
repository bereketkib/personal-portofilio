"use client";

import { useEffect, useRef } from "react";

const ExperienceSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show");
          }
        });
      },
      {
        rootMargin: "0px",
        threshold: 0.2,
      }
    );

    const hiddenElements = document.querySelectorAll(".animate-on-scroll");
    hiddenElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      period: "Aug 2023 – Dec 2024",
      role: "IT Support",
      company: "Fujairah Aviation Academy",
      location: "Fujairah, UAE",
      description:
        "Providing comprehensive IT support and system maintenance for aviation academy operations",
      achievements: [
        "Provided Tier 1 and Tier 2 IT support to over 100 internal users, ensuring 98% issue resolution within SLA timeframes",
        "Implemented troubleshooting strategies that reduced recurring IT issues by 30%",
        "Assisted in the deployment of new hardware and software, improving system performance and security",
        "Conducted system inspections and maintenance to ensure optimal functionality",
      ],
      gradient: "from-blue-600 via-cyan-600 to-blue-600",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-32 overflow-hidden bg-white dark:bg-gray-900"
    >
      <style jsx>{`
        .animate-on-scroll {
          opacity: 0;
          transform: translateX(-100px);
          transition: all 0.7s ease;
        }
        .animate-on-scroll.right {
          transform: translateX(100px);
        }
        .animate-on-scroll.show {
          opacity: 1;
          transform: translateX(0);
        }
        .timeline-line {
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 1px;
          background: linear-gradient(
            to bottom,
            transparent,
            rgb(229 231 235) 50%,
            transparent
          );
        }
        .dark .timeline-line {
          background: linear-gradient(
            to bottom,
            transparent,
            rgb(55 65 81) 50%,
            transparent
          );
        }
        .card {
          transition: transform 0.3s ease;
        }
        .card:hover {
          transform: scale(1.02);
        }
      `}</style>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-24 animate-on-scroll">
          <h2 className="text-5xl sm:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 dark:from-blue-400 dark:via-cyan-400 dark:to-blue-400">
            Professional Journey
          </h2>
          <p className="mt-6 text-xl text-gray-600 dark:text-gray-300">
            Building excellence through experience
          </p>
        </div>

        <div className="relative">
          <div className="timeline-line" />

          <div className="relative space-y-24">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative grid grid-cols-1 lg:grid-cols-2 gap-12"
              >
                <div
                  className={`relative ${
                    index % 2 === 0 ? "lg:text-right" : "lg:col-start-2"
                  }`}
                >
                  <div
                    className={`animate-on-scroll ${
                      index % 2 === 0 ? "" : "right"
                    } card relative group`}
                  >
                    <div
                      className={`absolute -inset-0.5 bg-gradient-to-r ${exp.gradient} rounded-2xl opacity-20 group-hover:opacity-30 transition duration-300 blur`}
                    />
                    <div className="relative p-8 bg-white dark:bg-gray-800 rounded-2xl">
                      <span className="inline-block px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-700 text-sm font-medium text-gray-900 dark:text-gray-100 mb-4">
                        {exp.period}
                      </span>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {exp.role}
                      </h3>
                      <h4 className="text-xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 mb-4">
                        {exp.company}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 mb-6">
                        {exp.description}
                      </p>
                      <ul className="space-y-3">
                        {exp.achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className="flex items-center gap-3 text-gray-600 dark:text-gray-300 transition-transform duration-300 hover:translate-x-2"
                          >
                            <span
                              className={`h-2 w-2 rounded-full bg-gradient-to-r ${exp.gradient}`}
                            />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
