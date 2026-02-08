"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  MessageSquare,
  Linkedin,
  Github,
  Instagram,
  Sparkles,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [hoveredSocial, setHoveredSocial] = useState(null);

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      value: "Yerevan, Armenia",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+374 77 144 594",
      gradient: "from-purple-500 to-pink-500",
      link: "tel:+37477144594",
    },
    {
      icon: Mail,
      title: "Email",
      value: "abolfazl021mokhtari@gmail.com",
      gradient: "from-orange-500 to-red-500",
      link: "mailto:abolfazl021mokhtari@gmail.com",
    },
  ];

  const socialLinks = [
    {
      icon: MessageSquare,
      name: "Telegram",
      username: "@pounes_support",
      link: "https://t.me/pounes_support",
      color: "from-blue-400 to-blue-600",
      hoverColor: "group-hover:text-blue-400",
    },
    {
      icon: Phone,
      name: "WhatsApp",
      username: "+98 921 51 93 594",
      link: "https://wa.me/989215193594",
      color: "from-green-400 to-green-600",
      hoverColor: "group-hover:text-green-400",
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      e.target.reset();
    }, 3000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 15, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="contact"
      className="py-20 px-[5vw] lg:px-[10vw] relative overflow-hidden">
      {/* بک‌گراند ساده بدون blur */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/3 rounded-full" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/3 rounded-full" />
      </div>

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4 }}
          className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-blue-400 font-medium">
              Get In Touch
            </span>
          </motion.div>

          <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
            Let's Create Something Amazing
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can work
            together to bring your ideas to life.
          </p>
        </motion.div>

        {/* Main Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-2 gap-12">
          {/* Left Side - Contact Info & Social */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Contact Information - حذف whileHover از motion.div */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="group opacity-0 animate-fade-in"
                  style={{
                    animationDelay: `${index * 0.08}s`,
                    animationFillMode: "forwards",
                  }}>
                  {info.link ? (
                    <a
                      href={info.link}
                      className="flex items-start gap-4 p-4 rounded-2xl bg-[#0D1B2A]/50 border border-gray-800 hover:border-blue-500/30 transition-all hover:translate-x-1 will-change-transform">
                      <div
                        className={`w-14 h-14 rounded-xl bg-gradient-to-br ${info.gradient} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg will-change-transform`}>
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="font-bold mb-1 text-white group-hover:text-blue-400 transition-colors">
                          {info.title}
                        </div>
                        <div className="text-gray-400 text-sm">
                          {info.value}
                        </div>
                      </div>
                      <ArrowRight className="w-5 h-5 text-gray-600 group-hover:text-blue-400 opacity-0 group-hover:opacity-100 transition-all" />
                    </a>
                  ) : (
                    <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#0D1B2A]/50 border border-gray-800">
                      <div
                        className={`w-14 h-14 rounded-xl bg-gradient-to-br ${info.gradient} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="font-bold mb-1 text-white">
                          {info.title}
                        </div>
                        <div className="text-gray-400 text-sm">
                          {info.value}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Social Links - حذف whileHover */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.3 }}
              className="p-6 rounded-2xl bg-[#0D1B2A]/50 border border-gray-800">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-blue-400" />
                Connect With Me
              </h3>
              <div className="space-y-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() => setHoveredSocial(index)}
                    onMouseLeave={() => setHoveredSocial(null)}
                    className="group flex items-center gap-4 p-4 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-blue-500/30 transition-all cursor-pointer hover:translate-x-1 will-change-transform opacity-0 animate-fade-in"
                    style={{
                      animationDelay: `${0.3 + index * 0.05}s`,
                      animationFillMode: "forwards",
                    }}>
                    <div
                      className={`w-12 h-12 rounded-lg bg-gradient-to-br ${social.color} flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg will-change-transform`}>
                      <social.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-white group-hover:text-blue-400 transition-colors">
                        {social.name}
                      </div>
                      <div className="text-sm text-gray-400">
                        {social.username}
                      </div>
                    </div>
                    <ArrowRight
                      className={`w-5 h-5 text-gray-600 ${social.hoverColor} transition-all ${hoveredSocial === index ? "translate-x-1" : ""}`}
                    />
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Quick Link - حذف whileHover و whileTap */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.3 }}>
              <Link href="/contact">
                <button className="w-full p-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl hover:border-blue-500/40 transition-all group active:scale-98 will-change-transform cursor-pointer">
                  <div className="flex items-center justify-center gap-2 text-blue-400 font-semibold">
                    <MessageSquare className="w-5 h-5" />
                    <span>View Full Contact Page</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div variants={itemVariants}>
            <div className="p-8 rounded-3xl bg-[#0D1B2A]/50 border border-gray-800">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-300">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-gray-900/50 border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-white placeholder-gray-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-300">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-gray-900/50 border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-white placeholder-gray-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300">
                      Subject
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="How can I help you?"
                      className="w-full px-4 py-3 rounded-xl bg-gray-900/50 border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-white placeholder-gray-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300">
                      Message
                    </label>
                    <textarea
                      required
                      rows={6}
                      placeholder="Tell me about your project..."
                      className="w-full px-4 py-3 rounded-xl bg-gray-900/50 border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all resize-none text-white placeholder-gray-500"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 will-change-transform cursor-pointer ${
                      isSubmitting
                        ? "bg-gray-700 cursor-not-allowed"
                        : "bg-gradient-to-r from-blue-500 to-purple-600 hover:shadow-lg hover:shadow-blue-500/50 active:scale-98"
                    }`}>
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              ) : (
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.25 }}
                  className="text-center py-12">
                  <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-gray-400">
                    Thank you for reaching out. I'll get back to you
                    soon!
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* اضافه کردن keyframes برای fade-in */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </section>
  );
};

export default Contact;
