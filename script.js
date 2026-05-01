const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = this.name.value;

        alert(`${name}, your message has been received. Thank you for contacting Motorcycle Riding Guide!`);

        this.reset();
    });
}