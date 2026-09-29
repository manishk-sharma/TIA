# The IoT Academy (TIA) — Placement & Career Portal

A modern, high-converting, and responsive landing page for **The IoT Academy (TIA)**, showcasing alumni placement records, salary hikes, hiring partners, student success stories, and comprehensive career support.

---

## 🌟 Key Highlights & Features

### 1. 🧭 Header & Navigation
- **Top Notification Bar**: Displays quick support contact (`+91 93540 68856`), enrollment assistance, and working hours.
- **Sticky Navbar**: Features brand identity, quick navigation links (Overview, Courses, Transitions, Placements, Support, Reviews, FAQs), and a primary "Apply Now" CTA.
- **Mobile Navigation Drawer**: Responsive slide-in hamburger menu with backdrop overlay and smooth transition animations.

### 2. 🚀 Hero Section & Placement Board
- **Dynamic 360° Infinite Showcase**: Interactive placement card carousel highlighting real student placements, packages (LPA), previous vs. current roles, and verified LinkedIn badges.
- **Smart Responsive Reordering**:
  - **Laptop / Desktop Mode (`>= 1024px`)**: Clean two-column layout with value proposition and CTAs on the left, and the placement showcase board on the right.
  - **Mobile & Tablet Mode (`< 1024px`)**: Automatically reorders elements so the action buttons ("Talk To Placement Team" & "Download Placement Report") appear conveniently **below** the visual showcase board.

### 3. 💼 LinkedIn Student Stories
- **Verified Testimonials**: Real student stories shared on LinkedIn highlighting their career progression with TIA.
- **360° Infinite Carousel**: Dual-color circular navigation buttons (Yellow/Orange Prev `←` and Blue Next `→`) with touch swipe support for mobile devices.

### 4. 📈 Career Transitions Showcase
- **Non-Tech to Tech & Salary Growth**: Transition cards showcasing before-and-after companies, designation upgrades, and package increases.
- **Dynamic Transformation Banners**: Visually highlights the growth journey from previous company to new tech role.

### 5. 🎯 360° Placement Support
- **End-to-End Career Coaching**: Highlights key pillars including 1:1 mentorship, resume optimization, mock technical interviews, and soft skill development.

### 6. 📊 Growth Analytics & Domain Insights
- **Interactive SVG Donut Chart**: Visual distribution of alumni placements across Data Science, AI/ML, Full Stack Development, and Cloud/IoT with custom legend metrics.
- **Placement Records**: High-impact metrics showcasing highest package, average hike, and hiring network stats.

### 7. 🎓 Meet Our Alumni (Dual-Mode Responsive)
- **Comprehensive Alumni Profiles**: 12 verified alumni cards with profile photos, job designations, and company branding logos (Bosch, Ashok Leyland, Turing, Accenture, etc.).
- **Dual-Mode Experience**:
  - **Laptop Mode (`>= 1024px`)**: Static, structured 4-column desktop grid.
  - **Mobile & Tablet Mode (`< 1024px`)**: Automatically transforms into an interactive **360° infinite carousel** with custom yellow/blue circular navigation controls and touch swipe gestures.

### 8. 🗺️ Geographic Footprint ("Where Our Alumni Are Building Careers")
- **Interactive Regional Distribution**: Percentage breakdown across top technology hubs including Delhi NCR (22%), Karnataka (18%), Telangana (14%), West Bengal (9%), Assam (13%), Tamil Nadu (10%), Rajasthan (6%), and Others (8%).
- **Mobile Map Priority**: On mobile and tablet screens (`< 1024px`), the detailed India map visual is positioned **above** the regional percentage cards for optimal storytelling.

### 9. 🏢 Top Recruiters (Continuous 3-Line Marquee)
- **30+ Hiring Partners**: Top tech companies including Bosch, Wipro, TCS, IKEA, Infosys, Accenture, EY, IBM, Zomato, Amazon, Netflix, and more.
- **Seamless Hardware-Accelerated Marquee**:
  - **Laptop Mode (`>= 1024px`)**: Multi-column static grid.
  - **Mobile & Tablet Mode (`< 1024px`)**: Transforms into a continuous **3-line (3-row) slider moving right-to-left** with gradient fade masks on edges and pause-on-touch interaction.

### 10. ⭐ Learners' Reviews & Testimonials
- **Dark-Themed Review Carousel**: Star ratings, verified student feedback, program details, and author avatars.
- **Segmented Pagination & Controls**: Infinite navigation with circular arrow buttons and interactive indicator dots.

### 11. ❓ Frequently Asked Questions (FAQ)
- **Single-Open Accordion**: Interactive questions covering eligibility, placement guarantee, mentorship, and course tracks.
- **Smooth Flip Animation**: Custom SVG chevron badges with 180° rotation on toggle.

### 12. 📣 Final Call to Action (CTA) & Footer
- **High-Conversion Banner**: Dual action buttons for enrollment consultation and syllabus download.
- **Comprehensive Footer**: Quick links, office addresses, contact channels, and social media handles.

---

## 🛠️ Technology Stack

- **HTML5**: Semantic, accessible markup structured for performance and SEO.
- **CSS3 (Vanilla)**:
  - Custom Design System with CSS Variables (tokens for colors, spacing, typography, and elevations).
  - Modern layouts via **CSS Grid** and **Flexbox**.
  - Hardware-accelerated CSS animations (`transform: translate3d`, `@keyframes`).
  - Fluid typography (`clamp()`) and edge-to-edge gradient masks.
- **JavaScript (ES6+ Vanilla)**:
  - Modular, dependency-free interactive engine.
  - Reusable 360-degree `createInfiniteCarousel` with boundary normalization and touch swipe gestures (`touchstart`, `touchend`).
  - Single-open accordion logic with animated state management.
  - IntersectionObserver API for scroll-triggered reveal animations.

---

## 📁 Directory Structure

```
TIA Placement/
├── Assist/
│   ├── alumni/             # Alumni avatars and company logos
│   ├── icon/               # Feature icons and symbols
│   ├── Images/             # Hero graphics, India map, student photos
│   ├── logo/               # Brand logos and certificates
│   ├── recruiters/         # 30+ top recruiter logos
│   └── reviews/            # Reviewer profile images
├── index.html              # Main webpage markup
├── style.css               # Complete stylesheet & responsive breakpoints
├── script.js               # Interactive components & carousel engines
└── README.md               # Project documentation
```

---

## 📱 Responsive Breakpoints

| Breakpoint | Target Devices | Key Adaptations |
| :--- | :--- | :--- |
| **`>= 1024px`** | Laptop & Desktop | Multi-column grid layouts, 4-column alumni grid, side-by-side geographic map, static recruiter grid. |
| **`769px – 1023px`** | Tablet Landscape | Hero buttons move below visual board; Alumni carousel activates with 2 cards/slide; Recruiter 3-line marquee; Map on top. |
| **`481px – 768px`** | Tablet Portrait | Compact navigation controls; 2 cards per slide on Alumni & Reviews; India map centered above stats. |
| **`<= 480px`** | Mobile Phones | Full-width single card view on Alumni & Reviews carousels; 3-line recruiter marquee; optimized touch targets. |

---

## 🚀 Getting Started

1. Clone or download the repository:
   ```bash
   git clone https://github.com/manishk-sharma/TIA.git
   ```
2. Open `index.html` in your favorite web browser, or launch it with a local development server:
   - **VS Code**: Right-click `index.html` and select **"Open with Live Server"**.
   - **Node.js**:
     ```bash
     npx serve .
     ```
   - **Python**:
     ```bash
     python -m http.server 3000
     ```
3. Open `http://localhost:3000` (or the respective port) to view the portal.
