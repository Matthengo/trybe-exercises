console.log("-----Hello-World-----");
console.log("-----Aula -- 4.1-----");

console.log();
console.log("Exercício 1: ");

const numA = 348;
const numB = 578;


console.log(`Num A: ${numA} | Num B: ${numB}`);
console.log(`Adição:      ${numA + numB}`);
console.log(`Subtração:   ${numA - numB}`);
console.log(`Multiplic.:  ${numA * numB}`);
console.log(`Divisão:     ${numA / numB}`);
console.log(`Resto:       ${numA % numB}`);

console.log("---------------------")
console.log("Exercício 2: ");
if (numA > numB) {
    console.log("NumA é maior que NumB");
} else {
    console.log("NumA é menor que NumB");
}

console.log("---------------------")
console.log("Exercício 3: ");

const numC = 825;

if (numA > numB && numA > numC) {
    console.log("NumA é o maior");
} else if (numB > numC && numB > numA) {
    console.log("NumB é o maior");
} else {
    console.log("NumC é o maior");
}