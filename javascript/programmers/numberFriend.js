const printArray = [
  { X: "100", Y: "2345" },
  { X: "100", Y: "203045" },
  { X: "100", Y: "123450" },
  { X: "12321", Y: "42531" },
  { X: "5525", Y: "1255" },
];

const solution = (X, Y) => {
  let answer = "";
  // 중복 값을 제거하면서 비교하기 위한 map 생성자
  let map = new Map();

  // ...Y로 문자를 하나씩 가져와, map에 각 문자의 숫자를
  [...Y].forEach((y) => {
    map.set(y, (map.get(y) || 0) + 1);
  });

  [...X].forEach((x) => {
    // ...X로 문자를 하나씩 가져와, map에 일치하는 숫자가 0개 이상일 때
    if (map.get(x) > 0) {
      // if문으로 진입하고, map에 일치하는 숫자 개수를 줄인 후..
      map.set(x, map.get(x) - 1);
      // answer에 문자열을 이어준다.
      answer += x;
    }
  });

  // 가져온 숫자가 없어 answer 값이 없을 때 -1 반환
  if (answer === "") return "-1";
  // +로 정수로 변환하여 정수 0일 경우 0을 반환하고 아닐 경우, 제일 큰 수를 구하기 위해 sort 내림차 순 정렬하여 join을 통해 문자열을 완성해 준다.
  else return +answer === 0 ? "0" : [...answer].sort((a, b) => b - a).join("");
};

console.log(printArray.map((print) => solution(print.X, print.Y)));
