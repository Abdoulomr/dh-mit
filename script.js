const menu = document.querySelector('.menu');
const open = document.querySelector('.open');
const close = document.querySelector('.close');
const nav = document.querySelector('.nav');


// affiche le nav Menu 
menu.addEventListener('click', () => {
    nav.classList.toggle('nav__active');
    open.classList.toggle('open__hidden');
    close.classList.toggle('close__visible');
});



// Fermer la nav quand on clique sur un des lien de la navigation

const navLinks = document.querySelectorAll('.nav__link');


navLinks.forEach((navLink) => {
    navLink.addEventListener('click', () => {
        nav.classList.remove('nav__active');
        open.classList.remove('open__hidden');
        close.classList.remove('close__visible');
    });
});

