// Show current year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Handle form submit
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault(); // stop page reload
  document.getElementById("formAlert").classList.remove("d-none");
  this.reset();
});