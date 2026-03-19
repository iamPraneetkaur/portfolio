import { motion } from 'framer-motion';
import { Palette, Heart, ShoppingBag } from 'lucide-react';

const BeyondCodeSection = () => {
  return (
    <section id="beyond-code" className="col-span-12 scroll-mt-32">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold tracking-tight text-text-primary"
        >
          Beyond <span className="text-transparent bg-clip-text bg-gradient-to-r from-lavender to-pink">Code</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-lg text-text-secondary mt-4 max-w-2xl mx-auto"
        >
          A glimpse into the interests and creative pursuits that shape my perspective.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white/40 backdrop-blur-xl border border-white/60 rounded-[32px] p-8"
        >
          <div className="w-12 h-12 rounded-2xl bg-lavender/20 flex items-center justify-center mb-6">
            <Palette className="w-6 h-6 text-lavender" />
          </div>
          <h3 className="text-xl font-bold text-text-primary mb-4">Artistic Recognition</h3>
          <p className="text-text-secondary leading-relaxed text-sm">
            Maintaining a lifelong interest in traditional arts, primarily focused on spot painting and sketching. Recognized for artistic efforts in various academic forums.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white/40 backdrop-blur-xl border border-white/60 rounded-[32px] p-8"
        >
          <div className="w-12 h-12 rounded-2xl bg-pink/20 flex items-center justify-center mb-6">
            <ShoppingBag className="w-6 h-6 text-pink" />
          </div>
          <h3 className="text-xl font-bold text-text-primary mb-4">Parimium Artworks</h3>
          <p className="text-text-secondary leading-relaxed text-sm">
            Founder and creator of a small creative venture focused on handcrafted items, blending traditional craftsmanship with personal design explorations.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/40 backdrop-blur-xl border border-white/60 rounded-[32px] p-8"
        >
          <div className="w-12 h-12 rounded-2xl bg-blue/20 flex items-center justify-center mb-6">
            <Heart className="w-6 h-6 text-blue" />
          </div>
          <h3 className="text-xl font-bold text-text-primary mb-4">Social Welfare</h3>
          <p className="text-text-secondary leading-relaxed text-sm">
            Active inclination toward animal welfare, specifically focused on supporting stray animal assistance through both community action and technical solutions.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default BeyondCodeSection;
