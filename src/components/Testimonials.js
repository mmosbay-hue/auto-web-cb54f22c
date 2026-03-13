import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonialsData = [
  {
    quote: 'Làm việc với Alex là một trải nghiệm tuyệt vời. Anh ấy không chỉ có kỹ năng chuyên môn cao mà còn rất sáng tạo và luôn đưa ra những giải pháp vượt ngoài mong đợi. Dự án của chúng tôi đã thành công rực rỡ nhờ có sự đóng góp của anh ấy.',
    name: 'Trần Minh Anh',
    title: 'Giám đốc Marketing, TechCorp',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    quote: 'Khả năng biến những ý tưởng phức tạp thành giao diện người dùng trực quan và đẹp mắt của Alex thật đáng kinh ngạc. Anh ấy luôn lắng nghe phản hồi và hợp tác chặt chẽ với đội ngũ để đảm bảo sản phẩm cuối cùng hoàn hảo.',
    name: 'Lê Thị Bích Hằng',
    title: 'Trưởng phòng Sản phẩm, InnovateX',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    quote: 'Tôi thực sự ấn tượng với sự chuyên nghiệp và tốc độ làm việc của Alex. Anh ấy đã giao sản phẩm đúng hạn với chất lượng vượt trội. Chắc chắn sẽ tiếp tục hợp tác trong các dự án tương lai.',
    name: 'Phạm Văn Cường',
    title: 'CEO, Startup Solutions',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
];

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction < 0 ? '100%' : '-100%',
    opacity: 0,
  }),
};

export default function Testimonials() {
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection) => {
    let newPage = page + newDirection;
    if (newPage < 0) {
      newPage = testimonialsData.length - 1;
    } else if (newPage >= testimonialsData.length) {
      newPage = 0;
    }
    setPage([newPage, newDirection]);
  };

  const testimonial = testimonialsData[page];

  return (
    <section id="testimonials" className="py-24 bg-gray-900 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
           <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            <span className="gradient-text">Khách hàng</span> nói gì về tôi
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-400">
            Những lời nhận xét chân thực từ các đối tác và khách hàng đã cùng tôi tạo nên thành công.
          </p>
        </div>
        <div className="relative mt-16 max-w-3xl mx-auto h-80 sm:h-64 md:h-56 flex items-center justify-center overflow-hidden">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={page}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = Math.abs(offset.x) * velocity.x;
                if (swipe < -10000) {
                  paginate(1);
                } else if (swipe > 10000) {
                  paginate(-1);
                }
              }}
              className="absolute w-full"
            >
              <figure className="p-8 bg-gray-950/50 rounded-2xl shadow-lg ring-1 ring-white/10">
                <Quote className="h-12 w-12 text-indigo-400/50 absolute top-6 left-6 -z-10" />
                <blockquote className="text-xl font-semibold leading-8 text-white">
                  <p>“{testimonial.quote}”</p>
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-x-4">
                  <img className="h-12 w-12 rounded-full bg-gray-800 object-cover" src={testimonial.avatar} alt={testimonial.name} />
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-gray-400">{testimonial.title}</div>
                  </div>
                </figcaption>
              </figure>
            </motion.div>
          </AnimatePresence>

          <button onClick={() => paginate(-1)} className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500">
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button onClick={() => paginate(1)} className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500">
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
    </section>
  );
}
