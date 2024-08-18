interface CountType {
  views: number;
  likes: number;
  shares: number;
  comments: number;
}

interface ChartType {
  axis: string;
  value: string;
  color: string;
}

type ChartDataType = Record<keyof CountType, ChartType>;

const chartDataRecord: ChartDataType = {
  views: {
    axis: "1",
    value: "2",
    color: "1",
  },
  likes: {
    axis: "1",
    value: "2",
    color: "1",
  },
  shares: {
    axis: "1",
    value: "2",
    color: "1",
  },
  comments: {
    axis: "1",
    value: "2",
    color: "1",
  },
};

(() => {
  console.log(chartDataRecord);
})();
