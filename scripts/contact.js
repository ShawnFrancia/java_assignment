// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.
let submit_button = document.getElementById("submit-button");

function submit_message() {
    let main = document.querySelector(".contact");
    // let main = document..getElementById(`contact-page`); works
    // let main = document.getElementByClassName(`contact`); does not work
    main.innerHTML = "Thank You For Your Message";
    main.style.fontSize = "24px";
}

submit_button.addEventListener("click", submit_message);