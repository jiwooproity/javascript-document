function nearNumber(array, number) {
  const sorted = array.sort((a, b) => a - b);
  const diff = sorted.map((sort) => Math.abs(sort - number));
  return array[diff.indexOf(Math.min(...diff))];
}

(() => {
  const array = [1, 30, 6];
  const number = 27;

  const result = nearNumber(array, number);
  console.log(result);
})();
