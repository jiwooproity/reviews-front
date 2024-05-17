var cat = {
    name: "Murf",
    breed: "street cat",
};
var PrimitiveStack = /** @class */ (function () {
    function PrimitiveStack() {
        this.data = [];
    }
    PrimitiveStack.prototype.push = function (item) {
        this.data.push(item);
    };
    PrimitiveStack.prototype.pop = function () {
        return this.data.pop();
    };
    return PrimitiveStack;
}());
var stringStack = new PrimitiveStack();
stringStack.push(1);
stringStack.pop();
stringStack.pop();
console.log(stringStack);
export {};
