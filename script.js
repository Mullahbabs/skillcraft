// Carousel functionality
document.addEventListener("DOMContentLoaded", function () {
  // Initialize carousel
  initCarousel();

  // Initialize mobile menu
  initMobileMenu();

  // Initialize smooth scrolling for navigation links
  initSmoothScrolling();
});

// Carousel functionality
function initCarousel() {
  const slides = document.querySelectorAll(".slide");
  const indicators = document.querySelectorAll(".indicator");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");
  let currentSlide = 0;
  let slideInterval;

  // Function to show a specific slide
  function showSlide(index) {
    // Hide all slides
    slides.forEach((slide) => slide.classList.remove("active"));
    indicators.forEach((indicator) => indicator.classList.remove("active"));

    // Ensure index is within bounds
    if (index >= slides.length) {
      currentSlide = 0;
    } else if (index < 0) {
      currentSlide = slides.length - 1;
    } else {
      currentSlide = index;
    }

    // Show the current slide
    slides[currentSlide].classList.add("active");
    indicators[currentSlide].classList.add("active");
  }

  // Function to go to next slide
  function nextSlide() {
    showSlide(currentSlide + 1);
  }

  // Function to go to previous slide
  function prevSlide() {
    showSlide(currentSlide - 1);
  }

  // Start auto sliding
  function startSlideShow() {
    slideInterval = setInterval(nextSlide, 5000);
  }

  // Stop auto sliding
  function stopSlideShow() {
    clearInterval(slideInterval);
  }

  // Event listeners for controls
  nextBtn.addEventListener("click", () => {
    stopSlideShow();
    nextSlide();
    startSlideShow();
  });

  prevBtn.addEventListener("click", () => {
    stopSlideShow();
    prevSlide();
    startSlideShow();
  });

  // Event listeners for indicators
  indicators.forEach((indicator, index) => {
    indicator.addEventListener("click", () => {
      stopSlideShow();
      showSlide(index);
      startSlideShow();
    });
  });

  // Pause slideshow when hovering over carousel
  const carousel = document.querySelector(".carousel");
  carousel.addEventListener("mouseenter", stopSlideShow);
  carousel.addEventListener("mouseleave", startSlideShow);

  // Start the slideshow
  startSlideShow();
}

// Mobile menu functionality
function initMobileMenu() {
  const menuBtn = document.querySelector(".mobile-menu-btn");
  const navigation = document.querySelector(".navigation");

  menuBtn.addEventListener("click", function () {
    navigation.style.display =
      navigation.style.display === "flex" ? "none" : "flex";
  });

  // Adjust for window resize
  window.addEventListener("resize", function () {
    if (window.innerWidth > 768) {
      navigation.style.display = "flex";
    } else {
      navigation.style.display = "none";
    }
  });
}

// Smooth scrolling for navigation links
function initSmoothScrolling() {
  const navLinks = document.querySelectorAll(".navigation a");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const headerHeight = document.querySelector(".header").offsetHeight;
        const targetPosition = targetElement.offsetTop - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    });
  });
}

// Add header background on scroll
window.addEventListener("scroll", function () {
  const header = document.querySelector(".header");
  if (window.scrollY > 50) {
    header.style.background = "rgba(255, 255, 255, 0.98)";
    header.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.1)";
  } else {
    header.style.background = "rgba(255, 255, 255, 0.95)";
    header.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
  }
});
