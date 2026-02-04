"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Github,
  Linkedin,
  Mail,
  Download,
  Sparkles,
  Code2,
  Zap,
} from "lucide-react";
import Image from "next/image";

const HeroSection = () => {
  // ساده‌ترین انیمیشن‌ها با کمترین overhead
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "#",
      icon: Linkedin,
      color: "from-blue-400 to-blue-600",
    },
    {
      name: "GitHub",
      href: "#",
      icon: Github,
      color: "from-gray-700 to-gray-900",
    },
    {
      name: "Email",
      href: "mailto:your@email.com",
      icon: Mail,
      color: "from-purple-400 to-purple-600",
    },
  ];

  return (
    <section
      id="home"
      className="relative grid-bg min-h-screen bg-[#0A0F1C] pt-28 md:pt-40 pb-20 px-[5vw] lg:px-[10vw] overflow-hidden">
      {/* بک‌گراند ساده بدون blur - فقط gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-48 w-96 h-96 bg-blue-500/5 rounded-full" />
        <div className="absolute bottom-1/4 -left-48 w-96 h-96 bg-purple-500/3 rounded-full" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-5 md:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="order-2 lg:order-1 text-center lg:text-left">
            {/* Welcome Badge - حذف backdrop-filter */}
            <motion.div
              variants={itemVariants}
              className="inline-block">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-3 md:mb-6">
                <Sparkles className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-blue-400 font-medium">
                  WELCOME TO MY WORLD
                </span>
              </div>
            </motion.div>

            {/* Greeting */}
            <motion.h2
              variants={itemVariants}
              className="text-lg md:text-2xl font-medium text-gray-300 mb-4 md:mb-4">
              Hi, I'm{" "}
              <span className="text-white font-semibold">
                Abolfazl (Abi) Mokhtari
              </span>
            </motion.h2>

            {/* Main Title */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-6xl lg:text-6xl font-bold mb-2 md:mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Web
              </span>{" "}
              <span className="bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
                Developer
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-gray-400 md:text-lg leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0">
              I craft beautiful, responsive web applications and
              powerful Telegram bots using modern technologies. Let's
              bring your ideas to life with clean code and stunning
              design.
            </motion.p>

            {/* CTA Buttons - استفاده از transform به جای scale */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 mb-10 justify-center lg:justify-start">
              <Link href="#projects">
                <button className="group flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-shadow will-change-transform active:scale-95">
                  <Code2 className="w-5 h-5" />
                  My Projects
                </button>
              </Link>

              <a
                href="/cv.pdf"
                download
                className="flex items-center gap-2 px-8 py-3 bg-gray-800/50 border border-gray-700 rounded-full font-semibold hover:border-blue-500/50 transition-colors will-change-transform active:scale-95">
                <Download className="w-5 h-5" />
                Download CV
              </a>
            </motion.div>

            {/* Social Links - ساده‌سازی انیمیشن */}
            <motion.div
              variants={itemVariants}
              className="flex gap-4 justify-center lg:justify-start">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 rounded-full bg-gradient-to-br ${social.color} flex items-center justify-center hover:shadow-lg transition-shadow will-change-transform active:scale-90`}>
                    <Icon className="w-6 h-6 text-white" />
                  </a>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right Image - بدون scale animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="order-1 lg:order-2 relative">
            <div className="relative max-w-md mx-auto">
              {/* گلو کم‌رنگ‌تر و بدون blur سنگین */}
              <div
                className="absolute inset-0 bg-gradient-to-br from-blue-500/15 via-purple-500/15 to-blue-500/15 rounded-3xl opacity-30"
                style={{ filter: "blur(60px)" }}
              />

              {/* Image Container */}
              <div className="relative rounded-3xl w-4/5 mx-auto">
                <Image
                  src="/images/me5.png"
                  alt="Abolfazl Mokhtari - Web Developer"
                  className="relative"
                  width={500}
                  height={500}
                  priority
                  loading="eager"
                />
              </div>

              {/* Floating Badge 1 - حذف backdrop-filter و blur */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="hidden md:block absolute -left-4 top-1/4 bg-[#0D1B2A] border border-blue-500/30 rounded-2xl p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <Code2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">
                      Experience
                    </p>
                    <p className="text-xl font-bold text-white">
                      5+ Years
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Badge 2 - حذف backdrop-filter و blur */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.4 }}
                className="hidden md:block absolute -right-4 bottom-1/4 bg-[#0D1B2A] border border-purple-500/30 rounded-2xl p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Projects</p>
                    <p className="text-xl font-bold text-white">
                      50+
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator - ساده‌ترین انیمیشن */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.4 }}
        className="hidden md:block absolute bottom-8 left-1/2 -translate-x-1/2">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors group">
          <span className="text-sm font-medium">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-current rounded-full p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-1.5 h-1.5 bg-current rounded-full mx-auto"
            />
          </div>
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
