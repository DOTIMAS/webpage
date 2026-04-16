const orderBtn = document.querySelector('[data-modal-open-fruts]');
const closeBtn = document.getElementById('closeModal');
const modal = document.getElementById('orderModal');


//Open the form
orderBtn.addEventListener('click', () => {
    modal.classList.add('is-open');
    document.body.style.overflow = 'hidden';
});

//Close the order form (Button "X")
closeBtn.addEventListener('click', () => {
    modal.classList.remove('is-open');
    document.body.style.overflow = '';
});

//Close the order form anywhere
modal.addEventListener('click', (e) => {
    //Use if as the form will only close when the user click outside the form
    if (e.target === modal) {
        modal.classList.remove('is-open');
        document.body.style.overflow = '';
    }
});

//Makes the header sticky
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
});

//For the card number valdation

const form = document.getElementById("form");
const cardInput = document.getElementById("card");

form.addEventListener("submit", function(e) {

    //Using regex method that it can only proceed with the card number from 13 to 19 digits only.
    const cardRegex = /^\d{13,19}$/;
    const cardValue = cardInput.value.trim();

    if (!cardRegex.test(cardValue)) {
        e.preventDefault(); // stop submission
        alert("Please enter a valid card number (13–19 digits only).");
        cardInput.focus();
    }

});

//Manipulating HTMl
let email = document.querySelector(".freshbox-input");
email.placeholder = "Enter Email";

let fullName = document.querySelector("#fullname");
fullName.placeholder = "Full Name";

let orderemail = document.querySelector("#email");
orderemail.placeholder = "Enter your email";

let cardnum = document.querySelector("#card");
cardnum.placeholder = "Enter your preferred card payment";

let link = document.querySelectorAll(".nav-link");

let sections = ["#howItWorks", "#fruits", "#contact"]

for (i = 0; i < link.length; i++){
    link[i].href = sections[i % sections.length];
}


function triggerFocus() {
    let input = document.querySelector(".orderinput");
    input.style.color = "#131313"; // Change text color on focus
    input.style.backgroundColor = "#f0f0f0"; // Change background color on focus
}

function triggerBlue() {
    let input = document.querySelector(".orderinput");
    input.style.color = "#d75555"; // Change text color on focus
    input.style.backgroundColor = "#ffffff"; // Change background color on blur
}




