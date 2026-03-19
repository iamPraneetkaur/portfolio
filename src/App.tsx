import Navbar from './components/layout/Navbar';
import BackgroundRenderer from './components/layout/BackgroundRenderer';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import SkillsSection from './components/sections/SkillsSection';
import ProjectsSection from './components/sections/ProjectsSection';
import CertificatesSection from './components/sections/CertificatesSection';
import BeyondCodeSection from './components/sections/BeyondCodeSection';
import ContactSection from './components/sections/ContactSection';

function App() {
  return (
    <div className="min-h-screen w-full relative overflow-x-hidden">
      <BackgroundRenderer />
      <Navbar />

      <main className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-16 pb-20 pt-10 grid grid-cols-12 gap-y-32 md:gap-y-48">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <CertificatesSection />
        <BeyondCodeSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;
