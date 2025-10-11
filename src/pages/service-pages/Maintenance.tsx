"use client";

import { motion } from "framer-motion";
import {
  Wrench,
  ShieldCheck,
  RefreshCcw,
  Clock,
  Database,
  Headphones,
} from "lucide-react";

const Maintenance = () => {
  return (
    <div className="bg-white text-gray-900 min-h-screen flex flex-col overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-white to-[#0037A6]/10 py-32 px-8 md:px-32 overflow-hidden">
        <motion.div
          className="max-w-5xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Maintenance & Support
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto mb-10">
            Keep your digital solutions running flawlessly with proactive
            updates, performance optimization, and dedicated support that ensures
            stability and security.
          </p>
        </motion.div>
      </section>

      {/* Services Overview */}
      <section className="py-28 px-8 md:px-32 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl md:text-5xl font-semibold text-center text-[#0037A6] mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Maintenance Solutions
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-14">
            {[
              {
                icon: <RefreshCcw className="w-12 h-12 text-[#0037A6]" />,
                title: "Regular Updates",
                desc: "We ensure your systems are always up-to-date with the latest features, patches, and improvements.",
              },
              {
                icon: <ShieldCheck className="w-12 h-12 text-[#0037A6]" />,
                title: "Security Management",
                desc: "Keep your platforms secure with continuous vulnerability checks and threat monitoring.",
              },
              {
                icon: <Database className="w-12 h-12 text-[#0037A6]" />,
                title: "Performance Optimization",
                desc: "Improve system speed, responsiveness, and scalability for seamless user experiences.",
              },
              {
                icon: <Wrench className="w-12 h-12 text-[#0037A6]" />,
                title: "Bug Fixes & Troubleshooting",
                desc: "Swift detection and resolution of technical issues to ensure uninterrupted operations.",
              },
              {
                icon: <Clock className="w-12 h-12 text-[#0037A6]" />,
                title: "24/7 Monitoring",
                desc: "Real-time monitoring of systems and performance to proactively address potential issues.",
              },
              {
                icon: <Headphones className="w-12 h-12 text-[#0037A6]" />,
                title: "Technical Support",
                desc: "Dedicated support team to assist with maintenance requests and on-demand technical help.",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-3xl shadow-xl p-10 hover:shadow-2xl transition-all duration-300"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="mb-6 flex justify-center md:justify-start">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-[#0037A6] text-center md:text-left">
                  {service.title}
                </h3>
                <p className="text-gray-700 text-lg text-center md:text-left">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-[#0037A6]/5 py-40 px-8 md:px-32 flex flex-col justify-center">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-5xl md:text-6xl font-bold text-center text-[#0037A6] mb-32"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Maintenance Approach
          </motion.h2>

          <div className="space-y-40">
            {[
              {
                step: "01",
                title: "Assessment & Planning",
                desc: "We analyze your system’s architecture and define a tailored maintenance roadmap.",
              },
              {
                step: "02",
                title: "Scheduled Updates",
                desc: "Regularly apply updates and enhancements to keep your platform current and stable.",
              },
              {
                step: "03",
                title: "Monitoring & Optimization",
                desc: "Constantly track performance metrics and optimize processes for maximum efficiency.",
              },
              {
                step: "04",
                title: "Support & Reporting",
                desc: "Deliver transparent maintenance reports and on-demand technical assistance to ensure reliability.",
              },
            ].map((process, index) => (
              <motion.div
                key={index}
                className={`flex flex-col md:flex-row items-center md:items-center gap-20 ${
                  index % 2 !== 0 ? "md:flex-row-reverse" : ""
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -120 : 120 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                {/* Step Number */}
                <div className="text-[200px] font-extrabold text-[#0037A6]/10 leading-none md:w-1/3 text-center select-none flex justify-center md:justify-start">
                  {process.step}
                </div>

                {/* Step Details */}
                <div className="md:w-2/3 flex flex-col justify-center items-center md:items-start text-center md:text-left">
                  <div className="flex items-center gap-6 mb-6 justify-center md:justify-start">
                    <Wrench className="w-12 h-12 text-[#0037A6]" />
                    <h3 className="text-4xl md:text-5xl font-bold text-[#0037A6]">
                      {process.title}
                    </h3>
                  </div>
                  <p className="text-gray-700 text-xl leading-relaxed max-w-2xl">
                    {process.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#0037A6] py-32 px-8 md:px-32 text-center text-white">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Keep Your Systems Running Smoothly
          </h2>
          <p className="text-xl md:text-2xl mb-10 text-gray-200 max-w-4xl mx-auto">
            Ensure your applications perform at their best with continuous
            updates, monitoring, and expert maintenance support.
          </p>
          <a
            href="/contact"
            className="bg-white text-[#0037A6] font-semibold px-10 py-4 rounded-full hover:bg-gray-100 transition-colors text-lg"
          >
            Get in Touch
          </a>
        </motion.div>
      </section>
    </div>
  );
};

export default Maintenance;
