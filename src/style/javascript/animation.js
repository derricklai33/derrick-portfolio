const navSilde = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navbar2 = document.querySelector('.navbar');

    burger.addEventListener('click',() => {
        nav.classList.toggle('nav-active');
        navbar2.classList.toggle('nav-active2');
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