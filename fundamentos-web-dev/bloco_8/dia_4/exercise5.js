const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

// Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra 'a' maiúscula ou minúscula.


function containsA() {
  const numbersOfA = (word) => word.split('').reduce((letterAcc, letterCurr) => letterCurr.toLowerCase() === 'a' ? letterAcc += 1 : letterAcc, 0)

  return names.reduce((wordAcc, wordCurr) => wordAcc += numbersOfA(wordCurr), 0);
}

assert.deepStrictEqual(containsA(), 20);