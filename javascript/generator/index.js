function drawLineInCommand() {
  console.log("--------------------------------");
}

// Generator 함수는 일시 중지했다가 필요한 시점에 재시작하는 특징을 이용하여 비동기 처리에 유용하게 사용되었으나,
// ES2017 async/await을 이용한 비동기처리 패턴의 등장으로 존재감이 낮아지고 있다.

// Generator 함수 내에 Yield 키워드는 Generator 함수를 중지하는데 외부에서의 next()을 통한 호출을 재개하는데 사용된다.

function* foo() {
  let index = 0;

  while (index <= 2) {
    yield index++;
  }
}

let interator = foo();
console.log(interator.next());
console.log(interator.next());
console.log(interator.next());
console.log(interator.next());

drawLineInCommand();

// yield 이후에 오는 값을 내보내고, return으로 내보낸 경우 iterable한 return값의 끝을 알려준다.
function* generateSequence() {
  yield 1;
  yield 2;
  yield 3;
  return 4;
}

let generator = generateSequence();

for (let value of generator) {
  console.log(value);
}

drawLineInCommand();

function* myGen() {
  const x = yield "hello";
  const y = yield x + 1;
  const z = yield y + 2;
  return y + z;
}

const myitr = myGen();
let response = myitr.next();
console.log(response);
console.log(myitr.next(response.value + " World"));
console.log(myitr.next(20));
console.log(myitr.next(30));
