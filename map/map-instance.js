const array = [
  { name: "james", age: 18 },
  { name: "john", age: 20 },
  { name: "yui", age: 12 },
  { name: "tui", age: 27 },
];

(() => {
  const map = new Map();

  const setAge = (arr) => {
    map.set(arr.name, arr.age);
  };

  const searchAge = (name) => {
    return map.get(name);
  };

  array.forEach(setAge);

  const result = searchAge("yui");
  console.log(result); // 12
})();
