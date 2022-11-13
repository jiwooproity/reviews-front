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
  await Promise.all([first, second]).then((response) => {
    const [resOne, resTwo] = response;
    console.log("resOne : ", resOne);
    console.log("resTwo : ", resTwo);
  });
};

onLoad();
