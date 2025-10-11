import { motion } from "framer-motion";
import { ShieldCheck, Lightbulb, Users, Rocket } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: <Lightbulb className="w-8 h-8 text-[#0037A6]" />,
      title: "Innovation",
      desc: "We thrive on creativity and innovation, constantly pushing boundaries to craft next-gen digital products.",
    },
    {
      icon: <Users className="w-8 h-8 text-[#0037A6]" />,
      title: "Collaboration",
      desc: "We believe success is built on strong relationships — within our teams and with our clients.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-[#0037A6]" />,
      title: "Integrity",
      desc: "We maintain transparency and trust in every partnership, ensuring consistent excellence.",
    },
    {
      icon: <Rocket className="w-8 h-8 text-[#0037A6]" />,
      title: "Excellence",
      desc: "We are committed to delivering outstanding quality, performance, and reliability in everything we do.",
    },
  ];

  return (
    <main className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center py-24 px-6 md:px-16 lg:px-28">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
        >
          About <span className="text-[#0037A6]">ONE10 Technologies IT</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="max-w-3xl text-lg text-gray-600 leading-relaxed"
        >
          ONE10 Technologies IT is a next-generation software and IT solutions
          company helping businesses scale through smart innovation. Our mission
          is to empower organizations with transformative technology — blending
          creativity, precision, and strategic thinking to build impactful
          digital experiences.
        </motion.p>
      </section>

      {/* Mission Section */}
      <section className="grid md:grid-cols-2 items-center gap-12 py-24 px-6 md:px-16 lg:px-28 bg-gray-50">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">
            Our Mission
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            We aim to simplify complex business challenges through intelligent
            technology. By merging innovation, user-centric design, and
            engineering excellence, we create products that not only perform but
            inspire.
          </p>
          <p className="text-gray-600 leading-relaxed">
            From startups to enterprises, we partner closely to deliver custom
            solutions that drive measurable growth and lasting digital impact.
          </p>
        </motion.div>

        <motion.img
          src="/mission.png"
          alt="Our Mission"
          className="w-full h-auto rounded-1xl shadow-md object-cover"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        />
      </section>

      {/* Values Section */}
      <section className="py-24 px-6 md:px-16 lg:px-28">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-semibold text-gray-900 text-center mb-12"
        >
          Our Core Values
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-center mb-4">{value.icon}</div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900">
                {value.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {value.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Vision / CTA Section */}
      <section className="py-24 px-6 md:px-16 lg:px-28 bg-gray-50 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-semibold text-gray-900 mb-6"
        >
          Our Vision
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed mb-10"
        >
          To be a global technology partner known for excellence, innovation,
          and integrity — helping businesses navigate the digital era with
          confidence, speed, and intelligence.
        </motion.p>

        <motion.a
          href="/contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block bg-[#0037A6] text-white px-8 py-3 rounded-full font-medium shadow-md hover:bg-blue-700 transition-all duration-300"
        >
          Let’s Collaborate
        </motion.a>
      </section>
    </main>
  );
}
