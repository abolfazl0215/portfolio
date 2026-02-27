"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Code,
  Sparkles,
  Award,
  Briefcase,
  GraduationCap,
  Heart,
  Coffee,
  Zap,
  Globe,
  MessageSquare,
  Database,
  Smartphone,
  Server,
  Layout,
  Terminal,
  Cpu,
  CheckCircle,
  ArrowRight,
  Download,
  Mail,
  Calendar,
  MapPin,
  Users,
  Target,
  TrendingUp,
  BookOpen,
} from "lucide-react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

const AboutPage = () => {
  const [activeTab, setActiveTab] = useState("frontend");

  const skills = {
    frontend: [
      { name: "React & Next.js", level: 95, icon: Code },
      { name: "TypeScript", level: 90, icon: Terminal },
      { name: "Tailwind CSS", level: 95, icon: Layout },
      { name: "Framer Motion", level: 85, icon: Zap },
      { name: "HTML/CSS/JavaScript", level: 98, icon: Globe },
    ],
    backend: [
      { name: "Node.js & Express", level: 90, icon: Server },
      { name: "Python & FastAPI", level: 85, icon: Code },
      { name: "MongoDB & PostgreSQL", level: 88, icon: Database },
      { name: "RESTful APIs", level: 92, icon: Terminal },
      {
        name: "Authentication & Security",
        level: 87,
        icon: CheckCircle,
      },
    ],
    telegram: [
      { name: "Telegram Bot API", level: 95, icon: MessageSquare },
      { name: "Telegram Mini Apps", level: 90, icon: Smartphone },
      { name: "Account Management", level: 92, icon: Users },
      { name: "Automation & Scripts", level: 88, icon: Cpu },
      { name: "Payment Integration", level: 85, icon: Award },
    ],
  };

  const experience = [
    {
      year: "2019",
      title: "Started Programming Journey",
      description:
        "Began learning web development with HTML, CSS, and JavaScript. Built first portfolio website and fell in love with coding.",
      icon: Code,
      color: "from-blue-500 to-cyan-500",
    },
    {
      year: "2020-2021",
      title: "Mastered Frontend Development",
      description:
        "Deep dived into React ecosystem, learned modern frameworks like Next.js, and started building complex web applications.",
      icon: Globe,
      color: "from-purple-500 to-pink-500",
    },
    {
      year: "2022",
      title: "Backend & Full-Stack",
      description:
        "Expanded skills to backend development with Node.js and Python. Started building complete full-stack applications and REST APIs.",
      icon: Server,
      color: "from-green-500 to-emerald-500",
    },
    {
      year: "2023",
      title: "Telegram Specialist",
      description:
        "Specialized in Telegram bot development, mini apps, and automation. Built advanced bots for trading, support, and community management.",
      icon: MessageSquare,
      color: "from-orange-500 to-red-500",
    },
    {
      year: "2024-2025",
      title: "Professional Developer",
      description:
        "Working with clients globally, delivering high-quality web applications and Telegram solutions. Continuously learning and growing.",
      icon: Award,
      color: "from-yellow-400 to-orange-500",
    },
  ];

  const achievements = [
    { label: "Years of Experience", value: "6+", icon: Calendar },
    { label: "Projects Completed", value: "50+", icon: CheckCircle },
    { label: "Happy Clients", value: "30+", icon: Users },
    { label: "Technologies Mastered", value: "15+", icon: Code },
  ];

  const services = [
    {
      title: "Full-Stack Web Development",
      description:
        "End-to-end web application development with modern technologies and best practices.",
      icon: Globe,
      features: [
        "Responsive Web Design",
        "Frontend Development (React, Next.js)",
        "Backend Development (Node.js, Python)",
        "Database Design & Integration",
        "API Development",
        "Performance Optimization",
      ],
    },
    {
      title: "Telegram Bot Development",
      description:
        "Custom Telegram bots with advanced features and integrations.",
      icon: MessageSquare,
      features: [
        "Custom Bot Development",
        "Payment Integration",
        "Database Integration",
        "Admin Dashboard",
        "API Integrations",
        "Analytics & Reports",
      ],
    },
    {
      title: "Telegram Mini Apps",
      description:
        "Interactive Telegram web applications with seamless user experience.",
      icon: Smartphone,
      features: [
        "Custom Mini App Development",
        "Web3 Integration",
        "In-App Payments",
        "Cloud Storage",
        "Real-time Features",
        "Custom UI/UX Design",
      ],
    },
    {
      title: "Account Management & Automation",
      description:
        "Telegram account control, automation scripts, and management tools.",
      icon: Cpu,
      features: [
        "Account Automation",
        "Multi-Account Management",
        "Message Scheduling",
        "Auto-Response Systems",
        "Analytics & Monitoring",
        "Custom Scripts",
      ],
    },
  ];

  const values = [
    {
      icon: Target,
      title: "Quality First",
      description:
        "Delivering high-quality, maintainable code that stands the test of time.",
    },
    {
      icon: Zap,
      title: "Fast Delivery",
      description:
        "Meeting deadlines without compromising on quality and attention to detail.",
    },
    {
      icon: Users,
      title: "Client-Focused",
      description:
        "Understanding client needs and providing solutions that exceed expectations.",
    },
    {
      icon: BookOpen,
      title: "Continuous Learning",
      description:
        "Always staying updated with the latest technologies and best practices.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="min-h-screen bg-[#0A0F1C] text-white">
      <Navbar />
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
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
                <Sparkles className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-blue-400 font-medium">
                  Full-Stack Developer
                </span>
              </motion.div>

              <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent leading-tight">
                Hi, I'm [Your Name]
              </h1>

              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                A passionate full-stack developer with{" "}
                <span className="text-blue-400 font-semibold">
                  6 years of experience
                </span>{" "}
                specializing in web development and Telegram
                automation solutions.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-gray-300">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-blue-400" />
                  </div>
                  <span>Based in Yerevan, Armenia</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <Briefcase className="w-5 h-5 text-purple-400" />
                  </div>
                  <span>Available for Freelance Projects</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <Coffee className="w-5 h-5 text-green-400" />
                  </div>
                  <span>Fueled by Coffee & Code</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all flex items-center gap-2">
                    <Mail className="w-5 h-5" />
                    Get In Touch
                  </motion.button>
                </Link>
                <motion.a
                  href="/abolfazl-mokhtari-resume.pdf"
                  download
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-gray-800/50 border border-gray-700 rounded-full font-semibold hover:border-blue-500/50 transition-all flex items-center gap-2">
                  <Download className="w-5 h-5" />
                  Download CV
                </motion.a>
              </div>
            </motion.div>

            {/* Right Side - Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative">
              <div className="relative w-full aspect-square max-w-md mx-auto">
                {/* Animated Border */}
                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur-xl opacity-50"
                />

                {/* Image Container */}
                <div className="relative bg-gradient-to-br h-full from-blue-500/20 to-purple-500/20 rounded-3xl p-2 backdrop-blur-sm border border-gray-700">
                  <div className="bg-[#0D1B2A] h-full rounded-2xl overflow-hidden">
                    <Image
                      src="https://res.cloudinary.com/dtakyi9mf/image/upload/v1772188967/mohammad-rahmani-8qEB0fTe9Vw-unsplash_muqwvh.jpg"
                      alt="Profile"
                      width={500}
                      height={500}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Floating Elements */}
                <motion.div
                  animate={{
                    y: [0, -20, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -top-6 -right-6 bg-gradient-to-br from-blue-500 to-cyan-500 p-4 rounded-2xl shadow-lg">
                  <Code className="w-8 h-8 text-white" />
                </motion.div>

                <motion.div
                  animate={{
                    y: [0, 20, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -bottom-6 -left-6 bg-gradient-to-br from-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg">
                  <MessageSquare className="w-8 h-8 text-white" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-12 px-[5vw] lg:px-[10vw]">
        <div className="container mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-[#0D1B2A]/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 text-center hover:border-blue-500/40 transition-all">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <achievement.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent mb-2">
                  {achievement.value}
                </div>
                <div className="text-sm text-gray-400">
                  {achievement.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* My Story Section */}
      <section className="py-20 px-[5vw] lg:px-[10vw] bg-gradient-to-b from-transparent via-blue-500/5 to-transparent">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
              My Story
            </h2>
            <p className="text-gray-400 text-lg">
              The journey from curiosity to expertise
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#0D1B2A]/50 backdrop-blur-sm border border-gray-800 rounded-3xl p-8 lg:p-12">
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p>
                My journey into programming began{" "}
                <span className="text-blue-400 font-semibold">
                  6 years ago
                </span>{" "}
                when I wrote my first line of code. What started as
                curiosity quickly turned into a passion that shaped my
                career path.
              </p>
              <p>
                Over the years, I've evolved from building simple HTML
                pages to creating{" "}
                <span className="text-purple-400 font-semibold">
                  complex full-stack applications
                </span>{" "}
                and{" "}
                <span className="text-blue-400 font-semibold">
                  sophisticated Telegram bots
                </span>
                . Each project taught me something new, and each
                challenge made me a better developer.
              </p>
              <p>
                Today, I specialize in creating modern web
                applications using React, Next.js, and Node.js, as
                well as developing advanced Telegram solutions
                including bots, mini apps, and account automation
                tools. I'm passionate about writing clean,
                maintainable code and delivering solutions that exceed
                client expectations.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new
                technologies, contributing to open-source projects, or
                sharing my knowledge with the developer community. I
                believe in continuous learning and always staying
                ahead of the curve.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-20 px-[5vw] lg:px-[10vw]">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
              My Journey
            </h2>
            <p className="text-gray-400 text-lg">
              6 years of growth and continuous learning
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {experience.map((item, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -50 : 50,
                }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative mb-12 last:mb-0">
                <div className="flex items-start gap-6">
                  {/* Icon */}
                  <div
                    className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                    <item.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-[#0D1B2A]/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-blue-500/40 transition-all">
                    <div className="text-blue-400 font-semibold mb-2">
                      {item.year}
                    </div>
                    <h3 className="text-2xl font-bold mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Connecting Line */}
                {index < experience.length - 1 && (
                  <div className="absolute left-8 top-20 w-0.5 h-12 bg-gradient-to-b from-blue-500 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-[5vw] lg:px-[10vw] bg-gradient-to-b from-transparent via-purple-500/5 to-transparent">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
            <p className="text-gray-400 text-lg">
              Technologies I work with every day
            </p>
          </motion.div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              { id: "frontend", label: "Frontend", icon: Layout },
              { id: "backend", label: "Backend", icon: Server },
              {
                id: "telegram",
                label: "Telegram",
                icon: MessageSquare,
              },
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <motion.button
                  key={tab.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all ${
                    activeTab === tab.id
                      ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/50"
                      : "bg-gray-800/50 border border-gray-700 text-gray-300 hover:border-blue-500/50"
                  }`}>
                  <Icon className="w-4 h-4" />
                  {tab.label}
                </motion.button>
              );
            })}
          </div>

          {/* Skills List */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="max-w-3xl mx-auto space-y-6">
            {skills[activeTab].map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-[#0D1B2A]/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-blue-500/40 transition-all">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <skill.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-semibold text-lg">
                      {skill.name}
                    </span>
                  </div>
                  <span className="text-blue-400 font-semibold">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.05 }}
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* What I Do Section */}
      <section className="py-20 px-[5vw] lg:px-[10vw]">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
              What I Do
            </h2>
            <p className="text-gray-400 text-lg">
              Services I offer to bring your ideas to life
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-[#0D1B2A]/50 backdrop-blur-sm border border-gray-800 rounded-3xl p-8 hover:border-blue-500/40 transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-[5vw] lg:px-[10vw] bg-gradient-to-b from-transparent via-blue-500/5 to-transparent">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
              My Values
            </h2>
            <p className="text-gray-400 text-lg">
              Principles that guide my work
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-[#0D1B2A]/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 text-center hover:border-blue-500/40 transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-bold mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
