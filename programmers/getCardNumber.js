// 숫자 카드 나누기 알고리즘

const arrayA = [
  [10, 17],
  [10, 20],
  [14, 35, 119],
];

const arrayB = [
  [5, 20],
  [5, 17],
  [18, 30, 102],
];

const solution = (arrayA, arrayB) => {
  // 각 배열에서 구한 값 중 제일 큰 값 비교
  const aResult = getAnswer(arrayA, arrayB); // [10, 17], [5, 20];
  const bResult = getAnswer(arrayB, arrayA); // [5, 20], [10, 17];
  return aResult > bResult ? aResult : bResult;
};

const getAnswer = (A, B) => {
  // 크게 의미가 있나 ? 제일 작은 수를 구하기 위해 추가한 정렬 함수인 듯 함.
  A.sort((a, b) => a - b);

  // 제일 작은 수를 타겟
  for (let i = A[0]; i > 1; i--) {
    // 제일 작은 수부터 -1 하면서 둘 중 하나가 0인 값을 찾는다.
    if (A.every((a) => a % i === 0) && !B.some((b) => b % i === 0)) {
      return i;
    }
  }

  // 위에서 구해진 값이 없으면 0 반환
  return 0;
};

console.log(arrayA.map((item, index) => solution(item, arrayB[index])));
