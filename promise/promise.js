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

timer(3)
  .then((result) => {
    console.log(`This result is ${result}`);
  })
  .catch((result) => {
    console.log(`This result is ${result}`);
  });

timer(1)
  .then((result) => {
    console.log(`This result is ${result}`);
  })
  .catch((result) => {
    console.log(`This result is ${result}`);
  });
