const orderBtn = document.querySelector('[data-modal-open-fruts]');
const closeBtn = document.getElementById('closeModal');
const modal = document.getElementById('orderModal');

orderBtn.addEventListener('click', () => {
    modal.classList.add('is-open');
    document.body.style.overflow = 'hidden';
});

closeBtn.addEventListener('click', () => {
    modal.classList.remove('is-open');
    document.body.style.overflow = '';
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('is-open');
        document.body.style.overflow = '';
    }
});

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
});

const form = document.getElementById("form");
const cardInput = document.getElementById("card");

form.addEventListener("submit", function(e) {

    const cardRegex = /^\d{13,19}$/;
    const cardValue = cardInput.value.trim();

    if (!cardRegex.test(cardValue)) {
        e.preventDefault(); // stop submission
        alert("Please enter a valid card number (13–19 digits only).");
        cardInput.focus();
    }

});