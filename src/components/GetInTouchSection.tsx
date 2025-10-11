// import { motion } from "framer-motion";
// import { Send } from "lucide-react";

// const GetInTouchSection = () => {
//   return (
//     <section
//       id="get-in-touch"
//       className="relative bg-white py-28 px-6 md:px-20 overflow-hidden"
//     >
//       {/* Blue Accent Background Blur */}
//       <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-100/40 via-white to-blue-50/10"></div>

//       <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
//         {/* ============ LEFT CONTENT ============ */}
//         <motion.div
//           initial={{ opacity: 0, x: -50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           viewport={{ once: true }}
//         >
//           <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
//             Get In Touch <span className="inline-block">👋</span>
//           </h2>

//           <p className="text-xl text-gray-700 mb-4 font-semibold">
//             Discuss your software vision with industry experts.
//           </p>

//           <p className="text-lg text-gray-600 mb-6 leading-relaxed max-w-md">
//             Transform your ideas into powerful digital experiences.
//             Our specialists help you plan, design, and build innovative solutions that move your business forward.
//           </p>

//           <p className="text-lg text-gray-600 mb-10">
//             Let’s start a meaningful conversation about your goals, timeline, and possibilities — and make it happen together.
//           </p>

//           <motion.a
//             href="#contact-form"
//             className="inline-flex items-center gap-3 bg-[#0037A6] text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl hover:bg-[#0037A6] transition-all"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.97 }}
//           >
//             Let’s Talk
//             <Send className="w-5 h-5" />
//           </motion.a>
//         </motion.div>

//         {/* ============ RIGHT FORM ============ */}
//         <motion.form
//           id="contact-form"
//           className="bg-white rounded-2xl shadow-xl border border-gray-200 p-10 space-y-6 relative z-10"
//           initial={{ opacity: 0, x: 50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
//           viewport={{ once: true }}
//           onSubmit={(e) => e.preventDefault()}
//         >
//           <h3 className="text-2xl font-bold text-gray-900 mb-6">
//             Let’s Start a Conversation
//           </h3>

//           <div className="grid md:grid-cols-2 gap-6">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Full Name
//               </label>
//               <input
//                 type="text"
//                 placeholder="John Doe"
//                 className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
//                 required
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Email Address
//               </label>
//               <input
//                 type="email"
//                 placeholder="you@example.com"
//                 className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
//                 required
//               />
//             </div>
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Project Type
//             </label>
//             <select
//               className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
//               required
//             >
//               <option value="">Select an option</option>
//               <option>Web Application</option>
//               <option>Mobile App</option>
//               <option>UI/UX Design</option>
//               <option>Consultation</option>
//               <option>Other</option>
//             </select>
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Message
//             </label>
//             <textarea
//               rows={4}
//               placeholder="Tell us a bit about your project goals..."
//               className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-none transition"
//               required
//             ></textarea>
//           </div>

//           <motion.button
//             type="submit"
//             className="w-full flex justify-center items-center gap-2 bg-[#0037A6] text-white font-semibold py-3 rounded-full hover:bg-[#0037A6] hover:shadow-lg transition-all"
//             whileHover={{ scale: 1.02 }}
//             whileTap={{ scale: 0.96 }}
//           >
//             Send Message
//             <Send className="w-5 h-5" />
//           </motion.button>
//         </motion.form>
//       </div>
//     </section>
//   );
// };

// export default GetInTouchSection;

import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import emailjs from "@emailjs/browser";

const GetInTouchSection = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    projectType: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("idle");

    emailjs
      .send(
        "service_kj2sk5k", // ✅ your service ID
        "template_mi14wcd", // ✅ your template ID
        {
          from_name: formData.fullName,
          from_email: formData.email,
          project_type: formData.projectType,
          message: formData.message,
        },
        "U7Ol1a1gXAXTxgm87" // ✅ your public key
      )
      .then(() => {
        setStatus("success");
        setFormData({ fullName: "", email: "", projectType: "", message: "" });
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        setStatus("error");
      });
  };

  return (
    <section
      id="get-in-touch"
      className="relative bg-white py-28 px-6 md:px-20 overflow-hidden"
    >
      {/* Background Accent */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-100/40 via-white to-blue-50/10"></div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
            Get In Touch <span className="inline-block">👋</span>
          </h2>

          <p className="text-xl text-gray-700 mb-4 font-semibold">
            Discuss your software vision with industry experts.
          </p>

          <p className="text-lg text-gray-600 mb-6 leading-relaxed max-w-md">
            Transform your ideas into powerful digital experiences. Our
            specialists help you plan, design, and build innovative solutions
            that move your business forward.
          </p>

          <p className="text-lg text-gray-600 mb-10">
            Let’s start a meaningful conversation about your goals, timeline,
            and possibilities — and make it happen together.
          </p>

          <motion.a
            href="/contact"
            className="inline-flex items-center gap-3 bg-[#0037A6] text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl hover:bg-[#002b7a] transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            Let’s Talk
            <Send className="w-5 h-5" />
          </motion.a>
        </motion.div>

        {/* RIGHT FORM */}
        <motion.form
          id="contact-form"
          onSubmit={sendEmail}
          className="bg-white rounded-2xl shadow-xl border border-gray-200 p-10 space-y-6 relative z-10"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Let’s Start a Conversation
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Project Type
            </label>
            <select
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
              required
            >
              <option value="">Select an option</option>
              <option>Web Application</option>
              <option>Mobile App</option>
              <option>UI/UX Design</option>
              <option>Consultation</option>
              <option>Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Message
            </label>
            <textarea
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us a bit about your project goals..."
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-none transition"
              required
            ></textarea>
          </div>

          <motion.button
            type="submit"
            className="w-full flex justify-center items-center gap-2 bg-[#0037A6] text-white font-semibold py-3 rounded-full hover:bg-[#002b7a] hover:shadow-lg transition-all"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.96 }}
          >
            Send Message
            <Send className="w-5 h-5" />
          </motion.button>

          {status === "success" && (
            <p className="text-green-600 text-center mt-3 font-semibold">
              ✅ Message sent successfully!
            </p>
          )}
          {status === "error" && (
            <p className="text-red-600 text-center mt-3 font-semibold">
              ❌ Failed to send. Please try again.
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
};

export default GetInTouchSection;
