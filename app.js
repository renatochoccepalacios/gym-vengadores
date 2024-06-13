const buttonHamburguer = document.querySelector('#button-hamburguer');
const navMenu = document.querySelector('#nav-menu');
const iconBars = document.querySelector('#button-hamburguer i');
const nav = document.querySelector("#nav");

buttonHamburguer.addEventListener('click', () => {
    if(navMenu.classList.contains('menu-close')) {
        navMenu.classList.add("menu-open");
        navMenu.classList.remove("menu-close");
        iconBars.style.color = '#fff';
        iconBars.setAttribute('class', 'fa-solid fa-x') // reemplazar clase
    }else {
        navMenu.classList.remove("menu-open");
        navMenu.classList.add("menu-close");
        iconBars.style.color = '#000';
        iconBars.setAttribute('class', 'fa-solid fa-bars') // reemplazar clase

    }
});


// window.addEventListener('scroll', function () {
//     nav.classList.toggle('abajo', window.scrollY > 0)
// })