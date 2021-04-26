// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  return fetch(API_URL, myObject)
    .then(response => response.json());
};

const renderDOM = async () => {
  await fetchJoke()
    .then(({joke}) => {
      const jokeContainer = document.getElementById('jokeContainer');
      jokeContainer.innerHTML = joke;
    })
    .catch((error) => alert('algo deu errado'));
}

window.onload = () => renderDOM();