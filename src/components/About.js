import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';

const experienceData = [
  {
    title: 'Senior Frontend Developer',
    company: 'Tech Innovators Inc.',
    date: '2021 - Hiện tại',
    description: [
      'Dẫn dắt việc phát triển các giao diện người dùng phức tạp bằng React và Next.js.',
      'Cố vấn cho các lập trình viên junior và thực hiện đánh giá code để đảm bảo chất lượng.',
      'Hợp tác với các nhà thiết kế UI/UX để chuyển đổi các mẫu thiết kế thành các thành phần web có khả năng tái sử dụng cao.',
      'Cải thiện hiệu suất trang web lên 30% thông qua việc tối ưu hóa code và lazy loading.',
    ],
  },
  {
    title: 'Frontend Developer',
    company: 'Creative Solutions',
    date: '2019 - 2021',
    description: [
      'Phát triển và duy trì các trang web cho khách hàng sử dụng HTML, CSS, và JavaScript.',
      'Xây dựng các ứng dụng web tương tác bằng Vue.js.',
      'Làm việc trong môi trường Agile, tham gia vào các cuộc họp sprint planning và daily stand-ups.',
    ],
  },
];

const educationData = [
  {
    title: 'Cử nhân Khoa học Máy tính',
    university: 'Đại học Bách Khoa',
    date: '2015 - 2019',
    description: [
      'Chuyên ngành: Kỹ thuật phần mềm.',
      'Đồ án tốt nghiệp: Xây dựng một nền tảng học tập trực tuyến bằng MERN stack.',
      'GPA: 3.8/4.0',
    ],
  },
  {
    title: 'Chứng chỉ Thiết kế UI/UX',
    university: 'DesignLab',
    date: '2020',
    description: [
      'Hoàn thành khóa học chuyên sâu về nguyên tắc thiết kế, wireframing, và prototyping.',
      'Sử dụng thành thạo các công cụ như Figma và Adobe XD.',
    ],
  },
];

const TimelineItem = ({ icon, title, subtitle, date, descriptionItems }) => {
  const IconComponent = icon;
  return (
    <motion.div
      className="relative pl-12 pb-12 last:pb-0"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <div className="absolute left-0 top-1 flex items-center justify-center w-8 h-8 bg-indigo-600 rounded-full ring-8 ring-gray-900">
        <IconComponent className="w-4 h-4 text-white" />
      </div>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <time className="sm:ml-4 text-sm font-medium text-gray-400">{date}</time>
      </div>
      <p className="mt-1 text-md font-medium text-indigo-400">{subtitle}</p>
      <ul className="mt-4 space-y-2 text-gray-300 list-disc list-inside">
        {descriptionItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </motion.div>
  );
};

export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl gradient-text">
            Hành Trình Của Tôi
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">
            Từ những dòng code đầu tiên đến việc xây dựng các ứng dụng web phức tạp, đây là câu chuyện về sự nghiệp và học vấn của tôi.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <Briefcase className="w-6 h-6 mr-3 text-indigo-400" />
              Kinh Nghiệm Làm Việc
            </h3>
            <div className="relative border-l-2 border-indigo-500/30 ml-4">
              {experienceData.map((item, index) => (
                <TimelineItem
                  key={index}
                  icon={Briefcase}
                  title={item.title}
                  subtitle={item.company}
                  date={item.date}
                  descriptionItems={item.description}
                />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <GraduationCap className="w-6 h-6 mr-3 text-indigo-400" />
              Học Vấn & Chứng Chỉ
            </h3>
            <div className="relative border-l-2 border-indigo-500/30 ml-4">
              {educationData.map((item, index) => (
                <TimelineItem
                  key={index}
                  icon={GraduationCap}
                  title={item.title}
                  subtitle={item.university}
                  date={item.date}
                  descriptionItems={item.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
