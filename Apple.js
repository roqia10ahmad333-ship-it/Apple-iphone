let img = document.querySelector('.img');
let container = document.querySelector('.container');

function phones(phone){
    img.src = phone;
}

function colors(color){
    container.style.background = color;
    document.body.style.background = color;
}

const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Thank you for reaching out! Your message has been sent successfully.');
        this.reset();
    });
}