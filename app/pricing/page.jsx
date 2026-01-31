"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  X,
  Zap,
  Globe,
  MessageCircle,
  Sparkles,
  Calculator,
  ArrowRight,
  Info,
} from "lucide-react";
import Link from "next/link";
import Navbar from "../../Components/Navbar";

const PricingPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("web");
  const [calculatorInputs, setCalculatorInputs] = useState({
    projectType: "",
    features: [],
    timeline: "",
  });
  const [estimatedPrice, setEstimatedPrice] = useState(null);

  const pricingData = {
    web: {
      title: "Web Development Pricing",
      icon: Globe,
      plans: [
        {
          name: "Starter",
          price: "$299-$599",
          priceMonthly: null,
          duration: "2-3 weeks",
          description: "Perfect for small businesses and personal projects",
          features: [
            { name: "Responsive Landing Page", included: true },
            { name: "Modern UI/UX Design", included: true },
            { name: "Mobile Optimized", included: true },
            { name: "Basic SEO Setup", included: true },
            { name: "Contact Form", included: true },
            { name: "Google Analytics", included: true },
            { name: "1 Month Support", included: true },
            { name: "Source Code", included: true },
            { name: "Admin Panel", included: false },
            { name: "Database Integration", included: false },
            { name: "API Development", included: false },
            { name: "Payment Gateway", included: false },
          ],
          popular: false,
          cta: "Get Started",
        },
        {
          name: "Professional",
          price: "$799-$1,499",
          priceMonthly: null,
          duration: "4-6 weeks",
          description: "Ideal for growing businesses with complex needs",
          features: [
            { name: "Full-Stack Application", included: true },
            { name: "Custom Admin Panel", included: true },
            { name: "Database Integration", included: true },
            { name: "API Development", included: true },
            { name: "User Authentication", included: true },
            { name: "Payment Gateway", included: true },
            { name: "Email Notifications", included: true },
            { name: "Performance Optimization", included: true },
            { name: "3 Months Support", included: true },
            { name: "Deployment Setup", included: true },
            { name: "Documentation", included: true },
            { name: "CI/CD Pipeline", included: false },
          ],
          popular: true,
          cta: "Most Popular",
        },
        {
          name: "Enterprise",
          price: "$1,999+",
          priceMonthly: null,
          duration: "8-12 weeks",
          description: "For large-scale applications and platforms",
          features: [
            { name: "Complex Web Platform", included: true },
            { name: "Microservices Architecture", included: true },
            { name: "Advanced Features", included: true },
            { name: "Multiple Integrations", included: true },
            { name: "Scalable Infrastructure", included: true },
            { name: "Real-time Features", included: true },
            { name: "Advanced Analytics", included: true },
            { name: "Multi-language Support", included: true },
            { name: "CI/CD Pipeline", included: true },
            { name: "Full Documentation", included: true },
            { name: "6 Months Support", included: true },
            { name: "Maintenance Package", included: true },
          ],
          popular: false,
          cta: "Contact Us",
        },
      ],
    },
    telegram: {
      title: "Telegram Solutions Pricing",
      icon: MessageCircle,
      plans: [
        {
          name: "Bot Basic",
          price: "$199-$399",
          priceMonthly: null,
          duration: "1-2 weeks",
          description: "Simple bots for automation and engagement",
          features: [
            { name: "Custom Telegram Bot", included: true },
            { name: "Basic Commands", included: true },
            { name: "User Management", included: true },
            { name: "Message Handling", included: true },
            { name: "Inline Keyboards", included: true },
            { name: "Admin Controls", included: true },
            { name: "1 Month Support", included: true },
            { name: "Source Code", included: true },
            { name: "Database Integration", included: false },
            { name: "Payment Processing", included: false },
            { name: "Admin Dashboard", included: false },
            { name: "Analytics", included: false },
          ],
          popular: false,
          cta: "Get Started",
        },
        {
          name: "Bot Premium",
          price: "$499-$899",
          priceMonthly: null,
          duration: "3-4 weeks",
          description: "Advanced bots with powerful features",
          features: [
            { name: "Advanced Bot Features", included: true },
            { name: "Database Integration", included: true },
            { name: "Payment Processing", included: true },
            { name: "Admin Dashboard", included: true },
            { name: "Analytics & Reports", included: true },
            { name: "API Integrations", included: true },
            { name: "Scheduled Messages", included: true },
            { name: "Custom Workflows", included: true },
            { name: "Anti-spam Tools", included: true },
            { name: "3 Months Support", included: true },
            { name: "Documentation", included: true },
            { name: "Mini App Features", included: false },
          ],
          popular: true,
          cta: "Most Popular",
        },
        {
          name: "Mini App",
          price: "$699-$1,299",
          priceMonthly: null,
          duration: "4-6 weeks",
          description: "Full-featured Telegram web applications",
          features: [
            { name: "Telegram Mini App", included: true },
            { name: "Web3 Integration", included: true },
            { name: "In-App Payments", included: true },
            { name: "Cloud Storage", included: true },
            { name: "Real-time Features", included: true },
            { name: "Account Manager Bot", included: true },
            { name: "Custom UI/UX", included: true },
            { name: "Push Notifications", included: true },
            { name: "Advanced Analytics", included: true },
            { name: "Multi-language", included: true },
            { name: "4 Months Support", included: true },
            { name: "Priority Updates", included: true },
          ],
          popular: false,
          cta: "Contact Us",
        },
      ],
    },
  };

  const addOns = [
    {
      name: "Extended Support",
      description: "Additional months of priority support",
      price: "$99/month",
    },
    {
      name: "Maintenance Package",
      description: "Regular updates and bug fixes",
      price: "$149/month",
    },
    {
      name: "SEO Optimization",
      description: "Advanced SEO setup and optimization",
      price: "$299",
    },
    {
      name: "Performance Audit",
      description: "Detailed performance analysis and improvements",
      price: "$199",
    },
    {
      name: "Security Audit",
      description: "Comprehensive security review",
      price: "$249",
    },
    {
      name: "Training Session",
      description: "1-hour training on using your application",
      price: "$99",
    },
  ];

  const calculateEstimate = () => {
    let base = 0;
    if (calculatorInputs.projectType === "landing") base = 400;
    else if (calculatorInputs.projectType === "webapp") base = 1000;
    else if (calculatorInputs.projectType === "bot") base = 300;
    else if (calculatorInputs.projectType === "miniapp") base = 900;

    const featureCost = calculatorInputs.features.length * 150;
    const timelineFactor =
      calculatorInputs.timeline === "rush" ? 1.3 : calculatorInputs.timeline === "flexible" ? 0.9 : 1;

    const total = Math.round((base + featureCost) * timelineFactor);
    setEstimatedPrice(total);
  };

  return (
    <div className="min-h-screen bg-[#0A0F1C] text-white">
      <Navbar/>
      {/* Hero Section */}
      <section className="relative pt-36 py-20 px-[5vw] lg:px-[10vw] overflow-hidden">
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
            className="text-center max-w-3xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6"
            >
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-blue-400 font-medium">
                Transparent Pricing
              </span>
            </motion.div>

            <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
              Simple, Affordable Pricing
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Choose the perfect plan for your project. All plans include source
              code and free support.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              {[
                { id: "web", label: "Web Development", icon: Globe },
                { id: "telegram", label: "Telegram Solutions", icon: MessageCircle },
              ].map((category) => (
                <motion.button
                  key={category.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all flex items-center gap-2 ${
                    selectedCategory === category.id
                      ? "bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg shadow-blue-500/50"
                      : "bg-gray-800/50 border border-gray-700 hover:border-blue-500/50"
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  {category.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Tables */}
      <section className="py-12 px-[5vw] lg:px-[10vw]">
        <div className="container mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Category Title */}
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-3 mb-4">
                  {React.createElement(pricingData[selectedCategory].icon, {
                    className: "w-8 h-8 text-blue-400",
                  })}
                  <h2 className="text-3xl font-bold">
                    {pricingData[selectedCategory].title}
                  </h2>
                </div>
              </div>

              {/* Pricing Cards */}
              <div className="grid md:grid-cols-3 gap-8 mb-16">
                {pricingData[selectedCategory].plans.map((plan, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className={`relative p-8 rounded-3xl border-2 transition-all ${
                      plan.popular
                        ? "bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-blue-500/10 border-blue-500/50 shadow-2xl shadow-blue-500/20 transform scale-105"
                        : "bg-[#0D1B2A]/50 border-gray-800 hover:border-blue-500/30 backdrop-blur-sm"
                    }`}
                  >
                    {plan.popular && (
                      <motion.div
                        initial={{ scale: 0, rotate: -12 }}
                        animate={{ scale: 1, rotate: -12 }}
                        className="absolute -top-4 -right-4 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-sm font-bold flex items-center gap-1 shadow-lg"
                      >
                        <Zap className="w-4 h-4" />
                        {plan.cta}
                      </motion.div>
                    )}

                    <div className="mb-6">
                      <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                      <div className="flex items-baseline gap-2 mb-3">
                        <span className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                          {plan.price}
                        </span>
                      </div>
                      <p className="text-sm text-gray-400 mb-2">
                        {plan.duration} delivery
                      </p>
                      <p className="text-gray-400 text-sm">{plan.description}</p>
                    </div>

                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, fIndex) => (
                        <li
                          key={fIndex}
                          className="flex items-start gap-3 text-sm"
                        >
                          <div className="mt-0.5">
                            {feature.included ? (
                              <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                                <Check className="w-3 h-3 text-blue-400" />
                              </div>
                            ) : (
                              <div className="w-5 h-5 rounded-full bg-gray-800 flex items-center justify-center flex-shrink-0">
                                <X className="w-3 h-3 text-gray-600" />
                              </div>
                            )}
                          </div>
                          <span
                            className={
                              feature.included ? "text-gray-300" : "text-gray-600"
                            }
                          >
                            {feature.name}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <Link href="/quote">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`w-full py-3 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 ${
                          plan.popular
                            ? "bg-gradient-to-r from-blue-500 to-purple-600 hover:shadow-lg hover:shadow-blue-500/50"
                            : "bg-gray-800 hover:bg-gray-700"
                        }`}
                      >
                        {plan.cta}
                        <ArrowRight className="w-4 h-4" />
                      </motion.button>
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Comparison Table */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="overflow-x-auto"
              >
                <div className="inline-block min-w-full">
                  <div className="bg-[#0D1B2A]/50 border border-gray-800 rounded-3xl overflow-hidden backdrop-blur-sm">
                    <div className="p-6 border-b border-gray-800">
                      <h3 className="text-2xl font-bold">Detailed Comparison</h3>
                      <p className="text-gray-400 mt-2">
                        Compare features across all plans
                      </p>
                    </div>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b border-gray-800">
                            <th className="px-6 py-4 text-left font-semibold">
                              Feature
                            </th>
                            {pricingData[selectedCategory].plans.map(
                              (plan, index) => (
                                <th
                                  key={index}
                                  className="px-6 py-4 text-center font-semibold"
                                >
                                  {plan.name}
                                </th>
                              )
                            )}
                          </tr>
                        </thead>
                        <tbody>
                          {pricingData[selectedCategory].plans[0].features.map(
                            (_, featureIndex) => (
                              <tr
                                key={featureIndex}
                                className="border-b border-gray-800/50 hover:bg-gray-800/20"
                              >
                                <td className="px-6 py-4 text-gray-300">
                                  {
                                    pricingData[selectedCategory].plans[0]
                                      .features[featureIndex].name
                                  }
                                </td>
                                {pricingData[selectedCategory].plans.map(
                                  (plan, planIndex) => (
                                    <td
                                      key={planIndex}
                                      className="px-6 py-4 text-center"
                                    >
                                      {plan.features[featureIndex].included ? (
                                        <Check className="w-5 h-5 text-green-400 mx-auto" />
                                      ) : (
                                        <X className="w-5 h-5 text-gray-600 mx-auto" />
                                      )}
                                    </td>
                                  )
                                )}
                              </tr>
                            )
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-20 px-[5vw] lg:px-[10vw] bg-gradient-to-b from-transparent via-blue-500/5 to-transparent">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Add-ons & Extras</h2>
            <p className="text-gray-400 text-lg">
              Enhance your project with additional services
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {addOns.map((addon, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-6 bg-[#0D1B2A]/50 border border-gray-800 rounded-2xl hover:border-blue-500/30 transition-all backdrop-blur-sm"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-bold">{addon.name}</h3>
                  <span className="px-3 py-1 bg-blue-500/20 rounded-full text-sm font-semibold text-blue-400">
                    {addon.price}
                  </span>
                </div>
                <p className="text-gray-400 text-sm">{addon.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Price Calculator */}
      <section className="py-20 px-[5vw] lg:px-[10vw]">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#0D1B2A]/50 border border-gray-800 rounded-3xl p-8 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Calculator className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Price Calculator</h2>
                <p className="text-gray-400">Get an instant estimate for your project</p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">
                  Project Type
                </label>
                <select
                  value={calculatorInputs.projectType}
                  onChange={(e) =>
                    setCalculatorInputs({
                      ...calculatorInputs,
                      projectType: e.target.value,
                    })
                  }
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                >
                  <option value="">Select project type</option>
                  <option value="landing">Landing Page</option>
                  <option value="webapp">Full-Stack Web App</option>
                  <option value="bot">Telegram Bot</option>
                  <option value="miniapp">Telegram Mini App</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">
                  Additional Features (select all that apply)
                </label>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    "Admin Panel",
                    "Payment Gateway",
                    "User Authentication",
                    "API Integration",
                    "Real-time Features",
                    "Analytics Dashboard",
                  ].map((feature) => (
                    <label
                      key={feature}
                      className="flex items-center gap-2 p-3 bg-gray-900/50 border border-gray-700 rounded-xl cursor-pointer hover:border-blue-500/50 transition-all"
                    >
                      <input
                        type="checkbox"
                        checked={calculatorInputs.features.includes(feature)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setCalculatorInputs({
                              ...calculatorInputs,
                              features: [...calculatorInputs.features, feature],
                            });
                          } else {
                            setCalculatorInputs({
                              ...calculatorInputs,
                              features: calculatorInputs.features.filter(
                                (f) => f !== feature
                              ),
                            });
                          }
                        }}
                        className="w-4 h-4 accent-blue-500"
                      />
                      <span className="text-sm">{feature}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">
                  Timeline
                </label>
                <select
                  value={calculatorInputs.timeline}
                  onChange={(e) =>
                    setCalculatorInputs({
                      ...calculatorInputs,
                      timeline: e.target.value,
                    })
                  }
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                >
                  <option value="">Select timeline</option>
                  <option value="rush">Rush (30% premium)</option>
                  <option value="normal">Normal</option>
                  <option value="flexible">Flexible (10% discount)</option>
                </select>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={calculateEstimate}
                className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all flex items-center justify-center gap-2"
              >
                <Calculator className="w-5 h-5" />
                Calculate Estimate
              </motion.button>

              {estimatedPrice && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-6 bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl text-center"
                >
                  <p className="text-gray-400 mb-2">Estimated Price Range</p>
                  <p className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    ${estimatedPrice - 200} - ${estimatedPrice + 200}
                  </p>
                  <p className="text-sm text-gray-400 mt-4">
                    This is an estimate. Final price may vary based on specific
                    requirements.
                  </p>
                  <Link href="/quote">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="mt-4 px-6 py-2 bg-blue-500 rounded-full font-semibold hover:bg-blue-600 transition-colors"
                    >
                      Get Detailed Quote
                    </motion.button>
                  </Link>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Note */}
      <section className="py-12 px-[5vw] lg:px-[10vw]">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 bg-blue-500/10 border border-blue-500/20 rounded-2xl flex items-start gap-4"
          >
            <Info className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold mb-2">Have questions about pricing?</h3>
              <p className="text-gray-400 text-sm mb-4">
                Check out our FAQ section or contact me directly for a custom quote
                tailored to your specific needs.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/services#faq">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full text-sm font-semibold hover:bg-blue-500/30 transition-colors"
                  >
                    View FAQ
                  </motion.button>
                </Link>
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-2 bg-blue-500 rounded-full text-sm font-semibold hover:bg-blue-600 transition-colors"
                  >
                    Contact Me
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;