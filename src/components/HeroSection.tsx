// import React from "react";
// import { motion } from "framer-motion";

// const HeroSection = () => {
//   return (
//     <section className="relative h-screen w-full overflow-hidden flex items-center justify-center text-white">
//       {/* Background Video (fades and zooms in after black screen) */}
//       <motion.video
//         className="absolute top-0 left-0 w-full h-full object-cover"
//         src="./herovideo1.mp4"
//         autoPlay
//         loop
//         muted
//         playsInline
//         initial={{ opacity: 0, scale: 1.2 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ delay: 1, duration: 2, ease: [0.25, 0.1, 0.25, 1] }}
//       />

//       {/* Soft Gradient Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>

//       {/* Black Intro Overlay (fades out to reveal everything) */}
//       <motion.div
//         className="absolute inset-0 bg-black z-30"
//         initial={{ opacity: 1 }}
//         animate={{ opacity: 0 }}
//         transition={{ duration: 1.5, ease: "easeInOut" }}
//       />

//       {/* Hero Content */}
//       <motion.div
//         className="relative z-20 text-center px-6 max-w-4xl"
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{
//           delay: 1.2,
//           duration: 1.4,
//           ease: [0.25, 0.1, 0.25, 1],
//         }}
//       >
//         <motion.h1
//           className="text-4xl md:text-6xl font-bold mb-6 leading-tight tracking-tight"
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 1.5, duration: 1.2 }}
//         >
//           Empowering Digital Transformation <br />
//           with{" "}
//           <motion.span
//             className="text-[#0037A6] inline-block"
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ delay: 1.8, duration: 0.8, type: "spring" }}
//           >
//             One10 Technologies
//           </motion.span>
//         </motion.h1>

//         <motion.p
//           className="text-lg md:text-xl text-gray-200 mb-8"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 2, duration: 1 }}
//         >
//           We build world-class web, mobile, and software solutions that drive
//           growth and innovation.
//         </motion.p>

//         <motion.button
//           className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg transition"
//           initial={{ opacity: 0, y: 20, scale: 0.9 }}
//           animate={{ opacity: 1, y: 0, scale: 1 }}
//           transition={{
//             delay: 2.3,
//             duration: 0.8,
//             type: "spring",
//             stiffness: 120,
//           }}
//         >
//           Get Started
//         </motion.button>
//       </motion.div>

//       {/* Scroll Indicator */}
//       <motion.div
//         className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-300 text-sm tracking-widest"
//         initial={{ opacity: 0, y: 10 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 3, duration: 1.2 }}
//       >
//         <div className="animate-bounce">↓ SCROLL</div>
//       </motion.div>
//     </section>
//   );
// };

// export default HeroSection;

import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <motion.section
      className="relative h-screen w-full overflow-hidden flex items-center justify-center text-white"
      initial={{ opacity: 0, scale: 1.05 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {/* Background Video */}
      <motion.video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="./herovideo1.mp4" // make sure this path is correct or import it
        autoPlay
        loop
        muted
        playsInline
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      />

      {/* Overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/80"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      ></motion.div>

      {/* Hero Content with Animation */}
      <motion.div
        className="relative z-10 text-center px-6 max-w-4xl"
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Empowering Digital Transformation <br /> with{" "}
          <span className="text-[#0037A6]">One10 Technologies</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-200 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          We build world-class web, mobile, and software solutions that drive growth and innovation.
        </motion.p>

        <motion.button
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg transition"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          Get Started
        </motion.button>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-300 text-sm tracking-widest"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <div className="animate-bounce">↓ SCROLL</div>
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;