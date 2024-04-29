const createGenerator = function* () {
  let i = 0;

  while (i < 10) {
    yield i++;
  }

  return i;
};

const generator = createGenerator();

for (let num of generator) {
  console.log(num);
}
