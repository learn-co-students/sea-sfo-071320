// Janu

const longestCommonPrefix = function(strs) {
  let idx = 1
  let obj = {}
  let longestWord = strs.sort((a,b)=> a.length - b.length)[strs.length-1]
  
  while(idx < longestWord.length){
  
    strs.forEach(word => {
      for(let i=0; i<strs.length; i++){
        if(word.slice(0,[idx]) === strs[i].slice(0,[idx]))
        {
          if(obj[word.slice(0,[idx])]){
            !obj[word.slice(0,[idx])].includes(strs[i]) && obj[word.slice(0,[idx])].push(strs[i])
          } else {
            obj[word.slice(0,[idx])] = []
            !obj[word.slice(0,[idx])].includes(word) && obj[word.slice(0,[idx])].push(word)
            !obj[word.slice(0,[idx])].includes(strs[i]) && obj[word.slice(0,[idx])].push(strs[i])
          }
        }
      }
    })
    idx++
  }
  let keyCount = 1 
  let wordCount = 0
  let finalKV = ''
  for (const [key, value] of Object.entries(obj)){
    if(key.length > keyCount ){
      if (value.length >= wordCount){
        keyCount = key.length
        wordCount = value.length 
        if(keyCount > 1 && wordCount > 1){
          finalKV = key
        }
      }
    }
  }
  return finalKV 
};


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