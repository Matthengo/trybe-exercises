console.log('-----Hello World-----');
console.log('-----Aula -- 7.2-----');
console.log();
console.log('---------------------');

const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addNewValue = (object, key, value) => {
  const newObject = object;
  newObject[key] = value;
};

addNewValue(lesson2, 'turno', 'manhã');

const listObjectKeys = (object) => Object.keys(object);
const objectLenght = (object) => Object.entries(object).length;
const listObjectValues = (object) => Object.values(object);


const allLessons = Object.assign({}, {
  lesson1: lesson1,
  lesson2: lesson2,
  lesson3: lesson3,
});

// 6
const studentsQuantity = (object) => {
  let quantity = 0;
  for (let lesson of Object.keys(object)) {
    quantity += object[lesson].numeroEstudantes;
  }
  return quantity;
};

const getValueByNumber = (object, number) => Object.values(object)[number];

// 8
const verifyPair = (object, key, value) => (object[key] === value) ? true : false;

console.log(allLessons);
console.log(studentsQuantity(allLessons));
console.log(getValueByNumber(lesson1, 0));
console.log(verifyPair(lesson3, 'professor', 'Maria'));

// Bonus

const studentsQuantity2 = (object, theme = "") => {
  let quantity = 0;
  for (let lesson of Object.keys(object)) {
    if (theme === '') {
      quantity += object[lesson].numeroEstudantes;
    } else {
      quantity += (object[lesson].materia === theme) ? object[lesson].numeroEstudantes : 0;
    }
  }
  return quantity;
};

const createTeacherReport = (object, teacher) => {
  const newObject = {
    professor: '',
    aulas: [],
    estudantes: 0,
  }
  for (let lesson of Object.keys(object)) {
    if (object[lesson].professor === teacher) {
      newObject.professor = teacher;
      newObject.aulas.push(object[lesson].materia);
      newObject.estudantes += object[lesson].numeroEstudantes;
    }
  }

  return newObject;
};

console.log(studentsQuantity2(allLessons, 'Matemática'));
console.log(createTeacherReport(allLessons, 'Maria Clara'));