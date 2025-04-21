import { useTheme } from "@/context/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);
  
  // Prevent hydration mismatch
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  // Animation variants
  const iconContainerVariants = {
    light: {
      rotate: 0,
      scale: 1,
    },
    dark: {
      rotate: 180,
      scale: 1,
    }
  };
  
  const starsVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
  };

  const skyVariants = {
    light: { 
      background: "linear-gradient(135deg, #88c0fc 0%, #b9d8ff 100%)"
    },
    dark: { 
      background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)"
    }
  };
  
  const handleToggle = () => {
    toggleTheme();
  };

  if (!isMounted) return null;

  const isLight = theme === 'light';

  return (
    <div className="flex items-center gap-2">
      <motion.button 
        onClick={handleToggle}
        className="relative h-9 w-16 overflow-hidden rounded-full border-2 border-gray-200 dark:border-gray-700 shadow-inner cursor-pointer"
        whileHover={{ 
          scale: 1.05,
          boxShadow: isLight 
            ? '0 0 12px rgba(250, 204, 21, 0.4)' 
            : '0 0 12px rgba(59, 130, 246, 0.4)'
        }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
        aria-label={`Switch to ${isLight ? 'dark' : 'light'} mode`}
      >
        {/* Background sky that changes based on theme */}
        <motion.div 
          className="absolute inset-0 z-0"
          variants={skyVariants}
          animate={theme}
          transition={{ duration: 0.5 }}
        />
        
        {/* Stars (only visible in dark mode) */}
        <AnimatePresence>
          {!isLight && (
            <>
              <motion.div 
                className="absolute h-1 w-1 rounded-full bg-white top-1 left-2"
                initial="initial"
                animate="animate"
                exit="exit"
                variants={starsVariants}
                transition={{ duration: 0.3, delay: 0.1 }}
                style={{ boxShadow: '0 0 3px 1px rgba(255, 255, 255, 0.8)' }}
              />
              <motion.div 
                className="absolute h-0.5 w-0.5 rounded-full bg-white top-3 left-4"
                initial="initial"
                animate="animate"
                exit="exit"
                variants={starsVariants}
                transition={{ duration: 0.3, delay: 0.2 }}
                style={{ boxShadow: '0 0 2px 1px rgba(255, 255, 255, 0.6)' }}
              />
              <motion.div 
                className="absolute h-1 w-1 rounded-full bg-white top-2 right-3"
                initial="initial"
                animate="animate"
                exit="exit"
                variants={starsVariants}
                transition={{ duration: 0.3, delay: 0.15 }}
                style={{ boxShadow: '0 0 3px 1px rgba(255, 255, 255, 0.7)' }}
              />
              <motion.div 
                className="absolute h-0.5 w-0.5 rounded-full bg-white bottom-2 right-2"
                initial="initial"
                animate="animate"
                exit="exit"
                variants={starsVariants}
                transition={{ duration: 0.3, delay: 0.25 }}
                style={{ boxShadow: '0 0 2px 1px rgba(255, 255, 255, 0.6)' }}
              />
            </>
          )}
        </AnimatePresence>
        
        {/* Clouds (only visible in light mode) */}
        <AnimatePresence>
          {isLight && (
            <>
              <motion.div 
                className="absolute h-2 w-6 rounded-full bg-white/80 top-1.5 left-1"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 0.8, x: 0 }}
                exit={{ opacity: 0, x: -5 }}
                transition={{ duration: 0.4 }}
              />
              <motion.div 
                className="absolute h-2 w-4 rounded-full bg-white/70 bottom-1.5 right-1.5"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 0.7, x: 0 }}
                exit={{ opacity: 0, x: 5 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              />
            </>
          )}
        </AnimatePresence>
        
        {/* Sun/Moon Container */}
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-6 w-6 z-10"
          variants={iconContainerVariants}
          animate={theme}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
        >
          {/* Sun (front) / Moon (back) */}
          <div className="relative w-full h-full">
            {/* Sun */}
            <div className="absolute inset-0 rounded-full bg-yellow-400 flex items-center justify-center">
              <motion.div
                className="absolute w-full h-full rounded-full"
                animate={{ 
                  boxShadow: isLight 
                    ? '0 0 12px 4px rgba(250, 204, 21, 0.7)' 
                    : '0 0 0px 0px rgba(250, 204, 21, 0)'
                }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Sun rays */}
              <AnimatePresence>
                {isLight && (
                  <>
                    {[45, 90, 135, 180, 225, 270, 315, 360].map((deg, i) => (
                      <motion.div
                        key={`ray-${deg}`}
                        className="absolute w-1 h-1 bg-yellow-300"
                        style={{ 
                          transformOrigin: 'center',
                          left: '50%',
                          top: '-0.5rem',
                          marginLeft: '-0.125rem',
                          rotate: `${deg}deg`,
                        }}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ 
                          scale: [0.5, 1.2, 0.5],
                          opacity: [0.3, 1, 0.3]
                        }}
                        exit={{ scale: 0, opacity: 0 }}
                        transition={{ 
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.1,
                          ease: "easeInOut"
                        }}
                      />
                    ))}
                  </>
                )}
              </AnimatePresence>
            </div>
            
            {/* Moon Craters (visible when dark mode) */}
            <AnimatePresence>
              {!isLight && (
                <>
                  <motion.div 
                    className="absolute h-1.5 w-1.5 rounded-full bg-gray-500/30 top-1 right-1.5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.3 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  />
                  <motion.div 
                    className="absolute h-1 w-1 rounded-full bg-gray-500/30 bottom-1.5 left-1.5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.3 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2, delay: 0.1 }}
                  />
                  <motion.div 
                    className="absolute h-1.5 w-1.5 rounded-full bg-gray-500/20 top-3 left-1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.2 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2, delay: 0.05 }}
                  />
                </>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </motion.button>
    </div>
  );
}
