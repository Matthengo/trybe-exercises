console.log("-----Hello-World-----");
console.log("-----Aula -- 4.3-----");

/* 1 - Faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo: 

n = 5

*****
*****
*****
*****
*****

*/
console.log();
console.log("---------------------");
console.log("Exercicio 1: ");

const value = 5;
const star = "*";
let row = "";

/* 
//Jeito 1
if (value > 1) {
    for (let linha = 0; linha < value; linha += 1) {
        row += star;
    }

    for (let coluna = 0; coluna < value; coluna += 1) {
        console.log(row);
    }
} */

//Jeito 2
/* if (value > 1) {
    row = star.repeat(value);

    for (let coluna = 0; coluna < value; coluna += 1) {
        console.log(row);
    }
} */
/* 
//Jeito 3
if (value > 1) {
    for (let linha = 1; linha <= (value ** 2); linha += 1) {
        if (!(linha % value) == 0 || linha == value ** 2) {
            row += star;
        } else {
            row += star + "\n"
        }
    }
    console.log(row);
} */

//Jeito 4:
if (value > 1) {
    for (let coluna = 0; coluna < value; coluna += 1) {
        row = ""
        for (let linha = 0; linha < value; linha += 1) {
            row += star;
        }
        console.log(row);
    }
}

/* 2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:

n = 5
*
**
***
****
***** */

console.log();
console.log("---------------------");
console.log("Exercicio 2: ");

row = "";

//Jeito 1:
if (value > 1) {
    for (let linha = 0; linha < value; linha += 1) {
        row += star;
        console.log(row);
    }
}

/* 3- Agora inverta o lado do triângulo. Por exemplo:

n = 5
    *
   **
  ***
 ****
***** */

console.log();
console.log("---------------------");
console.log("Exercicio 3: ");

const space = " ";

/* //Jeito 1 (.lenght + continue) :
if (value > 1) {
    for (let linha = 1; linha <= value; linha += 1) {
        row = "";
        for (let coluna = 1; coluna <= value; coluna += 1) {
            if (row.length >= (value - linha)) {
                row += star;
                continue;
            }
            row += space
        }
        console.log(row);
    }
} */

/* //Jeito 2 (continue):
if (value > 1) {
    for (let linha = 1; linha <= value; linha += 1) {
        row = "";
        for (let coluna = 1; coluna <= value; coluna += 1) {
            if (coluna > (value - linha)) {
                row += star;
                continue;
            }
            row += space
        }
        console.log(row);
    }
} */

//Jeito 3:
if (value > 1) {
    for (let linha = 1; linha <= value; linha += 1) {
        row = "";
        for (let coluna = 1; coluna <= value; coluna += 1) {
            if (coluna > (value - linha)) {
                row += star;
            } else {
                row += space
            }
        }
        console.log(row);
    }
}

/* 4- Depois, faça uma pirâmide com n asteriscos de base:
n = 5

  *
 ***
***** 
*/

console.log();
console.log("---------------------");
console.log("Exercicio 4: ");

const height = Math.ceil(value / 2);
const halfTriangle = height + 1;

if (!(value % 2) == 0) {
    for (let linha = 1; linha <= height; linha += 1) {
        row = "";
        for (let coluna = 1; coluna <= value; coluna += 1) {
            if (coluna <= height) {
                if (coluna > height - linha) {
                    row += star;
                } else {
                    row += space;
                }
            } else {
                if (coluna - linha < height) {
                    row += star;
                } else {
                    row += space;
                }
            }
        }
        console.log(row)
    }
}