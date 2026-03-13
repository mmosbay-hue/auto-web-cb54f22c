import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, ArrowRight } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  return (
    <section id="home" className="relative pt-32 pb-24 md:pt-48 md:pb-32">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-900/50 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-900/50 rounded-full blur-3xl opacity-30 animate-pulse animation-delay-4000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <div className="text-center md:text-left">
            <motion.p variants={itemVariants} className="text-lg text-indigo-400 font-medium mb-2">Xin chào, tôi là</motion.p>
            <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-extrabold text-gray-100 tracking-tight mb-4">
              Alex Doe
            </motion.h1>
            <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Creative Developer</span>
            </motion.h2>
            <motion.p variants={itemVariants} className="max-w-xl mx-auto md:mx-0 text-lg text-gray-400 mb-8">
              Tôi đam mê xây dựng những trải nghiệm web đẹp mắt, trực quan và hiệu quả. Chuyên về React, UI/UX và thiết kế hiện đại.
            </motion.p>
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="#projects" className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-500/50 transition-all duration-300 shadow-lg shadow-indigo-500/30">
                Xem dự án <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a href="#" className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-gray-200 bg-gray-800/60 rounded-lg hover:bg-gray-700/80 focus:ring-4 focus:ring-gray-600/50 transition-all duration-300">
                Tải CV
              </a>
            </motion.div>
            <motion.div variants={itemVariants} className="mt-12 flex justify-center md:justify-start space-x-6">
              <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors"><Github size={28} /></a>
              <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors"><Linkedin size={28} /></a>
              <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors"><Twitter size={28} /></a>
            </motion.div>
          </div>
          
          <motion.div 
            variants={itemVariants}
            className="relative flex justify-center"
          >
            <div className="absolute w-full h-full bg-indigo-500/30 rounded-full blur-3xl"></div>
            <motion.img 
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Alex Doe Portrait" 
              className="relative w-80 h-80 md:w-96 md:h-96 rounded-full object-cover border-4 border-gray-800 shadow-2xl"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}