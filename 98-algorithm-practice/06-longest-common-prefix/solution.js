// Janu

function longestCommonPrefix(arr){

}


// nathan
function longestCommonPrefix(strs) {
  if (!strs.length) return '';
for(i=0; i < strs.length; i++) {
   for (let str of strs) {
     if (str[i] !== strs[0][i]) {return str.slice(0, i)}
     }
    }
    return strs[0]
};


// Alec

function longestCommonPrefix(arr) {
    let prefix = '';
    let go = true;
    let matches = false;
    for (let i = 0; i < arr[0].length; i++) {
      if (!go) break;
      matches = false;
      for (const string of arr) {
        if (string[i] !== arr[0][i]) {
          matches = false;
          go = false;
          break;
        } else {
          matches = true;
        }
      }
      if (matches) prefix += arr[0][i];
    }
    return prefix;
  }
  const test1 = longestCommonPrefix(['flower', 'flow', 'flight']);
  // => "fl"
  const test2 = longestCommonPrefix(['dog', 'racecar', 'car']);
  // => ""
  const test3 = longestCommonPrefix(['Hal', 'Halented', 'Hallucinogen']);
  // => "Hal"
  console.log(test1);
  console.log(test2);
  console.log(test3);