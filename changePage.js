document.addEventListener('DOMContentLoaded', function () {
    const body = document.body;
    const elementsToAnimate = document.querySelectorAll('.fade-in');
    const loader = document.querySelector('.loader');

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

    const navLinks = document.querySelectorAll('nav a');

    function fadeOut(currentUrl) {
        body.style.transition = 'opacity 0.5s ease';
        body.style.opacity = 0;
        loader.style.transform = 'translateX(0%)';

        setTimeout(() => {
            if (currentUrl === window.location.href) {
                // Força o reinício da página se for o mesmo URL
                body.style.opacity = 1;
                loader.style.transform = 'translateX(-100%)';
                elementsToAnimate.forEach(element => element.classList.remove('visible')); // Remove a classe 'visible'
                animateElements(); // Reinicia as animações
            } else {
                window.location.href = currentUrl;
            }
        }, 500);
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const url = this.href;

            fadeOut(url);
        });
    });
});
