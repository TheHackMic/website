// script.js

document.addEventListener('DOMContentLoaded', () => {
    console.log("TheHackMic website loaded successfully!");
    const playButtons = document.querySelectorAll('.episode button');
    playButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            const episodeLink = button.getAttribute('data-link');
            if (episodeLink) {
                window.open(episodeLink, '_blank'); 
            } else {
                alert('No link specified for this episode.');
            }
        });
    });

    // Hack Club flag
    const navBar = document.querySelector('.navbar');
    if (navBar) {
        const flag = document.createElement('img');
        flag.src = 'https://assets.hackclub.com/flag-orpheus-left.svg';
        flag.alt = 'Hack Club Flag';
        flag.style.height = '40px';
        navBar.prepend(flag);
    }

    
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

    
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

function scrollAbout() {

    const about = document.getElementById("about"); 
  
    about.scrollIntoView({ behavior: 'smooth' });  
  
  }
