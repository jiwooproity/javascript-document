const object = {
  name: "John",
  age: 20,
};

for (let key in array) {
  console.log(key); // "name" | "age"
}

// The for ... in can't get key of the array.
