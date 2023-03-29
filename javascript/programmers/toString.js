function solution(s) {
  let answer = [0, 0];

  while (s !== "1") {
    s = s.split("");
    const length = s.filter((i) => i === "1").length;
    answer[0] += 1;
    answer[1] += s.length - length;
    s = length.toString(2);
  }

  return answer;
}

const problemArr = ["110010101001", "01110", "1111111"];
const getAnswer = problemArr.map(solution);
console.log(getAnswer);
