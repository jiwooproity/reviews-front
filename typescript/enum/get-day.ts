enum Month {
  January,
  February,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  October,
  November,
  December,
}

const MONTH_NAME = {
  [Month.January]: "1월",
  [Month.February]: "2월",
  [Month.March]: "3월",
  [Month.April]: "4월",
  [Month.May]: "5월",
  [Month.June]: "6월",
  [Month.July]: "7월",
  [Month.August]: "8월",
  [Month.September]: "9월",
  [Month.October]: "10월",
  [Month.November]: "11월",
  [Month.December]: "12월",
};

class Day {
  constructor(private month: Month) {
    this.month = month;
  }

  getMonth() {
    return MONTH_NAME[this.month];
  }
}

(() => {
  const day = new Day(Month.August).getMonth();
  console.log(day);
})();
