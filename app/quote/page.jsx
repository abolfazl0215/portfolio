"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FileText,
  Sparkles,
  CheckCircle,
  Upload,
  X,
  Calendar,
  DollarSign,
  Zap,
  Target,
  Users,
  Clock,
} from "lucide-react";

const QuotePage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [formData, setFormData] = useState({
    // Step 1: Project Type
    projectCategory: "",
    projectType: "",

    // Step 2: Project Details
    projectName: "",
    projectDescription: "",
    targetAudience: "",
    goals: "",

    // Step 3: Features & Requirements
    features: [],
    customFeatures: "",
    integrations: [],

    // Step 4: Timeline & Budget
    timeline: "",
    startDate: "",
    budget: "",
    budgetFlexible: false,

    // Step 5: Contact Information
    name: "",
    email: "",
    phone: "",
    company: "",
    referralSource: "",
  });

  const totalSteps = 5;

  const projectCategories = {
    web: {
      label: "Web Development",
      types: [
        "Landing Page",
        "Corporate Website",
        "E-commerce Platform",
        "Web Application",
        "Portfolio Website",
        "Blog/News Platform",
        "Custom Web Solution",
      ],
    },
    telegram: {
      label: "Telegram Solutions",
      types: [
        "Simple Bot",
        "Advanced Bot with Database",
        "Bot with Payment Processing",
        "Telegram Mini App",
        "Account Manager Bot",
        "Custom Telegram Solution",
      ],
    },
  };

  const webFeatures = [
    "User Authentication",
    "Admin Dashboard",
    "Payment Gateway",
    "Database Integration",
    "API Development",
    "Real-time Features",
    "Email Notifications",
    "Analytics Dashboard",
    "Multi-language Support",
    "SEO Optimization",
    "Blog/CMS",
    "Search Functionality",
  ];

  const telegramFeatures = [
    "Command Handling",
    "Inline Keyboards",
    "Payment Processing",
    "Database Integration",
    "Admin Panel",
    "User Management",
    "Analytics & Reports",
    "Scheduled Messages",
    "API Integrations",
    "Multi-language Support",
    "Anti-spam Tools",
    "Cloud Storage",
  ];

  const integrations = [
    "Stripe",
    "PayPal",
    "Google Analytics",
    "Mailchimp",
    "Slack",
    "Zapier",
    "AWS Services",
    "Firebase",
    "MongoDB",
    "PostgreSQL",
    "REST APIs",
    "Third-party APIs",
  ];

  const timelines = [
    { value: "rush", label: "Rush (1-2 weeks)", premium: "+30%" },
    {
      value: "normal",
      label: "Normal (3-4 weeks)",
      premium: "Standard",
    },
    {
      value: "standard",
      label: "Standard (5-8 weeks)",
      premium: "Standard",
    },
    {
      value: "flexible",
      label: "Flexible (8+ weeks)",
      premium: "-10%",
    },
  ];

  const budgetRanges = [
    "Under $500",
    "$500 - $1,000",
    "$1,000 - $2,500",
    "$2,500 - $5,000",
    "$5,000+",
    "I'm not sure yet",
  ];

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleFeatureToggle = (feature) => {
    const currentFeatures = formData.features;
    if (currentFeatures.includes(feature)) {
      handleChange(
        "features",
        currentFeatures.filter((f) => f !== feature),
      );
    } else {
      handleChange("features", [...currentFeatures, feature]);
    }
  };

  const handleIntegrationToggle = (integration) => {
    const currentIntegrations = formData.integrations;
    if (currentIntegrations.includes(integration)) {
      handleChange(
        "integrations",
        currentIntegrations.filter((i) => i !== integration),
      );
    } else {
      handleChange("integrations", [
        ...currentIntegrations,
        integration,
      ]);
    }
  };

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    setUploadedFiles([...uploadedFiles, ...files]);
  };

  const removeFile = (index) => {
    setUploadedFiles(uploadedFiles.filter((_, i) => i !== index));
  };

  const handleSubmit = async () => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitted(true);
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return formData.projectCategory && formData.projectType;
      case 2:
        return (
          formData.projectName &&
          formData.projectDescription &&
          formData.goals
        );
      case 3:
        return formData.features.length > 0;
      case 4:
        return formData.timeline && formData.budget;
      case 5:
        return formData.name && formData.email;
      default:
        return false;
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return renderStep1();
      case 2:
        return renderStep2();
      case 3:
        return renderStep3();
      case 4:
        return renderStep4();
      case 5:
        return renderStep5();
      default:
        return null;
    }
  };

  const renderStep1 = () => (
    <motion.div
      key="step1"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
          <Target className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold">
            What type of project do you need?
          </h2>
          <p className="text-gray-400">
            Select the category and type
          </p>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-3 text-gray-300">
          Project Category *
        </label>
        <div className="grid md:grid-cols-2 gap-4">
          {Object.entries(projectCategories).map(([key, cat]) => (
            <button
              key={key}
              type="button"
              onClick={() => {
                handleChange("projectCategory", key);
                handleChange("projectType", "");
              }}
              className={`p-6 rounded-2xl border-2 transition-all text-left hover:scale-[1.02] active:scale-[0.98] ${
                formData.projectCategory === key
                  ? "border-blue-500 bg-blue-500/10"
                  : "border-gray-700 hover:border-gray-600"
              }`}>
              <h3 className="text-lg font-bold mb-2">{cat.label}</h3>
              <p className="text-sm text-gray-400">
                {cat.types.length} options available
              </p>
            </button>
          ))}
        </div>
      </div>

      {formData.projectCategory && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}>
          <label className="block text-sm font-medium mb-3 text-gray-300">
            Project Type *
          </label>
          <div className="grid md:grid-cols-2 gap-3">
            {projectCategories[formData.projectCategory].types.map(
              (type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => handleChange("projectType", type)}
                  className={`p-4 rounded-xl border-2 transition-all text-left ${
                    formData.projectType === type
                      ? "border-blue-500 bg-blue-500/10"
                      : "border-gray-700 hover:border-gray-600"
                  }`}>
                  <span className="font-medium">{type}</span>
                </button>
              ),
            )}
          </div>
        </motion.div>
      )}
    </motion.div>
  );

  const renderStep2 = () => (
    <motion.div
      key="step2"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
          <FileText className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold">Project Details</h2>
          <p className="text-gray-400">
            Tell me more about your project
          </p>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2 text-gray-300">
          Project Name *
        </label>
        <input
          type="text"
          value={formData.projectName}
          onChange={(e) =>
            handleChange("projectName", e.target.value)
          }
          className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
          placeholder="My Awesome Project"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2 text-gray-300">
          Project Description *
        </label>
        <textarea
          value={formData.projectDescription}
          onChange={(e) =>
            handleChange("projectDescription", e.target.value)
          }
          rows={4}
          className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all resize-none"
          placeholder="Describe your project in detail..."
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2 text-gray-300">
          Target Audience
        </label>
        <input
          type="text"
          value={formData.targetAudience}
          onChange={(e) =>
            handleChange("targetAudience", e.target.value)
          }
          className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
          placeholder="Who will use this product?"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2 text-gray-300">
          Project Goals *
        </label>
        <textarea
          value={formData.goals}
          onChange={(e) => handleChange("goals", e.target.value)}
          rows={3}
          className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all resize-none"
          placeholder="What do you want to achieve with this project?"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2 text-gray-300">
          Attachments (Optional)
        </label>
        <div className="border-2 border-dashed border-gray-700 rounded-xl p-8 text-center hover:border-blue-500/50 transition-all">
          <input
            type="file"
            multiple
            onChange={handleFileUpload}
            className="hidden"
            id="file-upload"
          />
          <label htmlFor="file-upload" className="cursor-pointer">
            <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
            <p className="text-gray-400 text-sm">
              Click to upload files or drag and drop
            </p>
            <p className="text-gray-600 text-xs mt-1">
              Wireframes, designs, or reference documents
            </p>
          </label>
        </div>
        {uploadedFiles.length > 0 && (
          <div className="mt-4 space-y-2">
            {uploadedFiles.map((file, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-gray-900/50 rounded-xl">
                <span className="text-sm truncate">{file.name}</span>
                <button
                  type="button"
                  onClick={() => removeFile(index)}
                  className="text-red-400 hover:text-red-300">
                  <X className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );

  const renderStep3 = () => (
    <motion.div
      key="step3"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
          <Zap className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold">
            Features & Requirements
          </h2>
          <p className="text-gray-400">
            Select all features you need
          </p>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-3 text-gray-300">
          Required Features *
        </label>
        <div className="grid md:grid-cols-2 gap-3">
          {(formData.projectCategory === "web"
            ? webFeatures
            : telegramFeatures
          ).map((feature) => (
            <label
              key={feature}
              className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                formData.features.includes(feature)
                  ? "border-blue-500 bg-blue-500/10"
                  : "border-gray-700 hover:border-gray-600"
              }`}>
              <input
                type="checkbox"
                checked={formData.features.includes(feature)}
                onChange={() => handleFeatureToggle(feature)}
                className="sr-only"
              />
              <div className="flex items-center gap-2">
                <div
                  className={`w-5 h-5 rounded flex items-center justify-center ${
                    formData.features.includes(feature)
                      ? "bg-blue-500"
                      : "bg-gray-700"
                  }`}>
                  {formData.features.includes(feature) && (
                    <CheckCircle className="w-3 h-3 text-white" />
                  )}
                </div>
                <span className="font-medium">{feature}</span>
              </div>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2 text-gray-300">
          Additional Features (Optional)
        </label>
        <textarea
          value={formData.customFeatures}
          onChange={(e) =>
            handleChange("customFeatures", e.target.value)
          }
          rows={3}
          className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all resize-none"
          placeholder="Any other features or requirements..."
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-3 text-gray-300">
          Third-party Integrations (Optional)
        </label>
        <div className="grid md:grid-cols-3 gap-3">
          {integrations.map((integration) => (
            <label
              key={integration}
              className={`p-3 rounded-xl border-2 cursor-pointer transition-all text-sm ${
                formData.integrations.includes(integration)
                  ? "border-blue-500 bg-blue-500/10"
                  : "border-gray-700 hover:border-gray-600"
              }`}>
              <input
                type="checkbox"
                checked={formData.integrations.includes(integration)}
                onChange={() => handleIntegrationToggle(integration)}
                className="sr-only"
              />
              <div className="flex items-center gap-2">
                <div
                  className={`w-4 h-4 rounded flex items-center justify-center flex-shrink-0 ${
                    formData.integrations.includes(integration)
                      ? "bg-blue-500"
                      : "bg-gray-700"
                  }`}>
                  {formData.integrations.includes(integration) && (
                    <CheckCircle className="w-2.5 h-2.5 text-white" />
                  )}
                </div>
                <span>{integration}</span>
              </div>
            </label>
          ))}
        </div>
      </div>
    </motion.div>
  );

  const renderStep4 = () => (
    <motion.div
      key="step4"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
          <Clock className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold">Timeline & Budget</h2>
          <p className="text-gray-400">
            When do you need this and what's your budget?
          </p>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-3 text-gray-300">
          Preferred Timeline *
        </label>
        <div className="grid gap-3">
          {timelines.map((timeline) => (
            <label
              key={timeline.value}
              className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                formData.timeline === timeline.value
                  ? "border-blue-500 bg-blue-500/10"
                  : "border-gray-700 hover:border-gray-600"
              }`}>
              <input
                type="radio"
                name="timeline"
                value={timeline.value}
                checked={formData.timeline === timeline.value}
                onChange={(e) =>
                  handleChange("timeline", e.target.value)
                }
                className="sr-only"
              />
              <div className="flex items-center justify-between">
                <span className="font-medium">{timeline.label}</span>
                <span
                  className={`text-sm px-3 py-1 rounded-full ${
                    timeline.premium === "Standard"
                      ? "bg-gray-700 text-gray-300"
                      : timeline.premium.includes("+")
                        ? "bg-orange-500/20 text-orange-400"
                        : "bg-green-500/20 text-green-400"
                  }`}>
                  {timeline.premium}
                </span>
              </div>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2 text-gray-300">
          Preferred Start Date
        </label>
        <input
          type="date"
          value={formData.startDate}
          onChange={(e) => handleChange("startDate", e.target.value)}
          className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-3 text-gray-300">
          Budget Range *
        </label>
        <div className="grid md:grid-cols-2 gap-3">
          {budgetRanges.map((budget) => (
            <label
              key={budget}
              className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                formData.budget === budget
                  ? "border-blue-500 bg-blue-500/10"
                  : "border-gray-700 hover:border-gray-600"
              }`}>
              <input
                type="radio"
                name="budget"
                value={budget}
                checked={formData.budget === budget}
                onChange={(e) =>
                  handleChange("budget", e.target.value)
                }
                className="sr-only"
              />
              <div className="flex items-center gap-2">
                <DollarSign className="w-4 h-4 text-blue-400" />
                <span className="font-medium">{budget}</span>
              </div>
            </label>
          ))}
        </div>
      </div>

      <label className="flex items-center gap-3 p-4 bg-gray-900/50 rounded-xl cursor-pointer">
        <input
          type="checkbox"
          checked={formData.budgetFlexible}
          onChange={(e) =>
            handleChange("budgetFlexible", e.target.checked)
          }
          className="w-5 h-5 accent-blue-500"
        />
        <span className="text-gray-300">
          My budget is flexible based on value and features
        </span>
      </label>
    </motion.div>
  );

  const renderStep5 = () => (
    <motion.div
      key="step5"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
          <Users className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold">Contact Information</h2>
          <p className="text-gray-400">
            How can I reach you with the quote?
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium mb-2 text-gray-300">
            Full Name *
          </label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => handleChange("name", e.target.value)}
            className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
            placeholder="John Doe"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2 text-gray-300">
            Email Address *
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
            placeholder="john@example.com"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium mb-2 text-gray-300">
            Phone Number
          </label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
            placeholder="+1 (555) 123-4567"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2 text-gray-300">
            Company Name
          </label>
          <input
            type="text"
            value={formData.company}
            onChange={(e) => handleChange("company", e.target.value)}
            className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
            placeholder="Your Company"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2 text-gray-300">
          How did you hear about me?
        </label>
        <select
          value={formData.referralSource}
          onChange={(e) =>
            handleChange("referralSource", e.target.value)
          }
          className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all">
          <option value="">Select an option</option>
          <option value="google">Google Search</option>
          <option value="social">Social Media</option>
          <option value="referral">Friend/Colleague Referral</option>
          <option value="portfolio">Your Portfolio</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Summary */}
      <div className="p-6 bg-blue-500/10 border border-blue-500/20 rounded-2xl">
        <h3 className="font-bold mb-4 flex items-center gap-2">
          <FileText className="w-5 h-5 text-blue-400" />
          Quote Summary
        </h3>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-400">Project Type:</span>
            <span className="font-medium">
              {formData.projectType}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Features:</span>
            <span className="font-medium">
              {formData.features.length} selected
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Timeline:</span>
            <span className="font-medium">
              {
                timelines.find((t) => t.value === formData.timeline)
                  ?.label
              }
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Budget Range:</span>
            <span className="font-medium">{formData.budget}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-[#0A0F1C] text-white flex items-center justify-center px-[5vw]">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center max-w-2xl">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle className="w-12 h-12 text-green-400" />
          </motion.div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
            Quote Request Submitted!
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            Thank you for your detailed information. I'll review your
            project requirements and get back to you within 24 hours
            with a comprehensive quote.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => (window.location.href = "/")}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-shadow">
              Back to Home
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => (window.location.href = "/services")}
              className="px-8 py-3 bg-gray-800/50 border border-gray-700 rounded-full font-semibold hover:border-blue-500/50 transition-colors">
              View Services
            </motion.button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0A0F1C] text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-[5vw] lg:px-[10vw] overflow-hidden">
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
        </div>

        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-12">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-blue-400 font-medium">
                Get Free Quote
              </span>
            </motion.div>

            <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
              Request a Custom Quote
            </h1>
            <p className="text-xl text-gray-400">
              Tell me about your project and I'll provide a detailed,
              personalized quote within 24 hours.
            </p>
          </motion.div>

          {/* Progress Bar */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="flex items-center justify-between mb-4">
              {[1, 2, 3, 4, 5].map((step) => (
                <div key={step} className="flex items-center flex-1">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${
                      step <= currentStep
                        ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                        : "bg-gray-800 text-gray-500"
                    }`}>
                    {step < currentStep ? (
                      <CheckCircle className="w-6 h-6" />
                    ) : (
                      step
                    )}
                  </div>
                  {step < 5 && (
                    <div
                      className={`flex-1 h-1 mx-2 rounded transition-all ${
                        step < currentStep
                          ? "bg-gradient-to-r from-blue-500 to-purple-600"
                          : "bg-gray-800"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-between text-sm text-gray-400">
              <span>Project Type</span>
              <span>Details</span>
              <span>Features</span>
              <span>Timeline</span>
              <span>Contact</span>
            </div>
          </div>

          {/* Form Steps */}
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-[#0D1B2A]/50 border border-gray-800 rounded-3xl p-8 backdrop-blur-sm">
              <AnimatePresence mode="wait">
                {renderStepContent()}
              </AnimatePresence>

              {/* Navigation Buttons */}
              <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-800">
                <motion.button
                  type="button"
                  whileHover={{ scale: currentStep > 1 ? 1.05 : 1 }}
                  whileTap={{ scale: currentStep > 1 ? 0.95 : 1 }}
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                    currentStep === 1
                      ? "bg-gray-800 text-gray-600 cursor-not-allowed"
                      : "bg-gray-800 hover:bg-gray-700"
                  }`}>
                  Previous
                </motion.button>

                {currentStep < totalSteps ? (
                  <motion.button
                    type="button"
                    whileHover={{ scale: canProceed() ? 1.05 : 1 }}
                    whileTap={{ scale: canProceed() ? 0.95 : 1 }}
                    onClick={nextStep}
                    disabled={!canProceed()}
                    className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                      canProceed()
                        ? "bg-gradient-to-r from-blue-500 to-purple-600 hover:shadow-lg hover:shadow-blue-500/50"
                        : "bg-gray-800 text-gray-600 cursor-not-allowed"
                    }`}>
                    Next Step
                  </motion.button>
                ) : (
                  <motion.button
                    type="button"
                    whileHover={{ scale: canProceed() ? 1.05 : 1 }}
                    whileTap={{ scale: canProceed() ? 0.95 : 1 }}
                    onClick={handleSubmit}
                    disabled={!canProceed()}
                    className={`px-8 py-3 rounded-xl font-semibold transition-all flex items-center gap-2 ${
                      canProceed()
                        ? "bg-gradient-to-r from-blue-500 to-purple-600 hover:shadow-lg hover:shadow-blue-500/50"
                        : "bg-gray-800 text-gray-600 cursor-not-allowed"
                    }`}>
                    <CheckCircle className="w-5 h-5" />
                    Submit Quote Request
                  </motion.button>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuotePage;
