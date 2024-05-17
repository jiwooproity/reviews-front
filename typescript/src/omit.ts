type Animal = {
  name: string;
  warning: boolean;
};

type Cat = Omit<Animal, "warning"> & {
  breed: string;
};

let cat: Cat = {
  name: "Murf",
  breed: "street cat",
};
