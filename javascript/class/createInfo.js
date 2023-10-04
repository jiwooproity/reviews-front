class People {
  constructor({ hobby, job }) {
    this.age = Math.floor(Math.random() * 100);
    this.hobby = hobby;
    this.job = job;
  }
}

const peopleList = [
  {
    hobby: "gundam",
    job: "programmer",
  },
  {
    hobby: "game",
    job: "progamer",
  },
];

const peopleBigData = peopleList.map((people) => new People({ ...people }));
console.log(peopleBigData);
