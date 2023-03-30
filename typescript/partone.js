var data = {
    name: "sojiwoo",
    age: 23
};
var returnData = function (data) {
    return data.age;
};
var getData = returnData(data);
console.log(getData);
