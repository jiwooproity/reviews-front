enum Months {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
}

const MONTH_KEYS: { [key in Months]: string } = {
  [Months.Sunday]: "Sunday",
  [Months.Monday]: "Monday",
  [Months.Tuesday]: "Tuesday",
  [Months.Wednesday]: "Wednesday",
  [Months.Thursday]: "Thursday",
  [Months.Friday]: "Friday",
  [Months.Saturday]: "Saturday",
};

class Person {
  constructor(private name: string, private age: number) {
    this.name = name;
    this.age = age;
  }

  getIntroduction() {
    return `My name is '${this.name}' and ${this.age} years old`;
  }
}

function typeCheckValid(value: string | number | Date | Person) {
  switch (typeof value) {
    case "string":
      console.log("This is string type!");
      break;
    case "number":
      console.log("This is number type!");
      break;
    case "object":
      if (value instanceof Date) {
        console.log(`Today is ${MONTH_KEYS[value.getDay()]}`);
      }

      if (value instanceof Person) {
        console.log(value.getIntroduction());
      }

      break;
    default:
      break;
  }
}

(() => {
  typeCheckValid("is string");
  typeCheckValid(1);
  typeCheckValid(new Date());
  typeCheckValid(new Person("Jiwoo So", 24));
})();
