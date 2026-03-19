import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Github, Linkedin } from 'lucide-react';

const ContactSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section id="contact" className="col-span-12 scroll-mt-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/30 rounded-[40px] -z-10" />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center p-8 md:p-12">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-8"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-text-primary mb-6">
              Let's create something <span className="text-transparent bg-clip-text bg-gradient-to-r from-lavender via-pink to-blue">awesome</span> together.
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed max-w-md">
              Whether you have a question, a project idea, or just want to say hi, my inbox is always open. I'll try my best to get back to you!
            </p>
          </div>

          <div className="space-y-6">
            <a 
              href="mailto:itspraneetkaur@gmail.com" 
              className="flex items-center gap-4 text-text-secondary hover:text-lavender transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-full bg-white/60 backdrop-blur-sm border border-white flex items-center justify-center shadow-sm group-hover:shadow-md transition-all">
                <Mail className="w-5 h-5" />
              </div>
              <span className="text-lg font-medium">itspraneetkaur@gmail.com</span>
            </a>
            
            <a 
              href="https://github.com/iamPraneetkaur" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-text-secondary hover:text-pink transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-full bg-white/60 backdrop-blur-sm border border-white flex items-center justify-center shadow-sm group-hover:shadow-md transition-all">
                <Github className="w-5 h-5 text-pink" />
              </div>
              <span className="text-lg font-medium">iamPraneetkaur</span>
            </a>

            <a 
              href="https://linkedin.com/in/praneet-kaur" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-text-secondary hover:text-blue transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-full bg-white/60 backdrop-blur-sm border border-white flex items-center justify-center shadow-sm group-hover:shadow-md transition-all">
                <Linkedin className="w-5 h-5 text-blue" />
              </div>
              <span className="text-lg font-medium">Praneet Kaur</span>
            </a>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="bg-white/50 backdrop-blur-2xl border border-white/60 p-8 rounded-[32px] shadow-[0_8px_32px_rgba(0,0,0,0.04)]"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-2 ml-4">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-6 py-4 rounded-full bg-white/60 border border-white focus:border-lavender focus:ring-4 focus:ring-lavender/10 outline-none transition-all text-text-primary placeholder:text-text-secondary/50"
                placeholder="John Doe"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-2 ml-4">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-6 py-4 rounded-full bg-white/60 border border-white focus:border-pink focus:ring-4 focus:ring-pink/10 outline-none transition-all text-text-primary placeholder:text-text-secondary/50"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-2 ml-4">
                Your Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-6 py-4 rounded-[32px] bg-white/60 border border-white focus:border-blue focus:ring-4 focus:ring-blue/10 outline-none transition-all text-text-primary placeholder:text-text-secondary/50 resize-none"
                placeholder="I'd love to talk about..."
              />
            </div>

            <button
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="w-full group relative inline-flex items-center justify-center px-8 py-4 text-base font-medium text-text-primary bg-white/80 hover:bg-white backdrop-blur-md rounded-full shadow-sm hover:shadow-md border border-white transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-lavender/30 via-pink/30 to-blue/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative flex items-center z-10">
                Send Message
                <motion.div
                  animate={{ x: isHovered ? 5 : 0, y: isHovered ? -5 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Send className="w-4 h-4 ml-2" />
                </motion.div>
              </span>
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
