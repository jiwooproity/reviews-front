class CreateData {
  constructor(title, description) {
    this.nowTime = new Date();
    this.date = `${this.nowTime.getFullYear()}-${
      this.nowTime.getMonth() + 1
    }-${this.nowTime.getDate()}`;
    this.title = title;
    this.description = description;
  }
}

const onUpload = ({ title, description }) => {
  const sendData = new CreateData(title, description);
  console.log(sendData);
};

onUpload({
  title: "테스트 제목입니다",
  description: "테스트 내용입니다.",
});
