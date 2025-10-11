import { motion } from "framer-motion";
import {
  ShieldCheck,
  Server,
  Network,
  Users,
  Laptop,
  Headphones,
  LifeBuoy,
  Globe,
  Settings,
  Lock,
} from "lucide-react";

const PortalsSupport = () => {
  return (
    <div className="bg-white text-gray-900 min-h-screen flex flex-col overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-white to-[#0037A6]/10 py-32 px-8 md:px-32 overflow-hidden">
        <motion.div
          className="max-w-6xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Portals & Support
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto mb-12">
            Web Portals | Secure, scalable online platforms designed for
            collaboration, data access, and exceptional customer support.
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
            Our Portal & Support Solutions
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-14">
            {[
              {
                icon: <Network className="w-12 h-12 text-[#0037A6]" />,
                title: "Enterprise Web Portals",
                desc: "Centralized platforms for employees, partners, and customers to collaborate efficiently.",
              },
              {
                icon: <Users className="w-12 h-12 text-[#0037A6]" />,
                title: "Customer Support Portals",
                desc: "Enhance client satisfaction with secure ticketing, FAQs, and knowledge management systems.",
              },
              {
                icon: <Server className="w-12 h-12 text-[#0037A6]" />,
                title: "Data Management Systems",
                desc: "Build powerful, role-based data systems with advanced analytics and custom dashboards.",
              },
              {
                icon: <Laptop className="w-12 h-12 text-[#0037A6]" />,
                title: "Partner Portals",
                desc: "Enable secure collaboration and information exchange between your business and partners.",
              },
              {
                icon: <ShieldCheck className="w-12 h-12 text-[#0037A6]" />,
                title: "Security & Access Control",
                desc: "Implement encrypted communication, authentication, and granular access permissions.",
              },
              {
                icon: <LifeBuoy className="w-12 h-12 text-[#0037A6]" />,
                title: "Ongoing Support & Maintenance",
                desc: "We ensure uptime, bug fixes, performance optimization, and user training for sustained success.",
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

      {/* Portal Development Process */}
      <section className="bg-[#0037A6]/5 py-40 px-8 md:px-32 flex flex-col justify-center">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-5xl md:text-6xl font-bold text-center text-[#0037A6] mb-32"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Development Process
          </motion.h2>

          <div className="space-y-40">
            {[
              {
                step: "01",
                title: "Requirement Analysis",
                desc: "We understand your portal goals, user roles, and business workflows to define core functionality with clarity and precision.",
                icon: <Settings className="w-12 h-12 text-[#0037A6]" />,
              },
              {
                step: "02",
                title: "Design & Architecture",
                desc: "We craft an intuitive interface and robust architecture ensuring seamless navigation and scalable infrastructure.",
                icon: <Globe className="w-12 h-12 text-[#0037A6]" />,
              },
              {
                step: "03",
                title: "Secure Development",
                desc: "We integrate advanced authentication, encryption, and threat prevention to guarantee data security and trust.",
                icon: <Lock className="w-12 h-12 text-[#0037A6]" />,
              },
              {
                step: "04",
                title: "Testing & Support",
                desc: "Rigorous QA, deployment readiness, and continuous post-launch support ensure reliability and performance.",
                icon: <Headphones className="w-12 h-12 text-[#0037A6]" />,
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
                    {process.icon}
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
            Build Secure, Scalable Portals with Confidence
          </h2>
          <p className="text-xl md:text-2xl mb-10 text-gray-200 max-w-4xl mx-auto">
            Empower your users, streamline communication, and enhance service
            delivery with custom-built web portals backed by reliable support.
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

export default PortalsSupport;
