document.addEventListener('DOMContentLoaded', function () {
    const body = document.body;
    const elementsToAnimate = document.querySelectorAll('.fade-in'); // Seleciona os elementos

    // Adiciona a classe "visible" com atraso para cada elemento
    elementsToAnimate.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add('visible');
        }, index * 200); // Incrementa 200ms para cada elemento
    });

    // Remove a transição ao trocar de página
    body.style.opacity = 1;

    const navLinks = document.querySelectorAll('.lista-navegacao a');
    const loader = document.querySelector('.loader');

    function fadeOut(currentUrl) {
        body.style.transition = 'opacity 0.5s ease';
        body.style.opacity = 0;
        loader.style.transform = 'translateX(0%)';

        setTimeout(() => {
            window.location.href = currentUrl;
        }, 500);
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const url = this.getAttribute('href');
            fadeOut(url);
        });
    });
});
