import proxyState from "./proxyState.js";

const slider = document.getElementById("slider");
const leftWrapper = document.getElementById("left");

let mousedownX = 0;
let leftWidth = 0;

const mouseDownHandler = function (e) {
  mousedownX = e.clientX;
  leftWidth = leftWrapper.getBoundingClientRect().width;

  document.addEventListener("mousemove", mouseMoveHandler);
  document.addEventListener("mouseup", mouseUpHandler);
};

const mouseMoveHandler = function (e) {
  const mouseMoveX = e.clientX;
  const moveX = mouseMoveX - mousedownX;

  const newLeftWidth = ((leftWidth + moveX) * 100) / slider.parentNode.getBoundingClientRect().width;
  leftWrapper.style.width = `${newLeftWidth}%`;
};

const mouseUpHandler = function (e) {
  document.removeEventListener("mousemove", mouseMoveHandler);
  document.removeEventListener("mouseup", mouseUpHandler);
};

slider.addEventListener("mousedown", mouseDownHandler);

slider.addEventListener("click", () => {
  proxyState.data = 200;
  console.log(proxyState.data);
});
