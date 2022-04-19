const fibonacci = function(x) {
    var arr = [1,1];
    var n = parseInt(x)
    if(n<0){
        return "OOPS";
    }else{
        for(let i=1; i<=n; i++){
            let s = arr[i] + arr[i-1]
            arr.push(s)
        }
    return arr[n-1];
    }
};

// Do not edit below this line
module.exports = fibonacci;
