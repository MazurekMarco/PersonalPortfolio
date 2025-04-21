import { useLanguage } from "@/context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();
  const [isMounted, setIsMounted] = useState(false);
  
  // Prevent hydration mismatch
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  const toggleVariants = {
    en: { backgroundColor: 'rgb(243, 244, 246)' },
    it: { backgroundColor: 'rgb(243, 244, 246)' },
  };
  
  const sliderVariants = {
    en: { x: 2 },
    it: { x: 27 },
  };
  
  const textVariants = {
    initial: { opacity: 0, y: -5 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 5 }
  };
  
  const flagIconVariants = {
    en: { 
      scale: language === 'en' ? 1 : 0.7,
      opacity: language === 'en' ? 1 : 0.5,
    },
    it: { 
      scale: language === 'it' ? 1 : 0.7,
      opacity: language === 'it' ? 1 : 0.5,
    }
  };

  if (!isMounted) return null;

  return (
    <div className="flex items-center gap-2">
      <motion.button 
        onClick={toggleLanguage}
        className="relative h-7 w-14 overflow-hidden rounded-full border-2 border-gray-200 
                  dark:border-gray-700 shadow-inner cursor-pointer"
        animate={language}
        variants={toggleVariants}
        whileHover={{ 
          boxShadow: '0 0 8px rgba(79, 70, 229, 0.5)',
          scale: 1.05 
        }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
        aria-label={`Switch to ${language === 'en' ? 'Italian' : 'English'} language`}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-red-100 dark:from-blue-900/30 dark:to-red-900/30 opacity-30"></div>
        
        <motion.div 
          className="absolute top-0.5 bottom-0.5 w-5 rounded-full 
                    bg-gradient-to-b from-primary-500 to-secondary-500 shadow-lg"
          animate={language}
          variants={sliderVariants}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
        
        <div className="absolute inset-0 flex items-center justify-between px-2.5 text-xs font-bold tracking-wider">
          <AnimatePresence mode="wait" initial={false}>
            <motion.span 
              key={`en-${language === 'en'}`}
              className={`${language === 'en' ? 'text-white' : 'text-gray-500 dark:text-gray-400'}`}
              initial="initial"
              animate="animate"
              exit="exit"
              variants={textVariants}
              transition={{ duration: 0.2 }}
            >
              EN
            </motion.span>
          </AnimatePresence>
          
          <AnimatePresence mode="wait" initial={false}>
            <motion.span 
              key={`it-${language === 'it'}`}
              className={`${language === 'it' ? 'text-white' : 'text-gray-500 dark:text-gray-400'}`}
              initial="initial"
              animate="animate"
              exit="exit"
              variants={textVariants}
              transition={{ duration: 0.2 }}
            >
              IT
            </motion.span>
          </AnimatePresence>
        </div>
      </motion.button>
    </div>
  );
}
