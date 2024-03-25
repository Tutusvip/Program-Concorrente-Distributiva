// Função para desconto
function dividirNumeros(Valorvenda, QuantiDePar) {

    if (!isNaN(QuantiDePar) == 2){
        resultado (Valorvenda/ 100 * Valorvenda);

    } else {(!isNaN(QuantiDePar) >= 3)
        resultado (Valorvenda/ 100 * Valorvenda);
    }
    
return Valorvenda / QuantiDePar;
}

// Função para mostrar o resultado na página HTML
function mostrarResultado() {
    // Obtém os valores dos números inseridos pelo usuário
    const Valorvenda = parseFloat(document.getElementById('Valorvenda').value);
    const QuantiDePar = parseInt(document.getElementById('QuantiDePar').value);
    
    // Verifica se os valores são válidos
    if (!isNaN(Valorvenda) && !isNaN(QuantiDePar)) {
        // Calcula a soma dos números usando a função somarNumeros
        const resultado = dividirNumeros(Valorvenda, QuantiDePar);
        
        // Exibe o resultado na página HTML
        document.getElementById('resultado').innerText = `O valor de ${Valorvenda} e ${QuantiDePar} é: ${resultado}`;
    } else {
        // Se os valores não forem válidos, exibe uma mensagem de erro
        document.getElementById('resultado').innerText = 'Por favor, insira números válidos.';
    }
}