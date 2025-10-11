import { motion } from "framer-motion";
import {
  Search,
  BarChart,
  Globe2,
  Megaphone,
  Target,
  Rocket,
} from "lucide-react";

const SeoMarketing = () => {
  const processes = [
    {
      step: "01",
      title: "Research & Audit",
      desc: "We start by understanding your market, audience, and competitors to build a data-driven foundation that identifies key opportunities for improvement and growth.",
    },
    {
      step: "02",
      title: "Strategy & Planning",
      desc: "Our team crafts a focused SEO and digital marketing roadmap aligned with your goals, ensuring your campaigns are built on clarity, precision, and scalability.",
    },
    {
      step: "03",
      title: "Execution",
      desc: "We implement targeted campaigns, optimize content and ads, and track live performance across channels for consistent results and sustained visibility.",
    },
    {
      step: "04",
      title: "Optimization & Reporting",
      desc: "Continuous testing, refinement, and transparent reporting help ensure you always stay ahead, with measurable growth at every milestone.",
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
            SEO & Marketing Solutions
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            Increase your digital reach and performance with intelligent SEO
            strategies, data-driven campaigns, and content marketing that
            delivers measurable impact.
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
            What We Offer
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                icon: <Search className="w-10 h-10 text-[#0037A6]" />,
                title: "Search Engine Optimization",
                desc: "Boost visibility with keyword-driven strategies and on-page optimizations that rank your business higher.",
              },
              {
                icon: <Megaphone className="w-10 h-10 text-[#0037A6]" />,
                title: "Digital Marketing Campaigns",
                desc: "Run impactful, data-backed campaigns across platforms like Google Ads, Meta, and LinkedIn.",
              },
              {
                icon: <Globe2 className="w-10 h-10 text-[#0037A6]" />,
                title: "Social Media Management",
                desc: "Engage your audience with tailored content, consistent branding, and measurable engagement growth.",
              },
              {
                icon: <BarChart className="w-10 h-10 text-[#0037A6]" />,
                title: "Analytics & Performance",
                desc: "Track progress with deep analytics insights and actionable reports to refine your growth strategy.",
              },
              {
                icon: <Target className="w-10 h-10 text-[#0037A6]" />,
                title: "Content Strategy",
                desc: "Build authority through optimized blogs, landing pages, and media crafted for conversion.",
              },
              {
                icon: <Rocket className="w-10 h-10 text-[#0037A6]" />,
                title: "Growth Marketing",
                desc: "Combine creativity with analytics to accelerate lead generation and business performance.",
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

      {/* Marketing Approach */}
      <section className="bg-[#0037A6]/5 py-28 px-8 md:px-28 w-full">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center text-[#0037A6] mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Marketing Approach
          </motion.h2>

          <div className="space-y-32">
            {processes.map((process, index) => (
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
                    {process.step}
                  </div>
                </div>

                {/* Step Content */}
                <div className="w-full md:w-1/2">
                  <h3 className="text-3xl md:text-4xl font-bold text-[#0037A6] mb-4">
                    {process.title}
                  </h3>
                  <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
                    {process.desc}
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
            Ready to Boost Your Digital Presence?
          </h2>
          <p className="text-lg md:text-xl mb-10 text-gray-200 max-w-3xl mx-auto">
            Let’s build a strong online footprint with optimized SEO and
            marketing campaigns that convert visitors into loyal customers.
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

export default SeoMarketing;
