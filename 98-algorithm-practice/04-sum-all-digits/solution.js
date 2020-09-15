function sumDigits(num){
    // options we can think of:
    // turn this into an array of strings, maybe, for-loop through it and sum them as we go along. 
    // use .split or something
    // maybe cut the string in half

    // If you are given a particular data type, such as an integer, and both the *input* and the *output* of the algorithm is the same data type, it is considered good form to keep it as the same data type all the way through the algortihm (i.e. don't change it into a string or an array if you don't absolutely have to). 
    // With that in mind, we can use MODULO instead!
    // modulo returns the remainder of dividing one number by another. 
    // For example: 
        // 6%4 = 2
        // 25%10 = 5 (ten can go into 25 twice, with 5 left over.)

    let sum = 0
    while(num > 0){
        // grab the final digit on the end of the integer ↓↓
        let temp = num%10

        // add that digit to our sum ↓↓
        sum += temp

        // remove the final digit from the integer ↓↓
        num = Math.floor(num/10)
        // THIS WOULD ALSO WORK: num = (num-temp)/10
    }

    return sum
}

console.log(sumDigits(25))
console.log(sumDigits(66))
console.log(sumDigits(9385))