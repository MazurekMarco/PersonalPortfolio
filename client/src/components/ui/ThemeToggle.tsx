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
        className="relative h-8 w-16 overflow-hidden rounded-full border border-gray-300 dark:border-gray-700 bg-white/90 dark:bg-gray-800/90 shadow-sm hover:shadow-md cursor-pointer transition-shadow"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
        aria-label={`Switch to ${isLight ? 'dark' : 'light'} mode`}
      >
        {/* Background transition */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-yellow-400/30 to-orange-300/30 dark:from-blue-900/30 dark:to-purple-900/30"
          animate={{
            opacity: [0, 1],
          }}
          transition={{ duration: 0.5 }}
        />

        {/* Sun */}
        <motion.div
          className="absolute top-1.5 left-2 h-5 w-5"
          animate={{
            scale: isLight ? 1 : 0,
            x: isLight ? 0 : 20,
          }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
        >
          <div className="absolute inset-0 rounded-full bg-yellow-400" />
          {/* Sun rays */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-yellow-400 rounded-full"
              style={{
                left: '50%',
                top: '50%',
                transform: `rotate(${i * 45}deg) translateY(-8px)`,
                transformOrigin: '50% 50%',
              }}
              animate={{ scale: [1, 1.2, 1] }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 2,
                delay: i * 0.2,
              }}
            />
          ))}
        </motion.div>

        {/* Moon */}
        <motion.div
          className="absolute top-1.5 right-2 h-5 w-5"
          animate={{
            scale: isLight ? 0 : 1,
            x: isLight ? -20 : 0,
          }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
        >
          <div className="absolute inset-0 rounded-full bg-blue-100 dark:bg-gray-100" />
          {/* Moon crater */}
          <div className="absolute top-1 right-1 h-2 w-2 rounded-full bg-blue-200/50 dark:bg-gray-300/50" />
          <div className="absolute bottom-1 left-1 h-1.5 w-1.5 rounded-full bg-blue-200/50 dark:bg-gray-300/50" />
        </motion.div>
      </motion.button>
    </div>
  );
}
