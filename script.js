// script.js

// Função para rolagem suave
function smoothScroll(target) {
  const element = document.querySelector(target);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}

// Adiciona eventos de clique aos botões
document.addEventListener('DOMContentLoaded', () => {
  const exploreButton = document.querySelector('.btn[href="#conteudo"]');
  const participateButton = document.querySelector('.btn[href="#"]');

  if (exploreButton) {
    exploreButton.addEventListener('click', (event) => {
      event.preventDefault(); // Previne o comportamento padrão do link
      smoothScroll('#conteudo'); // Rola suavemente para a seção de conteúdo
    });
  }

  if (participateButton) {
    participateButton.addEventListener('click', (event) => {
      event.preventDefault(); // Previne o comportamento padrão do link
      alert('Obrigado por querer participar!'); // Exibe um alerta ao clicar no botão
      // Aqui você pode adicionar mais lógica para redirecionar ou abrir um formulário
    });
  }
});
