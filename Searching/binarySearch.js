//Time complexity - O(nlogn)
//Space complexity - O(1)

const binarySearch = function(arr, el){
    arr.sort((a,b) => a-b);
    console.log(arr);
    let start = 0, end = arr.length-1;
    let mid;
    while(end-start > 0){
        mid = Math.floor((start + end)/2);
        console.log(`mid = ${mid}, arr[mid] = ${arr[mid]} `)
        if(arr[mid] === el)return true;
        if(arr[mid] < el)end = mid-1;
        if(arr[mid] > el)start = mid+1;
        console.log(`start =${start}, end = ${end}`);
    }
    return false;
}



// console.log(binarySearch([1,3,2,5,3,7,8,6,5], 4));
console.log(binarySearch([1,3,2,5,3,7,8,6,5], 5));