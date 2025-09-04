function changeQty(num) {
  let qtyInput = document.getElementById("qty");
  let current = parseInt(qtyInput.value);
  if (current + num > 0) {
    qtyInput.value = current + num;
  }
}
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