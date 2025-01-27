function calculateDamage() {
    // Coletando dados do atacante
    const attackerName = document.getElementById("attackerName").value;
    const attackPower = parseInt(document.getElementById("attackPower").value);
  
    // Coletando dados do defensor
    const defenderName = document.getElementById("defenderName").value;
    let healthPoints = parseInt(document.getElementById("healthPoints").value);
    const defensePower = parseInt(document.getElementById("defensePower").value);
    const hasShield = document.getElementById("hasShield").value === "true";
  
    // Calculando o dano
    let damage = 0;
    if (attackPower > defensePower) {
      damage = hasShield 
        ? Math.floor((attackPower - defensePower) / 2) // Metade do dano se tiver escudo
        : attackPower - defensePower; // Dano total sem escudo
    }
  
    // Atualizando os pontos de vida do defensor
    healthPoints -= damage;
  
    // Evitando valores negativos de pontos de vida
    if (healthPoints < 0) healthPoints = 0;
  
    // Exibindo os resultados
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `
      <h3>Resultado do Cálculo</h3>
      <p><strong>${attackerName}</strong> causou <strong>${damage}</strong> de dano a <strong>${defenderName}</strong>.</p>
      <p><strong>${defenderName}</strong> agora tem <strong>${healthPoints}</strong> pontos de vida restantes.</p>
    `;
  }
  

