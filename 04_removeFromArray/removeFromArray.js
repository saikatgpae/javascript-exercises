const removeFromArray = function(whole_array){

    var it = whole_array.splice(0); // clear + create iterator
    var unwanted = Array.prototype.slice.call(arguments, 1);
 

    for (var i = 0; i < it.length; i++) {
        if (unwanted.indexOf(it[i]) < 0) {
            whole_array.push(it[i]);
        }
    } return whole_array;
    
};

// Do not edit below this line
module.exports = removeFromArray;
