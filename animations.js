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
    }, 300); //tempo em ms para o rastro
}        //mudar para deixar o efeito pixelado


//Tema Claro/Escuro(tentar)

/*TER UMA SEÇÃO PARA CERTIFICADOS ANIMADA
Exibição de Certificados: Um carrossel ou galeria interativa que exibe certificações (com links para as versões originais).*/
