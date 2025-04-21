import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 text-gray-600 dark:text-gray-400 py-12 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <a href="#hero" className="text-xl font-display font-bold text-primary hover:text-primary/90 transition-colors flex items-center gap-2 mb-4">
              <span className="material-icons">code</span>
              <span>Marco Mazurek</span>
            </a>
            <p className="text-gray-600 dark:text-gray-400 max-w-md">
              {t("footer.tagline")}
            </p>
          </div>
          
          <div className="flex flex-col md:items-end">
            <div className="flex gap-4 mb-4">
              <a href="#" className="h-10 w-10 rounded-full border border-gray-300 dark:border-gray-700 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-colors" aria-label="GitHub">
                <span className="material-icons text-sm">code</span>
              </a>
              <a href="#" className="h-10 w-10 rounded-full border border-gray-300 dark:border-gray-700 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-colors" aria-label="LinkedIn">
                <span className="material-icons text-sm">work</span>
              </a>
              <a href="#" className="h-10 w-10 rounded-full border border-gray-300 dark:border-gray-700 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-colors" aria-label="Twitter">
                <span className="material-icons text-sm">chat</span>
              </a>
            </div>
            <a href="mailto:mazurekmarco06@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-400 transition-colors">mazurekmarco06@gmail.com</a>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-800 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 dark:text-gray-500">
            &copy; {currentYear} Marco Mazurek. {t("footer.rights")}
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-gray-500 dark:text-gray-500 hover:text-primary dark:hover:text-primary-400 transition-colors">
              {t("footer.privacy")}
            </a>
            <a href="#" className="text-sm text-gray-500 dark:text-gray-500 hover:text-primary dark:hover:text-primary-400 transition-colors">
              {t("footer.terms")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
