import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Award, X } from 'lucide-react';

const certificates = [
  {
    id: 1,
    title: 'Oracle Certified Foundations Associate',
    issuer: 'Oracle',
    date: '2023',
    description: 'Focuses on the core concepts and structures of Java programming.',
    meaning: 'Foundational certification in Java architecture and core programming structures.',
    link: 'https://drive.google.com/file/d/1v0TXTVFo5LnVRp5_dvJWSBO76UnqRx2T/view',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop',
    color: 'bg-lavender/20',
    icon: <Award className="w-6 h-6 text-lavender" />
  },
  {
    id: 2,
    title: 'Cloud Computing',
    issuer: 'NPTEL IIT Kharagpur',
    date: '2023',
    description: 'Covers the fundamental architecture and service models of cloud ecosystems.',
    meaning: 'Comprehensive study of cloud service models and distributed architecture.',
    link: 'https://drive.google.com/file/d/1ehF8AmBr6w7NWCXzgQzP17p3LDhNHw2N/view',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=800&auto=format&fit=crop',
    color: 'bg-pink/20',
    icon: <Award className="w-6 h-6 text-pink" />
  }
];

const CertificatesSection = () => {
  const [selectedCert, setSelectedCert] = useState<typeof certificates[0] | null>(null);

  return (
    <section id="certificates" className="col-span-12 scroll-mt-32">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold tracking-tight text-text-primary"
        >
          Recognitions & <span className="text-transparent bg-clip-text bg-gradient-to-r from-lavender to-pink">Certifications</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-lg text-text-secondary mt-4 max-w-2xl mx-auto"
        >
          Academic milestones and technical certifications representing a commitment to continuous learning.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto px-4">
        {certificates.map((cert, index) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onClick={() => setSelectedCert(cert)}
            className="group cursor-pointer relative"
          >
            <div className={`absolute inset-0 rounded-[32px] blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 -z-10 ${cert.color}`} />
            
            <div className="h-full bg-white/40 backdrop-blur-xl border border-white/60 rounded-[32px] p-8 shadow-sm hover:shadow-md flex flex-col items-start transition-all duration-300">
              <div className={`p-4 rounded-2xl mb-6 ${cert.color}`}>
                {cert.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-2 text-text-primary group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-lavender group-hover:to-pink transition-all duration-300">
                {cert.title}
              </h3>
              
              <p className="text-text-secondary font-medium mb-1">
                {cert.issuer}
              </p>
              
              <p className="text-sm text-text-secondary/70 mb-2">
                {cert.description}
              </p>
              
              <p className="text-sm font-medium text-lavender/80 italic mb-6">
                {cert.meaning}
              </p>
              
              <div className="mt-auto flex items-center gap-2 text-sm font-semibold text-lavender group-hover:gap-3 transition-all duration-300">
                View Certificate <ExternalLink className="w-4 h-4" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg bg-white rounded-[32px] overflow-hidden shadow-2xl"
            >
              <button 
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 p-2 bg-white/80 hover:bg-white rounded-full z-10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="aspect-[4/3] bg-cream relative">
                <img 
                  src={selectedCert.image} 
                  alt={selectedCert.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-text-primary mb-2">{selectedCert.title}</h3>
                <p className="text-text-secondary mb-1 font-medium">{selectedCert.issuer}</p>
                <p className="text-sm text-text-secondary/70 mb-6 font-mono tracking-tighter uppercase italic">{selectedCert.date}</p>
                <p className="text-text-secondary leading-relaxed mb-6">{selectedCert.description}</p>
                <a 
                  href={selectedCert.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-text-primary text-white rounded-full font-medium hover:bg-opacity-90 transition-all hover:shadow-lg"
                >
                  Open Certificate <ExternalLink size={18} className="ml-2" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CertificatesSection;
