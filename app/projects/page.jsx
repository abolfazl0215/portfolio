"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Globe,
  MessageSquare,
  ExternalLink,
  Github,
  ArrowRight,
  Sparkles,
  Code,
  Zap,
  Star,
  Search,
  Filter,
  Calendar,
  Award,
  TrendingUp,
  Users,
} from "lucide-react";
import Navbar from "../../Components/Navbar";

// همان داده‌های پروژه - می‌توانید این را به یک فایل جداگانه منتقل کنید
const projects = [
  {
    id: 1,
    slug: "e-commerce-platform",
    title: "E-Commerce Platform",
    description:
      "A modern, responsive online store with advanced features including real-time inventory, secure payment processing, and comprehensive admin dashboard.",
    fullDescription:
      "Complete e-commerce solution built with Next.js featuring product management, cart functionality, checkout process, order tracking, and admin panel for managing products, orders, and customers.",
    tag: "Website",
    category: "web",
    image: "https://res.cloudinary.com/dtakyi9mf/image/upload/v1768893218/pexels-arthousestudio-4530180_b7otjf.jpg",
    technologies: ["Next.js", "Tailwind", "Stripe", "MongoDB"],
    featured: true,
    liveUrl: "#",
    githubUrl: "#",
    date: "2024-12",
    client: "Online Retail Co.",
    duration: "3 months",
  },
  {
    id: 2,
    slug: "corporate-website",
    title: "Corporate Website",
    description:
      "Professional business website with elegant design, smooth animations, SEO optimization, and integrated contact forms for lead generation.",
    fullDescription:
      "Corporate website showcasing company services, team members, case studies, and blog. Features include advanced SEO, performance optimization, and content management system.",
    tag: "Website",
    category: "web",
    image: "https://res.cloudinary.com/dtakyi9mf/image/upload/v1768893218/pexels-arthousestudio-4530180_b7otjf.jpg",
    technologies: ["React", "GSAP", "Node.js", "Strapi"],
    featured: false,
    liveUrl: "#",
    githubUrl: "#",
    date: "2024-11",
    client: "Tech Solutions Inc.",
    duration: "2 months",
  },
  {
    id: 3,
    slug: "trading-bot",
    title: "Advanced Trading Bot",
    description:
      "Intelligent Telegram bot for automated trading with real-time market analysis, price alerts, and portfolio management features.",
    fullDescription:
      "Sophisticated trading bot with integration to multiple crypto exchanges, real-time price tracking, automated trading strategies, and detailed analytics dashboard.",
    tag: "Telegram Bot",
    category: "telegram",
    image: "https://res.cloudinary.com/dtakyi9mf/image/upload/v1768893218/pexels-arthousestudio-4530180_b7otjf.jpg",
    technologies: ["Python", "Redis", "PostgreSQL", "Telegram API"],
    featured: true,
    liveUrl: "#",
    date: "2024-10",
    client: "Crypto Trading Group",
    duration: "4 months",
  },
  {
    id: 4,
    slug: "customer-support-bot",
    title: "Customer Support Bot",
    description:
      "AI-powered support bot with natural language processing, ticket management, and seamless integration with CRM systems.",
    fullDescription:
      "Intelligent customer support solution with AI-powered responses, ticket creation and tracking, knowledge base integration, and multi-language support.",
    tag: "Telegram Bot",
    category: "telegram",
    image: "https://res.cloudinary.com/dtakyi9mf/image/upload/v1768893218/pexels-arthousestudio-4530180_b7otjf.jpg",
    technologies: ["Node.js", "OpenAI", "MongoDB", "Telegram API"],
    featured: false,
    liveUrl: "#",
    date: "2024-09",
    client: "Support Services Ltd.",
    duration: "2 months",
  },
  {
    id: 5,
    slug: "saas-dashboard",
    title: "SaaS Dashboard",
    description:
      "Comprehensive analytics dashboard with real-time data visualization, team collaboration tools, and advanced reporting features.",
    fullDescription:
      "Full-featured SaaS platform with user management, subscription handling, real-time analytics, data visualization, and team collaboration features.",
    tag: "Web Application",
    category: "web",
    image: "https://res.cloudinary.com/dtakyi9mf/image/upload/v1768893218/pexels-arthousestudio-4530180_b7otjf.jpg",
    technologies: ["React", "D3.js", "Firebase", "Stripe"],
    featured: true,
    liveUrl: "#",
    githubUrl: "#",
    date: "2024-08",
    client: "Analytics Platform",
    duration: "5 months",
  },
  {
    id: 6,
    slug: "community-bot",
    title: "Community Management Bot",
    description:
      "Powerful moderation bot with auto-moderation, welcome messages, role management, and comprehensive analytics dashboard.",
    fullDescription:
      "Complete community management solution with automated moderation, user engagement tools, analytics, custom commands, and admin dashboard.",
    tag: "Telegram Bot",
    category: "telegram",
    image: "https://res.cloudinary.com/dtakyi9mf/image/upload/v1768893218/pexels-arthousestudio-4530180_b7otjf.jpg",
    technologies: ["Python", "Redis", "Docker", "Telegram API"],
    featured: false,
    liveUrl: "#",
    date: "2024-07",
    client: "Community Platform",
    duration: "3 months",
  },
  {
    id: 7,
    slug: "portfolio-website",
    title: "Creative Portfolio",
    description:
      "Stunning portfolio website with animations, project showcases, and interactive elements for creative professionals.",
    fullDescription:
      "Portfolio website featuring project galleries, case studies, client testimonials, and blog. Built with focus on performance and visual appeal.",
    tag: "Website",
    category: "web",
    image: "https://res.cloudinary.com/dtakyi9mf/image/upload/v1768893218/pexels-arthousestudio-4530180_b7otjf.jpg",
    technologies: ["Next.js", "Framer Motion", "Tailwind"],
    featured: false,
    liveUrl: "#",
    githubUrl: "#",
    date: "2024-06",
    client: "Creative Designer",
    duration: "1 month",
  },
  {
    id: 8,
    slug: "booking-bot",
    title: "Appointment Booking Bot",
    description:
      "Smart booking bot for scheduling appointments, managing calendars, and sending automated reminders to customers.",
    fullDescription:
      "Automated booking system with calendar integration, payment processing, reminder notifications, and customer management features.",
    tag: "Telegram Bot",
    category: "telegram",
    image: "https://res.cloudinary.com/dtakyi9mf/image/upload/v1768893218/pexels-arthousestudio-4530180_b7otjf.jpg",
    technologies: ["Node.js", "Google Calendar", "Stripe", "PostgreSQL"],
    featured: false,
    liveUrl: "#",
    date: "2024-05",
    client: "Healthcare Clinic",
    duration: "2 months",
  },
];

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("newest");
  const [hoveredProject, setHoveredProject] = useState(null);

  const filters = [
    { id: "all", label: "All Projects", icon: Sparkles },
    { id: "web", label: "Websites", icon: Globe },
    { id: "telegram", label: "Telegram Bots", icon: MessageSquare },
    { id: "featured", label: "Featured", icon: Star },
  ];

  const sortOptions = [
    { id: "newest", label: "Newest First" },
    { id: "oldest", label: "Oldest First" },
    { id: "az", label: "A-Z" },
  ];

  // Filter and search projects
  const filteredProjects = useMemo(() => {
    let filtered = projects;

    // Apply category filter
    if (activeFilter === "featured") {
      filtered = filtered.filter((p) => p.featured);
    } else if (activeFilter !== "all") {
      filtered = filtered.filter((p) => p.category === activeFilter);
    }

    // Apply search
    if (searchQuery) {
      filtered = filtered.filter(
        (p) =>
          p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.technologies.some((t) =>
            t.toLowerCase().includes(searchQuery.toLowerCase())
          )
      );
    }

    // Apply sorting
    filtered.sort((a, b) => {
      if (sortBy === "newest") {
        return b.date.localeCompare(a.date);
      } else if (sortBy === "oldest") {
        return a.date.localeCompare(b.date);
      } else if (sortBy === "az") {
        return a.title.localeCompare(b.title);
      }
      return 0;
    });

    return filtered;
  }, [activeFilter, searchQuery, sortBy]);

  const stats = [
    {
      label: "Total Projects",
      value: projects.length,
      icon: Code,
      color: "from-blue-500 to-cyan-500",
    },
    {
      label: "Featured Work",
      value: projects.filter((p) => p.featured).length,
      icon: Star,
      color: "from-yellow-400 to-orange-500",
    },
    {
      label: "Technologies",
      value: new Set(projects.flatMap((p) => p.technologies)).size,
      icon: Zap,
      color: "from-purple-500 to-pink-500",
    },
    {
      label: "Happy Clients",
      value: "30+",
      icon: Users,
      color: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0A0F1C] text-white">
      <Navbar/>
      {/* Hero Section */}
      <section className="relative pt-36 py-20 px-[5vw] lg:px-[10vw] overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, -90, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          />
        </div>

        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6"
            >
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-blue-400 font-medium">
                Portfolio Showcase
              </span>
            </motion.div>

            <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent leading-tight">
              My Projects
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              Explore a collection of web applications and Telegram bots built
              with modern technologies and best practices.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-[#0D1B2A]/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 text-center hover:border-blue-500/40 transition-all"
              >
                <div
                  className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                >
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 px-[5vw] lg:px-[10vw] border-t border-gray-800/50">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-3">
              {filters.map((filter) => {
                const Icon = filter.icon;
                return (
                  <motion.button
                    key={filter.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveFilter(filter.id)}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold transition-all text-sm ${
                      activeFilter === filter.id
                        ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/50"
                        : "bg-gray-800/50 border border-gray-700 text-gray-300 hover:border-blue-500/50"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {filter.label}
                    {filter.id !== "all" && (
                      <span className="ml-1 text-xs opacity-70">
                        (
                        {filter.id === "featured"
                          ? projects.filter((p) => p.featured).length
                          : projects.filter((p) => p.category === filter.id)
                              .length}
                        )
                      </span>
                    )}
                  </motion.button>
                );
              })}
            </div>

            {/* Search and Sort */}
            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              {/* Search */}
              <div className="relative flex-1 lg:w-64">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-2.5 bg-gray-800/50 border border-gray-700 rounded-full focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-white placeholder-gray-500 text-sm"
                />
              </div>

              {/* Sort */}
              <div className="relative">
                <Filter className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="pl-11 pr-8 py-2.5 bg-gray-800/50 border border-gray-700 rounded-full focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-white text-sm appearance-none cursor-pointer"
                >
                  {sortOptions.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Results Count */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-6 text-gray-400 text-sm"
          >
            Showing {filteredProjects.length} of {projects.length} projects
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 px-[5vw] lg:px-[10vw]">
        <div className="container mx-auto">
          <AnimatePresence mode="wait">
            {filteredProjects.length > 0 ? (
              <motion.div
                key={activeFilter + searchQuery + sortBy}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    onMouseEnter={() => setHoveredProject(project.id)}
                    onMouseLeave={() => setHoveredProject(null)}
                    className="group relative"
                  >
                    {/* Featured Badge */}
                    {project.featured && (
                      <motion.div
                        initial={{ scale: 0, rotate: -45 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ delay: 0.3 + index * 0.05 }}
                        className="absolute -top-3 -right-3 z-20 bg-gradient-to-r from-yellow-400 to-orange-500 p-3 rounded-full shadow-lg"
                      >
                        <Star className="w-4 h-4 text-white fill-white" />
                      </motion.div>
                    )}

                    <div className="bg-[#0D1B2A]/50 backdrop-blur-sm rounded-2xl overflow-hidden border-2 border-gray-800 hover:border-blue-500/40 transition-all duration-500 h-full flex flex-col">
                      {/* Project Image */}
                      <div className="relative overflow-hidden aspect-video">
                        <Image
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          src={project.image}
                          width={600}
                          height={400}
                        />

                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A] via-[#0D1B2A]/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                        {/* Hover Actions */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={
                            hoveredProject === project.id
                              ? { opacity: 1, y: 0 }
                              : { opacity: 0, y: 20 }
                          }
                          transition={{ duration: 0.3 }}
                          className="absolute inset-0 flex items-center justify-center gap-4"
                        >
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="p-3 bg-blue-500 hover:bg-blue-600 rounded-full shadow-lg transition-all transform hover:scale-110"
                            >
                              <ExternalLink className="w-5 h-5 text-white" />
                            </a>
                          )}
                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full shadow-lg transition-all transform hover:scale-110"
                            >
                              <Github className="w-5 h-5 text-white" />
                            </a>
                          )}
                        </motion.div>

                        {/* Category Badge */}
                        <div className="absolute top-4 left-4">
                          <span className="flex items-center gap-2 px-3 py-1.5 bg-blue-500 text-white rounded-full text-sm font-semibold shadow-lg">
                            {project.category === "web" ? (
                              <Globe className="w-3.5 h-3.5" />
                            ) : (
                              <MessageSquare className="w-3.5 h-3.5" />
                            )}
                            {project.tag}
                          </span>
                        </div>
                      </div>

                      {/* Project Info */}
                      <div className="p-6 flex-grow flex flex-col">
                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                          {project.title}
                        </h3>

                        <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3 flex-grow">
                          {project.description}
                        </p>

                        {/* Meta Info */}
                        <div className="flex items-center gap-4 mb-4 text-xs text-gray-500">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            <span>
                              {new Date(project.date).toLocaleDateString(
                                "en-US",
                                { year: "numeric", month: "short" }
                              )}
                            </span>
                          </div>
                          {project.duration && (
                            <div className="flex items-center gap-1">
                              <TrendingUp className="w-3 h-3" />
                              <span>{project.duration}</span>
                            </div>
                          )}
                        </div>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.technologies.slice(0, 3).map((tech, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-gray-800/50 border border-gray-700 rounded-lg text-xs text-gray-300 font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.technologies.length > 3 && (
                            <span className="px-3 py-1 bg-gray-800/50 border border-gray-700 rounded-lg text-xs text-gray-400 font-medium">
                              +{project.technologies.length - 3}
                            </span>
                          )}
                        </div>

                        {/* View Details Link */}
                        <Link href={`/projects/${project.slug}`}>
                          <motion.span
                            whileHover={{ x: 5 }}
                            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold text-sm group/link cursor-pointer"
                          >
                            View Details
                            <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                          </motion.span>
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-20"
              >
                <div className="w-20 h-20 bg-gray-800/50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="w-10 h-10 text-gray-600" />
                </div>
                <h3 className="text-2xl font-bold mb-2">No Projects Found</h3>
                <p className="text-gray-400 mb-6">
                  Try adjusting your filters or search query
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setActiveFilter("all");
                    setSearchQuery("");
                  }}
                  className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all"
                >
                  Reset Filters
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-[5vw] lg:px-[10vw]">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-3xl p-12 text-center"
          >
            <div className="relative z-10">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                Ready to Start Your Project?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let's discuss your ideas and turn them into reality. Get a free
                consultation and project quote.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/quote">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-white text-blue-600 rounded-full font-bold hover:shadow-lg transition-shadow flex items-center gap-2"
                  >
                    <Zap className="w-5 h-5" />
                    Get Free Quote
                  </motion.button>
                </Link>
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-full font-bold hover:bg-white/20 transition-colors"
                  >
                    Contact Me
                  </motion.button>
                </Link>
              </div>
            </div>

            {/* Background Animation */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent rounded-3xl"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;