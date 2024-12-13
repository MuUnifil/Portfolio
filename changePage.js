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

    // Gerencia cliques nos links de navegação
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            const url = this.href;

            // Verifica se o link é externo (não pertence ao mesmo domínio)
            if (this.target === '_blank' || url.startsWith('http') && !url.includes(window.location.hostname)) {
                // Permite o comportamento padrão para links externos
                return;
            }

            e.preventDefault(); // Previne o comportamento padrão
            navbar.classList.remove('active'); // Fecha o menu
            fadeOut(url); // Faz a transição
        });
    });
});
