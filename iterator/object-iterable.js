const iterable = {
  from: 1,
  to: 5,
  [Symbol.iterator]() {
    return {
      from: this.from,
      to: this.to,

      next() {
        while (this.from <= this.to) {
          return { value: this.from++, done: false };
        }

        return { value: undefined, done: true };
      },
    };
  },
};

for (let n of iterable) {
  console.log(n);
}
