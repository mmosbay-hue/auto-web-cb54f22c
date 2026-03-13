### Design Tokens
- **Primary Color**: Indigo (`#4f46e5`)
- **Font**: Inter
- **Border Radius**: `rounded-lg` (8px), `rounded-full`
- **Shadow Style**: `shadow-lg`, `shadow-indigo-500/50` for glow effects
- **Theme**: Dark Mode

### Components Created
- `src/App.js`: Component chính, sắp xếp layout trang chủ.
- `src/components/Header.js`: Thanh điều hướng đầu trang, responsive.
- `src/components/Hero.js`: Phần giới thiệu chính (hero section) với ảnh và CTA.
- `src/components/About.js`: Trang giới thiệu kinh nghiệm làm việc và học vấn theo dạng timeline.
- `src/components/Skills.js`: Lưới hiển thị các kỹ năng với icon.
- `src/components/Projects.js`: Lưới trưng bày các dự án với card chi tiết.
- `src/components/Testimonials.js`: Slider hiển thị nhận xét của khách hàng.
- `src/components/Contact.js`: Phần liên hệ với thông tin và biểu mẫu.
- `src/components/Footer.js`: Chân trang với thông tin bản quyền và liên kết mạng xã hội.

### Shared Data Shapes
- `skill: { name: string, icon: LucideIcon }`
- `project: { id, title, description, tags: string[], image, liveUrl, repoUrl }`
- `timelineItem: { title, company/university, date, description: string[] }`
- `testimonial: { quote, name, title, avatar }`

### Routing Structure
- Single page with section anchors: `#about`, `#projects`, `#skills`, `#contact`
