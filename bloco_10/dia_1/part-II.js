// Refatorar algumas funções criadas no Projeto Playground Functions

// -----Exercise 1---------------------------------------------- 
const codeNumbers = [1, 2, 3, 4, 5];
const codeVowels = ['a', 'e', 'i', 'o', 'u']; 

// Returns an array of arrays whose elements are binded
const getCode = (option) => {
  return codeVowels.reduce((newArray, vowel, index) => {
    const number = codeNumbers[index].toString();
    if(option === 'encode'){
      newArray[index] = [vowel, number];
      return newArray;
    } else if (option === 'decode'){
      newArray[index] = [number, vowel];
      return newArray;
    }
    return undefined;
  }, []);
}

const codify = (stringToCodify, option) => {
  const code = getCode(option);
  const stringArray = stringToCodify.split('');
  return stringArray.map((character) => {
    let tempCharacter = character;
    code.forEach(([codeChar, codifyChar]) => {
      if(character === codeChar) tempCharacter = codifyChar;
    });
    return tempCharacter;
  }).join('');
}

const encode = (stringToEncode) => {
  return codify(stringToEncode, 'encode');
};

const decode = (stringToDecode) => {
  return codify(stringToDecode, 'decode');
};
// ------------------------------------------------------------- 
// A função techList recebe como parâmetros um array contendo uma lista de tecnologias e uma string com um nome. Para cada tecnologia no array a função cria, em ordem alfabética, um objeto.
// -----Exercise 2----------------------------------------------
const techList = (technologies, userName) => {
  if (technologies.length === 0) return 'Vazio!';
  return technologies.sort().map((technology) => ({
    tech: technology,
    name: userName,
  }));
} 
// ------------------------------------------------------------- 
module.exports = { encode, decode, techList }