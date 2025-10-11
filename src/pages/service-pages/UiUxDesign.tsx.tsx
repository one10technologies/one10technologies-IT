"use client";

import { motion } from "framer-motion";
import {
  LayoutDashboard,
  PenTool,
  MonitorSmartphone,
  Palette,
  Eye,
  Sparkles,
  MousePointer,
  Lightbulb,
} from "lucide-react";

const UiUxDesign = () => {
  const processSteps = [
    {
      step: "01",
      title: "Discovery & Research",
      desc: "We analyze your business goals, audience behavior, and market trends to define a clear design direction that aligns with your objectives.",
      icon: <Lightbulb className="w-7 h-7 text-[#0037A6]" />,
    },
    {
      step: "02",
      title: "Wireframing & Structure",
      desc: "Crafting intuitive layouts and navigation paths to visualize the flow, ensuring logical structure and seamless usability.",
      icon: <MousePointer className="w-7 h-7 text-[#0037A6]" />,
    },
    {
      step: "03",
      title: "Visual Design",
      desc: "Developing stunning interfaces that balance aesthetics and functionality, bringing your brand’s personality to life across platforms.",
      icon: <Palette className="w-7 h-7 text-[#0037A6]" />,
    },
    {
      step: "04",
      title: "Testing & Delivery",
      desc: "We validate interactions through usability testing, refine micro-interactions, and deliver pixel-perfect handoffs to developers.",
      icon: <Eye className="w-7 h-7 text-[#0037A6]" />,
    },
  ];

  return (
    <div className="bg-white text-gray-900 min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-white to-[#0037A6]/10 py-20 px-6 md:px-20 overflow-hidden">
        <motion.div
          className="max-w-5xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            UI / UX Design
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            Modern, intuitive experiences that delight users and drive results.
            We craft seamless interfaces that merge creativity, usability, and
            technology for impactful digital journeys.
          </p>
        </motion.div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-6 md:px-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-semibold text-center text-[#0037A6] mb-14"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Design Expertise
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                icon: <LayoutDashboard className="w-10 h-10 text-[#0037A6]" />,
                title: "User Interface Design",
                desc: "Pixel-perfect interfaces tailored to your brand and optimized for every device.",
              },
              {
                icon: <PenTool className="w-10 h-10 text-[#0037A6]" />,
                title: "User Experience Strategy",
                desc: "Create seamless, user-centered journeys backed by research and usability testing.",
              },
              {
                icon: (
                  <MonitorSmartphone className="w-10 h-10 text-[#0037A6]" />
                ),
                title: "Responsive Web Design",
                desc: "Consistent, elegant experiences across desktop, tablet, and mobile devices.",
              },
              {
                icon: <Palette className="w-10 h-10 text-[#0037A6]" />,
                title: "Visual Identity & Branding",
                desc: "A unified design language that communicates trust, innovation, and personality.",
              },
              {
                icon: <Eye className="w-10 h-10 text-[#0037A6]" />,
                title: "Prototyping & Wireframing",
                desc: "From low-fidelity wireframes to interactive prototypes—see your ideas come alive.",
              },
              {
                icon: <Sparkles className="w-10 h-10 text-[#0037A6]" />,
                title: "Motion & Micro-interactions",
                desc: "Delight users with subtle, purposeful animations that enhance engagement.",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-[#0037A6]">
                  {service.title}
                </h3>
                <p className="text-gray-700">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="bg-[#0037A6]/5 py-28 px-8 md:px-28 w-full">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center text-[#0037A6] mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Design Process
          </motion.h2>

          <div className="space-y-32">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                className={`flex flex-col md:flex-row items-center gap-14 ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -120 : 120,
                }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                {/* Step Number */}
                <div className="flex-shrink-0 text-center md:text-left w-full md:w-1/2 flex justify-center md:justify-start">
                  <div className="text-[180px] font-extrabold text-[#0037A6]/10 leading-none select-none">
                    {step.step}
                  </div>
                </div>

                {/* Step Content */}
                <div className="w-full md:w-1/2">
                  <div className="flex items-center gap-3 mb-4">
                    {step.icon}
                    <h3 className="text-3xl md:text-4xl font-bold text-[#0037A6]">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#0037A6] py-24 px-6 md:px-20 text-center text-white">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let’s Design Something Extraordinary
          </h2>
          <p className="text-lg md:text-xl mb-10 text-gray-200 max-w-3xl mx-auto">
            Transform your vision into a user experience that connects,
            converts, and inspires. Let’s create designs that leave a lasting
            impression.
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

export default UiUxDesign;
