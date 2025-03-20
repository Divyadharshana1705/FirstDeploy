// JavaScript for Smooth Scrolling (if needed)
document.querySelectorAll('a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      if (this.getAttribute('href').startsWith('#')) {
          e.preventDefault();
          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          });
      }
  });
});



