"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Settings,
  BarChart3,
  Server,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import emailjs from "@emailjs/browser";

const heroImg = "/software-hero.png";
const case2 = "/ERP-business.jpg";

const features = [
  {
    title: "Business Automation",
    desc: "Automate repetitive tasks, streamline approvals and integrate workflows across teams to reduce manual effort and human error.",
    icon: <Settings className="w-6 h-6" />,
  },
  {
    title: "Interactive Dashboards",
    desc: "Real-time KPIs and drillable analytics so stakeholders can make faster, data-driven decisions with confidence.",
    icon: <BarChart3 className="w-6 h-6" />,
  },
  {
    title: "Modern ERP",
    desc: "Modular ERP modules that cover finance, inventory, HR and procurement — flexible, secure and cloud-ready.",
    icon: <Server className="w-6 h-6" />,
  },
];

export default function SoftSolService() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);
    setStatus("");

    emailjs
      .send(
        "service_kj2sk5k", // ✅ your service ID
        "template_mi14wcd", // ✅ your template ID
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          reply_to: formData.email,
        },
        "U7Ol1a1gXAXTxgm87" // ✅ your public key
      )
      .then(() => {
        setStatus("✅ Message sent successfully!");
        setIsSending(false);
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((err) => {
        console.error("EmailJS Error:", err);
        setStatus("❌ Failed to send. Please try again.");
        setIsSending(false);
      });
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* HERO */}
      <header className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="inline-flex items-center rounded-full bg-blue-50 text-[#0037A6] px-3 py-1 text-sm font-semibold">
              Software Solutions
            </p>
            <h1 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
              Business automation, dashboards & modern ERP —{" "}
              <span className="text-[#0037A6]">built to scale</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-gray-600">
              We design, build and operate software solutions that automate core
              business processes, surface insights with beautiful dashboards,
              and replace brittle legacy systems with modular ERP.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0037A6] text-white px-6 py-3 text-sm font-medium shadow-md hover:shadow-lg transition"
              >
                Get a free consultation
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="/services/softwaresolutions"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-200 px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 transition"
              >
                See case studies
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="order-first lg:order-last"
          >
            <div className="w-full rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5">
              <img
                src={heroImg}
                alt="Software solutions hero"
                className="w-full h-64 object-cover sm:h-80 lg:h-96"
              />
            </div>
          </motion.div>
        </div>
      </header>

      {/* FEATURES */}
      <section className="py-16 border-t">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold">What we build</h2>
            <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
              Tailored modules and end-to-end delivery — from process discovery
              to production monitoring and continuous improvement.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((f) => (
              <motion.article
                key={f.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
                className="border rounded-lg p-6 bg-white shadow-sm"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-md bg-blue-50 text-[#0037A6]">
                  {f.icon}
                </div>
                <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-gray-600 text-sm">{f.desc}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT / CTA */}
      <section id="contact" className="py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-gradient-to-r from-white to-blue-50 rounded-2xl p-8 shadow-lg border">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div>
                <h3 className="text-lg font-semibold">
                  Start your transformation
                </h3>
                <p className="mt-2 text-gray-600">
                  Tell us about your biggest pain point and we’ll propose a
                  pragmatic plan.
                </p>
                <ul className="mt-4 text-sm text-gray-700 space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Discovery workshop
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Architecture & roadmap
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Proof of value
                  </li>
                </ul>
              </div>

              {/* EmailJS Contact Form */}
              <form
                onSubmit={handleSubmit}
                className="space-y-4 bg-white p-4 rounded-xl border"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0037A6]"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0037A6]"
                  />
                </div>
                <textarea
                  name="message"
                  placeholder="Tell us about your project"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full rounded-md border px-3 py-2 h-28 focus:outline-none focus:ring-2 focus:ring-[#0037A6]"
                />
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.96 }}
                  disabled={isSending}
                  className="w-full flex justify-center items-center gap-2 bg-[#0037A6] text-white font-medium py-3 rounded-full hover:shadow-lg transition-all"
                >
                  {isSending ? "Sending..." : "Request consult"}
                </motion.button>

                {status && (
                  <p
                    className={`text-sm ${
                      status.startsWith("✅")
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {status}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t py-8">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-gray-600">
            © {new Date().getFullYear()} ONE10 Technologies — Software Solutions
          </div>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <a href="#">Privacy</a>
            <span className="hidden sm:inline">·</span>
            <a href="#">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
