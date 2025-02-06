let saldo = parseFloat(prompt("Digite a quantidade inicial de dinheiro disponível:"));

if (isNaN(saldo)) {
  alert("Por favor, digite um número válido.");
  saldo = 0;
}

do {
  let escolha = prompt(
    `Saldo atual: R$ ${saldo.toFixed(2)}\n` +
    "Escolha uma opção:\n" +
    "1. Adicionar dinheiro\n" +
    "2. Remover dinheiro\n" +
    "3. Sair"
  );

  switch (escolha) {
    case "1":
      let adicionar = parseFloat(prompt("Digite a quantidade a ser adicionada:"));
      if (!isNaN(adicionar) && adicionar > 0) {
        saldo += adicionar;
        alert(`Você adicionou R$ ${adicionar.toFixed(2)}. Saldo atual: R$ ${saldo.toFixed(2)}`);
      } else {
        alert("Valor inválido! Digite um número positivo.");
      }
      break;

    case "2":10011
      let remover = parseFloat(prompt("Digite a quantidade a ser removida:"));
      if (!isNaN(remover) && remover > 0) {
        if (remover <= saldo) {
          saldo -= remover;
          alert(`Você removeu R$ ${remover.toFixed(2)}. Saldo atual: R$ ${saldo.toFixed(2)}`);
        } else {
          alert("Saldo insuficiente!");
        }
      } else {10011
        alert("Valor inválido! Digite um número positivo.");
      }
      break;

    case "3":
      alert("Saindo do programa. Até logo!");
      break;

    default:
      alert("Opção inválida! Escolha entre 1, 2 ou 3.");
  }
} while (escolha !== "3");

document.getElementById("output").innerHTML = `<p>Saldo final: R$ ${saldo.toFixed(2)}</p>`;