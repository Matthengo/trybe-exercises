// Refaça os exercícios 1 a 5 do conteúdo de Testes unitários em JavaScript (7.3) utilizando Jest.

// -----Exercise 1---------------------------------------------- 
const sum = (a, b) => {
  if(typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers')
  }
  return a + b;
}
// ------------------------------------------------------------- 

// Exports
module.exports = { sum }