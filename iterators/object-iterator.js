const object = { a: 1, b: 2, c: 3 };

// iterable > iterator
object[Symbol.iterator] = function () {
  let count = 0;
  const keys = Object.keys(this);

  return {
    next() {
      const key = keys[count];
      count += 1;

      return {
        done: count > keys.length,
        value: { [key]: object[key] },
      };
    },
  };
};

for (let value of object) {
  console.log(value);
}
