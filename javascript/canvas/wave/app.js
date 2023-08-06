import { WaveGroup } from "./waveGroup.js";

class App {
  constructor() {
    this.canvas = document.getElementById("canvas");
    this.context = canvas.getContext("2d");
    document.body.appendChild(this.canvas);

    this.waveGroup = new WaveGroup();

    window.addEventListener("resize", this.resize.bind(this), false);
    this.resize();

    requestAnimationFrame(this.animate.bind(this));
  }

  resize() {
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;

    this.canvas.width = this.stageWidth * 2;
    this.canvas.height = this.stageHeight * 2;
    this.context.scale(2, 2);

    this.waveGroup.resize(this.stageWidth, this.stageHeight);
  }

  animate(t) {
    this.context.clearRect(0, 0, this.stageWidth, this.stageHeight);

    this.waveGroup.draw(this.context);

    requestAnimationFrame(this.animate.bind(this));
  }
}

window.onload = () => {
  new App();
};
