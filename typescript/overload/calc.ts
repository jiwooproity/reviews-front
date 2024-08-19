function calc(a: number, b: number): number;

function calc(a: number, b: number, c: number): number;

function calc(a: number, b: number, c?: number): number {
  if (c) {
    return (a + b) * c;
  }

  return a + b;
}

(() => {
  const sum = calc(3, 2);
  const sumAndMulti = calc(2, 2, 2);
  console.log(sum, sumAndMulti); // 5, 8
})();
