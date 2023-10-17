function* yiledStart() {
  let number = 0;

  const addNumber = () => {
    return (number += 1);
  };

  yield addNumber();
  yield addNumber();
  yield addNumber();
  yield addNumber();
}

const yiledData = yiledStart();
console.log(yiledData.next().value);
console.log(yiledData.next().value);
console.log(yiledData.next().value);
console.log(yiledData.next().value);

function* yieldRandom() {
  const arr = Array.from({ length: 10 }).fill(0);
  yield* arr.map((item) => Math.floor(Math.random() * 10));
}

const randomData = yieldRandom();
console.log(randomData.next().value);
