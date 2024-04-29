const object = { a: 1, b: 2, c: 3 };

object[Symbol.iterator] = function* () {
  for (const key in object) {
    yield { [key]: object[key] };
  }
};

for (let value of object) {
  console.log(value);
}
