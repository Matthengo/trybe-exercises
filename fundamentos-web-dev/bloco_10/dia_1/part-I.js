// Refaça os exercícios 1 a 5 do conteúdo de Testes unitários em JavaScript (7.3) utilizando Jest.

// -----Exercise 1---------------------------------------------- 
const sum = (a, b) => {
  if(typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers')
  }
  return a + b;
}
// ------------------------------------------------------------- 
// -----Exercise 2---------------------------------------------- 
const myRemove = (array, removedElement) => {
  return array.filter((element) => element !== removedElement);
}
// ------------------------------------------------------------- 
// -----Exercise 3---------------------------------------------- 
const myRemoveWithoutCopy = (array, removedElement) => {
  if(array.indexOf(removedElement) !== -1) array.splice(array.indexOf(removedElement), 1);
  return array;
}
// ------------------------------------------------------------- 
// -----Exercise 4---------------------------------------------- 
const myFizzBuzz = (number) => {
  if (typeof number !== 'number') return false;
  if (number % 3 === 0 && number % 5 === 0) return 'fizzbuzz';
  if (number % 3 === 0) return 'fizz';
  if (number % 5 === 0) return 'buzz';

  return number;
}
// Exports
module.exports = { sum, myRemove, myRemoveWithoutCopy, myFizzBuzz }