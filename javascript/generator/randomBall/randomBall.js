const randomNumberWrapper = document.querySelector(".random-number-wrapper");
const resultList = document.querySelector(".result-list");

const resultArray = [];

function* getRandomNumber() {
  const length = 100;
  const createObject = () => ({
    number: Math.floor(Math.random() * length),
    color: Math.round(Math.random() * 0xffffff).toString(16),
  });

  yield createObject();
  yield createObject();
  yield createObject();
  yield createObject();
  yield createObject();
}
const randomFunc = getRandomNumber();

const renderItem = () => {
  randomNumberWrapper.innerHTML = "";
  const list = document.createElement("ul");
  resultArray.forEach((result) => {
    const item = document.createElement("li");
    item.innerText = `${result.number}`;
    item.style.backgroundColor = `#${result.color}`;
    list.appendChild(item);
  });

  randomNumberWrapper.appendChild(list);
};

const onClickRandomBtn = () => {
  const randomNumber = randomFunc.next();

  if (randomNumber.done) {
    alert("모든 번호가 출력되었습니다.");
  } else {
    resultArray.push(randomNumber.value);
    renderItem();
  }
};

window.onload = () => {
  const button = document.getElementById("create-random");
  button.addEventListener("click", onClickRandomBtn);
};
