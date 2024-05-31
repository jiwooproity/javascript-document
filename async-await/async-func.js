const data = require("./data.json");

const timeout = (second) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (second > 1) {
        reject("Failed!");
      } else {
        resolve(data);
      }
    }, second * 1000);
  });
};

const load = async () => {
  try {
    const message = await timeout(1);
    console.log(message); // Done!
  } catch (e) {
    console.log(e); // Failed!
  }
};

load();
