import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";
import ThemeToggle from "@/components/ui/ThemeToggle";
import LanguageToggle from "@/components/ui/LanguageToggle";
import { motion } from "framer-motion";

interface NavLinkProps {
  href: string;
  text: string;
  onClick?: () => void;
}

const NavLink = ({ href, text, onClick }: NavLinkProps) => {
  return (
    <motion.a
      href={href}
      onClick={onClick}
      className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors relative group"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {text}
      <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
    </motion.a>
  );
};

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
      "bg-white/95 dark:bg-gray-900/95 backdrop-blur-md",
      "border-b border-gray-200 dark:border-gray-800",
      isScrolled ? "shadow-sm" : ""
    )}>
      <nav className="container mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="text-xl font-display font-bold text-gray-900 dark:text-white hover:text-primary dark:hover:text-primary transition-colors flex items-center gap-2">
          <span className="material-icons text-primary">code</span>
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
          <NavLink href="#about" text={t("nav.about")} />
          <NavLink href="#skills" text={t("nav.skills")} />
          <NavLink href="#projects" text={t("nav.projects")} />
          <NavLink href="#contact" text={t("nav.contact")} />
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
      <motion.div 
        className={cn(
          "md:hidden fixed inset-x-0 top-[73px] p-4 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-800",
          "flex flex-col gap-4",
          isMenuOpen ? "block" : "hidden"
        )}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 0 : -10 }}
        transition={{ duration: 0.2 }}
      >
        <NavLink href="#about" text={t("nav.about")} onClick={closeMenu} />
        <NavLink href="#skills" text={t("nav.skills")} onClick={closeMenu} />
        <NavLink href="#projects" text={t("nav.projects")} onClick={closeMenu} />
        <NavLink href="#contact" text={t("nav.contact")} onClick={closeMenu} />
      </motion.div>
    </header>
  );
}
