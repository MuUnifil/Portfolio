//MUDAR BACKGROUND QUANDO PASSAR O MOUSE(opacidade)
document.addEventListener('mousemove', criarRastro);

function criarRastro(event) {
    const rastro = document.createElement('div'); //cria uma div
    rastro.classList.add('trail');  //adiciona a classe trail a div criada
    
    rastro.style.left = `${event.pageX}px`;
    rastro.style.top = `${event.pageY}px`;
    
    document.body.appendChild(rastro);  

  
    setTimeout(() => {
        rastro.remove();
    }, 100); //tempo em ms para o rastro
    
}       

//Menu Lateral ou Navbar Animada(responsividade)
document.addEventListener('DOMContentLoaded', () => {
    const burger = document.getElementById('burger');
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.navbar a');

    // Alternar visibilidade do menu ao clicar no burger
    burger.addEventListener('click', () => {
        navbar.classList.toggle('active'); // Abre/fecha o menu
    });

    // Fechar o menu ao clicar em qualquer link dentro dele
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navbar.classList.remove('active'); // Fecha o menu
        });
    });

    // Fechar o menu ao rolar a página
    window.addEventListener('scroll', () => {
        if (navbar.classList.contains('active')) {
            navbar.classList.remove('active'); // Fecha o menu
        }
    });
});

/*TER UMA SEÇÃO PARA CERTIFICADOS ANIMADA
Exibição de Certificados: Um carrossel ou galeria interativa que exibe certificações (com links para as versões originais).*/

