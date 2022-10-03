//arr1 => size of m
//arr2 => size of n
//Time complexity = O(m) => if m > n else O(n)
//Space complexity = O(1) => here we are considering the space complexity of function 

function merge(arr1, arr2, arr){
    let l1 = arr1.length;
    let l2 = arr2.length;
    let i = 0, j = 0, k = 0;
    while(i< l1 && j < l2){
        if(arr1[i] < arr2[j]){
            arr[k] = arr1[i];
            k++;
            i++;
        }
        if(arr1[i] > arr2[j]){
            arr[k] = arr2[j];
            j++;
            k++;
        }
        if(arr1[i] === arr2[j]){
            arr[k] = arr1[i];
            k++;
            i++;
            arr[k] = arr2[j];
            k++;
            j++;
        }
    }
    
    while(i < l1){
        arr[k] = arr1[i];
        i++;
        k++;
    }
    while(j < l2){
        arr[k] = arr2[j];
        j++;
        k++;
    }
}

let a = [];
merge([1,4,7,9], [10],a);
console.log(a);