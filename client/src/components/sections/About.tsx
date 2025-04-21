import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export default function About() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slideUp");
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll(".about-card");
    cards.forEach((card) => observer.observe(card));

    return () => {
      cards.forEach((card) => observer.unobserve(card));
    };
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 md:py-32 relative">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(79,70,229,0.1),transparent_50%)]"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center mb-16 max-w-2xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 bg-gradient-to-r from-primary-600 to-secondary-500 bg-clip-text text-transparent">
            {t("about.title")}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            {t("about.subtitle")}
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="relative group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-500 to-secondary-500 opacity-30 blur-xl group-hover:opacity-50 transition duration-500"></div>
            <div className="relative h-full rounded-2xl bg-white dark:bg-gray-800 p-8 shadow-xl">
              <div className="flex flex-col h-full">
                <div className="mb-6">
                  <span className="material-icons text-5xl text-primary-500 opacity-80">person</span>
                </div>
                <h3 className="text-2xl font-display font-semibold mb-4">
                  {t("about.who.title")}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {t("about.who.content")}
                </p>
                
                <div className="grid grid-cols-2 gap-4 mt-auto">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                      {t("about.location.title")}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {t("about.location.content")}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                      {t("about.role.title")}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {t("about.role.content")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUp} className="about-card relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-lg p-6 border border-gray-200 dark:border-gray-700 hover:border-primary-500/30 dark:hover:border-primary-500/30 transition duration-300">
              <div className="absolute -top-10 -left-10 w-24 h-24 rounded-full bg-primary-500/10"></div>
              <h3 className="text-xl font-display font-semibold mb-3 relative">
                {t("about.journey.title")}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 relative">
                {t("about.journey.content")}
              </p>
            </motion.div>
            
            <motion.div variants={fadeUp} className="about-card relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-lg p-6 border border-gray-200 dark:border-gray-700 hover:border-primary-500/30 dark:hover:border-primary-500/30 transition duration-300">
              <div className="absolute -bottom-10 -right-10 w-24 h-24 rounded-full bg-secondary-500/10"></div>
              <h3 className="text-xl font-display font-semibold mb-3 relative">
                {t("about.approach.title")}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 relative">
                {t("about.approach.content")}
              </p>
            </motion.div>
            
            <motion.div variants={fadeUp} className="about-card relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-lg p-6 border border-gray-200 dark:border-gray-700 hover:border-primary-500/30 dark:hover:border-primary-500/30 transition duration-300">
              <div className="absolute -top-10 -right-10 w-24 h-24 rounded-full bg-primary-500/10"></div>
              <h3 className="text-xl font-display font-semibold mb-3 relative">
                {t("about.education.title")}
              </h3>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2 relative">
                <li className="flex items-start">
                  <span className="material-icons text-primary-500 mr-2 text-sm mt-1">school</span>
                  <span>{t("about.education.items.cs")}</span>
                </li>
                <li className="flex items-start">
                  <span className="material-icons text-primary-500 mr-2 text-sm mt-1">verified</span>
                  <span>{t("about.education.items.cisco")}</span>
                </li>
                <li className="flex items-start">
                  <span className="material-icons text-primary-500 mr-2 text-sm mt-1">language</span>
                  <span>{t("about.education.items.english")}</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
