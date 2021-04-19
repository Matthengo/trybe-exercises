const { sum, myRemove, myRemoveWithoutCopy, myFizzBuzz } = require('./part-I.js');

/* 
A função sum(a, b) retorna a soma do parâmetro a com o b
  - Teste se o retorno de sum(4, 5) é 9
  - Teste se o retorno de sum(0, 0) é 0
  - Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)
  - Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")
*/

describe('Sum Function', () => {
  test('sum() returns the numbers summed', () => {
    expect(sum(4, 5)).toEqual(9);
    expect(sum(0, 0)).toEqual(0);
  });
  test('sum() returns error if parameters arent numbers', () => {
    expect(() => { sum(4, '5') }).toThrow();
    expect(() => { sum(4, '5') }).toThrowError('parameters must be numbers');
  });
});

// -----------------------------------------------------------------------------------

/* 
A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array
  - Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
  - Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
  - Verifique se o array passado por parâmetro não sofreu alterações
  - Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado
*/

describe('myRemove Function', () => {
  const arrayOfNum = [1, 2, 3, 4];

  test("myRemove() returns the array's copy without the element especified", () => {
    expect(myRemove(arrayOfNum, 3)).toEqual([1, 2, 4]);
    expect(myRemove(arrayOfNum, 5)).toEqual([1, 2, 3, 4]);

    expect(myRemove(arrayOfNum, 3)).not.toEqual([1, 2, 3, 4]);
  });

  test("myRemove() shouldn't affect the original array", () => {
    expect(myRemove(arrayOfNum, 3)).not.toEqual(arrayOfNum);
  });
});

/* 
A função myRemoveWithoutCopy(arr, item) recebe um array arr e retorna o próprio array sem o elemento item caso ele exista no array
  - Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado
  - Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
  - Faça uma chamada para a função myRemoveWithoutCopy e verifique se o array passado por parâmetro sofreu alterações
  - Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado
*/

describe('myRemoveWithoutCopy() Function', () => {
  const arrayOfNum = [1, 2, 3, 4];

  test("myRemoveWithoutCopy() returns the array's copy without the element especified", () => {
    expect(myRemoveWithoutCopy(arrayOfNum, 3)).toEqual([1, 2, 4]);
    expect(myRemoveWithoutCopy(arrayOfNum, 5)).toEqual([1, 2, 4]);

    expect(myRemoveWithoutCopy(arrayOfNum, 3)).not.toEqual([1, 2, 3, 4]);
  });

  test("myRemoveWithoutCopy() should affect the original array", () => {
    expect(myRemoveWithoutCopy(arrayOfNum, 2)).toEqual(arrayOfNum);
  });
});

/*
A função myFizzBuzz(num) recebe um número num e retorna "fizzbuzz" se o número for divisível por 3 e 5 , retorna "fizz" se for divisível apenas por 3 , retorna "buzz" se divisível apenas por 5 , retorna o próprio número caso não seja divisível por 3 ou 5 e retorna false caso num não seja um número
  - Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado
  - Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado
  - Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado
  - Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado
  - Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado
*/

describe('myFizzBuzz() Function', () => {
  test("Divisible by 3 and 5 returns 'fizzbuzz'", () => {
    expect(myFizzBuzz(15)).toEqual('fizzbuzz');
    expect(myFizzBuzz(30)).toEqual('fizzbuzz');
  });
  test("Divisible only by 3 returns 'fizz'", () => {
    expect(myFizzBuzz(3)).toEqual('fizz');
    expect(myFizzBuzz(9)).toEqual('fizz');
  });
  test("Divisible only by 5 returns 'buzz'", () => {
    expect(myFizzBuzz(5)).toEqual('buzz');
    expect(myFizzBuzz(10)).toEqual('buzz');
  });
  test("Isn't divisible by 3 or 5 returns the number", () => {
    expect(myFizzBuzz(2)).toEqual(2);
    expect(myFizzBuzz(7)).toEqual(7);
  });
  test("Isn't number returns 'false'", () => {
    expect(myFizzBuzz({})).toEqual(false);
    expect(myFizzBuzz([])).toEqual(false);
    expect(myFizzBuzz('3')).toEqual(false);
  });
});