const raffleMsg = (equality) => equality ? 'Parabens, você acertou' : 'Tente novamente';

const raffle = (num, msg) => {
  const randomNum = Math.ceil(Math.random() * 5);
  const isEqual = randomNum === num;

  return msg(isEqual);
}

console.log(raffle(4, raffleMsg));