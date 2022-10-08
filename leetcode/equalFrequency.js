var equalFrequency = function(word){
    let mapWord = new Map();
    for(let i = 0; i < word.length;i++){
        mapWord.has(word[i])? mapWord.set(word[i],mapWord.get(word[i])+1): mapWord.set(word[i], 1);
    }
    let keys = [...mapWord.keys()];
    for(let i=0;i<keys.length;i++){
        let word = new Map(mapWord);
        let val = word.get(keys[i]);
        val--;
        if(val === 0) word.delete(keys[i]);
        else word.set(keys[i], val);
        let valueSet = new Set(word.values());
        if(valueSet.size === 1)return true;
    }
    return false;
}

console.log(equalFrequency("aab"));




// var equalFrequency = function(word) {
//     const objMap={}
//     for(let i=0;i<word.length;i++){
//         objMap[word[i]]=objMap[word[i]]===undefined?1:++objMap[word[i]];
//     }
//     const keys = Object.keys(objMap);

//     for(let i=0;i<keys.length;i++){
//         const obj={...objMap}
//         obj[keys[i]] = obj[keys[i]]-1;
//         if(obj[keys[i]]===0){
//             delete obj[keys[i]];
//         }
//         const values = Object.values(obj)
//         const mySet1 = new Set(values);
//         if(mySet1.size===1) return true;
//     }
//     return false;
// };

// console.log(equalFrequency("aazz"));