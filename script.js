// ============================================
// DATA COLLECTIONS
// ============================================

const linkedinData = [
  { name: 'Arun Kumar', role: 'Software Engineer at Infosys', initials: 'AK', color: '#1557D6', date: '2 weeks ago', likes: 142, comments: 23, text: 'Extremely grateful to TIA for their incredible placement support! Guided every step from resume building to mock interviews. Landed my dream role within 3 months.' },
  { name: 'Meera Nair', role: 'Data Scientist at TCS', initials: 'MN', color: '#7C3AED', date: '1 month ago', likes: 231, comments: 45, text: 'Coming from a non-tech background, I never imagined breaking into Data Science. TIA\'s phenomenal mentors and practical projects made all the difference.' },
  { name: 'Sanjay Gupta', role: 'DevOps Engineer at Accenture', initials: 'SG', color: '#059669', date: '3 weeks ago', likes: 187, comments: 34, text: 'The industry-focused curriculum and personalized mentorship were outstanding. The placement team went above and beyond to prepare me for technical rounds.' },
  { name: 'Kavitha Rao', role: 'Full Stack Dev at Wipro', initials: 'KR', color: '#D97706', date: '1 week ago', likes: 198, comments: 28, text: 'From fresher to Full Stack Developer – structured live projects and mock interviews gave me the confidence to crack top MNC technical evaluations.' },
  { name: 'Rohit Joshi', role: 'Backend Developer at Zomato', initials: 'RJ', color: '#DC2626', date: '2 months ago', likes: 312, comments: 56, text: 'The career support was genuine and top quality. Placed at Zomato with a 120% salary hike. Best investment for my career!' },
  { name: 'Deepa Menon', role: 'QA Engineer at Amazon', initials: 'DM', color: '#0891B2', date: '1 month ago', likes: 156, comments: 19, text: 'The automation testing bootcamp and mock interviews with industry experts helped me clear Amazon\'s rounds smoothly.' }
];

const careerData = [
  { name: 'Amit Patel', batch: 'Batch 2024', initials: 'AP', color: '#1557D6', before: 'Sales Exec (Local Firm)', after: 'Software Engineer (TCS)', salary: '₹8.5 LPA', badge: 'TCS' },
  { name: 'Divya Krishnan', batch: 'Batch 2024', initials: 'DK', color: '#7C3AED', before: 'BPO Analyst (Concentrix)', after: 'Data Analyst (Deloitte)', salary: '₹10 LPA', badge: 'Deloitte' },
  { name: 'Raj Malhotra', batch: 'Batch 2023', initials: 'RM', color: '#059669', before: 'Fresher (College)', after: 'Frontend Dev (Accenture)', salary: '₹6.5 LPA', badge: 'Accenture' },
  { name: 'Pooja Reddy', batch: 'Batch 2024', initials: 'PR', color: '#D97706', before: 'Manual Tester (Startup)', after: 'SDET (Amazon)', salary: '₹18 LPA', badge: 'Amazon' },
  { name: 'Karthik Nair', batch: 'Batch 2023', initials: 'KN', color: '#DC2626', before: 'Support Engg (HCL)', after: 'Cloud Engineer (IBM)', salary: '₹12 LPA', badge: 'IBM' },
  { name: 'Swati Mishra', batch: 'Batch 2024', initials: 'SM', color: '#0891B2', before: 'Accountant (CA Firm)', after: 'Business Analyst (EY)', salary: '₹9 LPA', badge: 'EY' },
  { name: 'Nikhil Bansal', batch: 'Batch 2023', initials: 'NB', color: '#2563EB', before: 'Mechanical Engg', after: 'DevOps Engineer (Infosys)', salary: '₹11 LPA', badge: 'Infosys' },
  { name: 'Ritu Agarwal', batch: 'Batch 2024', initials: 'RA', color: '#DB2777', before: 'Teacher (School)', after: 'UX Designer (Adobe)', salary: '₹14 LPA', badge: 'Adobe' },
  { name: 'Siddharth Jain', batch: 'Batch 2023', initials: 'SJ', color: '#4F46E5', before: 'Freelancer', after: 'Backend Dev (Flipkart)', salary: '₹16 LPA', badge: 'Flipkart' }
];

const placementData = [
  { icon: '📝', title: 'Resume Building', desc: 'ATS-optimized templates and expert feedback to pass recruiter screenings.' },
  { icon: '🎤', title: 'Interview Preparation', desc: 'Mock interviews with detailed personalized feedback from senior engineers.' },
  { icon: '💼', title: 'Job Assistance', desc: 'Direct corporate referrals with our network of 500+ hiring partners.' },
  { icon: '🎯', title: 'Career Guidance', desc: '1-on-1 mentorship sessions to help you define and reach your career goals.' },
  { icon: '🖥️', title: 'Technical Training', desc: 'Hands-on projects and problem solving aligned with modern industry stacks.' },
  { icon: '🤝', title: 'Soft Skills & HR Prep', desc: 'Salary negotiation tips and behavioral interview coaching for confidence.' }
];

const alumniData = [
  { name: 'Arjun Mehra', role: 'Software Engineer', company: 'Google', initials: 'AM', color: '#1557D6' },
  { name: 'Neha Kapoor', role: 'Frontend Developer', company: 'Microsoft', initials: 'NK', color: '#7C3AED' },
  { name: 'Rakesh Kumar', role: 'Data Analyst', company: 'Amazon', initials: 'RK', color: '#059669' },
  { name: 'Simran Kaur', role: 'Product Engineer', company: 'Flipkart', initials: 'SK', color: '#D97706' },
  { name: 'Vishal Yadav', role: 'SDE II', company: 'Walmart', initials: 'VY', color: '#DC2626' },
  { name: 'Anjali Singh', role: 'QA Engineer', company: 'Adobe', initials: 'AS', color: '#0891B2' },
  { name: 'Manish Tiwari', role: 'DevOps Engineer', company: 'IBM', initials: 'MT', color: '#2563EB' },
  { name: 'Priyanka Das', role: 'Full Stack Dev', company: 'Infosys', initials: 'PD', color: '#DB2777' }
];

const cityData = ['Bangalore', 'Mumbai', 'Delhi NCR', 'Hyderabad', 'Chennai', 'Pune', 'Kolkata', 'Noida', 'Gurgaon', 'Ahmedabad', 'Jaipur', 'Chandigarh'];

const recruiterData = ['Bosch', 'TCS', 'IKEA', 'Accenture', 'EY', 'IBM', 'Zomato', 'Amazon', 'Adobe', 'Infosys', 'Deloitte', 'Wipro', 'Google', 'Microsoft', 'Flipkart', 'Netflix', 'Capgemini', 'HCL'];

const whyData = [
  { icon: '🎓', title: 'Industry-Focused Curriculum', desc: 'Crafted with tech leads to match exactly what high-growth companies look for today.' },
  { icon: '🧭', title: 'Personalized Career Guidance', desc: 'Dedicated 1-on-1 career mentors to support your journey from day one to offer letter.' },
  { icon: '🏆', title: 'Interview & Placement Prep', desc: 'Rigorous mock evaluations, system design, coding challenges, and HR round practice.' }
];

const reviewData = [
  { name: 'Ankita Sharma', role: 'Placed at Infosys', initials: 'AS', color: '#1557D6', text: 'The entire journey with TIA was phenomenal. Real-world projects and active placement support gave me the breakthrough I needed.', program: 'Full Stack Development' },
  { name: 'Vivek Chauhan', role: 'Placed at TCS', initials: 'VC', color: '#7C3AED', text: 'I transitioned from a non-tech job to software development smoothly. The structured syllabus and mentorship were invaluable.', program: 'Software Engineering' },
  { name: 'Nisha Reddy', role: 'Placed at Amazon', initials: 'NR', color: '#059669', text: 'Top-tier Data Science program! The practical assignments and Kaggle projects built a portfolio that impressed recruiters directly.', program: 'Data Science Program' },
  { name: 'Akash Dubey', role: 'Placed at Accenture', initials: 'AD', color: '#D97706', text: 'Career counselors guided me into DevOps, which matched my strengths perfectly. Salary package exceeded my expectations!', program: 'DevOps & Cloud' }
];

const faqData = [
  { q: 'What is the placement success rate?', a: 'Our placement success rate is over 95%, with 15,000+ students placed across 500+ top recruiting companies.' },
  { q: 'How does the placement support program work?', a: 'You get end-to-end guidance including resume optimization, LinkedIn branding, mock interviews, and direct referrals.' },
  { q: 'Where do students typically get placed?', a: 'Our students work at leading companies like Google, Amazon, Microsoft, TCS, Infosys, Deloitte, and fast-growing startups.' },
  { q: 'Do you provide interview preparation?', a: 'Yes! We conduct domain-specific technical mock interviews, coding tests, and behavioral HR rounds with industry experts.' },
  { q: 'Can non-technical students join?', a: 'Yes! Our beginner-friendly curriculum starts from scratch and builds up step-by-step to job-ready competency.' },
  { q: 'How long does the program take?', a: 'Programs typically range from 3 to 9 months depending on your chosen track and learning pace.' }
];

// ============================================
// SIMPLE RENDER FUNCTIONS
// ============================================

function renderLinkedIn() {
  // Static cards rendered directly in index.html matching reference UI
}

function renderCareers() {
  // Static cards rendered directly in index.html matching reference UI
}

function renderPlacement() {
  // Placement support features rendered directly in index.html matching reference UI
}

function renderCharts() {
  // Growth analytics bar chart and donut chart rendered directly in index.html matching reference UI
}

function renderAlumni() {
  const container = document.getElementById('alumniGrid');
  if (!container) return;
  container.innerHTML = alumniData.map(a => `
    <div class="alumni-card">
      <div class="avatar" style="background:${a.color};margin:0 auto 12px;">${a.initials}</div>
      <h4>${a.name}</h4>
      <p class="role">${a.role}</p>
      <span class="company-tag">${a.company}</span>
    </div>
  `).join('');
}

function renderLocationsAndPartners() {
  const cities = document.getElementById('cityTags');
  if (cities) cities.innerHTML = cityData.map(c => `<span class="city-tag">${c}</span>`).join('');

  const recruiters = document.getElementById('recruitersGrid');
  if (recruiters) recruiters.innerHTML = recruiterData.map(r => `<div class="recruiter-logo">${r}</div>`).join('');

  const why = document.getElementById('whyGrid');
  if (why) why.innerHTML = whyData.map(w => `
    <div class="why-card">
      <div class="why-card-icon">${w.icon}</div>
      <h3>${w.title}</h3>
      <p>${w.desc}</p>
    </div>
  `).join('');
}

let reviewIndex = 0;
function renderReviews() {
  const container = document.getElementById('reviewsTrack');
  if (!container) return;
  container.innerHTML = reviewData.map(r => `
    <article class="review-card">
      <div class="review-card-header">
        <div class="avatar" style="background:${r.color}">${r.initials}</div>
        <div class="review-card-info"><h4>${r.name}</h4><p>${r.role}</p></div>
      </div>
      <div class="review-stars">★★★★★</div>
      <p class="review-text">${r.text}</p>
      <div class="review-company">📚 ${r.program}</div>
    </article>
  `).join('');
}

function renderFAQ() {
  const container = document.getElementById('faqGrid');
  if (!container) return;
  container.innerHTML = faqData.map((f, i) => `
    <div class="faq-item" id="faq-${i}">
      <button class="faq-question">
        <span>${f.q}</span>
        <span class="faq-icon">+</span>
      </button>
      <div class="faq-answer">
        <div class="faq-answer-content">${f.a}</div>
      </div>
    </div>
  `).join('');

  // Simple Accordion Click
  container.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      item.classList.toggle('active');
    });
  });
}

// ============================================
// USER INTERACTIONS
// ============================================

function initInteractions() {
  // Mobile Hamburger Menu
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  const overlay = document.getElementById('navOverlay');
  
  if (hamburger && navLinks) {
    const toggleMenu = () => {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('open');
      if (overlay) overlay.classList.toggle('show');
    };
    hamburger.addEventListener('click', toggleMenu);
    if (overlay) overlay.addEventListener('click', toggleMenu);
    navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', toggleMenu));
  }

  // Hero Placement Showcase Board (1-by-1 sliding carousel, showing exactly 2 cards)
  const placementCardsGrid = document.getElementById('placementCardsGrid');
  const boardCards = placementCardsGrid ? placementCardsGrid.querySelectorAll('.showcase-card') : [];
  const boardPrev = document.getElementById('boardPrev');
  const boardNext = document.getElementById('boardNext');

  if (placementCardsGrid && boardCards.length > 0) {
    const totalHeroCards = boardCards.length;
    let heroCardIndex = 0;

    function getHeroVisibleCount() {
      if (window.innerWidth <= 576) return 1;
      return 2;
    }

    function updateHeroCarousel() {
      const visibleCount = getHeroVisibleCount();
      const maxIndex = Math.max(0, totalHeroCards - visibleCount);
      if (heroCardIndex > maxIndex) heroCardIndex = 0;
      if (heroCardIndex < 0) heroCardIndex = maxIndex;

      const cardWidth = boardCards[0].getBoundingClientRect().width;
      const gap = 16;
      const shift = heroCardIndex * (cardWidth + gap);
      placementCardsGrid.style.transform = `translateX(-${shift}px)`;
    }

    boardNext?.addEventListener('click', () => {
      const visibleCount = getHeroVisibleCount();
      const maxIndex = Math.max(0, totalHeroCards - visibleCount);
      if (heroCardIndex >= maxIndex) {
        heroCardIndex = 0;
      } else {
        heroCardIndex++;
      }
      updateHeroCarousel();
    });

    boardPrev?.addEventListener('click', () => {
      const visibleCount = getHeroVisibleCount();
      const maxIndex = Math.max(0, totalHeroCards - visibleCount);
      if (heroCardIndex <= 0) {
        heroCardIndex = maxIndex;
      } else {
        heroCardIndex--;
      }
      updateHeroCarousel();
    });

    window.addEventListener('resize', updateHeroCarousel);
    updateHeroCarousel();
  }

  // LinkedIn Controls (1-card shift at a time, exactly 3 cards visible on desktop)
  const linkedinCardsGrid = document.getElementById('linkedinCardsGrid');
  const linkedinNext = document.getElementById('linkedinNext');
  const linkedinPrev = document.getElementById('linkedinPrev');

  if (linkedinCardsGrid) {
    const cards = linkedinCardsGrid.querySelectorAll('.linkedin-student-card');
    const totalCards = cards.length;
    let linkedinIndex = 0;

    function getVisibleCount() {
      if (window.innerWidth <= 680) return 1;
      if (window.innerWidth <= 992) return 2;
      return 3;
    }

    function updateLinkedInCarousel() {
      const visibleCount = getVisibleCount();
      const maxIndex = Math.max(0, totalCards - visibleCount);
      if (linkedinIndex > maxIndex) linkedinIndex = 0;
      if (linkedinIndex < 0) linkedinIndex = maxIndex;

      if (cards.length > 0) {
        const cardWidth = cards[0].getBoundingClientRect().width;
        const gap = 24;
        const shift = linkedinIndex * (cardWidth + gap);
        linkedinCardsGrid.style.transform = `translateX(-${shift}px)`;
      }
    }

    linkedinNext?.addEventListener('click', () => {
      const visibleCount = getVisibleCount();
      const maxIndex = Math.max(0, totalCards - visibleCount);
      if (linkedinIndex >= maxIndex) {
        linkedinIndex = 0;
      } else {
        linkedinIndex++;
      }
      updateLinkedInCarousel();
    });

    linkedinPrev?.addEventListener('click', () => {
      const visibleCount = getVisibleCount();
      const maxIndex = Math.max(0, totalCards - visibleCount);
      if (linkedinIndex <= 0) {
        linkedinIndex = maxIndex;
      } else {
        linkedinIndex--;
      }
      updateLinkedInCarousel();
    });

    window.addEventListener('resize', updateLinkedInCarousel);
    updateLinkedInCarousel();
  }

  // Career Before & After Controls
  const careerCardsGrid = document.getElementById('careerCardsGrid');
  document.getElementById('careerNext')?.addEventListener('click', () => {
    if (careerCardsGrid) {
      careerCardsGrid.scrollBy({ left: 370, behavior: 'smooth' });
    }
  });
  document.getElementById('careerPrev')?.addEventListener('click', () => {
    if (careerCardsGrid) {
      careerCardsGrid.scrollBy({ left: -370, behavior: 'smooth' });
    }
  });

  // Review Carousel Next/Prev
  const reviewsTrack = document.getElementById('reviewsTrack');
  document.getElementById('reviewNext')?.addEventListener('click', () => {
    if (reviewIndex < reviewData.length - 1) reviewIndex++;
    reviewsTrack.style.transform = `translateX(-${reviewIndex * 300}px)`;
  });
  document.getElementById('reviewPrev')?.addEventListener('click', () => {
    if (reviewIndex > 0) reviewIndex--;
    reviewsTrack.style.transform = `translateX(-${reviewIndex * 300}px)`;
  });

  // Load More Stories Button
  document.getElementById('loadMoreCareers')?.addEventListener('click', (e) => {
    visibleCareers = careerData.length;
    renderCareers();
    e.target.style.display = 'none';
  });

  // Scroll Reveal Animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// ============================================
// START APPLICATION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  renderLinkedIn();
  renderCareers();
  renderPlacement();
  renderCharts();
  renderAlumni();
  renderLocationsAndPartners();
  renderReviews();
  renderFAQ();
  initInteractions();
});
