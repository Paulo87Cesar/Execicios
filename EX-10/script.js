function verificarPalindromo() {
    // Captura a palavra digitada pelo usuário
    const palavra = document.getElementById('palavra').value;

    // Verifica se o campo não está vazio
    if (palavra === '') {
        alert('Por favor, digite uma palavra.');
        return;
    }

    // Remove espaços em branco e converte para minúsculas
    const palavraFormatada = palavra.replace(/\s/g, '').toLowerCase();

    // Variável para armazenar a palavra invertida
    let palavraInvertida = '';

    // Loop FOR para inverter a palavra
    for (let i = palavraFormatada.length - 1; i >= 0; i--) {
        palavraInvertida += palavraFormatada[i];
    }

    // Verifica se é um palíndromo
    if (palavraFormatada === palavraInvertida) {
        document.getElementById('resultado').innerHTML = `
            <p>A palavra <strong>${palavra}</strong> é um palíndromo!</p>
            <p>Palavra original: ${palavraFormatada}</p>
            <p>Palavra invertida: ${palavraInvertida}</p>
        `;
    } else {
        document.getElementById('resultado').innerHTML = `
            <p>A palavra <strong>${palavra}</strong> não é um palíndromo.</p>
            <p>Palavra original: ${palavraFormatada}</p>
            <p>Palavra invertida: ${palavraInvertida}</p>
        `;
    }
}