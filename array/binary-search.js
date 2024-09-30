const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function binarySearch(arr, num) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);

    if (arr[middle] < num) {
      start = middle + 1;
    } else if (arr[middle] === num) {
      return { [middle]: arr[middle] };
    } else {
      end = middle - 1;
    }
  }

  return 0;
}

console.log(binarySearch(array, 10));
