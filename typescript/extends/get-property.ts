interface CarCode {
  1: "Aventador";
}

const CAR_LIST: { [key in keyof CarCode]: string } = {
  1: "Aventador",
};

interface CarArgumetns {
  name: string;
  speed: number;
  code: keyof CarCode;
}

class Car {
  name: string;
  speed: number;
  code: keyof CarCode;

  constructor(args: CarArgumetns) {
    this.name = args.name;
    this.speed = args.speed;
    this.code = args.code;
  }

  get getSpeed(): number {
    return this.speed;
  }
}

function propertySum<T extends CarArgumetns>(args: T) {
  return args.speed + 50;
}

function propertyCode<T extends keyof CarCode>(code: T) {
  return CAR_LIST[code];
}

(() => {
  const car = new Car({ name: "Lamborghini", speed: 400, code: 1 });
  const maxSpeed = propertySum(car);
  const carCode = propertyCode(car.code);
  console.log(maxSpeed); // 450
  console.log(carCode); // Aventador
})();
