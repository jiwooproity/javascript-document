const array = [1, 2, 3, 4];

const get = array.forEach((arr) => ({
  number: arr,
}));

console.log(get); // undefined

// ----------------------------

array.forEach((arr) => {
  console.log(arr);
}); // 1, 2, 3, 4
