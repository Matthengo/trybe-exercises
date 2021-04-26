const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const answerCompare = (rightAnswers, answers) => {
  let score = 0;
  for (let index = 0; index < rightAnswers.length; index += 1) {
    if (rightAnswers[index] === answers[index]) score += 1;
    if (rightAnswers[index] !== answers[index] && answers[index] !== "N.A") score -= 0.5;
  }

  return score;
};

const verifyAnswer = (rightAnswers, answers, fnChecker) => {
  return fnChecker(rightAnswers, answers);
};

console.log(verifyAnswer(rightAnswers, studentAnswers, answerCompare));