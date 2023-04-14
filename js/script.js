//! ========== menu icon navbar ==========

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

// <i class='bx bx-x'></i>
menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


                    //! ========== scroll sections active link ==========

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + "]").classList.add('active');
            });
        }

    });


                    //! ========== sticky navbar ==========

    let header = document.querySelector('.header');

    header.classList.toggle('sticky', window.scrollY > 100 );


                    //! ========== remove menu navbar when click navbar link (scroll) ==========

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}


                    //! ========== swipper ==========

let swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    grapCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

                    //! ========== dark light mode ==========

let darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.onclick = () =>{
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
}


                    //! ========== Scroll Reveal ==========
                    
ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 1500,
    delay: 150
});

ScrollReveal().reveal('.home-content , .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img img, .services-container, .portfolio-box, .testimonial-wrapper, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1 , .about-img img', { origin: 'left' });
ScrollReveal().reveal('.home-content h3, .home-content p , .about-content', { origin: 'right' });


