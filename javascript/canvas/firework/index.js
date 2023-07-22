const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let hue = 0;

const particleArr = [];

let mouse = {
    x: null,
    y: null
}

class Particle {
    constructor() {
        this.x = mouse.x;
        this.y = mouse.y;
        this.color = "hsl(" + hue +  ", 100%, 50%, 0.8)";
        this.size = Math.random() * 3  + 1;
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

const onClick = (e) => {
    mouse.x = e.x;
    mouse.y = e.y;

    for(let i = 0; i < 100; i++) {
        particleArr.push(new Particle());
    }
}

const onDraw = () => {
    for(let i = 0; i < particleArr.length; i++) {
        if(particleArr[i].size > 0) {
            particleArr[i].update();
            particleArr[i].draw();
        } else {
            particleArr = [];
        }
    }
}

const canvasAnimation = () => {
    context.clearRect(0, 0, canvas.width, canvas.height);
    onDraw();
    hue += 0.5;
    requestAnimationFrame(canvasAnimation);
}

canvas.addEventListener('click', onClick);

const onResize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

window.addEventListener('resize', onResize);

canvasAnimation();