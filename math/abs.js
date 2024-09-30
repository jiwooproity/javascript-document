function different(first, second) {
  return Math.abs(first - second);
}

(() => {
  const diff = different(1, 3);
  console.log(diff); // 3 - 1의 절대 값: 2
})();
