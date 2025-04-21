import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";
import ThemeToggle from "@/components/ui/ThemeToggle";
import LanguageToggle from "@/components/ui/LanguageToggle";

export default function Navbar() {
  const { t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-colors duration-300",
      "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md",
      "shadow-sm dark:shadow-gray-800/10",
      isScrolled ? "shadow-md" : ""
    )}>
      <nav className="container mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="text-xl font-display font-bold text-primary-600 dark:text-primary-500 flex items-center gap-2">
          <span className="material-icons animate-float">code</span>
          <span>MM</span>
        </a>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden flex items-center text-gray-700 dark:text-gray-300 focus:outline-none"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          <span className="material-icons">{isMenuOpen ? "close" : "menu"}</span>
        </button>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <a href="#about" className="text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-500 transition-colors">
            {t("nav.about")}
          </a>
          <a href="#skills" className="text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-500 transition-colors">
            {t("nav.skills")}
          </a>
          <a href="#projects" className="text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-500 transition-colors">
            {t("nav.projects")}
          </a>
          <a href="#contact" className="text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-500 transition-colors">
            {t("nav.contact")}
          </a>
        </div>
        
        {/* Settings */}
        <div className="flex items-center gap-4">
          {/* Language Toggle */}
          <LanguageToggle />
          
          {/* Theme Toggle */}
          <ThemeToggle />
        </div>
      </nav>
      
      {/* Mobile Menu */}
      <div className={cn(
        "md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 shadow-lg",
        isMenuOpen ? "block" : "hidden"
      )}>
        <div className="container mx-auto px-4 py-3 flex flex-col space-y-4">
          <a href="#about" 
            className="py-2 text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-500 transition-colors" 
            onClick={closeMenu}
          >
            {t("nav.about")}
          </a>
          <a href="#skills" 
            className="py-2 text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-500 transition-colors" 
            onClick={closeMenu}
          >
            {t("nav.skills")}
          </a>
          <a href="#projects" 
            className="py-2 text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-500 transition-colors" 
            onClick={closeMenu}
          >
            {t("nav.projects")}
          </a>
          <a href="#contact" 
            className="py-2 text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-500 transition-colors" 
            onClick={closeMenu}
          >
            {t("nav.contact")}
          </a>
        </div>
      </div>
    </header>
  );
}
