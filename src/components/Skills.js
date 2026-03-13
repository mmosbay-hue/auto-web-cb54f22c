import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Server, Database, Terminal, GitMerge, Figma, Wind, Smartphone, ShieldCheck } from 'lucide-react';

const skillsData = [
  { name: 'React & Next.js', icon: Code },
  { name: 'JavaScript (ES6+)', icon: Code },
  { name: 'Tailwind CSS', icon: Wind },
  { name: 'UI/UX Design', icon: Palette },
  { name: 'Figma', icon: Figma },
  { name: 'Node.js', icon: Server },
  { name: 'MongoDB', icon: Database },
  { name: 'Git & GitHub', icon: GitMerge },
  { name: 'Responsive Design', icon: Smartphone },
  { name: 'Web Security', icon: ShieldCheck },
  { name: 'CLI Tools', icon: Terminal },
];

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  return (
    <section id="skills" className="py-24 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-100">
            <span className="gradient-text">Kỹ năng & Công nghệ</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">
            Các công cụ và công nghệ tôi sử dụng để biến ý tưởng thành hiện thực.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8"
        >
          {skillsData.map((skill, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="group flex flex-col items-center p-6 bg-gray-900 rounded-xl border border-gray-800 hover:border-indigo-500/50 hover:bg-gray-800/50 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="p-4 bg-gray-800 rounded-full mb-4 group-hover:bg-indigo-600/20 transition-colors duration-300">
                <skill.icon className="w-8 h-8 text-indigo-400 group-hover:text-indigo-300 transition-colors duration-300" />
              </div>
              <p className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300 text-center">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}