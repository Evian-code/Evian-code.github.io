document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const navTrigger = document.getElementById('nav-trigger');
  const trigger = document.querySelector('.trigger');
  
  if (navTrigger && trigger) {
      navTrigger.addEventListener('change', function() {
          if (this.checked) {
              trigger.style.display = 'block';
          } else {
              trigger.style.display = 'none';
          }
      });
  }
  
  // Smooth scrolling for anchor links
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach(link => {
      link.addEventListener('click', function(e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
              target.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start'
              });
          }
      });
  });
  
  // Language switcher functionality
  const langSwitcher = document.querySelector('.language-switcher');
  if (langSwitcher) {
      langSwitcher.addEventListener('click', function(e) {
          if (e.target.classList.contains('lang-link')) {
              // Add any additional language switching logic here
              console.log('Language switched to:', e.target.textContent);
          }
      });
  }
});