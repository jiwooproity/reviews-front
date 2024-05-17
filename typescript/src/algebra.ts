/**
 * 대수 타입
 * -> 여러 개의 타입을 합성해서 새롭게 만들어낸 타입
 * -> 합집합 타입과 교집합 타입이 존재합니다.
 */

/**
 * 1. 합집합 - Union 타입
 */

let a: string | number | boolean;
a = 1;
a = "JavaScript";
a = true;

let arr: (number | string | boolean)[] = [1, "hello", true, 2];

type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};

type Union1 = Dog | Person;

let dog: Union1 = {
  name: "Dog",
  color: "brown",
};

let person: Union1 = {
  name: "jiwoo",
  language: "ko",
};

let union1: Union1 = {
  name: "jiwoo",
  language: "ko",
  color: "",
};

/**
 * 2. 교집합 타입 - Intersection 타입
 */

type Intersection = Dog & Person;

let intersection: Intersection = {
  name: "asdasd",
  language: "asd",
  color: "asdas",
};
