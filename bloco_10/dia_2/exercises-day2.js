// -----Exercise 1---------------------------------------------- 
const uppercase = (str, callback) => {
  callback(str.toUpperCase());
};
// ------------------------------------------------------------- 
// -----Exercise 2---------------------------------------------- 
const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' }
};

const findUserById = (id) => {
  return new Promise((resolve, reject) => {
      if (users[id]) {
        return resolve(users[id]);
      };

      return reject({ error: 'User with ' + id + ' not found.' });
  });
};

const getUserName = (userID) => {
  return findUserById(userID).then(user => user.name);
};
// -------------------------------------------------------------
// -----Exercise 3---------------------------------------------- 
const fetch = require('node-fetch');

const getRepos = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      return data.map((repo) => repo.name);
    });
};
// -------------------------------------------------------------
module.exports = { uppercase, getUserName, getRepos };