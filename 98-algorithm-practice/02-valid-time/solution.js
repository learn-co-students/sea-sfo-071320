// Danira

const timeValid = (string) => {
    if (string.length === 5) {
        let s = string.split(':')
        let front = +s[0]
        let back = +s[1]
        if(front > 0 && front < 24 && back <= 59 && back > 0){
            return true
        } else {
            return false
        }
    }else {
        return false
    }
}
// let string = '13:58'
// let string = '25:51'
let string = '02:76'
console.log(timeValid(string))