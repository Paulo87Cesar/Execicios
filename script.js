

// function contagemRegressiva(num) {
//     // Caso base (quando a recursão PARA):
//     if (num <= 0) {
//       console.log("Fogo!");
//       return; // Encerra a função
//     }
  
//     console.log(num); // Mostra o número atual
//     contagemRegressiva(num - 1); // Chama a si mesma com num - 1
// const arr = ["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli"]

// for (let indice = 0; indice < arr.length; indice++) {
//   const elemento = arr[indice]
//   console.log(elemento + " se encontra na posição " + indice)
// }

var keys = Object.keys(o); // Obtém um array de nomes de propriedade do objeto o

var values = [] // Armazena os valores de propriedade correspondentes nesse array
for(var i = 0; i < keys.length; i++) { // Para cada índice no array
var key = keys[i]; // Obtém a chave nesse índice
values[i] = o[key]; // Armazena o valor no array values
console.log(keys)
}
