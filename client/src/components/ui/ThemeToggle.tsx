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
      <button 
        onClick={toggleTheme}
        className="relative h-8 w-16 overflow-hidden rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm cursor-pointer"
        aria-label={`Switch to ${isLight ? 'dark' : 'light'} mode`}
      >
        {/* Sun element (positioned on the right) */}
        <div className="absolute top-1.5 right-2.5 h-5 w-5 rounded-full bg-yellow-400" />
      </button>
    </div>
  );
}
