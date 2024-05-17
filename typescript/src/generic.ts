class PrimitiveStack<T> {
  private data: T[] = [];

  constructor() {}

  push(item: T): void {
    this.data.push(item);
  }

  pop(): T | undefined {
    return this.data.pop();
  }

  join(): string {
    return this.data.join("");
  }
}

const stringStack = new PrimitiveStack<number>();
stringStack.push(1);
stringStack.pop();

const numberStack = new PrimitiveStack<string>();
numberStack.push("Hello, ");
numberStack.push("World");
console.log(numberStack.join());

const joinArray = <T>(array: T[]): string => {
  return array.join(" ");
};

const numberArr = [1, 2, 3, 4, 5];
const numberToJoin = joinArray<number>(numberArr);

const stringArr = ["1", "2", "3", "4", "5"];
const stringToJoin = joinArray<string>(stringArr);
