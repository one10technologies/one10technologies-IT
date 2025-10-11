// import { LazyMotion, domAnimation, m } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import { memo } from "react";

// interface Industry {
//   title: string;
//   description: string;
//   video: string;
// }

// const industries: Industry[] = [
//   {
//     title: "Insurance",
//     description:
//       "Modernize your insurance operations with automated claims, seamless policy management, and customer-centric digital platforms.",
//     video: "/insurance-vid.mp4",
//   },
//   {
//     title: "Education",
//     description:
//       "Empowering educators and learners through e-learning platforms, digital classrooms, and smart content management systems for better engagement.",
//     video: "/education-vid.mp4",
//   },
//   {
//     title: "Healthcare",
//     description:
//       "We build secure, compliant healthcare applications such as telemedicine systems, patient portals, and health record integrations.",
//     video: "/healthcare-vid.mp4",
//   },
//   {
//     title: "Automation",
//     description:
//       "Delivering intelligent automation and process control systems that streamline operations and boost productivity across industrial sectors.",
//     video: "/automation-vid.mp4",
//   },
//   {
//     title: "E-Commerce",
//     description:
//       "Creating high-performance online stores and enterprise-grade commerce platforms with secure payments and advanced order management.",
//     video: "/eccommerce-vid.mp4",
//   },
//   {
//     title: "Manufacturing",
//     description:
//       "Digitally transforming production lines with connected systems, predictive maintenance, and real-time monitoring solutions.",
//     video: "/manufactoring-vid.mp4",
//   },
//   {
//     title: "Travel & Hospitality",
//     description:
//       "Designing seamless booking, CRM, and loyalty platforms that elevate customer experiences in travel and hospitality sectors.",
//     video: "/travel&hospitality-vid.mp4",
//   },
//   {
//     title: "Logistics & Transportation",
//     description:
//       "Optimize fleet management, route planning, and shipment tracking with integrated logistics and transport management software.",
//     video: "/logistics&transportatation-vid.mp4",
//   },
//   {
//     title: "Real Estate",
//     description:
//       "Empowering real estate businesses with property listing systems, CRM tools, and immersive digital property showcases.",
//     video: "/realestate-vid.mp4",
//   },
// ];

// // 💡 Optimized Card (memoized)
// const IndustryCard = memo(({ title, description, video }: Industry) => {
//   const { ref, inView } = useInView({
//     triggerOnce: false,
//     threshold: 0.3,
//   });

//   return (
//     <m.div
//       ref={ref}
//       className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-md hover:shadow-2xl focus-within:shadow-2xl transition-all duration-500 group transform-gpu"
//       initial={{ opacity: 0, y: 40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.6 }}
//     >
//       <div className="relative h-48 sm:h-56 md:h-64 lg:h-72 overflow-hidden will-change-transform">
//         {inView ? (
//           <video
//             src={video}
//             autoPlay
//             loop
//             muted
//             playsInline
//             className="w-full h-full object-cover transition-transform duration-700 transform-gpu group-hover:scale-110"
//           />
//         ) : (
//           <div className="w-full h-full bg-gray-100 animate-pulse" />
//         )}
//         <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
//       </div>

//       <div className="p-5 sm:p-6 md:p-7">
//         <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-[#001F3F] group-hover:text-[#003366] transition-colors duration-300">
//           {title}
//         </h3>
//         <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
//           {description}
//         </p>
//       </div>
//     </m.div>
//   );
// });

// const Industries = () => {
//   return (
//     <LazyMotion features={domAnimation}>
//       <main className="min-h-screen bg-white text-black py-16 sm:py-20 px-4 sm:px-8 md:px-12 lg:px-20 mt-12">
//         {/* Header Section */}
//         <section className="text-center mb-14 sm:mb-20">
//           <m.h2
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7 }}
//             className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#001F3F] mb-4 leading-snug"
//           >
//             Industries We Empower
//           </m.h2>
//           <m.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed px-2"
//           >
//             We build future-ready digital solutions tailored to each industry’s
//             goals — combining technology, innovation, and precision to drive
//             sustainable growth.
//           </m.p>
//         </section>

//         {/* Grid */}
//         <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 max-w-7xl mx-auto">
//           {industries.map((item, i) => (
//             <IndustryCard key={i} {...item} />
//           ))}
//         </section>

//         {/* Footer CTA */}
//         <m.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.3 }}
//           className="text-center mt-20"
//         >
//           <h4 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#001F3F] mb-3">
//             Transform your industry with tailored digital innovation.
//           </h4>
//           <a
//             href="/contact"
//             className="inline-block bg-[#0037A6] text-white px-6 py-3 rounded-full text-sm sm:text-base hover:bg-[#0037A6] transition-all duration-300 shadow-lg"
//           >
//             Let’s Collaborate
//           </a>
//         </m.div>
//       </main>
//     </LazyMotion>
//   );
// };

// export default Industries;

"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { memo, useState } from "react";

interface Industry {
  title: string;
  description: string;
  video: string;
  image: string;
}

const industries: Industry[] = [
  {
    title: "Insurance",
    description:
      "Modernize your insurance operations with automated claims, seamless policy management, and customer-centric digital platforms.",
    video: "/insurance-vid.mp4",
    image: "/insurance-img.png",
  },
  {
    title: "Education",
    description:
      "Empowering educators and learners through e-learning platforms, digital classrooms, and smart content management systems for better engagement.",
    video: "/education-vid.mp4",
    image: "/education-img.png",
  },
  {
    title: "Healthcare",
    description:
      "We build secure, compliant healthcare applications such as telemedicine systems, patient portals, and health record integrations.",
    video: "/healthcare-vid.mp4",
    image: "/healthcare-img.png",
  },
  {
    title: "Automation",
    description:
      "Delivering intelligent automation and process control systems that streamline operations and boost productivity across industrial sectors.",
    video: "/automation-vid.mp4",
    image: "/automation-img.png",
  },
  {
    title: "E-Commerce",
    description:
      "Creating high-performance online stores and enterprise-grade commerce platforms with secure payments and advanced order management.",
    video: "/eccommerce-vid.mp4",
    image: "/eccommerce-img.png",
  },
  {
    title: "Manufacturing",
    description:
      "Digitally transforming production lines with connected systems, predictive maintenance, and real-time monitoring solutions.",
    video: "/manufactoring-vid.mp4",
    image: "/manufactoring-img.png",
  },
  {
    title: "Travel & Hospitality",
    description:
      "Designing seamless booking, CRM, and loyalty platforms that elevate customer experiences in travel and hospitality sectors.",
    video: "/travel&hospitality-vid.mp4",
    image: "/travel&hospitality-img.png",
  },
  {
    title: "Logistics & Transportation",
    description:
      "Optimize fleet management, route planning, and shipment tracking with integrated logistics and transport management software.",
    video: "/logistics&transportatation-vid.mp4",
    image: "/logistics&transportatation-img.png",
  },
  {
    title: "Real Estate",
    description:
      "Empowering real estate businesses with property listing systems, CRM tools, and immersive digital property showcases.",
    video: "/realestate-vid.mp4",
    image: "/realestate-img.png",
  },
];

// 💡 Industry Card with instant image + lazy video
const IndustryCard = memo(({ title, description, video, image }: Industry) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <m.div
      ref={ref}
      className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-md hover:shadow-2xl focus-within:shadow-2xl transition-all duration-500 group transform-gpu"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="relative h-48 sm:h-56 md:h-64 lg:h-72 overflow-hidden will-change-transform">
        {/* Always show image first */}
        <img
          src={image}
          alt={title}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            videoLoaded ? "opacity-0" : "opacity-100"
          }`}
        />

        {/* Lazy-load video only when visible */}
        {inView && (
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            preload="none"
            className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 transform-gpu group-hover:scale-110 ${
              videoLoaded ? "opacity-100" : "opacity-0"
            }`}
            onLoadedData={() => setVideoLoaded(true)}
            onError={() => setVideoLoaded(false)}
          />
        )}

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
      </div>

      <div className="p-5 sm:p-6 md:p-7">
        <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-[#001F3F] group-hover:text-[#003366] transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
          {description}
        </p>
      </div>
    </m.div>
  );
});

const Industries = () => {
  return (
    <LazyMotion features={domAnimation}>
      <main className="min-h-screen bg-white text-black py-16 sm:py-20 px-4 sm:px-8 md:px-12 lg:px-20 mt-12">
        {/* Header Section */}
        <section className="text-center mb-14 sm:mb-20">
          <m.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#001F3F] mb-4 leading-snug"
          >
            Industries We Empower
          </m.h2>
          <m.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed px-2"
          >
            We build future-ready digital solutions tailored to each industry’s
            goals — combining technology, innovation, and precision to drive
            sustainable growth.
          </m.p>
        </section>

        {/* Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 max-w-7xl mx-auto">
          {industries.map((item, i) => (
            <IndustryCard key={i} {...item} />
          ))}
        </section>

        {/* Footer CTA */}
        <m.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-20"
        >
          <h4 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#001F3F] mb-3">
            Transform your industry with tailored digital innovation.
          </h4>
          <a
            href="/contact"
            className="inline-block bg-[#0037A6] text-white px-6 py-3 rounded-full text-sm sm:text-base hover:bg-[#002b80] transition-all duration-300 shadow-lg"
          >
            Let’s Collaborate
          </a>
        </m.div>
      </main>
    </LazyMotion>
  );
};

export default Industries;
