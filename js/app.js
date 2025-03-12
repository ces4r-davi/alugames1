function alterarStatus(id) {
  let jogoClicado = document.getElementById(`game-${id}`);
  let imagem = jogoClicado.querySelector(".dashboard__item__img");
  let botao = jogoClicado.querySelector(".dashboard__item__button");

  if (botao.innerText === "Alugar") {
    botao.innerText = "Devolver";
    botao.classList.add("dashboard__item__button--return");
    imagem.classList.add("dashboard__item__img--rented");
  } else {
    botao.innerText = "Alugar";
    botao.classList.remove("dashboard__item__button--return");
    imagem.classList.remove("dashboard__item__img--rented");
  }
}
