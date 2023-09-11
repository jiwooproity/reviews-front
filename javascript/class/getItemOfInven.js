class Inventory {
  constructor(inventory) {
    this.inventory = inventory;
  }

  checkInventory() {
    return this.inventory;
  }

  checkSize() {
    return this.inventory.length;
  }

  setInventory(item) {
    this.inventory.push(item);
    return this.inventory;
  }

  getInventory(item) {
    const index = this.inventory.indexOf(item);
    const next = this.inventory.splice(index, 1);
    return next;
  }
}

const myInven = ["banana", "apple", "key", "iPhone 11"];
const inventory = new Inventory(myInven);
console.log(inventory.checkInventory());
console.log(inventory.checkSize());
console.log(inventory.setInventory("AirPods Pro"));
console.log(inventory.getInventory("banana"));
console.log(inventory.checkInventory());
