const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      name: "So Ji Woo",
      job: "programmar",
      age: 24,
    });
  }, 500);
});

const onLoad = async () => {
  const data = await promise;

  for (let key in data) {
    console.log(`${key} : ${data[key]}`);
  }
};

onLoad();

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      name: "data",
    });
  }, 500);
});

const onLoadName = async () => {
  const { name } = await promise2;

  console.log(`He's name ${name}`);
};

onLoadName();
