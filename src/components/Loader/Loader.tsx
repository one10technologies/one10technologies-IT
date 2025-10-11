import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import logo from "/one10logowhite.png"; // adjust path if needed

const Loader: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black"
        >
          {/* Logo */}
          <motion.img
            src={logo}
            alt="ONE10 Technologies IT"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-40 md:w-52 mb-10"
          />

          {/* Loader Line */}
          <div className="relative w-72 md:w-[400px] h-[5px] bg-[#0A1E29] overflow-hidden rounded-full shadow-[0_0_10px_#00ADB5]">
            <motion.div
              initial={{ x: "-150%" }}
              animate={{ x: ["-150%", "250%"] }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-0 left-0 w-[60%] h-full bg-[#00ADB5] rounded-full"
            />
            <motion.div
              initial={{ x: "-150%" }}
              animate={{ x: ["-150%", "250%"] }}
              transition={{
                duration: 2.8,
                delay: 0.4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-0 left-0 w-[60%] h-full bg-[#00E6F6] rounded-full opacity-70"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
