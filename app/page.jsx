"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Mail, Phone, MapPin } from "lucide-react";
import Navbar from "../Components/Navbar";
import Image from "next/image";
import Services from "../Components/Services";
import Projects from "../Components/Projects";
import HeroSection from "../Components/HeroSection";
import About from "../Components/About";
import Testimonials from "../Components/Testimonials";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";

export default function App() {
  return (
    <>
      <div className="min-h-screen bg-[#000B15] text-white">
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-50 ">
          <Navbar />
        </header>

        {/* Hero Section */}
        <HeroSection />

        {/* About Section */}
        <About />

        {/* Services Section */}
        <Services />

        {/* Projects Section */}
        <Projects />

        {/* Testimonials Section */}
        <Testimonials />

        {/* Contact Section */}
        <Contact />

        {/* Footer */}
        <Footer />

        {/* Custom Swiper Styles */}
        <style>{`
        .projects-swiper {
          padding: 20px 0 50px;
        }
        .projects-swiper .swiper-button-next,
        .projects-swiper .swiper-button-prev {
          color: #3B82F6;
          background: #0D1B2A;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 2px solid #1E3A5F;
        }
        .projects-swiper .swiper-button-next:after,
        .projects-swiper .swiper-button-prev:after {
          font-size: 16px;
        }
        .projects-swiper .swiper-pagination-bullet {
          background: #1E3A5F;
          width: 12px;
          height: 12px;
        }
        .projects-swiper .swiper-pagination-bullet-active {
          background: #3B82F6;
          width: 32px;
          border-radius: 6px;
        }
      `}</style>
      </div>
    </>
  );
}
