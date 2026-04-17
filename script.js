
//INICIALIZAÇÃO GERAL
document.addEventListener('DOMContentLoaded', () => {
    initRevealOnScroll();
    initSmoothScroll();
    initMenuToggle();
});


//SCROLL REVEAL (animações)
function initRevealOnScroll() {
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

    // Executa ao carregar
    revealOnScroll();

    // Executa no scroll
    window.addEventListener('scroll', revealOnScroll);
}


//SCROLL SUAVE (âncoras)
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            const targetId = link.getAttribute('href');

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
}


// NAVBAR SCROLL EFFECT
window.addEventListener('scroll', () => {
    const navbar = document.querySelector(".navbar");

    if (navbar) {
        navbar.classList.toggle("scrolled", window.scrollY > 0);
    }
});

// MENU MOBILE

function initMenuToggle() {
    const icon = document.querySelector("#icon");
    const lista = document.querySelector(".lista-menu-burger");

    if (!icon || !lista) return;

    icon.addEventListener("click", () => {
        const ativo = lista.classList.toggle("ativo");

        icon.src = ativo
            ? "img/icon_menu_close.svg"
            : "img/icon_menu_burger.svg";
    });
}