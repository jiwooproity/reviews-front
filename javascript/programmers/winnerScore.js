const printArray = [
  { k: 3, score: [10, 100, 20, 150, 1, 200, 200] },
  { k: 4, score: [10, 300, 40, 300, 20, 70, 150, 50, 500, 1000] },
];

const solution = (k, score) => {
  let save = [];
  let results = [];

  score.forEach((item, index) => {
    if (index < k) {
      save.push(item);
    }

    if (item > Math.min(...save)) {
      save.pop();
      save.push(item);
      save.sort((a, b) => b - a);
    }

    results.push(save.at(-1));
  });

  return results;
};

console.log(printArray.map((print) => solution(print.k, print.score)));
