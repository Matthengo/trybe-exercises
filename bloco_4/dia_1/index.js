console.log("-----Hello-World-----");
console.log("-----Aula -- 4.1-----");

console.log();
console.log("---------------------")
console.log("Exercício 1: ");

const numA = 348;
const numB = 578;


console.log(`Num A: ${numA} | Num B: ${numB}`);
console.log(`Adição:      ${numA + numB}`);
console.log(`Subtração:   ${numA - numB}`);
console.log(`Multiplic.:  ${numA * numB}`);
console.log(`Divisão:     ${numA / numB}`);
console.log(`Resto:       ${numA % numB}`);

console.log()
console.log("---------------------")
console.log("Exercício 2: ");
if (numA > numB) {
    console.log("NumA é maior que NumB");
} else {
    console.log("NumA é menor que NumB");
}

console.log()
console.log("---------------------")
console.log("Exercício 3: ");

const numC = 825;
console.log(`Num A: ${numA} | Num B: ${numB} | Num C: ${numC}`);
if (numA > numB && numA > numC) {
    console.log("NumA é o maior");
} else if (numB > numC && numB > numA) {
    console.log("NumB é o maior");
} else {
    console.log("NumC é o maior");
}

console.log()
console.log("---------------------")
console.log("Exercício 4: ");

const numD = -23;

console.log(`NumD: ${numD}`)
if (numD > 0) {
    console.log("NumD é positivo")
} else if (numD < 0) {
    console.log("NumD é negativo");
} else {
    console.log("NumD é zero");
}

console.log()
console.log("---------------------")
console.log("Exercício 5: ");

const angA = 45
const angB = 60
const angC = 75
console.log(`Ângulo A: ${angA} | Ângulo B: ${angB} | Ângulo C: ${angC}`);
if ((angA + angB + angC) == 180) {
    console.log("É um triângulo");
} else {
    console.log("Não é um triÂngulo");
}

console.log()
console.log("---------------------")
console.log("Exercício 6: ");

let chessPiece = "KNIGHT";
console.log(`Chess Piece: ${chessPiece}`);

chessPiece = chessPiece.toLowerCase();

switch (chessPiece) {
    case "pawn":
        console.log("Movement: Foward");
        break;
    case "bishop":
        console.log("Movement: Diagonally");
        break;
    case "knight":
        console.log("Movement: L-Shape");
        break;
    case "rook":
        console.log("Movement: Horizontal and Vertical");
        break;
    case "queen":
        console.log("Movement: Any");
        break;
    case "king":
        console.log("Movement: Around it");
        break;
    default:
        console.log("Invalid");
        break;
}

console.log()
console.log("---------------------")
console.log("Exercício 7: ");

const nota = 75;

console.log(`Nota: ${nota}`);

if (nota >= 90) {
    console.log(" = A")
} else if (nota >= 80 && nota < 90) {
    console.log(" = B");
} else if (nota >= 70 && nota < 80) {
    console.log(" = C");
} else if (nota >= 60 && nota < 70) {
    console.log(" = D");
} else if (nota >= 50 && nota < 60) {
    console.log(" = E");
} else if (nota < 50) {
    console.log(" = F");
} else if (nota < 0 || nota > 100) {
    console.log(" Nota inválida");
}

console.log()
console.log("---------------------")
console.log("Exercício 8: ");

const numE = 10;
const numF = 11;
const numG = 12;

console.log(`Num E: ${numE} | Num F: ${numF} | Num G: ${numG}`);

if ((numE % 2) == 0 || (numF % 2) == 0 || (numG % 2) == 0) {
    console.log(true, " um deles é par");
} else {
    console.log(false, " nenhum deles é par");
}

console.log()
console.log("---------------------")
console.log("Exercício 9: ");

console.log(`Num E: ${numE} | Num F: ${numF} | Num G: ${numG}`);

if (!(numE % 2) == 0 || !(numF % 2) == 0 || !(numG % 2) == 0) {
    console.log(true, " um deles é ímpar");
} else {
    console.log(false, " nenhum deles é ímpar");
}