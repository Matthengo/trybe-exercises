// Sugestão de respostas a serem validadas.
const correctAnswer = 'higher order function';
const userAnswer = 'HIGHER ORDER FUNCTION';


const checkAnswer = (answer) => {
  return (rightAnswer) => {
    if (answer.toLowerCase() === rightAnswer) return true;
    return false;
  }
}

console.log(checkAnswer(userAnswer)(correctAnswer));