"use client";

import React, { useState, useCallback, useMemo } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Linkedin,
  Github,
  Twitter,
  MessageSquare,
  Clock,
  CheckCircle,
  Sparkles,
  Instagram,
} from "lucide-react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    service: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactInfo = useMemo(
    () => [
      {
        icon: Mail,
        title: "Email",
        value: "abolfazl021mokhtari@gmail.com",
        link: "mailto:abolfazl021mokhtari@gmail.com",
      },
      {
        icon: Phone,
        title: "Phone",
        value: "+374 77 144 594",
        link: "tel:+37747144594",
      },
      {
        icon: MapPin,
        title: "Location",
        value: "Yerevan, Armenia",
        link: null,
      },
      {
        icon: Clock,
        title: "Response Time",
        value: "Within 24 hours",
        link: null,
      },
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
        link: "https://wa.me/37477144594",
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

  const services = useMemo(
    () => [
      "Full-Stack Web Development",
      "Telegram Bot Development",
      "Telegram Mini App",
      "UI/UX Design",
      "API Development",
      "Consultation",
      "Other",
    ],
    [],
  );

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        service: "",
      });
    }, 3000);
  }, []);

  const handleChange = useCallback((e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0F1C] text-white">
      <Navbar />
      {/* Hero Section */}
      <section className="relative pt-28 sm:pt-32 md:pt-36 py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-[10vw] overflow-hidden">
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-4 sm:mb-6">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" />
              <span className="text-xs sm:text-sm text-blue-400 font-medium">
                Let's Connect
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent px-4">
              Get In Touch
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 px-4">
              Have a project in mind? Let's discuss how I can help
              bring your ideas to life.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-1 space-y-4 sm:space-y-6">
              {/* Contact Cards */}
              <div className="space-y-3 sm:space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="p-4 sm:p-6 bg-[#0D1B2A]/50 border border-gray-800 rounded-xl sm:rounded-2xl hover:border-blue-500/30 transition-all backdrop-blur-sm">
                    {info.link ? (
                      <a
                        href={info.link}
                        className="flex items-start gap-3 sm:gap-4 group">
                        <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:from-blue-500/30 group-hover:to-purple-600/30 transition-all">
                          <info.icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h3 className="text-xs sm:text-sm text-gray-400 mb-1">
                            {info.title}
                          </h3>
                          <p className="font-semibold text-sm sm:text-base text-white group-hover:text-blue-400 transition-colors break-words">
                            {info.value}
                          </p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-start gap-3 sm:gap-4">
                        <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-lg sm:rounded-xl flex items-center justify-center">
                          <info.icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h3 className="text-xs sm:text-sm text-gray-400 mb-1">
                            {info.title}
                          </h3>
                          <p className="font-semibold text-sm sm:text-base break-words">
                            {info.value}
                          </p>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="p-4 sm:p-6 bg-[#0D1B2A]/50 border border-gray-800 rounded-xl sm:rounded-2xl backdrop-blur-sm">
                <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
                  Follow Me
                </h3>
                <div className="flex flex-wrap gap-3 sm:gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-10 h-10 sm:w-12 sm:h-12 bg-gray-800/50 rounded-lg sm:rounded-xl flex items-center justify-center transition-all hover:scale-110 active:scale-95 ${social.color}`}>
                      <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </a>
                  ))}
                </div>
              </motion.div>

              {/* Availability Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="p-4 sm:p-6 bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl sm:rounded-2xl backdrop-blur-sm">
                <div className="flex items-center gap-2 sm:gap-3 mb-2">
                  <div className="relative flex-shrink-0">
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
                    <div className="absolute inset-0 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-ping"></div>
                  </div>
                  <span className="font-semibold text-sm sm:text-base text-green-400">
                    Available for new projects
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-gray-400">
                  Currently accepting new client projects. Let's
                  create something amazing together!
                </p>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-2">
              <div className="p-4 sm:p-6 md:p-8 bg-[#0D1B2A]/50 border border-gray-800 rounded-2xl sm:rounded-3xl backdrop-blur-sm">
                {!isSubmitted ? (
                  <form
                    onSubmit={handleSubmit}
                    className="space-y-4 sm:space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                      {/* Name Input */}
                      <div>
                        <label className="block text-xs sm:text-sm font-medium mb-2 text-gray-300">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base bg-gray-900/50 border border-gray-700 rounded-lg sm:rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                          placeholder="John Doe"
                        />
                      </div>

                      {/* Email Input */}
                      <div>
                        <label className="block text-xs sm:text-sm font-medium mb-2 text-gray-300">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base bg-gray-900/50 border border-gray-700 rounded-lg sm:rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                      {/* Service Select */}
                      <div>
                        <label className="block text-xs sm:text-sm font-medium mb-2 text-gray-300">
                          Service Interested In *
                        </label>
                        <select
                          name="service"
                          required
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base bg-gray-900/50 border border-gray-700 rounded-lg sm:rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all">
                          <option value="">Select a service</option>
                          {services.map((service, index) => (
                            <option key={index} value={service}>
                              {service}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Subject Input */}
                      <div>
                        <label className="block text-xs sm:text-sm font-medium mb-2 text-gray-300">
                          Subject *
                        </label>
                        <input
                          type="text"
                          name="subject"
                          required
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base bg-gray-900/50 border border-gray-700 rounded-lg sm:rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                          placeholder="Project inquiry"
                        />
                      </div>
                    </div>

                    {/* Message Textarea */}
                    <div>
                      <label className="block text-xs sm:text-sm font-medium mb-2 text-gray-300">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base bg-gray-900/50 border border-gray-700 rounded-lg sm:rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all resize-none"
                        placeholder="Tell me about your project..."
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full py-3 sm:py-4 text-sm sm:text-base rounded-lg sm:rounded-xl font-semibold transition-all flex items-center justify-center gap-2 ${
                        isSubmitting
                          ? "bg-gray-700 cursor-not-allowed"
                          : "bg-gradient-to-r from-blue-500 to-purple-600 hover:shadow-lg hover:shadow-blue-500/50 active:scale-98"
                      }`}>
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                ) : (
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-center py-12 sm:py-16">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring" }}
                      className="w-16 h-16 sm:w-20 sm:h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                      <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-green-400" />
                    </motion.div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-2">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-sm sm:text-base text-gray-400 px-4">
                      Thank you for reaching out. I'll get back to you
                      within 24 hours.
                    </p>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ContactPage;
