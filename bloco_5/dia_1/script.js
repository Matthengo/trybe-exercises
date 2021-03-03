/*
Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
- document.getElementById()
- document.getElementsByClassName()
- document.getElementsByTagName()
1. Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
2. Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
3. Crie uma função que mude a cor do quadrado vermelho para branco.
4. Crie uma função que corrija o texto da tag <h1>.
5. Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
6. Crie uma função que exiba o conteúdo de todas as tags <p> no console.
*/

/**
 * Função que muda um texto de um elemento HTML.
 * @param {string} element      Elemento, id ou classe a ser modificado
 * @param {string} text         Texto a ser adicionado
 * @param {number} elementNum   Posição do elemento, id ou classe
 */
function changeText(element, text, elementNum) {
    document.querySelectorAll(element)[(elementNum - 1)].innerText = text;
}

/**
 * Função que muda o background color de um elemento HTML.
 * @param {string} className    Classe a ser modificada
 * @param {string} color        Cor a ser adicionado
 */
function changeBgColorByClass(className, color) {
    const element = document.getElementsByClassName(className);
    for (let value of element) {
        value.style.backgroundColor = color;
    }
}

/**
 * Faz um texto de um determinado elemento ficar com as letras maiusculas.
 * @param {string} element Elemento a ser modificado
 */
function toUppercaseText(element) {
    const elements = document.querySelectorAll(element);
    for (let value of elements) {
        value.innerText = value.innerText.toUpperCase();
    }
}

// Exercicio 1.
let text = 'Eu imagino que daqui 2 anos eu esteja trabalhando na área de programação, independente de qual seja e esteja conseguindo realizar meus sonhos.';

changeText('p', text, 2);

// Exercicio 2.
let color = 'rgb(76,164,109)';

changeBgColorByClass('main-content', color);

// Exercicio 3.
color = 'white';

changeBgColorByClass('center-content', color);

// Exercicio 4.
text = "Exercício 5.1 - Javascript";
changeText('.title', text, 1);

// Exercicio 5.
toUppercaseText('p');