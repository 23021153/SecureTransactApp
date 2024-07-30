document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('.login-form form');
    const contactForm = document.querySelector('.contact-form form');


    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Login successful');
        loginForm.reset();
    });


    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Thank you for your message. We will get back to you soon.');
        contactForm.reset();
    });
});

