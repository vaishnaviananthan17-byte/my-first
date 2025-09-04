// Countdown Timer
const countdownDate = new Date("Nov 29, 2025 00:00:00").getTime();

const timer = setInterval(() => {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

    if (distance < 0) {
        clearInterval(timer);
        document.querySelector(".countdown").innerHTML = "The sale has started!";
    }
}, 1000);
// Example: Smooth scroll when clicking "Shop Now"
document.querySelector(".btn-danger").addEventListener("click", function(e){
  e.preventDefault();
  window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
});