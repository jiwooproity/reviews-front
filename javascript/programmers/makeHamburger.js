// 햄버거 포장 조건 : 1, 2, 3, 1 === ( 빵, 야채, 패티, 빵) 순으로 연속될 경우, 햄버거 포장 가능

// 재료들
const ingredient = [
  [2, 1, 1, 2, 3, 1, 2, 3, 1], // breakfast
  [1, 3, 2, 1, 2, 1, 3, 1, 2], // lunch
  [1, 2, 3, 1, 1, 2, 3, 1, 1, 2, 3, 1, 1, 2, 3, 1], // dinner
];

const solution = (ingredient) => {
  let paveCount = 0; // 포장 개수
  const inventory = []; // 가져온 재료를 하나씩 넣으며 비교할 배열

  ingredient.forEach((ingre) => {
    inventory.push(ingre); // 가져온 모든 재료를 하나씩 넣으며 비교함

    // 가져온 재료가 4개 이상으로 넘어갈 경우, 연속된 재료가 준비 되었는지 확인 작업
    if (inventory.length > 3 && inventory.slice(-4).join("") === "1231") {
      inventory.splice(-4); // 햄버거를 만들 수 있는 조건이 총족하면 포장에 사용된 값은 인벤토리에서 제외
      paveCount++; // 포장 개수 업데이트
    }
  });

  // 계산된 포장 개수 반환
  return paveCount;
};

const getPaveLog = ingredient.map(solution);
console.log(`BreakFast : ${getPaveLog[0]}개 판매됨`);
console.log(`Lunch : ${getPaveLog[1]}개 판매됨`);
console.log(`Dinner : ${getPaveLog[2]}개 판매됨`);
