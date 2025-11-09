const menuToggle = document.getElementById("menuToggle");
const sideMenu = document.getElementById("sideMenu");
const overlay = document.getElementById("overlay");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  sideMenu.classList.toggle("open");
  overlay.classList.toggle("show");
});

overlay.addEventListener("click", () => {
  menuToggle.classList.remove("active");
  sideMenu.classList.remove("open");
  overlay.classList.remove("show");
});
