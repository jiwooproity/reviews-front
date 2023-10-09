class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  update(key, value) {
    if (!!this[key]) {
      this[key] = value;
      return this;
    } else {
      return "업데이트할 데이터가 없습니다.";
    }
  }

  reset() {
    this.name = "";
    this.age = 0;
    return this;
  }

  insert(key, value) {
    this[key] = value;
    return this;
  }
}

const userInfo = new User("소지우", 23);
console.log(userInfo);

userInfo.update("age", 24);
console.log(userInfo);

userInfo.insert("job", "programmer");
console.log(userInfo);

console.log(userInfo.update("error", 24));
