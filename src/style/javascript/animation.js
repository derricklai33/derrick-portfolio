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

    var mq = window.matchMedia( "(max-width: 800px)" );

    if (mq.matches){
        window.addEventListener('scroll', function () {
            navbar.classList.toggle('scrolling-active',window.scrollY > 0);
        });
    }

    else{
        
    }
}



navSilde();
navbarScroll();