"use client";

import { motion } from "framer-motion";
import {
  Smartphone,
  Layers,
  Rocket,
  ShieldCheck,
  Cpu,
  Cloud,
} from "lucide-react";

const AppDevService = () => {
  return (
    <div className="bg-white text-gray-900 min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-white to-blue-50 py-20 px-6 md:px-20 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Mobile App Development
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Build innovative, secure, and high-performing mobile applications
            that deliver seamless user experiences and drive business growth.
          </p>
        </motion.div>
      </section>

      {/* Section: Services Overview */}
      <section className="py-20 px-6 md:px-20 bg-white">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-semibold mb-4"
            style={{ color: "#0037A6" }}
          >
            Our App Development Expertise
          </motion.h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We specialize in building powerful mobile apps across all platforms —
            from concept and design to development and deployment — using
            cutting-edge technologies that ensure scalability and performance.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              icon: (
                <Smartphone
                  className="w-10 h-10"
                  style={{ color: "#0037A6" }}
                />
              ),
              title: "Native Apps",
              desc: "High-performance apps built for Android and iOS using native technologies for seamless functionality.",
            },
            {
              icon: <Layers className="w-10 h-10" style={{ color: "#0037A6" }} />,
              title: "Cross-Platform Solutions",
              desc: "Develop once, deploy everywhere — Flutter and React Native apps that maintain performance and consistency.",
            },
            {
              icon: <Cpu className="w-10 h-10" style={{ color: "#0037A6" }} />,
              title: "AI-Powered Apps",
              desc: "Integrate AI-driven features like chatbots, personalization, and smart automation for modern user experiences.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.7 }}
              className="bg-white border border-gray-100 shadow-md rounded-2xl p-8 hover:shadow-lg transition-all duration-300 text-center"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Section: Why Choose Us */}
      <section className="bg-blue-50 py-20 px-6 md:px-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="rounded-2xl overflow-hidden shadow-xl order-2 md:order-1"
          >
            <img
              src="/appdev.jpg"
              alt="App Development"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="order-1 md:order-2"
          >
            <h2
              className="text-3xl font-bold mb-6"
              style={{ color: "#0037A6" }}
            >
              Why Partner with ONE10 Technologies IT?
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              We craft engaging mobile apps designed for success. Our agile
              process, advanced tech stack, and focus on user experience ensure
              that every app we build delivers impact and performance.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center">
                <ShieldCheck
                  className="w-5 h-5 mr-2"
                  style={{ color: "#0037A6" }}
                />
                Secure and scalable architecture
              </li>
              <li className="flex items-center">
                <Rocket
                  className="w-5 h-5 mr-2"
                  style={{ color: "#0037A6" }}
                />
                Fast deployment & optimized performance
              </li>
              <li className="flex items-center">
                <Cloud className="w-5 h-5 mr-2" style={{ color: "#0037A6" }} />
                Cloud integration & backend automation
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Section: Process */}
      <section className="py-20 px-6 md:px-20 bg-white">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-semibold mb-4"
            style={{ color: "#0037A6" }}
          >
            Our Development Process
          </motion.h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            A structured and transparent process from concept to deployment.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 text-center">
          {[
            "Planning",
            "Design & Prototype",
            "Development",
            "Testing & Launch",
          ].map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className="flex flex-col items-center p-6 border rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div
                className="w-10 h-10 flex items-center justify-center rounded-full mb-4 text-white font-semibold"
                style={{ backgroundColor: "#0037A6" }}
              >
                {i + 1}
              </div>
              <h4 className="font-semibold text-gray-900">{step}</h4>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-20 px-6 md:px-20 text-center text-white"
        style={{ backgroundColor: "#0037A6" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Turn Your App Idea into Reality
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Whether it’s Android, iOS, or cross-platform — we build apps that
            perform, engage, and scale. Let’s start your digital transformation
            today.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-[#0037A6] px-8 py-3 rounded-full font-medium transition-all duration-300 shadow-md hover:bg-blue-100"
          >
            Get Started
          </a>
        </motion.div>
      </section>
    </div>
  );
};

export default AppDevService;
