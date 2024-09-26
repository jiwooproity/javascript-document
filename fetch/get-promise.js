function getPromise(value, second) {
  return new Promise((resolve) => setTimeout(() => resolve(value), second * 1000));
}

module.exports = getPromise;
