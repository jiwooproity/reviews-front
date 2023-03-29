function solution(A, B) {
  let result = 0;

  A = A.sort((a, b) => a - b);
  B = B.sort((a, b) => b - a);

  for (let i = 0; i < A.length; i++) {
    result += A[i] * B[i];
  }

  return result;
}

const value = [
  [
    [1, 4, 2],
    [5, 4, 4],
  ],
  [
    [1, 2],
    [3, 4],
  ],
];
const answer = value.map((v) => solution(v[0], v[1]));
console.log(answer);
