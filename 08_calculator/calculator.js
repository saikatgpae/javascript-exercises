const add = function(a,b) {
	return a+b
};

const subtract = function(a,b) {
	return a-b
};

const sum = function(arr) {
	tot = 0;
  if(arr.length == 0){
    return 0;
  }else{
    arr.forEach(element => {
      tot +=element
    });
    return tot;
  }
};

const multiply = function(arr) {
  mul = 1;
  arr.forEach(ele =>{
    mul *= ele;
  });
  return mul;
};

const power = function(a,b) {
	return a**b;
};

const factorial = function(a) {
	fac = 1;
  if(a == 0){
    return 1;
  }else{
    for(i=1; i<=a; i++){
      fac *= i;
    }
    return fac;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
