const first = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ status: 200 });
  }, 1000);
});

const second = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ status: 500 });
  }, 1500);
});

const onLoad = async () => {
  const promiseArray = [first, second];
  const [res1, res2] = await Promise.all(promiseArray);
  console.log(res1, res2);

  await Promise.all([first, second]).then((response) => {
    const [resOne, resTwo] = response;
    console.log("resOne : ", resOne);
    console.log("resTwo : ", resTwo);
  });
};

onLoad();
