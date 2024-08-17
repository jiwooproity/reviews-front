function getProperty<T, O extends keyof T>(object: T, key: O) {
  return object[key];
}

(() => {
  const object = { name: "john", email: "any@sample.com" };
  const name = getProperty(object, "name"); // "john" | "any@sample.com"
  console.log(name); // "john"

  // const error = getProperty(object, "nickname");
  // -> [Error: '"nickname"' 형식의 인수는 '"name" | "email"' 형식의 매개 변수에 할당될 수 없습니다.]
})();
