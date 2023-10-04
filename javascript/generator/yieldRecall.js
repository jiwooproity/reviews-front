function* recall(n) {
  const array = Array.from({ length: n }).fill(100);
  yield* array.map((arr) => Math.floor(Math.random() * arr));
}

function getRandomNumbers() {
  const randomNumArr = [];

  for (const number of recall(10)) {
    randomNumArr.push(number);
  }

  return randomNumArr;
}

console.log(getRandomNumbers());
