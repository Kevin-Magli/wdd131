const hamburger = document.getElementById('hamburger-menu');
const navLinks = document.querySelectorAll('.nav-link');

function updateNavDisplay() {
    if (window.innerWidth >= 600) {
        hamburger.style.display = 'none';
        navLinks.forEach(link => {
            link.style.display = 'block';
        });
    } else {
        hamburger.style.display = 'block';
        navLinks.forEach(link => {
            link.style.display = 'none';
        });
    }
}

function toggleNavLinks() {
    navLinks.forEach(link => {
        if (link.style.display === 'none' || link.style.display === '') {
            link.style.display = 'block';
            hamburger.classList.add('active');
            hamburger.textContent = '✕';
        } else {
            link.style.display = 'none';
            hamburger.classList.remove('active');
            hamburger.textContent = '☰';
        }
    });
}

updateNavDisplay();

hamburger.addEventListener('click', toggleNavLinks);

window.addEventListener('resize', updateNavDisplay);

