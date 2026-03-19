import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, FileText } from 'lucide-react';
import PixelAvatar from '../PixelAvatar';
import CVPreviewModal from '../modals/CVPreviewModal';

const HeroSection = () => {
  const [cvConfig, setCvConfig] = useState<{ open: boolean; type: 'general' | 'specialized' }>({
    open: false,
    type: 'general'
  });

  return (
    <section className="col-span-12 min-h-[85vh] flex items-center justify-center relative mt-16 md:mt-24">
      <CVPreviewModal 
        isOpen={cvConfig.open} 
        onClose={() => setCvConfig(prev => ({ ...prev, open: false }))} 
        cvType={cvConfig.type}
      />
      
      {/* Floating Elements relative to hero */}
      <motion.div
        animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-[15%] left-[5%] md:left-[10%] w-16 h-16 md:w-24 md:h-24 bg-lavender/40 rounded-3xl backdrop-blur-3xl border border-white/20 -z-10"
      />
      <motion.div
        animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-[20%] right-[5%] md:right-[10%] w-20 h-20 md:w-32 md:h-32 bg-pink/40 rounded-full backdrop-blur-3xl border border-white/20 -z-10"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full max-w-[1200px] z-10 px-4">
        {/* Left Content - Details */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-block py-1.5 px-4 rounded-full bg-white/50 backdrop-blur-sm border border-white/40 text-sm font-medium text-text-secondary mb-6 shadow-sm">
              Hello, I am
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-text-primary mb-4"
          >
            Praneet Kaur <span className="text-lavender/50 block md:inline">—</span> <span className="text-2xl md:text-4xl text-text-secondary font-medium block md:inline italic">Exploring Android Development & Data Science</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6 mb-12"
          >
            <p className="text-xl md:text-2xl font-medium text-text-secondary tracking-tight">
              Building logic through code and curiosity.
            </p>
            <div className="h-px w-20 bg-gradient-to-r from-lavender to-transparent hidden lg:block" />
            <p className="text-lg md:text-xl text-text-secondary/80 max-w-2xl leading-relaxed">
              A hands-on learner exploring the intersection of mobile software and data-driven insights.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col md:flex-row items-center justify-center lg:justify-start gap-8"
          >
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href="#projects"
                className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-medium text-text-primary bg-white/60 hover:bg-white/90 backdrop-blur-md rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-white/50 transition-all duration-300 hover:-translate-y-1"
              >
                View Projects
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setCvConfig({ open: true, type: 'general' })}
                  className="group relative inline-flex items-center justify-center px-6 py-3.5 text-sm font-medium text-text-primary bg-white/60 hover:bg-white/90 backdrop-blur-md rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-white/50 transition-all duration-300 hover:-translate-y-1"
                >
                  General CV
                  <FileText className="ml-2 w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
                </button>

                <button
                  onClick={() => setCvConfig({ open: true, type: 'specialized' })}
                  className="group relative inline-flex items-center justify-center px-6 py-3.5 text-sm font-medium text-text-primary bg-white/60 hover:bg-white/90 backdrop-blur-md rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-white/50 transition-all duration-300 hover:-translate-y-1"
                >
                  Specialized CV
                  <FileText className="ml-2 w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
                </button>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <a 
                href="https://github.com/iamPraneetkaur" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-full bg-white/40 hover:bg-white/80 backdrop-blur-sm border border-white/50 text-text-secondary hover:text-lavender transition-all duration-300 hover:-translate-y-1"
              >
                <Github className="w-5 h-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a 
                href="https://linkedin.com/in/praneet-kaur" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-full bg-white/40 hover:bg-white/80 backdrop-blur-sm border border-white/50 text-text-secondary hover:text-blue transition-all duration-300 hover:-translate-y-1"
              >
                <Linkedin className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Asset - Avatar */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="order-1 lg:order-2 flex justify-center lg:justify-end"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[450px] lg:h-[450px]">
            {/* Background blobs for the avatar */}
            <motion.div 
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 90, 0]
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 bg-gradient-to-tr from-lavender/20 via-pink/20 to-blue/20 rounded-full blur-3xl -z-10"
            />
            
            <div className="w-full h-full drop-shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
              <PixelAvatar />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
