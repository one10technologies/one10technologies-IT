"use client";

import React from "react";
import { motion } from "framer-motion";

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
}

const projects: Project[] = [
  {
    title: "TrustTrack",
    description:
      "A smart platform to manage trusts seamlessly with a single admin-user model. It helps track donations, automate accounting, and ensure transparency in trust operations.",
    image: "/work/trusttrack-ss.png", // Add screenshots in public/projects
    link: "https://trust-track.vercel.app/",
  },
  {
    title: "Project Management System (PMS)",
    description:
      "An advanced management system connecting admins, managers, and employees. Features include task assignment, project tracking, productivity analytics, and real-time reporting.",
    image: "/work/pms-ss.png",
    link: "https://pms.one10tech.com",
  },
  {
    title: "Expensify",
    description:
      "A simple yet powerful expense tracker to record, categorize, and visualize spending patterns for individuals or small teams.",
    image: "/work/expensify-ss.png",
    link: "https://expensify-website.vercel.app",
  },
];

const OurWork: React.FC = () => {
  return (
    <div className="bg-white text-gray-800 py-20 px-6 md:px-16 lg:px-24">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Our Work 🚀
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg text-gray-600 max-w-3xl mx-auto"
        >
          Explore some of our featured projects that showcase our technical
          expertise and design precision.
        </motion.p>
      </div>

      {/* Projects Section */}
      <div className="space-y-24 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={`flex flex-col md:flex-row items-center gap-12 ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Image */}
            <div className="w-full md:w-1/2">
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                src={project.image}
                alt={project.title}
                className="rounded-1xl shadow-lg border border-gray-200 w-full"
              />
            </div>

            {/* Text */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                {project.title}
              </h2>
              <p className="text-gray-600 mb-6">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-black text-white px-6 py-3 rounded-1xl font-medium hover:bg-gray-800 transition-all"
              >
                View Project →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default OurWork;
