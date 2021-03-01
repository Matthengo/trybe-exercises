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