// Mobile menu toggle
const menuBtn = document.getElementById("menu-btn");
const navMenu = document.getElementById("nav-menu");

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  navMenu.style.display = navMenu.style.display === "flex" ? "none" : "flex";
});

// Fade-in on scroll
const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {
  const triggerBottom = window.innerHeight / 5 * 4;
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < triggerBottom) {
      section.classList.add("visible");
    }
  });
});

// Typing animation
const typingText = ["IT Support Engineer", "Desktop Support", "Technical Support"];
let i = 0;
let j = 0;
let currentText = "";
let isDeleting = false;
const typingSpeed = 150;
const deletingSpeed = 80;

function type() {
  if (!isDeleting && j < typingText[i].length) {
    currentText += typingText[i][j];
    j++;
    document.getElementById("typing").textContent = currentText;
    setTimeout(type, typingSpeed);
  } else if (isDeleting && j > 0) {
    currentText = currentText.slice(0, -1);
    j--;
    document.getElementById("typing").textContent = currentText;
    setTimeout(type, deletingSpeed);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) {
      i = (i + 1) % typingText.length;
    }
    setTimeout(type, 1000);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  type();
});
