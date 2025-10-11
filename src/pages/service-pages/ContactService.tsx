//

// import { motion } from "framer-motion";
// import { Mail, Phone, MapPin, Send } from "lucide-react";
// import { useState } from "react";

// const ContactService = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     alert("Message sent successfully! We'll get back to you soon.");
//     setFormData({ name: "", email: "", message: "" });
//   };

//   return (
//     <div className="bg-white text-gray-900 min-h-screen flex flex-col">
//       {/* Hero Section */}
//       <section className="relative bg-gradient-to-b from-white to-[#0037A6]/10 py-20 px-6 md:px-20 overflow-hidden">
//         <motion.div
//           className="max-w-5xl mx-auto text-center"
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//         >
//           <h1 className="text-4xl md:text-5xl font-bold mb-4">
//             Connect with Our Experts
//           </h1>
//           <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-8">
//             Have a project in mind? Let’s collaborate and turn your vision into reality.
//             Our experts are ready to discuss your goals and craft the perfect solution for you.
//           </p>
//         </motion.div>
//       </section>

//       {/* Contact Section */}
//       <section className="py-20 px-6 md:px-20 bg-white">
//         <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
//           {/* Contact Info */}
//           <motion.div
//             className="space-y-8"
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//           >
//             <h2 className="text-3xl font-semibold text-[#0037A6] mb-6">
//               Get in Touch
//             </h2>
//             <p className="text-gray-700 mb-8">
//               Reach out to our team for collaborations, inquiries, or support.
//               We’re just one message away from helping you start your next big project.
//             </p>

//             <div className="space-y-5">
//               <div className="flex items-center gap-4">
//                 <Mail className="text-[#0037A6] w-6 h-6" />
//                 <p className="text-gray-700">one10technologies.it@gmail.com</p>
//               </div>
//               <div className="flex items-center gap-4">
//                 <Phone className="text-[#0037A6] w-6 h-6" />
//                 <p className="text-gray-700">+91 63535 56477</p>
//               </div>
//               <div className="flex items-center gap-4">
//                 <MapPin className="text-[#0037A6] w-6 h-6" />
//                 <p className="text-gray-700">
//                   ONE10 Technologies Pvt. Ltd. <br /> Ahmedabad, India
//                 </p>
//               </div>
//             </div>
//           </motion.div>

//           {/* Contact Form */}
//           <motion.form
//             onSubmit={handleSubmit}
//             className="bg-[#0037A6]/5 rounded-2xl shadow-lg p-8 space-y-6"
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//           >
//             <div>
//               <label className="block text-gray-800 font-medium mb-2">
//                 Full Name
//               </label>
//               <input
//                 type="text"
//                 name="name"
//                 required
//                 value={formData.name}
//                 onChange={handleChange}
//                 placeholder="Enter your name"
//                 className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#0037A6]"
//               />
//             </div>

//             <div>
//               <label className="block text-gray-800 font-medium mb-2">
//                 Email Address
//               </label>
//               <input
//                 type="email"
//                 name="email"
//                 required
//                 value={formData.email}
//                 onChange={handleChange}
//                 placeholder="Enter your email"
//                 className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#0037A6]"
//               />
//             </div>

//             <div>
//               <label className="block text-gray-800 font-medium mb-2">
//                 Message
//               </label>
//               <textarea
//                 name="message"
//                 required
//                 value={formData.message}
//                 onChange={handleChange}
//                 placeholder="Write your message here..."
//                 rows={5}
//                 className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#0037A6]"
//               ></textarea>
//             </div>

//             <motion.button
//               type="submit"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="flex items-center justify-center gap-2 bg-[#0037A6] text-white font-semibold px-8 py-3 rounded-full hover:bg-[#0047c0] transition-colors"
//             >
//               Send Message
//               <Send className="w-5 h-5" />
//             </motion.button>
//           </motion.form>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="bg-[#0037A6] py-20 px-6 md:px-20 text-center text-white">
//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//         >
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">
//             Let’s Start Building Something Great
//           </h2>
//           <p className="text-lg mb-8 text-gray-200">
//             Whether it's a new project or ongoing support,
//             our team is here to bring your ideas to life with innovation and precision.
//           </p>
//           <a
//             href="/"
//             className="bg-white text-[#0037A6] font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors"
//           >
//             Back to Home
//           </a>
//         </motion.div>
//       </section>
//     </div>
//   );
// };

// export default ContactService;

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactService = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  // handle input change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // handle form submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    emailjs
      .send(
        "service_kj2sk5k", // ✅ your EmailJS service ID
        "template_mi14wcd", // ✅ your EmailJS template ID
        {
          from_name: formData.from_name,
          from_email: formData.from_email,
          message: formData.message,
        },
        "U7Ol1a1gXAXTxgm87" // ✅ your EmailJS public key
      )
      .then(() => {
        setSent(true);
        setLoading(false);
        setFormData({ from_name: "", from_email: "", message: "" });
      })
      .catch((err) => {
        console.error("EmailJS error:", err);
        setError(true);
        setLoading(false);
      });
  };

  return (
    <div className="bg-white text-gray-900 min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-white to-[#0037A6]/10 py-20 px-6 md:px-20 overflow-hidden">
        <motion.div
          className="max-w-5xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Connect with Our Experts
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            Have a project in mind? Let’s collaborate and turn your vision into
            reality. Our experts are ready to discuss your goals and craft the
            perfect solution for you.
          </p>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 md:px-20 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-semibold text-[#0037A6] mb-6">
              Get in Touch
            </h2>
            <p className="text-gray-700 mb-8">
              Reach out to our team for collaborations, inquiries, or support.
              We’re just one message away from helping you start your next big
              project.
            </p>

            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <Mail className="text-[#0037A6] w-6 h-6" />
                <p className="text-gray-700">one10technologies.it@gmail.com</p>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="text-[#0037A6] w-6 h-6" />
                <p className="text-gray-700">+91 63535 56477</p>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="text-[#0037A6] w-6 h-6" />
                <p className="text-gray-700">
                  ONE10 Technologies Pvt. Ltd. <br /> Ahmedabad, India
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="bg-[#0037A6]/5 rounded-2xl shadow-lg p-8 space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <label className="block text-gray-800 font-medium mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="from_name"
                required
                value={formData.from_name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#0037A6]"
              />
            </div>

            <div>
              <label className="block text-gray-800 font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="from_email"
                required
                value={formData.from_email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#0037A6]"
              />
            </div>

            <div>
              <label className="block text-gray-800 font-medium mb-2">
                Message
              </label>
              <textarea
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                rows={5}
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#0037A6]"
              ></textarea>
            </div>

            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-2 bg-[#0037A6] text-white font-semibold px-8 py-3 rounded-full hover:bg-[#0047c0] transition-colors"
            >
              {loading ? "Sending..." : "Send Message"}
              <Send className="w-5 h-5" />
            </motion.button>

            {sent && (
              <p className="text-green-600 text-center font-medium mt-2">
                ✅ Message sent successfully!
              </p>
            )}
            {error && (
              <p className="text-red-600 text-center font-medium mt-2">
                ❌ Failed to send. Please try again.
              </p>
            )}
          </motion.form>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#0037A6] py-20 px-6 md:px-20 text-center text-white">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let’s Start Building Something Great
          </h2>
          <p className="text-lg mb-8 text-gray-200">
            Whether it's a new project or ongoing support, our team is here to
            bring your ideas to life with innovation and precision.
          </p>
          <a
            href="/"
            className="bg-white text-[#0037A6] font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors"
          >
            Back to Home
          </a>
        </motion.div>
      </section>
    </div>
  );
};

export default ContactService;
