// Optional: dismiss alert
document.querySelectorAll('.alert a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    this.closest('.alert').style.display = 'none';
  });
});
// Back to top button logic & smooth scroll
const toTop = document.getElementById('toTop');

const toggleToTop = () => {
  if (window.scrollY > 300) {
    toTop.classList.add('show');
  } else {
    toTop.classList.remove('show');
  }
};
window.addEventListener('scroll', toggleToTop);

toTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Optional: smooth anchor links in footer
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href');
    if (id.length > 1) {
      const el = document.querySelector(id);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  });
});