'use client';
import { motion } from 'motion/react';
import { Code, Database, Layout, Server } from 'lucide-react';

export default function About() {
  const skills = [
    { name: 'Frontend Development', icon: <Layout className="w-6 h-6" />, items: ['React', 'Next.js', 'TypeScript', 'TailwindCSS', 'Bootstrap'] },
    { name: 'Backend Development', icon: <Server className="w-6 h-6" />, items: ['Python', 'Java', 'C', 'Node.js', 'Express'] },
    { name: 'Tools & DevOps', icon: <Code className="w-6 h-6" />, items: ['Git', 'Docker', 'Postman', 'Vercel', 'Render'] },
    { name: 'Database', icon: <Database className="w-6 h-6" />, items: ['MySQL', 'MongoDB', 'PostgreSQL'] },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Passionate Software Engineer with expertise in building modern, responsive web applications using React, Next.js, and TypeScript. Experienced in integrating AI features and building scalable backends with Python and FastAPI.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-lg flex items-center justify-center mb-4">
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{skill.name}</h3>
              <ul className="space-y-2">
                {skill.items.map((item, idx) => (
                  <li key={idx} className="text-gray-600 dark:text-gray-400 flex items-center">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
