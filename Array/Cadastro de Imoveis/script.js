let imoveis = []
let opcao = ""

do {
  opcao = prompt(
    "Cadastro de Imóveis\n" +
    "Total de Imóveis " + imoveis.length +
    "\n\nEscolha uma opção:\n1. Novo Imóvel\n2. Lista de imóveis\n2. Sair"
  )
  switch (opcao) {
    case "1":
      const imovel = {}
      imovel.proprietario = prompt("Informe o nome do proprietário do imóvel:")
      imovel.quartos = prompt("Quantos quartos o imóvel possui?")
      imovel.banheiros = prompt ("Quantos banheiros o imóvel possui?")
      imovel.garagem = prompt ("O imóvel possui garagem? Sim/Não")
      
      const confirmacao = confirm(
      "Salvar este imóvel?\n" +
      "\n Proprietário: " + imovel.proprietario +
      "\n Quartos: " + imovel.quartos +
      "\n Banheiros: " + imovel.banheiros + 
      "\n Possui garagem? " + imovel.garagem
    )

      if (confirmacao){
        imoveis.push(imovel)
        alert("Imóvel salvo com sucesso!")
      }else{
        alert("Voltando ao menu.")
      }
      break

    case "2":
      for(let i = 0; i < imoveis.length; i++){
        alert(
          "Imóvel " + (i + 1) +
          "\nProprietário: " + imoveis[i].proprietario +
          "\nQuartos: " + imoveis[i].quartos +
          "\nBanheiros: " + imoveis[i].banheiros +
          "\nPossui garagem?" + imoveis[i].garagem
        )
      }

    case "3":
      alert("Encerrando...")
      break
      default:
        alert("Opção inválida!")
  }

} while (opcao !== "3")