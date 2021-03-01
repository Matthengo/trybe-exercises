console.log("-----Hello-World-----");
console.log("-----Aula -- 4.4-----");

console.log();
console.log("Parte 1 - Objetos e For/In");
console.log();
console.log("---------------------");
console.log("Exercicio 1: ");

let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};

console.log(`Bem-vinda, ${info.personagem}`);

console.log();
console.log("---------------------");
console.log("Exercicio 2: ");

info['recorrente'] = "Sim";
console.log(info);

console.log();
console.log("---------------------");
console.log("Exercicio 3: ");

for (let infos in info) {
    console.log(infos);
}

console.log();
console.log("---------------------");
console.log("Exercicio 4: ");

for (let infos in info) {
    console.log(info[infos]);
}

console.log();
console.log("---------------------");
console.log("Exercicio 5: ");

let info2 = {
    personagem: "Tio Patinhas",
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: "O último MacPatinhas",
}
info2['recorrente'] = 'Sim';

console.log(`${info.personagem} e ${info2.personagem}`);
console.log(`${info.origem} e ${info2.origem}`);
console.log(`${info.nota} e ${info2.nota}`);
if (info.recorrente == "Sim" && info2.recorrente == "Sim") {
    console.log("Ambos recorrentes");
}

console.log();
console.log("Parte 2 - Funções");
console.log();
console.log("---------------------");
console.log("Exercicio 1: ");

/*
    Funções podem ser escritas como:
    - function name() {};       -> Past ES6
        or const name = function() {};
    - const name = () => {};    -> Pos ES6
*/

const word = 'Arara';

function verifyPalindrome(wordToConvert) {
    const lowerCaseWord = wordToConvert.toLowerCase();
    let transformedWord = '';
    for (let letter = (lowerCaseWord.length - 1); letter >= 0; letter -= 1) {
        transformedWord += lowerCaseWord[letter];
    }

    if (lowerCaseWord === transformedWord) {
        /* return true; */
        return `A palavra ${wordToConvert} é um Palindromo`;
    } else {
        /* return false; */
        return `A palavra ${wordToConvert} não é um Palindromo`;
    }

}

console.log(verifyPalindrome(word));

console.log();
console.log("---------------------");
console.log("Exercicio 2: ");

let numbers = [2, 3, 6, 7, 10, 1];

function greaterNumber(array) {
    let greaterNumber = 0;
    for (let index in array) {
        if (array[index] > greaterNumber) {
            greaterNumber = array[index];
        }
    }

    return array.indexOf(greaterNumber);
}

console.log(numbers);
console.log(`Maior número é o do índice: ${greaterNumber(numbers)}`);

console.log();
console.log("---------------------");
console.log("Exercicio 3: ");

numbers = [2, 4, 6, 7, 10, 0, -3];

function lesserNumber(array) {
    let lesserNumber = array[0];
    for (let index in array) {
        if (array[index] < lesserNumber) {
            lesserNumber = array[index];
        }
    }

    return array.indexOf(lesserNumber);
}

console.log(lesserNumber(numbers));

console.log();
console.log("---------------------");
console.log("Exercicio 4: ");

let names = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function greaterName(names) {
    let greaterName = names[0];
    for (let name of names) {
        if (name.length > greaterName.length) {
            greaterName = name;
        }
    }

    return greaterName;
}
console.log(names);
console.log(`Maior nome é: ${greaterName(names)}`);

console.log();
console.log("---------------------");
console.log("Exercicio 5: ");

numbers = [2, 3, 2, 5, 8, 2, 3];

function mostRepeated(numbers) {

    let repeatedNumbers = {};
    let mostRepeated = [];
    let greaterRepetition = 0;

    for (const number in numbers) {
        let numOfTimes = 0;
        for (const number2 in numbers) {
            if (numbers[number] == numbers[number2]) {
                numOfTimes += 1;
                repeatedNumbers[numbers[number]] = numOfTimes;
            }
        }
    }

    for (const number in repeatedNumbers) {
        if (repeatedNumbers[number] >= greaterRepetition) {
            greaterRepetition = repeatedNumbers[number];
            mostRepeated.push(number);
        }
    }

    return mostRepeated;


}

console.log(`Número(s) que mais repetem: ${mostRepeated(numbers)}`);