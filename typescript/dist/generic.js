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
    PrimitiveStack.prototype.join = function () {
        return this.data.join("");
    };
    return PrimitiveStack;
}());
var stringStack = new PrimitiveStack();
stringStack.push(1);
stringStack.pop();
var numberStack = new PrimitiveStack();
numberStack.push("Hello, ");
numberStack.push("World");
console.log(numberStack.join());
var joinArray = function (array) {
    return array.join(" ");
};
var numberArr = [1, 2, 3, 4, 5];
var numberToJoin = joinArray(numberArr);
var stringArr = ["1", "2", "3", "4", "5"];
var stringToJoin = joinArray(stringArr);
export {};
