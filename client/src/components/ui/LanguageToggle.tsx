import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();
  const { theme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);
  
  // Prevent hydration mismatch
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  const isLight = theme === 'light';
  const isEnglish = language === 'en';

  if (!isMounted) return null;

  return (
    <div className="flex items-center gap-2">
      <motion.button 
        onClick={toggleLanguage}
        className="relative h-8 w-16 overflow-hidden rounded-full border border-gray-300 dark:border-gray-700 bg-white/90 dark:bg-gray-800/90 shadow-sm hover:shadow-md cursor-pointer transition-shadow"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
        aria-label={`Switch to ${isEnglish ? 'Italian' : 'English'} language`}
      >
        {/* Flag colors container */}
        <motion.div 
          className="absolute inset-0 flex"
          animate={{ x: isEnglish ? '0%' : '-100%' }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {/* Union Jack */}
          <div className="flex-shrink-0 w-full h-full relative overflow-hidden">
            {/* Base blue */}
            <div className="absolute inset-0 bg-[#012169]" />
            
            {/* White diagonal stripes */}
            <div className="absolute left-0 top-0 w-[200%] h-[8px] bg-white transform -translate-y-1/2 rotate-[33deg] origin-left" />
            <div className="absolute right-0 top-0 w-[200%] h-[8px] bg-white transform -translate-y-1/2 -rotate-[33deg] origin-right" />
            <div className="absolute left-0 bottom-0 w-[200%] h-[8px] bg-white transform translate-y-1/2 -rotate-[33deg] origin-left" />
            <div className="absolute right-0 bottom-0 w-[200%] h-[8px] bg-white transform translate-y-1/2 rotate-[33deg] origin-right" />
            
            {/* Red diagonal stripes */}
            <div className="absolute left-0 top-0 w-[200%] h-[4px] bg-[#C8102E] transform -translate-y-1/2 rotate-[33deg] origin-left" />
            <div className="absolute right-0 top-0 w-[200%] h-[4px] bg-[#C8102E] transform -translate-y-1/2 -rotate-[33deg] origin-right" />
            <div className="absolute left-0 bottom-0 w-[200%] h-[4px] bg-[#C8102E] transform translate-y-1/2 -rotate-[33deg] origin-left" />
            <div className="absolute right-0 bottom-0 w-[200%] h-[4px] bg-[#C8102E] transform translate-y-1/2 rotate-[33deg] origin-right" />
            
            {/* White cross */}
            <div className="absolute left-1/2 top-0 w-[10px] h-full bg-white transform -translate-x-1/2" />
            <div className="absolute left-0 top-1/2 w-full h-[10px] bg-white transform -translate-y-1/2" />
            
            {/* Red cross */}
            <div className="absolute left-1/2 top-0 w-[6px] h-full bg-[#C8102E] transform -translate-x-1/2" />
            <div className="absolute left-0 top-1/2 w-full h-[6px] bg-[#C8102E] transform -translate-y-1/2" />
          </div>
          
          {/* Italian flag */}
          <div className="flex-shrink-0 w-full h-full flex">
            <div className="w-1/3 h-full bg-[#009246]" />
            <div className="w-1/3 h-full bg-white" />
            <div className="w-1/3 h-full bg-[#CE2B37]" />
          </div>
        </motion.div>

        {/* Language text */}
        <motion.div 
          className="absolute inset-0 flex items-center justify-center bg-black/20 dark:bg-black/40"
          animate={{ 
            opacity: 1,
            scale: 1,
            transition: { duration: 0.2 }
          }}
          initial={{ opacity: 0, scale: 0.8 }}
        >
          <span className="text-sm font-bold text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]">
            {isEnglish ? 'EN' : 'IT'}
          </span>
        </motion.div>
      </motion.button>
    </div>
  );
}
