function updateProgressBar(percentage, fillId, percentageId) {
    const fill = document.getElementById(fillId);
    const percentageDiv = document.getElementById(percentageId);
  
    percentageDiv.textContent = percentage + '%';
  
    if (percentage <= 50) {
      fill.style.width = percentage + '%';
      fill.className = 'fill blue';
    } else if (percentage <= 75) {
      fill.style.width = percentage + '%';
      fill.className = 'fill yellow';
    } else {
      fill.style.width = percentage + '%';
      fill.className = 'fill red';
    }
  }
  
  // Exemplo de uso: atualiza os três medidores de porcentagem
  updateProgressBar(90, 'fill1', 'percentage1');
  updateProgressBar(75, 'fill2', 'percentage2');
  updateProgressBar(30, 'fill3', 'percentage3');
  