// complete the given function

function palindrome(str){
let start = 0
let end = str.length - 1
let result  = true 

while (start < end) {
    if (str[start].toLowerCase() !== start[end].toLowerCase()){
        result = false
    }
    start++
    end--
}

}
module.exports = palindrome
