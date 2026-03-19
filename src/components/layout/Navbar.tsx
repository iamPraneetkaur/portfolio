import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-4 bg-cream/70 backdrop-blur-md shadow-sm' : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-16 flex items-center justify-between">
        <a href="#" className="text-2xl font-semibold tracking-tight text-text-primary">
          PK.
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {['About', 'Skills', 'Projects', 'Certificates', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-text-secondary hover:text-text-primary transition-colors text-sm font-medium"
            >
              {item}
            </a>
          ))}
        </nav>

        <a
          href="#projects"
          className="hidden md:inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-lavender/30 text-text-primary text-sm font-medium hover:bg-lavender/50 transition-colors shadow-[0_0_0_1px_rgba(205,180,219,0.3)]"
        >
          View Work
        </a>

        {/* Mobile Menu Button - Minimal for now */}
        <button className="md:hidden text-text-primary p-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="4" y1="12" x2="20" y2="12"></line>
            <line x1="4" y1="6" x2="20" y2="6"></line>
            <line x1="4" y1="18" x2="20" y2="18"></line>
          </svg>
        </button>
      </div>
    </motion.header>
  );
};

export default Navbar;
