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

// import { motion } from "framer-motion";
// import { useState, useEffect } from "react";
// import { useInView } from "react-intersection-observer";

// const HeroSection = () => {
//   const [videoLoaded, setVideoLoaded] = useState(false);
//   const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

//   // Preload video once hero section is in view
//   useEffect(() => {
//     if (inView) {
//       const video = document.createElement("video");
//       video.src = "/herovideo.webm";
//       video.oncanplaythrough = () => setVideoLoaded(true);
//     }
//   }, [inView]);

//   return (
//     <motion.section
//       ref={ref}
//       className="relative h-screen w-full overflow-hidden flex items-center justify-center text-white"
//       initial={{ opacity: 0, scale: 1.05 }}
//       animate={{ opacity: 1, scale: 1 }}
//       transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
//     >
//       {/* ✅ Lazy Background Video with Placeholder */}
//       <div className="absolute inset-0">
//         {!videoLoaded ? (
//           <motion.img
//             src="/hero-placeholder.png" // <--- add a small placeholder image in /public
//             alt="Hero Background"
//             className="w-full h-full object-cover"
//             initial={{ scale: 1.1, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             transition={{ duration: 1.2, ease: "easeOut" }}
//           />
//         ) : (
//           <motion.video
//             className="w-full h-full object-cover"
//             src="/herovideo.webm"
//             autoPlay
//             loop
//             muted
//             playsInline
//             preload="auto"
//             initial={{ scale: 1.1, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             transition={{ duration: 1.2, ease: "easeOut" }}
//           />
//         )}
//       </div>

//       {/* Overlay */}
//       <motion.div
//         className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/80"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1.5 }}
//       ></motion.div>

//       {/* Hero Content */}
//       <motion.div
//         className="relative z-10 text-center px-6 max-w-4xl"
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
//       >
//         <motion.h1
//           className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.4, duration: 0.8 }}
//         >
//           Empowering Digital Transformation <br /> with{" "}
//           <span className="text-[#0037A6]">One10 Technologies</span>
//         </motion.h1>

//         <motion.p
//           className="text-lg md:text-xl text-gray-200 mb-8"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.8, duration: 0.8 }}
//         >
//           We build world-class web, mobile, and software solutions that drive
//           growth and innovation.
//         </motion.p>

//         <motion.button
//           className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg transition"
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 1.2, duration: 0.6 }}
//         >
//           Get Started
//         </motion.button>
//       </motion.div>

//       {/* Scroll Down Indicator */}
//       <motion.div
//         className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-300 text-sm tracking-widest"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 2, duration: 1 }}
//       >
//         <div className="animate-bounce">↓ SCROLL</div>
//       </motion.div>
//     </motion.section>
//   );
// };

// export default HeroSection;
