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

numbers.forEach((value, index) => console.log(value));
 */

for (let val = 0; val < numbers.length; val += 1) {
    console.log(numbers[val]);
}

//Exercicios utilizando forEach, pois tem uma sintaxe mais simples.
console.log();
console.log("---------------------");
console.log("Exercicio 2: ");

let sum = 0;

numbers.forEach((value, index) => {
    sum += value;
});

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

numbers.forEach((value, index) => {
    if (value > greaterNum) {
        greaterNum = value;
    }
})

console.log(`Maior número: ${greaterNum}`);