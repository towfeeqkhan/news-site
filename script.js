const hamburgerLinks = document.querySelector(".hamburger-links");

const hamburgerEl = document.querySelector(".hamburger");

hamburgerEl.addEventListener("click", function () {
  hamburgerLinks.classList.toggle("hidden");
});
