const palindromes = function (string) {
    reversedString = string.split('').reverse().join('');
    if(string === reversedString){
        return true
    }else{
        return false
    }

};
/*
var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

if(format.test(string)){
  return true;
} else {
  return false;
}
*/
// Do not edit below this line
module.exports = palindromes;
