export const personalInfo = {
  name: "Neha Kumari",
  role: "Full-Stack Developer & Software Engineer",
  tagline: "B.Tech CSE Graduate (Class of 2026)",
  phone: "7004844313",
  formattedPhone: "+91 7004844313",
  email: "Nk7665508@gmail.com",
  location: "Jamshedpur, Jharkhand, India",
  college: "R.V.S College of Engineering and Technology (RVSCET)",
  degree: "B.Tech in Computer Science and Engineering",
  graduationYear: "2026",
  github: "https://github.com/nehakumari3748",
  linkedin: "https://www.linkedin.com/in/neha-kumari-942a67269",
  whatsapp: "https://wa.me/917004844313?text=Hi%20Neha,%20I%20reviewed%20your%20portfolio%20and%20would%20like%20to%20connect!",
  avatarUrl: "https://avatars.githubusercontent.com/u/171033865?v=4",
  bio: "Passionate Full-Stack Developer and 2026 B.Tech CSE candidate with a knack for building end-to-end scalable web applications, intelligent automation bots, and responsive user experiences. Adept in JavaScript, React, Node.js, Java, and Python with hands-on experience developing real-world platforms like enterprise job portals and CRM automation engines.",
  stats: [
    { label: "GitHub Repositories", value: "19+" },
    { label: "Academic Graduation", value: "2026" },
    { label: "Specialization", value: "Full Stack" },
    { label: "Core Focus", value: "React & Java" }
  ]
};

export const skillsData = [
  {
    category: "Frontend Development",
    icon: "Layout",
    skills: [
      { name: "React.js", level: 90, tag: "Framework" },
      { name: "JavaScript (ES6+)", level: 92, tag: "Language" },
      { name: "TypeScript", level: 80, tag: "Language" },
      { name: "HTML5 & Semantic Web", level: 95, tag: "Core" },
      { name: "CSS3 / Flexbox / Grid", level: 92, tag: "Styling" },
      { name: "Vite & Build Tooling", level: 85, tag: "Tooling" },
      { name: "Responsive UI/UX Design", level: 90, tag: "Design" }
    ]
  },
  {
    category: "Backend & Systems",
    icon: "Server",
    skills: [
      { name: "Node.js", level: 85, tag: "Runtime" },
      { name: "Express.js", level: 82, tag: "Framework" },
      { name: "Java (Core & OOP)", level: 86, tag: "Language" },
      { name: "Python", level: 84, tag: "Language" },
      { name: "RESTful API Architecture", level: 88, tag: "Architecture" },
      { name: "Authentication & Security", level: 78, tag: "Security" }
    ]
  },
  {
    category: "Databases & Cloud",
    icon: "Database",
    skills: [
      { name: "MongoDB", level: 80, tag: "NoSQL" },
      { name: "MySQL / SQL", level: 82, tag: "Relational" },
      { name: "LocalStorage / Cache Engine", level: 90, tag: "Client State" },
      { name: "Vercel / Cloud Deployment", level: 85, tag: "DevOps" },
      { name: "Git & GitHub Version Control", level: 90, tag: "VCS" }
    ]
  },
  {
    category: "CS Fundamentals & Specialized",
    icon: "Cpu",
    skills: [
      { name: "Data Structures & Algorithms", level: 82, tag: "CS Core" },
      { name: "Object Oriented Programming (OOP)", level: 88, tag: "CS Core" },
      { name: "Database Management Systems (DBMS)", level: 85, tag: "CS Core" },
      { name: "OpenCV & Computer Vision", level: 75, tag: "AI/Vision" },
      { name: "Chatbot & Automation Engines", level: 85, tag: "Automation" }
    ]
  }
];

export const projectsData = [
  {
    id: "job-portal",
    title: "CareerNexus | Enterprise Job Portal",
    category: "fullstack",
    featured: true,
    highlight: "Primary Project",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
    description: "Next-gen career management platform featuring dual portal architectures for Candidates and Recruiters. Implements interactive application pipelines, real-time status trackers, role switching, and modular application workflows.",
    keyFeatures: [
      "Dual user-role system: Seamless switching between Job Seeker and Hiring Manager dashboards",
      "Dynamic job search, filtering, and instant one-click candidate application workflow",
      "Interactive recruiter pipeline to accept, review, and advance applicant statuses",
      "Persistent state management, modern accessible typography, and fluid responsive UI"
    ],
    tech: ["Java Architecture", "JavaScript (ES6+)", "HTML5", "CSS3 Components", "LocalStorage State"],
    liveUrl: "https://nehakumari3748.github.io/Job_portal/",
    githubUrl: "https://github.com/nehakumari3748/Job_portal"
  },
  {
    id: "whatsapp-crm",
    title: "WhatsApp CRM & Automation Engine",
    category: "fullstack",
    featured: true,
    highlight: "Full-Stack Automation",
    image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&w=800&q=80",
    description: "Full-stack customer relationship management and automated messaging dashboard built with React and Vite. Streamlines customer conversation pipelines, campaign triggers, and real-time contact management.",
    keyFeatures: [
      "Custom messaging automation triggers and scheduled customer outreach workflows",
      "Pipeline deal stage tracking and contact categorization engine",
      "Built with modern React and fast Vite tooling for instant performance",
      "Interactive analytics dashboard showing engagement and response rates"
    ],
    tech: ["React.js", "Vite", "JavaScript", "Automation API", "CSS3 Grid"],
    liveUrl: null,
    githubUrl: "https://github.com/nehakumari3748/Whatsapp-CRM"
  },
  {
    id: "ai-quiz-app",
    title: "AI Quiz Interactive Learning App",
    category: "ai",
    featured: true,
    highlight: "AI Powered",
    image: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&w=800&q=80",
    description: "Smart quiz web platform featuring dynamically structured AI-assisted questionnaires, interactive countdown timers, instant scoring evaluation, and intuitive performance analytics.",
    keyFeatures: [
      "Live deployed on Vercel with lightning-fast load times and seamless responsiveness",
      "Topic categorization spanning technical disciplines and general knowledge",
      "Real-time feedback engine detailing correct answers and score breakdowns",
      "Sleek visual cards and animated state transitions"
    ],
    tech: ["React / JavaScript", "AI Engine", "Vercel Deployment", "Modern CSS"],
    liveUrl: "https://ai-quiz-app-green.vercel.app",
    githubUrl: "https://github.com/nehakumari3748/AI-QUIZ-APP"
  },
  {
    id: "ecommerce-platform",
    title: "Modern E-Commerce Storefront",
    category: "fullstack",
    featured: true,
    highlight: "Web Architecture",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80",
    description: "Full-featured online shopping experience featuring dynamic product catalogs, category filtering, cart state calculations, and checkout process simulations.",
    keyFeatures: [
      "Dynamic catalog rendering with real-time price computations and discounts",
      "Interactive cart management with add, increment, decrement, and item removal",
      "Clean modular frontend architecture with responsive mobile drawer navigation",
      "Optimized assets and modular CSS styling for premium shopping aesthetic"
    ],
    tech: ["JavaScript (ES6+)", "Node.js", "HTML5", "CSS3 Flexbox", "State Engine"],
    liveUrl: null,
    githubUrl: "https://github.com/nehakumari3748/E-COMMERCE"
  },
  {
    id: "finance-chatbot",
    title: "Smart Finance Conversational Chatbot",
    category: "ai",
    featured: false,
    highlight: "Conversational UI",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
    description: "Interactive conversational bot tailored to answer personal finance questions, provide budgeting advice, and guide users through financial calculation scenarios.",
    keyFeatures: [
      "Conversational dialogue manager parsing intent for budgeting and expense planning",
      "Live typing bubble animations and fluid chat scroll history",
      "Interactive quick-suggestion chips for instant user inquiries",
      "Accessible lightweight codebase for easy integration into web banking portals"
    ],
    tech: ["JavaScript", "NLP Heuristics", "CSS3 Chat UI", "DOM Logic"],
    liveUrl: null,
    githubUrl: "https://github.com/nehakumari3748/Finance-Chatbot"
  },
  {
    id: "face-detection",
    title: "OpenCV Face Detection & Landmark App",
    category: "python",
    featured: false,
    highlight: "Computer Vision",
    image: "https://images.unsplash.com/photo-1507146426996-ef0538821e1a?auto=format&fit=crop&w=800&q=80",
    description: "Computer vision desktop application utilizing Python and OpenCV for real-time facial feature detection, boundary bounding boxes, and camera feed processing.",
    keyFeatures: [
      "High-accuracy Haar Cascade and Deep Neural Network face identification",
      "Real-time webcam video stream processing with bounding box overlays",
      "Multi-face simultaneous detection capability",
      "Robust Python scripting following standard image pre-processing pipelines"
    ],
    tech: ["Python", "OpenCV", "NumPy", "Computer Vision"],
    liveUrl: null,
    githubUrl: "https://github.com/nehakumari3748/Face-Detection-App"
  },
  {
    id: "library-management",
    title: "Automated Library Management System",
    category: "python",
    featured: false,
    highlight: "System Design",
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=800&q=80",
    description: "Comprehensive software suite built to catalog book inventories, manage patron memberships, issue books, and automatically compute overdue penalty fees.",
    keyFeatures: [
      "Object-oriented architecture organizing Books, Members, and Loan transactions",
      "Persistent file storage and structured record retrieval operations",
      "Search by ISBN, title, or author with real-time availability checks",
      "Clean CLI/GUI workflow designed for high reliability and data integrity"
    ],
    tech: ["Python", "OOP Design", "File I/O / DB", "Data Structures"],
    liveUrl: null,
    githubUrl: "https://github.com/nehakumari3748/LIBRARY-MANAGEMENT"
  },
  {
    id: "todo-app",
    title: "Modular Task & Productivity App",
    category: "tools",
    featured: false,
    highlight: "TypeScript",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=800&q=80",
    description: "Modern productivity web application engineered with TypeScript. Features task prioritization, status filtering, LocalStorage state persistence, and fluid animations.",
    keyFeatures: [
      "Strict TypeScript type-safety for tasks, states, and event handlers",
      "Category tags, completion timestamps, and local browser persistence",
      "Smooth add/edit/delete animations with keyboard shortcut support",
      "Lightweight, clean UI focused on peak daily personal productivity"
    ],
    tech: ["TypeScript", "HTML5", "CSS3", "LocalStorage"],
    liveUrl: null,
    githubUrl: "https://github.com/nehakumari3748/-To-Do-app"
  }
];

export const educationData = [
  {
    period: "2022 - 2026",
    degree: "Bachelor of Technology (B.Tech) - Computer Science & Engineering",
    institution: "R.V.S College of Engineering and Technology (RVSCET)",
    location: "Jamshedpur, Jharkhand",
    status: "Final Year Student (Passing Year 2026)",
    description: "Pursuing rigorous engineering education centered on computer science fundamentals, full-stack software development, distributed systems, and modern web architectures.",
    highlights: [
      "Major: Computer Science & Engineering (CSE)",
      "Core Coursework: Data Structures & Algorithms, Object-Oriented Programming (Java/C++), Operating Systems, Database Management Systems (DBMS), Computer Networks, Web Technologies",
      "Practical Focus: Hands-on implementation of enterprise web applications, real-time dashboards, and algorithmic problem-solving",
      "Active participant in technical symposiums, coding challenges, and collaborative GitHub open-source repositories"
    ]
  }
];

export const experienceHighlights = [
  {
    title: "Full-Stack Web Engineering",
    role: "Core Developer",
    period: "2023 - Present",
    desc: "Architected end-to-end applications including CareerNexus Job Portal, WhatsApp CRM, and E-Commerce storefronts using React, Node.js, and Java.",
    badge: "Full-Stack"
  },
  {
    title: "AI & Automation Projects",
    role: "Project Lead",
    period: "2024 - Present",
    desc: "Integrated conversational chatbot interfaces, computer vision face tracking pipelines using OpenCV, and intelligent quiz evaluation engines.",
    badge: "AI & Vision"
  },
  {
    title: "Open Source & Git Collaboration",
    role: "Active Contributor",
    period: "2023 - Present",
    desc: "Published 19+ open-source repositories on GitHub, maintaining clean git version control practices, documentation, and live deployments.",
    badge: "19+ Repos"
  }
];
