this.arrowData = 1;
console.log(this);

let object = {
  count: 0,
  arrowData: 2,
  get: function () {
    // 함수 표현식은 기본적으로 this를 가지고 해당 함수를 호출한 오브젝트에 의해 바인딩됨.
    return this.count;
  },
  call: function (data, data2) {
    // 명시적 바인딩 : call는 object를 바인딩하고 인수를 전달받음 ( 인수는 여러개가 될 수 있음 )
    return `${this.count} ${data} ${data2}`;
  },
  apply: function (data) {
    // 명시적 바인딩 : apply는 object를 바인딩하고 인수를 전달받음 ( 인수는 하나 )
    return `${this.count} ${data}`;
  },
  arrow: () => {
    // arrow fn 은 기본적으로 this을 가지지 않음. 상위 스코프로 this 탐색 작업을 진행
    return `${this.arrowData}`;
  },
  fnInArrow: function () {
    // arrow fn은 기본적으로 this을 가지지 않고, 상위 스코프에 this를 가지는 함수 표현식에 의해 결정됨.
    console.log(this.arrowData);
    const arrow = () => {
      console.log(this.arrowData);
    };
    arrow();
  },
  arrowInArrow: () => {
    // arrow fn은 기본적으로 this를 가지지 않기 때문에 this 탐색 과정에서 더 최상위의 this를 참조하고자 함.
    console.log(this.arrowData);
    const arrow = () => {
      console.log(this.arrowData);
    };
    arrow();
  },
  functionToFunction: function () {
    function inFunction() {
      console.log(this);
    }

    inFunction();
  },
};

let newObject = {
  count: 3,
  arrowData: 2,
  get: object.get.bind(object),
  call: object.call,
  apply: object.apply,
  arrow: object.arrow,
  fnInArrow: object.fnInArrow,
  arrowInArrow: object.arrowInArrow,
  functionToFunction: object.functionToFunction,
};

console.log(newObject.get());
console.log(newObject.call.call(object, ["asdasd"], ["asdasd"]));
console.log(newObject.apply.apply(object, ["adasd"]));
console.log(newObject.arrow());
newObject.fnInArrow();
newObject.arrowInArrow();
newObject.functionToFunction();
