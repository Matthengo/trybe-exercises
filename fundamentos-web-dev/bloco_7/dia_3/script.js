const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// implemente seus testes aqui

assert.strictEqual(sum(4, 5), 9);
assert.strictEqual(sum(0, 0), 0);
assert.throws(() => {
  sum(4, '5');
});

// ---------------------------

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

// implemente seus testes aqui
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 4]);
assert.notDeepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4]);

const array = [9, 3, 2, 5, 6];
assert.notDeepStrictEqual(array, myRemove(array, 9));

assert.deepStrictEqual(myRemove([1, 2, 3, 4], 5), [1, 2, 3, 4]);
// ---------------------------

function myRemoveWithoutCopy(arr, item) {
  for (let index = 0, len = arr.length; index < len; index += 1) {
    if (arr[index] === item) {
      arr.splice(index, 1);
      index -= 1;
      len -= 1;
    }
  }

  return arr;
}

// implemente seus testes aqui
assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 4]);
assert.notDeepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 3, 4]);

const array2 = [4, 5, 6, 7];
myRemoveWithoutCopy(array2, 4);
assert.notDeepStrictEqual(array2, [4, 5, 6, 7]);

assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 5), [1, 2, 3, 4]);
// ---------------------------

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// implemente seus testes aqui

assert.deepStrictEqual(myFizzBuzz(15), 'fizzbuzz');
assert.deepStrictEqual(myFizzBuzz(9), 'fizz');
assert.deepStrictEqual(myFizzBuzz(10), 'buzz');
assert.deepStrictEqual(myFizzBuzz(8), 8);

assert.deepStrictEqual(myFizzBuzz(''), false);
assert.deepStrictEqual(myFizzBuzz([]), false);
assert.deepStrictEqual(myFizzBuzz(true), false);

// ---------------------------

const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

// implemente seus testes aqui

assert.deepStrictEqual(obj1, obj2);
assert.notDeepStrictEqual(obj1, obj3);

// ---------------------------

// escreva a função addOne aqui

const addOne = (array) => {
  const newArray = [];
  for (let number of array) {
    newArray.push(number + 1);
  }

  return newArray;
}

// ----------------------------
const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
let expected = [32, 58, 13, 6];
let output = addOne(myArray);

assert.strictEqual(typeof addOne, 'function');
assert.deepStrictEqual(output, expected);
assert.deepStrictEqual(myArray, unchanged);


// escreva a função wordLengths aqui

const wordLengths = (array) => {
  const newArray = [];
  for (let word of array) {
    newArray.push(word.length);
  }

  return newArray;
}

// ---------------------------------
let words = ['sun', 'potato', 'roundabout', 'pizza'];
expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
output = wordLengths(words);
assert.deepStrictEqual(output, expected);


// escreva a função sumAllNumbers aqui

const sumAllNumbers = (array) => {
  let sum = 0;
  for (let num of array) {
    sum += num;
  }

  return sum;
}

// -----------------------------------

const numbers = [9, 23, 10, 3, 8];
expected = 53;
output = sumAllNumbers(numbers);

assert.strictEqual(typeof sumAllNumbers, 'function');
assert.strictEqual(output, expected);

// escreva a função findTheNeedle aqui

const findTheNeedle = (array, word) => {
  return array.indexOf(word);
}

// -----------------------------------
words = ['house', 'train', 'slide', 'needle', 'book'];
expected = 3;
output = findTheNeedle(words, 'needle');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = 0;
output = findTheNeedle(words, 'plant');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = -1;
output = findTheNeedle(words, 'plat');
assert.strictEqual(output, expected);