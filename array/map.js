const array = [1, 2, 3, 4];

const result = array.map((arr) => {
  console.log(arr); // 1, 2, 3, 4

  return {
    number: arr,
  };
});

console.log(result);
// [{ number: 1 }, { number: 2 }, { number: 3 }, { number: 4 }];
