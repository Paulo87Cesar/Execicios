
let baralho = [" Ás de Copas", " Rei de Espadas", " Dama de Ouros ", " Valete de Paus ", " 10 de Copas"]
let opcao = ""


do {
  let carta = ""
  for (let i = 0; i < baralho.length; i++) {
    carta += (i + 1) + "Carta no baralho! " + baralho[i] + "\n"
  }

  opcao = prompt(
    "Baralho:\n" + baralho +
    "\nEscolha uma ação:\n1 - Adicionar uma carta\n2 - Puxar uma carta\n3 - Sair"
  ) 

  switch (opcao) {
    case "1":
      const adicionarCarta = prompt("Qual é a carta?")
      baralho.unshift(adicionarCarta),  alert(adicionarCarta + " foi adicionado no baralho!")

      break
    case "2":
      const puxarCarta = baralho.shift()
      if (!puxarCarta) {
        alert("Baralho está vazio! Adicione cartas.")
      } else {
        alert("A carta " + puxarCarta + " foi puxada do baralho.")
      }
      break
    case "3":
      alert("Encerrando...")
      break
    default:
      alert("Opção inválida!")
      break
  }
} while (opcao !== "3");