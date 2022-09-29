//Time complexity - O(n)
//Space complexity - O(1)
function linearSearch(arr, el){
    for(let i=0;i<arr.length;i++){
        if(arr[i] === el){
            return true;
        }
    }
    return false;
}

console.log(linearSearch([1,5,3,2,4,8,10,-2], 5));
console.log(linearSearch([1,5,3,2,4,8,10,-2], 0));