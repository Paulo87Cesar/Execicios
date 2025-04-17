



  
  contagemRegressiva(3); // Inicia a contagem




function contagemRegressiva(num) {
    // Caso base (quando a recursão PARA):
    if (num <= 0) {
      console.log("Fogo!");
      return; // Encerra a função
    }
  
    console.log(num); // Mostra o número atual
    contagemRegressiva(num - 1); // Chama a si mesma com num - 1
  }
