import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

export default function Hero() {
  const { t } = useLanguage();

  const handleDownloadCV = () => {
    // This will work on both local development and GitHub Pages
    window.open('/cv.pdf', '_blank');
  };

  return (
    <section id="hero" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(79,70,229,0.15),transparent_50%)]"></div>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.15),transparent_50%)]"></div>
      
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="order-2 md:order-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6">
              <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm">
                {t("hero.role")}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 dark:text-white">
                Marco Mazurek
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-200">
                {t("hero.tagline")}
              </p>
              
              <div className="relative">
                <p className="text-lg md:text-xl italic text-gray-600 dark:text-gray-300 border-l-4 border-primary pl-4 py-2 max-w-lg">
                  {t("hero.quote")}
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <a 
                  href="#contact" 
                  className="px-6 py-3 rounded-lg bg-primary hover:bg-primary/90 text-white font-medium shadow-md hover:shadow-xl hover:shadow-primary/20 transition duration-300 flex items-center gap-2"
                >
                  <span className="material-icons text-sm">mail</span>
                  <span>{t("hero.contact")}</span>
                </a>
                <a 
                  href="#projects" 
                  className="px-6 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 hover:border-primary dark:hover:border-primary text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary font-medium transition duration-300 flex items-center gap-2"
                >
                  <span className="material-icons text-sm">work</span>
                  <span>{t("hero.projects")}</span>
                </a>
                <button
                  onClick={handleDownloadCV}
                  className="px-6 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 hover:border-primary dark:hover:border-primary text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary font-medium transition duration-300 flex items-center gap-2"
                >
                  <span className="material-icons text-sm">download</span>
                  <span>{t("hero.downloadCV")}</span>
                </button>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="order-1 md:order-2 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 animate-float">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-secondary opacity-20 blur-3xl animate-pulse"></div>
              <div className="absolute inset-0 flex items-center justify-center text-8xl font-display font-bold text-gray-900/10 dark:text-white/10">MM</div>
              <div className="absolute inset-8 rounded-full border-4 border-dashed border-primary/30 animate-spin" style={{ animationDuration: '20s' }}></div>
              <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-primary animate-glow flex items-center justify-center">
                <span className="material-icons text-white">code</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 rounded-full bg-secondary animate-glow flex items-center justify-center">
                <span className="material-icons text-white">language</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
