// Smooth scroll for navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      const targetId = event.target.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
  
  // Alert when product is clicked
  document.querySelectorAll('.product').forEach(product => {
    product.addEventListener('click', () => {
      alert('Thanks for exploring! Check back soon for more details.');
    });
  });
  