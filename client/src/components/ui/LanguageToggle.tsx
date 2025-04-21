import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();
  const { theme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);
  
  // Prevent hydration mismatch
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  // Get mode information
  const isLight = theme === 'light';
  const isEnglish = language === 'en';
  
  // Background gradient based on theme and language
  const getBackgroundGradient = () => {
    if (isLight) {
      return isEnglish 
        ? "linear-gradient(135deg, #e2efff 0%, #dbedff 100%)"
        : "linear-gradient(135deg, #ffeee2 0%, #ffe8db 100%)";
    } else {
      return isEnglish
        ? "linear-gradient(135deg, #172554 0%, #1e3a8a 100%)" 
        : "linear-gradient(135deg, #7f1d1d 0%, #991b1b 100%)";
    }
  };
  
  // Animation variants
  const textVariants = {
    initial: { opacity: 0, y: -10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 10 }
  };
  
  const flagWaveVariants = {
    animate: (custom: number) => ({
      y: [0, -1, 1, -1, 0],
      rotate: [0, -0.5, 0.5, -0.5, 0],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        repeatDelay: custom,
        ease: "easeInOut"
      }
    })
  };

  if (!isMounted) return null;

  return (
    <div className="flex items-center gap-2">
      <motion.button 
        onClick={toggleLanguage}
        className="relative h-9 w-16 overflow-hidden rounded-full border-2 border-gray-200 dark:border-gray-700 shadow-sm cursor-pointer"
        style={{ 
          background: getBackgroundGradient() 
        }}
        whileHover={{ 
          scale: 1.05,
          boxShadow: isLight 
            ? '0 0 10px rgba(37, 99, 235, 0.3)' 
            : '0 0 10px rgba(59, 130, 246, 0.3)'
        }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
        aria-label={`Switch to ${isEnglish ? 'Italian' : 'English'} language`}
      >
        {/* Decorative elements based on language */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {/* English decorations */}
          <AnimatePresence>
            {isEnglish && (
              <>
                <motion.div 
                  className="absolute w-full h-0.5 bg-blue-500/20 dark:bg-blue-400/10 top-2"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -20, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div 
                  className="absolute w-full h-0.5 bg-blue-500/10 dark:bg-blue-400/10 top-4"
                  initial={{ x: -15, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -15, opacity: 0 }}
                  transition={{ duration: 0.3, delay: 0.05 }}
                />
                <motion.div 
                  className="absolute w-full h-0.5 bg-blue-500/30 dark:bg-blue-400/20 bottom-2"
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -10, opacity: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                />
              </>
            )}
          </AnimatePresence>
          
          {/* Italian decorations */}
          <AnimatePresence>
            {!isEnglish && (
              <>
                <motion.div 
                  className="absolute w-1.5 h-full bg-green-500/20 dark:bg-green-400/10 left-3"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 20, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div 
                  className="absolute w-1.5 h-full bg-white/20 dark:bg-white/10 left-6"
                  initial={{ y: 15, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 15, opacity: 0 }}
                  transition={{ duration: 0.3, delay: 0.05 }}
                />
                <motion.div 
                  className="absolute w-1.5 h-full bg-red-500/20 dark:bg-red-400/10 left-9"
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 10, opacity: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                />
              </>
            )}
          </AnimatePresence>
        </div>
        
        {/* Language indicator and text */}
        <div className="relative z-10 h-full w-full flex items-center justify-center">
          <AnimatePresence mode="wait">
            {isEnglish ? (
              <motion.div
                key="english"
                className="flex items-center justify-center gap-0.5"
                initial="initial"
                animate="animate"
                exit="exit"
                variants={textVariants}
                custom={isEnglish}
                transition={{ duration: 0.3 }}
              >
                <motion.span
                  className="text-xs font-bold text-blue-600 dark:text-blue-300"
                  variants={flagWaveVariants}
                  animate="animate"
                  custom={3}
                >
                  EN
                </motion.span>
                <motion.div 
                  className="absolute -bottom-1.5 h-0.5 w-4 bg-blue-500 dark:bg-blue-400 rounded-full opacity-70"
                  animate={{ 
                    width: [16, 18, 16],
                    opacity: [0.7, 0.9, 0.7]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
            ) : (
              <motion.div
                key="italian"
                className="flex items-center justify-center gap-0.5"
                initial="initial"
                animate="animate"
                exit="exit"
                variants={textVariants}
                custom={!isEnglish}
                transition={{ duration: 0.3 }}
              >
                <motion.span
                  className="text-xs font-bold text-red-600 dark:text-red-300"
                  variants={flagWaveVariants}
                  animate="animate"
                  custom={2.5}
                >
                  IT
                </motion.span>
                <motion.div 
                  className="absolute -bottom-1.5 h-0.5 w-4 bg-green-500 dark:bg-green-400 rounded-full opacity-70"
                  animate={{ 
                    width: [16, 18, 16],
                    opacity: [0.7, 0.9, 0.7]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.button>
    </div>
  );
}
