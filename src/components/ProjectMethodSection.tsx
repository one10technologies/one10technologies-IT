import { motion, useInView } from "framer-motion";
import {
  Lightbulb,
  ClipboardList,
  Code2,
  BarChart3,
  Rocket,
} from "lucide-react";
import { useRef } from "react";

const steps = [
  {
    id: 1,
    title: "Initiation",
    description:
      "Understanding your vision, defining project objectives, and assessing feasibility to ensure clarity from day one.",
    icon: <Lightbulb className="w-10 h-10 text-[#007BFF]" />,
    color: "#007BFF",
  },
  {
    id: 2,
    title: "Planning",
    description:
      "Strategic roadmap creation, timeline setup, and task breakdown to streamline execution with precision.",
    icon: <ClipboardList className="w-10 h-10 text-[#00B7A8]" />,
    color: "#00B7A8",
  },
  {
    id: 3,
    title: "Execution",
    description:
      "Our team transforms plans into robust digital solutions using cutting-edge technologies and agile development.",
    icon: <Code2 className="w-10 h-10 text-[#FF9F00]" />,
    color: "#FF9F00",
  },
  {
    id: 4,
    title: "Controlling",
    description:
      "Continuous monitoring and optimization to ensure quality, performance, and alignment with business goals.",
    icon: <BarChart3 className="w-10 h-10 text-[#E6399B]" />,
    color: "#E6399B",
  },
  {
    id: 5,
    title: "Closing",
    description:
      "Project delivery, deployment, and ongoing support — ensuring long-term success and client satisfaction.",
    icon: <Rocket className="w-10 h-10 text-[#7E57C2]" />,
    color: "#7E57C2",
  },
];

const ProjectMethodSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-24 bg-[#E8F3FF] text-[#0A1E3F] flex flex-col items-center overflow-hidden"
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-extrabold mb-4 text-center"
      >
        Project Development Cycle
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-gray-600 max-w-2xl text-center mb-20 px-4"
      >
        A structured approach to ensure every project phase runs seamlessly —
        from ideation to execution and beyond.
      </motion.p>

      {/* Steps */}
      <div className="relative flex flex-col md:flex-row justify-center items-start md:items-stretch gap-12 w-full max-w-7xl px-6">
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            animate={
              isInView
                ? {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }
                : {}
            }
            transition={{
              duration: 0.6,
              delay: index * 0.3,
              ease: "easeOut",
            }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="relative flex flex-col items-center text-center w-full md:w-[15rem] z-10"
          >
            {/* Card */}
            <div
              className="bg-white rounded-2xl shadow-lg border-t-4 p-8 flex flex-col items-center justify-between h-full"
              style={{
                borderColor: step.color,
                boxShadow: `0 8px 18px ${step.color}25`,
              }}
            >
              <div
                className="flex items-center justify-center w-16 h-16 rounded-full mb-4"
                style={{
                  backgroundColor: `${step.color}10`,
                  border: `2px solid ${step.color}`,
                }}
              >
                {step.icon}
              </div>

              <h3
                className="text-xl font-semibold mb-3"
                style={{ color: step.color }}
              >
                {step.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {step.description}
              </p>
            </div>

            {/* Step Number */}
            <div className="flex flex-col items-center mt-4">
              <span
                className="text-lg font-bold"
                style={{ color: step.color }}
              >
                {step.id < 10 ? `0${step.id}` : step.id}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectMethodSection;
