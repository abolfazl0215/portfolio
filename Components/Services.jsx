"use client";

import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Check,
  Zap,
  Globe,
  MessageCircle,
  Bot,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

const Services = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const services = [
    {
      id: 1,
      icon: "/icon/web.svg",
      iconComponent: Globe,
      title: "Full-Stack Web Development",
      description:
        "End-to-end web solutions from design to deployment",
      plans: [
        {
          name: "Starter",
          price: "$299-$599",
          features: [
            "Responsive Landing Page",
            "Modern UI/UX Design",
            "Mobile Optimized",
            "Basic SEO Setup",
            "Contact Form",
            "1 Month Support",
          ],
          popular: false,
        },
        {
          name: "Professional",
          price: "$799-$1,499",
          features: [
            "Full-Stack Web Application",
            "Custom Admin Panel",
            "Database Integration",
            "API Development",
            "Authentication System",
            "3 Months Support",
            "Performance Optimization",
          ],
          popular: true,
        },
        {
          name: "Enterprise",
          price: "$1,999+",
          features: [
            "Complex Web Platform",
            "Microservices Architecture",
            "Advanced Features",
            "Third-party Integrations",
            "Scalable Infrastructure",
            "6 Months Support",
            "CI/CD Pipeline",
            "Documentation",
          ],
          popular: false,
        },
      ],
    },
    {
      id: 2,
      icon: "/icon/telegram.svg",
      iconComponent: MessageCircle,
      title: "Telegram Solutions",
      description:
        "Powerful automation and engagement tools for Telegram",
      plans: [
        {
          name: "Bot Basic",
          price: "$199-$399",
          features: [
            "Custom Telegram Bot",
            "Basic Commands",
            "User Management",
            "Message Handling",
            "Inline Keyboards",
            "1 Month Support",
          ],
          popular: false,
        },
        {
          name: "Bot Premium",
          price: "$499-$899",
          features: [
            "Advanced Telegram Bot",
            "Database Integration",
            "Payment Processing",
            "Admin Dashboard",
            "Analytics & Reports",
            "API Integration",
            "3 Months Support",
          ],
          popular: true,
        },
        {
          name: "Mini App",
          price: "$699-$1,299",
          features: [
            "Telegram Mini App",
            "Web3 Integration Ready",
            "In-App Payments",
            "Cloud Storage",
            "Real-time Features",
            "Account Manager Bot",
            "4 Months Support",
            "Custom Design",
          ],
          popular: false,
        },
      ],
    },
  ];

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
      id="services"
      className="py-20 grid-bg px-[5vw] lg:px-[10vw] relative overflow-hidden">
      {/* بک‌گراند ساده بدون blur */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/2 rounded-full" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/2 rounded-full" />
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
              Professional Services
            </span>
          </motion.div>

          <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
            Services & Pricing
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Choose the perfect plan for your project. Competitive
            pricing for startups and growing businesses.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-2 gap-12">
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="space-y-6">
              {/* Service Header */}
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-4 hover:scale-105 transition-transform will-change-transform">
                  <service.iconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-400">{service.description}</p>
              </div>

              {/* Pricing Cards */}
              <div className="grid gap-4">
                {service.plans.map((plan, index) => (
                  <div
                    key={index}
                    onMouseEnter={() =>
                      setHoveredCard(`${service.id}-${index}`)
                    }
                    onMouseLeave={() => setHoveredCard(null)}
                    className={`relative p-6 rounded-2xl border-2 transition-all duration-200 cursor-pointer group ${
                      plan.popular
                        ? "bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-blue-500/10 border-blue-500/50 shadow-lg shadow-blue-500/20"
                        : "bg-[#0D1B2A]/50 border-gray-800 hover:border-blue-500/30"
                    }`}>
                    {/* Popular Badge */}
                    {plan.popular && (
                      <div className="absolute -top-3 -right-3 px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-xs font-bold flex items-center gap-1">
                        <Zap className="w-3 h-3" />
                        Popular
                      </div>
                    )}

                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-bold mb-1">
                          {plan.name}
                        </h4>
                        <div className="flex items-baseline gap-1">
                          <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            {plan.price}
                          </span>
                        </div>
                      </div>

                      {/* آیکن با scale ساده */}
                      <div
                        className={`p-2 rounded-lg transition-transform duration-150 ${
                          plan.popular
                            ? "bg-blue-500/20"
                            : "bg-gray-800/50"
                        } ${hoveredCard === `${service.id}-${index}` ? "scale-105" : "scale-100"}`}
                        style={{ willChange: "transform" }}>
                        <Bot className="w-5 h-5 text-blue-400" />
                      </div>
                    </div>

                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-start gap-3 text-sm">
                          <div className="mt-0.5">
                            <div
                              className={`w-5 h-5 rounded-full flex items-center justify-center ${
                                plan.popular
                                  ? "bg-blue-500/20"
                                  : "bg-gray-800"
                              }`}>
                              <Check className="w-3 h-3 text-blue-400" />
                            </div>
                          </div>
                          <span className="text-gray-300 leading-relaxed">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* Hover Effect - ساده‌تر */}
                    <div
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"
                      style={{
                        background:
                          "linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.05), transparent)",
                      }}
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.3 }}
          className="mt-16 text-center">
          <p className="text-gray-400 mb-6">
            Need a custom solution? Let's discuss your project
            requirements.
          </p>
          <Link href="/contact">
            <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-shadow active:scale-95 will-change-transform cursor-pointer">
              Get in Touch
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
