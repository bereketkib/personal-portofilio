"use client";

import { useRef } from "react";
import Image from "next/image";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const ProjectsPreview = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const previewProjects = [
    {
      title: "Software-Defined Networking (SDN) Implementation",
      description:
        "Enterprise-level SDN architecture implementation focusing on network flexibility, security, and scalability.",
      image: "/images/projects/sdn.webp",
      tech: ["OpenFlow", "SDN Controllers", "Network Automation"],
      color: "from-blue-500/20 to-cyan-500/20",
    },
    {
      title: "Cloud-based File Uploader",
      description:
        "Secure file upload system with cloud storage integration and user authentication.",
      image: "/images/projects/file.png",
      tech: ["Express.js", "Supabase", "Passport.js", "Cloud Storage"],
      github: "https://github.com/bereketkib/file-manager",
      demo: "https://file-manager-3q3u.onrender.com",
      color: "from-emerald-500/20 to-cyan-500/20",
    },
    {
      title: "Wonderlog - Blogging Website",
      description:
        "Modern blogging platform allowing users to read, write, and interact with blogs.",
      image: "/images/projects/wonderlog.png",
      tech: ["Next.js", "Express.js", "TypeScript", "REST API", "JWT"],
      github: "https://github.com/bereketkib/wonderlog-web",
      demo: "https://wonderlog-web.vercel.app/",
      color: "from-purple-500/20 to-blue-500/20",
    },
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-white dark:bg-gray-900">
      <style jsx>{`
        @keyframes fadeRotate {
          from {
            opacity: 0;
            transform: translateY(50px) rotate(-10deg);
          }
          to {
            opacity: 1;
            transform: translateY(0) rotate(0deg);
          }
        }

        .animate-on-scroll {
          animation: fadeRotate both;
          animation-timeline: view();
          animation-range: entry 10% cover 40%;
        }

        .project-card {
          transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .project-card:hover {
          transform: translateY(-8px);
        }
        .project-image {
          transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .project-card:hover .project-image {
          transform: scale(1.1);
        }
      `}</style>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 dark:from-blue-400 dark:via-cyan-400 dark:to-blue-400">
            Featured Projects
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Some of my recent work
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {previewProjects.map((project, index) => (
            <div
              key={index}
              className="animate-on-scroll project-card group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-xl"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-all duration-500`}
              />

              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="project-image object-cover w-full h-full"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
              </div>

              <div className="relative p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                    >
                      <FiGithub className="w-5 h-5" />
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                    >
                      <FiExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Link */}
        <div className="mt-12 text-right">
          <a
            href="/projects"
            className="group inline-flex items-center gap-2 px-8 py-4  text-gray-900 dark:text-white font-medium transition-all duration-300 hover:scale-105"
          >
            View All Projects
            <svg
              className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsPreview;
