"use client";

import React, { useCallback, useMemo } from "react";
import { motion } from "framer-motion";
import {
  Heart,
  Mail,
  Phone,
  MapPin,
  MessageSquare,
  Instagram,
  Linkedin,
  Github,
  ArrowUp,
  Sparkles,
  Code,
  Zap,
} from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const quickLinks = useMemo(
    () => [
      { name: "Home", href: "/" },
      { name: "Services", href: "/services" },
      { name: "Pricing", href: "/pricing" },
      { name: "Contact", href: "/contact" },
    ],
    [],
  );

  const services = useMemo(
    () => [
      { name: "Web Development", href: "/services#web" },
      { name: "Telegram Bots", href: "/services#telegram" },
      { name: "UI/UX Design", href: "/services#design" },
      { name: "Consultation", href: "/quote" },
    ],
    [],
  );

  const socialLinks = useMemo(
    () => [
      {
        icon: MessageSquare,
        name: "Telegram",
        link: "https://t.me/pounes_support",
        color: "hover:text-blue-400",
      },
      {
        icon: Phone,
        name: "WhatsApp",
        link: "https://wa.me/989215193594",
        color: "hover:text-green-400",
      },
      {
        icon: Instagram,
        name: "Instagram",
        link: "https://instagram.com/abolfazl_mokhtari_",
        color: "hover:text-pink-400",
      },
      {
        icon: Linkedin,
        name: "LinkedIn",
        link: "https://linkedin.com/in/abolfazl-mokhtari",
        color: "hover:text-blue-500",
      },
      {
        icon: Github,
        name: "GitHub",
        link: "https://github.com/abolfazl0215",
        color: "hover:text-gray-400",
      },
    ],
    [],
  );

  const containerVariants = useMemo(
    () => ({
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.04,
        },
      },
    }),
    [],
  );

  const itemVariants = useMemo(
    () => ({
      hidden: { y: 8, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.25,
          ease: "easeOut",
        },
      },
    }),
    [],
  );

  return (
    <footer className="relative py-12 px-[5vw] lg:px-[10vw] border-t border-gray-800 overflow-hidden">
      <div className="container mx-auto relative z-10">
        {/* CTA Section - حذف backdrop-blur */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.3 }}
          className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-3xl p-12 text-center mb-16">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full mb-6">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">
                Ready to Start?
              </span>
            </div>

            <h3 className="text-3xl lg:text-4xl font-bold mb-4">
              Let's Build Something Amazing Together
            </h3>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Transform your ideas into reality with professional
              development services
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/quote">
                <button className="px-8 py-3 bg-white text-blue-600 rounded-full font-bold hover:shadow-lg transition-shadow active:scale-95 flex items-center gap-2 will-change-transform">
                  <Zap className="w-5 h-5" />
                  Get Free Quote
                </button>
              </Link>
              <Link href="/contact">
                <button className="px-8 py-3 bg-white/10 border-2 border-white/20 rounded-full font-bold hover:bg-white/20 transition-all active:scale-95 will-change-transform">
                  Contact Me
                </button>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Code className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                YourBrand
              </span>
            </div>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Full-stack developer specializing in modern web
              applications and Telegram solutions. Building digital
              experiences that matter.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 bg-gray-800/50 rounded-lg flex items-center justify-center transition-all hover:scale-110 active:scale-95 ${social.color} border border-gray-700 hover:border-blue-500/30 will-change-transform`}>
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-bold mb-4 text-white">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors text-sm flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-bold mb-4 text-white">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    href={service.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors text-sm flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-bold mb-4 text-white">
              Get In Touch
            </h4>
            <div className="space-y-3">
              <a
                href="mailto:your.email@example.com"
                className="flex items-start gap-3 text-gray-400 hover:text-blue-400 transition-colors text-sm group">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="group-hover:translate-x-1 transition-transform">
                  abolfazl021mokhtari@gmail.com
                </span>
              </a>
              <a
                href="tel:+37477144594"
                className="flex items-start gap-3 text-gray-400 hover:text-blue-400 transition-colors text-sm group">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="group-hover:translate-x-1 transition-transform">
                  +374 77 144 594
                </span>
              </a>
              <div className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Yerevan, Armenia</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.25 }}
          className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm flex items-center gap-2">
              © {new Date().getFullYear()} All Rights Reserved. Made
              with
              <Heart className="w-4 h-4 text-red-500 fill-red-500" />
              by Abolfazl
            </div>

            <div className="flex items-center gap-6">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                Terms of Service
              </Link>
            </div>

            {/* Scroll to Top Button */}
            <button
              onClick={scrollToTop}
              className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center hover:shadow-lg hover:shadow-blue-500/50 transition-all hover:scale-110 active:scale-90 will-change-transform"
              aria-label="Back to top">
              <ArrowUp className="w-5 h-5 text-white" />
            </button>
          </div>
        </motion.div>

        {/* Tech Stack Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.25 }}
          className="mt-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800/30 border border-gray-700/50 rounded-full text-xs text-gray-500">
            <Code className="w-3 h-3" />
            <span>Built with Next.js, React & Tailwind CSS</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
