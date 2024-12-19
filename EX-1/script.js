// script.js

function mostrarInformacoes() {
    // Captura os dados do formulário
    var nome = document.getElementById('nome').value;
    var profissao = document.getElementById('profissao').value;
    var dataNascimento = document.getElementById('dataNascimento').value;

    // Verifica se todos os campos foram preenchidos
    if (!nome || !profissao || !dataNascimento) {
        alert("Por favor, preencha todos os campos!");
        return;
    }

    // Calcula a idade do usuário
    var dataNasc = new Date(dataNascimento);
    var hoje = new Date();
    var idade = hoje.getFullYear() - dataNasc.getFullYear();
    
    // Ajusta se o aniversário ainda não aconteceu neste ano
    var mesAtual = hoje.getMonth();
    var mesNasc = dataNasc.getMonth();
    var diaAtual = hoje.getDate();
    var diaNasc = dataNasc.getDate();

    if (mesAtual < mesNasc || (mesAtual === mesNasc && diaAtual <= diaNasc)) {
        idade --;  // Se o aniversário ainda não passou neste ano, subtrai 1
    }

    // Exibe as informações
    var resultado = `
        Nome: ${nome}<br>
        Profissão: ${profissao}<br>
        Idade: ${idade} anos
    `;

    document.getElementById('resultado').innerHTML = resultado;
}
