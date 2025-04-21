import { useTheme } from "@/context/ThemeContext";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex items-center gap-2">
      <button 
        onClick={toggleTheme}
        className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200 dark:bg-gray-700 transition-colors"
        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      >
        <motion.span 
          className="inline-block h-4 w-4 transform rounded-full bg-primary-600 transition-transform"
          animate={{ x: theme === 'light' ? 4 : 24 }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
        <span className="material-icons absolute left-1 text-xs text-white">light_mode</span>
        <span className="material-icons absolute right-1 text-xs text-white">dark_mode</span>
      </button>
    </div>
  );
}
