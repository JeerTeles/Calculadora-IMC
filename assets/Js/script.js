document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir o comportamento padrão do formulário

    // Obter valores dos inputs
    var peso = parseFloat(document.getElementById('weight').value);
    var altura = parseFloat(document.getElementById('height').value);

    // Verificar se os valores são válidos
    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        alert('Por favor, insira valores válidos para peso e altura.');
        return;
    }

    // Calcular o IMC
    var imc = peso / (altura * altura);

    // Determinar a categoria de IMC
    var categoria;
    if (imc < 18.5) {
        categoria = "Abaixo do peso";
    } else if (imc >= 18.5 && imc <= 24.9) {
        categoria = "Peso normal";
    } else if (imc >= 25 && imc <= 29.9) {
        categoria = "Sobrepeso";
    } else {
        categoria = "Obesidade";
    }

    // Exibir o resultado no HTML
    document.getElementById('value').innerText = imc.toFixed(2);
    document.getElementById('description').getElementsByTagName('span')[0].innerText = categoria;

    // Mostrar a div 'infos'
    document.getElementById('infos').classList.remove('hidden');
});
