import { useTheme } from "@/context/ThemeContext";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);
  
  // Prevent hydration mismatch
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  const isLight = theme === 'light';

  return (
    <div className="flex items-center gap-2">
      <motion.button 
        onClick={toggleTheme}
        className="relative h-8 w-16 overflow-hidden rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm cursor-pointer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
        aria-label={`Switch to ${isLight ? 'dark' : 'light'} mode`}
      >
        {/* The circle thumb that slides */}
        <motion.div 
          className="absolute top-1 h-6 w-6 rounded-full bg-white dark:bg-gray-700 shadow-sm"
          animate={{ 
            right: isLight ? '1.5rem' : '0.25rem',
            backgroundColor: isLight ? 'white' : '#1f2937'
          }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
        
        {/* Sun element (only visible in light mode) */}
        <motion.div
          className="absolute top-1.5 right-2 h-5 w-5 rounded-full bg-yellow-400"
          animate={{
            opacity: isLight ? 1 : 0,
            boxShadow: isLight ? '0 0 6px 2px rgba(250, 204, 21, 0.3)' : 'none'
          }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Moon element (only visible in dark mode) */}
        <motion.div
          className="absolute top-1.5 left-2 h-5 w-5 rounded-full bg-blue-400"
          animate={{
            opacity: isLight ? 0 : 1,
            boxShadow: !isLight ? '0 0 6px 2px rgba(96, 165, 250, 0.3)' : 'none'
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.button>
    </div>
  );
}
