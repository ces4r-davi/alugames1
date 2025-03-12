let jogosAlugados = 0;
function alterarStatus(id) {
  let jogoClicado = document.getElementById(`game-${id}`);
  let imagem = jogoClicado.querySelector(".dashboard__item__img");
  let botao = jogoClicado.querySelector(".dashboard__item__button");

  if (botao.innerText === "Alugar") {
    jogosAlugados++;
    console.log(jogosAlugados);
    botao.innerText = "Devolver";
    botao.classList.add("dashboard__item__button--return");
    imagem.classList.add("dashboard__item__img--rented");
  } else if (botao.innerText === "Devolver") {
    botao.innerText = "Tem certeza da devolução?";
    botao.dataset.confirmacao = "true";
  } else if (botao.innerText === "Tem certeza da devolução?") {
    if (botao.dataset.confirmacao === "true") {
      botao.innerText = "Alugar";
      botao.classList.remove("dashboard__item__button--return");
      imagem.classList.remove("dashboard__item__img--rented");
      delete botao.dataset.confirmacao;
    }
  }
}
