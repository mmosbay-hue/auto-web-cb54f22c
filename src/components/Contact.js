import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactInfoItem = ({ icon, title, value }) => {
  const Icon = icon;
  return (
    <motion.div 
      className="flex items-start space-x-4"
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <div className="bg-indigo-500/10 p-3 rounded-full">
        <Icon className="w-6 h-6 text-indigo-400" />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-100">{title}</h3>
        <p className="text-gray-400">{value}</p>
      </div>
    </motion.div>
  );
};

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Đang gửi...');
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setStatus('Tin nhắn đã được gửi thành công!');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(''), 3000);
    }, 2000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  return (
    <section id="contact" className="py-24 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            <span className="gradient-text">Liên hệ</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">
            Có một dự án muốn hợp tác hoặc chỉ muốn nói lời chào? Hãy liên hệ với tôi!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <motion.div 
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <ContactInfoItem icon={Mail} title="Email" value="alex.doe@email.com" />
            <ContactInfoItem icon={Phone} title="Điện thoại" value="+84 123 456 789" />
            <ContactInfoItem icon={MapPin} title="Địa chỉ" value="Hanoi, Vietnam" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <form onSubmit={handleSubmit} className="space-y-6 bg-gray-900 p-8 rounded-2xl border border-gray-800 shadow-lg shadow-indigo-500/10">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Họ và tên</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-gray-100 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300"
                  placeholder="Tên của bạn"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-gray-100 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300"
                  placeholder="email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Nội dung tin nhắn</label>
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-gray-100 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 resize-none"
                  placeholder="Hãy cho tôi biết bạn đang nghĩ gì..."
                ></textarea>
              </div>
              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-indigo-500 transition-all duration-300 group shadow-lg shadow-indigo-500/50 hover:shadow-xl hover:shadow-indigo-500/60"
                >
                  Gửi tin nhắn
                  <Send className="ml-3 -mr-1 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                </button>
                {status && <p className="text-sm text-gray-400">{status}</p>}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
