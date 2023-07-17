const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particleArr = [];

let hue = 0;
// let mouse = {
//   x: 0,
//   y: 0,
// };

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.color = "hsl(" + hue + ", 100%, 50%, 0.8)";
    this.size = Math.random() * 3 + 1;
    this.speedX = Math.random() * 7 - 3.5;
    this.speedY = Math.random() * 7 - 3.5;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.size > 0.2) this.size -= 0.05;
  }

  draw() {
    context.fillStyle = this.color;
    context.beginPath();
    context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    context.fill();
    context.closePath();
  }
}

const drawCanvas = () => {
  for (let i = 0; i < particleArr.length; i++) {
    particleArr[i].update();
    particleArr[i].draw();

    for (let j = i; j < particleArr.length; j++) {
      const dx = particleArr[i].x - particleArr[j].x;
      const dy = particleArr[i].y - particleArr[j].y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < 100) {
        context.beginPath();
        context.strokeStyle = particleArr[i].color;
        context.strokeWidth = particleArr[i].size;
        context.moveTo(particleArr[i].x, particleArr[i].y);
        context.lineTo(particleArr[j].x, particleArr[j].y);
        context.stroke();
        context.closePath();
      }
    }

    if (particleArr[i].size <= 0.3) {
      particleArr.splice(i, 1);
      i--;
    }
  }
};

const animateCanvas = () => {
  context.clearRect(0, 0, canvas.width, canvas.height);

  const [x, y] = [
    Math.random() * window.innerWidth + 1,
    Math.random() * window.innerHeight + 1,
  ];

  for (let i = 0; i < 20; i++) {
    particleArr.push(new Particle(x, y));
  }

  drawCanvas();
  hue += 0.5;
  requestAnimationFrame(animateCanvas);
};

// canvas.addEventListener("mousemove", (e) => {
//   mouse.x = e.x;
//   mouse.y = e.y;

//   for (let i = 0; i < 5; i++) {
//     particleArr.push(new Particle());
//   }
// });

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

animateCanvas();
