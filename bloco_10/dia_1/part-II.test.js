const { encode, decode } = require('./part-II.js')

/* 
Para as funções encode e decode crie os seguintes testes:
  - Teste se encode e decode são funções;
  - Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente;
  - Para a função decode teste se os números 1, 2, 3, 4 e 5 são convertido nas vogais a, e, i, o, u , respectivamente;
  - Teste se as demais letras/números não são convertidos para cada caso;
  - Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro. 
*/

describe('encode() and decode() Functions', () => {
  test('encode() and decode() are functions', () => {
    expect(typeof encode).toEqual('function');
    expect(typeof decode).toEqual('function');
  });

  test('encode() change determined numbers to determined vowels', () => {
    expect(encode('aeiou')).toEqual('12345');
  });
  test('decode() change determined vowels to determined numbers', () => {
    expect(decode('12345')).toEqual('aeiou');
  });
  test('Characters that wont codify will remain the same', () => {
    expect(decode('6789')).toEqual('6789');
    expect(encode('bcdfgh')).toEqual('bcdfgh');
  });
  test("Returned string must have the same length than passed string", () => {
    expect(encode('aeiou')).toHaveLength('aeiou'.length);
    expect(decode('12345')).toHaveLength('12345'.length);
  });
});