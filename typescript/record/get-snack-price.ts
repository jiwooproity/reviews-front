type Snacks = "홈런볼" | "칙촉";

// Maped Type
type Price = {
  [name in Snacks]: number;
};

// Record Type
type PriceRecord = Record<Snacks, number>;

const prices: PriceRecord = {
  홈런볼: 1000,
  칙촉: 2000,
};

const getPrice = () => {
  return prices["홈런볼"];
};

(() => {
  const price = getPrice();
  console.log(price); // 1000
})();
