const dragBox = document.querySelectorAll(".drag-box");
const dragItem = document.querySelectorAll(".drag-item");

const getDragAfterEl = (container, x) => {
  const draggableElements = [
    ...container.querySelectorAll(".drag-item:not(.dragging)"),
  ];

  return draggableElements.reduce(
    (closet, child) => {
      const box = child.getBoundingClientRect();
      const offset = x - box.left - box.width / 2;

      if (offset < 0 && offset > closet.offset) {
        return { offset, element: child };
      } else {
        return closet;
      }
    },
    { offset: Number.NEGATIVE_INFINITY }
  ).element;
};

const itemDraggable = (el) => {
  const addDragging = () => {
    el.classList.add("dragging");
  };

  const removeDragging = () => {
    el.classList.remove("dragging");
  };

  el.addEventListener("dragstart", addDragging);
  el.addEventListener("dragend", removeDragging);
};

const boxDraggable = (e) => {
  e.preventDefault();
  const afterElement = getDragAfterEl(dragBox[0], e.clientX);
  const draggable = document.querySelector(".dragging");
  if (afterElement === undefined) dragBox[0].appendChild(draggable);
  else dragBox[0].insertBefore(draggable, afterElement);
};

dragItem.forEach(itemDraggable);
dragBox[0].addEventListener("dragover", boxDraggable);
