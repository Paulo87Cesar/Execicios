function calcular() {
    let valor1 = parseFloat(document.getElementById('valor1').value);
    let valor2 = parseFloat(document.getElementById('valor2').value);

    if (isNaN(valor1) || isNaN(valor2)) {
        document.getElementById('resultado').innerText = 'Por favor, insira valores válidos.';
        return;
    }

    let soma = valor1 + valor2;
    let subtracao = valor1 - valor2;
    let divisao = valor1 / valor2;
    let multiplicacao = valor1 * valor2;

    document.getElementById('resultado').innerHTML = `
        Soma: ${soma} <br>
        Subtração: ${subtracao} <br>
        Divisão: ${divisao} <br>
        Multiplicação: ${multiplicacao}
    `;
}




