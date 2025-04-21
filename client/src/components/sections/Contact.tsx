import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formSubmitting, setFormSubmitting] = useState(false);

  const contactFormSchema = z.object({
    name: z.string().min(2, { message: t("contact.form.validation.name") }),
    email: z.string().email({ message: t("contact.form.validation.email") }),
    message: z.string().min(10, { message: t("contact.form.validation.message") }),
  });

  type ContactFormValues = z.infer<typeof contactFormSchema>;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setFormSubmitting(true);
    
    // Simulating form submission
    try {
      // In a real application, this would be an API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: t("contact.form.success.title"),
        description: t("contact.form.success.message"),
      });
      
      reset();
    } catch (error) {
      toast({
        title: t("contact.form.error.title"),
        description: t("contact.form.error.message"),
        variant: "destructive",
      });
    } finally {
      setFormSubmitting(false);
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center mb-16 max-w-2xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 bg-gradient-to-r from-primary-600 to-secondary-500 bg-clip-text text-transparent">
            {t("contact.title")}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            {t("contact.subtitle")}
          </p>
        </motion.div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 h-full">
                <h3 className="text-2xl font-display font-semibold mb-6">
                  {t("contact.info.title")}
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-primary-100 dark:bg-primary-900/30 rounded-full h-12 w-12 flex items-center justify-center mr-4 shrink-0">
                      <span className="material-icons text-primary-600 dark:text-primary-400">email</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-1">
                        {t("contact.info.email.title")}
                      </h4>
                      <a href="mailto:mazurekmarco06@gmail.com" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                        mazurekmarco06@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary-100 dark:bg-primary-900/30 rounded-full h-12 w-12 flex items-center justify-center mr-4 shrink-0">
                      <span className="material-icons text-primary-600 dark:text-primary-400">phone</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-1">
                        {t("contact.info.phone.title")}
                      </h4>
                      <a href="tel:+393911334714" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                        +39 391 133 4714
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary-100 dark:bg-primary-900/30 rounded-full h-12 w-12 flex items-center justify-center mr-4 shrink-0">
                      <span className="material-icons text-primary-600 dark:text-primary-400">location_on</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-1">
                        {t("contact.info.location.title")}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        {t("contact.info.location.content")}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Social Media Links */}
                <div className="mt-10">
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                    {t("contact.social.title")}
                  </h4>
                  <div className="flex gap-4">
                    <a href="#" className="bg-gray-100 dark:bg-gray-700 h-12 w-12 rounded-full flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-primary-500 hover:text-white dark:hover:bg-primary-500 transition-colors" aria-label="GitHub">
                      <span className="material-icons">code</span>
                    </a>
                    <a href="#" className="bg-gray-100 dark:bg-gray-700 h-12 w-12 rounded-full flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-primary-500 hover:text-white dark:hover:bg-primary-500 transition-colors" aria-label="LinkedIn">
                      <span className="material-icons">work</span>
                    </a>
                    <a href="#" className="bg-gray-100 dark:bg-gray-700 h-12 w-12 rounded-full flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-primary-500 hover:text-white dark:hover:bg-primary-500 transition-colors" aria-label="Twitter">
                      <span className="material-icons">chat</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700"
            >
              <h3 className="text-2xl font-display font-semibold mb-6">
                {t("contact.form.title")}
              </h3>
              
              <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    {t("contact.form.name")}
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    {...register("name")}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 outline-none transition-colors"
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    {t("contact.form.email")}
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    {...register("email")}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 outline-none transition-colors"
                    placeholder="johndoe@example.com" 
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    {t("contact.form.message")}
                  </label>
                  <textarea 
                    id="message" 
                    {...register("message")}
                    rows={5} 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 outline-none transition-colors"
                    placeholder={t("contact.form.messagePlaceholder")}
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
                  )}
                </div>
                
                <button 
                  type="submit"
                  disabled={formSubmitting}
                  className="w-full px-6 py-3 rounded-lg bg-primary-600 hover:bg-primary-700 text-white font-medium shadow-md hover:shadow-xl hover:shadow-primary-500/20 transition duration-300 flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  <span className="material-icons text-sm">send</span>
                  <span>{formSubmitting ? t("contact.form.sending") : t("contact.form.send")}</span>
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
