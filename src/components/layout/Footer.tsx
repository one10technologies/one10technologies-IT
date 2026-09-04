// import {
//   Mail,
//   Phone,
//   MapPin,
//   Facebook,
//   Instagram,
//   Linkedin,
// } from "lucide-react";
// import logo from "/one10logowhite.png";

// const Footer = () => {
//   return (
//     <footer className="bg-black text-white w-full">
//       {/* Top Section */}
//       <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-12 border-b border-gray-800 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
//         {/* Brand Section */}
//         <div>
//           <img src={logo} alt="One10 Technologies" className="w-36 mb-4" />
//           <p className="text-gray-400 text-sm leading-relaxed">
//             One10 Technologies is a full-service IT solutions company
//             specializing in innovative web, app, and software development —
//             powering digital transformation.
//           </p>
//         </div>

//         {/* Quick Links */}
//         <div>
//           <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
//           <ul className="space-y-2 text-gray-400">
//             <li>
//               <a
//                 href="/"
//                 className="hover:text-white transition-colors duration-300"
//               >
//                 Home
//               </a>
//             </li>
//             <li>
//               <a
//                 href="/about"
//                 className="hover:text-white transition-colors duration-300"
//               >
//                 About
//               </a>
//             </li>
//             <li>
//               <a
//                 href="/services"
//                 className="hover:text-white transition-colors duration-300"
//               >
//                 Services
//               </a>
//             </li>
//             <li>
//               <a
//                 href="/contact"
//                 className="hover:text-white transition-colors duration-300"
//               >
//                 Contact
//               </a>
//             </li>
//           </ul>
//         </div>

//         {/* Our Services */}
//         <div>
//           <h3 className="text-lg font-semibold mb-4 text-white">
//             Our Services
//           </h3>
//           <ul className="space-y-2 text-gray-400">
//             <li>
//               <a
//                 href="/web-development"
//                 className="hover:text-white transition-colors duration-300"
//               >
//                 Web Development
//               </a>
//             </li>
//             <li>
//               <a
//                 href="/app-development"
//                 className="hover:text-white transition-colors duration-300"
//               >
//                 App Development
//               </a>
//             </li>
//             <li>
//               <a
//                 href="/software-solutions"
//                 className="hover:text-white transition-colors duration-300"
//               >
//                 Custom Software
//               </a>
//             </li>
//             <li>
//               <a
//                 href="/digital-growth"
//                 className="hover:text-white transition-colors duration-300"
//               >
//                 Digital Growth
//               </a>
//             </li>
//           </ul>
//         </div>

//         {/* Contact Info */}
//         <div>
//           <h3 className="text-lg font-semibold mb-4 text-white">
//             Get In Touch
//           </h3>
//           <ul className="space-y-3 text-gray-400">
//             <li className="flex items-center gap-2">
//               <Mail className="w-4 h-4" />
//               <span>info@one10technologies.com</span>
//             </li>
//             <li className="flex items-center gap-2">
//               <Phone className="w-4 h-4" />
//               <span>+91 98765 43210</span>
//             </li>
//             <li className="flex items-start gap-2">
//               <MapPin className="w-4 h-4 mt-1" />
//               <span>One10 Technologies, Bengaluru, India</span>
//             </li>
//           </ul>
//         </div>
//       </div>

//       {/* Bottom Section */}
//       <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-6 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
//         <p className="text-center md:text-left mb-4 md:mb-0">
//           © {new Date().getFullYear()} One10 Technologies. All rights reserved.
//         </p>

//         {/* Social Icons */}
//         <div className="flex gap-4">
//           <a
//             href="#"
//             className="hover:text-white transition-colors duration-300"
//             aria-label="Facebook"
//           >
//             <Facebook size={18} />
//           </a>
//           <a
//             href="#"
//             className="hover:text-white transition-colors duration-300"
//             aria-label="Instagram"
//           >
//             <Instagram size={18} />
//           </a>
//           <a
//             href="#"
//             className="hover:text-white transition-colors duration-300"
//             aria-label="LinkedIn"
//           >
//             <Linkedin size={18} />
//           </a>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";
import logo from "/one10logowhite.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white w-full mt-auto">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-12 border-b border-gray-800 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Brand Section */}
        <div>
          <img src={logo} alt="One10 Technologies" className="w-36 mb-4" />
          <p className="text-gray-400 text-sm leading-relaxed">
            One10 Technologies is a full-service IT solutions company
            specializing in innovative web, app, and software development —
            powering digital transformation.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="/" className="hover:text-white transition-colors duration-300">Home</a></li>
            <li><a href="/about" className="hover:text-white transition-colors duration-300">About</a></li>
            {/* <li><a href="/services" className="hover:text-white transition-colors duration-300">Services</a></li> */}
            <li><a href="/contact" className="hover:text-white transition-colors duration-300">Contact</a></li>
          </ul>
        </div>

        {/* Our Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Our Services</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="/services/webdev" className="hover:text-white transition-colors duration-300">Web Development</a></li>
            <li><a href="/services/appdev" className="hover:text-white transition-colors duration-300">App Development</a></li>
            <li><a href="/services/softwaresolutions" className="hover:text-white transition-colors duration-300">Custom Software</a></li>
            <li><a href="/services/seomarketing" className="hover:text-white transition-colors duration-300">Digital Growth</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Get In Touch</h3>
          <ul className="space-y-3 text-gray-400">
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>hello@one10technologies.com</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>+91 6353556477</span>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-1" />
              <span>One10 Technologies IT  Ahmedabad, India</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-6 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
        <p className="text-center md:text-left mb-4 md:mb-0">
          © {new Date().getFullYear()} One10 Technologies IT. All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex gap-4">
          <a href="#" className="hover:text-white transition-colors duration-300" aria-label="Facebook">
            <Facebook size={18} />
          </a>
          <a href="#" className="hover:text-white transition-colors duration-300" aria-label="Instagram">
            <Instagram size={18} />
          </a>
          <a href="#" className="hover:text-white transition-colors duration-300" aria-label="LinkedIn">
            <Linkedin size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
