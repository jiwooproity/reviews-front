enum Fruit {
  Apple,
  Banana,
  Orange,
}

const FRUIT_PRICE: { [key in Fruit]: number } = {
  [Fruit.Apple]: 12000,
  [Fruit.Banana]: 30000,
  [Fruit.Orange]: 15000,
};

const getFruit = (): Promise<{ fruit: Fruit }> => {
  return new Promise((resolve) => resolve({ fruit: 1 }));
};

(async () => {
  const myFruit = await getFruit();
  const price = FRUIT_PRICE[myFruit.fruit];
  console.log(price); // 30000
})();
