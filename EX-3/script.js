function calcular() {
    let carro = (document.getElementById('carro').value);
    let velocidade = parseFloat(document.getElementById('velocidade').value);

    let carro2 = (document.getElementById('carro2').value);
    let velocidade2 = parseFloat(document.getElementById('velocidade2').value);

    if (isNaN(velocidade) || isNaN(velocidade2)) {
        document.getElementById('resultado').innerText = 'Por favor, insira valores válidos.';
        return;
    }
    if (velocidade > velocidade2){
        document.getElementById('resultado').innerHTML = `
     O carro ${carro} é mais veloz!`
    }else if(velocidade < velocidade2){
              document.getElementById('resultado').innerHTML = `
     O carro ${carro2} é mais veloz!`
    }else {
              document.getElementById('resultado').innerHTML = `
     Os carros ${carro} e ${carro2} tem a mesma velocidade!`
    }
    
}


