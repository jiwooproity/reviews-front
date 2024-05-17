/**
 * TypeScript Enum 키워드
 * 열거형이라 불리는 명명된 값의 집합을 이루는 자료형
 */

enum Roles {
  ADMIN = 0,
  USER = 0,
}

const account = {
  nickname: "matti",
  age: 24,
  role: Roles.ADMIN,
};

console.log(account);
