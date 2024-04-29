const createGenerator = function* () {
  let i = 0;

  while (i < 10) {
    yield i++;
  }
};

const generator = createGenerator();

// iterator 객체이면서 ..
console.log(generator.next());

// iterable 객체이다 ..
for (let n of generator) {
  console.log(n);
}
