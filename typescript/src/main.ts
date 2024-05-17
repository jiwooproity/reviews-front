type Animal = {
  name: string;
  color: string[];
};

type Dog = Animal & {
  breed: string;
};

let animal: Animal = {
  name: "기린",
  color: ["yello", "black"],
};

let dog: Dog = {
  name: "Terry",
  color: ["brown", "black"],
  breed: "Yorkshire Terrier",
};

type Book = {
  name: string;
  price: number;
};

type ProgrammingBook = Book & {
  skill: string;
};

let book: Book;
let programmingBook: ProgrammingBook = {
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  skill: "reactjs",
};

let book2: Book = {
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
};

function calcBook(book: Book) {}
calcBook(programmingBook);
