// On sélectionne le bouton par son ID
const bouton = document.getElementById('monBouton');

// On écoute le clic sur le bouton
bouton.addEventListener('click', function() {
    alert('Mon numéro: 06.65.17.34.43\nMon mail: burzikillian@gmail.com');
});
// Configuration de l'animation d'apparition
const sr = ScrollReveal({
    origin: 'bottom',
    distance: '50px',
    duration: 1000,
    reset: false
});

// Appliquer l'animation aux éléments
sr.reveal('.hero h1, .hero p', { interval: 200 });
sr.reveal('.card', { interval: 150 });
sr.reveal('.stage-card', { interval: 200 });
const textElement = document.getElementById("typing-text");
const phrases = ["Étudiant en BTS SIO", "Spécialité SISR", "Futur Administrateur Réseau 🚀"];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentPhrase = phrases[phraseIndex];
    
    if (isDeleting) {
        textElement.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
    } else {
        textElement.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
        isDeleting = true;
        setTimeout(typeEffect, 1500); // Pause avant de supprimer
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(typeEffect, 500);
    } else {
        setTimeout(typeEffect, isDeleting ? 50 : 100);
    }
}

document.addEventListener("DOMContentLoaded", typeEffect);
// Surlignage de l'onglet actif au défilement
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 150) {
            current = section.getAttribute("id");
        }
    });

    navLi.forEach((a) => {
        a.classList.remove("active");
        if (a.getAttribute("href") === `#${current}`) {
            a.classList.add("active");
        }
    });
});
particlesJS("particles-js", {
    "particles": {
        "number": { "value": 60 },
        "color": { "value": "#38bdf8" },
        "line_linked": { "enable": true, "distance": 150, "color": "#38bdf8", "opacity": 0.4, "width": 1 },
        "move": { "enable": true, "speed": 2 }
    },
    "interactivity": {
        "events": { "onhover": { "enable": true, "mode": "grab" } }
    }
});
// Effet Spotlight interactif sur les cartes
document.querySelectorAll('.card, .stage-card').forEach(card => {
    card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        card.style.setProperty('--x', `${x}px`);
        card.style.setProperty('--y', `${y}px`);
    });
});
// Mise à jour de la barre de progression au scroll
window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById('scroll-progress').style.width = scrolled + '%';
});