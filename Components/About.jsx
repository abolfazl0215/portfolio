"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Sparkles,
  Award,
  Users,
  Coffee,
  Zap,
  CheckCircle2,
} from "lucide-react";

const About = () => {
  const skills = [
    {
      name: "Next.js",
      icon: "/icon/nextjs.svg",
      color: "from-black to-gray-800",
    },
    {
      name: "React",
      icon: "/icon/reactjs.svg",
      color: "from-blue-400 to-blue-600",
    },
    {
      name: "TypeScript",
      icon: "/icon/typescript1.svg",
      color: "from-blue-600 to-blue-800",
    },
    {
      name: "Telegram",
      icon: "/icon/telegram.svg",
      color: "from-blue-500 to-blue-700",
    },
    {
      name: "Node.js",
      icon: "/icon/nodejs.svg",
      color: "from-green-500 to-green-700",
    },
  ];

  const stats = [
    {
      icon: Award,
      label: "Years Experience",
      value: "5+",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Users,
      label: "Happy Clients",
      value: "30+",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Coffee,
      label: "Projects Done",
      value: "50+",
      color: "from-blue-400 to-purple-500",
    },
  ];

  const highlights = [
    "Full-stack web development with modern frameworks",
    "Telegram bot development & automation",
    "Responsive UI/UX design implementation",
    "RESTful API design and integration",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <section
      id="about"
      className="relative bg-[#0A0F1C] py-20 px-[5vw] lg:px-[10vw] overflow-hidden">
      {/* Simplified Static Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="hidden md:block relative order-2 lg:order-1">
            <div className="relative max-w-md mx-auto lg:mx-0">
              {/* Static Glowing Background */}
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/15 via-purple-500/15 to-blue-500/15 rounded-3xl blur-2xl opacity-50" />

              {/* Image Container - Removed hover scale */}
              <div className="relative rounded-3xl overflow-hidden transition-all duration-300">
                <Image
                  src="/images/me32.png"
                  width={1000}
                  height={1000}
                  alt="About Abolfazl Mokhtari"
                  className="w-5/6 mx-auto h-auto"
                  priority
                />
              </div>

              {/* Floating Stats Cards - Simplified */}
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.3 + index * 0.1,
                      duration: 0.4,
                    }}
                    whileHover={{ scale: 1.05 }}
                    className={`absolute ${
                      index === 0
                        ? "-top-6 -right-6"
                        : index === 1
                          ? "top-1/2 -left-6"
                          : "bottom-6 -right-6"
                    } bg-[#0D1B2A]/80 border border-blue-500/30 rounded-2xl p-4 shadow-xl`}>
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">
                          {stat.label}
                        </p>
                        <p className="text-2xl font-bold text-white">
                          {stat.value}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right - Content Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="order-1 lg:order-2">
            {/* Section Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-block mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full">
                <Sparkles className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-blue-400 font-medium">
                  About Me
                </span>
              </div>
            </motion.div>

            {/* Title */}
            <motion.h2
              variants={itemVariants}
              className="text-4xl lg:text-4xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
              Crafting Digital Experiences
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-gray-400 text-lg leading-relaxed mb-8">
              I'm a passionate full-stack developer specializing in
              building exceptional web applications and Telegram bots.
              With 5+ years of experience, I transform ideas into
              elegant, scalable solutions using cutting-edge
              technologies.
            </motion.p>

            {/* Highlights - Simplified */}
            <motion.div variants={itemVariants} className="mb-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.4 + index * 0.05,
                      duration: 0.3,
                    }}
                    className="flex items-start gap-3">
                    <div className="mt-1">
                      <CheckCircle2 className="w-5 h-5 text-blue-400" />
                    </div>
                    <span className="text-gray-300 text-sm">
                      {highlight}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Skills Section */}
            <motion.div variants={itemVariants}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Code2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Tech Stack & Skills
                </h3>
              </div>

              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.5 + index * 0.05,
                      duration: 0.3,
                    }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="group relative">
                    <div
                      className={`w-12 h-12 sm:w-12 sm:h-12 bg-gradient-to-br ${skill.color} rounded-xl flex items-center justify-center p-2.5 sm:p-3 border border-gray-800 hover:border-blue-500/50 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl`}>
                      <Image
                        src={skill.icon}
                        width={100}
                        height={100}
                        alt={`${skill.name} icon`}
                        className="w-full h-full object-contain filter brightness-0 invert"
                      />
                    </div>
                    {/* Tooltip */}
                    <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                      <div className="bg-gray-900 border border-gray-700 text-white text-xs px-3 py-1.5 rounded-lg whitespace-nowrap shadow-xl">
                        {skill.name}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA Buttons - Simplified */}
            <motion.div
              variants={itemVariants}
              className="mt-10 flex flex-wrap gap-4">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="group flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all">
                View My Work
                <Zap className="w-5 h-5" />
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-8 py-3 bg-gray-800/50 border border-gray-700 rounded-full font-semibold hover:border-blue-500/50 transition-all">
                Let's Talk
                <Sparkles className="w-5 h-5" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
