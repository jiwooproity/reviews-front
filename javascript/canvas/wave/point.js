export class Point {
  constructor(index, x, y) {
    this.x = x;
    this.y = y;
    this.fixedY = y;
    this.spread = 0.05;
    this.cur = index;
    this.max = Math.random() * 100 + 1;
  }

  update() {
    this.cur += this.spread;
    this.y = this.fixedY + Math.sin(this.cur) * this.max;
  }
}
