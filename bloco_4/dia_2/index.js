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

numbers.forEach((value, index) => console.log(value);)
 */

for (let val = 0; val < numbers.length; val += 1) {
    console.log(numbers[val]);
}