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


document.addEventListener('DOMContentLoaded', () => {
    const burger = document.getElementById('burger');
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.navbar a');

    // Alternar visibilidade do menu
    burger.addEventListener('click', () => {
        navbar.classList.toggle('active'); // Abre/fecha o menu
    });

    // Fechar o menu ao clicar em um link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navbar.classList.remove('active'); // Fecha o menu
        });
    });

    // Garantir que o menu feche na troca de página
    if (navbar.classList.contains('active')) {
        navbar.classList.remove('active');
    }
});

/*TER UMA SEÇÃO PARA CERTIFICADOS ANIMADA
Exibição de Certificados: Um carrossel ou galeria interativa que exibe certificações (com links para as versões originais).*/

//Menu Lateral ou Navbar Animada(responsividade)
