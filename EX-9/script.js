function gerarTabuada() {
    // Captura o número digitado pelo usuário
    const numero = document.getElementById('numero').value;

    // Verifica se o campo não está vazio
    if (numero === '') {
        alert('Por favor, digite um número.');
        return;
    }else if (numero > 20){
        alert ('Por favor, digite um número menor que 20.');
        return;
    }
   
    
    // Converte o valor para número
    const n = parseInt(numero);

    // Cria uma string para armazenar a tabuada
    let tabuada = `<h2>Tabuada do ${n}</h2>`;

    // Loop para calcular a tabuada
    for (let i = 1; i <= 20; i++) {
        tabuada += `<p>${n} x ${i} = ${n * i}</p>`;
    }

    // Exibe a tabuada na página
    document.getElementById('resultado').innerHTML = tabuada;
}