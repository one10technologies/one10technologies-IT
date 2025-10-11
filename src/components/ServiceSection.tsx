import { motion } from "framer-motion";
import {
  Code,
  Smartphone,
  Server,
  BarChart3,
  Palette,
  PenTool,
  Globe,
  Wrench,
  Headphones,
} from "lucide-react";

const categories = [
  {
    id: 1,
    title: "WEB SOLUTIONS",
    description:
      "Robust digital solutions engineered to power your business and streamline operations.",
    services: [
      {
        icon: <Code className="w-10 h-10 text-theme" />,
        title: "Web Development",
        desc: "Custom websites, eCommerce platforms, and portfolio sites built with precision and scalability.",
        image: "/webdev-vector.jpg",
      },
      {
        icon: <Smartphone className="w-10 h-10 text-theme" />,
        title: "App Development",
        desc: "End-to-end Android & iOS app creation for businesses and startups.",
        image: "/appdev-vector.jpg",
      },
      {
        icon: <Server className="w-10 h-10 text-theme" />,
        title: "Software Solutions",
        desc: "Custom ERP, dashboards, and business automation systems built to optimize performance.",
        image: "softsol-vector.jpg",
      },
    ],
  },
  {
    id: 2,
    title: "DIGITAL GROWTH",
    description:
      "Creative strategies and design experiences that fuel visibility, engagement, and brand identity.",
    services: [
      {
        icon: <BarChart3 className="w-10 h-10 text-theme" />,
        title: "SEO & Marketing",
        desc: "Boost visibility, reach your audience, and increase performance with data-driven strategies.",
        image: "/seo-vector.jpg",
      },
      {
        icon: <Palette className="w-10 h-10 text-theme" />,
        title: "UI/UX Design",
        desc: "Modern, intuitive, and user-centric designs that elevate digital experiences.",
        image: "/uiux-vector.jpg",
      },
      {
        icon: <PenTool className="w-10 h-10 text-theme" />,
        title: "Branding",
        desc: "Create impactful identities — logos, visual systems, and brand guidelines that resonate.",
        image: "/branding-vector.jpg",
      },
    ],
  },
  {
    id: 3,
    title: "PORTALS & SUPPORT",
    description:
      "Reliable platforms and continuous support to keep your digital ecosystem running smoothly.",
    services: [
      {
        icon: <Globe className="w-10 h-10 text-theme" />,
        title: "Web Portals",
        desc: "Secure, scalable online platforms that simplify access and empower collaboration.",
        image: "/webportal-vector.jpg",
      },
      {
        icon: <Wrench className="w-10 h-10 text-theme" />,
        title: "Maintenance",
        desc: "Ongoing updates, optimization, and proactive support for flawless performance.",
        image: "/maintenance-vector.jpg",
      },
      {
        icon: <Headphones className="w-10 h-10 text-theme" />,
        title: "Contact",
        desc: "Connect with our expert team for tailored tech solutions and dedicated support.",
        image: "/contact-vector.jpg",
      },
    ],
  },
];

const ServiceSection = () => {
  return (
    <section className="bg-white py-20" id="services">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-black mb-4">
            Our <span className="text-theme">Services</span>
          </h2>
          <div className="w-24 h-1 bg-theme mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We deliver innovative digital solutions that transform ideas into
            impactful results — from development to design and ongoing support.
          </p>
        </motion.div>

        {/* Service Categories */}
        {categories.map((cat, i) => (
          <motion.div
            key={cat.id}
            className="mb-20"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-10">
              <h3 className="text-2xl font-semibold text-black uppercase tracking-wide">
                {cat.title}
              </h3>
              <div className="w-16 h-1 bg-theme mx-auto mt-3 rounded-full"></div>
              <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
                {cat.description}
              </p>
            </div>

            {/* Cards Grid */}
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {cat.services.map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-1xl overflow-hidden shadow-md border border-gray-200 hover:border-theme hover:shadow-2xl transition-all duration-300"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="h-48 w-full overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      {service.icon}
                      <h4 className="text-xl font-semibold text-black">
                        {service.title}
                      </h4>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServiceSection;
