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

    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeDesc();
        }
    });
});

function scrollAbout() {
    const about = document.getElementById("about"); 
    about.scrollIntoView({ behavior: 'smooth' });    
}

function openDesc(el) {
    document.getElementById("descModal").classList.remove("hide");
    document.getElementById("descModal").classList.add("show");
    document.getElementById("epTitle").innerHTML = el.getElementsByTagName('h3')[0].innerText;
    document.getElementById("epDesc").innerHTML = el.getAttribute('data-epDesc');
}

function closeDesc() {
    document.getElementById("descModal").classList.remove("show");
    setTimeout(() => {
        document.getElementById("descModal").classList.add("hide");
    }, 300);
}
