const timer = (second) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`timer: ${second}, success`);
    }, second * 1000);
  });
};

const promiseArr = [() => timer(1), () => timer(3), () => timer(2)];

Promise.race(promiseArr.map((arr) => arr())).then((result) => {
  console.log(result);
});
