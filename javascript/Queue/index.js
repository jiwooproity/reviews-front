const { Queue } = require("./queue");

let queue = new Queue();

queue.enqueue(1);
queue.enqueue(5);
queue.enqueue(7);
queue.enqueue(9);
queue.dequeue();
queue.enqueue(2);
queue.dequeue();

while (queue.getLength() !== 0) {
  console.log(queue.dequeue());
}
