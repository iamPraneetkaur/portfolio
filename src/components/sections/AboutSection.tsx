import { motion } from 'framer-motion';
import profilePhoto from '../../assets/1000260896.jpg';

const AboutSection = () => {
  return (
    <section id="about" className="col-span-12 scroll-mt-32">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center"
      >
        <div className="order-2 md:order-1 relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-lavender/30 via-transparent to-pink/30 rounded-[32px] blur-2xl -z-10 transform scale-95" />
          <div className="bg-white/40 backdrop-blur-xl border border-white/60 rounded-[32px] p-8 md:p-12 shadow-[0_8px_32px_rgba(0,0,0,0.04)] relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue/20 rounded-full blur-3xl -mr-10 -mt-10 transition-transform duration-700 group-hover:scale-150" />

            <h3 className="text-2xl font-semibold mb-6 text-text-primary italic">A learner, builder, and problem-solver.</h3>
            <p className="text-lg text-text-secondary leading-relaxed mb-6">
              I am a dedicated builder who finds joy in exploring the intersection of mobile software and data-driven insights. My approach transitions from crafting intuitive Android applications to analyzing complex datasets to find meaningful logic and patterns. Beyond code, I maintain a hands-on mindset through creative pursuits, which fuels my perspective on design and functional problem-solving.
            </p>
            <div className="space-y-4 pt-6 border-t border-white/20">
              <p className="text-lg text-text-secondary leading-relaxed">
                My work is driven by a blend of technical adaptability and human-centric values like empathy and creativity. Outside of development, I manage a small creative venture, <span className="text-text-primary font-medium">Parimium Artworks</span>, and hold a strong inclination toward animal welfare, reflecting a commitment to building for real-world impact.
              </p>
            </div>
          </div>
        </div>

        <div className="order-1 md:order-2 space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-text-primary">
              A little <span className="text-transparent bg-clip-text bg-gradient-to-r from-lavender to-pink">about me</span>
            </h2>
            <p className="text-xl text-text-secondary leading-relaxed max-w-lg">
              Bridging the gap between aesthetic design and robust engineering to create compelling digital experiences.
            </p>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-lavender to-pink rounded-[32px] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
            <div className="relative aspect-square md:aspect-[4/3] rounded-[32px] overflow-hidden bg-white/40 backdrop-blur-sm border border-white/60 shadow-inner group-hover:shadow-2xl transition-all duration-500">
              <img
                src={profilePhoto}
                alt="Praneet Kaur"
                className="w-full h-full object-cover object-top grayscale-[20%] hover:grayscale-0 transition-all duration-700 scale-[1.40] group-hover:scale-[1.35]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 pt-8 border-t border-white/20">
              <div className="space-y-1">
                <span className="block text-sm font-semibold text-lavender uppercase tracking-widest mb-1">Education</span>
                <span className="block text-lg font-bold text-text-primary">B.Tech in CSE</span>
                <span className="block text-sm text-text-secondary italic leading-tight">Lovely Professional University<br />CGPA: 8.01</span>
              </div>
              <div className="space-y-1">
                <span className="block text-sm font-semibold text-pink uppercase tracking-widest mb-1">Achievement</span>
                <span className="block text-lg font-bold text-text-primary">Git Figurine Award</span>
                <span className="block text-sm text-text-secondary italic leading-tight">Vault Heist Hackathon<br />CGC University Mohali</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
