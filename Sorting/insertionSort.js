// TC = O(n^2)
// SC = O(1)
function insertionSort(arr){
    let n = arr.length-1;
    let current;
    for(let i = 0; i <=  n; i++){
        current = arr[i];
        j = i-1;
        while(j > -1 && current < arr[j]){
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = current;
    }
}

let arr = [1,10,2,9,6,3,5,4,20,11,15,3,13,18,19,-10];
insertionSort(arr);
console.log(arr);