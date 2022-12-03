const printArray = [{ number: [-2, 3, 0, 2, -5] }, { number: [-3, -2, -1, 0, 1, 2, 3] }, { number: [-1, 1, -1, 1] }];

const solution = (number) => {
  let answer = 0;

  const getCombinations = (array, select) => {
    const results = [];

    if (select === 1) {
      return array.map((el) => [el]);
    }

    array.forEach((arr, index, origin) => {
      const rest = origin.slice(index + 1);
      const combinations = getCombinations(rest, select - 1);
      const attached = combinations.map((el) => [arr, ...el]);
      results.push(...attached);
    });

    return results;
  };

  const resultsArr = getCombinations(number, 3);
  resultsArr.forEach((result) => {
    if (result[0] + result[1] + result[2] === 0) {
      answer++;
    }
  });

  return answer;
};

console.log(printArray.map((print) => solution(print.number)));
