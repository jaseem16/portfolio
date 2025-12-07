// Mobile Navigation Toggle
const menuBtn = document.getElementById("menu-btn");
const navMenu = document.getElementById("nav-menu");

menuBtn.addEventListener("click", () => {
    navMenu.querySelector("ul").style.display =
        navMenu.querySelector("ul").style.display === "flex" ? "none" : "flex";
});

// Fade-in Animation
const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {
    let trigger = window.innerHeight * 0.8;

    sections.forEach(section => {
        let top = section.getBoundingClientRect().top;
        if (top < trigger) {
            section.classList.add("visible");
        }
    });
});
