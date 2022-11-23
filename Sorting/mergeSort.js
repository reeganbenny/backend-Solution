//TC = O(nlogn)
//SC = O(n)

const merge = (arr, left, mid, right) => {
  let n1 = mid - left + 1;
  let n2 = right - mid;

  let leftArr = new Array(n1);
  let rightArr = new Array(n2);
  for (let i = left, j = 0; j < n1; i++, j++) leftArr[j] = arr[i];
  for (let i = mid + 1, j = 0; j < n2; i++, j++) rightArr[j] = arr[i];
  console.log("left Arr", leftArr);
  console.log("right Arr", rightArr);

  let i = 0,
    j = 0,
    k = left;
  console.log("before", arr);
  while (i < n1 && j < n2) {
    if (leftArr[i] < rightArr[j]) arr[k] = leftArr[i++];
    else if (leftArr[i] > rightArr[j]) arr[k] = rightArr[j++];
    else {
      arr[k] = leftArr[i++];
      k++;
      arr[k] = rightArr[j++];
    }
    k++;
  }
  while (i < n1) arr[k++] = leftArr[i++];
  while (j < n2) arr[k++] = rightArr[j++];
  console.log("after", arr);
};

const mergeSort = (arr, left, right) => {
  if (left >= right) {
    return;
  }
  let mid = left + Math.floor((right - left) / 2);
  //   console.log(left, " ", right, " ", mid);
  mergeSort(arr, left, mid);
  mergeSort(arr, mid + 1, right);
  merge(arr, left, mid, right);
};
let arr = [13, 12, 11, 7, 6, 5];
mergeSort(arr, 0, arr.length - 1);
console.log(arr);
