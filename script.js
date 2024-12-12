// script.js

document.addEventListener('DOMContentLoaded', () => {
    console.log("TheHackMic website loaded successfully!");

    const playButtons = document.querySelectorAll('.episode button');
    playButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Playing episode...'); 
        });
    });
});
