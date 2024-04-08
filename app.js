// FUNÇÕES PRINCIPAIS
function sortear() {
  let quantidade = parseInt(document.getElementById("quantidade").value);
  let de = parseInt(document.getElementById("de").value);
  let ate = parseInt(document.getElementById("ate").value);
  let sorteados = [];

  if (!quantidade || !de || !ate) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  if (de >= ate) {
    alert(
      `Campo "Do número" deve ser inferior ao campo "Até o número". Verifique!`
    );
    return;
  }

  if (de >= ate) {
    alert(
      `Campo "Do número" deve ser inferior ao campo "Até o número". Verifique!`
    );
    return;
  }

  for (let i = 0; i < quantidade; i++) {
    numero = obterNumeroAleatorio(de, ate);
    while (sorteados.includes(numero)) {
      numero = obterNumeroAleatorio(de, ate);
    }

    if (quantidade >= ate - de + 1) {
      alert(
        'Campo "Quantidade" deve ser menor ou igual ao intervalo informado no campo "Do número" até o campo "Até o número". Verifique!'
      );
      return;
    }

    sorteados.push(numero);
  }
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`;

  habilitarStatusReiniciar();
}

function reiniciar() {
  document.getElementById("quantidade").value = "";
  document.getElementById("de").value = "";
  document.getElementById("ate").value = "";
  document.getElementById(
    "resultado"
  ).innerHTML = `<label class="texto__paragrafo">Números sorteados: nenhum até agora</label>`;

  desabilitarStatusReiniciar();
}

// FUNÇÕES ADICIONAIS
function obterNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function habilitarStatusReiniciar() {
  let botaoReiniciar = document.getElementById("btn-reiniciar");
  let botaoSortear = document.getElementById("btn-sortear");

  if (botaoReiniciar.disabled) {
    botaoReiniciar.removeAttribute("disabled");
  }
}

function desabilitarStatusReiniciar() {
  let botaoReiniciar = document.getElementById("btn-reiniciar");
  let botaoSortear = document.getElementById("btn-sortear");

  if (botaoReiniciar.disabled) {
    botaoReiniciar.removeAttribute("disabled");
  } else {
    botaoReiniciar.setAttribute("disabled", true);
  }
}
