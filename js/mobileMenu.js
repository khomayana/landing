const logo = document.querySelector('.header__pic');
const menu = document.querySelector('.header__menu');
const btn = document.querySelector('.header__btn');
const main = document.querySelector('.main-js');
const footer = document.querySelector('.footer')

logo.addEventListener('click', (() => {
    menu.classList.toggle('header__menu--show');
    btn.classList.toggle('header__btn--show');
    blur();

}))

btn.addEventListener('click', (() => {
    menu.classList.remove('header__menu--show');
    btn.classList.remove('header__btn--show');
    blur();
}))

function blur() {
    if (menu.classList.contains('header__menu--show')) {
        main.classList.add('blur-content');
        footer.classList.add('blur-content');
    }
    else {
        main.classList.remove('blur-content');
        footer.classList.remove('blur-content');
    }
}