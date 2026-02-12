// Set current year automatically
document.getElementById("year").textContent = new Date().getFullYear();

// Toggle wireframe highlight
const button = document.getElementById("toggleWireframe");
const wireframes = document.querySelectorAll(".wireframe");

button.addEventListener("click", () => {
  wireframes.forEach(frame => {
    frame.classList.toggle("highlight");
  });
});
