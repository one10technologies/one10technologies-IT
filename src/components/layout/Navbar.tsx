import { useState, useEffect, useRef } from "react";
import { ChevronDown, X } from "lucide-react";
import logo from "/one10tranparent.png";

const Navbar = () => {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside (desktop)
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        servicesRef.current &&
        !servicesRef.current.contains(e.target as Node)
      ) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close nested dropdown when mobile menu closes
  useEffect(() => {
    if (!mobileMenuOpen) setMobileServicesOpen(false);
  }, [mobileMenuOpen]);

  return (
    <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md border-b border-gray-100 z-50 transition-all">
      <div className="max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between h-20">
        {/* ✅ Desktop & Medium Logo */}
        <a href="/" className="hidden md:flex items-center gap-2">
          <img src={logo} alt="ONE10 Technologies" className="h-50 w-auto" />
        </a>

        {/* ✅ Mobile Logo (slightly left) */}
        <a
          href="/"
          className="flex md:hidden items-center gap-2 absolute left-5"
        >
          <img src={logo} alt="ONE10 Technologies" className="h-30 w-auto" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10 text-gray-800 font-semibold text-base lg:text-lg">
          <a href="/" className="hover:text-[#0037A6] transition">
            Home
          </a>
          <a href="/about" className="hover:text-[#0037A6] transition">
            About
          </a>
          <a href="/industries" className="hover:text-[#0037A6] transition">
            Industries
          </a>

          {/* Services Dropdown */}
          <div className="relative" ref={servicesRef}>
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className={`flex items-center gap-1 transition-colors ${
                servicesOpen ? "text-[#0037A6]" : "hover:text-[#0037A6]"
              }`}
              aria-expanded={servicesOpen}
            >
              Services
              <ChevronDown
                size={18}
                className={`ml-1 transform transition-transform duration-300 ${
                  servicesOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>

            {/* Dropdown Menu */}
            {servicesOpen && (
              <div className="absolute left-1/2 top-full mt-6 w-screen max-w-6xl -translate-x-1/2 bg-white shadow-xl border border-gray-100 rounded-xl z-50 animate-fadeIn mt-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 p-10">
                  {/* Web Solutions */}
                  <div>
                    <h3 className="text-sm font-semibold text-gray-500 mb-3">
                      WEB SOLUTIONS
                    </h3>
                    <ul className="space-y-3">
                      <li>
                        <a
                          href="/services/webdev"
                          className="font-bold text-gray-900 hover:text-[#0037A6]"
                        >
                          Web Development
                        </a>
                        <p className="text-sm text-gray-500">
                          Custom websites, eCommerce, portfolios
                        </p>
                      </li>
                      <li>
                        <a
                          href="/services/appdev"
                          className="font-bold text-gray-900 hover:text-[#0037A6]"
                        >
                          App Development
                        </a>
                        <p className="text-sm text-gray-500">
                          Android & iOS app creation
                        </p>
                      </li>
                      <li>
                        <a
                          href="/services/softwaresolutions"
                          className="font-bold text-gray-900 hover:text-[#0037A6]"
                        >
                          Software Solutions
                        </a>
                        <p className="text-sm text-gray-500">
                          Business automation, dashboards, ERP
                        </p>
                      </li>
                    </ul>
                  </div>

                  {/* Digital Growth */}
                  <div>
                    <h3 className="text-sm font-semibold text-gray-500 mb-3">
                      DIGITAL GROWTH
                    </h3>
                    <ul className="space-y-3">
                      <li>
                        <a
                          href="/services/seomarketing"
                          className="font-bold text-gray-900 hover:text-[#0037A6]"
                        >
                          SEO & Marketing
                        </a>
                        <p className="text-sm text-gray-500">
                          Increase reach and performance
                        </p>
                      </li>
                      <li>
                        <a
                          href="/services/uiuxdesign"
                          className="font-bold text-gray-900 hover:text-[#0037A6]"
                        >
                          UI/UX Design
                        </a>
                        <p className="text-sm text-gray-500">
                          Modern, intuitive experiences
                        </p>
                      </li>
                      <li>
                        <a
                          href="/services/branding"
                          className="font-bold text-gray-900 hover:text-[#0037A6]"
                        >
                          Branding
                        </a>
                        <p className="text-sm text-gray-500">
                          Logos, identity, design systems
                        </p>
                      </li>
                    </ul>
                  </div>

                  {/* Portals & Support */}
                  <div>
                    <h3 className="text-sm font-semibold text-gray-500 mb-3">
                      PORTALS & SUPPORT
                    </h3>
                    <ul className="space-y-3">
                      <li>
                        <a
                          href="/services/portalsupport"
                          className="font-bold text-gray-900 hover:text-[#0037A6]"
                        >
                          Web Portals
                        </a>
                        <p className="text-sm text-gray-500">
                          Secure, scalable online platforms
                        </p>
                      </li>
                      <li>
                        <a
                          href="/services/maintenance"
                          className="font-bold text-gray-900 hover:text-[#0037A6]"
                        >
                          Maintenance
                        </a>
                        <p className="text-sm text-gray-500">
                          Updates, support, optimization
                        </p>
                      </li>
                      <li>
                        <a
                          href="/services/contactService"
                          className="font-bold text-gray-900 hover:text-[#0037A6]"
                        >
                          Contact
                        </a>
                        <p className="text-sm text-gray-500">
                          Connect with our experts
                        </p>
                      </li>
                    </ul>
                  </div>

                  {/* Promo Box */}
                  <div className="bg-[#0037A6] text-white rounded-2xl p-8 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-semibold leading-tight mb-2">
                        Looking for Developers? Let’s Discuss!
                      </h3>
                      <p className="text-sm text-gray-200">
                        With 10+ expert developers, we help you turn ideas into
                        reality.
                      </p>
                    </div>
                    <a
                      href="/contact"
                      className="mt-4 inline-flex items-center gap-1 text-base font-medium text-white/90 hover:text-white transition"
                    >
                      Talk to Sales →
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>

          <a href="/work" className="hover:text-[#0037A6] transition">
            Our Work
          </a>
          <a href="/contact" className="hover:text-[#0037A6] transition">
            Contact
          </a>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a
            href="/contact"
            className="bg-[#0037A6] text-white px-6 py-3 rounded-full text-sm lg:text-base font-semibold shadow-md hover:bg-[#002b7d] transition"
          >
            Get a Quote
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-gray-800 hover:text-[#0037A6] transition ml-auto"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? (
            <X size={26} />
          ) : (
            <span className="text-3xl">☰</span>
          )}
        </button>
      </div>

      {/* ✅ Mobile Drawer */}
      <div
        className={`md:hidden fixed top-20 left-0 w-full bg-white border-t border-gray-100 shadow-md transition-all duration-300 overflow-y-auto ${
          mobileMenuOpen ? "max-h-[85vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col p-6 text-gray-800 font-medium text-base">
          <a
            href="/"
            className="py-3 border-b border-gray-100 hover:text-[#0037A6]"
          >
            Home
          </a>
          <a
            href="/about"
            className="py-3 border-b border-gray-100 hover:text-[#0037A6]"
          >
            About
          </a>
          <a
            href="/industries"
            className="py-3 border-b border-gray-100 hover:text-[#0037A6]"
          >
            Industries
          </a>

          {/* Collapsible Mobile Services */}
          <div className="border-b border-gray-100 py-3">
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="flex justify-between items-center w-full font-semibold text-gray-900 hover:text-[#0037A6] transition"
            >
              Services
              <ChevronDown
                size={20}
                className={`transform transition-transform duration-300 ${
                  mobileServicesOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>

            <ul
              className={`overflow-hidden transition-all duration-300 ${
                mobileServicesOpen ? "max-h-[600px] mt-3" : "max-h-0"
              } pl-3 space-y-2`}
            >
              <li>
                <a
                  href="/services/webdev"
                  className="block py-1 hover:text-[#0037A6]"
                >
                  Web Development
                </a>
              </li>
              <li>
                <a
                  href="/services/appdev"
                  className="block py-1 hover:text-[#0037A6]"
                >
                  App Development
                </a>
              </li>
              <li>
                <a
                  href="/services/softwaresolutions"
                  className="block py-1 hover:text-[#0037A6]"
                >
                  Software Solutions
                </a>
              </li>
              <li>
                <a
                  href="/services/seomarketing"
                  className="block py-1 hover:text-[#0037A6]"
                >
                  SEO & Marketing
                </a>
              </li>
              <li>
                <a
                  href="/services/uiuxdesign"
                  className="block py-1 hover:text-[#0037A6]"
                >
                  UI/UX Design
                </a>
              </li>
              <li>
                <a
                  href="/services/branding"
                  className="block py-1 hover:text-[#0037A6]"
                >
                  Branding
                </a>
              </li>
              <li>
                <a
                  href="/services/portalsupport"
                  className="block py-1 hover:text-[#0037A6]"
                >
                  Web Portals
                </a>
              </li>
              <li>
                <a
                  href="/services/maintenance"
                  className="block py-1 hover:text-[#0037A6]"
                >
                  Maintenance
                </a>
              </li>
              <li>
                <a
                  href="/services/contactService"
                  className="block py-1 hover:text-[#0037A6]"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <a
            href="/work"
            className="py-3 border-b border-gray-100 hover:text-[#0037A6]"
          >
            Our Work
          </a>
          <a
            href="/contact"
            className="py-3 border-b border-gray-100 hover:text-[#0037A6]"
          >
            Contact
          </a>

          <a
            href="/contact"
            className="mt-5 bg-[#0037A6] text-white px-6 py-3 rounded-full text-center text-sm font-semibold shadow-md hover:bg-[#002b7d] transition"
          >
            Get a Quote
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
