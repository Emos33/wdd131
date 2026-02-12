// Footer Year and Time
const yearSpan = document.getElementById("year");
const timeParagraph = document.getElementById("time");

if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

if (timeParagraph) {
  const now = new Date();
  timeParagraph.textContent = `Last Updated: ${now.toLocaleString()}`;
}

const menuButton = document.querySelector("#menuButton");
const nav = document.querySelector("nav");

menuButton.addEventListener("click", () => {
    nav.classList.toggle("open");

    if (nav.classList.contains("open")) {
        menuButton.textContent = "✖";
    } else {
        menuButton.textContent = "☰";
    }
});


// Product Data (Object + Array)
const products = [
  { name: "Rice", category: "food" },
  { name: "Beans", category: "food" },
  { name: "Detergent", category: "cleaning" },
  { name: "Disinfectant", category: "cleaning" }
];

// Render Products
function renderProducts(list) {
  const container = document.getElementById("productContainer");
  if (!container) return;

  container.innerHTML = list.map(product =>
    `<div class="card">
       <h3>${product.name}</h3>
       <p>Category: ${product.category}</p>
     </div>`
  ).join("");
}

// Filter Functions
function filterProducts(category) {
  if (category === "all") {
    renderProducts(products);
  } else {
    const filtered = products.filter(product => product.category === category);
    renderProducts(filtered);
  }
}

// Event Listeners
const showAllBtn = document.getElementById("showAll");
const foodBtn = document.getElementById("filterFood");
const cleaningBtn = document.getElementById("filterCleaning");

if (showAllBtn) {
  renderProducts(products);

  showAllBtn.addEventListener("click", () => filterProducts("all"));
  foodBtn.addEventListener("click", () => filterProducts("food"));
  cleaningBtn.addEventListener("click", () => filterProducts("cleaning"));
}

// Contact Form + localStorage
const form = document.getElementById("contactForm");

if (form) {
  form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const category = document.getElementById("category").value;
    const confirmation = document.getElementById("confirmation");

    localStorage.setItem("customerName", name);

    if (category === "bulk") {
      confirmation.textContent = `Thank you ${name}. Our bulk sales team will contact you soon.`;
    } else {
      confirmation.textContent = `Thank you ${name}. Our retail team will contact you shortly.`;
    }

    form.reset();
  });
}
