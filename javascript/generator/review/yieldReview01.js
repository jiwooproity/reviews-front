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
