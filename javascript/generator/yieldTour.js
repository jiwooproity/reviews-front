// yield에 *를 붙여 이터러블 객체를 순회하는 방법

function* interableYiled() {
  const a = 1;
  yield a;
  yield* [1, 2, 3].map((el) => el * (10 * a));
}

function run(generator) {
  const it = generator();

  (function interate({ value, done }) {
    if (done) {
      return value;
    } else {
      console.log({ value, done });
    }

    interate(it.next(value));
  })(it.next());
}

run(interableYiled);
