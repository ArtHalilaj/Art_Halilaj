const menuOpen = document.querySelector(".menu");
const menuClose = document.querySelector(".close");
const overlay = document.getElementById("mobile__menu");

menuOpen.addEventListener("click", () => {
  overlay.classList.add("overlay--active");
});

menuClose.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
});

document.addEventListener('DOMContentLoaded', () => {
    const skillsToggle = document.getElementById('skills-toggle');
    const skillsSection = document.getElementById('skills-section');

    // Toggle the visibility of the skills section
    skillsToggle.addEventListener('click', () => {
        if (skillsSection.style.display === "none" || skillsSection.style.display === "") {
            skillsSection.style.display = "block";
            skillsToggle.textContent = 'Hide My Skills';
        } else {
            skillsSection.style.display = "none";
            skillsToggle.textContent = 'View My Skills';
        }
    });
});
