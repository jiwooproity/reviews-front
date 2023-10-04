function* recurvieFunction(n) {
  if (n <= 0) {
    return 0;
  } else {
    yield n;
    yield* recurvieFunction(n - 1);
  }
}

function resultToConsole(result) {
  console.log(result);
}

for (const result of recurvieFunction(10)) {
  resultToConsole(result);
}
