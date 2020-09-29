// Lucas

function adjacentElements(array) {
    // parse through array, at each element multiply with next. compare with next pair, set larger const omparison to the max product.
    let max = 0 
    for(let i =0; i < array.length; i++) {
       if (array[i] * array[i + 1] > max) {
         max = array[i] * array[i + 1] 
       }
    }
    return max 
  }
adjacentElements([9,9,9,9,9,1]);