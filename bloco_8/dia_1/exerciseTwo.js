const raffleMsg = (equality) => {
  if (equality) {
    return 'Parabéns, você ganhou';
  }

  return 'Tente novamente';
}

const raffle = (num, msg) => {
  const randomNum = Math.round(Math.random() * 5);
  const isEqual = randomNum === num;

  return msg(isEqual);
}

console.log(raffle(4, raffleMsg));