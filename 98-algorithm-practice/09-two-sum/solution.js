// Brad

function bradTwoSum(array, target) {
    for (let i = 0; i < array.length; i++) {
        let result = target - array[i]
        indexPosition = array.indexOf(result)
        if (array[indexPosition] + array[i] === target) {
            return (console.log([indexPosition, i]))
        }
    }
}
twoSum([1, 7, 45, 19, 4, 98], 143);
// while
// start on first index, +1 of the index and compare result to target
//if result === target
//return indexOf each element
// for (let x = i+1; x < array.length; x++){
//       let firstElement = array[i]
//       let secondElement = array[x]
//       let resultToCompare = firstElement + secondElement
//       console.log(firstElement, secondElement)
//           console.log(resultToCompare, "result")
//     if (resultToCompare === target){
//       return ( console.log([i, i+1]) )
//     }
//     }

//   Alec 

// Hash map solution
function alecTwoSum(arr, tar) {
    const map = {};
    for (let i = 0; i < arr.length; i++) {
        num = arr[i];
        if (map[num]) {
            if (map[num][0] + num === tar) {
                return [map[num][1], i];
            }
        }
        map[tar - num] = [num, i];
    }
    return "No solution found.";
}
console.log(twoSum([1, 5, 9, 2, 15, 10], 11));
// => [2, 3]; second result would be [0, 5]
console.log(twoSum([1, 7, 45, 19, 4, 98], 143));
  // => [2, 5]