// script.js

document.addEventListener('DOMContentLoaded', () => {
    console.log("TheHackMic website loaded successfully!");

    const playButtons = document.querySelectorAll('.episode button');
    playButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Playing episode...'); 
        });
    });

    // hc flag
    const navBar = document.querySelector('.navbar');
    if (navBar) {
        const flag = document.createElement('img');
        flag.src = 'https://assets.hackclub.com/flag-orpheus-left.svg';
        flag.alt = 'Hack Club Flag';
        flag.style.height = '40px';
        navBar.prepend(flag);
    }

    const body = document.body;
    body.style.transition = 'all 0.3s ease-in-out';

    const buttons = document.querySelectorAll('button, .cta-button');
    buttons.forEach(button => {
        button.style.transition = 'background-color 0.3s, color 0.3s';
        button.addEventListener('mouseover', () => {
            button.style.backgroundColor = '#ec3750';
            button.style.color = '#ffffff';
        });
        button.addEventListener('mouseout', () => {
            button.style.backgroundColor = '';
            button.style.color = '';
        });
    });
});
