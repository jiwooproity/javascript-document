const timer = (second) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("success");
    }, second * 1000);
  });
};

const promiseArr = [() => timer(1), () => timer(3), () => timer(2)];

Promise.all(promiseArr.map((arr) => arr())).then((results) => {
  console.log(results);
});
