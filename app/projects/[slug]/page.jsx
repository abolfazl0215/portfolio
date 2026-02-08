"use client";

import React, { use, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Calendar,
  Users,
  Code2,
  Sparkles,
  CheckCircle2,
  Globe,
  MessageSquare,
  Zap,
  Star,
  ArrowRight,
} from "lucide-react";
import useProjectsStore from "../../../stores/ProjectsStore";

const ProjectDetailPage = ({ params }) => {
  // Get slug from params
  const { slug } = use(params);
  const [selectedImage, setSelectedImage] = useState(0);

  // Get project data from Zustand store
  const getProjectBySlug = useProjectsStore(
    (state) => state.getProjectBySlug,
  );
  const getRelatedProjects = useProjectsStore(
    (state) => state.getRelatedProjects,
  );

  const projectData = getProjectBySlug(slug);

  // If project not found
  if (!projectData) {
    return (
      <div className="min-h-screen bg-[#0A0F1C] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            Project Not Found
          </h1>
          <p className="text-gray-400 mb-8">
            The project you're looking for doesn't exist.
          </p>
          <Link href="/#projects">
            <span className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all cursor-pointer">
              <ArrowLeft className="w-5 h-5" />
              Back to Projects
            </span>
          </Link>
        </div>
      </div>
    );
  }

  const relatedProjects = getRelatedProjects(projectData.id, 3);

  return (
    <div className="min-h-screen bg-[#0A0F1C] relative overflow-hidden">
      {/* Background Effects */}
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
          className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 px-[5vw] lg:px-[10vw] py-12">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8">
          <Link href="/#projects">
            <motion.span
              whileHover={{ x: -5 }}
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors group cursor-pointer">
              <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
              Back to Projects
            </motion.span>
          </Link>
        </motion.div>

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-sm text-blue-400 font-semibold">
              {projectData.category === "web" ? (
                <Globe className="w-4 h-4" />
              ) : (
                <MessageSquare className="w-4 h-4" />
              )}
              {projectData.tag}
            </span>
          </div>

          <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
            {projectData.title}
          </h1>

          <p className="text-xl text-gray-400 max-w-3xl leading-relaxed">
            {projectData.description}
          </p>

          {/* Quick Info */}
          <div className="flex flex-wrap gap-6 mt-8">
            <div className="flex items-center gap-2 text-gray-400">
              <Calendar className="w-5 h-5 text-blue-400" />
              <span className="text-sm">{projectData.date}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <Users className="w-5 h-5 text-blue-400" />
              <span className="text-sm">{projectData.client}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <Zap className="w-5 h-5 text-blue-400" />
              <span className="text-sm">
                Duration: {projectData.duration}
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 mt-8">
            {projectData.liveUrl && projectData.liveUrl !== "#" && (
              <a
                href={projectData.liveUrl}
                target="_blank"
                rel="noopener noreferrer">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all">
                  <ExternalLink className="w-5 h-5" />
                  View Live Demo
                </motion.button>
              </a>
            )}
            {projectData.githubUrl &&
              projectData.githubUrl !== "#" && (
                <a
                  href={projectData.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-6 py-3 bg-gray-800/50 border border-gray-700 rounded-full font-semibold hover:border-blue-500/50 transition-all">
                    <Github className="w-5 h-5" />
                    Source Code
                  </motion.button>
                </a>
              )}
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Main Image Gallery */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-4">
              <div className="relative rounded-2xl overflow-hidden border-2 border-gray-800 aspect-video">
                <Image
                  src={projectData.images[selectedImage]}
                  alt={projectData.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Thumbnail Gallery */}
              {projectData.images.length > 1 && (
                <div className="grid grid-cols-3 gap-4">
                  {projectData.images.map((img, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      onClick={() => setSelectedImage(index)}
                      className={`relative rounded-lg overflow-hidden cursor-pointer aspect-video border-2 transition-all ${
                        selectedImage === index
                          ? "border-blue-500 ring-2 ring-blue-500/50"
                          : "border-gray-800 hover:border-blue-500/50"
                      }`}>
                      <Image
                        src={img}
                        alt={`Image ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>

            {/* Project Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-[#0D1B2A]/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Code2 className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold">About Project</h2>
              </div>
              <div className="text-gray-400 leading-relaxed whitespace-pre-line">
                {projectData.fullDescription}
              </div>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-[#0D1B2A]/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold">Key Features</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {projectData.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.05 }}
                    className="flex items-start gap-3">
                    <div className="mt-1">
                      <CheckCircle2 className="w-5 h-5 text-blue-400" />
                    </div>
                    <span className="text-gray-300">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Technologies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-[#0D1B2A]/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 sticky top-6">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Code2 className="w-5 h-5 text-blue-400" />
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {projectData.technologies.map((tech, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 + index * 0.05 }}
                    className="px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-sm text-gray-300 font-medium hover:border-blue-500/50 transition-colors">
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* CTA Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-blue-500/10 border-2 border-blue-500/30 rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-3">
                Need a Similar Project?
              </h3>
              <p className="text-gray-400 text-sm mb-6">
                Get in touch with me now and start your project
              </p>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all">
                  Contact Me
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-20">
            <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
              Related Projects
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group">
                  <Link href={`/projects/${project.slug}`}>
                    <div className="bg-[#0D1B2A]/50 backdrop-blur-sm border-2 border-gray-800 hover:border-blue-500/40 rounded-2xl overflow-hidden transition-all duration-500 h-full cursor-pointer">
                      {/* Project Image */}
                      <div className="relative overflow-hidden aspect-video">
                        <Image
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          src={project.image}
                          width={400}
                          height={300}
                        />

                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A] via-[#0D1B2A]/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                        {/* Category Badge */}
                        <div className="absolute top-4 left-4">
                          <span className="flex items-center gap-2 px-3 py-1.5 bg-blue-500 text-white rounded-full text-sm font-semibold shadow-lg">
                            {project.category === "web" ? (
                              <Globe className="w-3.5 h-3.5" />
                            ) : (
                              <MessageSquare className="w-3.5 h-3.5" />
                            )}
                            {project.tag}
                          </span>
                        </div>

                        {/* Featured Badge */}
                        {project.featured && (
                          <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 p-2 rounded-full shadow-lg">
                            <Star className="w-3.5 h-3.5 text-white fill-white" />
                          </div>
                        )}
                      </div>

                      {/* Project Info */}
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                          {project.title}
                        </h3>

                        <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">
                          {project.description}
                        </p>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2">
                          {project.technologies
                            .slice(0, 3)
                            .map((tech, i) => (
                              <span
                                key={i}
                                className="px-3 py-1 bg-gray-800/50 border border-gray-700 rounded-lg text-xs text-gray-300 font-medium">
                                {tech}
                              </span>
                            ))}
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* View All Projects Link */}
            <div className="text-center mt-12">
              <Link href="/#projects">
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all cursor-pointer group">
                  View All Projects
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </motion.span>
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetailPage;
