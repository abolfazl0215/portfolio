"use client";

import Image from "next/image";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  Zap,
  Globe,
  MessageCircle,
  Bot,
  Sparkles,
  ArrowRight,
  Code,
  Database,
  Shield,
  Rocket,
  Users,
  BarChart,
  ChevronDown,
  ChevronUp,
  Star,
  Clock,
  Headphones,
} from "lucide-react";
import Link from "next/link";
import Navbar from "../../Components/Navbar";

const ServicesPage = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [openFaq, setOpenFaq] = useState(null);

  const services = [
    {
      id: 1,
      icon: "/icon/web.svg",
      iconComponent: Globe,
      category: "web",
      title: "Full-Stack Web Development",
      subtitle: "Modern, scalable web applications built with cutting-edge technologies",
      description:
        "Transform your ideas into powerful web applications. From responsive landing pages to complex enterprise platforms, I deliver end-to-end solutions with modern tech stacks.",
      technologies: [
        "React & Next.js",
        "Node.js & Express",
        "MongoDB & PostgreSQL",
        "Tailwind CSS",
        "RESTful APIs",
        "Authentication & Security",
      ],
      plans: [
        {
          name: "Starter",
          price: "$299-$599",
          duration: "2-3 weeks",
          ideal: "Small businesses & Startups",
          features: [
            "Responsive Landing Page",
            "Modern UI/UX Design",
            "Mobile Optimized",
            "Basic SEO Setup",
            "Contact Form Integration",
            "Google Analytics",
            "1 Month Free Support",
            "Source Code Delivery",
          ],
          popular: false,
        },
        {
          name: "Professional",
          price: "$799-$1,499",
          duration: "4-6 weeks",
          ideal: "Growing businesses",
          features: [
            "Full-Stack Web Application",
            "Custom Admin Panel",
            "Database Integration",
            "RESTful API Development",
            "User Authentication System",
            "Payment Gateway Integration",
            "Email Notifications",
            "Performance Optimization",
            "3 Months Free Support",
            "Deployment & Hosting Setup",
          ],
          popular: true,
        },
        {
          name: "Enterprise",
          price: "$1,999+",
          duration: "8-12 weeks",
          ideal: "Large organizations",
          features: [
            "Complex Web Platform",
            "Microservices Architecture",
            "Advanced Features & Modules",
            "Multiple Third-party Integrations",
            "Scalable Cloud Infrastructure",
            "Real-time Features (WebSocket)",
            "Advanced Analytics Dashboard",
            "Multi-language Support",
            "CI/CD Pipeline Setup",
            "Comprehensive Documentation",
            "6 Months Priority Support",
            "Maintenance & Updates",
          ],
          popular: false,
        },
      ],
    },
    {
      id: 2,
      icon: "/icon/telegram.svg",
      iconComponent: MessageCircle,
      category: "telegram",
      title: "Telegram Solutions",
      subtitle: "Powerful bots and mini apps for Telegram automation",
      description:
        "Leverage the power of Telegram with custom bots, mini apps, and account managers. Automate your workflow, engage with users, and build interactive experiences.",
      technologies: [
        "Telegram Bot API",
        "Python & Node.js",
        "Telegram Mini Apps",
        "Cloud Functions",
        "Database Integration",
        "Payment Processing",
      ],
      plans: [
        {
          name: "Bot Basic",
          price: "$199-$399",
          duration: "1-2 weeks",
          ideal: "Individuals & Small teams",
          features: [
            "Custom Telegram Bot",
            "Basic Command Handling",
            "User Management System",
            "Message & Media Handling",
            "Inline & Reply Keyboards",
            "Basic Admin Controls",
            "1 Month Free Support",
            "Source Code Delivery",
          ],
          popular: false,
        },
        {
          name: "Bot Premium",
          price: "$499-$899",
          duration: "3-4 weeks",
          ideal: "Businesses & Communities",
          features: [
            "Advanced Telegram Bot",
            "Database Integration",
            "Payment Processing (Crypto/Fiat)",
            "Web-based Admin Dashboard",
            "Analytics & User Reports",
            "Multiple API Integrations",
            "Scheduled Messages & Tasks",
            "Custom Workflows",
            "Anti-spam & Moderation Tools",
            "3 Months Free Support",
          ],
          popular: true,
        },
        {
          name: "Mini App",
          price: "$699-$1,299",
          duration: "4-6 weeks",
          ideal: "Advanced use cases",
          features: [
            "Telegram Mini App (Web App)",
            "Web3 & Blockchain Ready",
            "In-App Payment Integration",
            "Telegram Cloud Storage",
            "Real-time Features",
            "Account Manager Bot",
            "Custom UI/UX Design",
            "Push Notifications",
            "User Profile Management",
            "Advanced Analytics",
            "Multi-language Support",
            "4 Months Priority Support",
          ],
          popular: false,
        },
      ],
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discovery",
      description: "We discuss your requirements, goals, and vision for the project.",
      icon: Users,
    },
    {
      number: "02",
      title: "Planning",
      description: "I create a detailed project plan, timeline, and technical specification.",
      icon: BarChart,
    },
    {
      number: "03",
      title: "Development",
      description: "Building your solution with regular updates and progress reports.",
      icon: Code,
    },
    {
      number: "04",
      title: "Testing",
      description: "Thorough testing to ensure quality, performance, and reliability.",
      icon: Shield,
    },
    {
      number: "05",
      title: "Deployment",
      description: "Launch your project with proper hosting, monitoring, and documentation.",
      icon: Rocket,
    },
    {
      number: "06",
      title: "Support",
      description: "Ongoing support and maintenance to keep everything running smoothly.",
      icon: Headphones,
    },
  ];

  const faqs = [
    {
      question: "How long does a typical project take?",
      answer:
        "Project timelines vary based on complexity. A basic landing page takes 2-3 weeks, while a full-stack application can take 4-12 weeks. I provide detailed timelines during the planning phase.",
    },
    {
      question: "Do you offer revisions and modifications?",
      answer:
        "Yes! Each plan includes a specific number of revision rounds. I work closely with you to ensure the final product meets your expectations.",
    },
    {
      question: "What technologies do you use?",
      answer:
        "I work with modern tech stacks including React, Next.js, Node.js, Python, MongoDB, PostgreSQL, and more. Technology choices are made based on your project requirements.",
    },
    {
      question: "Do you provide hosting and maintenance?",
      answer:
        "Yes! I can help with deployment, hosting setup, and ongoing maintenance. All plans include initial support, and extended maintenance packages are available.",
    },
    {
      question: "Can you integrate with existing systems?",
      answer:
        "Absolutely! I have experience integrating with various APIs, databases, payment gateways, and third-party services.",
    },
    {
      question: "What's your payment structure?",
      answer:
        "Typically, I require 50% upfront to start the project and 50% upon completion. For larger projects, we can arrange milestone-based payments.",
    },
  ];

  const benefits = [
    {
      icon: Star,
      title: "Quality First",
      description: "Clean, maintainable code following best practices",
    },
    {
      icon: Clock,
      title: "On-Time Delivery",
      description: "Committed to meeting deadlines and milestones",
    },
    {
      icon: Headphones,
      title: "Dedicated Support",
      description: "Free support period included with every project",
    },
    {
      icon: Shield,
      title: "Security Focused",
      description: "Built with security and data protection in mind",
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

  const cardVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.4,
      },
    },
  };

  const filteredServices =
    selectedCategory === "all"
      ? services
      : services.filter((s) => s.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#0A0F1C] text-white w-full overflow-x-hidden">
      <Navbar />
      {/* Hero Section */}
      <section className="relative pt-32 md:pt-40 py-20 px-[5vw] lg:px-[10vw] overflow-hidden">
        {/* Animated Background */}
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
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              x: [-50, 50, -50],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"
          />
        </div>

        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6"
            >
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-blue-400 font-medium">
                Professional Development Services
              </span>
            </motion.div>

            <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent leading-tight">
              Transform Your Ideas
              <br />
              Into Digital Reality
            </h1>

            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              Expert full-stack development and Telegram automation solutions.
              <br />
              Affordable pricing for startups and growing businesses.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/pricing">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 cursor-pointer bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-shadow flex items-center gap-2"
                >
                  View Pricing
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 cursor-pointer bg-gray-800/50 border border-gray-700 rounded-full font-semibold hover:border-blue-500/50 transition-colors"
                >
                  Contact Me
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-[5vw] lg:px-[10vw]">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-4 justify-center"
          >
            {[
              { id: "all", label: "All Services", icon: Sparkles },
              { id: "web", label: "Web Development", icon: Globe },
              { id: "telegram", label: "Telegram Solutions", icon: MessageCircle },
            ].map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 cursor-pointer rounded-full font-semibold transition-all flex items-center gap-2 ${
                  selectedCategory === category.id
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg shadow-blue-500/50"
                    : "bg-gray-800/50 border border-gray-700 hover:border-blue-500/50"
                }`}
              >
                <category.icon className="w-4 h-4" />
                {category.label}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Detailed Section */}
      <section className="py-12 px-[5vw] lg:px-[10vw]">
        <div className="container mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-20"
            >
              {filteredServices.map((service) => (
                <div key={service.id} className="space-y-8">
                  {/* Service Header */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center lg:text-left"
                  >
                    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6">
                      <motion.div
                        whileHover={{ scale: 1.05, rotate: 5 }}
                        className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl flex items-center justify-center"
                      >
                        <service.iconComponent className="w-10 h-10 text-white" />
                      </motion.div>

                      <div className="flex-1">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-2">
                          {service.title}
                        </h2>
                        <p className="text-xl text-blue-400 mb-4">
                          {service.subtitle}
                        </p>
                        <p className="text-gray-400 leading-relaxed max-w-3xl">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="mt-6 flex flex-wrap gap-3 justify-center lg:justify-start">
                      {service.technologies.map((tech, index) => (
                        <motion.span
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.05 }}
                          className="px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-full text-sm text-gray-300"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>

                  {/* Pricing Plans */}
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                  >
                    {service.plans.map((plan, index) => (
                      <motion.div
                        key={index}
                        variants={cardVariants}
                        onHoverStart={() =>
                          setHoveredCard(`${service.id}-${index}`)
                        }
                        onHoverEnd={() => setHoveredCard(null)}
                        className={`relative p-8 rounded-3xl border-2 transition-all cursor-pointer group ${
                          plan.popular
                            ? "bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-blue-500/10 border-blue-500/50 shadow-2xl shadow-blue-500/20 transform scale-105"
                            : "bg-[#0D1B2A]/50 border-gray-800 hover:border-blue-500/30 backdrop-blur-sm"
                        }`}
                      >
                        {/* Popular Badge */}
                        {plan.popular && (
                          <motion.div
                            initial={{ scale: 0, rotate: -12 }}
                            animate={{ scale: 1, rotate: -12 }}
                            className="absolute -top-4 -right-4 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-sm font-bold flex items-center gap-1 shadow-lg"
                          >
                            <Zap className="w-4 h-4" />
                            Most Popular
                          </motion.div>
                        )}

                        {/* Plan Header */}
                        <div className="mb-6">
                          <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                          <div className="flex items-baseline gap-2 mb-3">
                            <span className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                              {plan.price}
                            </span>
                          </div>
                          <div className="space-y-1 text-sm text-gray-400">
                            <div className="flex items-center gap-2">
                              <Clock className="w-4 h-4" />
                              <span>{plan.duration}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Users className="w-4 h-4" />
                              <span>Ideal for {plan.ideal}</span>
                            </div>
                          </div>
                        </div>

                        {/* Features List */}
                        <ul className="space-y-3 mb-8">
                          {plan.features.map((feature, featureIndex) => (
                            <motion.li
                              key={featureIndex}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: featureIndex * 0.03 }}
                              className="flex items-start gap-3 text-sm"
                            >
                              <div className="mt-0.5">
                                <div
                                  className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                                    plan.popular
                                      ? "bg-blue-500/20"
                                      : "bg-gray-800"
                                  }`}
                                >
                                  <Check className="w-3 h-3 text-blue-400" />
                                </div>
                              </div>
                              <span className="text-gray-300 leading-relaxed">
                                {feature}
                              </span>
                            </motion.li>
                          ))}
                        </ul>

                        {/* CTA Button */}
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className={`w-full py-3 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 ${
                            plan.popular
                              ? "bg-gradient-to-r from-blue-500 to-purple-600 hover:shadow-lg hover:shadow-blue-500/50"
                              : "bg-gray-800 hover:bg-gray-700"
                          }`}
                        >
                          Get Started
                          <ArrowRight className="w-4 h-4" />
                        </motion.button>

                        {/* Hover Effect Border */}
                        <motion.div
                          className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                          style={{
                            background:
                              "linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.1), transparent)",
                          }}
                        />
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 px-[5vw] lg:px-[10vw] bg-gradient-to-b from-transparent via-blue-500/5 to-transparent">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
              How I Work
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A transparent, collaborative process from start to finish
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="relative p-6 bg-[#0D1B2A]/50 border border-gray-800 rounded-2xl hover:border-blue-500/30 transition-all backdrop-blur-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-2">
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-4xl font-bold text-gray-800">
                      {step.number}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-[5vw] lg:px-[10vw]">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
              Why Choose Me
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Committed to delivering excellence in every project
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-6 bg-[#0D1B2A]/50 border border-gray-800 rounded-2xl hover:border-blue-500/30 transition-all backdrop-blur-sm text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-400 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-[5vw] lg:px-[10vw] bg-gradient-to-b from-transparent via-purple-500/5 to-transparent">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-400 text-lg">
              Everything you need to know about my services
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-[#0D1B2A]/50 border border-gray-800 rounded-2xl overflow-hidden backdrop-blur-sm"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full p-6 flex items-center justify-between text-left hover:bg-gray-800/30 transition-colors"
                >
                  <span className="font-semibold text-lg pr-4">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-gray-400 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
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
                    Get Free Quote
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </Link>
                <Link href="/pricing">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-full font-bold hover:bg-white/20 transition-colors"
                  >
                    View Portfolio
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

export default ServicesPage;