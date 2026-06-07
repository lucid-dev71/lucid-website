// Hamburger Menu
document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelector('.nav-links');
    
    const hamburger = document.createElement('div');
    hamburger.className = 'hamburger';
    hamburger.innerHTML = '☰';
    hamburger.style.display = 'none';
    hamburger.style.fontSize = '2rem';
    hamburger.style.cursor = 'pointer';
    navbar.appendChild(hamburger);

    // Show hamburger on mobile
    function checkMobile() {
        if (window.innerWidth <= 768) {
            hamburger.style.display = 'block';
            navLinks.style.display = 'none';
        } else {
            hamburger.style.display = 'none';
            navLinks.style.display = 'flex';
        }
    }
    window.addEventListener('resize', checkMobile);
    checkMobile();

    hamburger.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
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

            modal.querySelector('.close').addEventListener('click', () => modal.style.display = 'none');
            modal.addEventListener('click', (e) => { if (e.target === modal) modal.style.display = 'none'; });
        }
        document.getElementById('modalImage').src = src;
        modal.style.display = 'flex';
    }
    window.openImage = openImage; // Make global for inline onclick

    // Contact Form
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const success = document.createElement('p');
            success.className = 'success-message';
            success.textContent = '✅ Thank you! Your message has been received. We will contact you soon.';
            form.appendChild(success);
            form.reset();
            setTimeout(() => success.remove(), 5000);
        });
    });

    // FAQ Accordion
    document.querySelectorAll('.faq-question').forEach(q => {
        q.addEventListener('click', () => {
            const answer = q.nextElementSibling;
            answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
        });
    });

    // Back to Top
    const backToTop = document.createElement('button');
    backToTop.id = 'backToTop';
    backToTop.innerHTML = '↑';
    document.body.appendChild(backToTop);

    window.addEventListener('scroll', () => {
        backToTop.style.display = window.scrollY > 300 ? 'block' : 'none';
    });
    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});