const navSilde = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    burger.addEventListener('click',() => {
        nav.classList.toggle('nav-active');
    });
}

const navbarScroll = () => {

    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function () {
        if (window.innerWidth > 800) {
            navbar.classList.toggle('scrolling-active', window.scrollY > 0);
        }
    });
}

navSilde();
navbarScroll();