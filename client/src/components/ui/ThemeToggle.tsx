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
  
  // Animation variants
  const sunVariants = {
    initial: { scale: 0.6, rotate: 0 },
    animate: { scale: 1, rotate: theme === 'light' ? 0 : 180 },
    whileTap: { scale: 0.95, rotate: theme === 'light' ? 15 : 195 }
  };
  
  const moonVariants = {
    initial: { scale: 0.6, rotate: 0 },
    animate: { scale: 1, rotate: theme === 'dark' ? 0 : -180 },
    whileTap: { scale: 0.95, rotate: theme === 'dark' ? -15 : -195 }
  };
  
  const toggleVariants = {
    light: { backgroundColor: 'rgb(229, 231, 235)' },
    dark: { backgroundColor: 'rgb(55, 65, 81)' }
  };
  
  const handleToggle = () => {
    toggleTheme();
  };

  if (!isMounted) return null;

  return (
    <div className="flex items-center gap-2">
      <motion.button 
        onClick={handleToggle}
        className="relative inline-flex h-7 w-14 items-center justify-between rounded-full px-1 shadow-inner"
        animate={theme}
        variants={toggleVariants}
        whileHover={{ boxShadow: '0 0 8px rgba(79, 70, 229, 0.5)' }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      >
        <motion.div 
          className="absolute top-0.5 bottom-0.5 left-0.5 right-0.5 z-0 rounded-full 
                   bg-gradient-to-r from-primary-200 to-secondary-200 
                   dark:from-primary-900 dark:to-secondary-900 opacity-50"
          initial={false}
          animate={{
            x: theme === 'light' ? 0 : '100%',
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{ 
            x: { type: "spring", stiffness: 300, damping: 25 },
            opacity: { repeat: Infinity, duration: 3, ease: "easeInOut" }
          }}
        />

        <motion.div
          className="relative z-10 flex h-5 w-5 items-center justify-center rounded-full 
                   text-yellow-400 bg-yellow-100 shadow-md"
          initial="initial"
          animate="animate"
          whileTap="whileTap"
          variants={sunVariants}
          transition={{ type: "spring", stiffness: 500, damping: 25 }}
          style={{ opacity: theme === 'light' ? 1 : 0.4, boxShadow: theme === 'light' ? '0 0 8px rgba(250, 204, 21, 0.7)' : 'none' }}
        >
          <span className="material-icons text-xs">light_mode</span>
        </motion.div>

        <motion.div
          className="relative z-10 flex h-5 w-5 items-center justify-center rounded-full 
                   text-blue-300 bg-blue-900 shadow-md"
          initial="initial"
          animate="animate"
          whileTap="whileTap"
          variants={moonVariants}
          transition={{ type: "spring", stiffness: 500, damping: 25 }}
          style={{ opacity: theme === 'dark' ? 1 : 0.4, boxShadow: theme === 'dark' ? '0 0 8px rgba(96, 165, 250, 0.7)' : 'none' }}
        >
          <span className="material-icons text-xs">dark_mode</span>
        </motion.div>
      </motion.button>
    </div>
  );
}
