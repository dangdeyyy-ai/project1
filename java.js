const slides = document.querySelectorAll(".slide");
const webBtn = document.querySelector(".web");
const appBtn = document.querySelector(".app");
const designBtn = document.querySelector(".design");
const buttons = [webBtn, appBtn, designBtn];

let current = 0;

function showSlide(index) {
  slides.forEach((slide) => slide.classList.remove("active"));
  slides[index].classList.add("active");
}

function resetButtonColors() {
  buttons.forEach((btn) => {
    btn.style.backgroundColor = "";
  });
}

webBtn.addEventListener("click", function () {
  resetButtonColors();
  current = 1 % slides.length;
  showSlide(current);
  this.style.backgroundColor = "#d1d1d1";
});

appBtn.addEventListener("click", function () {
  resetButtonColors();
  current = 2 % slides.length;
  showSlide(current);
  this.style.backgroundColor = "#d1d1d1";
});

designBtn.addEventListener("click", function () {
  resetButtonColors();
  current = 3 % slides.length;
  showSlide(current);
  this.style.backgroundColor = "#d1d1d1";
});

setTimeout(() => {
  showSlide(current);
}, 3000);
