import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ExperienceSection from "./components/ExperienceSection";
import BrandsSection from "./components/BrandsSection";
import EducationAwardsSection from "./components/EducationAwardsSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  // Smooth scrolling for anchor links
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", (e) => {
        e.preventDefault();

        const target = e.currentTarget as HTMLAnchorElement;
        const targetId = target.getAttribute("href")?.substring(1);
        if (targetId) {
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop - 80, // Offset for navbar height
              behavior: "smooth",
            });
          }
        }
      });
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.removeEventListener("click", () => {});
      });
    };
  }, []);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <HeroSection />
                  <AboutSection />
                  <SkillsSection />
                  <ExperienceSection />
                  <BrandsSection />
                  <EducationAwardsSection />
                  <ProjectsSection />
                  <ContactSection />
                </>
              }
            />
            {/* Add additional routes here if needed */}
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
