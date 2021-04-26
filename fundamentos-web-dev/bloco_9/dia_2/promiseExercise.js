const promiseTest = () => {
  return new Promise((resolve, reject) => {
    const arrayOfNums = []
    for(let num = 1; num <= 10; num += 1){
      arrayOfNums.push(Math.ceil(Math.random() * 50) ** 2);
    }
    const sum = arrayOfNums.reduce((a, b) => a + b);
    (sum > 8000) ? resolve(sum) : reject(sum);
  })
  .then((sum) => {
    console.log('Promise resolvida');
    const division = [2, 3, 5, 10];
    const saida = division.map((divisionNum) => sum/divisionNum);
    console.log(saida);
    return saida;
  })
  .then((nums) => console.log(nums.reduce((a, b) => a + b)))
  .catch(() => {
    console.log('Promise rejeitada');
    console.log('É mais de oito mil! Essa promise deve estar quebrada!');
  })
}

promiseTest();