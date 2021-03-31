const assert = require('assert');

const books = [{
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

const expectedResult = false;

// Faça uma função que retorne true , caso nenhum author tenha nascido no mesmo ano, e false , caso contrário.
function authorUnique() {
  /* let isAuthorsUnique = true; */
  /* books.sort((element1, element2) => {
    const authorBirth1 = element1.author.birthYear;
    const authorBirth2 = element2.author.birthYear;

    if (authorBirth1 === authorBirth2) {
      isAuthorsUnique = false;
    }

    return authorBirth1 - authorBirth2
  }) */
  /* books.forEach((element1) => {
    const authorBirth = element1.author.birthYear;
    const isBirthyearUnique = books.every((element2) => {
      if (element1.id !== element2.id) {
        return element2.author.birthYear !== authorBirth;
      } else {
        // Retorna true, pois se o element1 e o element2 são o mesmo elemento, eles são únicos.
        return true;
      }
    })

    if (!isBirthyearUnique) {
      isAuthorsUnique = isBirthyearUnique;
    }
  })

  return isAuthorsUnique; */

  return books.every((book) =>
    !books.some((bookSome) => {
      return (bookSome.author.birthYear === book.author.birthYear) &&
        (bookSome.author.name !== book.author.name)
    }));
}
authorUnique();

assert.strictEqual(authorUnique(), expectedResult);