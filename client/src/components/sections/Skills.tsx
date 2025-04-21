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
        whileHover={{ scale: 1.02 }}
      >
        <div className="flex justify-between items-center mb-1.5">
          <motion.h4 
            className="text-gray-700 dark:text-gray-200 font-medium flex items-center gap-1.5"
            whileHover={{ x: 3 }}
            transition={{ duration: 0.2 }}
          >
            {colorScheme === "primary" ? (
              <span className="h-2.5 w-2.5 rounded-full bg-primary-500 dark:bg-primary-400 inline-block flex-shrink-0 ring-2 ring-primary-500/10 dark:ring-primary-400/20"></span>
            ) : (
              <span className="h-2.5 w-2.5 rounded-full bg-secondary-500 dark:bg-secondary-400 inline-block flex-shrink-0 ring-2 ring-secondary-500/10 dark:ring-secondary-400/20"></span>
            )}
            {skill.name}
          </motion.h4>
          <motion.div
            className="relative"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ 
              duration: 0.3, 
              delay: 1.2 + (index * 0.1)
            }}
          >
            <motion.span 
              className="text-sm font-medium relative z-10"
              style={{ 
                color: colorScheme === "primary" ? "var(--primary)" : "var(--secondary)",
              }}
              whileHover={{
                textShadow: "0 0 8px rgba(79, 70, 229, 0.5)",
                transition: { duration: 0.2 }
              }}
            >
              {skill.label || `${skill.level}%`}
            </motion.span>
            <motion.span 
              className="absolute -inset-1 rounded-full bg-gray-100 dark:bg-gray-700/30 -z-10"
              initial={{ scale: 0 }}
              whileHover={{ scale: 1 }}
              transition={{ duration: 0.2 }}
            />
          </motion.div>
        </div>
        
        <div className="relative">
          {/* Outer container with scale effect */}
          <motion.div 
            className="h-3 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden shadow-inner relative border border-gray-300/10 dark:border-gray-600/50"
            whileHover={{ 
              height: "14px",
              transition: { duration: 0.2 }
            }}
          >
            {/* Progress fill */}
            <motion.div 
              className={`h-full rounded-full ${
                colorScheme === "primary" 
                  ? "bg-gradient-to-r from-primary-600 to-secondary-500 dark:from-primary-500 dark:to-secondary-400" 
                  : "bg-gradient-to-r from-secondary-500 to-primary-600 dark:from-secondary-500 dark:to-primary-400"
              }`}
              initial={{ width: "0%" }}
              animate={isVisible ? { width: `${skill.level}%` } : { width: "0%" }}
              transition={{ 
                duration: 0.8, 
                delay: 0.8 + (index * 0.1), 
                ease: "easeOut"
              }}
              style={{
                boxShadow: `0 0 10px ${colorScheme === "primary" ? "rgba(79, 70, 229, 0.5)" : "rgba(59, 130, 246, 0.5)"}`
              }}
            >
              {/* Animated shine effect */}
              <motion.div 
                className="absolute top-0 bottom-0 left-0 w-20 bg-white/20 dark:bg-white/30 skew-x-[30deg]"
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
            
            {/* Animated dots at high percentages */}
            {skill.level >= 85 && (
              <motion.div 
                className="absolute right-1 top-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-white/90 dark:bg-white ring-2 ring-white/30"
                animate={{ 
                  opacity: [0.7, 1, 0.7],
                  scale: [0.8, 1.2, 0.8]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            )}
          </motion.div>
          
          {/* Small markers */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none flex justify-between px-[24.5%]">
            {[25, 50, 75].map((mark) => (
              <div 
                key={mark}
                className="relative h-full"
              >
                <div className="absolute top-0 bottom-0 w-[2px] bg-gray-300/40 dark:bg-gray-500/60"
                     style={{ left: 0 }} />
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 text-[8px] font-medium text-gray-400 dark:text-gray-500 hidden md:block">
                  {mark}%
                </div>
              </div>
            ))}
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
    <section id="skills" ref={sectionRef} className="py-20 md:py-32 bg-gray-50 dark:bg-gray-800/50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-1/4 left-0 w-64 h-64 bg-primary-500 rounded-full filter blur-[100px] opacity-5 dark:opacity-10"
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
          className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary-500 rounded-full filter blur-[120px] opacity-5 dark:opacity-10"
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
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 bg-gradient-to-r from-primary-600 to-secondary-500 bg-clip-text text-transparent">
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
            className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 
                     dark:border-gray-700 hover:border-primary-500/30 dark:hover:border-primary-500/30 
                     hover:shadow-xl transition duration-500 group relative"
          >
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-primary-700/5 dark:from-primary-500/10 dark:to-primary-700/10 
                      rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />
            
            <motion.div 
              className="bg-primary-500/10 rounded-full h-14 w-14 flex items-center justify-center mb-5 
                       group-hover:bg-primary-500/20 transition duration-300"
              whileHover={{ 
                scale: 1.05,
                rotate: 5,
                transition: { duration: 0.2 }
              }}
            >
              <span className="material-icons text-primary-600 dark:text-primary-400 text-2xl group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors">code</span>
            </motion.div>
            
            <h3 className="text-xl font-display font-semibold mb-6 text-gray-800 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
              {t("skills.programming.title")}
            </h3>
            
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
            className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 
                     dark:border-gray-700 hover:border-secondary-500/30 dark:hover:border-secondary-500/30 
                     hover:shadow-xl transition duration-500 group relative"
          >
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-secondary-500/5 to-secondary-700/5 dark:from-secondary-500/10 dark:to-secondary-700/10 
                      rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />
            
            <motion.div 
              className="bg-secondary-500/10 rounded-full h-14 w-14 flex items-center justify-center mb-5 
                       group-hover:bg-secondary-500/20 transition duration-300"
              whileHover={{ 
                scale: 1.05,
                rotate: -5,
                transition: { duration: 0.2 }
              }}
            >
              <span className="material-icons text-secondary-600 dark:text-secondary-400 text-2xl group-hover:text-secondary-700 dark:group-hover:text-secondary-300 transition-colors">build</span>
            </motion.div>
            
            <h3 className="text-xl font-display font-semibold mb-6 text-gray-800 dark:text-white group-hover:text-secondary-600 dark:group-hover:text-secondary-400 transition-colors">
              {t("skills.tools.title")}
            </h3>
            
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
            className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 
                     dark:border-gray-700 hover:border-primary-500/30 dark:hover:border-primary-500/30 
                     hover:shadow-xl transition duration-500 group relative"
          >
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 dark:from-primary-500/10 dark:to-secondary-500/10 
                      rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />
            
            <motion.div 
              className="bg-primary-500/10 rounded-full h-14 w-14 flex items-center justify-center mb-5 
                       group-hover:bg-primary-500/20 transition duration-300"
              whileHover={{ 
                scale: 1.05,
                rotate: 5,
                transition: { duration: 0.2 }
              }}
            >
              <span className="material-icons text-primary-600 dark:text-primary-400 text-2xl group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors">language</span>
            </motion.div>
            
            <h3 className="text-xl font-display font-semibold mb-6 text-gray-800 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
              {t("skills.languages.title")}
            </h3>
            
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
              className="flex items-center mt-8 p-4 rounded-lg bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600
                       group-hover:border-primary-500/20 dark:group-hover:border-primary-500/20 transition-colors"
              initial={{ opacity: 0, y: 10 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ 
                duration: 0.5, 
                delay: 1.4,
                ease: "easeOut"
              }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 4px 12px rgba(79, 70, 229, 0.1)",
                transition: { duration: 0.2 }
              }}
            >
              <motion.span 
                className="material-icons text-primary-500 mr-3"
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
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {t("skills.languages.certification")}
              </p>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Additional Skills */}
        <motion.div 
          className="mt-12 bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700
                   hover:border-primary-500/20 dark:hover:border-primary-500/20 hover:shadow-xl transition duration-500"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ 
            duration: 0.6, 
            delay: 1,
            ease: "easeOut" 
          }}
        >
          <h3 className="text-xl font-display font-semibold mb-8 bg-gradient-to-r from-primary-600 to-secondary-500 bg-clip-text text-transparent">
            {t("skills.additional.title")}
          </h3>
          
          <div className="flex flex-wrap gap-3">
            {additionalSkills.map((skill, index) => (
              <AnimatedSkillTag key={index} skill={skill} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
