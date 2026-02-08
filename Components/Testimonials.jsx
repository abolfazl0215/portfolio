"use client";

import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import {
  Quote,
  Star,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Award,
  TrendingUp,
  Users,
} from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const testimonials = [
    {
      id: 1,
      text: "The multilingual tour booking website exceeded all our expectations! Supporting 10 languages and 5 currencies was crucial for our international clients. The admin panel makes managing tours, accommodations, and transfers incredibly easy. Our bookings have increased by 40% since launch!",
      name: "Armen Sargsyan",
      role: "CEO, Arax Travel Company",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=armen",
      rating: 5,
      project: "Tour & Stay Booking Website",
    },
    {
      id: 2,
      text: "The Armenia residency bot and mini-app transformed our business completely. The professional admin panel with analytics helps us track everything, and the AI-powered chat support handles customer inquiries 24/7. The broadcast messaging and discount campaign features are game-changers!",
      name: "Rad",
      role: "Founder, Arad Residency Services",
      avatar:
        "https://api.dicebear.com/7.x/avataaars/svg?seed=tigran",
      rating: 5,
      project: "Armenia Residency Bot & Mini App",
    },
    {
      id: 3,
      text: "Our Link in Bio platform is exactly what we needed! The ability to customize themes, change fonts, and manage multiple sections gives our content creators complete control. It's professional, fast, and our users love the flexibility. Better than Linktree in every way!",
      name: "mr Afshar",
      role: "Product Manager, ULink Platform",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=alex",
      rating: 5,
      project: "Link in Bio Website",
    },
  ];

  const stats = [
    { label: "Happy Clients", value: "30+", icon: Users },
    { label: "5-Star Reviews", value: "28", icon: Star },
    { label: "Success Rate", value: "100%", icon: TrendingUp },
    { label: "Awards Won", value: "5", icon: Award },
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
      ref={sectionRef}
      className="min-h-screen grid-bg bg-[#0A0F1C] py-20 px-[5vw] lg:px-[10vw] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-500/3 rounded-full" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500/3 rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-blue-400 font-medium">
              Client Reviews
            </span>
          </motion.div>

          <h2 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
            What Clients Say
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Don't just take my word for it - hear from the clients
            who've experienced exceptional results
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-[#0D1B2A]/50 border border-gray-800 rounded-2xl p-6 text-center hover:border-blue-500/40 transition-all hover:-translate-y-1 will-change-transform">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Testimonials Slider */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="relative">
          {/* Navigation Buttons - Desktop only */}
          <div className="hidden md:block">
            <button className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 lg:w-14 lg:h-14 rounded-full border-2 border-blue-500/30 bg-gray-900/50 flex items-center justify-center text-white hover:bg-blue-600 hover:border-blue-600 transition-all shadow-lg hover:scale-105 active:scale-95 will-change-transform -translate-x-1/2 lg:-translate-x-full lg:left-0">
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 lg:w-14 lg:h-14 rounded-full border-2 border-blue-500/30 bg-gray-900/50 flex items-center justify-center text-white hover:bg-blue-600 hover:border-blue-600 transition-all shadow-lg hover:scale-105 active:scale-95 will-change-transform translate-x-1/2 lg:translate-x-full lg:right-0">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            centeredSlides={true}
            loop={true}
            navigation={{
              prevEl: ".swiper-button-prev-custom",
              nextEl: ".swiper-button-next-custom",
            }}
            pagination={{
              el: ".swiper-pagination-custom",
              clickable: true,
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            onSlideChange={(swiper) =>
              setActiveIndex(swiper.realIndex)
            }
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 1.5,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 1.8,
                spaceBetween: 28,
              },
              1280: {
                slidesPerView: 2,
                spaceBetween: 32,
              },
            }}
            className="pb-20">
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                {({ isActive }) => (
                  <div
                    className={`relative rounded-3xl p-8 lg:p-10 transition-all duration-200 ${
                      isActive
                        ? "bg-[#0D1B2A]/80 border-2 border-blue-500/40 shadow-2xl shadow-blue-500/20 opacity-100 scale-100"
                        : "bg-[#0D1B2A]/50 border-2 border-gray-800 opacity-60 scale-95"
                    }`}>
                    {/* Quote Icon Background */}
                    <div className="absolute top-6 right-6 opacity-10">
                      <Quote className="w-24 h-24 text-blue-400" />
                    </div>

                    {/* Rating Stars */}
                    <div className="flex gap-1 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 fill-yellow-400 text-yellow-400 transition-opacity duration-200 ${
                            isActive ? "opacity-100" : "opacity-50"
                          }`}
                        />
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <div className="mb-8 relative z-10">
                      <p
                        className={`text-lg lg:text-xl leading-relaxed transition-colors duration-200 ${
                          isActive ? "text-gray-200" : "text-gray-400"
                        }`}>
                        "{testimonial.text}"
                      </p>
                    </div>

                    {/* Project Tag */}
                    <div className="mb-6">
                      <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full text-sm text-blue-300 font-medium">
                        <Sparkles className="w-3.5 h-3.5" />
                        {testimonial.project}
                      </span>
                    </div>

                    {/* Author Info */}
                    <div className="flex items-center gap-4 relative z-10">
                      <div
                        className={`w-16 h-16 rounded-full overflow-hidden transition-all duration-200 border-4 ${
                          isActive
                            ? "border-blue-500 shadow-lg shadow-blue-500/50"
                            : "border-gray-700"
                        }`}>
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4
                          className={`font-bold text-lg transition-colors duration-200 ${
                            isActive ? "text-white" : "text-gray-300"
                          }`}>
                          {testimonial.name}
                        </h4>
                        <p
                          className={`text-sm transition-colors duration-200 ${
                            isActive
                              ? "text-blue-400"
                              : "text-gray-500"
                          }`}>
                          {testimonial.role}
                        </p>
                      </div>
                    </div>

                    {/* Active Indicator */}
                    {isActive && (
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-b-3xl" />
                    )}
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Pagination - Mobile only */}
          <div className="swiper-pagination-custom flex justify-center gap-2 mt-8 md:hidden"></div>
        </motion.div>

        {/* Navigation Buttons for Mobile */}
        <div className="flex md:hidden items-center justify-center gap-6 mt-8">
          <button className="swiper-button-prev-custom w-12 h-12 rounded-full border-2 border-blue-500/30 bg-gray-900/50 flex items-center justify-center text-white hover:bg-blue-600 hover:border-blue-600 transition-all shadow-lg active:scale-95">
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="swiper-pagination-custom flex justify-center gap-2"></div>

          <button className="swiper-button-next-custom w-12 h-12 rounded-full border-2 border-blue-500/30 bg-gray-900/50 flex items-center justify-center text-white hover:bg-blue-600 hover:border-blue-600 transition-all shadow-lg active:scale-95">
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      <style jsx global>{`
        .swiper-pagination-custom .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: #4b5563;
          opacity: 0.5;
          border-radius: 50%;
          transition: all 0.3s;
          cursor: pointer;
        }

        .swiper-pagination-custom .swiper-pagination-bullet-active {
          background: linear-gradient(to right, #3b82f6, #9333ea);
          opacity: 1;
          width: 32px;
          border-radius: 5px;
        }

        .swiper-button-prev-custom:disabled,
        .swiper-button-next-custom:disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
