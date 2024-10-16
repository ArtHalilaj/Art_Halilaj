const menuOpen = document.querySelector(".menu");
const menuClose = document.querySelector(".close");
const overlay = document.getElementById("mobile__menu");

menuOpen.addEventListener("click", () => {
  overlay.classList.add("overlay--active");
});

menuClose.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
});
