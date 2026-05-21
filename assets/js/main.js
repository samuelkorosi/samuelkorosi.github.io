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