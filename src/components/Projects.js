import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projectsData = [
  {
    id: 1,
    title: 'Nền tảng E-commerce',
    description: 'Một trang web thương mại điện tử full-stack với các tính năng như danh mục sản phẩm, giỏ hàng và xác thực người dùng.',
    tags: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    id: 2,
    title: 'Trang quản trị Dashboard',
    description: 'Bảng điều khiển phân tích dữ liệu với biểu đồ tương tác và trực quan hóa dữ liệu thời gian thực.',
    tags: ['Next.js', 'TypeScript', 'Prisma', 'Chart.js'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    id: 3,
    title: 'Ứng dụng Chat Real-time',
    description: 'Một ứng dụng nhắn tin tức thì được xây dựng bằng WebSockets để giao tiếp liền mạch và hiệu quả.',
    tags: ['React', 'Firebase', 'Framer Motion'],
    image: 'https://images.unsplash.com/photo-1584824486509-112e4181ff6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    liveUrl: '#',
    repoUrl: '#',
  },
];

const cardVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            <span className="gradient-text">Dự án của tôi</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">
            Một vài sản phẩm tiêu biểu tôi đã xây dựng và thiết kế.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.2, duration: 0.6, ease: 'easeOut' }}
              className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 flex flex-col group"
            >
              <div className="overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex-grow">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs font-medium bg-indigo-900/50 text-indigo-300 px-2.5 py-1 rounded-full">{tag}</span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold text-gray-100 mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{project.description}</p>
                </div>
                <div className="mt-6 flex items-center justify-end space-x-4">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-sm font-medium text-gray-300 hover:text-indigo-400 transition-colors duration-300">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </a>
                  <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-sm font-medium text-gray-300 hover:text-indigo-400 transition-colors duration-300">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
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
