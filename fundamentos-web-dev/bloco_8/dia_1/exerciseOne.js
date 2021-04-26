const createEmployee = (name) => ({
  nomeCompleto: name,
  email: `${name.split(' ').join('_')}@trybe.com`
});

const newEmployees = (create) => {
  const employees = {
    id1: create('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro
    id2: create('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro
    id3: create('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro
  }
  return employees;
};

console.table(newEmployees(createEmployee));