const reverseString = function(string) {

    const new_array = []; 
    for(var i=string.length-1; i>=0; i--)
    {
        var array = string[i];
        new_array.push(string[i]);
        //console.log(array);
    }; 
    return new_array.join('')
};

// Do not edit below this line
module.exports = reverseString;
