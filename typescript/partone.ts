type dataType = {
    name: string;
    age: number;
}

type functionType = (data: dataType) => number;

const data: dataType = {
    name: "sojiwoo",
    age: 23
}

const returnData: functionType = function(data) {
    return data.age;
}

const getData = returnData(data);
console.log(getData);