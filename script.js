/**
 * The IoT Academy (TIA) - Placement & Career Portal
 * Core Interactive Scripts
 */

// ============================================
// 1. MOBILE NAVIGATION
// ============================================
function initMobileMenu() {
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
}

// ============================================
// 2. HERO SHOWCASE CAROUSEL
// ============================================
function initHeroCarousel() {
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

    // Touch swipe support for mobile
    let touchStartX = 0;
    let touchStartY = 0;

    placementCardsGrid.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].clientX;
      touchStartY = e.changedTouches[0].clientY;
    }, { passive: true });

    placementCardsGrid.addEventListener('touchend', (e) => {
      const touchEndX = e.changedTouches[0].clientX;
      const touchEndY = e.changedTouches[0].clientY;
      const diffX = touchEndX - touchStartX;
      const diffY = touchEndY - touchStartY;
      if (Math.abs(diffX) > 40 && Math.abs(diffX) > Math.abs(diffY)) {
        if (diffX < 0) {
          boardNext?.click();
        } else {
          boardPrev?.click();
        }
      }
    }, { passive: true });

    window.addEventListener('resize', updateHeroCarousel);
    updateHeroCarousel();
  }
}

// ============================================
// 3. LINKEDIN STUDENT STORIES CAROUSEL
// ============================================
function initLinkedInCarousel() {
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
}

// ============================================
// 4. CAREER TRANSITIONS CONTROLS
// ============================================
function initCareerCarousel() {
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
}

// ============================================
// 5. REVIEW CAROUSEL & DOTS
// ============================================
function initReviewCarousel() {
  const reviewsTrack = document.getElementById('reviewsTrack');
  const reviewNext = document.getElementById('reviewNext');
  const reviewPrev = document.getElementById('reviewPrev');
  const reviewDots = document.querySelectorAll('.review-dot');

  if (reviewsTrack) {
    const cards = reviewsTrack.querySelectorAll('.review-dark-card');
    const totalReviewCards = cards.length;
    let currentReviewIndex = 0;

    function getReviewVisibleCount() {
      if (window.innerWidth <= 680) return 1;
      if (window.innerWidth <= 992) return 2;
      return 3;
    }

    function updateReviewCarousel() {
      const visibleCount = getReviewVisibleCount();
      const maxIndex = Math.max(0, totalReviewCards - visibleCount);
      if (currentReviewIndex > maxIndex) currentReviewIndex = 0;
      if (currentReviewIndex < 0) currentReviewIndex = maxIndex;

      if (cards.length > 0) {
        const cardWidth = cards[0].getBoundingClientRect().width;
        const gap = 20;
        const shift = currentReviewIndex * (cardWidth + gap);
        reviewsTrack.style.transform = `translateX(-${shift}px)`;
      }

      reviewDots.forEach((dot, idx) => {
        dot.classList.toggle('active', idx === Math.min(currentReviewIndex, reviewDots.length - 1));
      });
    }

    reviewNext?.addEventListener('click', () => {
      const visibleCount = getReviewVisibleCount();
      const maxIndex = Math.max(0, totalReviewCards - visibleCount);
      if (currentReviewIndex >= maxIndex) {
        currentReviewIndex = 0;
      } else {
        currentReviewIndex++;
      }
      updateReviewCarousel();
    });

    reviewPrev?.addEventListener('click', () => {
      const visibleCount = getReviewVisibleCount();
      const maxIndex = Math.max(0, totalReviewCards - visibleCount);
      if (currentReviewIndex <= 0) {
        currentReviewIndex = maxIndex;
      } else {
        currentReviewIndex--;
      }
      updateReviewCarousel();
    });

    reviewDots.forEach((dot) => {
      dot.addEventListener('click', () => {
        const idx = parseInt(dot.getAttribute('data-index') || '0', 10);
        currentReviewIndex = idx;
        updateReviewCarousel();
      });
    });

    window.addEventListener('resize', updateReviewCarousel);
    updateReviewCarousel();
  }
}

// ============================================
// 6. FAQ SINGLE-OPEN ACCORDION
// ============================================
function initFAQAccordion() {
  const container = document.getElementById('faqGrid');
  if (!container) return;

  container.querySelectorAll('.faq-question-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.faq-card');
      if (!card) return;

      const isAlreadyActive = card.classList.contains('active');

      // Close all cards so only one can be open at a time
      container.querySelectorAll('.faq-card').forEach(c => {
        c.classList.remove('active');
      });

      // If clicked card was not open, open it
      if (!isAlreadyActive) {
        card.classList.add('active');
      }
    });
  });
}

// ============================================
// 7. SCROLL REVEAL ANIMATIONS
// ============================================
function initScrollReveal() {
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
// APPLICATION INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initHeroCarousel();
  initLinkedInCarousel();
  initCareerCarousel();
  initReviewCarousel();
  initFAQAccordion();
  initScrollReveal();
});
