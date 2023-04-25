const slide_box = document.getElementById("slide_box");
const slide_item = document.querySelectorAll(".slide_item");

const [left_arrow, right_arrow] = document.querySelectorAll("#slide_arrow");

let slide_index = 1;
let slide_left = 0;

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
};

left_arrow.addEventListener("click", () => onClickArrow("left"));
right_arrow.addEventListener("click", () => onClickArrow("right"));
