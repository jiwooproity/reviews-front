/**
 * 대수 타입
 * -> 여러 개의 타입을 합성해서 새롭게 만들어낸 타입
 * -> 합집합 타입과 교집합 타입이 존재합니다.
 */
/**
 * 1. 합집합 - Union 타입
 */
var a;
a = 1;
a = "JavaScript";
a = true;
var arr = [1, "hello", true, 2];
var dog = {
    name: "Dog",
    color: "brown",
};
var person = {
    name: "jiwoo",
    language: "ko",
};
var union1 = {
    name: "jiwoo",
    language: "ko",
    color: "",
};
var intersection = {
    name: "asdasd",
    language: "asd",
    color: "asdas",
};
export {};
