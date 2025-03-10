export interface Project {
  title: string;
  description: string;
  highlights: string[];
  technologies: string[];
  category: string[];
  image?: string;
  github?: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    title: "Software-Defined Networking (SDN) Implementation",
    description:
      "Enterprise-level SDN architecture implementation focusing on network flexibility, security, and scalability.",
    highlights: [
      "Designed and implemented SDN architecture for large enterprises",
      "Utilized OpenFlow and SDN controllers for traffic management",
      "Evaluated network performance improvements and cost reductions",
    ],
    technologies: ["OpenFlow", "SDN Controllers", "Network Automation"],
    category: ["Network"],
    image: "/images/projects/sdn.webp",
  },
  {
    title: "Enterprise Network Implementation",
    description:
      "Optimized enterprise network infrastructure for improved performance and security.",
    highlights: [
      "Optimized network infrastructure for improved performance",
      "Implemented network security measures to protect against cyber threats",
      "Conducted network performance analysis and optimization",
    ],
    technologies: [
      "Network Automation",
      "Network Security",
      "Network Performance",
    ],
    category: ["Network"],
    image: "/images/projects/enterprise.png",
  },
  {
    title: "Moblie networking and IOT Implementation",
    description:
      "Implemented mobile networking and IOT solutions for efficient data transfer and communication.",
    highlights: [
      "Implemented mobile networking solutions for efficient data transfer",
      "Developed IOT applications for remote monitoring and control",
      "Conducted network performance analysis and optimization",
    ],
    technologies: [
      "Mobile Networking",
      "IOT",
      "Network Performance",
      "Network Automation",
    ],
    category: ["Network"],
    image: "/images/projects/mobile.png",
  },
  {
    title: "Intelligent Network Automation",
    description:
      "Automated network management tasks using AI and machine learning algorithms.",
    highlights: [
      "Implemented AI algorithms for network management tasks",
      "Conducted network performance analysis and optimization",
      "Developed network automation tools",
    ],
    technologies: [
      "AI",
      "Cloud based Automation",
      "Machine Learning",
      "Network Automation",
      "Network Performance",
    ],
    category: ["Network", "Cloud"],
    image: "/images/projects/intelligent.png",
  },
  {
    title: "HarmonyHub - Inventory Management System",
    description:
      "Full-stack inventory management web application with secure user authentication and role-based access.",
    highlights: [
      "Developed full-stack web application",
      "Implemented authentication and role-based access control",
      "Built with Node.js and PostgreSQL",
    ],
    technologies: ["Node.js", "PostgreSQL", "Express", "JWT", "React"],
    category: ["Web Development"],
    image: "/images/projects/harmonyhub.png",
    github: "https://github.com/bereketkib/HarmonyHub",
    demo: "https://harmonyhub-y8ot.onrender.com",
  },
  {
    title: "Cloud-based File Uploader",
    description:
      "Secure file upload system with cloud storage integration and user authentication.",
    highlights: [
      "Created file uploader system with cloud storage",
      "Implemented user authentication using Passport.js",
      "Built session-based management",
    ],
    technologies: ["Express.js", "Supabase", "Passport.js", "Cloud Storage"],
    category: ["Cloud", "Web Development"],
    image: "/images/projects/file.png",
    github: "https://github.com/bereketkib/file-manager",
    demo: "https://file-manager-3q3u.onrender.com",
  },
  {
    title: "Wonderlog - Blogging Website",
    description:
      "Modern blogging platform allowing users to read, write, and interact with blogs.",
    highlights: [
      "Built full-stack blogging platform",
      "Implemented JWT authentication",
      "Created RESTful API endpoints",
    ],
    technologies: ["Next.js", "Express.js", "TypeScript", "REST API", "JWT"],
    category: ["Web Development"],
    image: "/images/projects/wonderlog.png",
    github: "https://github.com/bereketkib/wonderlog-web",
    demo: "https://wonderlog-web.vercel.app/",
  },
  {
    title: "Mini-message board",
    description:
      "Simple message board application with user authentication and CRUD operations.",
    highlights: [
      "Developed message board application",
      "Implemented user authentication using session-based management",
      "Built CRUD operations for messages",
    ],
    technologies: ["Express.js", "PostgreSQL", "Session-based Management"],
    category: ["Web Development"],
    image: "/images/projects/message.png",
    github: "https://github.com/bereketkib/MiniMessageBoard",
    demo: "https://minimessageboard-tzqp.onrender.com/",
  },
  {
    title: "CV Generator",
    description:
      "CV generator application that allows users to create professional CVs with ease.",
    highlights: [
      "Developed CV generator application",
      "Implemented using Nextjs",
    ],
    technologies: ["Next.js", "React", "TypeScript"],
    category: ["Web Development"],
    image: "/images/projects/CV.png",
    github: "https://github.com/bereketkib/CV-Creator",
    demo: "https://cv-creator-lac.vercel.app/",
  },
  {
    title: "Tech - Landing Page",
    description:
      "Landing page for a tech company with modern design and user-friendly interface.",
    highlights: [
      "Designed landing page with modern design using Reactjs",
      "Implemented responsive design for various devices",
      "Created user-friendly interface",
    ],
    technologies: ["React.js", "Javascript", "TailwindCSS"],
    category: ["Web Development"],
    image: "/images/projects/tech.png",
    github: "https://github.com/bereketkib/Tech-Website",
    demo: "https://replit.com/@bekibreab/Tech-Website",
  },
  {
    title: "Memory Card Game",
    description:
      "Memory card game with multiple difficulty levels and interactive gameplay.",
    highlights: [
      "Developed memory card game with Reactjs",
      "Implemented interactive gameplay",
      "Created responsive design for various devices",
    ],
    technologies: ["React.js", "Javascript", "HTML/CSS"],
    category: ["Web Development"],
    image: "/images/projects/memory.png",
    github: "https://github.com/bereketkib/Memory-Card",
    demo: "https://bereketkib.github.io/Memory-Card/",
  },
];
