const form = document.querySelector('#formulario');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');
    
    const peso = parseFloat(inputPeso.value);
    const altura = parseFloat(inputAltura.value);

    if (isNaN(peso) || peso <= 0) {
        setResultado('Peso inválido. Por favor, insira um número positivo.', false);
        return;
    }
    if (isNaN(altura) || altura <= 0) {
        setResultado('Altura inválida. Por favor, insira um número positivo.', false);
        return;
    }

    const imc = getImc(peso, altura);
    const categoria = getCategoriaImc(imc);
    setResultado(`Seu IMC é ${imc} (${categoria})`, true);
});

function getImc(peso, altura) {
    return (peso / (altura * altura)).toFixed(2);
}

function getCategoriaImc(imc) {
    if (imc < 16.9) {
        return 'Muito abaixo do peso';
    } else if (imc >= 17 && imc <= 18.4) {
        return 'Abaixo do peso';
    } else if (imc >= 18.5 && imc <= 24.9) {
        return 'Peso normal';
    } else if (imc >= 25 && imc <= 29.9) {
        return 'Acima do peso';
    } else if (imc >= 30 && imc <= 34.9) {
        return 'Obesidade grau I';
    } else if (imc >= 35 && imc <= 40) {
        return 'Obesidade grau II';
    } else {
        return 'Obesidade grau III';
    }
}

function criaP() {
    const p = document.createElement('p');
    return p;
}

function setResultado(msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    const p = criaP();
    p.textContent = msg;
    p.style.color = isValid ? 'green' : 'red';

    resultado.appendChild(p);
}

