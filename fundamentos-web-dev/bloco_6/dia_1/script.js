const inputEstados = document.getElementById('input-estados');
const estados = {
  'AC': 'Acre',
  'AL': 'Alagoas',
  'AP': 'Amapá',
  'AM': 'Amazonas',
  'BA': 'Bahia',
  'CE': 'Ceará',
  'DF': 'Distrito Federal',
  'ES': 'Espírito Santo',
  'GO': 'Goiás',
  'MA': 'Maranhão',
  'MT': 'Mato Grosso',
  'MS': 'Mato Grosso do Sul',
  'MG': 'Minas Gerais',
  'PA': 'Pará',
  'PB': 'Paraíba',
  'PR': 'Paraná',
  'PE': 'Pernambuco',
  'PI': 'Piauí',
  'RJ': 'Rio de Janeiro',
  'RN': 'Rio Grande do Norte',
  'RS': 'Rio Grande do Sul',
  'RO': 'Rondônia',
  'RR': 'Roraima',
  'SC': 'Santa Catarina',
  'SP': 'São Paulo',
  'SE': 'Sergipe',
  'TO': 'Tocantins'
};

const submitButton = document.getElementById('submit-button');

function createStates() {
  for (let state in estados) {
    const newState = document.createElement('option');
    newState.setAttribute('value', state);
    newState.innerText = estados[state];
    inputEstados.appendChild(newState);
  }
}

function createParagraph(text) {
  const paragraph = document.createElement('p');
  paragraph.innerText = text;
  return paragraph;
}

function appendInputValues(parent) {
  const inputs = document.querySelectorAll('input');
  for (let input = 0; input < inputs.length; input += 1) {
    const element = inputs[input];
    const attrType = element.getAttribute('type');
    if (attrType === 'radio' && element.checked) {
      parent.appendChild(createParagraph(element.value));
    }
    if (attrType === 'text' || element.attrType === 'email' || attrType === 'date') {
      parent.appendChild(createParagraph(element.value));
    }
  }
}

function appendSelectValues(parent) {
  const selects = document.querySelectorAll('select');
  for (let select = 0; select < selects.length; select += 1) {
    parent.appendChild(createParagraph(selects[select].value));
  }
}

function appendTextAreaValues(parent) {
  const textAreas = document.querySelectorAll('textarea');
  for (let textArea = 0; textArea < textAreas.length; textArea += 1) {

    parent.appendChild(createParagraph(textAreas[textArea].value));
  }
}

function createContentView() {
  const createDiv = document.createElement('div');
  createDiv.classList.add('inputed-contents-view')
  appendInputValues(createDiv);
  appendSelectValues(createDiv);
  appendTextAreaValues(createDiv);

  document.body.appendChild(createDiv);
}
submitButton.addEventListener('click', (event) => {
  event.preventDefault();
  createContentView();
})

createStates();