//Time complexity - O(nlogn)
//Space complexity - O(1)

const binarySearch = function (arr, el) {
  arr.sort((a, b) => a - b);
  console.log(arr);
  let start = 0,
    end = arr.length - 1;
  let mid;
  while (end - start > 0) {
    mid = Math.floor((start + end) / 2);
    console.log(`mid = ${mid}, arr[mid] = ${arr[mid]} `);
    if (arr[mid] === el) return true;
    else if (arr[mid] < el) start = mid + 1;
    else end = mid - 1;
    console.log(`start =${start}, end = ${end}`);
  }
  if (arr[start] === el) return true;
  if (arr[end] === el) return true;
  return false;
};

console.log(binarySearch([1, 3, 2, 5, 3, 7, 8, 6, 5], 5));
// console.log(binarySearch([1, 2, 3, 5, 6, 9], 2));
