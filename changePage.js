document.addEventListener('DOMContentLoaded', function () {
    const body = document.body;
    const elementsToAnimate = document.querySelectorAll('.fade-in');
    const loader = document.querySelector('.loader');
    const navbar = document.getElementById('navbar'); // Navbar
    const navLinks = document.querySelectorAll('nav a'); // Links

    // Função para adicionar animações de entrada
    function animateElements() {
        elementsToAnimate.forEach((element, index) => {
            setTimeout(() => {
                element.classList.add('visible');
            }, index * 200);
        });
    }

    // Inicializa animações ao carregar a página
    animateElements();

    function fadeOut(currentUrl) {
        body.style.transition = 'opacity 0.5s ease';
        body.style.opacity = 0;
        loader.style.transform = 'translateX(0%)';

        setTimeout(() => {
            if (currentUrl === window.location.href) {
                // Reinicia a página no mesmo URL
                body.style.opacity = 1;
                loader.style.transform = 'translateX(-100%)';
                elementsToAnimate.forEach(element => element.classList.remove('visible')); // Remove a classe 'visible'
                animateElements(); // Reinicia as animações
            } else {
                window.location.href = currentUrl;
            }
        }, 500);
    }

    // Fecha o menu e realiza a transição na troca de página
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const url = this.href;

            navbar.classList.remove('active'); // Fecha o menu
            fadeOut(url); // Faz a transição
        });
    });
});
