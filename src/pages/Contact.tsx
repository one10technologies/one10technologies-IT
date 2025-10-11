import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import contactImg from "/contact.jpg"; // make sure this is in /public

const Contact = () => {
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
    setSent(false);

    emailjs
      .send(
        "service_kj2sk5k", // ✅ Your service ID
        "template_mi14wcd", // ✅ Your template ID
        {
          name: formData.from_name, // match EmailJS variables
          email: formData.from_email,
          message: formData.message,
        },
        "U7Ol1a1gXAXTxgm87" // ✅ Your public key
      )
      .then(() => {
        setSent(true);
        setLoading(false);
        setFormData({ from_name: "", from_email: "", message: "" });
      })
      .catch((err) => {
        console.error("EmailJS Error:", err);
        setError(true);
        setLoading(false);
      });
  };

  return (
    <section className="w-full min-h-screen bg-white flex flex-col md:flex-row overflow-hidden mt-5">
      {/* LEFT IMAGE SECTION */}
      <motion.div
        initial={{ x: -80, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-full md:w-1/2 h-[40vh] md:h-screen"
      >
        <img
          src={contactImg}
          alt="Contact Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-800/40"></div>
        <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-8 text-center">
          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight drop-shadow-lg">
            {/* Let’s Connect & Innovate */}
          </h2>
        </div>
      </motion.div>

      {/* RIGHT CONTACT FORM SECTION */}
      <motion.div
        initial={{ x: 80, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full md:w-1/2 flex flex-col justify-center px-6 sm:px-10 md:px-16 lg:px-24 py-10 md:py-0"
      >
        {/* Header */}
        <div className="mb-6 md:mb-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0037A6] mb-4">
            Get in Touch
          </h1>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-lg">
            Have an idea or a challenge in mind? Reach out to our experts — we’d
            love to collaborate and build something transformative for your
            business.
          </p>
        </div>

        {/* Contact Info */}
        <div className="space-y-5 mb-8 sm:mb-10">
          <div className="flex items-center gap-4">
            <Mail className="text-blue-800 w-5 h-5 sm:w-6 sm:h-6" />
            <a
              href="mailto:one10technologies.it@gmail.com"
              className="text-gray-800 text-sm sm:text-base hover:text-blue-600 transition-colors"
            >
              one10technologies.it@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-4">
            <Phone className="text-blue-800 w-5 h-5 sm:w-6 sm:h-6" />
            <a
              href="tel:+916353556477"
              className="text-gray-800 text-sm sm:text-base hover:text-blue-600 transition-colors"
            >
              +91 63535 56477
            </a>
          </div>
          <div className="flex items-center gap-4">
            <MapPin className="text-blue-800 w-5 h-5 sm:w-6 sm:h-6" />
            <p className="text-gray-800 text-sm sm:text-base">
              Ahmedabad, Gujarat, India
            </p>
          </div>
        </div>

        {/* EmailJS Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="w-full max-w-xl"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="from_name"
                required
                onChange={handleChange}
                value={formData.from_name}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="from_email"
                required
                onChange={handleChange}
                value={formData.from_email}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div className="mt-6">
            <label className="block text-sm font-semibold mb-2">Message</label>
            <textarea
              name="message"
              required
              onChange={handleChange}
              value={formData.message}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 h-32 sm:h-36 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              placeholder="Tell us about your project..."
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={loading}
            className="mt-8 bg-[#0037A6] text-white font-semibold text-sm sm:text-base px-8 py-3 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition"
          >
            <Send className="w-5 h-5" />
            {loading ? "Sending..." : "Send Message"}
          </motion.button>

          {sent && (
            <p className="text-green-600 text-center font-medium mt-3">
              ✅ Message sent successfully!
            </p>
          )}
          {error && (
            <p className="text-red-600 text-center font-medium mt-3">
              ❌ Failed to send. Please try again.
            </p>
          )}
        </motion.form>
      </motion.div>
    </section>
  );
};

export default Contact;
