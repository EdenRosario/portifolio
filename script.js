document.addEventListener('DOMContentLoaded', () => {
   
    const revealElements = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 100;

        revealElements.forEach((element) => {
            const elementTop = element.getBoundingClientRect().top;

            
            if (elementTop < windowHeight - elementVisible) {
                element.classList.add('active');
            }
        });
    };

  
    revealOnScroll();

    
    window.addEventListener('scroll', revealOnScroll);

    
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');

            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    navbar.classList.toggle("scrolled", window.scrollY > 0);
});

const icon = document.querySelector("#icon");
const lista = document.querySelector(".lista-menu-burger");

icon.addEventListener("click", () => {

    const ativo = lista.classList.toggle("ativo");

    if (ativo) {
        icon.src = "img/icon_menu_close.svg";
    } else {
        icon.src = "img/icon_menu_burger.svg";
    }

});