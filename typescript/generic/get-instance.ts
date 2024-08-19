class UserInfo<T, F extends (...args: any) => any> {
  constructor(private name: string, private age: number) {
    this.name = name;
    this.age = age;
  }

  getName() {
    return this.name;
  }

  getAge() {
    return this.age;
  }

  getInfo(callback: F): T {
    return callback(this.name, this.age) as T;
  }
}

(() => {
  const createInfo = (name: string, age: number) => {
    return `I'm ${name}, age is ${age} years old`;
  };

  const user = new UserInfo<string, typeof createInfo>("James", 24);
  const info = user.getInfo(createInfo);
  console.log(info);
})();
