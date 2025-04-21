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

function NavLink({ href, text, onClick }: NavLinkProps) {
  return (
    <motion.div className="relative px-1 py-0.5 overflow-hidden group">
      <motion.a 
        href={href}
        onClick={onClick}
        className="relative text-gray-600 dark:text-gray-300 font-medium transition-colors z-10"
        whileHover="hover"
      >
        {text}
        
        {/* Underline effect */}
        <motion.span 
          className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full origin-left z-0"
          initial={{ scaleX: 0 }}
          variants={{
            hover: { 
              scaleX: 1,
              transition: { duration: 0.3, ease: "easeOut" }
            }
          }}
        />
        
        {/* Background glow effect */}
        <motion.span 
          className="absolute bottom-0 left-0 right-0 h-full bg-primary-500/10 dark:bg-primary-500/20 rounded-md -z-10"
          initial={{ opacity: 0, y: 10 }}
          variants={{
            hover: { 
              opacity: 1, 
              y: 0,
              transition: { duration: 0.2 }
            }
          }}
        />
        
        {/* Text effect */}
        <motion.span 
          className="absolute inset-0 flex items-center justify-center text-primary-600 dark:text-primary-400 font-medium opacity-0 z-10"
          initial={{ opacity: 0 }}
          variants={{
            hover: { 
              opacity: 1,
              transition: { duration: 0.2 } 
            }
          }}
        >
          {text}
        </motion.span>
      </motion.a>
    </motion.div>
  );
}

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
          "md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 shadow-lg",
          isMenuOpen ? "block" : "hidden"
        )}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 0 : -10 }}
        transition={{ duration: 0.2 }}
      >
        <div className="container mx-auto px-4 py-3 flex flex-col space-y-4">
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <NavLink href="#about" text={t("nav.about")} onClick={closeMenu} />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <NavLink href="#skills" text={t("nav.skills")} onClick={closeMenu} />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <NavLink href="#projects" text={t("nav.projects")} onClick={closeMenu} />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            <NavLink href="#contact" text={t("nav.contact")} onClick={closeMenu} />
          </motion.div>
        </div>
      </motion.div>
    </header>
  );
}
