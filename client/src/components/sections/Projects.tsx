import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

export default function Projects() {
  const { t } = useLanguage();

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const staggerProjects = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  // Project placeholders (as per request)
  const projects = [
    {
      title: "projects.project1.title",
      description: "projects.project1.description",
      tags: ["React", "Tailwind"],
      image: "./project1-screenshot.png",
      link: "https://mazurekmarco.github.io/retro-arcade/"
    },
    {
      title: "projects.project2.title",
      description: "projects.project2.description",
      tags: ["Node.js", "MongoDB", "React", "TypeScript"],
      image: "./project2-screenshot.png",
      link: "https://mazurekmarco.github.io/Advanced-Schedular/"
    },
    {
      title: "projects.project3.title",
      description: "projects.project3.description",
      tags: ["Python", "Django"]
    }
  ];

  return (
    <section id="projects" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(79,70,229,0.1),transparent_50%)]"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center mb-16 max-w-2xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-gray-900 dark:text-white">
            {t("projects.title")}
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-200">
            {t("projects.subtitle")}
          </p>
        </motion.div>
        
        {/* Project Cards Container */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerProjects}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              variants={fadeInUp}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition duration-300 border border-gray-200 dark:border-gray-700 h-full flex flex-col"
            >
              <div className="relative h-48 overflow-hidden bg-gray-200 dark:bg-gray-700">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/60 to-secondary-500/60 opacity-0 group-hover:opacity-60 transition duration-300"></div>
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={t(project.title)}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="h-full bg-gray-300 dark:bg-gray-700 animate-pulse"></div>
                )}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                  {project.link ? (
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-white dark:bg-gray-900 text-primary-600 dark:text-primary-400 rounded-lg font-medium shadow-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition duration-300"
                    >
                      {t("projects.viewProject")}
                    </a>
                  ) : (
                    <button className="px-4 py-2 bg-white dark:bg-gray-900 text-primary-600 dark:text-primary-400 rounded-lg font-medium shadow-lg">
                      {t("projects.viewProject")}
                    </button>
                  )}
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-display font-semibold mb-2">
                  {t(project.title)}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex-1">
                  {t(project.description)}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Coming Soon Message */}
        <motion.div 
          className="mt-12 p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg text-center border border-gray-200 dark:border-gray-700"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-100 dark:bg-primary-900/30 rounded-full mb-6">
            <span className="material-icons text-primary-600 dark:text-primary-400 text-3xl">rocket_launch</span>
          </div>
          <h3 className="text-2xl font-display font-semibold mb-4">
            {t("projects.comingSoon.title")}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
            {t("projects.comingSoon.content")}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
