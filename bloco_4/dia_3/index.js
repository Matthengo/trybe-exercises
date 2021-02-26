console.log("-----Hello-World-----");
console.log("-----Aula -- 4.3-----");

/* 1 - Faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo: */
console.log();
console.log("---------------------");
console.log("Exercicio 1: ");

const value = 2;
const star = "*";
let squareRow = "";

/* 
//Jeito 1
if (value > 1) {
    for (let linha = 0; linha < value; linha += 1) {
        squareRow += star;
    }

    for (let coluna = 0; coluna < value; coluna += 1) {
        console.log(squareRow);
    }
} */

//Jeito 2
if (value > 1) {
    squareRow = star.repeat(value);

    for (let coluna = 0; coluna < value; coluna += 1) {
        console.log(squareRow);
    }
}
/* 
//Jeito 3
if (value > 1) {
    for (let linha = 1; linha <= (value ** 2); linha += 1) {
        if (!(linha % value) == 0 || linha == value ** 2) {
            squareRow += star;
        } else {
            squareRow += star + "\n"
        }
    }
    console.log(squareRow);
} */