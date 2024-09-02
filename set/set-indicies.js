const array = [0, 1, 2, 3, 4, 5];
const indicies = [0, 2, 2, 4];

const result = [];

// 인덱스 요소들 꺼내오기
for (let index of indicies) {
  result.push(array[index]);
}

// 꺼내온 요소들 제거
const set = new Set(indicies.sort((a, b) => b - a));

for (let index of set) {
  array.splice(index, 1);
}

console.log(array); // [1, 3, 5]
console.log(result); // [0, 2, 2, 4]
