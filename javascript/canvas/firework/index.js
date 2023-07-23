const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const fireworkObjectArr = [];

class Firework {
  constructor(x, y, color, boomSize) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.opacity = 1;
    this.size = Math.random() * 2 + 1;
    this.speedX = Math.random() * boomSize - boomSize / 2;
    this.speedY = Math.random() * boomSize - boomSize / 2;
  }

  update() {
    if (this.opacity > 0.01) this.opacity -= 0.015;
    if (this.size > 0.8) {
      this.x += this.speedX;
      this.y += this.speedY;
      this.size -= 0.05;
    } else {
      this.y += 1;
    }
  }

  draw() {
    context.fillStyle = this.color + ", " + this.opacity + ")";
    context.beginPath();
    context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    context.fill();
    context.closePath();
  }
}

class FireworkObject {
  constructor() {
    this.x = Math.random() * window.innerWidth + 1;
    this.y = Math.random() * 1000 + window.innerHeight;
    this.rotate = Math.random() * 3 - 1.5;
    this.timing = (Math.random() * window.innerHeight + 500) / 2;
    this.color = "hsl(" + Math.random() * 1000 + 1 + ", 100%, 50%";
    this.objWidth = 1;
    this.objHeight = 5;
    this.speedY = 10;
    this.firework = [];
  }

  update() {
    this.y -= 10;
  }

  draw() {
    if (this.y < this.timing) {
      let boomSize = Math.random() * 15 + 1;
      for (let i = 0; i < 50; i++) {
        this.firework.push(new Firework(this.x, this.y, this.color, boomSize));
      }

      for (let i = 0; i < 100; i++) {
        this.firework.push(
          new Firework(this.x, this.y, "rgb(255, 255, 255", boomSize)
        );
      }
    } else {
      context.beginPath();
      context.fillStyle = this.color + ", 0.8)";
      context.rect(this.x, this.y, this.objWidth, this.objHeight);
      context.fill();
      context.fillStyle = this.color + ", 0.7)";
      context.rect(this.x, this.y + 10, this.objWidth, this.objHeight);
      context.fill();
      context.fillStyle = this.color + ", 0.6)";
      context.rect(this.x, this.y + 20, this.objWidth, this.objHeight);
      context.fill();
      context.fillStyle = this.color + ", 0.5)";
      context.rect(this.x, this.y + 30, this.objWidth, this.objHeight);
      context.fill();
      context.fillStyle = this.color + ", 0.4)";
      context.rect(this.x, this.y + 40, this.objWidth, this.objHeight);
      context.fill();
      context.fillStyle = this.color + ", 0.3)";
      context.rect(this.x, this.y + 60, this.objWidth, this.objHeight);
      context.fill();
      context.fillStyle = this.color + ", 0.2)";
      context.rect(this.x, this.y + 90, this.objWidth, this.objHeight);
      context.fill();
      context.fillStyle = this.color + ", 0.1)";
      context.rect(this.x, this.y + 120, this.objWidth, this.objHeight);
      context.fill();
      context.closePath();
    }
  }
}

const onHandleDraw = () => {
  if (fireworkObjectArr.length === 0) return;

  for (let i = 0; i < fireworkObjectArr.length; i++) {
    if (fireworkObjectArr[i].y > fireworkObjectArr[i].timing) {
      fireworkObjectArr[i].update();
      fireworkObjectArr[i].draw();
    } else {
      if (fireworkObjectArr[i].firework.length !== 0) {
        for (let j = 0; j < fireworkObjectArr[i].firework.length; j++) {
          if (fireworkObjectArr[i].firework[j].opacity > 0.02) {
            fireworkObjectArr[i].firework[j].update();
            fireworkObjectArr[i].firework[j].draw();
          } else {
            fireworkObjectArr[i].firework.splice(j, 1);
            j--;
          }
        }
      }
    }
  }
};

const onHandleRequestAnimation = () => {
  context.clearRect(0, 0, canvas.width, canvas.height);
  onHandleDraw();
  requestAnimationFrame(onHandleRequestAnimation);
};

const onHandleResize = () => {
  canvas.width = window.innerWidth;
  canvas.height = widnow.innerHeight;
};

const onHandleAudio = () => {
  const audio = document.getElementById("audio");
  audio.muted = false;
  audio.play();
};

const onHandleObjectInit = () => {
  fireworkObjectArr.push(new FireworkObject());
};

setInterval(() => {
  onHandleObjectInit();
}, 200);

onHandleRequestAnimation();
document.addEventListener("DOMContentLoaded", onHandleAudio);
window.addEventListener("resize", onHandleResize);
