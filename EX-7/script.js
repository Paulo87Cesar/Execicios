        // Referenciando os elementos
        const mensagem = document.getElementById("mensagem");
        const botoes = document.querySelectorAll("#menu button");

        // Variável para controlar o estado do loop
        let encerrar = false;

        // Função para exibir a mensagem na página
        function escolherOpcao(opcao) {
            switch (opcao) {
                case 1:
                    mensagem.textContent = "Você escolheu a Opção 1.";
                    break;
                case 2:
                    mensagem.textContent = "Você escolheu a Opção 2.";
                    break;
                case 3:
                    mensagem.textContent = "Você escolheu a Opção 3.";
                    break;
                case 4:
                    mensagem.textContent = "Você escolheu a Opção 4.";
                    break;
                case 5:
                    mensagem.textContent = "Encerrando o sistema...";
                    encerrar = true; // Altera o estado para encerrar o loop
                    setTimeout(() => {
                        mensagem.textContent = "Sistema encerrado.";
                        // Desabilitar todos os botões após encerrar
                        botoes.forEach(botao => botao.disabled = true);
                    }, 1000); // Simula um atraso de 1 segundo antes de exibir a mensagem final
                    break;
                default:
                    mensagem.textContent = "Opção inválida. Por favor, escolha uma opção de 1 a 5.";
            }
        }

        // Função para simular o comportamento do DO...WHILE
        function loopMenu() {
            let opcaoEscolhida;

            do {
                // Aguarda a escolha do usuário
                opcaoEscolhida = aguardarEscolha();
                escolherOpcao(opcaoEscolhida);
            } while (!encerrar); // Continua o loop até que a opção 5 seja escolhida
        }

        // Função para aguardar a escolha do usuário
        function aguardarEscolha() {
            return new Promise((resolve) => {
                botoes.forEach((botao, index) => {
                    botao.onclick = () => resolve(index + 1); // Resolve a Promise com a opção escolhida
                });
            });
        }

        // Iniciar o loop do menu
        loopMenu();