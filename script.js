
document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio initialized');

    // Mobile menu toggle
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    mobileBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileBtn.classList.toggle('active');
    });

    // Close menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            mobileBtn.classList.remove('active');
        });
    });

    // Mobile menu actions are handled above

    // Future: Add model-viewer specific events if needed


    // Smooth scroll for anchor links (if not supported natively)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Contact Form Handling
    const contactForm = document.getElementById('contact-form');
    const iframe = document.getElementById('hidden_iframe');
    const popup = document.getElementById('confirmation-popup');
    const closePopupBtn = document.getElementById('close-popup');
    let formSubmitted = false;

    if (contactForm) {
        contactForm.addEventListener('submit', () => {
            formSubmitted = true;
        });
    }

    if (iframe) {
        iframe.addEventListener('load', () => {
            if (formSubmitted) {
                popup.classList.add('show-popup');
                contactForm.reset();
                formSubmitted = false;
            }
        });
    }

    if (closePopupBtn) {
        closePopupBtn.addEventListener('click', () => {
            popup.classList.remove('show-popup');
        });
    }

    if (popup) {
        popup.addEventListener('click', (e) => {
            if (e.target === popup) {
                popup.classList.remove('show-popup');
            }
        });
    }
});
