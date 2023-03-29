const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject({ status: 500 });
  }, 1000);
});

promise
  .then((response) => {
    console.log(response.status);
  })
  .catch((error) => {
    console.log("reject : " + error.status);
  });
