// Simple cart badge increment
document.querySelectorAll(".add-cart").forEach(btn => {
  btn.addEventListener("click", () => {
    const badge = document.getElementById("cartCount");
    badge.textContent = String(Number(badge.textContent) + 1);
  });
});

// Sorting
const grid = document.getElementById("productGrid");
const select = document.getElementById("sortSelect");

select.addEventListener("change", () => {
  const items = [...grid.children];
});

  const getVal = (el, key) => Number(el.getAttribute(data-$ {key}));

  const sorters = {
    "default": () => 0, // keep order
    "price-asc": (a, b) => getVal(a, "price") - getVal(b, "price"),
    "price-desc": (a, b) => getVal(b, "price") - getVal(a, "price"),
    "discount-desc": (a, b) => getVal(b, "discount") - getVal(a, "discount"),
    "rating-desc": (a, b) => getVal(b, "rating") - getVal(a, "rating"),
  };

  const key = select.value;
  if (key === "default") {
    // Re-append in original DOM order using an index snapshot
    items.sort((a, b) => a._idx - b._idx);
  } else {
    items.sort(sorters[key]);
  }
// Scroll to Top Button
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.onscroll = function () {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
};

scrollTopBtn.onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

