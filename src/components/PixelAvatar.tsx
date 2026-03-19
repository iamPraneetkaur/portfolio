import { motion } from 'framer-motion';

const PixelAvatar = () => {
  return (
    <motion.svg
      viewBox="0 0 128 128"
      className="w-full h-full"
      style={{ imageRendering: 'pixelated' }}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* 
        Final Polished 128x128 Pixel Avatar
        - Final face (maintained)
        - Natural, non-triangular body silhouette
        - Flatter shoulder line with rounded edges
      */}
      
      {/* --- HAIR BACK --- */}
      <rect x="40" y="12" width="48" height="4" fill="#1A1A1A" />
      <rect x="32" y="16" width="64" height="4" fill="#1A1A1A" />
      <rect x="28" y="20" width="72" height="60" fill="#1A1A1A" />
      <rect x="24" y="28" width="80" height="52" fill="#2B2B2B" />
      
      {/* --- FACE --- */}
      <rect x="44" y="32" width="40" height="4" fill="#FCE4EC" />
      <rect x="40" y="36" width="48" height="48" fill="#FCE4EC" />
      <rect x="44" y="84" width="40" height="4" fill="#FCE4EC" />
      
      {/* --- HAIR FRONT --- */}
      <rect x="40" y="28" width="12" height="12" fill="#2B2B2B" />
      <rect x="76" y="28" width="12" height="12" fill="#2B2B2B" />
      <rect x="52" y="24" width="24" height="6" fill="#2B2B2B" />
      <rect x="36" y="40" width="4" height="32" fill="#1A1A1A" />
      <rect x="88" y="40" width="4" height="32" fill="#1A1A1A" />
      <rect x="32" y="48" width="2" height="24" fill="#1A1A1A" />
      <rect x="94" y="48" width="2" height="24" fill="#1A1A1A" />
      <rect x="56" y="18" width="16" height="1" fill="#FFFFFF" opacity="0.08" />
      
      {/* --- EYES --- */}
      <rect x="48" y="54" width="10" height="14" fill="#2B2B2B" />
      <rect x="48" y="54" width="3" height="3" fill="#FFFFFF" opacity="0.8" />
      <rect x="56" y="64" width="2" height="2" fill="#FFFFFF" opacity="0.3" />
      <rect x="70" y="54" width="10" height="14" fill="#2B2B2B" />
      <rect x="70" y="54" width="3" height="3" fill="#FFFFFF" opacity="0.8" />
      <rect x="78" y="64" width="2" height="2" fill="#FFFFFF" opacity="0.3" />
      
      {/* --- FACIAL FEATURES --- */}
      <rect x="42" y="70" width="12" height="4" fill="#FF80AB" opacity="0.15" />
      <rect x="74" y="70" width="12" height="4" fill="#FF80AB" opacity="0.15" />
      <rect x="58" y="76" width="12" height="1" fill="#2B2B2B" opacity="0.3" />
      
      {/* --- BODY / OUTFIT (Non-Triangular, Natural Shoulders) --- */}
      {/* Neck */}
      <rect x="62" y="88" width="4" height="2" fill="#FCE4EC" />
      
      {/* 
        Modified Body: 
        Flatter shoulders, more rectangular base to avoid the "triangle" look.
      */}
      {/* Main Chest/Shirt mass */}
      <rect x="36" y="90" width="56" height="38" fill="#CDB4DB" />
      
      {/* Flatter Shoulders (Lowering the slope, making it blockier but rounded at extreme edges) */}
      <rect x="34" y="94" width="60" height="34" fill="#CDB4DB" />
      <rect x="32" y="98" width="64" height="30" fill="#CDB4DB" />
      <rect x="30" y="104" width="68" height="24" fill="#CDB4DB" />
      <rect x="28" y="112" width="72" height="16" fill="#CDB4DB" />
      
      {/* Shoulder Shadows (Refined for the flatter shape) */}
      <rect x="36" y="90" width="56" height="2" fill="#B99CC9" opacity="0.5" />
      <rect x="34" y="94" width="2" height="2" fill="#B99CC9" opacity="0.4" />
      <rect x="92" y="94" width="2" height="2" fill="#B99CC9" opacity="0.4" />
      
      {/* Sweater Detail (Simple texture) */}
      <rect x="62" y="90" width="3" height="38" fill="#B99CC9" opacity="0.1" />

      {/* --- ANIMATIONS --- */}
      <motion.rect 
        x="48" y="54" width="10" height="14" fill="#FCE4EC"
        animate={{ scaleY: [0, 1, 0] }}
        transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 6 }}
        style={{ originY: 0 }}
      />
      <motion.rect 
        x="70" y="54" width="10" height="14" fill="#FCE4EC"
        animate={{ scaleY: [0, 1, 0] }}
        transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 6 }}
        style={{ originY: 0 }}
      />

      <motion.path
        d="M64 25 L65 28 L68 29 L65 30 L64 33 L63 30 L60 29 L63 28 Z"
        fill="#FFFFFF"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: [0, 0.4, 0], scale: [0, 0.8, 0] }}
        transition={{ duration: 2, repeat: Infinity, repeatDelay: 7 }}
      />
    </motion.svg>
  );
};

export default PixelAvatar;
