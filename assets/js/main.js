// Initialize AOS Animation
AOS.init({
  duration: 1000,
  once: true
});

// Dark/Light Mode Toggle
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  themeToggle.textContent =
    document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

// Scroll to Top Button
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.onscroll = function () {
  if (document.documentElement.scrollTop > 200) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
};

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});


// Function to display products
function displayProducts() {
  const container = document.getElementById("productContainer");
  container.innerHTML = "";

  products.forEach((product) => {
    const card = `
      <div class="col-md-4 col-lg-3" data-aos="fade-up">
        <div class="product-card card h-100">
          <img src="${product.image}" alt="${product.name}">
          <div class="card-body text-center">
            <h5>${product.name}</h5>
            <p class="price">₹${product.price}</p>
            <div class="rating mb-2">
              ${"★".repeat(Math.floor(product.rating))}${product.rating % 1 !== 0 ? "½" : ""}
            </div>
            <button class="btn btn-sm">Add to Cart</button>
          </div>
        </div>
      </div>
    `;
    container.insertAdjacentHTML("beforeend", card);
  });
}

// Call function on load
document.addEventListener("DOMContentLoaded", displayProducts);

// 💙 ACTIVE LINK HIGHLIGHT ON CLICK
const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.forEach(l => l.classList.remove("active-link"));
    link.classList.add("active-link");
  });
});
