import { motion } from "framer-motion";
import { Globe, Code2, ShoppingCart, Palette, Server } from "lucide-react";

const WebDevService = () => {
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
            Web Development Services
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We build scalable, high-performance websites and digital experiences
            that help your business grow and connect with your audience
            effortlessly.
          </p>
        </motion.div>
      </section>

      {/* Section: What We Offer */}
      <section className="py-20 px-6 md:px-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-semibold text-center text-gray-900 mb-12"
          >
            Our Web Solutions
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: (
                  <Globe className="w-10 h-10" style={{ color: "#0037A6" }} />
                ),
                title: "Custom Websites",
                desc: "Tailored websites built to reflect your brand identity, offering responsive, modern, and SEO-optimized designs.",
              },
              {
                icon: (
                  <ShoppingCart
                    className="w-10 h-10"
                    style={{ color: "#0037A6" }}
                  />
                ),
                title: "eCommerce Platforms",
                desc: "Robust and secure online stores with easy inventory management, payment integration, and user-friendly checkout.",
              },
              {
                icon: (
                  <Palette className="w-10 h-10" style={{ color: "#0037A6" }} />
                ),
                title: "Portfolios & Showcases",
                desc: "Stunning and professional portfolio sites to highlight your work, creativity, and accomplishments beautifully.",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.7 }}
                className="bg-white border border-gray-100 shadow-md rounded-2xl p-8 hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className="flex justify-center mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section: Why Choose Us */}
      <section className="bg-blue-50 py-20 px-6 md:px-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2
              className="text-3xl font-bold mb-6"
              style={{ color: "#0037A6" }}
            >
              Why Choose ONE10 Technologies IT?
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Our team crafts visually stunning, functional, and high-performing
              web applications. We prioritize security, performance, and
              scalability to ensure your digital presence stands out. Whether
              you're launching a startup or scaling your enterprise, we deliver
              reliable solutions that drive real results.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center">
                <Code2 className="w-5 h-5 mr-2" style={{ color: "#0037A6" }} />
                Clean, maintainable code architecture
              </li>
              <li className="flex items-center">
                <Server className="w-5 h-5 mr-2" style={{ color: "#0037A6" }} />
                Scalable cloud-ready backend solutions
              </li>
              <li className="flex items-center">
                <Palette
                  className="w-5 h-5 mr-2"
                  style={{ color: "#0037A6" }}
                />
                Modern, user-focused UI/UX design
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="rounded-2xl overflow-hidden shadow-xl"
          >
            <img
              src="/webdev.jpg"
              alt="Web Development"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Section: Call to Action */}
      <section className="py-20 px-6 md:px-20 text-center bg-white">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Build Your Next Digital Experience?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Let’s collaborate to bring your ideas to life with cutting-edge web
            technology and design excellence. Our experts are here to help your
            business succeed online.
          </p>
          <a
            href="/contact"
            className="inline-block text-white px-8 py-3 rounded-full font-medium transition-all duration-300 shadow-md"
            style={{ backgroundColor: "#0037A6" }}
          >
            Get in Touch
          </a>
        </motion.div>
      </section>
    </div>
  );
};

export default WebDevService;
