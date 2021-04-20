const { uppercase, getUserName, getRepos } = require('./exercises-day2.js');

// Escreva um teste que verifique a chamada do callback de uma função uppercase , que transforma as letras de uma palavra em letras maiúsculas

describe('uppercase() Function', () => {
  it('Should run the function properly', (done) => {
    uppercase('test', (word) => {
      expect(word).toEqual('TEST');
      done();
    })
  });
});

// Utilizando a sintaxe de Promise , faça um teste que verifique o resultado da função getUserName para o caso em que o usuário é encontrado, e também um teste para o caso em que o usuário não é encontrado.

describe('getUserName() Function', () => {
  it('returns a users name when passed a right ID', () => {
    expect.assertions(1);
    return getUserName(4).then((person) => {
      expect(person).toEqual('Mark');
    });
  });

  it('returns an error when passed a wrong ID', () => {
    expect.assertions(1);
    return getUserName(1).catch((error) => {
      expect(error).toStrictEqual({"error": "User with 1 not found."});
    })
  });
});

// Reescreva o teste do exercício anterior, desta vez utilizando a sintaxe de async/await .

describe('getUserName() Function with Async/Await', () => {
  it('returns a users name when passed a right ID', async () => {
    expect.assertions(1);
    const userName = await getUserName(4);
    expect(userName).toEqual('Mark');
  });

  it('returns an error when passed a wrong ID', async () => {
    expect.assertions(1);
    try {
      await getUserName(1);
    } catch (error) {
      expect(error).toEqual({"error": "User with 1 not found."});
    }
  });
});

// O código abaixo busca no GitHub de um usuário, de acordo com a URL, seus repositórios, e retorna uma lista como resultado. Dada a URL 'https://api.github.com/orgs/tryber/repos' , faça um teste que verifique que os repositórios 'sd-01-week4-5-project-todo-list' e 'sd-01-week4-5-project-meme-generator' se encontram nessa lista.

describe('getRepos() Function', () => {
  it('should have certain items in the repository', async () => {
    expect.assertions(2);
    const URL = 'https://api.github.com/orgs/tryber/repos';
    await expect(getRepos(URL)).resolves.toContain('sd-01-week4-5-project-todo-list');
    await expect(getRepos(URL)).resolves.toContain('sd-01-week4-5-project-meme-generator');
  });
});

