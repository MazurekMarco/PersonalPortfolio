import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

export default function Skills() {
  const { t } = useLanguage();

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

  return (
    <section id="skills" className="py-20 md:py-32 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center mb-16 max-w-2xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 bg-gradient-to-r from-primary-600 to-secondary-500 bg-clip-text text-transparent">
            {t("skills.title")}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            {t("skills.subtitle")}
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerCards}
        >
          {/* Programming Languages */}
          <motion.div 
            variants={fadeInUp}
            className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:border-primary-500/30 dark:hover:border-primary-500/30 transition duration-300"
          >
            <div className="bg-primary-500/10 rounded-full h-14 w-14 flex items-center justify-center mb-5">
              <span className="material-icons text-primary-600 dark:text-primary-400 text-2xl">code</span>
            </div>
            <h3 className="text-xl font-display font-semibold mb-6">
              {t("skills.programming.title")}
            </h3>
            
            {programmingSkills.map((skill, index) => (
              <div key={index} className={`mb-${index === programmingSkills.length - 1 ? '0' : '5'}`}>
                <div className="flex justify-between items-center mb-1">
                  <h4 className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</h4>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
                </div>
                <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-primary-600 to-secondary-500 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </motion.div>
          
          {/* Tools */}
          <motion.div 
            variants={fadeInUp}
            className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:border-primary-500/30 dark:hover:border-primary-500/30 transition duration-300"
          >
            <div className="bg-secondary-500/10 rounded-full h-14 w-14 flex items-center justify-center mb-5">
              <span className="material-icons text-secondary-600 dark:text-secondary-400 text-2xl">build</span>
            </div>
            <h3 className="text-xl font-display font-semibold mb-6">
              {t("skills.tools.title")}
            </h3>
            
            {toolSkills.map((skill, index) => (
              <div key={index} className={`mb-${index === toolSkills.length - 1 ? '0' : '5'}`}>
                <div className="flex justify-between items-center mb-1">
                  <h4 className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</h4>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
                </div>
                <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-secondary-500 to-primary-600 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </motion.div>
          
          {/* Languages */}
          <motion.div 
            variants={fadeInUp}
            className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:border-primary-500/30 dark:hover:border-primary-500/30 transition duration-300"
          >
            <div className="bg-primary-500/10 rounded-full h-14 w-14 flex items-center justify-center mb-5">
              <span className="material-icons text-primary-600 dark:text-primary-400 text-2xl">language</span>
            </div>
            <h3 className="text-xl font-display font-semibold mb-6">
              {t("skills.languages.title")}
            </h3>
            
            {languageSkills.map((skill, index) => (
              <div key={index} className="mb-5">
                <div className="flex justify-between items-center mb-1">
                  <h4 className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</h4>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{skill.label}</span>
                </div>
                <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-primary-600 to-secondary-500 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
            
            <div className="flex items-center mt-8 p-4 rounded-lg bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600">
              <span className="material-icons text-primary-500 mr-3">stars</span>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {t("skills.languages.certification")}
              </p>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Additional Skills */}
        <motion.div 
          className="mt-12 bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="text-xl font-display font-semibold mb-6">
            {t("skills.additional.title")}
          </h3>
          
          <div className="flex flex-wrap gap-3">
            {additionalSkills.map((skill, index) => (
              <span 
                key={index}
                className="px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
