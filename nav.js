// Hamburger toggle
const navToggle = document.querySelector('.nav-toggle');
const navigation = document.querySelector('.navigation');

navToggle.addEventListener('click', () => {
  const isOpen = navigation.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', isOpen);
});

// Close menu when a link is clicked
document.querySelectorAll('.navigation a').forEach((link) => {
  link.addEventListener('click', () => {
    navigation.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.navigation a[href^="#"]');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => link.classList.remove('active'));
        const active = document.querySelector(
          `.navigation a[href="#${entry.target.id}"]`
        );
        if (active) active.classList.add('active');
      }
    });
  },
  { rootMargin: '-40% 0px -55% 0px' }
);

sections.forEach((section) => observer.observe(section));
