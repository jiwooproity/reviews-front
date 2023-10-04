const promise = new Promise((resolve, reject) => {
  const name = "sojiwoo";
  const job = "programmer";
  const age = 24;
  const objectTypes = {
    name: typeof name,
    job: typeof job,
    age: typeof age,
  };

  setTimeout(() => {
    resolve({
      name,
      job,
      age,
      types: objectTypes,
    });
  }, 1500);
});

const onLoad = async () => {
  const { name, job, age, types } = await promise;

  console.log({
    name,
    job,
    age,
    types,
  });
};

onLoad();
