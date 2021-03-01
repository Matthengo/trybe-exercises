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