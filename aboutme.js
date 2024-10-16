document.addEventListener('DOMContentLoaded', () => {
    // Toggle the mobile menu functionality
    const menuOpen = document.querySelector(".menu");
    const menuClose = document.querySelector(".close");
    const overlay = document.getElementById("mobile__menu");

    menuOpen.addEventListener("click", () => {
        overlay.classList.add("overlay--active");
    });

    menuClose.addEventListener("click", () => {
        overlay.classList.remove("overlay--active");
    });

    // Handle the "View My Skills" button functionality
    const skillsToggle = document.getElementById('skills-toggle');
    const skillsSection = document.getElementById('skills-section');

    if (skillsToggle) {
        // Add click event listener to toggle the skills section
        skillsToggle.addEventListener('click', () => {
            if (skillsSection.style.display === "none" || skillsSection.style.display === "") {
                skillsSection.style.display = "block";
                skillsToggle.textContent = 'Hide My Skills';
            } else {
                skillsSection.style.display = "none";
                skillsToggle.textContent = 'View My Skills';
            }
        });
    } else {
        console.error("Skills toggle button not found!");
    }

    // Close the mobile menu when the page loads (just in case it is open)
    if (overlay) {
        overlay.classList.remove("overlay--active");
    }
});
