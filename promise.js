const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ status: 200 });
  }, 1000);
});

const getPromise = async () => {
  const response = await promise;
  console.log(response.status);
  console.log("비동기 처리 완료");
};

getPromise();
