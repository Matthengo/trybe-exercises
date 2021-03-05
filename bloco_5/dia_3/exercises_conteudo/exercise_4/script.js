const caixaUm = document.querySelector('.caixa1');
const caixaDois = document.querySelector('.caixa2');

const botaoUm = document.querySelector('.botao1');
const botaoDois = document.querySelector('.botao2');

const caixaTexto = document.querySelector('.caixa-texto');

function changeColor(caixa, color = 'green') {
    caixa.style.backgroundColor = color;
}

function changeText(caixa) {
    caixa.innerText = caixaTexto.value;
}

function pasted() {
    if (caixaTexto === 'Go Trybe!') {
        alert('Go Trybe!');
    }

}

botaoUm.addEventListener('mouseover', () => {
    changeColor(caixaUm);
})

botaoDois.addEventListener('mouseover', () => {
    changeColor(caixaDois)
})