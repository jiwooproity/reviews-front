const appleScore = [
  {
    k: 3,
    m: 4,
    score: [1, 2, 3, 1, 2, 3, 1],
  },
  {
    k: 4,
    m: 3,
    score: [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2],
  },
];

const solution = (k, m, score) => {
  // 결과 값 저장을 위한 선언
  let result = 0;

  // 제일 큰 점수가 나올 사과를 담은 박스의 마지막 index 지정 : 아래 참고
  let nextIndex = m - 1;

  // score로 오는 데이터를 내림차 순으로 정렬하고, 제일 큰 수부터 만들 수 있는 박스 개수만큼 더 더해준다.
  /**
   * EX )
   * score: [1, 2, 3, 1, 2, 3, 1],
   * sort => [3, 3, 2, 2, 1, 1, 1],
   * 제일 큰 수 => 3 + 3 + 2 + 2 ... ( 박스에 담을 수 있는 m 개수 만큼 )
   * 내림차 순으로 정렬을 했기 때문에, 박스에 담을 수 있는 m 개수 기준으로 마지막 index 숫자를 구할 수 있다.
   */

  score.sort((a, b) => b - a);

  // score 배열의 개수와 박스에 담을 수 있는 개수를 나누어 담을 수 있는 박스의 개수를 구하자.
  for (let i = 0; i < Math.floor(score.length / m); i++) {
    // Math.floor(score.length / m) === 2.5 => Math.floor : 2;
    // 리턴에 사용되는 result 값을 업데이트 : score[nextIndex]에 m 곱하기
    result += score[nextIndex] * m;
    nextIndex += m;
  }

  console.log(result);
};

appleScore.forEach((item) => solution(item.k, item.m, item.score));
// 4점과 33점
