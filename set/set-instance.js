const array = [2, 3, 1, 1, 2, 5, 6, 7, 4];

(() => {
  const set = new Set(array);
  const newArray = Array.from(set);
  console.log(newArray); // [2, 3, 1, 5, 6, 7, 4]
})();
