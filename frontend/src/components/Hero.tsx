import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1 text-center md:text-left"
        >
          <h2 className="text-xl md:text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-2">Hello, I'm</h2>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
            Alok Kumar Shaw
          </h1>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-600 dark:text-gray-300 mb-6">
            Software Engineer & <br className="hidden sm:block" /> Frontend Developer
          </h3>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-lg mx-auto md:mx-0">
            I build modern, responsive web applications with a focus on clean code and exceptional user experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a 
              href="#contact"
              className="px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl w-full sm:w-auto"
            >
              Hire Me
            </a>
            <a 
              href="/my-resume.pdf" 
              download
              className="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 rounded-full font-medium hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors w-full sm:w-auto"
            >
              Download CV
            </a>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex-1 relative"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto">
            <div className="absolute inset-0 bg-blue-600 rounded-full opacity-20 blur-3xl animate-pulse"></div>
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-2xl">
               <img 
                 src="/user-image.jpg" 
                 alt="Alok Kumar"
                 className="object-cover w-full h-full"
               />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
