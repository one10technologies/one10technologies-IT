import { motion } from "framer-motion";
import {
  Brush,
  BadgeCheck,
  PenTool,
  Layers,
  Type,
  Palette,
  MonitorSmartphone,
  Crown,
  Lightbulb,
} from "lucide-react";

const Branding = () => {
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
            Branding & Identity
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto mb-12">
            Logos, identity, and design systems that tell your story. We build
            brands that inspire trust, recognition, and emotional connection.
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
            What We Offer
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-14">
            {[
              {
                icon: <Brush className="w-12 h-12 text-[#0037A6]" />,
                title: "Logo Design",
                desc: "Crafting memorable logos that visually represent your brand’s personality and purpose.",
              },
              {
                icon: <BadgeCheck className="w-12 h-12 text-[#0037A6]" />,
                title: "Brand Identity",
                desc: "Building cohesive brand systems including typography, color palette, and visual language.",
              },
              {
                icon: <Type className="w-12 h-12 text-[#0037A6]" />,
                title: "Brand Guidelines",
                desc: "Documenting rules for consistent use of brand assets across print, digital, and social media.",
              },
              {
                icon: <Layers className="w-12 h-12 text-[#0037A6]" />,
                title: "Design Systems",
                desc: "Creating scalable UI kits and reusable components that keep your design consistent and efficient.",
              },
              {
                icon: (
                  <MonitorSmartphone className="w-12 h-12 text-[#0037A6]" />
                ),
                title: "Digital Branding",
                desc: "Aligning your digital presence with your brand story across websites, apps, and marketing touchpoints.",
              },
              {
                icon: <Crown className="w-12 h-12 text-[#0037A6]" />,
                title: "Rebranding & Evolution",
                desc: "Refreshing or repositioning existing brands with modern visuals and refined messaging.",
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
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-2xl font-semibold mb-3 text-[#0037A6]">
                  {service.title}
                </h3>
                <p className="text-gray-700 text-lg">{service.desc}</p>
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
            Our Branding Process
          </motion.h2>

          <div className="space-y-40">
            {[
              {
                step: "01",
                title: "Discovery & Strategy",
                desc: "We start by understanding your brand’s mission, values, and audience. This deep dive sets the foundation for authentic storytelling and strategic positioning.",
                icon: <Lightbulb className="w-10 h-10 text-[#0037A6]" />,
              },
              {
                step: "02",
                title: "Concept Creation",
                desc: "Our team translates your strategy into compelling creative directions — exploring logo ideas, mood boards, and brand personality concepts that inspire.",
                icon: <PenTool className="w-10 h-10 text-[#0037A6]" />,
              },
              {
                step: "03",
                title: "Design & Refinement",
                desc: "We refine visuals through thoughtful color, typography, and form — building a flexible system that looks sharp and performs beautifully across platforms.",
                icon: <Palette className="w-10 h-10 text-[#0037A6]" />,
              },
              {
                step: "04",
                title: "Brand System & Delivery",
                desc: "Delivering your full brand package — logo suite, style guide, templates, and digital assets — empowering you to maintain consistency and scale confidently.",
                icon: <Layers className="w-10 h-10 text-[#0037A6]" />,
              },
            ].map((process, index) => (
              <motion.div
                key={index}
                className={`flex flex-col md:flex-row items-center gap-16 md:gap-20 ${
                  index % 2 !== 0 ? "md:flex-row-reverse" : ""
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                {/* Step Number */}
                <div className="text-[200px] md:text-[240px] font-extrabold text-[#0037A6]/10 leading-none md:w-1/3 text-center select-none">
                  {process.step}
                </div>

                {/* Step Details */}
                <div className="md:w-2/3 flex flex-col justify-center text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-5 mb-5">
                    {process.icon}
                    <h3 className="text-4xl md:text-5xl font-bold text-[#0037A6]">
                      {process.title}
                    </h3>
                  </div>
                  <p className="text-gray-700 text-xl leading-relaxed max-w-2xl mx-auto md:mx-0">
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
            Let’s Build a Brand That Stands Out
          </h2>
          <p className="text-xl md:text-2xl mb-10 text-gray-200 max-w-4xl mx-auto">
            From logos to full-scale identity systems, we help you create a
            brand that’s authentic, memorable, and future-ready.
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

export default Branding;
