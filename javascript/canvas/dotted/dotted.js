const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const width = canvas.width;
const height = canvas.height;

const PI2 = Math.PI * 2;
const radius = 5;
const spacer = 1;
const diameter = radius * 1.5;

const image = new Image();
image.src = "./test.webp";

image.onload = () => renderImage();

const renderImage = () => {
  canvas.width = image.width;
  canvas.height = image.height;

  context.fillStyle = "black";
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.globalCompositeOperation = "destination-out";
  context.beginPath();

  for (let y = radius; y < canvas.height; y += diameter + spacer) {
    for (let x = radius; x < canvas.width; x += diameter + spacer) {
      context.arc(x, y, radius, 0, PI2);
      context.closePath();
    }
  }

  context.fill();
  context.globalCompositeOperation = "destination-atop";
  context.drawImage(image, 0, 0);

  context.globalCompositing = "source-over";
};
