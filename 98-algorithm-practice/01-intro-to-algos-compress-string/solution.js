// Implement a method to perform basic string compression using the counts of repeated characters. For example, the string `aabcccccaaa` would become `a2b1c5a3`. You can assume the string has only uppercase and lowercase letters (a-z).

function compressString(str) {
    //  iterate through the string, i'll use a for loop
    // need to return a new string with different info in it
    let finalForm = ''
    let count = 1
    for (let i = 0; i < str.length; i++) {
        let current = str[i]
        if(current === str[i+1]){
            count += 1
        }
        else {
            finalForm += `${current}${count}`
            count = 1
        }
    }
    return finalForm.length > 1 ? finalForm : "Invalid Input"
}


console.log(compressString(""))
    // => a2b1c5a3


// compressString('accesse');
// compressString('aabbcc');