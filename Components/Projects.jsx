"use client";

import React, { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import {
  Globe,
  MessageSquare,
  ExternalLink,
  Github,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Code,
  Zap,
  Star,
} from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const projects = [
  {
    id: 1,
    slug: "e-commerce-platform",
    title: "E-Commerce Platform",
    description:
      "A modern, responsive online store with advanced features including real-time inventory, secure payment processing, and comprehensive admin dashboard.",
    tag: "Website",
    category: "web",
    image:
      "https://res.cloudinary.com/dtakyi9mf/image/upload/v1768893218/pexels-arthousestudio-4530180_b7otjf.jpg",
    technologies: ["Next.js", "Tailwind", "Stripe"],
    featured: true,
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    slug: "corporate-website",
    title: "Corporate Website",
    description:
      "Professional business website with elegant design, smooth animations, SEO optimization, and integrated contact forms for lead generation.",
    tag: "Website",
    category: "web",
    image:
      "https://res.cloudinary.com/dtakyi9mf/image/upload/v1768893218/pexels-arthousestudio-4530180_b7otjf.jpg",
    technologies: ["React", "GSAP", "Node.js"],
    featured: false,
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    slug: "trading-bot",
    title: "Advanced Trading Bot",
    description:
      "Intelligent Telegram bot for automated trading with real-time market analysis, price alerts, and portfolio management features.",
    tag: "Telegram Bot",
    category: "telegram",
    image:
      "https://res.cloudinary.com/dtakyi9mf/image/upload/v1768893218/pexels-arthousestudio-4530180_b7otjf.jpg",
    technologies: ["Python", "Redis", "PostgreSQL"],
    featured: true,
    liveUrl: "#",
  },
  {
    id: 4,
    slug: "customer-support-bot",
    title: "Customer Support Bot",
    description:
      "AI-powered support bot with natural language processing, ticket management, and seamless integration with CRM systems.",
    tag: "Telegram Bot",
    category: "telegram",
    image:
      "https://res.cloudinary.com/dtakyi9mf/image/upload/v1768893218/pexels-arthousestudio-4530180_b7otjf.jpg",
    technologies: ["Node.js", "OpenAI", "MongoDB"],
    featured: false,
    liveUrl: "#",
  },
  {
    id: 5,
    slug: "saas-dashboard",
    title: "SaaS Dashboard",
    description:
      "Comprehensive analytics dashboard with real-time data visualization, team collaboration tools, and advanced reporting features.",
    tag: "Web Application",
    category: "web",
    image:
      "https://res.cloudinary.com/dtakyi9mf/image/upload/v1768893218/pexels-arthousestudio-4530180_b7otjf.jpg",
    technologies: ["React", "D3.js", "Firebase"],
    featured: true,
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 6,
    slug: "community-bot",
    title: "Community Management Bot",
    description:
      "Powerful moderation bot with auto-moderation, welcome messages, role management, and comprehensive analytics dashboard.",
    tag: "Telegram Bot",
    category: "telegram",
    image:
      "https://res.cloudinary.com/dtakyi9mf/image/upload/v1768893218/pexels-arthousestudio-4530180_b7otjf.jpg",
    technologies: ["Python", "Redis", "Docker"],
    featured: false,
    liveUrl: "#",
  },
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [hoveredProject, setHoveredProject] = useState(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const filters = [
    { id: "all", label: "All Projects", icon: Sparkles },
    { id: "web", label: "Websites", icon: Globe },
    { id: "telegram", label: "Telegram Bots", icon: MessageSquare },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-20 px-[5vw] lg:px-[10vw] relative overflow-hidden">
      
      {/* بک‌گراند ساده بدون blur */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-500/3 rounded-full" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-blue-500/3 rounded-full" />
      </div>

      <div className="mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-center mb-16">
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-blue-400 font-medium">
              Featured Work
            </span>
          </motion.div>

          <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
            My Projects
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Explore my portfolio of web applications and Telegram
            bots, crafted with modern technologies and best practices
          </p>
        </motion.div>

        {/* Filter Tabs - حذف framer-motion */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-16">
          {filters.map((filter) => {
            const Icon = filter.icon;
            return (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all will-change-transform active:scale-95 ${
                  activeFilter === filter.id
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/50"
                    : "bg-gray-800/50 border border-gray-700 text-gray-300 hover:border-blue-500/50"
                }`}>
                <Icon className="w-4 h-4" />
                {filter.label}
              </button>
            );
          })}
        </motion.div>

        {/* Projects Swiper */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="relative px-4">
            {filteredProjects.length > 0 ? (
              <>
                <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  spaceBetween={24}
                  slidesPerView={1}
                  navigation={{
                    nextEl: ".swiper-button-next-custom",
                    prevEl: ".swiper-button-prev-custom",
                  }}
                  pagination={{
                    clickable: true,
                    el: ".swiper-pagination-custom",
                  }}
                  autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }}
                  breakpoints={{
                    640: {
                      slidesPerView: Math.min(filteredProjects.length, 1),
                      spaceBetween: 20,
                    },
                    768: {
                      slidesPerView: Math.min(filteredProjects.length, 2),
                      spaceBetween: 24,
                    },
                    1024: {
                      slidesPerView: Math.min(filteredProjects.length, 2.5),
                      spaceBetween: 24,
                    },
                    1280: {
                      slidesPerView: Math.min(filteredProjects.length, 3),
                      spaceBetween: 30,
                    },
                  }}
                  className="!pb-10 md:!pb-16 !overflow-visible">
                  {filteredProjects.map((project, index) => (
                    <SwiperSlide
                      key={project.id}
                      className="!h-auto !flex">
                      <div
                        onMouseEnter={() => setHoveredProject(project.id)}
                        onMouseLeave={() => setHoveredProject(null)}
                        className="group relative w-full h-full flex">
                        
                        {/* Featured Badge */}
                        {project.featured && (
                          <div className="absolute -top-3 -right-3 z-20 bg-gradient-to-r from-yellow-400 to-orange-500 p-3 rounded-full shadow-lg">
                            <Star className="w-4 h-4 text-white fill-white" />
                          </div>
                        )}

                        <div className="bg-[#0D1B2A]/50 rounded-2xl overflow-hidden border-2 border-gray-800 hover:border-blue-500/40 transition-all duration-200 w-full flex flex-col">
                          
                          {/* Project Image with Overlay */}
                          <div className="relative overflow-hidden aspect-video flex-shrink-0">
                            <Image
                              alt={project.title}
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                              src={project.image}
                              width={600}
                              height={400}
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A] via-[#0D1B2A]/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-200" />

                            {/* Hover Actions */}
                            <div
                              className={`absolute inset-0 flex items-center justify-center gap-4 transition-opacity duration-200 ${
                                hoveredProject === project.id
                                  ? "opacity-100"
                                  : "opacity-0"
                              }`}>
                              {project.liveUrl && (
                                <a
                                  href={project.liveUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="p-3 bg-blue-500 hover:bg-blue-600 rounded-full shadow-lg transition-all hover:scale-110 will-change-transform">
                                  <ExternalLink className="w-5 h-5 text-white" />
                                </a>
                              )}
                              {project.githubUrl && (
                                <a
                                  href={project.githubUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full shadow-lg transition-all hover:scale-110 will-change-transform">
                                  <Github className="w-5 h-5 text-white" />
                                </a>
                              )}
                            </div>

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

                            <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                              {project.description}
                            </p>

                            <div className="flex-grow"></div>

                            {/* Technologies */}
                            <div className="flex flex-wrap gap-2 mb-4">
                              {project.technologies.map((tech, i) => (
                                <span
                                  key={i}
                                  className="px-3 py-1 bg-gray-800/50 border border-gray-700 rounded-lg text-xs text-gray-300 font-medium">
                                  {tech}
                                </span>
                              ))}
                            </div>

                            {/* View Details Link */}
                            <div className="mt-auto">
                              <Link href={`/projects/${project.slug}`}>
                                <span className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold text-sm group/link cursor-pointer transition-colors">
                                  View Details
                                  <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                                </span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>

                {/* Custom Navigation Buttons - حذف framer-motion */}
                <div className="flex items-center justify-center gap-6 mt-0 md:mt-8">
                  <button className="swiper-button-prev-custom w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-blue-500/30 bg-gray-900/50 flex items-center justify-center text-white hover:bg-blue-600 hover:border-blue-600 transition-all shadow-lg hover:scale-105 active:scale-95 will-change-transform">
                    <ChevronLeft className="w-6 h-6" />
                  </button>

                  <Link href="/projects">
                    <span className="group flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-shadow cursor-pointer active:scale-95 will-change-transform">
                      See All
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>

                  <button className="swiper-button-next-custom w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-blue-500/30 bg-gray-900/50 flex items-center justify-center text-white hover:bg-blue-600 hover:border-blue-600 transition-all shadow-lg hover:scale-105 active:scale-95 will-change-transform">
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>

                {/* Custom Pagination */}
                <div className="swiper-pagination-custom flex justify-center gap-2 mt-8"></div>
              </>
            ) : (
              <div className="text-center py-20">
                <p className="text-gray-400 text-lg">
                  No projects found in this category.
                </p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Stats Section - حذف whileHover */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          {[
            { label: "Projects Completed", value: "50+", icon: Code },
            { label: "Happy Clients", value: "30+", icon: Star },
            { label: "Technologies", value: "15+", icon: Zap },
            { label: "Years Experience", value: "5+", icon: Sparkles },
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-[#0D1B2A]/50 border border-gray-800 rounded-2xl p-6 text-center hover:border-blue-500/40 transition-all hover:-translate-y-1 will-change-transform">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>

      <style jsx global>{`
        .swiper-pagination-custom .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: #3b82f6;
          opacity: 0.3;
          border-radius: 50%;
          transition: all 0.3s;
        }
        .swiper-pagination-custom .swiper-pagination-bullet-active {
          opacity: 1;
          width: 32px;
          border-radius: 5px;
          background: linear-gradient(to right, #3b82f6, #9333ea);
        }

        .swiper-slide {
          height: auto !important;
          display: flex !important;
        }
      `}</style>
    </section>
  );
};

export default Projects;