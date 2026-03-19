import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, FileText } from 'lucide-react';
import generalCv from '../../assets/General-CV-Praneet-Kaur.pdf';
import specializedCv from '../../assets/Specialized-CV-Praneet-Kaur.pdf';

interface CVPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  cvType: 'general' | 'specialized';
}

const CVPreviewModal = ({ isOpen, onClose, cvType }: CVPreviewModalProps) => {
  const currentFile = cvType === 'general' ? generalCv : specializedCv;
  const currentTitle = cvType === 'general' ? 'General Curriculum Vitae' : 'Specialized Portfolio CV';
  const downloadName = cvType === 'general' ? 'General-CV-Praneet-Kaur.pdf' : 'Specialized-CV-Praneet-Kaur.pdf';

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-cream/80 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="w-full max-w-5xl h-[90vh] bg-white/90 backdrop-blur-2xl border border-white rounded-[40px] shadow-2xl overflow-hidden relative flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="px-8 py-6 border-b border-white/60 flex items-center justify-between bg-white/40">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-lavender/20 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-lavender" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-text-primary">{currentTitle}</h3>
                  <p className="text-sm text-text-secondary font-medium tracking-wide">PRANEET KAUR</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <a
                  href={currentFile}
                  download={downloadName}
                  className="hidden md:flex items-center px-6 py-3 bg-text-primary text-white rounded-full font-medium hover:bg-opacity-90 transition-all hover:shadow-lg group"
                >
                  Download CV 
                  <Download size={18} className="ml-2 group-hover:translate-y-0.5 transition-transform" />
                </a>
                <button
                  onClick={onClose}
                  className="p-3 bg-white/50 hover:bg-white backdrop-blur-md rounded-full text-text-secondary transition-all"
                >
                  <X size={24} />
                </button>
              </div>
            </div>

            {/* Content Preview */}
            <div className="flex-1 bg-cream/30 p-4 md:p-8 overflow-hidden">
              <div className="w-full h-full rounded-[24px] overflow-hidden border border-white/40 shadow-inner bg-white/50">
                <iframe
                  src={`${currentFile}#toolbar=0`}
                  className="w-full h-full"
                  title="CV Preview"
                />
              </div>
            </div>

            {/* Mobile Actions */}
            <div className="md:hidden p-6 border-t border-white/60 bg-white/40">
              <a
                href={currentFile}
                download={downloadName}
                className="w-full flex items-center justify-center px-6 py-4 bg-text-primary text-white rounded-full font-medium hover:bg-opacity-90 transition-all"
              >
                Download CV 
                <Download size={18} className="ml-2" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CVPreviewModal;
