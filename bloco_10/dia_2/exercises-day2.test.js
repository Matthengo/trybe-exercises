const { uppercase } = require('./exercises-day2.js');

// Escreva um teste que verifique a chamada do callback de uma função uppercase , que transforma as letras de uma palavra em letras maiúsculas

describe('uppercase() Function', () => {
  it('Should run the function properly', (done) => {
    uppercase('test', (word) => {
      expect(word).toEqual('TEST');
      done();
    })
  });
});