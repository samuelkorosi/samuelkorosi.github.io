const navToggle = document.getElementById('nav-toggle');
const mobileMenu = document.getElementById('mobile-menu');

navToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});


const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');

document.querySelectorAll('.zoomable-img').forEach(image => {
    image.addEventListener('click', () => {
        modal.classList.add('active');
        modalImage.src = image.src;
        modalImage.alt = image.alt;
    });
});

modal.addEventListener('click', () => {
    modal.classList.remove('active');
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        modal.classList.remove('active');
    }
});

// ======================================
// Theme Toggle
// ======================================
const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
    document.documentElement.setAttribute(
        "data-theme",
        savedTheme
    );
} else {
    const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
    ).matches;

    document.documentElement.setAttribute(
        "data-theme",
        prefersDark ? "dark" : "light"
    );
}

const themeToggle = document.querySelector(".theme-toggle");

function updateThemeIcon() {
    const currentTheme =
        document.documentElement.getAttribute("data-theme");

    themeToggle.textContent =
        currentTheme === "dark"
            ? "☀️"
            : "🌙";
}

updateThemeIcon();

themeToggle.addEventListener("click", () => {

    const currentTheme =
        document.documentElement.getAttribute("data-theme");

    const newTheme =
        currentTheme === "dark"
            ? "light"
            : "dark";

    document.documentElement.setAttribute(
        "data-theme",
        newTheme
    );

    localStorage.setItem(
        "theme",
        newTheme
    );

    updateThemeIcon();
});