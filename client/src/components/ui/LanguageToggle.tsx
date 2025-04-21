import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2">
      <button 
        onClick={toggleLanguage}
        className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200 dark:bg-gray-700 transition-colors"
        aria-label={`Switch to ${language === 'en' ? 'Italian' : 'English'} language`}
      >
        <motion.span 
          className="inline-block h-4 w-4 transform rounded-full bg-primary-600 transition-transform"
          animate={{ x: language === 'en' ? 4 : 24 }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
        <span className="absolute left-1 text-xs font-semibold text-white">
          {language.toUpperCase()}
        </span>
      </button>
    </div>
  );
}
