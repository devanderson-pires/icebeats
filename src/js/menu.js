const menuHamb = document.querySelector('.hamb');
const menu = document.querySelector('#menu');
const menuLinks = document.querySelectorAll('.menu__link');

menuHamb.addEventListener('click', () => {

    menuHamb.classList.toggle('show');
});

menuLinks.forEach(menuLink => menuLink.addEventListener('click', () => {

    if(menu.classList.contains('show')) {

        menu.classList.remove('show');
        menuHamb.classList.toggle('show');
    }
}));