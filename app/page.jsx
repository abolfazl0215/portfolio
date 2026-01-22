"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Instagram,
} from "lucide-react";
import Navbar from "./Components/Navbar";
import Image from "next/image";

export default function App() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      text: "Full-Stack Web Developer I build complete web Full-Stack Web Developer I build complete web Full-Stack Web Developer I build complete web Full",
      name: "Aboifazl Mokhtari",
      role: "Founder",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=1",
    },
    {
      id: 2,
      text: "Full-Stack Web Developer I build complete web Full-Stack Web Developer I build complete web Full-Stack Web Developer I build complete web Full",
      name: "Aboifazl Mokhtari",
      role: "Founder",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=2",
    },
    {
      id: 3,
      text: "Full-Stack Web Developer I build complete web Full-Stack Web Developer I build complete web Full-Stack Web Developer I build complete web Full",
      name: "Aboifazl Mokhtari",
      role: "Founder",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=3",
    },
    {
      id: 4,
      text: "Full-Stack Web Developer I build complete web Full-Stack Web Developer I build complete web Full-Stack Web Developer I build complete web Full",
      name: "Aboifazl Mokhtari",
      role: "Founder",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=4",
    },
  ];

  const projects = [
    {
      id: 1,
      title: "My Projects",
      description:
        "Full-Stack Web Developer I build complete web Full-Stack Web Developer I build complete web",
      tag: "Website",
      image: "/project-image.jpg", // مسیر تصویر پروژه
    },
    {
      id: 2,
      title: "My Projects",
      description:
        "Full-Stack Web Developer I build complete web Full-Stack Web Developer I build complete web",
      tag: "Website",
      image: "/project-image.jpg",
    },
    {
      id: 3,
      title: "My Projects",
      description:
        "Full-Stack Web Developer I build complete web Full-Stack Web Developer I build complete web",
      tag: "Website",
      image: "/project-image.jpg",
    },
    {
      id: 4,
      title: "My Projects",
      description:
        "Full-Stack Web Developer I build complete web Full-Stack Web Developer I build complete web",
      tag: "Website",
      image: "/project-image.jpg",
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-[#000B15] text-white">
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-50 ">
          <Navbar />
        </header>

        {/* Hero Section */}
        <section
          id="home"
          className="relative grid-bg pt-[15vw] pb-[5vw] px-[10vw]">
          <div className="container mx-auto">
            <div className="flex justify-between gap-[10vw] items-center">
              <div className="flex-1">
                <p className="text-gray-400 text-[1vw]">
                  WELCOME TO MY WORLD ️️️️️️️️️️✨ ️ ️
                </p>
                <h1 className="text-[1.5vw] mt-[.7vw] font-medium">
                  Hi,I’m Abolfazl (Abi) Mokhtari
                </h1>
                <p className="text-[2vw] mt-[1vw] md:text-6xl font-semibold ">
                  <span className="text-[#1F93DF]">Web </span>
                  Developer
                </p>
                <p className="text-gray-400 text-[1.2vw] mb-[2vw] leading-relaxed font-light mt-[.5vw]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis
                  nostrud exercitation ullamco laboris.
                </p>
                <div className="flex gap-4 mb-8">
                  <button className="px-[2.5vw] py-[1vw] text-[1.2vw] text-black font-medium bg-[#CDE6FF] rounded-full hover:bg-[#2563EB] transition-colors">
                    My Projects
                  </button>
                  <button className="px-[2.5vw] py-[1vw] text-[1.2vw] border border-[#CDE6FF] rounded-full hover:bg-[#3B82F6]/10 transition-colors">
                    Download CV
                  </button>
                </div>
                <div className="flex gap-[1vw]">
                  <a
                    href="#"
                    className="w-[3vw] h-[3vw] rounded-full bg-[#CDE6FF] flex items-center justify-center hover:bg-[#3B82F6] transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-[1.8vw]"
                      fill="none"
                      viewBox="0 0 24 24">
                      <path
                        fill="#007DD0"
                        d="M17.5 0H5.833C2.625 0 0 2.625 0 5.833V17.5c0 3.208 2.625 5.833 5.833 5.833H17.5c3.208 0 5.833-2.625 5.833-5.833V5.833C23.333 2.625 20.708 0 17.5 0M7.583 18.083H5.25v-8.75h2.333zm-1.166-10.5A1.17 1.17 0 0 1 5.25 6.417 1.17 1.17 0 0 1 6.417 5.25a1.17 1.17 0 0 1 1.166 1.167 1.17 1.17 0 0 1-1.166 1.166m11.666 10.5H15.75v-4.375c0-1.458-.583-2.1-1.75-2.1l-2.333.059v6.416H9.333v-8.75L14 9.217c1.983 0 4.083 1.166 4.083 4.433z"></path>
                    </svg>
                  </a>
                  {/* telegram */}
                  <a
                    href="#"
                    className="w-[3vw] h-[3vw] rounded-full bg-[#1F93DF] flex items-center justify-center hover:bg-[#3B82F6] transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-[1.8vw]"
                      fill="none"
                      viewBox="0 0 26 26">
                      <path
                        fill="#fff"
                        d="M13 0c7.18 0 13 5.82 13 13s-5.82 13-13 13S0 20.18 0 13 5.82 0 13 0m5.774 7.8c-.495.009-1.255.27-4.912 1.771q-1.92.79-7.679 3.266-.935.367-.98.718c-.057.45.599.59 1.423.854.673.216 1.577.468 2.047.478q.64.015 1.428-.52 5.38-3.586 5.554-3.625c.082-.018.196-.041.273.026.077.068.07.196.061.23-.065.275-3.434 3.3-3.628 3.499l-.093.093c-.714.706-1.437 1.167-.19 1.977 1.124.732 1.78 1.199 2.938 1.949.74.48 1.321 1.048 2.086.978.352-.032.715-.358.9-1.333.436-2.302 1.294-7.29 1.492-9.346.017-.18-.005-.41-.022-.512a.55.55 0 0 0-.188-.352c-.157-.126-.401-.153-.51-.151"></path>
                    </svg>
                  </a>
                  {/* whatsapp */}
                  <a
                    href="#"
                    className="w-[3vw] h-[3vw] rounded-full bg-[#CDE6FF] flex items-center justify-center hover:bg-[#3B82F6] transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-[1.8vw]"
                      fill="none"
                      viewBox="0 0 24 24">
                      <g clipPath="url(#clip0_2773_103)">
                        <path
                          fill="#007DD0"
                          fillRule="evenodd"
                          d="M18.985 16.945c-.289.819-1.439 1.496-2.355 1.694-.628.134-1.446.239-4.204-.904-3.097-1.283-7.398-5.854-7.398-8.896 0-1.548.893-3.351 2.454-3.351.751 0 .917.015 1.164.608.29.698.995 2.42 1.079 2.596.347.724-.353 1.147-.86 1.777-.163.19-.346.395-.141.748.204.346.91 1.496 1.946 2.419 1.34 1.193 2.426 1.574 2.814 1.736.29.12.635.092.846-.133.268-.29.6-.77.939-1.243.239-.338.542-.38.86-.26.215.074 2.945 1.342 3.06 1.545.085.147.085.846-.204 1.664M12.002 0h-.006C5.381 0 0 5.382 0 12c0 2.624.846 5.058 2.285 7.033L.79 23.492 5.4 22.018A11.9 11.9 0 0 0 12.002 24C18.618 24 24 18.618 24 12S18.618 0 12.002 0"
                          clipRule="evenodd"></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_2773_103">
                          <path fill="#fff" d="M0 0h24v24H0z"></path>
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-[3vw] h-[3vw] rounded-full bg-[#1F93DF] flex items-center justify-center hover:bg-[#3B82F6] transition-colors">
                    <svg
                      className="w-[1.8vw]"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 27 27">
                      <path
                        fill="#FBFEFF"
                        fillRule="evenodd"
                        d="M13.5 0C20.956 0 27 6.196 27 13.842c0 6.114-3.864 11.3-9.225 13.132-.684.137-.927-.296-.927-.664 0-.456.016-1.947.016-3.799 0-1.29-.432-2.133-.916-2.562 3.006-.343 6.165-1.514 6.165-6.83 0-1.512-.524-2.746-1.39-3.715.14-.35.603-1.758-.133-3.664 0 0-1.131-.37-3.708 1.42a12.7 12.7 0 0 0-3.382-.467c-1.148.006-2.302.16-3.379.466C7.541 5.37 6.407 5.74 6.407 5.74c-.733 1.906-.27 3.314-.13 3.664-.864.97-1.391 2.203-1.391 3.715 0 5.303 3.152 6.491 6.15 6.841-.386.346-.735.955-.857 1.85-.77.354-2.724.966-3.929-1.15 0 0-.714-1.33-2.069-1.427 0 0-1.316-.017-.092.842 0 0 .884.425 1.499 2.025 0 0 .792 2.47 4.548 1.633.007 1.157.019 2.247.019 2.577 0 .366-.249.794-.922.666C3.868 25.146 0 19.957 0 13.842 0 6.196 6.045 0 13.5 0"
                        clipRule="evenodd"></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="relative w-[35%] ">
                <div className="w-full h-full max-w-md mx-auto">
                  <div className="relative">
                    {/* <div className="absolute top-[5vw] right-0 w-[30vw] h-[25vw] bg-[#0099F9]/47 rounded-full blur-[10vw]"></div> */}
                    <div className="relative rounded-3xl overflow-hidden  ">
                      <Image
                        src="/images/me4.png"
                        width={1000}
                        height={1000}
                        alt="Profile"
                        className="w-full h-auto z-10 relative"
                      />
                    </div>
                    <div className="absolute -bottom-[3vw] left-0 w-[30vw] h-[25vw] blur-[5vw] bg-[#0099F9]/40 rounded-full z-0"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* arrow down */}
          <svg
            className="absolute w-[4vw] bottom-[2vw] left-[50%] right-[50%]"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 110 119">
            <path
              fill="#CDE6FF"
              fillOpacity="0.23"
              d="M91.697 97.095c6.468-1.992 9.054-9.104 17.458-7.923-.917 1.47-1.421 2.482-2.126 3.11-8.429 7.804-16.996 15.761-25.594 23.45-1.41 1.256-3.88 2.773-5.466 2.553-3.017-.458-2.704-3.081-2.344-5.301 1.033-7.063 1.896-14.242 2.913-21.44 4.682 1.35 4.682 1.35 5.007 13.287 15.495-17.896 9.877-41.59-12.386-50.516-1.007 2.024-1.86 4.03-2.867 6.056-3.053 5.805-7.512 10.28-14.361 12.999-4.915 1.944-9.729 2.106-13.986-.927-4.274-3.167-4.46-7.364-2.97-11.895 3.052-9.753 11.89-15.428 23.336-14.88 1.415.103 2.8-.06 4.814-.164-.405-12.608-4.541-23.821-14.297-32.462C33.822-.42 15.785 5.258 4.595 14.752c-1.426 1.121-2.497 2.609-4.596 4.627-.032-4.215 2.173-6.654 4.394-8.959 8.593-9.048 24.36-12.824 36.682-8.842C48.869 4.19 55.147 8.482 59.617 14.62c6.527 9.024 10.351 18.913 10.24 29.813-.025 1.092.102 2.166.107 3.526 9.91 4.676 18.855 10.42 23.293 20.236 4.1 9.584.708 19.104-1.56 28.9m-29.208-45.12c-11.118-3.035-20.438 1.2-22.372 9.868-.53 2.104.112 4.886 1.549 6.484 1.978 2.215 5.328 1.546 8.122.126 7.385-3.462 11.085-9.073 12.701-16.477"></path>
          </svg>
        </section>

        {/* About Section */}
        <section
          id="about"
          className=" pt-[7vw] pb-[5vw] px-[10vw] relative bg-[#000B15] z-20">
          <div className="container mx-auto">
            <div className="flex justify-between items-center ">
              <div className="relative w-[30%]  ">
                <div className="relative rounded-3xl overflow-hidden ">
                  <Image
                    src="/images/me32.png"
                    width={1000}
                    height={1000}
                    alt="About"
                    className="w-full  h-auto"
                  />
                </div>
              </div>
              <div className="w-[60%]  ">
                <h2 className="text-4xl font-bold mb-6">About me</h2>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  I'm a Graphic Designer Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. I'm a
                  Graphic Designer Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.
                </p>

                {/* Skills */}
                <div className="mt-[3vw]">
                  <h3 className="text-3xl font-bold mb-8 ">Skills</h3>
                  <div className="flex gap-[1vw] flex-wrap">
                    <div className="w-[3vw] h-[3vw] flex justify-center bg-[#CDE6FF] rounded-lg">
                      <Image
                        src="/icon/nextjs.svg"
                        className="w-[70%]"
                        width={100}
                        height={100}
                        alt="next js icon"
                      />
                    </div>
                    <div className="w-[3vw] h-[3vw] flex justify-center bg-[#1F93DF] rounded-lg">
                      <Image
                        src="/icon/nodejs.svg"
                        className="w-[70%]"
                        width={100}
                        height={100}
                        alt="next js icon"
                      />
                    </div>
                    <div className="w-[3vw] h-[3vw] flex justify-center bg-[#CDE6FF] rounded-lg">
                      <Image
                        src="/icon/reactjs.svg"
                        className="w-[70%]"
                        width={100}
                        height={100}
                        alt="next js icon"
                      />
                    </div>
                    <div className="w-[3vw] h-[3vw] flex justify-center bg-[#1F93DF] rounded-lg">
                      <Image
                        src="/icon/telegram.svg"
                        className="w-[70%]"
                        width={100}
                        height={100}
                        alt="next js icon"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 px-[10vw] grid-bg">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-4 text-center">
              Services
            </h2>
            <p className="text-gray-400 text-center mb-12">
              Temporibus autem quibusdam et aut officiis debitis aut
            </p>
            <div className="grid md:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className={`p-8 rounded-2xl border-2 transition-all cursor-pointer ${
                    item === 2
                      ? "bg-gradient-to-tr from-blue-500 to-blue-700 border-blue-700 transform scale-105"
                      : "bg-[#0D1B2A] border-transparent hover:border-[#3B82F6]"
                  }`}>
                  <Image
                    className="w-[4vw] mb-[1vw]"
                    src="/icon/web.svg"
                    width={300}
                    height={300}
                    alt="service icon"
                  />
                  <h3 className="text-xl font-semibold mb-4">
                    Web Design
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="min-h-screen  py-20 px-[10vw]">
          <div className="mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-4xl font-bold text-white mb-4">
                My Projects
              </h1>
              <p className="text-gray-400">
                Full-Stack Web Developer I build complete web
              </p>
            </div>

            {/* Swiper Carousel */}
            <div className="relative">
              <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={15}
                slidesPerView={1}
                navigation={{
                  nextEl: ".swiper-button-next-custom",
                  prevEl: ".swiper-button-prev-custom",
                }}
                pagination={{
                  clickable: true,
                  el: ".swiper-pagination-custom",
                }}
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                  1024: {
                    slidesPerView: 3.5,
                  },
                }}
                className="pb-16">
                {projects.map((project) => (
                  <SwiperSlide key={project.id}>
                    <div className="bg-[#0D1B2A] rounded-2xl p-[.5vw] border border-transparent hover:border-blue-500/40 transition-all duration-300 cursor-pointer">
                      {/* Project Image */}
                      <Image
                        alt="eee"
                        className="rounded-xl"
                        src="https://res.cloudinary.com/dtakyi9mf/image/upload/v1768893218/pexels-arthousestudio-4530180_b7otjf.jpg"
                        width={300}
                        height={300}
                      />

                      {/* Project Info */}
                      <div className="px-[.8vw] py-[1vw]">
                        <div className="flex items-center justify-between">
                          <h3 className="text-xl font-semibold text-white">
                            {project.title}
                          </h3>
                          <span className="bg-blue-500 text-white px-[1vw] py-[.2vw] rounded-full text-[1vw]">
                            {project.tag}
                          </span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed mt-[1.5vw]">
                          {project.description}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Custom Navigation Buttons */}
              <div className="flex items-center justify-center gap-4 mt-8">
                <button className="swiper-button-prev-custom w-[3vw] h-[3vw] rounded-full border-2 border-blue-500/30 flex items-center justify-center text-white hover:bg-blue-600 hover:border-blue-600 transition-all">
                  <svg
                    className="w-[1.3vw] h-[1.3vw]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>

                <button className="bg-blue-500 text-white px-8 py-[.7vw] rounded-full font-medium hover:bg-blue-700 transition-all">
                  See All &gt;
                </button>

                <button className="swiper-button-next-custom w-[3vw] h-[3vw] rounded-full border-2 border-blue-500/30 flex items-center justify-center text-white hover:bg-blue-600 hover:border-blue-600 transition-all">
                  <svg
                    className="w-[1.3vw] h-[1.3vw]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>

              {/* Custom Pagination */}
              {/* <div className="swiper-pagination-custom flex justify-center gap-2 mt-6"></div> */}
            </div>
          </div>

          <style jsx>{`
            .swiper-pagination-custom .swiper-pagination-bullet {
              width: 8px;
              height: 8px;
              background: #3b82f6;
              opacity: 0.3;
              border-radius: 50%;
            }
            .swiper-pagination-custom
              .swiper-pagination-bullet-active {
              opacity: 1;
              width: 24px;
              border-radius: 4px;
            }
          `}</style>
        </section>

        {/* Testimonials Section */}
        <section className="min-h-screen bg-gradient-to-b grid-bg from-[#000d1a] to-[#001a33] py-20 px-[10vw]">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-4xl font-bold text-white mb-4">
                Testimonials
              </h2>
            </div>

            {/* Slider */}
            <div className="relative">
              <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={0}
                slidesPerView={1.4}
                centeredSlides={true}
                initialSlide={2}
                navigation={{
                  prevEl: ".swiper-button-prev-custom",
                  nextEl: ".swiper-button-next-custom",
                }}
                pagination={{
                  el: ".swiper-pagination-custom",
                  clickable: true,
                  bulletClass: "swiper-pagination-bullet-custom",
                  bulletActiveClass:
                    "swiper-pagination-bullet-active-custom",
                }}
                breakpoints={{
                  640: {
                    slidesPerView: 1.6,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                  1024: {
                    slidesPerView: 2.2,
                  },
                }}
                slideToClickedSlide={true}
                className="pb-20">
                {testimonials.map((testimonial) => (
                  <SwiperSlide key={testimonial.id}>
                    {({ isActive }) => (
                      <div
                        className={`rounded-3xl p-8 md:p-12 relative shadow-2xl transition-all duration-500 ${
                          isActive
                            ? "bg-slate-700 scale-100 opacity-100"
                            : "bg-[#0D1B2A] scale-90 opacity-80"
                        }`}>
                        {/* Quote Icon */}
                        <div className="absolute top-6 left-6 md:top-8 md:left-8 text-5xl md:text-6xl text-white/20 font-serif">
                          "
                        </div>

                        {/* Testimonial Text */}
                        <div className="mt-12 mb-8 md:mt-16 md:mb-12">
                          <p
                            className={`text-lg md:text-xl leading-relaxed transition-colors duration-500 ${
                              isActive
                                ? "text-gray-200"
                                : "text-gray-400"
                            }`}>
                            {testimonial.text}
                          </p>
                        </div>

                        {/* Author Info */}
                        <div className="flex items-center gap-4">
                          <div
                            className={`w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden transition-all duration-500 ${
                              isActive
                                ? "bg-blue-500 border-4 border-blue-400"
                                : "bg-blue-600 border-4 border-blue-500"
                            }`}>
                            <img
                              src={testimonial.avatar}
                              alt={testimonial.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <h4
                              className={`font-semibold text-base md:text-lg transition-colors duration-500 ${
                                isActive
                                  ? "text-white"
                                  : "text-gray-300"
                              }`}>
                              {testimonial.name}
                            </h4>
                            <p
                              className={`text-sm transition-colors duration-500 ${
                                isActive
                                  ? "text-gray-300"
                                  : "text-gray-500"
                              }`}>
                              {testimonial.role}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Custom Navigation Buttons */}
              <div className="flex items-center  justify-center gap-4 mt-8">
                <button className=" swiper-button-prev-custom w-[3vw] h-[3vw] md:w-12 md:h-12 rounded-full border-2 border-gray-600 flex items-center justify-center text-white hover:bg-blue-500 hover:border-blue-500 transition-all">
                  <svg
                    className="w-[1.3vw] h-[1.3vw] md:w-6 md:h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>

                {/* Custom Pagination */}
                <div className=" swiper-pagination-custom max-w-[8vw] flex justify-center gap-2"></div>

                <button className="swiper-button-next-custom w-[3vw] h-[3vw] md:w-12 md:h-12 rounded-full border-2 border-gray-600 flex items-center justify-center text-white hover:bg-blue-500 hover:border-blue-500 transition-all">
                  <svg
                    className="w-[1.3vw] h-[1.3vw] md:w-6 md:h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <style>{`
        .swiper-pagination-bullet-custom {
          width: 10px;
          height: 10px;
          background: #4b5563;
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.3s;
        }
        
        .swiper-pagination-bullet-active-custom {
          background: white;
          width: 28px;
          border-radius: 5px;
        }
        
        .swiper-button-prev-custom:disabled,
        .swiper-button-next-custom:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .swiper-slide {
          transition: all 0.5s ease;
        }
      `}</style>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-[10vw]">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-4 text-center">
              Contact
            </h2>
            <p className="text-gray-400 text-center mb-12">
              Let's Create Something Amazing Together
            </p>
            <div className="mx-auto grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-8">
                  Let's Create Something Amazing Together
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#3B82F6] flex items-center justify-center flex-shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <div className="font-bold mb-1">Address</div>
                      <div className="text-gray-400 text-sm">
                        123 Street Name, City,
                        <br />
                        State 12345
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#3B82F6] flex items-center justify-center flex-shrink-0">
                      <Phone size={20} />
                    </div>
                    <div>
                      <div className="font-bold mb-1">Phone</div>
                      <div className="text-gray-400 text-sm">
                        +1 234 567 8900
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#3B82F6] flex items-center justify-center flex-shrink-0">
                      <Mail size={20} />
                    </div>
                    <div>
                      <div className="font-bold mb-1">Email</div>
                      <div className="text-gray-400 text-sm">
                        example@email.com
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Name"
                      className="px-4 py-3 rounded-lg bg-[#1E3A5F] border border-[#1E3A5F] focus:border-[#3B82F6] outline-none transition-colors"
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      className="px-4 py-3 rounded-lg bg-[#1E3A5F] border border-[#1E3A5F] focus:border-[#3B82F6] outline-none transition-colors"
                    />
                  </div>
                  <textarea
                    placeholder="Message"
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg bg-[#1E3A5F] border border-[#1E3A5F] focus:border-[#3B82F6] outline-none transition-colors resize-none"></textarea>
                  <button
                    type="submit"
                    className="w-full px-8 py-3 bg-[#3B82F6] rounded-lg hover:bg-[#2563EB] transition-colors">
                    SEND MESSAGE
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-[10vw] grid-bg border-t border-[#1E3A5F]">
          <div className="container mx-auto">
            <div className="bg-[#3B82F6] rounded-3xl p-12 text-center mb-12">
              <h3 className="text-3xl font-bold mb-4">
                Tanks for Whatching
              </h3>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-gray-400 text-sm">
                © 2026 All Rights Reserved
              </div>
            </div>
          </div>
        </footer>

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
