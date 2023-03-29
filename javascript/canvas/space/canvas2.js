const space = document.getElementById("space");
const spaceContext = space.getContext("2d");

let starSpeed = 3;
let starElement = [];
const starColor = [
  { r: 177, g: 225, b: 242 },
  { r: 123, g: 180, b: 227 },
  { r: 232, g: 240, b: 252 },
  { r: 247, g: 240, b: 218 },
  { r: 255, g: 230, b: 120 },
  { r: 255, g: 188, b: 120 },
  { r: 252, g: 133, b: 106 },
];

let mouse = { x: 0, y: 0 };

let image = new Image();
image.src = "./space.jpg";

function Star(index) {
  this.index = index;
  this.color = starColor[Math.floor(Math.random() * starColor.length)];
  this.x = Math.random() * space.width;
  this.y = Math.random() * space.height;
  this.z = Math.random() * space.width;

  this.move = function () {
    this.z -= starSpeed;
    if (this.z <= 0) this.z = space.width;
  };

  this.show = function () {
    let radius = (window.innerWidth * 0.5) / this.z;
    let x = (this.x - window.innerWidth * 0.5) * radius;
    x = x + window.innerWidth * 0.5;
    let y = (this.y - window.innerHeight * 0.5) * radius;
    y = y + window.innerHeight * 0.5;

    let opacity = radius > 4 ? 2 - radius / 4 : 1;

    spaceContext.beginPath();
    spaceContext.fillStyle = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${opacity})`;
    spaceContext.arc(x, y, radius, 0, Math.PI * 2);
    spaceContext.fill();

    let a = x - mouse.x;
    let b = y - mouse.y;

    if (Math.sqrt(a * a + b * b) < radius * 5 && radius <= 4) {
      spaceContext.font = "15px serif";
      spaceContext.fillStyle = "white";
      spaceContext.fillText(`x: ${Math.round(x)}, y: ${Math.round(y)}`, x + 2 + radius, y - 2 - radius);

      spaceContext.font = "15px serif";
      spaceContext.fillStyle = "white";
      spaceContext.fillText(`${this.index}번째 별`, x + 2 + radius, y - 20 - radius);

      spaceContext.beginPath();
      spaceContext.strokeStyle = "rgba(255, 255, 255, 1)";
      spaceContext.lineWidth = 2;
      spaceContext.arc(x, y, radius + 2, 0, Math.PI * 2);
      spaceContext.stroke();
    }

    if (x <= 0 || x >= window.innerWidth || y <= 0 || y >= window.innerHeight) {
      this.x = Math.random() * space.width;
      this.y = Math.random() * space.height;
      this.z = Math.random() * space.width;
    }
  };
}

function createStars() {
  space.width = window.innerWidth;
  space.height = window.innerHeight;

  cancelAnimationFrame(updateStars);

  for (let i = 0; i < 300; i++) {
    starElement[i] = new Star(i);
  }
}

function updateStars() {
  spaceContext.clearRect(0, 0, space.width, space.height);

  spaceContext.drawImage(image, 0, 0, space.width, space.height);

  spaceContext.fillStyle = "rgba(0, 0, 0, 0.8)";
  spaceContext.fillRect(0, 0, space.width, space.height);
  spaceContext.fill();

  spaceContext.beginPath();
  spaceContext.strokeStyle = "green";
  spaceContext.lineWidth = 1;
  spaceContext.moveTo(mouse.x, 0);
  spaceContext.lineTo(mouse.x, space.height);
  spaceContext.stroke();

  spaceContext.beginPath();
  spaceContext.strokeStyle = "red";
  spaceContext.lineWidth = 1;
  spaceContext.moveTo(0, mouse.y);
  spaceContext.lineTo(space.width, mouse.y);
  spaceContext.stroke();

  spaceContext.beginPath();
  spaceContext.fillStyle = "white";
  spaceContext.arc(mouse.x, mouse.y, 2, 0, Math.PI * 2);
  spaceContext.fill();

  let fontCoordinate = { x: mouse.x, y: mouse.y - 10 };

  spaceContext.font = "12px serif";
  spaceContext.fillStyle = "rgba(255, 255, 255, 0.3)";

  if (window.innerWidth - 100 <= mouse.x) {
    spaceContext.textAlign = "right";
    fontCoordinate.x = mouse.x - 10;
  } else {
    spaceContext.textAlign = "left";
    fontCoordinate.x = mouse.x + 10;
  }

  if (25 >= mouse.y) {
    fontCoordinate.y = mouse.y + 20;
  }

  spaceContext.fillText(`x: ${mouse.x}, y: ${mouse.y}`, fontCoordinate.x, fontCoordinate.y);

  starElement.forEach((star) => {
    star.move();
    star.show();
  });

  requestAnimationFrame(updateStars);
}

function onMouseMove(e) {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
}

function onMouseClick() {
  let nextSpeed = starSpeed + 1;

  if (nextSpeed === 13) {
    nextSpeed = 3;
    starSpeed = 3;
  } else {
    starSpeed = nextSpeed;
  }

  const status = document.getElementById("status");
  status.innerHTML = `SPEED: ${nextSpeed}`;
}

space.addEventListener("mousemove", onMouseMove);
space.addEventListener("click", onMouseClick);

window.addEventListener("resize", () => {
  createStars();
});

window.onload = function () {
  createStars();
  updateStars();
};
