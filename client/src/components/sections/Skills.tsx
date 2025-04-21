import { useLanguage } from "@/context/LanguageContext";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Skills() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isInView) {
      setIsVisible(true);
    }
  }, [isInView]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const staggerCards = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const programmingSkills = [
    { name: "HTML/CSS", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "Python", level: 70 },
    { name: "Java", level: 65 }
  ];

  const toolSkills = [
    { name: "Git/GitHub", level: 80 },
    { name: "VS Code", level: 90 },
    { name: "Figma", level: 75 },
    { name: "Docker", level: 60 }
  ];

  const languageSkills = [
    { name: t("skills.languages.italian"), level: 100, label: t("skills.languages.native") },
    { name: t("skills.languages.english"), level: 95, label: t("skills.languages.bilingual") }
  ];

  const additionalSkills = [
    "React", "Node.js", "Tailwind CSS", "Responsive Design", 
    "Cybersecurity", "Web Accessibility", "UI/UX Design", "MongoDB"
  ];

  // Define a component for animated skill bar
  const AnimatedSkillBar = ({ skill, index, totalSkills, colorScheme = "primary" }: { 
    skill: { name: string; level: number; label?: string; }, 
    index: number, 
    totalSkills: number,
    colorScheme?: "primary" | "secondary"
  }) => {
    return (
      <motion.div 
        key={index} 
        className={`mb-${index === totalSkills - 1 ? '0' : '5'}`}
        initial={{ opacity: 0, y: 10 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ 
          duration: 0.3, 
          delay: 0.6 + (index * 0.1), 
          ease: "easeOut"
        }}
      >
        <div className="flex items-center justify-between mb-2">
          <motion.h4 
            className="text-gray-700 dark:text-gray-300 font-medium flex items-center gap-1.5"
          >
            <span className="h-2 w-2 rounded-full bg-blue-400 inline-block flex-shrink-0"></span>
            {skill.name}
          </motion.h4>
          
          {/* Percentage text */}
          <div 
            className="text-sm text-gray-700 dark:text-white font-medium opacity-80"
          >
            {skill.label || `${skill.level}%`}
          </div>
        </div>
        
        <div className="relative group">
          {/* Bar track */}
          <div className="h-1.5 bg-gray-300 dark:bg-gray-700 rounded-full overflow-hidden relative">
            {/* Progress fill */}
            <motion.div 
              className="h-full rounded-full bg-blue-500 dark:bg-blue-400"
              initial={{ width: "0%" }}
              animate={isVisible ? { width: `${skill.level}%` } : { width: "0%" }}
              transition={{ 
                duration: 0.8, 
                delay: 0.8 + (index * 0.1), 
                ease: "easeOut"
              }}
            >
              {/* Animated shine effect */}
              <motion.div 
                className="absolute top-0 bottom-0 left-0 w-16 bg-white/20 skew-x-[30deg]"
                animate={{ 
                  x: ["0%", "100%"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: index + 2,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    );
  };

  // Define a component for animated skill tag
  const AnimatedSkillTag = ({ skill, index }: { skill: string, index: number }) => {
    return (
      <motion.span 
        key={index}
        className="px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 
                dark:text-primary-300 text-sm font-medium border border-transparent group relative overflow-hidden"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ 
          duration: 0.3, 
          delay: 1.2 + (index * 0.05),
          ease: "easeOut"
        }}
        whileHover={{ 
          scale: 1.05, 
          backgroundColor: 'rgba(79, 70, 229, 0.2)', 
          border: '1px solid rgba(79, 70, 229, 0.3)',
          transition: { duration: 0.2 }
        }}
      >
        <motion.span
          className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-full"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
        <span className="relative z-10">{skill}</span>
      </motion.span>
    );
  };

  // Card animations
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.6, 
        delay: custom * 0.2,
        ease: "easeOut"
      }
    })
  };

  return (
    <section id="skills" ref={sectionRef} className="py-20 md:py-32 bg-gray-100 dark:bg-gray-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-1/4 left-0 w-64 h-64 bg-blue-500 rounded-full filter blur-[100px] opacity-5 dark:opacity-5"
          animate={{ 
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ 
            repeat: Infinity,
            duration: 15,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-700 rounded-full filter blur-[120px] opacity-5 dark:opacity-5"
          animate={{ 
            x: [0, -70, 0],
            y: [0, -40, 0],
          }}
          transition={{ 
            repeat: Infinity,
            duration: 20,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          className="text-center mb-16 max-w-2xl mx-auto"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { 
              opacity: 1, 
              y: 0,
              transition: { duration: 0.6 }
            }
          }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-gray-800 dark:text-white">
            {t("skills.title")}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            {t("skills.subtitle")}
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Programming Languages */}
          <motion.div 
            custom={0}
            variants={cardVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg border border-gray-200 dark:border-gray-800
                     transition duration-500 group relative"
          >
            <div className="flex items-center mb-5">
              <span className="material-icons text-blue-500 dark:text-blue-400 text-2xl mr-3">code</span>
              <h3 className="text-xl font-display font-semibold text-gray-800 dark:text-white">
                {t("skills.programming.title")}
              </h3>
            </div>
            
            {programmingSkills.map((skill, index) => (
              <AnimatedSkillBar 
                key={index}
                skill={skill} 
                index={index} 
                totalSkills={programmingSkills.length} 
                colorScheme="primary"
              />
            ))}
          </motion.div>
          
          {/* Tools */}
          <motion.div 
            custom={1}
            variants={cardVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg border border-gray-200 dark:border-gray-800
                     transition duration-500 group relative"
          >
            <div className="flex items-center mb-5">
              <span className="material-icons text-blue-500 dark:text-blue-400 text-2xl mr-3">build</span>
              <h3 className="text-xl font-display font-semibold text-gray-800 dark:text-white">
                {t("skills.tools.title")}
              </h3>
            </div>
            
            {toolSkills.map((skill, index) => (
              <AnimatedSkillBar 
                key={index}
                skill={skill} 
                index={index} 
                totalSkills={toolSkills.length} 
                colorScheme="secondary"
              />
            ))}
          </motion.div>
          
          {/* Languages */}
          <motion.div 
            custom={2}
            variants={cardVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg border border-gray-200 dark:border-gray-800
                     transition duration-500 group relative"
          >
            <div className="flex items-center mb-5">
              <span className="material-icons text-blue-500 dark:text-blue-400 text-2xl mr-3">language</span>
              <h3 className="text-xl font-display font-semibold text-gray-800 dark:text-white">
                {t("skills.languages.title")}
              </h3>
            </div>
            
            {languageSkills.map((skill, index) => (
              <AnimatedSkillBar 
                key={index}
                skill={skill} 
                index={index} 
                totalSkills={languageSkills.length} 
                colorScheme="primary"
              />
            ))}
            
            <motion.div 
              className="flex items-center mt-8 p-4 rounded-lg bg-gray-100 dark:bg-gray-800/70 border border-gray-300 dark:border-gray-700"
              initial={{ opacity: 0, y: 10 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ 
                duration: 0.5, 
                delay: 1.4,
                ease: "easeOut"
              }}
            >
              <motion.span 
                className="material-icons text-blue-500 dark:text-blue-400 mr-3"
                animate={{ 
                  rotate: [0, 10, 0, -10, 0],
                  scale: [1, 1.1, 1, 1.1, 1],
                }}
                transition={{ 
                  repeat: Infinity,
                  repeatDelay: 2,
                  duration: 1.5
                }}
              >
                stars
              </motion.span>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                {t("skills.languages.certification")}
              </p>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Additional Skills */}
        <motion.div 
          className="mt-12 bg-white dark:bg-gray-900 rounded-lg p-8 shadow-lg border border-gray-200 dark:border-gray-800"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ 
            duration: 0.6, 
            delay: 1,
            ease: "easeOut" 
          }}
        >
          <div className="flex flex-wrap gap-4 justify-center">
            {additionalSkills.map((skill, index) => (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ 
                  duration: 0.3, 
                  delay: 1.2 + (index * 0.05),
                  type: "spring",
                  stiffness: 260,
                  damping: 20
                }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Background glow effect on hover */}
                <motion.div 
                  className="absolute inset-0 bg-blue-500/10 dark:bg-blue-500/20 rounded-md filter blur-sm"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />
                
                {/* Pill background */}
                <div className="px-5 py-2.5 rounded-md bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 border border-gray-300 dark:border-gray-700 relative z-10 overflow-hidden shadow-sm">
                  {/* Animated shine effect */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 dark:via-white/10 to-transparent skew-x-[45deg] opacity-0"
                    animate={{ 
                      x: ["calc(-100% - 100px)", "calc(100% + 100px)"],
                      opacity: [0, 0.4, 0], 
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatDelay: 5 + (index * 0.8),
                      ease: "easeInOut",
                    }}
                  />
                  
                  {/* Text content */}
                  <span className="text-gray-800 dark:text-gray-200 font-medium relative z-10">{skill}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
