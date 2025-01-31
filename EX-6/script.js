let nomeTurista = "";
let cidadesVisitadas = [];
let continuarPerguntando = true;

function iniciarQuestionario() {
    // Obtém o nome do turista
    nomeTurista = document.getElementById('nomeTurista').value;

    if (!nomeTurista) {
        alert("Por favor, insira o nome do turista.");
        return;
    }

    // Esconde a entrada do nome e exibe o nome do turista
    document.getElementById('entradaNome').style.display = 'none';
    document.getElementById('exibirNome').style.display = 'block';
    document.getElementById('nomeTuristaExibido').textContent = nomeTurista;

    // Inicia o loop de perguntas
    while (continuarPerguntando) {
        // Exibe a pergunta sobre cidades
        document.getElementById('perguntaCidade').style.display = 'block';
        break; // Sai do loop para aguardar a resposta do usuário
    }
}

function respostaSim() {
    // Esconde a pergunta e exibe a entrada para o nome da cidade
    document.getElementById('perguntaCidade').style.display = 'none';
    document.getElementById('inserirCidade').style.display = 'block';
}

function respostaNao() {
    // Encerra o loop de perguntas
    continuarPerguntando = false;

    // Exibe o resultado final
    exibirResultado();
}

function adicionarCidade() {
    // Obtém o nome da cidade
    const nomeCidade = document.getElementById('nomeCidade').value;

    if (!nomeCidade) {
        alert("Por favor, insira o nome da cidade.");
        return;
    }

    // Adiciona a cidade à lista
    cidadesVisitadas.push(nomeCidade);

    // Atualiza a lista de cidades exibida
    atualizarListaCidades();

    // Limpa o campo de entrada e volta para a pergunta
    document.getElementById('nomeCidade').value = '';
    document.getElementById('inserirCidade').style.display = 'none';

    // Atualiza a pergunta para "Você visitou outra cidade?"
    document.querySelector('#perguntaCidade p').textContent = "Você visitou outra cidade?";

    // Volta a exibir a pergunta
    document.getElementById('perguntaCidade').style.display = 'block';
}

function atualizarListaCidades() {
    // Exibe a lista de cidades
    document.getElementById('listaCidades').style.display = 'block';

    // Atualiza a lista de cidades no HTML
    const listaCidades = document.getElementById('cidadesVisitadasLista');
    listaCidades.innerHTML = cidadesVisitadas.map(cidade => `<li>${cidade}</li>`).join('');
}

function exibirResultado() {
    // Esconde todas as outras seções
    document.getElementById('perguntaCidade').style.display = 'none';
    document.getElementById('inserirCidade').style.display = 'none';
    document.getElementById('listaCidades').style.display = 'none';

    // Exibe o resultado final na página
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.style.display = 'block';
    resultadoDiv.innerHTML = `
        <h2>Resultado Final:</h2>
  
        <p><strong>Quantidade de Cidades Visitadas:</strong> ${cidadesVisitadas.length}</p>
        <p><strong>Cidades Visitadas:</strong></p>
        <ul>
            ${cidadesVisitadas.map(cidade => `<li>${cidade}</li>`).join('')}
        </ul>
    `;
}