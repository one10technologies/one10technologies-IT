import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ServiceSection from "./components/ServiceSection";
import ProjectMethodSection from "./components/ProjectMethodSection";
import GetInTouchSection from "./components/GetInTouchSection";
import Industries from "./pages/Industries";
import About from "./pages/About";
import OurWork from "./pages/OurWork";
import Contact from "./pages/Contact";
import WebDevService from "./pages/service-pages/WebDevService";
import AppDevService from "./pages/service-pages/AppDevService";
import SoftSolService from "./pages/service-pages/SoftSolService";
import SeoMarketing from "./pages/service-pages/SeoMarketing";
import UiUxDesign from "./pages/service-pages/UiUxDesign.tsx";
import Branding from "./pages/service-pages/Branding.tsx";
import PortalsSupport from "./pages/service-pages/PortalsSupport.tsx";
import Maintenance from "./pages/service-pages/Maintenance.tsx";
import ContactService from "./pages/service-pages/ContactService.tsx";


function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-white mt-15">
        <Navbar />

        {/* Main Page Content */}
        <main className="flex-grow">
          <Routes>
            {/* Home Page */}
            <Route
              path="/"
              element={
                <>
                  <HeroSection />
                  <AboutSection />
                  <ServiceSection />
                  <ProjectMethodSection />
                  <GetInTouchSection />
                </>
              }
            />

            {/* Industries Page */}
            <Route path="/industries" element={<Industries />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<OurWork />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="/services/webdev" element={<WebDevService />} />
            <Route path="/services/appdev" element={<AppDevService />} />
            <Route path="/services/softwaresolutions" element={<SoftSolService/>} />
            <Route path="/services/seomarketing" element={<SeoMarketing/>} />
            <Route path="/services/uiuxdesign" element={<UiUxDesign/>} />
            <Route path="/services/branding" element={<Branding/>} />
            <Route path="/services/portalsupport" element={<PortalsSupport/>} />
            <Route path="/services/maintenance" element={<Maintenance/>} />
            <Route path="/services/contactService" element={<ContactService/>} />
            






 
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
