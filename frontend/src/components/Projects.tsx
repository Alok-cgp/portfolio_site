import { motion } from 'motion/react';
import { Github, ExternalLink } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Hotel Booking Web App',
      description: 'Full-stack hotel booking platform built with React, Node.js, Express, and MongoDB. Implemented secure user authentication using Clerk with a hotel dashboard and booking management system. Integrated Brevo and Nodemailer for automated email notifications and designed a fully responsive UI.',
      tags: ['React', 'Node.js', 'MongoDB', 'Clerk', 'Express'],
      github: 'https://github.com/Alok-cgp/Hotel',
      demo: 'https://quickstay-omega-six.vercel.app/',
      image: '/work-1.jpg'
    },
    {
      title: 'Portfolio Website',
      description: 'Developed a responsive and dynamic personal portfolio using Next.js to showcase projects, technical skills, and achievements. Integrated Motion Dev for smooth animations and modern UI design, enhancing user interaction. Used Web3Forms for secure, serverless form submissions and optimized performance for a fast browsing experience.',
      tags: ['Next.js', 'Framer Motion', 'Web3Forms', 'TailwindCSS'],
      github: 'https://github.com/Alok-cgp/Portfolio',
      demo: 'https://portfolio-gold-two-83.vercel.app/',
      image: '/work-4.jpg'
    },
    {
      title: 'Real-Time Chat Application',
      description: 'Real-time chat app using React, Node.js, Socket.io and MongoDB. Features: Instant messaging, user authentication, online/offline status, deployed on Vercel.',
      tags: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
      github: 'https://github.com/Alok-cgp/Chat',
      demo: 'https://chat-app-vert-psi.vercel.app/login',
      image: '/work-2.jpg'
    },
    {
      title: 'Spotify Clone',
      description: 'Developed a fully responsive music streaming web application of Spotify’s core features. Implemented userfriendly UI with Tailwind CSS and React, including music playback, playlist creation, and search functionality. Focused on performance, responsive design, and smooth interactive experience',
      tags: ['React', 'TailwindCSS', 'Web Audio API'],
      github: 'https://github.com/Alok-cgp/Spotify-Clone',
      demo: 'https://spotify-clone-sooty-ten.vercel.app/',
      image: '/work-3.jpg'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48 w-full">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <Github className="w-5 h-5" /> Code
                  </a>
                  <a 
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" /> Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
