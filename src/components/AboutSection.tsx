import { motion } from "framer-motion";
import aboutImg from "/about-one10.jpg"; // Replace with your actual image path

const AboutSection = () => {
  return (
    <section className="bg-black text-white py-20 px-6 sm:px-10 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
        
        {/* Text Content */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-4xl font-bold mb-6 text-theme">
            About ONE10 Technologies IT
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            At <span className="text-white font-semibold">ONE10 Technologies IT</span>, 
            we’re more than a technology provider — we’re your innovation partner. 
            Our mission is to empower businesses through cutting-edge digital 
            transformation, delivering scalable solutions that drive performance, 
            efficiency, and long-term growth.
          </p>
          <p className="text-gray-400 leading-relaxed mb-6">
            From web and mobile app development to AI, cloud integration, and IT consulting, 
            we combine technical excellence with creative strategy. With a passion for 
            innovation and precision, we help our clients stay ahead in a rapidly evolving 
            digital world.
          </p>
          <p className="text-gray-400 leading-relaxed">
            Our team of experts ensures every project is crafted with quality, 
            integrity, and a deep understanding of your business goals — making 
            technology work seamlessly for you.
          </p>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="flex-1 relative"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="rounded-0xl overflow-hidden shadow-lg shadow-theme/20">
            <img
              src={aboutImg}
              alt="About ONE10 Technologies IT"
              className="w-full h-auto object-cover scale-100 hover:scale-105 transition-transform duration-700 ease-out"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
