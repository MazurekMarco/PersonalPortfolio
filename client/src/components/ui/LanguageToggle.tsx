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
        className="relative h-8 w-16 overflow-hidden rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm cursor-pointer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
        aria-label={`Switch to ${isEnglish ? 'Italian' : 'English'} language`}
      >
        {/* Italian flag colors */}
        <div className="absolute left-0 top-0 bottom-0 w-1/3 bg-green-100 dark:bg-green-900/30 opacity-40" />
        <div className="absolute left-1/3 top-0 bottom-0 w-1/3 bg-white dark:bg-white/10 opacity-40" />
        <div className="absolute left-2/3 top-0 bottom-0 w-1/3 bg-red-100 dark:bg-red-900/30 opacity-40" />

        {/* Language text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className={`text-sm font-bold ${isEnglish ? 'text-gray-400 dark:text-gray-400' : 'text-red-600 dark:text-red-400'}`}>
            {isEnglish ? 'EN' : 'IT'}
          </span>
        </div>
      </motion.button>
    </div>
  );
}
