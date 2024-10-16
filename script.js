const menuOpen = document.querySelector(".menu");
const menuClose = document.querySelector(".close");
const overlay = document.getElementById("mobile__menu");

menuOpen.addEventListener("click", () => {
  overlay.classList.add("overlay--active");
});

menuClose.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
});


document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    // Hide the form and show the thank you message
    const form = document.getElementById('contact-form');
    const thankYouMessage = document.getElementById('thank-you-message');
    
    form.classList.add('hidden');
    thankYouMessage.classList.remove('hidden');
});
