//TC = O(n^2)
//SC = O(1)

function swap(arr, left, right){
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
}

function bubbleSort(arr){
    let n = arr.length-1;
    for(let i = 0; i< n; i++){
        for(let j=0;j< n - i; j++){
            if(arr[j]>arr[j+1]){
                swap(arr, j , j+1);
            }
        }
    }
}

let arr = [1,10,2,9,6,3,5,4,20,11,15,3,13,18,19,-10];
bubbleSort(arr);
console.log(arr);
