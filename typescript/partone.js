var data = {
    name: "sojiwoo",
    age: 23
};
var returnData = function (_a) {
    var data = _a.data;
    return data.age;
};
var getData = returnData({ data: data });
console.log(getData);
