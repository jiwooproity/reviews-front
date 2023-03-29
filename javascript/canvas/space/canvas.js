const space = document.getElementById("space");
const spaceContext = space.getContext("2d");

let starsSpeed = 5;
let starsElements = [];
let screen = {};

let image = new Image();
image.src = "./space.jpg";

function Star() {
  this.x = Math.random() * space.width;
  this.y = Math.random() * space.height;
  this.z = Math.random() * 10000;

  this.move = function () {
    this.z -= starsSpeed;
    if (this.z <= 0) this.z = 10000;
  };

  this.show = function () {
    let radius = space.width / this.z;
    let x = (this.x - screen.canvas[0]) * radius;
    x = x + screen.canvas[0];
    let y = (this.y - screen.canvas[1]) * radius;
    y = y + screen.canvas[1];

    spaceContext.beginPath();
    spaceContext.fillStyle = "rgba(255, 255, 255, 0.8)";
    spaceContext.arc(x, y, radius, 0, Math.PI * 2);
    spaceContext.fill();

    spaceContext.beginPath();
    spaceContext.strokeStyle = "rgba(30, 255, 255, 0.1)";
    spaceContext.arc(x, y, radius, 0, Math.PI * 2);
    spaceContext.stroke();
  };
}

function drawStars() {
  screen = {
    width: window.innerWidth,
    height: window.innerHeight,
    canvas: [window.innerWidth * 0.5, window.innerHeight * 0.5],
  };

  window.cancelAnimationFrame(setStars);

  space.width = screen.width;
  space.height = screen.height;

  starsElements = [];

  for (let i = 0; i < 1500; i++) {
    starsElements[i] = new Star();
  }
}

function setStars() {
  spaceContext.clearRect(0, 0, space.width, space.height);
  spaceContext.fillStyle = "black";
  spaceContext.fillRect(0, 0, space.width, space.height);
  spaceContext.drawImage(image, 0, 0, space.width, space.height);
  starsElements.forEach((star) => {
    star.move();
    star.show();
  });

  requestAnimationFrame(setStars);
}

window.onload = function () {
  spaceContext.drawImage(image, 0, 0);
  drawStars();
  setStars();
};

window.addEventListener("resize", drawStars);
