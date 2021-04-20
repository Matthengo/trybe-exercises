const { encode, decode, techList, hydrate } = require('./part-II.js')

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

describe('techList() Function', () => {
  it('Testa se a função techList é definida', () => {
    expect(techList).toBeDefined();
  });
  it('Testa se techList é uma função', () => {
    expect(typeof techList).toBe('function');
  });
  it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
    expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
      {
        tech: 'CSS',
        name: 'Lucas'
      },
      {
        tech: 'HTML',
        name: 'Lucas'
      },
      {
        tech: 'JavaScript',
        name: 'Lucas'
      },
      {
        tech: 'Jest',
        name: 'Lucas'
      },
      {
        tech: 'React',
        name: 'Lucas'
      }
    ]);
  });
  it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
    expect(techList([], 'Lucas')).toBe('Vazio!');
  });
});

describe('hydrate() Function', () => {
  it('Testa se a função hydrate é definida', () => {
    expect(hydrate).toBeDefined();
  });
  it('Testa se hydrate é uma função', () => {
    expect(typeof hydrate).toBe('function');
  });
  it('Ao receber uma string retorne a sugestão de quantos copos de água deve-se beber', () => {
    expect(hydrate('1 cerveja')).toBe('1 copo de água');
    expect(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')).toBe('7 copos de água');
    expect(hydrate('2 shots de tequila, 2 cervejas e 1 corote')).toBe('5 copos de água');
    expect(hydrate('1 copo de catuaba, 1 cervejas e 1 copo de vinho')).toBe('3 copos de água');
    expect(hydrate('4 caipirinhas e 2 cervejas')).toBe('6 copos de água');
  });
});