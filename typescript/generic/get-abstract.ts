abstract class Shape<T> {
  public name: T;

  constructor(name: T) {
    this.name = name;
  }

  abstract getName(): T;

  abstract getArea(): number;
}

class Circle<T> extends Shape<T> {
  constructor(name: T, private radius: number) {
    super(name);
    this.radius = radius;
  }

  getName(): T {
    return this.name;
  }

  getArea(): number {
    return Math.PI * Math.pow(this.radius, 2);
  }
}

(() => {
  const circle = new Circle<string>("Circle", 5);
  console.log(circle.getArea());
  console.log(circle.getName());
})();
