const langBtn = document.querySelector('#lang-button');
const langSpan = document.querySelectorAll('.lang');


langBtn.addEventListener('click', () => {
    langSpan.forEach(item => {
        item.classList.contains('hide')
            ? item.classList.remove('hide')
            : item.classList.add('hide');
    });
});

window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.nav-menu'),
        menuItem = document.querySelectorAll('.nav-menu__list-item'),
        hamburger = document.querySelector('.header-menu__icon'),
        mobileMenu = document.querySelector('.header-mobile');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('nav-menu_active');
        mobileMenu.classList.toggle('invisible');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('nav-menu_active');
        })
    })
})
