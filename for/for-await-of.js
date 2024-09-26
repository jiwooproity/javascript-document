const getPromise = require("../fetch/get-promise");

function* generator() {
  yield 1;
  yield getPromise(2, 1);
}

(async () => {
  for await (let value of generator()) {
    console.log(value); // 1 | 2
  }

  console.log("123");
})();
