const timer = (second) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (second > 2) {
        resolve("success");
      } else {
        reject("failed");
      }
    }, second * 1000);
  });
};

const promiseArr = [() => timer(3), () => timer(1), () => timer(2)];

Promise.allSettled(promiseArr.map((arr) => arr())).then((result) => {
  console.log(result);
});
