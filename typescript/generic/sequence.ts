function sequence<F extends (args: any) => any>(funcs: F[]) {
  const generator = (function* () {
    for (let i = 0; i < funcs.length; i++) {
      yield funcs[i];
    }
  })() as Generator<F>;

  return (args?: any) => {
    const result = generator.next() as IteratorResult<F>;
    return result.done ? undefined : result.value(args);
  };
}

function sum(a: number, b: number): number {
  return a + b;
}

(() => {
  const seq = sequence([() => sum(1, 2), () => sum(3, 1)]);

  const result01 = seq();
  console.log(result01); // 3

  const result02 = seq();
  console.log(result02); // 4
})();
