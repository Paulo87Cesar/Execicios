function converter() {
    const valor = parseFloat(document.getElementById('valor').value);
    const unidade = document.getElementById('unidade').value;
    let resultado = 0;

    switch (unidade) {
        case 'mm':
            resultado = valor * 1000;
            break;
        case 'cm':
            resultado = valor * 100;
            break;
        case 'dm':
            resultado = valor * 10;
            break;
        case 'dam':
            resultado = valor / 10;
            break;
        case 'hm':
            resultado = valor / 100;
            break;
        case 'km':
            resultado = valor / 1000;
            break;
        default:
            resultado = 'Unidade inválida';
    }

    document.getElementById('resultado').textContent = `O valor convertido é: ${resultado} ${unidade}`;
}
