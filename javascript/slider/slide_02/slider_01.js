const slide_box = document.getElementById("slide_box");
const slide_item = document.querySelectorAll(".slide_item");
const slide_dot = document.querySelectorAll(".slide_dot");

let slide_index = 1;
let slide_left = 0;

slide_item[slide_index - 1].style.opacity = "1";

const [left_arrow, right_arrow] = document.querySelectorAll("#slide_arrow");

const onClickArrow = (direction) => {
  if (direction === "right") {
    if (slide_index < slide_item.length) {
      slide_box.style.left = `${slide_left - 500}px`;
      slide_index += 1;
      slide_left -= 500;
    } else {
      slide_box.style.left = `${0}px`;
      slide_left = 0;
      slide_index = 1;
    }
  }

  if (direction === "left") {
    if (slide_index !== 1) {
      slide_box.style.left = `${slide_left + 500}px`;
      slide_index -= 1;
      slide_left += 500;
    } else {
      slide_box.style.left = `${-500 * 2}px`;
      slide_left = -500 * 2;
      slide_index = 3;
    }
  }

  slide_item.forEach((el, index) => (el.style.opacity = index === slide_index - 1 ? "1" : "0"));
  slide_dot.forEach((el, idx) => {
    if (idx === slide_index - 1) {
      el.style.backgroundColor = "black";
    } else {
      el.style.backgroundColor = "gray";
    }
  });
};

left_arrow.addEventListener("click", () => onClickArrow("left"));
right_arrow.addEventListener("click", () => onClickArrow("right"));

const onClickDot = (index) => {
  slide_box.style.left = `${-index * 500}px`;
  slide_left = -index * 500;
  slide_index = index + 1;
  slide_item.forEach((el, idx) => (el.style.opacity = idx === index ? "1" : "0"));
  slide_dot.forEach((el, idx) => {
    if (idx === index) {
      el.style.backgroundColor = "black";
    } else {
      el.style.backgroundColor = "gray";
    }
  });
};

slide_dot.forEach((el, index) => {
  el.addEventListener("click", () => onClickDot(index));
});
