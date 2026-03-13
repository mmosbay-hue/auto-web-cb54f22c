import React from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

export default function CTA() {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="relative text-center bg-gray-900 p-12 rounded-2xl overflow-hidden border border-gray-800"
        >
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-600/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-600/20 rounded-full blur-3xl"></div>
          
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-100 mb-4">
            Sẵn sàng cho dự án tiếp theo?
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-400 mb-8">
            Hãy cùng nhau tạo ra những sản phẩm tuyệt vời. Liên hệ với tôi để thảo luận về ý tưởng của bạn.
          </p>
          <a 
            href="mailto:example@email.com" 
            className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-500/50 transition-all duration-300 shadow-lg shadow-indigo-500/30 transform hover:scale-105"
          >
            Gửi Email <Send className="ml-2 w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}