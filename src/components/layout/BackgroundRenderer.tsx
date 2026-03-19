import { motion } from 'framer-motion';

const BackgroundRenderer = () => {
  return (
    <>
      <div className="bg-grain"></div>
      
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <motion.div 
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            rotate: [0, 5, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vh] rounded-full bg-lavender/40 blur-[100px]" 
        />
        
        <motion.div 
          animate={{
            y: [0, 30, 0],
            x: [0, -15, 0],
            rotate: [0, -5, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vh] rounded-full bg-pink/40 blur-[100px]" 
        />
        
        <motion.div 
          animate={{
            y: [0, -15, 0],
            x: [0, -20, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-[20%] right-[10%] w-[40vw] h-[40vh] rounded-full bg-blue/40 blur-[100px]" 
        />
      </div>
    </>
  );
};

export default BackgroundRenderer;
