/* =============================================================
   Fazenda Laçada — comportamentos da landing page
   Apenas o mínimo: menu no celular e fundo do cabeçalho na rolagem.
   ============================================================= */
(function () {
  'use strict';

  var cabecalho = document.getElementById('cabecalho');
  var botao = document.getElementById('menu-botao');
  var menu = document.getElementById('menu');

  /* Menu do celular */
  botao.addEventListener('click', function () {
    var aberto = menu.classList.toggle('aberto');
    botao.setAttribute('aria-expanded', aberto ? 'true' : 'false');
    botao.setAttribute('aria-label', aberto ? 'Fechar menu' : 'Abrir menu');
  });

  /* Fecha o menu ao escolher uma seção */
  menu.addEventListener('click', function (evento) {
    if (evento.target.tagName === 'A') {
      menu.classList.remove('aberto');
      botao.setAttribute('aria-expanded', 'false');
      botao.setAttribute('aria-label', 'Abrir menu');
    }
  });

  /* O cabeçalho ganha fundo sólido assim que a foto do hero sai da tela */
  function atualizarCabecalho() {
    cabecalho.classList.toggle('cabecalho--solido', window.scrollY > 80);
  }

  atualizarCabecalho();
  window.addEventListener('scroll', atualizarCabecalho, { passive: true });
})();
