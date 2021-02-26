console.log("-----Hello-World-----");
console.log("-----Aula -- 4.2-----");

//Array utilizado dos exercicios 1 ao 7. 
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

console.log();
console.log("---------------------");
console.log("Exercicio 1: ");


/* //Duas outras maneiras: 
for (let val of numbers) {
    console.log(val);
}

numbers.forEach((value) => console.log(value));
 */

for (let val = 0; val < numbers.length; val += 1) {
    console.log(numbers[val]);
}

//Exercicios utilizando for...of, pois tem uma sintaxe mais simples.
console.log();
console.log("---------------------");
console.log("Exercicio 2: ");

let sum = 0;

for (const value of numbers) {
    sum += value;
}

console.log(sum);

console.log();
console.log("---------------------");
console.log("Exercicio 3: ");

let mediaArit = sum / numbers.length;

console.log(mediaArit);

console.log();
console.log("---------------------");
console.log("Exercicio 4: ");

if (mediaArit > 20) {
    console.log("Valor aritmetico maior que 20");
} else {
    console.log("Valor aritmetico menor que 20");
}

console.log();
console.log("---------------------");
console.log("Exercicio 5: ");

let greaterNum = 0;

for (const value of numbers) {
    if (value > greaterNum) {
        greaterNum = value;
    }
}

console.log(`Maior número: ${greaterNum}`);

console.log();
console.log("---------------------");
console.log("Exercicio 6: ");

let oddNumbers = 0;
numbers.forEach((value) => {
    if ((value % 2) == 1) {
        oddNumbers += 1;
    }
})

if (oddNumbers) {
    console.log(`Existem ${oddNumbers} ímpares`);
} else {
    console.log("Não existem ímpares");
}

console.log();
console.log("---------------------");
console.log("Exercicio 7: ");

let lesserNum = numbers[1];

for (const value of numbers) {
    if (value < lesserNum) {
        lesserNum = value;
    }
}

console.log(`Menor número: ${lesserNum}`);

console.log();
console.log("---------------------");
console.log("Exercicio 8: ");

let arrayOfNum = [];

for (let number = 1; number <= 25; number += 1) {
    arrayOfNum.push(number);
}

console.log(arrayOfNum);

console.log();
console.log("---------------------");
console.log("Exercicio 9: ");

let arrayDivTwo = [];

for (const number of arrayOfNum) {
    arrayDivTwo.push(number / 2)
}

console.log(arrayDivTwo);

console.log();
console.log("---------------------");
console.log("Bônus 1: ");

let numbersCrescent = numbers;

for (let i = 1; i < numbersCrescent.length; i++) {
    for (let j = 0; j < i; j++) {
        if (numbersCrescent[i] < numbersCrescent[j]) {
            let position = numbersCrescent[i];

            numbersCrescent[i] = numbersCrescent[j];
            numbersCrescent[j] = position;
        }
    }
}

console.log(numbersCrescent);

console.log();
console.log("---------------------");
console.log("Bônus 2: ");

let numbersDecrescent = numbers;

for (let i = 1; i < numbersDecrescent.length; i++) {
    for (let j = 0; j < i; j++) {
        if (numbersDecrescent[i] > numbersDecrescent[j]) {
            let position = numbersDecrescent[i];

            numbersDecrescent[i] = numbersDecrescent[j];
            numbersDecrescent[j] = position;
        }
    }
}

console.log(numbersDecrescent);