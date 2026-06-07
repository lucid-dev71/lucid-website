// Smooth navigation
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        // Allow normal navigation between pages
    });
});

// Hamburger Menu
const hamburger = document.createElement('div');
hamburger.className = 'hamburger';
hamburger.innerHTML = '☰';
document.querySelector('.navbar').appendChild(hamburger);

const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Gallery Modal
function openImage(src) {
    let modal = document.getElementById('imageModal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'imageModal';
        modal.className = 'modal';
        modal.innerHTML = `
            <span class="close">&times;</span>
            <img class="modal-content" id="modalImage">
        `;
        document.body.appendChild(modal);
        
        modal.querySelector('.close').addEventListener('click', () => {
            modal.style.display = 'none';
        });
        
        modal.addEventListener('click', (e) => {
            if (e.target === modal) modal.style.display = 'none';
        });
    }
    
    document.getElementById('modalImage').src = src;
    modal.style.display = 'flex';
}

// Contact Form Handling
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you! Your message has been received. We will contact you soon.');
            form.reset();
        });
    }
});