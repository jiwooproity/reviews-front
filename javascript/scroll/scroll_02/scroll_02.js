let boxes = null

function checkBoxesY() {
    const triggerBottom = window.innerHeight / 5 * 4;

    boxes.forEach((box) => {
        const boxTop = box.getBoundingClientRect().top;
        boxTop < triggerBottom ? box.classList.add('show') : box.classList.remove('show');
    })
}

function contentLoaded() {
    const boxLength = 20;
    const boxWrapper = document.querySelector('.box_wrapper');
    const boxesArr = new Array(boxLength).fill(0);
    
    boxesArr.forEach((_, idx) => {
        const calcColor = 10 * idx + 1;
        const createBoxElement = document.createElement('div');
        createBoxElement.classList.add('box');
        createBoxElement.style.backgroundColor = `rgba(${255}, ${calcColor}, ${0}, ${1})`;
        createBoxElement.textContent = `${idx + 1}`;
        boxWrapper.appendChild(createBoxElement);

        boxes = document.querySelectorAll('.box');
        checkBoxesY();
    })
}

window.addEventListener('scroll', checkBoxesY);
window.addEventListener('DOMContentLoaded', contentLoaded);