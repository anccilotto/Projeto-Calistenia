document.addEventListener("DOMContentLoaded", () => {
  // Animação de fade-in ao rolar a página
  const faders = document.querySelectorAll('.fade-in');

  const appearOptions = {
    threshold: 0.2,
    rootMargin: "0px 0px -50px 0px"
  };

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('appear');
      observer.unobserve(entry.target);
    });
  }, appearOptions);

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });
});

// Contador animado de downloads
let iniciado = false;
const contadorElemento = document.getElementById("contador-numero");

function animarContador() {
  let valorInicial = 0;
  const valorFinal = 2000; // Altere aqui o número desejado
  const incremento = 25;
  const intervalo = 30;

  const contador = setInterval(() => {
    valorInicial += incremento;
    if (valorInicial >= valorFinal) {
      contadorElemento.textContent = valorFinal.toLocaleString("pt-BR") + "+";
      clearInterval(contador);
    } else {
      contadorElemento.textContent = valorInicial.toLocaleString("pt-BR");
    }
  }, intervalo);
}

// Ativar o contador ao rolar
window.addEventListener("scroll", () => {
  const posicao = contadorElemento.getBoundingClientRect().top;
  const tela = window.innerHeight;

  if (posicao < tela && !iniciado) {
    animarContador();
    iniciado = true;
  }
});


