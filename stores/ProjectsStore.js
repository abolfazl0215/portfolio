import { create } from "zustand";

const useProjectsStore = create((set, get) => ({
  projects: [
    {
      id: 1,
      slug: "rad-company-website",
      title: "Rad Company Corporate Services Website",
      description:
        "A multilingual corporate website for Rad Company in Armenia, offering real estate, residency services, visa assistance, education consulting, embassy appointments, and international relocation support.",

      fullDescription: `This is a comprehensive corporate website developed for Rad Company, a multi-service firm based in Armenia. The company provides a wide range of services including real estate consulting, Armenian residency card processing, visa applications, embassy appointment booking, education consulting, business setup (company registration), job placement assistance, and international relocation support.

The platform is designed to serve both local and international clients with multilingual capabilities and user-friendly navigation. The website presents detailed service information, structured inquiry forms, and a clear conversion-focused layout to generate qualified leads.

Built with Next.js for high performance and SEO optimization, styled with Tailwind CSS for a modern and responsive UI, and powered by a Node.js/Express backend with MongoDB for scalable data management and service handling.`,

      tag: "Website",
      category: "web",

      image:
        "https://res.cloudinary.com/dtakyi9mf/image/upload/v1772113560/rad1_fpxg8c.png",

      images: [
        "https://res.cloudinary.com/dtakyi9mf/image/upload/v1772113560/rad1_fpxg8c.png",
        "https://res.cloudinary.com/dtakyi9mf/image/upload/v1772113560/rad2_bexlwd.png",
        "https://res.cloudinary.com/dtakyi9mf/image/upload/v1772114221/rad3_ribrtc.png",
      ],

      technologies: [
        "Next.js",
        "Tailwind CSS",
        "Node.js",
        "Express",
        "MongoDB",
      ],

      features: [
        "Multilingual support",
        "Real estate service presentation",
        "Armenian residency card application guidance",
        "Visa and embassy appointment assistance",
        "Education and university admission consulting",
        "Company registration & business setup services",
        "Job placement assistance",
        "SEO-optimized structure",
        "Mobile-responsive design",
        "Lead generation contact forms",
      ],

      featured: true,

      liveUrl: "https://rad-website-eight.vercel.app/en",
      githubUrl: "",

      duration: "2 weeks",
      client: "Rad Company (Armenia)",
      date: "February 2026",
    },
    {
      id: 2,
      slug: "tour-stay-booking-website",
      title: "Tour & Stay Booking Website",
      description:
        "A multilingual tour, accommodation, and transfer booking website for an Armenian travel company, supporting 10 languages and 5 currencies with a comprehensive admin panel.",
      fullDescription: `This is a comprehensive booking website for a travel company offering tour, accommodation, and transfer services in Armenia. The platform is designed to serve an international audience with support for 10 different languages and 5 currency options.

The website features a powerful admin panel that allows administrators to add, edit, and delete tours, accommodations, and transfer services. The system provides complete control over all service offerings, pricing in multiple currencies, and content management in all supported languages. Built with Next.js for optimal performance and SEO, styled with Tailwind CSS for responsive design, and powered by Node.js/Express backend with MongoDB for robust data management.`,
      tag: "Website",
      category: "web",
      image:
        "https://res.cloudinary.com/dtakyi9mf/image/upload/v1770558435/Screenshot_2026-02-08_174107_1_ckp2bz.png",
      images: [
        "https://res.cloudinary.com/dtakyi9mf/image/upload/v1770558435/Screenshot_2026-02-08_174107_1_ckp2bz.png",
        "https://res.cloudinary.com/dtakyi9mf/image/upload/v1770558435/Screenshot_2026-02-08_174222_1_cfy9ce.png",
        "https://res.cloudinary.com/dtakyi9mf/image/upload/v1770558434/Screenshot_2026-02-08_174358_1_jjztfi.png",
      ],
      technologies: [
        "Next.js",
        "Tailwind CSS",
        "Node.js",
        "Express",
        "MongoDB",
      ],
      features: [
        "Support for 10 different languages",
        "5 currency options for international clients",
        "Comprehensive admin panel",
        "Add, edit, and delete tours",
        "Manage accommodations and transfers",
        "Multi-currency pricing system",
        "SEO optimization for all languages",
        "Mobile-responsive design",
      ],
      featured: true,
      liveUrl: "https://arax-website-front.vercel.app/en",
      githubUrl: "",
      duration: "4 months",
      client: "Armenian Travel Company",
      date: "December 2025",
    },
    {
      id: 3,
      slug: "link-in-bio-website",
      title: "Link in Bio Website",
      description:
        "A professional Link in Bio platform similar to Linktree, enabling users to create customizable link pages with multiple themes, fonts, and section management.",
      fullDescription: `This is a professional Link in Bio platform similar to Linktree, built with modern web technologies. The platform allows users to create, manage, and customize their link pages with complete flexibility.

The project includes a comprehensive link management system where users can add, edit, and delete links and sections. It features multiple theme options with customization capabilities, allowing users to choose from various color schemes and layouts. The platform also supports font customization, giving users full control over their page's typography and appearance. Built with Next.js for optimal performance, styled with Tailwind CSS for responsive design, and powered by a robust Node.js/Express backend with MongoDB for data persistence.`,
      tag: "Website",
      category: "web",
      image:
        "https://res.cloudinary.com/dtakyi9mf/image/upload/v1770560345/Screenshot_2026-02-08_181632_1_jj3pkk.png",
      images: [
        "https://res.cloudinary.com/dtakyi9mf/image/upload/v1770560345/Screenshot_2026-02-08_181632_1_jj3pkk.png",
        "https://res.cloudinary.com/dtakyi9mf/image/upload/v1770560345/Screenshot_2026-02-08_181632_1_jj3pkk.png",
        "https://res.cloudinary.com/dtakyi9mf/image/upload/v1770560345/Screenshot_2026-02-08_181632_1_jj3pkk.png",
      ],
      technologies: [
        "Next.js",
        "Tailwind CSS",
        "Node.js",
        "Express",
        "MongoDB",
      ],
      features: [
        "Create, edit, and delete links",
        "Add and manage multiple sections",
        "Multiple theme options",
        "Custom font selection",
        "Theme customization capabilities",
        "Real-time preview",
        "Mobile-first responsive design",
        "User-friendly interface",
      ],
      featured: false,
      liveUrl: "https://ulink-client.vercel.app/",
      githubUrl: "",
      duration: "2 months",
      client: "Content Creators & Businesses",
      date: "January 2026",
    },
    {
      id: 4,
      slug: "armenia-residency-bot",
      title: "Armenia Residency Services Bot & Mini App",
      description:
        "A comprehensive Telegram bot and mini-app for Armenia residency services, featuring residence packages, professional admin panel with analytics, and AI-powered chat support.",
      fullDescription: `This is a comprehensive Telegram bot and mini-app designed for providing residency services in Armenia. The platform offers various residence packages and includes a professional admin panel with advanced features.

The admin panel features comprehensive analytics, user management system, direct messaging to users (both in-app and through Telegram), and broadcast messaging capabilities. Administrators can edit residence packages, create discount campaigns, and monitor all user activities. The mini-app includes an AI-powered internal chat system for customer support, providing intelligent responses to user inquiries. Built with Next.js and Tailwind CSS for the frontend, and Node.js/Express with MongoDB for the backend, ensuring a robust and scalable solution.`,
      tag: "Telegram Bot & Mini App",
      category: "telegram",
      image:
        "https://res.cloudinary.com/dtakyi9mf/image/upload/v1770566948/Group_543_1_fczznb.png",
      images: [
        "https://res.cloudinary.com/dtakyi9mf/image/upload/v1770566948/Group_543_1_fczznb.png",
        "https://res.cloudinary.com/dtakyi9mf/image/upload/v1770566949/Group_544_1_hwyc6r.png",
      ],
      technologies: [
        "Next.js",
        "Tailwind CSS",
        "Node.js",
        "Express",
        "MongoDB",
        "Telegram Bot API",
        "AI Integration",
      ],
      features: [
        "Multiple residence package options",
        "Professional admin panel with analytics",
        "User management and tracking",
        "Direct messaging to users (in-app & Telegram)",
        "Broadcast messaging system",
        "Package editing and management",
        "Discount campaign creation",
        "AI-powered internal chat support",
      ],
      featured: true,
      liveUrl: "https://t.me/rad_armenia_bot",
      githubUrl: "",
      duration: "5 months",
      client: "Residency Services Company",
      date: "November 2025",
    },
    {
      id: 5,
      slug: "dating-bot",
      title: "Dating Telegram Bot",
      description:
        "A professional Telegram dating bot with advanced matching system, connecting users based on their preferences and interests.",
      fullDescription: `This is a professional Telegram dating bot featuring an advanced matching algorithm that connects users based on their preferences, interests, and compatibility factors. The bot provides a seamless dating experience directly within Telegram.

The system includes user profile management, intelligent matching algorithms, real-time notifications, and chat functionality. Users can set their preferences, browse matches, and communicate with potential partners all within the Telegram interface. Built with Next.js and Tailwind CSS for the admin panel, Node.js/Express for the backend, and MongoDB with Redis for efficient data storage and caching. The matching system uses sophisticated algorithms to ensure high-quality connections between users.`,
      tag: "Telegram Bot",
      category: "telegram",
      image:
        "https://res.cloudinary.com/dtakyi9mf/image/upload/v1770567689/Group_545_1_tgwuoa.png",
      images: [
        "https://res.cloudinary.com/dtakyi9mf/image/upload/v1770567689/Group_545_1_tgwuoa.png",
      ],
      technologies: [
        "Next.js",
        "Tailwind CSS",
        "Node.js",
        "Express",
        "MongoDB",
        "Redis",
        "Telegram Bot API",
      ],
      features: [
        "Advanced matching algorithm",
        "User profile management",
        "Preference-based matching",
        "Real-time notifications",
        "In-bot messaging system",
        "User blocking and reporting",
        "Match suggestions",
        "Admin panel for monitoring",
      ],
      featured: false,
      liveUrl: "https://t.me/pounes_bot",
      githubUrl: "",
      duration: "3 months",
      client: "Dating Platform",
      date: "October 2025",
    },
    {
      id: 6,
      slug: "dating-application",
      title: "Dating Android Application",
      description:
        "A comprehensive Android dating application with user exploration, advanced search, professional messaging system, and real-time chat features.",
      fullDescription: `This is a comprehensive Android dating application built with Kotlin, offering a complete dating experience with advanced features. The app provides user exploration, messaging, and real-time communication capabilities.

The application features a powerful messaging system with all standard features including text messages, media sharing, read receipts, and typing indicators. It includes an explore section for discovering new users, advanced search functionality with filters, and a professional chat interface built with Socket.io for real-time communication. The backend is powered by Node.js/Express with MongoDB for data storage and Redis for caching and session management, ensuring fast and reliable performance.`,
      tag: "Android Application",
      category: "web",
      image:
        "https://res.cloudinary.com/dtakyi9mf/image/upload/v1770568124/Group_546_1_feh4vw.png",
      images: [
        "https://res.cloudinary.com/dtakyi9mf/image/upload/v1770568124/Group_546_1_feh4vw.png",
      ],
      technologies: [
        "Kotlin",
        "Node.js",
        "Express",
        "MongoDB",
        "Redis",
        "Socket.io",
        "Tailwind CSS",
      ],
      features: [
        "User exploration and discovery",
        "Advanced search with filters",
        "Professional messaging system",
        "Real-time chat with Socket.io",
        "Text and media message support",
        "Read receipts and typing indicators",
        "User profiles and preferences",
        "Match suggestions",
      ],
      featured: true,
      liveUrl:
        "https://cafebazaar.ir/app/com.abolfazlMokhtari.pounes",
      githubUrl: "",
      duration: "6 months",
      client: "Dating Platform",
      date: "September 2025",
    },
  ],

  // Get all projects
  getAllProjects: () => get().projects,

  // Get project by slug
  getProjectBySlug: (slug) => {
    return get().projects.find((project) => project.slug === slug);
  },

  // Get project by id
  getProjectById: (id) => {
    return get().projects.find((project) => project.id === id);
  },

  // Get filtered projects by category
  getProjectsByCategory: (category) => {
    if (category === "all") {
      return get().projects;
    }
    return get().projects.filter(
      (project) => project.category === category,
    );
  },

  // Get featured projects
  getFeaturedProjects: () => {
    return get().projects.filter((project) => project.featured);
  },

  // Get related projects (exclude current project)
  getRelatedProjects: (currentProjectId, count = 3) => {
    const otherProjects = get().projects.filter(
      (project) => project.id !== currentProjectId,
    );
    const shuffled = [...otherProjects].sort(
      () => 0.5 - Math.random(),
    );
    return shuffled.slice(0, count);
  },

  // Add a new project
  addProject: (project) => {
    set((state) => ({
      projects: [...state.projects, { ...project, id: Date.now() }],
    }));
  },

  // Update a project
  updateProject: (id, updatedData) => {
    set((state) => ({
      projects: state.projects.map((project) =>
        project.id === id ? { ...project, ...updatedData } : project,
      ),
    }));
  },

  // Delete a project
  deleteProject: (id) => {
    set((state) => ({
      projects: state.projects.filter((project) => project.id !== id),
    }));
  },
}));

export default useProjectsStore;
